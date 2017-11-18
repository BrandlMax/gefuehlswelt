<template>
  <div>
    <h1>Speech</h1>
    <p>Demo of Speech Recognition</p>
    <Listener></Listener>
  </div>
</template>

<script>
import Listener from './components/listener.vue';

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
	}
}
</script>

<style>

</style>