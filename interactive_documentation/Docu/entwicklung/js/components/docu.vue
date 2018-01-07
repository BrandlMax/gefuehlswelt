<template>
    <div class="docu">
        <div id="content" class="contentarea">
            <Chapter v-for="(item, index) in this.$store.state.chapters" :key="index" :chapterContent="item">
            </Chapter>
        </div>
    </div>
</template>

<script>
import Chapter from './chapter.vue';

// Search
document.addEventListener("keydown", (e) => {
    if(e.key === 'f' && e.metaKey === true){
        window.find('nutzer', false, false, true,
        false, true, true);
    }
    // console.log('event',e);
});

export default {
  props: [],
  data(){
      return{
        
      }
  },
  mounted() {
      console.log('Docu', this.$store.state.chapters);

      // Create Table of Content
       $('.chapter').jqTOC({
           tocTopLink: '',
           tocTitle: '',
           tocShowOnClick: false,
       });
  },
  created () {

  },
  destroyed(){

  },components: {
      Chapter
  },
  methods:{

  }
}
</script>

<style>

body{
    font-family: 'importedLato', Arial, sans-serif;
    font-size: 16px;
    line-height: 32px;
    color: #333333;
    background: #F3F2EE;

    margin: 0;
    padding: 0;
}

h1, h2, h3, h4, h5{
    font-family: 'selimaregular', cursive;
    color: #333333;
}

h1{
    font-size: 55px;
    line-height: 50px;
    margin-top: 60px;
}

h2{
    font-size: 32px;
}

img{
    width: 100%;
}

a {
    text-decoration: none;
    color: #6EB5C9;
    opacity: 1;
}

a:hover{
    opacity: 0.5;
    -webkit-transition: all 1s;
    transition: all 1s;
}

.contentarea{
    max-width: 640px;
    margin: 0 auto;
    margin-top: 20vh;
    padding: 40px;
}

/* Quotes */

blockquote p {
    display: inline;
}

blockquote {
    margin-left: 0;
    padding-left: 40px;
    border-left: 5px solid #BADCCC;
}

/* Table of Content */
#toc_container {
    position: fixed;
    top: 10vh;
    padding-top: 20px;
    padding-bottom: 20px;
    border-left: 3px solid #6EB5C9;
    opacity: 0.3;
    font-size: 12px;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    height: 80vh;
    overflow: scroll;
}

#toc_container:hover{
    opacity: 1;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
}

.toc_content a {
    display: block;
}
</style>

