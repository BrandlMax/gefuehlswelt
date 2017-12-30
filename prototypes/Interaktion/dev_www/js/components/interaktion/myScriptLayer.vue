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

        // Erkenne Fläsche
        if(this.recogTool(event.detail.exports['text/plain'])){
            console.log('Delete layer now?');
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
            case 'Mandala':
                this.createTool('mandala');
                return true;
            case 'doodle':
                this.createTool('doodle');
                return true;
            case 'Doodle':
                this.createTool('doodle');
                return true;
            default:
                return false;
      }
    },
    createTool: function(gestik){
        switch(gestik){
            case 'mandala':
                console.log('create Mandala');
                return true;
            case 'doodle':
                console.log('create Doodle');
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

