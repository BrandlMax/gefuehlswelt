<template>
    <div class="docu">
        <h1>{{this.$store.state.name}}</h1>
        <Chapter v-for="(item, index) in this.$store.state.chapters" :key="index" :chapterContent="item">
        </Chapter>
    </div>
</template>

<script>
import Chapter from './chapter.vue';

export default {
  props: [],
  data(){
      return{
        
      }
  },
  mounted() {
      console.log('Docu', this.$store.state.chapters);
  },
  created () {

  },
  destroyed(){

  },components: {
      Chapter,
  },
  methods:{

  }
}
</script>

<style scoped>

</style>

