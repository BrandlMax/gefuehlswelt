<template>
    <div :id="'layer_'+layerData.id"  class="layer" :style="{ top:layerData.y+'px', left:layerData.x+'px', height: layerData.height+'px', width: layerData.width+'px'}">
    </div>
</template>

<script>

console.log('myScriptLayer');

export default {
  props: ['layerData'],
  data(){
      return{
      }
  },
  mounted() {
    var LayerID = this.layerData.id;
    var LayerIndex = this.layerData.index;

    var editorElement = document.getElementById('layer_'+LayerID);

    // API Register
    MyScript.register(editorElement, {
      recognitionParams: {
        type: 'TEXT',
        server: this.$store.state.access
      }
    });

    // Wenn Eingabe erkannt wurde
    editorElement.addEventListener('exported', (event) => {

        console.log('Erkannt:',event.detail.exports['text/plain']);
        // console.log('Export Event:',event);

        // Erkenne Fläsche
        // Delete
        if(event.detail.exports['text/plain'] === 'x' || event.detail.exports['text/plain'] === 'X'){
            editorElement.editor.clear(); 
            this.$store.commit('removeLayer', {
                index: LayerIndex,
                updatedLayer: newLayer
            });
             

        }
        else if(event.detail.exports['text/plain'] === '×'){
            editorElement.editor.clear();
            var newLayer = this.$store.state.layers[LayerIndex];
            newLayer.show = false; 
            this.$store.commit('removeLayer', {
                index: LayerIndex,
                updatedLayer: newLayer
            });  
        }
        else{

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
  },
  methods:{

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

