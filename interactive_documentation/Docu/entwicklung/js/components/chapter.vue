<template>
    <div class="chapter" v-html="convertMarkdown(chapterContent.markdown)">

        <component v-for="(abb, index) in chapterContent.abb" :key="index" :is="abb"></component>

    </div>
</template>

<script>
// Import Abbildungen
import abb from './abbildungen/abb.vue';
import abb2 from './abbildungen/abb2.vue';
var converter
export default {
  props: ['chapterContent'],
  data(){
      return{

      }
  },
  mounted() {
      console.log('Chapter');
      // Create Converter
    // https://github.com/showdownjs/showdown 
    converter = new showdown.Converter({});
  },
  created () {
      // Highlight Code Parts
      hljs.initHighlightingOnLoad();
  },
  destroyed(){

  },components: {
      // Add Abbildungen
      abb,
      abb2
  },
  methods:{
      convertMarkdown: function(text){
        let outputHtml = [] ;
        
        // Text to Array
        // text = text.split(/\n/);
        console.log('unformatted Text', text)
        var html = converter.makeHtml(text);
        /*
        text.forEach(element => {

            var html = converter.makeHtml(element);
            //console.log('converted Line', html);
            outputHtml.push(html);
            //console.log('outputHTML', outputHtml);

        });
        */
        return html;

      }
  }
}
</script>

<style scoped>

</style>

