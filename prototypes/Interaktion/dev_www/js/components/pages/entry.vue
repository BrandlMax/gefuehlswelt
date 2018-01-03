<template>
<div id="displayFrame">

  <div id="mainCanvas">
    Entry {{ $route.params.id }}
  </div>

  <Layer 
    v-if="showSVGlayer"
   :layerData="{height: SVGheight, width: SVGwidth, x: SVGx ,y: SVGy}">
  </Layer>

  <SVGLayer 
    v-if="showSVGlayer"
    v-bind:SVGdata="{path: SVGpath, height: SVGheight, width: SVGwidth, x: SVGx ,y: SVGy}">
  </SVGLayer>

  <myScriptLayer 
    v-for="(layer, index) in this.$store.state.layers" 
    :if="layer.show" :key="index" 
    :layerData="{id: layer.id, index: index, x: layer.x, y:layer.y, height: layer.h, width: layer.w}">
  </myScriptLayer>

</div>
</template>

<script>
import SVGLayer from '../interaktion/svg.vue';
import Layer from '../interaktion/layer.vue';
import myScriptLayer from '../interaktion/myScriptLayer.vue';

export default {
  data(){
      return{
        // TEST SVG DATA
        SVGpath: "M210.08,61.91l-1.06,0.26h-1.06l-1.85,0.53l-1.06,0.26l-2.65,1.06l-1.32,1.06l-2.65,1.85l-1.32,1.59l-1.32,2.65l-0.26,1.06l-0.26,4.5l0.26,2.91l0.53,2.12l2.38,5.56l3.7,5.56l3.18,2.91l3.97,2.38l7.41,3.17l3.18,0.79l7.67,1.32l3.7,0.53h5.29h1.59l4.5-1.32l3.18-1.59l5.56-3.18l2.91-2.12l5.29-4.23l2.12-1.59l3.97-3.44l1.85-2.12l1.32-2.91l0.26-1.06v-3.7l-0.79-2.91l-2.65-5.03l-1.59-2.12l-1.06-1.32l-3.44-3.17l-3.97-2.65l-2.91-1.06l-2.38-0.79l-5.29-1.59l-5.56-1.06l-2.91-0.26l-2.12-0.26l-4.76-0.53h-1.85l-3.7,0.26l-1.59,0.26l-2.38,0.26h-1.06l-2.65,0.26h-1.32l-2.38,0.53h-0.79l-1.32,0.53l-1.85,1.59l-1.32,1.85l-0.53,1.85l-0.26,0.79",
        SVGheight: 192.49148559570312,
        SVGwidth: 282.973388671875,
        SVGx: 736.0255126953125,
        SVGy: 202.65835571289062,
        showSVGlayer: false
      }
  },
  mounted() {
    var PageID = this.$route.params.id;

    var editorElement = document.getElementById('mainCanvas');

    // API Register
    MyScript.register(editorElement, {
      recognitionParams: {
        type: 'DIAGRAM',
        server: this.$store.state.access
      }
    });

    editorElement.addEventListener('click', () => {
      console.log('Editor Element', editorElement.editor);
          // Positions Info
          var posInfo = document.getElementById('viewTransform').getBoundingClientRect();
          var SVGPath = document.getElementById('viewTransform').getElementsByTagName( 'path' )[0].attributes.d.nodeValue;
          console.log('PosInfo', posInfo);
          console.log('SVG Path', SVGPath);

          // Update SVG File
          this.SVGpath = SVGPath;
          this.SVGheight = posInfo.height;
          this.SVGwidth = posInfo.width;
          this.SVGx = posInfo.x;
          this.SVGy = posInfo.y;

          editorElement.editor.clear();

	  });

    // Wenn Eingabe erkannt wurde
    editorElement.addEventListener('exported', (event) => {
      
        console.log('Editor', editorElement.editor);
        console.log('Erkannt:',event.detail.exports['text/plain']);
        console.log('SVG Export:',event.detail.exports['SVG']);
        console.log('PNG Export:',event.detail.exports['PNG'])

        // Erkenne Fläsche
        if(this.recogForm(event.detail.exports['text/plain'])){
          // Clean
          editorElement.editor.clear();

          // Positions Info
          var posInfo = document.getElementById('viewTransform').getBoundingClientRect();
          var SVGPath = document.getElementById('viewTransform').getElementsByTagName( 'path' )[0].attributes.d.nodeValue;
          console.log('PosInfo', posInfo);
          console.log('SVG Path', SVGPath);

          // Update SVG File
          this.SVGpath = SVGPath;
          this.SVGheight = posInfo.height;
          this.SVGwidth = posInfo.width;
          this.SVGx = posInfo.x;
          this.SVGy = posInfo.y;

          // Add Layer
          this.$store.commit('addLayer', {
            id: null,
            page: PageID,
            x: posInfo.x,
            y: posInfo.y,
            w: posInfo.width,
            h: posInfo.height,
            svgPath: SVGPath,
            show: true
          });

        }else if(this.recogCmd(event.detail.exports['text/plain'])){
          console.log('Kommando Erkannt!');
          editorElement.editor.clear();
        }else{
          editorElement.editor.clear();
        }

    });

    // Rechtsklick um Canvas zu leeren
    editorElement.addEventListener('contextmenu', function(ev) {
      // ev.preventDefault();
      editorElement.editor.clear();
      return false;
    }, false);

  },
  created () {

  },
  destroyed(){

  },components: {
    SVGLayer,
    myScriptLayer,
    Layer
  },
  methods:{
    // this.$store.state
    // Recognition
    recogForm: function(gestik){
      switch(gestik){
        case '0':
          return true;
        case 'o':
          return true;
        case 'O':
          return true;
        case '˚':
          return true;
        default:
          return false;
      }
    },
    recogCmd: function(gestik){
      switch(gestik){
        case '<':
          console.log('UNDO');
          return true;
        case '>':
          console.log('REDO');
        case 's':
          console.log('Show SVG');
          return true;
        default:
          return false;
      }
    }
  }
}
</script>

<style scoped>
  #mainCanvas{
      height: 100vh;
      width: 100vw;
      background: #F5F4F0;
      position: absolute;
      top: 0;
      left: 0;
      display: -webkit-box;
  }
</style>

