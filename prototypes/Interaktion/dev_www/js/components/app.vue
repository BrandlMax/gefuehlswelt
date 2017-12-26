<template>
<mainCanvas></mainCanvas>
</template>

<script>

// Interaktionselemente
import mainCanvas from './interaktion/mainCanvas.vue';

// Werkzeuge
import Beispiel from './werzeuge/beispiel.vue';

console.log('App');

export default {
  data(){
      return{
      }
  },
  mounted() {

  },
  created () {

  },
  destroyed(){

  },components: {
    mainCanvas,
    Beispiel
  },
  methods:{

  }
}
</script>

<style scoped>

</style>

