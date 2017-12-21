<template>
  <div>
    !P5 Dialogflow
    <div id="Message"></div>
    <div id="EMessage"></div>
    <div id="result"></div>
    <div id="startMic">Start Mic</div>
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
    console.log('Dialogflow mounted!');

    var rec = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
    rec.default_language = 'de';
    rec.onResult = showResult; // bind callback function to trigger when speech is recognized
    rec.onError = showError;
    rec.onStart = showStart;
    rec.continuous = true;
    rec.interimResults = false;


    $( "#startMic" ).click(function() {
      $( "#Message" ).html('mic started');
      rec.start(); // start listening
    });

    function showResult(){
      console.log(rec.resultString); // log the result
      $( "#result" ).html(rec.resultString);
    }

    function showStart(){
      $( "#Message" ).html('Started!');
    }

    function showError(err){
      console.log(err); // log the result
      $( "#EMessage" ).html("p5 Error: " + err + err.error + err.message);
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