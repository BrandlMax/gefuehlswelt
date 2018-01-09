<template>
    <div :style="{ clipPath: 'url(#path_' + toolData.id +')', height: toolData.height+'px', width: toolData.width+'px'}" :id="'sketch_'+toolData.id" class="sketch"></div>
</template>

<script>
// Test ob geladen
console.log('WerzeugName');
// Erstmal Ignorieren
export default {
  props: ['toolData'],
  data(){
      return{
      }
  },
  mounted() {
  //--------- p5 Code Here --------------
  // Ihr müsst vor alle p5 Funktionen ein p5. setzen.
  console.log('toolDataSetup',this.toolData);
  var toolData = this.toolData;
  var meinWerkzeug = new p5( function( p5 ) {

    p5.setup = function() {
      // Create Canvas
      var canvas = p5.createCanvas(toolData.width,toolData.height);
      canvas.parent('sketch_'+toolData.id);
      canvas.style('clip-path', 'url(#path_' + toolData.id +')');
      canvas.setAttribute("class", "democlass");
      console.log('canvas', canvas)
    };

    p5.draw = function() {
      // p5.background(0);
      p5.fill(255,100,50);
      p5.ellipse(p5.mouseX,p5.mouseY,10,10);
    };

  });
  //--------- p5 Code Ends Here --------------

  }
}
</script>

<style scoped>
  .sketch {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 1000;
  }
</style>

