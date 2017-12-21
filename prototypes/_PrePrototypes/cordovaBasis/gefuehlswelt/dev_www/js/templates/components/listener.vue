<template>
  <div>
    !Some Speech!!
    <div id="result"></div>
    <div id="start">Start</div>
    <div id="stop">Stop</div>
  </div>
</template>

<script>
console.log('Speech Comp!');

var listenState = false;

export default {
  props: [],
  data () {
    return {

    }
  },
  mounted() {
    // console.log("mounted"); 
    console.log('Speech Template mounted!');

    let options = {
     language: "de-DE",
      matches: 5, 
      showPartial: false // iOS only
    }
  
    window.plugins.speechRecognition.hasPermission(successCallback, errorCallback);

    $( "#start" ).click(function() {
      
      if(!listenState){
          listenState = true;
          window.plugins.speechRecognition.startListening(successListened, errorCallback, options);
      }
      
    });

    $( "#stop" ).click(function() {
      
      if(listenState){
        listenState = false;
        window.plugins.speechRecognition.stopListening(successCallback, errorCallback);
      }
      
    });

    function successListened(result){
      console.log('Result', result);
      $( "#result" ).html(result);
    }

    function successCallback(a){
      console.log('success', a);
    }

    function errorCallback(error){
      console.log('error', error);
    }

  },
  created () {
    //console.log("created");
    
  },
  destroyed(){
    //console.log("destroyed");

  }
}
</script>

<style scoped>
 
</style>