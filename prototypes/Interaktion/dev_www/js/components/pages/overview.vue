<template>
<div id="displayFrame">
  <div id="mainCanvas">
  journals
  </div>
  <SVGLayer v-bind:SVGdata="{path: SVGpath, height: SVGheight, width: SVGwidth, x: SVGx ,y: SVGy}"></SVGLayer>
  <Journal v-for="(journal, index) in this.$store.state.journals" :if="journal.show" :key="index" :journalData="{id: journal.id, index: index, x: journal.x, y:journal.y, height: journal.h, width: journal.w}"></Journal>
</div>

</template>

<script>
console.log('MainCanvas');

import SVGLayer from '../interaktion/svg.vue';
import Journal from '../interaktion/journal.vue';

export default {
  data(){
      return{
        // TEST SVG DATA
        SVGpath: "M188.65,163.19l0.19,0.19l-0.04,0.27l-0.24,0.13l-2.32-0.77l-2.61-0.68l-3.39-0.57l-3.42-0.36l-3.59-0.2l-3.74-0.04l-3.91,0.09l-3.55,0.24l-3.09,0.4l-2.77,0.56l-2.48,0.68l-2.24,0.92l-2.26,1.5l-2.59,2.28l-1.84,2.14l-1.35,2.01l-1.05,1.75l-0.93,1.65l-0.91,1.64l-0.93,1.85l-0.67,1.74l-0.59,1.99l-0.46,2.09l-0.37,2.13l-0.21,1.95l-0.08,2.21l-0.01,2.38l-0.02,2.94l-0.07,3.29l-0.08,3.45l0.06,3.28l0.29,3.27l0.45,2.98l0.59,2.75l0.76,2.6l1.05,2.54l1.52,2.8l1.98,3.08l2.28,3.11l2.38,2.84l2.6,2.66l2.96,2.51l3.99,3.03l4.81,3.34l5.76,3.41l3.04,1.47l3.3,1.38l6.81,2.35l6.36,1.75l6.36,1.39l6.26,1.03l6.19,0.67l5.8,0.3l5.17-0.2l4.69-0.81l4.26-1.35l4.11-1.86l1.66-0.99l1.59-1.18l1.46-1.37l1.27-1.54l1.27-1.93l1.13-2.21l0.9-2.36l0.79-2.78l0.64-3.11l0.47-3.31l0.26-3.24l0.08-3.47l-0.35-7.18l-0.9-6.5l-1.32-5.57l-1.75-4.96l-2.24-4.69l-2.45-4.17l-2.83-4.14l-2.96-3.71l-3.12-3.48l-3.01-2.85l-3.09-2.37l-2.75-1.67l-2.41-1.22l-2.43-1.25l-2.31-1.2l-2.1-1.05l-2.12-0.99l-2-0.8l-2.05-0.7l-1.82-0.64l-1.48-0.58l-1.2-0.47l-1.13-0.39l-1.08-0.27l-1.08-0.16l-1.48-0.23l-1.32-0.25l-1.04-0.26l-0.84-0.25l-0.76-0.27l-0.74-0.36l-0.09-0.28l0.98,0.18l0.79,0.18l0.86,0.19l1.06,0.22l1.33,0.22l1.38,0.18l1.08,0.13l1.21,0.26l1.14,0.37l1.21,0.47l1.48,0.58l1.82,0.64l2.05,0.7l2,0.8l2.12,0.99l2.34,1.16l2.31,1.2l2.32,1.19l2.53,1.28l2.75,1.67l3.09,2.37l3.1,2.94l3.22,3.57l2.96,3.71l2.83,4.14l2.51,4.29l2.3,4.81l1.75,4.96l1.34,5.7l0.92,6.63l0.35,7.18l-0.08,3.47l-0.28,3.37l-0.49,3.44l-0.64,3.11l-0.79,2.78l-0.95,2.48l-1.19,2.33l-1.27,1.93l-1.36,1.63l-1.56,1.46l-1.59,1.18l-1.77,1.05l-4.23,1.92l-4.39,1.37l-4.82,0.83l-5.17,0.2l-5.8-0.3l-6.32-0.69l-6.39-1.05l-6.36-1.39l-6.36-1.75l-6.81-2.35l-3.3-1.38l-3.15-1.53l-5.88-3.47l-4.81-3.34l-3.99-3.03l-3.06-2.6l-2.7-2.75l-2.38-2.84l-2.28-3.11l-1.98-3.08l-1.58-2.92l-1.11-2.66l-0.76-2.6l-0.61-2.88l-0.47-3.11l-0.29-3.27l-0.06-3.28l0.08-3.45l0.07-3.29l0.02-2.94l0.01-2.38l0.08-2.21l0.23-2.07l0.39-2.26l0.46-2.09l0.59-1.99l0.73-1.86l0.98-1.96l0.91-1.64l0.93-1.65l1.05-1.75l1.35-2.01l1.94-2.23l2.68-2.38l2.38-1.56l2.35-0.97l2.49-0.67l2.9-0.55l3.21-0.39l3.55-0.2l3.91-0.05l3.74,0.09l3.59,0.25l3.5,0.43l3.47,0.6l2.62,0.65l2.25,0.68z",
        SVGheight: 370.12945556640625,
        SVGwidth: 404.5230712890625,
        SVGx: 514.8853759765625,
        SVGy: 606.57666015625
      }
  },
  mounted() {
    var PageID = 0;

    var editorElement = document.getElementById('mainCanvas');
    console.log('store', this.$store.state)
    // API Register
    MyScript.register(editorElement, {
      recognitionParams: {
        type: 'TEXT',
        server: this.$store.state.access
      }
    });

    // Wenn Eingabe erkannt wurde
    editorElement.addEventListener('exported', (event) => {

        console.log('On JournalOverviewErkannt:',event.detail.exports['text/plain']);
        console.log('Export Event:',event);

        // Erkenne Fläsche
        if(event.detail.exports['text/plain'] === '0'){
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
          this.$store.commit('addJournal', {
            id: null,
            page: PageID,
            x: posInfo.x,
            y: posInfo.y,
            w: posInfo.width,
            h: posInfo.height,
            svgPath: SVGPath,
            show: true
          });

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
    Journal
  },
  methods:{
    // this.$store.state
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

