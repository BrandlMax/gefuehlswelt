<template>
    <div id="sketch"></div>
</template>

<script>
// Test ob geladen
console.log('WerzeugName');

// Erstmal Ignorieren
export default {
  data(){
      return{
      }
  },
  mounted() {
  //--------- p5 Code Here --------------
  // Ihr müsst vor alle p5 Funktionen ein p5. setzen.

  var meinWerkzeug = new p5( function( p5 ) {

    p5.setup = function() {
      // Create Canvas
      var canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
      canvas.parent('sketch');
    };

    p5.draw = function() {
      p5.background(0);
      p5.fill(255);
      p5.ellipse(p5.mouseX,p5.mouseY,50,50);
    };

  });

  //--------- p5 Code Ends Here --------------

  }
}
</script>

<style scoped>
  #sketch {
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
  }
</style>

