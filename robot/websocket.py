import os
import json
import asyncio
import logging
from http import HTTPStatus
from socket import AddressFamily

from cyrusbus import Bus
import websockets
from jsonrpc import JSONRPCResponseManager, Dispatcher

bus = Bus.get_or_create("robot")


class ExceptionClientGone(Exception):
    pass


class RPC:
    def __init__(self, websocket, *, robot):
        self.logger = logging.getLogger(__name__ + "." + self.__class__.__name__)
        self.ws = websocket
        self.robot = robot
        self.subscriptions = set()
        self.dispatcher = Dispatcher()
        self.register_rpc()
        bus.subscribe("*", self.sub_cb)

    def __enter__(self):
        self.logger.info("Client connected %s %d", *self.ws.remote_address[:2])
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        """
        Websocket connection is gone, either closed or some exception occurred.
        """
        self.logger.info("Client gone %s %d", *self.ws.remote_address[:2])
        bus.unsubscribe("*", self.sub_cb)
        for key in set(self.subscriptions):
            self.unsubscribe(key)

    def sub_cb(self, bus, key, **kwargs):
        """Local pubsub bus on message callback"""
        if key in self.subscriptions:
            self.notification(key, params=kwargs)

    def notification(self, method, params=None):
        """Send a JSON-RPC notification message."""
        data = {'jsonrpc': '2.0', 'method': method}
        if params:
            data['params'] = params
        task = asyncio.ensure_future(self.ws.send(json.dumps(data)))
        task.add_done_callback(self._notification_done_)

    def _notification_done_(self, task):
        """Resolve any exceptions from """
        try:
            task.result()
        except Exception as e:
            self.logger.exception(e)

    def handle(self, message):
        """Hand incoming json string messages to RPC core and return results"""
        self.logger.debug("<- %s", message)
        resp = JSONRPCResponseManager.handle(message, self.dispatcher).json
        self.logger.debug("-> %s", resp)
        return resp

    def register_rpc(self):
        """Manually register all possible RPC calls"""
        self.dispatcher.add_method(self.ping)
        self.dispatcher.add_method(self.set_x)
        self.dispatcher.add_method(self.set_y)
        self.dispatcher.add_method(self.get_telemetry)
        self.dispatcher.add_method(self.subscribe)
        self.dispatcher.add_method(self.unsubscribe)
        self.dispatcher.add_method(self.get_subscriptions)

    def ping(self):
        """Simple ping-pong"""
        return "pong"

    def set_x(self, val):
        """Set robot forward moving speed"""
        self.robot.powertrain.telm.x = val

    def set_y(self, val):
        """Set robot turning angle"""
        self.robot.powertrain.telm.y = val

    def get_telemetry(self):
        """Get current telemetry values"""
        telm = {}
        for key in ("x", "y", "battery_volt", "speed"):
            telm[key] = getattr(self.robot.powertrain.telm, key)
        return telm

    def subscribe(self, key):
        """Subscribe to a key on the pusbsub bus"""
        self.subscriptions.add(key)

    def unsubscribe(self, key):
        """Unsubscribe key on the pusbsub bus"""
        self.subscriptions.remove(key)

    def get_subscriptions(self):
        """Get list of clients current subscriptions"""
        return list(self.subscriptions)


class WebSocketServer:
    MIME_TYPES = {
        "html": "text/html",
        "js": "text/javascript",
        "css": "text/css"
    }

    def __init__(self, host, port, http_path, *, robot):
        self.logger = logging.getLogger(__name__ + "." + self.__class__.__name__)
        self.http_path = http_path
        self.host = host
        self.port = port
        self.robot = robot
        self.server = None

    async def process_request(self, path, request_headers):
        """Serves a file when doing a GET request with a valid path."""

        if "Upgrade" in request_headers:
            return  # Probably a WebSocket connection

        if path == '/':
            path = '/index.html'

        response_headers = [
            ('Server', 'asyncio websocket server'),
            ('Connection', 'close'),
        ]
        full_path = os.path.realpath(os.path.join(self.http_path, path[1:]))

        # Validate the path
        if os.path.commonpath((self.http_path, full_path)) != self.http_path or \
                not os.path.exists(full_path) or not os.path.isfile(full_path):
            self.logger.info("HTTP GET %s 404 NOT FOUND", path)
            return HTTPStatus.NOT_FOUND, [], b'404 NOT FOUND'

        # Guess file content type
        extension = full_path.split(".")[-1]
        mime_type = self.MIME_TYPES.get(extension, "application/octet-stream")
        response_headers.append(('Content-Type', mime_type))

        body = open(full_path, 'rb').read()
        response_headers.append(('Content-Length', str(len(body))))
        self.logger.info("HTTP GET %s 200 OK", path)
        return HTTPStatus.OK, response_headers, body

    async def ws_handler(self, websocket, path):
        """Handle websocket connection"""
        with RPC(websocket, robot=self.robot) as rpc:
            async for message in websocket:
                resp = rpc.handle(message)
                await websocket.send(resp)

    async def serve(self):
        """Start websocket server"""
        self.logger.info("HTTP server root is '%s'", self.http_path)
        self.server = await websockets.serve(
            ws_handler=self.ws_handler,
            host=self.host,
            port=self.port,
            process_request=self.process_request
        )

        if not self.server.sockets:
            raise Exception("WebSocket not listening on any sockets")

        for socket in self.server.sockets:
            if socket.family == AddressFamily.AF_INET:  # IPv4
                self.logger.info("WebSocket server listening on http://%s:%s", *socket.getsockname())
            if socket.family == AddressFamily.AF_INET6:  # IPv6
                self.logger.info("WebSocket server listening on http://[%s]:%s", *socket.getsockname()[:2])

        return self.server
