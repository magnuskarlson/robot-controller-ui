<template>
  <div>
    <div class='large'><BatteryIcon /> {{battery}}%</div>
    <div class='large'><SpeedometerIcon/> {{speed}}km/h</div>
  </div>
</template>

<script>
import 'vue-material-design-icons/styles.css';
import BatteryIcon from 'vue-material-design-icons/Battery.vue';
import SpeedometerIcon from 'vue-material-design-icons/Speedometer.vue';

export default {
  components: {
    BatteryIcon,
    SpeedometerIcon
  },
  mounted(){},
  methods:{},
  data(){
    return {
      battery: 0,
      speed: 0
    }
  }
}
</script>

<style>

</style>