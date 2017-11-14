<template>
    <div id="editor"></div>
</template>

<script>
console.log('Write Comp!');

const editorElement;

export default {
  props: [],
  data () {
    return {

    }
  },
  mounted() {
    console.log("mounted");

    editorElement = document.getElementById('editor');
    
    MyScript.register(editorElement, {
      recognitionParams: {
        type: 'TEXT',
        server: {
          applicationKey: '4285008c-661a-4ba1-964f-170b3808428c',
          hmacKey: '061d41b0-2693-40fe-a59e-a5a69db5433b'
        }
      }
    });   
  },
  created () {
    console.log("created");
  },
  destroyed(){
    console.log("destroyed");
    editorElement.editor.exportContent();
  }
}
</script>

<style scoped>
    #editor{
        width: 500px;
        height: 500px;
    }
</style>