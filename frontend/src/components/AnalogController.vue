<template>
  <div class='controller center' ref='box'>
    <div class='stick' ref='stick'></div>
  </div>
</template>

<script>
export default {
  name: "AnalogController",
  props: ['size', 'moveRobot'],

  // Initialize
  mounted(){
    // Creates event listeners for the controller stick
    if(this.isPhone()){
      this.$refs.stick.addEventListener("touchstart", this.startProcess);
      this.$refs.stick.addEventListener("touchend", this.resetProcess);
    }else{
      this.$refs.stick.addEventListener("mousedown", this.startProcess);
      this.$refs.stick.addEventListener("mouseup", this.resetProcess);
    }
    this.$refs.stick.addEventListener("pointerout", this.resetProcess);
    this.$refs.stick.addEventListener("pointermove", this.pointerMove);

    this.middle = this.size / 2;
    this.$refs.box.style.width = `${this.size}px`;
    this.$refs.box.style.height = `${this.size}px`;
    this.setStickPos(this.middle, this.middle, false);
  },

  beforeDestroy(){ 
    // Removes event listeners
    if(this.isPhone()){
      this.$refs.stick.removeEventListener("touchstart", this.startProcess);
      this.$refs.stick.removeEventListener("touchend", this.resetProcess);
    }else{
      this.$refs.stick.removeEventListener("mousedown", this.startProcess);
      this.$refs.stick.removeEventListener("mouseup", this.resetProcess);
    } 
    this.$refs.stick.removeEventListener("pointerout", this.resetProcess);
    this.$refs.stick.removeEventListener("pointermove", this.pointerMove);
  }, 

  methods:{
    // User holds LMB down, convert mouse movement into controller stick movement
    pointerMove(event){
      event.preventDefault();
      if(!this.controllerActive)return;
      this.setStickPos(this.stickX + event.movementX, this.stickY + event.movementY);
    },

    // Starts analog controller processs
    startProcess(){
      this.controllerActive = true;
      this.disableSelectText();
    },
    
    // Moves controller stick to the middle
    // Can be smooth movement or straight to the middle
    resetProcess(){
      if(!this.controllerActive)return;
      this.enableSelectText();
      this.controllerActive = false;
      const moveSize = 20;
      const dx = (this.middle - this.stickX) / moveSize;
      const dy = (this.middle - this.stickY) / moveSize;
      this.stickToDefaultPos(dx, dy);
      //this.setStickPos(this.middle, this.middle);
    },

    stickToDefaultPos(dx, dy){
      if(this.controllerActive)return;
      const dis = Math.hypot(this.stickX - this.middle, this.stickY - this.middle);
      if(dis < 10){
        this.setStickPos(this.middle, this.middle);
      }else{
        this.setStickPos(this.stickX + dx, this.stickY + dy);
        setTimeout(() => this.stickToDefaultPos(dx, dy), 50);
      }
    },
  
    // Sets controller stick position
    // update = false, when we just want to set stick position
    setStickPos(x, y, update = true){
      if(x < 0 || x > this.size || y < 0 || y > this.size)return;
      if(update)this.calculateMovement(x, y);
      this.stickX = x;
      this.stickY = y;
      this.$refs.stick.style.left = `calc(${x}px - 25px)`;
      this.$refs.stick.style.top = `calc(${y}px - 25px)`;
    },
    
    // Calculates movement speed from stick position
    calculateMovement(x, y){
      const turningAmount = ((x - this.middle) / this.middle);
      const directionAmount = -((y - this.middle) / this.middle) || 0; // -reverses value and "|| 0" is for avoiding -0 value
      this.moveRobot(directionAmount, turningAmount);
    },

    // When user controls analog stick, it can also start selecting text, this prevents it
    disableSelectText(){
      window.addEventListener('selectstart', this.selectStart);
    },

    enableSelectText(){
      window.removeEventListener('selectstart', this.selectStart);
    },

    selectStart(event){
      event.preventDefault()
    }
  },

  data(){
    return {
      stickX: 0,
      stickY: 0,
      controllerActive: false
    }
  }
}
</script>

<style scoped>
.controller{
  position: relative;
  border-radius: 5px;
  background: var(--primary);
}

.stick{
  touch-action: none;
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #828282;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
}

.stick:hover{
  cursor: pointer;
  box-shadow: 0 0 20px;
}
</style>