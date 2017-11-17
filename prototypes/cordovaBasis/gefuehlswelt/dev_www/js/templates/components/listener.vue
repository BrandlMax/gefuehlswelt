<template>
  <div>
    !Some Speech!!
  </div>
</template>

<script>
console.log('Speech Comp!');


export default {
  props: [],
  data () {
    return {

    }
  },
  mounted() {
    console.log("mounted"); 
    console.log('Speech Template!');

    let options = {
     language: "de-DE",
      matches: 5, 
      showPartial: false // iOS only
    }
  
    window.plugins.speechRecognition.hasPermission(successCallback, errorCallback);
    window.plugins.speechRecognition.startListening(successCallback, errorCallback, options);
    
    function successCallback(a){
      console.log('success', a);
    }

    function errorCallback(error){
      console.log('error', error);
    }


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
 
</style>