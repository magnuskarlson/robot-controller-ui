<template>
  <div>
    <div class='box-head'>
      <div>Telemetry Information</div>
      <div class='box-head-button' @click='visible = !visible'>
        {{visible ? 'Hide' : 'Show'}}
      </div>
    </div>
    <div class='box-content' v-if='visible'>
      <div v-for='item in items' :key='item.id' class='box-content-line'>{{item}}</div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  props: ['getTelemetry'],
  watch:{
    async visible(){
      while(this.visible){
        const data = await this.getTelemetry();
        const dateTime = moment().format('MM/DD/YYYY hh:mm:ss');
        this.items.unshift(dateTime + ' ' + JSON.stringify(data));
        await this.sleep(1000);
      }
    }
  },

  methods:{
    sleep(t){
      return new Promise(s => setTimeout(s, t));
    }
  },

  data(){
    return {
      visible: false,
      items: []
    }
  }
}
</script>

<style>
.box-head{
  width: 100%;
  padding: 5px;
  background: var(--primary);
  color: var(--white);
  border-radius: 2px 2px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.box-content{
  height: 300px;
  border: 1px black;
  border-style: none solid solid solid;
  border-radius: 0 0 2px 2px;
  padding: 5px;
  font-size: small;
  overflow-y: scroll;
  word-break: break-all;
}

.box-content-line:not(:last-child){
  border: 1px rgb(209, 192, 192);
  border-style: none none solid none;
}

.box-head-button{
  font-size: small;
}

.box-head-button:hover{
  cursor: pointer;
  text-decoration: underline;
}
</style>