import os
import asyncio
import argparse
import logging

from .websocket import WebSocketServer
from .powertrain.fake import FakePowertrain as Powertrain


class Robot:
    """Main Robot instance that pulls all subsystems together"""

    def __init__(self, host, port, http_path, telemetry_logs):
        self.logger = logging.getLogger(__name__ + "." + self.__class__.__name__)
        self.loop = asyncio.get_event_loop()
        self.ws_server = WebSocketServer(host, port, http_path, robot=self)
        self.ws_server_task = None
        self.powertrain = Powertrain(robot=self, telemetry_logs=telemetry_logs) # Telemetry logging folder
        self.powertrain_task = None
        self.powertrain_task_retry = 3

    def start(self):
        """Start asyncio tasks"""
        self.ws_server_task = asyncio.ensure_future(self.ws_server.serve())
        self.ws_server_task.add_done_callback(self.ws_server_task_done)

        self.powertrain_task = asyncio.ensure_future(self.powertrain.loop())
        self.powertrain_task.add_done_callback(self.powertrain_task_done)

        self.loop.run_forever()

    def ws_server_task_done(self, task):
        """Cleanup after WebSocket server task has ended"""
        try:
            task.result()
        except Exception as e:
            self.logger.critical("WebSocket server task ended")
            self.logger.exception(e)
            self.loop.stop()

    def powertrain_task_done(self, task):
        """Cleanup after Powertrain task has ended"""
        try:
            task.result()
        except Exception as e:
            self.logger.critical("Powertrain task ended")
            self.logger.exception(e)
            self.loop.stop()


def robot_args():
    """Build arguments parser"""
    parser = argparse.ArgumentParser(
        prog=__name__,
        description="Python robot toy"
    )
    parser.add_argument(
        "--bind",
        default="localhost",
        help="WebSocket server bind address (default: localhost)"
    )
    parser.add_argument(
        "--port",
        default="8765",
        help="WebSocket server bind port (default: 8765)"
    )
    parser.add_argument(
        "--directory",
        default=None,
        help="WebSocket server http root (default: ./ui)"
    )
    parser.add_argument(
        "--log-level",
        default="info",
        help="Log level",
        type=str.upper,
        choices=['DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL']
    )
    # Telemetry data logging
    parser.add_argument(
        "--telemetry",
        default=None,
        help="Telemetry log folder"
    )
    return parser


def start():
    """CLI entry point"""
    args = robot_args().parse_args()

    logging.basicConfig(
        format="%(asctime)s %(name)-20.20s %(levelname)-4.4s %(message)s",
        handlers=[logging.StreamHandler()],
        level=getattr(logging, args.log_level))

    logging.getLogger('websockets').setLevel(logging.INFO)

    if args.directory is None:
        http_path = os.path.dirname(os.path.abspath(__file__))
        http_path = os.path.join(http_path, '..', 'ui')
        http_path = os.path.abspath(http_path)
    else:
        http_path = os.path.dirname(os.path.abspath(args.directory))
    r = Robot(host=args.bind, port=args.port, http_path=http_path, telemetry_logs=args.telemetry)
    r.start()
