<template>
<div id="mainCanvas">
Main Canvas
</div>
</template>

<script>
console.log('MainCanvas');

export default {
  data(){
      return{
      }
  },
  mounted() {

  var editorElement = document.getElementById('mainCanvas');

  MyScript.register(editorElement, {
    recognitionParams: {
      type: 'TEXT',
      server: {
        applicationKey: '4285008c-661a-4ba1-964f-170b3808428c',
        hmacKey: '061d41b0-2693-40fe-a59e-a5a69db5433b'
      }
    }
  });

  editorElement.addEventListener('exported', (event) => {

      // Geste Erkennen
      console.log('Erkannt:',event.detail.exports['text/plain']);
      console.log('Export Event:',event);

      if(event.detail.exports['text/plain'] === '0'){
        // Positions Info
        var posInfo = document.getElementById('viewTransform').getBoundingClientRect();
        console.log('PosInfo', posInfo);
      }else{
        editorElement.editor.clear();
      }

      

      // SVG Aus der verschachtelten DOM Abgreifen?

      // Werkzeug anlegen

      // Werkzeug maskieren



  });

  },
  created () {

  },
  destroyed(){

  },components: {
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
      background: #f3f3f3;
      position: absolute;
      top: 0;
      left: 0;
      display: -webkit-box;
  }
</style>

