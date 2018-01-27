<template>
<div id="langswitch">
    <label class="switch">
        <input type="checkbox" v-model="checked" @change="changeLanguage()">
        <span class="slider round"></span>
    </label>
</div>
</template>

<script>
// Import

export default {
  props: [],
  data(){
      return{
          checked: this.$store.state.lang
      }
  },
  mounted() {
  },
  created () {
  },
  destroyed(){

  },components: {

  },
  methods:{
      changeLanguage(){
          var lang;
          this.$store.commit('changeLanguage', lang);
      }
  }
}
</script>

<style scoped>

/* https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_switch */

#langswitch {
    position: absolute;
    top: 20px;
    right: 20px;
    opacity: 0.2;
    -webkit-transition: .4s;
    transition: .4s;
}

#langswitch:hover {
    opacity: 1.0;
    -webkit-transition: .4s;
    transition: .4s;
}

.switch {
  position: relative;
  display: inline-block;
    width: 40px;
    height: 23px;
}

.switch input {display:none;}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
    background: url(../src/img/EN.png);
    background-size: cover;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
    background: url(../src/img/DE.png);
    background-size: cover;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(16px);
  -ms-transform: translateX(16px);
  transform: translateX(16px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

</style>

