import math
import time


from . import PowertrainBase


class FakePowertrain(PowertrainBase):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def step(self):
        self.telm.battery_volt = math.sin(time.monotonic())*0.1 + 3.7*2 - abs(self.telm.x)
        self.telm.battery_amp = math.sin(time.monotonic())*0.01 + 0.11 + abs(self.telm.x)
        self.telm.speed = abs(self.telm.x) * 2.5
