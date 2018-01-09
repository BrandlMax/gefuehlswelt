<template>
    <div class="SVGMasks">
    <svg :if=" curName === 'Entry'" v-for="(layer, index) in this.$store.state.layers" :key="index" id="MaskSVG" class="SVGcopy" :viewBox="generateViewBox(layer.w, layer.h)" :width="layer.w" :height="layer.h" preserveAspectRatio = "xMinYMin meet">

        <defs>
            <clipPath :id="'path_'+layer.id">
                <path :transform="generateTransform(layer.x, layer.y)" x="0" y="0" :d="layer.svgPath" />
            </clipPath>
        </defs>

        <!--
        <path :transform="generateTransform(layer.x, layer.y)" x="0" y="0" :d="SVGdata.path" />
        -->
    </svg>

    <svg :if=" curPath === '/'" v-for="(layer, index) in this.$store.state.journals" :key="index" id="MaskSVG" class="SVGcopy" :viewBox="generateViewBox(layer.w, layer.h)" :width="layer.w" :height="layer.h" preserveAspectRatio = "xMinYMin meet">

        <defs>
            <clipPath :id="'path_'+layer.id">
                <path :transform="generateTransform(layer.x, layer.y)" x="0" y="0" :d="layer.svgPath" />
            </clipPath>
        </defs>

        <!--
        <path :transform="generateTransform(layer.x, layer.y)" x="0" y="0" :d="SVGdata.path" />
        -->
    </svg>
    </div>
</template>

<script>

/*
Standardwerte
bottom:976.7061157226562
height:370.12945556640625
left:514.8853759765625
right:919.408447265625
top:606.57666015625
width:404.5230712890625
x:514.8853759765625
y:606.57666015625
        SVGheight: 192.49148559570312,
        SVGwidth: 282.973388671875,
        SVGx: 736.0255126953125,
        SVGy: 202.65835571289062,
*/
console.log('SVG Layer');

export default {
  props: ['SVGdata'],
  data(){
      return{
          curName: this.$route.name,
          curPath: this.$route.path
      }
  },
  mounted() {
      console.log('curPage', this.$route);
  },
  created () {

  },
  destroyed(){

  },components: {
  },
  methods:{
    // this.$store.state
    generateViewBox: function(w, h){
        var str = "0 0 " + w + " " + h;
        return str
    },
    generateTranslate: function(w, h){
        var str = "translate(" + (-1*w) + "," + (-1*h)+ ")";
        return str
    },
    generateTransform: function(w,h){
        var str = "translate(" + (-1*w) + "," + (-1*h)+ ") " + "matrix(3.77953, 0, 0, 3.77953, -0, -0)";
        return str
    }
  }
}
</script>

<style scoped>
    svg {
        position: absolute;
        z-index: -1000;
        background: rgba(0, 0, 0, 0);
    }
</style>

