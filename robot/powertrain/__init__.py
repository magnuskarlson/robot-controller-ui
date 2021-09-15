import abc
import asyncio
import logging
import time
import datetime
from functools import wraps
from enum import IntEnum

from cyrusbus import Bus

bus = Bus.get_or_create("robot")


class States(IntEnum):
    STOP = 1
    MOVE = 2


def validate_range(min=-1, max=1):
    def validator(f):
        @wraps(f)
        def wrapper(self, val):
            if min <= val <= max:
                return f(self, val)
            else:
                raise OverflowError("Must be in range {} to {}".format(min, max))
        return wrapper
    return validator


def publish_telemetry(f):
    @wraps(f)
    def wrapper(self, val):
        bus.publish("telemetry."+f.__name__, value=val)
        return f(self, val)
    return wrapper


class Telemetry:

    def __init__(self):
        self._x_ = 0.0
        self._y_ = 0.0
        self._speed_ = 0.0
        self._battery_volt_ = 0.0
        self._battery_amp_ = 0.0

    @property
    def x(self):
        return self._x_

    @x.setter
    @publish_telemetry
    @validate_range()
    def x(self, val):
        self._x_ = val

    @property
    def y(self):
        return self._y_

    @y.setter
    @publish_telemetry
    @validate_range()
    def y(self, val):
        self._y_ = val

    @property
    def speed(self):
        return self._speed_

    @speed.setter
    @publish_telemetry
    def speed(self, val):
        self._speed_ = val

    @property
    def battery_volt(self):
        return self._battery_volt_

    @battery_volt.setter
    @publish_telemetry
    def battery_volt(self, val):
        self._battery_volt_ = val

    @property
    def battery_amp(self):
        return self._battery_amp_

    @battery_amp.setter
    @publish_telemetry
    def battery_amp(self, val):
        self._battery_amp_ = val

import os

class PowertrainBase(abc.ABC):

    def __init__(self, step_freq=20, *, robot, telemetry_logs):
        self.logger = logging.getLogger(__name__ + "." + self.__class__.__name__)
        super(PowertrainBase, self).__init__()
        self.robot = robot
        self.telm = Telemetry()
        self.telemetry_logs = telemetry_logs
        self._step_sleep_ = 1.0/step_freq
        self._state_ = States.STOP

    async def loop(self):
        self.logger.info("Powertrain is running")
        log_content = 'battery_volt, battery_amp, speed\n'
        log_started = time.time()
        while True:
            self.step()

            # Telemetry logging folder is defined
            if self.telemetry_logs != None:
                # Telemetry data logging
                log_content += ', '.join([ str( getattr(self.telm, val) ) for val in ('battery_volt', 'battery_amp', 'speed')]) + '\n'

                # Measures time between last and current time
                if time.time() - log_started > 600:
                    log_started = time.time()
                    log_filename = str(datetime.datetime.now().strftime('%Y-%m-%d_%H-%M-%S')) + '.csv'
                    log_location = self.telemetry_logs + '/' + log_filename

                    f = open(log_location, 'w')
                    f.write(log_content)
                    f.close()

                    log_content = 'battery_volt, battery_amp, speed\n'
                    print(f'Telemetry data logged {log_filename}')

            await asyncio.sleep(self._step_sleep_)

    @abc.abstractmethod
    def step(self):
        """Run one step of powertrain loop"""
        pass
