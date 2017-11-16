<template>
  <div id="handwritter" class="background">
      <myscript-text-web
      applicationkey="4285008c-661a-4ba1-964f-170b3808428c"
      hmackey="061d41b0-2693-40fe-a59e-a5a69db5433b"
      language="de_DE"
      >
      </myscript-text-web>
  </div>
</template>

<script>
console.log('Writer Comp!');

var editorElement;
var writtenText;

export default {
  props: [],
  data () {
    return {

    }
  },
  mounted() {
    console.log("mounted"); 
    document.querySelector('myscript-text-web').addEventListener('exported', (event) => {
      console.log(event.detail.exports['text/plain']);
      writtenText = event.detail.exports['text/plain'];
    });
  },
  created () {
    console.log("created");
  },
  destroyed(){
    console.log("destroyed");

  }
}
</script>

<style scoped>
  #handwritter {
      position: absolute;
      height: 100%;
      top: 0;
      width: 100%;
      background: rgb(255, 255, 255);
  }

  .background{
      z-index: -9999;
  }

  myscript-text-web {
    height: 100%;
  }
</style>