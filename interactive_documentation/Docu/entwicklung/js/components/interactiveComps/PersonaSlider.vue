<template>
<div class="chapter">
    <div class="productShow">
        
        <!-- Happy -->
        <img v-if="'sad' == curProduct" src="../../../src/img/mel_sad.png">



        <!-- INSIDE -->
        <img v-if="'normal' == curProduct" src="../../../src/img/mel_normal.png">


        <!-- BACK -->
        <img v-if="'happy' == curProduct" src="../../../src/img/mel_happy.png">


    </div>

    <div class="specControls">
        <div v-if="this.$store.state.lang" :class="['pd_switch firstswitch', { pd_active : 'sad' === curProduct }]" @click="switchProduct('sad')">Schlechter Tag</div>
        <!-- <div v-if="this.$store.state.lang" :class="['pd_switch middleswitch', { pd_active : 'normal' === curProduct }]" @click="switchProduct('normal')">Melanie</div> -->
        <div v-if="this.$store.state.lang" :class="['pd_switch lastswitch', { pd_active : 'happy' === curProduct }]" @click="switchProduct('happy')">Guter Tag</div>
        
        <div v-if="!this.$store.state.lang" :class="['pd_switch firstswitch', { pd_active : 'sad' === curProduct }]" @click="switchProduct('sad')">Bad day</div>
        <!-- <div v-if="!this.$store.state.lang" :class="['pd_switch middleswitch', { pd_active : 'normal' === curProduct }]" @click="switchProduct('normal')">Melanie</div> -->
        <div v-if="!this.$store.state.lang" :class="['pd_switch lastswitch', { pd_active : 'happy' === curProduct }]" @click="switchProduct('happy')">Good day</div>
    </div>   
</div>
</template>

<script>
// Import

export default {
  props: [],
  data(){
      return{
        curProduct: 'sad',
        extraProd: false,
      }
  },
  mounted() {
        var newState = {
              name: 'persona',
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
              name: 'persona',
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

