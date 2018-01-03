<template>
    <svg id="MaskSVG" class="SVGcopy" :viewBox="generateViewBox(SVGdata.width, SVGdata.height)" :width="SVGdata.width" :height="SVGdata.height" preserveAspectRatio = "xMinYMin meet">
        <!--  
            
            clip-path: url(#form); 
            Not Working.
        -->
        <defs>
            <clipPath id="form" clipPathUnits="objectBoundingBox">
                <circle cx="100%" cy="100%" r="100%" id="circle"/>
            </clipPath>
        </defs>

        <g :transform="generateTranslate(SVGdata.x, SVGdata.y)">
            <g transform="matrix(3.77953, 0, 0, 3.77953, -0, -0)">
                <path x="0" y="0" :d="SVGdata.path" />
            </g>
        </g>
    </svg>
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
        z-index: 1000;
        background: #cecece;
    }
</style>

