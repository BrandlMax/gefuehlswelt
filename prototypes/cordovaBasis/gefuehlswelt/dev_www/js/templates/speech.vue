<template>
  <div>
    <h1>Speech</h1>
    <p>Demo of Speech Recognition</p>
    <!--<Listener></Listener>-->
    <P5Dialog></P5Dialog>
  </div>
</template>

<script>
import Listener from './components/listener.vue';
import P5Dialog from './components/dialog.vue';

export default {
  props: [ ],
  
  data () {
    return {

    }
  },
  mounted() {
    console.log("Speech Template mounted"); 
    $('body').on('touchmove', function (e) {
      e.preventDefault();
    });
  },
  created () {
    //console.log("created");
  },
  destroyed(){
    //console.log("destroyed");
  },
	components: {
    Listener,
    P5Dialog
	}
}
</script>

<style>

</style>