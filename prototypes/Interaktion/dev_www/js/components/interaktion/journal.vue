<template>
    <div :id="'layer_'+journalData.id"  class="journal" :style="{ top:journalData.y+'px', left:journalData.x+'px', height: journalData.height+'px', width: journalData.width+'px'}">
    journal
    </div>
</template>

<script>

console.log('JournalLayer');

export default {
  props: ['journalData'],
  data(){
      return{
      }
  },
  mounted() {
    var JournalID = this.journalData.id;
    var JournalIndex = this.journalData.index;

    var editorElement = document.getElementById('layer_'+JournalID);

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
        this.$router.push({name : 'Entry', params: { id: JournalID }});
  
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
    // Recognition
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
    }
  }
}
</script>

<style scoped>
    .journal{
        position: absolute;
        z-index: 2000;
        background: rgba(255, 255, 255, 0.5);
        background-image: url(../src/png/journal01.png);
        background-position: center center;
        background-size: contain;
        background-repeat: no-repeat;
    }
</style>

