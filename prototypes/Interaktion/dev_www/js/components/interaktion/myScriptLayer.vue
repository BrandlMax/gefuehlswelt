<template>

    <div class="toolLayer">

        <meinWerkzeug 
            v-if="Tool === 'Werkzeug01'"
            :toolData="{id: layerData.id, height:layerData.height,width:layerData.width}" 
            :style="{ top:layerData.y+'px', left:layerData.x+'px', height: layerData.height+'px', width: layerData.width+'px'}">
        </meinWerkzeug>

        <meinAnderesWerkzeug 
            v-if="Tool === 'Werkzeug02'" 
            :toolData="{id: layerData.id, height:layerData.height,width:layerData.width}" 
            :style="{ top:layerData.y+'px', left:layerData.x+'px', height: layerData.height+'px', width: layerData.width+'px'}">
        </meinAnderesWerkzeug>

        <div 
            v-if="Tool === 'NoTool'"
            :id="'layer_'+layerData.id"  
            class="layer" 
            :style="{ top:layerData.y+'px', left:layerData.x+'px', height: layerData.height+'px', width: layerData.width+'px'}">
        </div>

    </div>
</template>

<script>
import meinWerkzeug from '../werzeuge/beispiel.vue';
import meinAnderesWerkzeug from '../werzeuge/beispiel2.vue';

export default {
  props: ['layerData'],
  data(){
      return{
        Tool: 'NoTool' // Aktuelles Werkzeug
      }
  },
  mounted() {
    var LayerID = this.layerData.id;
    var LayerIndex = this.layerData.index;

    var editorElement = document.getElementById('layer_'+LayerID);

    // MyScript API Register
    MyScript.register(editorElement, {
      recognitionParams: {
        type: 'TEXT',
        server: this.$store.state.access
      }
    });

    // Wenn Eingabe erkannt wurde
    editorElement.addEventListener('exported', (event) => {

        console.log('Erkannt:',event.detail.exports['text/plain']);

        // Erkenne Werkzeug Request
        if(this.recogTool(event.detail.exports['text/plain'].toLowerCase())){

        }

        // Delete
        if(this.recogDel(event.detail.exports['text/plain'])){
            editorElement.editor.clear(); 

            var newLayer = this.$store.state.layers[LayerIndex];
            newLayer.show = false; 
            this.$store.commit('removeLayer', {
                index: LayerIndex,
                updatedLayer: newLayer
            }); 
        }
  
    });

    // Debug: Rechtsklick um Canvas zu leeren
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
      meinWerkzeug,
      meinAnderesWerkzeug
  },
  methods:{
    //Delete
    recogDel: function(gestik){
      switch(gestik){
        case 'x':
          return true;
        case 'X':
          return true;
        case '×':
          return true;
        default:
          return false;
      }
    },
    //Werkzeuge
    recogTool: function(gestik){
        switch(gestik){
            case 'mandala':
                this.createTool('mandala');
                return true;
            case 'doodle':
                this.createTool('doodle');
                return true;
            default:
                return false;
      }
    },
    // Werkzeug anlegen
    createTool: function(gestik){
        switch(gestik){
            case 'mandala':
                console.log('create Mandala');
                this.Tool = 'Werkzeug01';
                return true;
            case 'doodle':
                console.log('create Doodle');
                this.Tool = 'Werkzeug02';
                return true;
            default:
                return false;
      }
    }
  }
}
</script>

<style scoped>
    .layer{
        position: absolute;
        z-index: 2000;
        background: rgba(255, 255, 255, 0.5);;
    }
</style>

