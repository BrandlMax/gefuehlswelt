<template>
  <div>
    <h1>Write</h1>
    <p>Demo of Writing</p>
    
    <Writer></Writer>

  </div>
</template>

<script>
console.log('Write Template!');
import Writer from './components/writer.vue';

export default {
  props: [ ],
  
  data () {
    return {

    }
  },
  mounted() {
    console.log("mounted"); 
  },
  created () {
    console.log("created");
  },
  destroyed(){
    console.log("destroyed");
  },
	components: {
		Writer,
	}
}
</script>

<style scoped>

</style>