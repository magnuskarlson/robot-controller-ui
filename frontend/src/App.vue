<template>
  <div class='main'>
    <div class='header'>
      <div class='con'>
        <div class='logo'>Robot Controller UI</div>
        <div class='navigation'>
          <div>Robot Controller</div>
        </div>
      </div>
    </div>
    <div class='content'>
      <robot/>
    </div>
    <div class='footer'>
      <div class='con'>Author Magnus Karlson</div>
    </div>
  </div>
</template>

<script>
import Robot from '@/components/Robot.vue'

export default {
  name: 'App',
  components: {Robot},
  data(){
    return {}
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Urbanist&display=swap');

:root{
  --primary: #2d4263;
  --white: #ededed;
}

body{
  margin: 0;
}

* {
  box-sizing: border-box;
  font-family: 'Urbanist', sans-serif;
}

/**MAIN PAGE COMPONENTS */
.main{
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--secondary);
}

.header, .footer{
  height: 50px;
  width: 100%;
  background: var(--primary);
  color: #ededed;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content{
  width: 1200px;
  min-height: calc(100vh - 100px);
  color: #262626;
  padding: 5px;
}

.con{
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
}

.logo{
  font-size: x-large;
}

.navigation{
  display: flex;
}

.navigation>div:not(:first-child){
  margin-left: 10px;
}

.navigation>div:hover{
  cursor: pointer;
  text-decoration: underline;
}

/**TEXT FONTS */
.large{
  font-size: large;
}
.h1{
  margin: 0;
}

/**CONTENT SIZING */
.row{
  display: flex;
  flex-wrap: wrap;
}
.c100, .c50, .c25{
  padding: 5px;
}
.c100{
  width: 100%;
}
.c50{
  width: 50%;
}
.c25{
  width: 25%;
}
.center{
  display: flex;
  justify-content: center;
}

/**FORMATS CONTAINER FOR PHONES */
@media only screen and (max-width: 1200px) {
  .con{
    width: 100%;
  }
  .content{
    width: 100%;
  }
  .c50, .c25{
    width: 100%;
  }
}

</style>
