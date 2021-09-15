<template>
  <div class='row'>
    <div class='c25 center'>
      <analog-controller :size='200' :moveRobot='moveRobot' />
    </div>
    <div class='c25'>
      <parameters ref='parameters' />
    </div>
    <div class='c50'>
      <telemetry :getTelemetry='getTelemetry' />
    </div>
  </div>
</template>

<script>
import AnalogController from '@/components/AnalogController.vue'
import Parameters from '@/components/Parameters.vue'
import Telemetry from '@/components/Telemetry.vue'
import SimpleJRPC from 'simple-jsonrpc-js';

export default {
  components: {AnalogController, Parameters, Telemetry},
  mounted(){
    const jrpc = new SimpleJRPC();
    const socket = new WebSocket("ws://localhost:8765");
    this.jrpc = jrpc;

    function subscribe(key, cb) {
      jrpc.on(key, ["value"], (value) => cb(value));
      return jrpc.call("subscribe", [key])
    }

    jrpc.toStream = (_msg) => {
      socket.send(_msg);
    };

    socket.onmessage = (event) => {
        jrpc.messageHandler(event.data);
    };

    socket.onerror = (error) => {
      console.error("Error: " + error.message);
    };

    window.beforeunload = this.leaving;

    // Updates battery and speed variables
    const parameters = this.$refs.parameters;
    socket.onopen = function() {
      console.log('Connected to WebSocket!');

      subscribe('telemetry.battery_volt', res => {
        parameters.battery = res;
      });

      subscribe('telemetry.speed', res => {
        parameters.speed = res;
      });
    };
  },

  methods:{
    // Called by AnalogController
    moveRobot(x, y){
      if(!this.jrpc) return;
      this.jrpc.call("set_x", [x]);
      this.jrpc.call("set_y", [y])
    },

    // Called by Telemetry
    getTelemetry(){
      if(!this.jrpc) return;
      return this.jrpc.call("get_telemetry");
    },

    unsubscribe(key) {
      if(!this.jrpc) return;
      this.jrpc.off(key);
      return this.jrpc.call("unsubscribe", [key]);
    },

    leaving(){
      this.unsubscribe('telemetry.battery_volt');
      this.unsubscribe('telemetry.speed');
    }
  },

  data(){
    return {
      jrpc: undefined
    }
  }
}
</script>

<style>

</style>