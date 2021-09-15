# Toy Tank

Engineers have written a poof of concept code to drive around with a
toy tank. Control UI for the tank is currently very raw, ugly and only allows
for driving the tank forward and backward with full speed.

## Task

Your main task is to create a much nicer UI for the user to use.

* It should use some modern javascript framework (ex Vue.js).
* It should be usable on a smartphone (responsive).
* It should have a virtual analog input stick for controlling the toy tank speed
    and angle.
* It should show current speed and battery level in a nicely formatted way.
* It should have a hidden engineering menu that shows all raw telemetry values.

Another nice to have side task would be to add a toy tank telemetry storage extension.

* Telemetry storage extension should write all the telemetry values to a
    `{datetime}.csv` file in a folder specified by commandline argument.
* It should create new file every 10 minutes.


## Code overview

Currently the high level overview of the code looks like this.

```text
   +-------------------+                     +--------------+
   |  Motors hardware  |                     |  User input  |
   +---------^---------+                     +------+-------+
             |                                      |
             |                                      |
             |                                      |
+------------+-----------+   WebSocket  +-----------v--------------+
| Python backend (robot) <--------------> Javascript frontend (ui) |
+------------------------+              +--------------------------+
```

### Backend


Python module `robot` setups a small WebSocket server on port `8765` that
accepts [JSON-RPC](https://www.jsonrpc.org/specification) call for getting and
setting values. WebSocket also exposes internal pubsub bus that can be used to
get live telemetry values. There is also a small HTTP server on the same port
that serves static files by default from `ui/` folder.

All the possible JSON-RPC calls are defined in `websocket.py` line 69
function `register_rpc`.

Telemetry values are published on a topic `telemetry.<name>` where `name` is
the telemetry value.

Powertrain represent motors, there is two implementations. One is fake for just
testing and another one is for controlling the real toy motors. By default the
fake implementation is used.

Robot acceleration is controlled by a rotated (y, x) acceleration vector in
Cartesian coordinate system.

```text
+--------------------------+
|    Forward X +1.0        |
|            ^             |
|            |             |
| Left       |       Right |
| <---------0.0---------->Y|
| -1.0       |         +1.0|
|            |             |
|            v             |
|   Backward   -1.0        |
+--------------------------+
```

### Frontend

Current javascript frontend is based on modern vanilla-js and uses ES6 modules.


# Setup

Backend is writen in Python 3 using the built in [asyncio](https://docs.python.org/3/library/asyncio.html)
library but also uses some external libraries.

## Linux

Make sure you have at least Python 3.6 installed.

You can check your current installed version with

    python3 --version

Environment setup goes like this:

    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt

And run the robot code with

    python -m robot

Debug log output can be enabled with

    python -m robot --log-level debug

Other options are shown with

    python -m robot --help

## Windows

Make sure you have the latest Python from https://www.python.org/ installed with
global [Python launcher](https://docs.python.org/3/using/windows.html#launcher)
option selected. You can re-run the installer to select that options.

You can list currently installed python versions with

    py --list

Default Python version is marked with `*`

Environment setup is done like this when using cmd.exe:

    py -m venv venv
    venv\Scripts\activate.bat
    pip install -r requirements.txt

And run the robot code with

    python -m robot

Debug log output can be enabled with

    python -m robot --log-level debug

Other options are shown with

    python -m robot --help
