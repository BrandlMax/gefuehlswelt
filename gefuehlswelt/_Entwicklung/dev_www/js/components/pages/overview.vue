<template>
<div id="displayFrame">
  <div id="mainCanvas" touch-action="none">
  journals
  </div>

  <div id="cmdCanvas" touch-action="none">
  cmd
  </div>



  <SVGLayer 
    v-if="showSVGlayer" 
    v-bind:SVGdata="{id: SVGid, path: SVGpath, height: SVGheight, width: SVGwidth, x: SVGx ,y: SVGy}">
  </SVGLayer>

  <Journal 
    v-for="(journal, index) in this.$store.state.journals" 
    :if="journal.show" 
    :key="index" 
    :journalData="{id: journal.id, index: index, x: journal.x, y:journal.y, height: journal.h, width: journal.w, background: journal.bg}">
  </Journal>

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
        SVGpath: "M210.08,61.91l-1.06,0.26h-1.06l-1.85,0.53l-1.06,0.26l-2.65,1.06l-1.32,1.06l-2.65,1.85l-1.32,1.59l-1.32,2.65l-0.26,1.06l-0.26,4.5l0.26,2.91l0.53,2.12l2.38,5.56l3.7,5.56l3.18,2.91l3.97,2.38l7.41,3.17l3.18,0.79l7.67,1.32l3.7,0.53h5.29h1.59l4.5-1.32l3.18-1.59l5.56-3.18l2.91-2.12l5.29-4.23l2.12-1.59l3.97-3.44l1.85-2.12l1.32-2.91l0.26-1.06v-3.7l-0.79-2.91l-2.65-5.03l-1.59-2.12l-1.06-1.32l-3.44-3.17l-3.97-2.65l-2.91-1.06l-2.38-0.79l-5.29-1.59l-5.56-1.06l-2.91-0.26l-2.12-0.26l-4.76-0.53h-1.85l-3.7,0.26l-1.59,0.26l-2.38,0.26h-1.06l-2.65,0.26h-1.32l-2.38,0.53h-0.79l-1.32,0.53l-1.85,1.59l-1.32,1.85l-0.53,1.85l-0.26,0.79",
        SVGheight: 192.49148559570312,
        SVGwidth: 282.973388671875,
        SVGx: 736.0255126953125,
        SVGy: 202.65835571289062,
        showSVGlayer: true
      }
  },
  mounted() {
    var PageID = 0;


    // CREATE EDITOR

    // JOURNAL EDITOR 
    var editorElement = document.getElementById('mainCanvas');
    
    // API Register
    MyScript.register(editorElement, {
      recognitionParams: {
        type: 'DIAGRAM',
        server: this.$store.state.access
      }
    });

    // CMD EDITOR
    var cmdeditorElement = document.getElementById('cmdCanvas');
    
    // API Register
    MyScript.register(cmdeditorElement, {
      recognitionParams: {
        type: 'TEXT',
        server: this.$store.state.access
      }
    });






    // Journal Eingabe

    // MultiLayer Fix
    editorElement.addEventListener('pointerdown', (e) => {
      var new_e = new e.constructor(e.type, e);
      cmdeditorElement.dispatchEvent(new_e);
    });

    editorElement.addEventListener('pointerleave', (e) => {
      var new_e = new e.constructor(e.type, e);
      cmdeditorElement.dispatchEvent(new_e);
    });

    editorElement.addEventListener('pointermove', (e) => {
      var new_e = new e.constructor(e.type, e);
      cmdeditorElement.dispatchEvent(new_e);
    });

    editorElement.addEventListener('pointerout', (e) => {
      var new_e = new e.constructor(e.type, e);
      cmdeditorElement.dispatchEvent(new_e);
    });

    editorElement.addEventListener('pointerup', (e) => {
      var new_e = new e.constructor(e.type, e);
      cmdeditorElement.dispatchEvent(new_e);
    });


    editorElement.addEventListener('click', (e) => {

      var new_e = new e.constructor(e.type, e);
      cmdeditorElement.dispatchEvent(new_e);

      // Clean Canvas Before
      
      var paths = document.getElementById('viewTransform').getElementsByTagName( 'path' );
      var pathsList = Array.prototype.slice.call(paths);
      var SVGPath;

      // Check if there is a Form
      pathsList.forEach((element, index) => {
        // Is there a Fill Path?
        if(element.id.charAt(0) === "d"){
          SVGPath = document.getElementById('viewTransform').getElementsByTagName( 'path' )[index].attributes.d.nodeValue;
          
          // Positions Info
          var posInfo = document.getElementById('viewTransform').getBoundingClientRect();
          
          console.log('PosInfo', posInfo);
          console.log('SVG Path', SVGPath);
          editorElement.editor.clear();

          // Update SVG File
          this.SVGpath = SVGPath;
          this.SVGheight = posInfo.height;
          this.SVGwidth = posInfo.width;
          this.SVGx = posInfo.x;
          this.SVGy = posInfo.y;

          // Add Layer
          this.$store.commit('addJournal', {
            id: this.$store.state.JournalCount,
            SVGid: this.$store.state.JournalCount,
            page: PageID,
            x: posInfo.x,
            y: posInfo.y,
            w: posInfo.width,
            h: posInfo.height,
            svgPath: SVGPath,
            bg: '#'+Math.floor(Math.random()*16777215).toString(16),
            show: true
          });

          editorElement.editor.clear();
          cmdeditorElement.editor.clear();

        }else{
          
        }

      });

    });

    // Rechtsklick um Canvas zu leeren
    editorElement.addEventListener('contextmenu', (ev) => {
      // ev.preventDefault();
      editorElement.editor.clear();
      cmdeditorElement.editor.clear();
      return false;
    }, false);



  // CMD Layer
  cmdeditorElement.addEventListener('exported', (event) => {
        console.log('Erkannt:',event.detail.exports['text/plain']);
        
        // Erkenne Command Request
        if(this.recogCmd(event.detail.exports['text/plain'].toLowerCase())){
          cmdeditorElement.editor.clear();
          editorElement.editor.clear();
        }
  });


    // Undo and Redo
    window.addEventListener('keydown', (e) => {
      console.log(e.keyCode);
      if(e.keyCode === 37){
        this.undo();
      }else if(e.keyCode === 39){
        this.redo();
      }
    });

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
          if (this.canUndo) this.undo();
          console.log('UNDO');
          return true;
          
        case '>':
          if (this.canRedo) this.redo();
          console.log('REDO');
          return true;

        case 's':
          this.showSVGlayer = !this.showSVGlayer;
          console.log('Show SVG', this.showSVGlayer);
          return true;

        case '.':
          return true;

        case 'hilfe':
          console.log('Hilfe')
          return true;

        case 'inspire me':
          console.log('Inspire Me!')
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
      position: fixed;
      top: 0;
      left: 0;
      display: -webkit-box;
      touch-action: none;
  }
  #cmdCanvas{
      height: 100vh;
      width: 100vw;
      background: rgb(0, 255, 136);
      position: fixed;
      top: 0;
      left: 0;
      display: -webkit-box;
      touch-action: none;
      z-index: 0;
  }
</style>

