<template>
<div class="chapter">
    <div class="productShow">
        
        <!-- FRONT -->
        <img v-if="'front' == curProduct" src="../../../src/img/front.png">
        <div v-if="'front' == curProduct" class="tooltip pd_rubber productDetails">
            <div class="pd_detail">+</div>
            <span v-if="this.$store.state.lang" class="tooltiptext">Gummiband</span>
            <span v-if="!this.$store.state.lang" class="tooltiptext">Rubberband</span>
        </div>

        <div v-if="'front' == curProduct" class="tooltip pd_stylus productDetails">
            <div class="pd_detail">+</div>
            <span v-if="this.$store.state.lang" class="tooltiptext">Druckempfindlicher Stylus</span>
            <span v-if="!this.$store.state.lang" class="tooltiptext">Pressure-Sensitive Stylus</span>
        </div>

        <div v-if="'front' == curProduct" class="tooltip pd_cover productDetails">
            <div class="pd_detail">+</div>
            <span v-if="this.$store.state.lang" class="tooltiptext">Austauschbares Cover</span>
            <span v-if="!this.$store.state.lang" class="tooltiptext">Changeable Cover</span>
        </div>


        <!-- INSIDE -->
        <img v-if="'inside' == curProduct" src="../../../src/img/inside.png">
        <div v-if="'inside' == curProduct" class="tooltip pd_frontcam productDetails">
            <div class="pd_detail">+</div>
            <span v-if="this.$store.state.lang" class="tooltiptext">Kamera</span>
            <span v-if="!this.$store.state.lang" class="tooltiptext">Camera</span>
        </div>

        <div v-if="'inside' == curProduct" class="tooltip pd_touch productDetails">
            <div class="pd_detail">+</div>
            <span v-if="this.$store.state.lang" class="tooltiptext">LCD Multi-Touch Display</span>
            <span v-if="!this.$store.state.lang" class="tooltiptext">LCD Multi-Touch Display</span>
        </div>

        <div v-if="'inside' == curProduct" class="tooltip pd_mic productDetails">
            <div class="pd_detail">+</div>
            <span v-if="this.$store.state.lang" class="tooltiptext">Mikrofon</span>
            <span v-if="!this.$store.state.lang" class="tooltiptext">Microphone</span>
        </div>

        <div v-if="'inside' == curProduct" class="tooltip pd_laut productDetails">
            <div class="pd_detail">+</div>
            <span v-if="this.$store.state.lang" class="tooltiptext">Lautsprecher</span>
            <span v-if="!this.$store.state.lang" class="tooltiptext">Speakers</span>
        </div>

        <div v-if="'inside' == curProduct" class="tooltip pd_sd productDetails">
            <div class="pd_detail">+</div>
            <span v-if="this.$store.state.lang" class="tooltiptext">2 SD-Kartenslots</span>
            <span v-if="!this.$store.state.lang" class="tooltiptext">2 SD card slots</span>
        </div>

        <!-- BACK -->
        <img v-if="'back' == curProduct" src="../../../src/img/back.png">
        <div v-if="'back' == curProduct" class="tooltip pd_fingerprint productDetails">
            <div class="pd_detail">+</div>
            <span v-if="this.$store.state.lang" class="tooltiptext">Fingerabdruck Sensor</span>
            <span v-if="!this.$store.state.lang" class="tooltiptext">Fingerprint Sensor</span>
        </div>

        <div v-if="'back' == curProduct" class="tooltip pd_backcam productDetails">
            <div class="pd_detail">+</div>
            <span v-if="this.$store.state.lang" class="tooltiptext">Kamera</span>
            <span v-if="!this.$store.state.lang" class="tooltiptext">Camera</span>
        </div>

    </div>

    <div class="specControls">
        <div v-if="this.$store.state.lang" :class="['pd_switch firstswitch', { pd_active : 'front' === curProduct }]" @click="switchProduct('front')">Vorderseite</div>
        <div v-if="this.$store.state.lang" :class="['pd_switch middleswitch', { pd_active : 'inside' === curProduct }]" @click="switchProduct('inside')">Innen</div>
        <div v-if="this.$store.state.lang" :class="['pd_switch lastswitch', { pd_active : 'back' === curProduct }]" @click="switchProduct('back')">Rückseite</div>
        
        <div v-if="!this.$store.state.lang" :class="['pd_switch firstswitch', { pd_active : 'front' === curProduct }]" @click="switchProduct('front')">Front</div>
        <div v-if="!this.$store.state.lang" :class="['pd_switch middleswitch', { pd_active : 'inside' === curProduct }]" @click="switchProduct('inside')">Inside</div>
        <div v-if="!this.$store.state.lang" :class="['pd_switch lastswitch', { pd_active : 'back' === curProduct }]" @click="switchProduct('back')">Back</div>
    </div>   
</div>
</template>

<script>
// Import

export default {
  props: [],
  data(){
      return{
        curProduct: 'front',
        extraProd: false,
      }
  },
  mounted() {
        var newState = {
              name: 'specs',
              sliderState: this.curProduct
        }
        this.$store.commit('changeSliderState', newState)
  },
  created () {
  },
  destroyed(){

  },components: {

  },
  methods:{
      switchProduct(n){
          this.curProduct = n;

          var newState = {
              name: 'specs',
              sliderState: n
          }
          this.$store.commit('changeSliderState',newState)
      }
  }
}
</script>

<style scoped>
/* Tooltip container */
.tooltip {
    display: inline-block;
    position: absolute;
    top: 0;
}

/* Tooltip text */
.tooltip .tooltiptext {
    opacity: 0;
    width: 160px;
    bottom: 100%;
    left: 50%; 
    margin-left: -66px; 
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
 
    position: absolute;
    z-index: 1;

    margin-bottom: 10px;
    transition: all 0.5s ease;
    line-height: 22px;
    padding: 10px;
}

.tooltip .tooltiptext::after {
    content: " ";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.5) transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
    opacity: 1;
    transition: all 0.5s ease;
}

/* Spec Controls */

.chapter {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}

.specControls {
    position: absolute;
    background: #e0e0e000;
    display: flex;
    border-radius: 310px;
    border: 3px solid #66bbb1;
    margin-top: 23vw;
    color: #66bbb1;
}

.pd_switch {
    padding: 5px 20px 5px 20px;
    cursor: pointer;
}

.firstswitch.pd_active{
    background: #66bbb1;
    color: #fff;
    border-radius: 300px 0px 0px 300px;
}
.middleswitch.pd_active{
    background: #66bbb1;
    color: #fff;
}
.lastswitch.pd_active{
    background: #66bbb1;
    color: #fff;
    border-radius: 0px 300px 300px 0px;
}

/* Details */
.pd_detail {
    border: 5px solid #fff;
    height: 35px;
    width: 35px;
    border-radius: 100px;
    position: absolute;
    background: rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
}

.pd_rubber {
    top: 6vw;
    right: 16.7vw;
}

.pd_stylus {
    margin-top: 30vw;
    right: 10.1vw;
}
.pd_cover {
    margin-top: 21vw;
    right: 26vw;
}
.pd_mic {
    margin-top: 37vw;
    right: 20vw;
}
.pd_touch {
    margin-top: 19vw;
    right: 21vw;
}
.pd_frontcam {
    margin-top: 3.1vw;
    right: 20.8vw;
}
.pd_backcam {
    margin-top: 3.8vw;
    right: 23.4vw;
}
.pd_fingerprint {
    margin-top: 20.7vw;
    right: 23.55vw;
}

.pd_laut {
    margin-top: 38vw;
    right: 28vw;
}

.pd_sd {
    margin-top: 38vw;
    right: 12vw;
}

@media only screen and (orientation: portrait) {
    .specControls {
        margin-top: 40vw;
    }

.pd_rubber {
    top: 16vw;
    right: 42.2vw;
}

.pd_stylus {
    margin-top: 56vw;
    right: 30.4vw;
}
.pd_cover {
    margin-top: 33vw;
    right: 58vw;
}
.pd_mic {
    margin-top: 66vw;
    right: 49vw;
}
.pd_touch {
    margin-top: 34vw;
    right: 49vw;
}
.pd_frontcam {
    margin-top: 7.0vw;
    right: 49.1vw;
}
.pd_backcam {
    margin-top: 8vw;
    right: 53.7vw;
}
.pd_fingerprint {
    margin-top: 37.4vw;
    right: 53.9vw;
}


}
</style>

