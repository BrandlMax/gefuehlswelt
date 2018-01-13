<template>
    <div class="docu">
        <!-- Navigation -->
        <affix 
            class="sidebar-menu vue-affix affix" 
            :scrollAffix="false"
            :offset="{top: '20vh', bottom: 40 }"
            relative-element-selector="#content" 
            style="width: 250px, top: 20vh">
            
            <scrollactive class="menu-list" :offset="100" :duration="1000" active-class="active">

            <a href="#FormatTest" class="scrollactive-item" title="Format Test">Format Test</a>

            <a href="#markdown-top-level" class="scrollactive-item" title="markdowntoplevel">Markdown Top Level</a>
            
            <a href="#melanie" class="scrollactive-item" title="melanie">Melanie</a>

            <a href="#abb2" class="subitem scrollactive-item" title="Abbildung">Abbildung2</a>

            
            </scrollactive>

        </affix>

        <div id="content" class="contentarea">
            <ChapterFormat :idLink="'FormatTest'"></ChapterFormat>
        </div>
    </div>
</template>

<script>
// Kapitel einfügen
import ChapterFormat from './chapters/chapter_format.vue';


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
  },
  created () {

  },
  destroyed(){

  },components: {
      ChapterFormat
  },
  methods:{

  }
}
</script>

<style>

/* Global Style */

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

/* Sidebar */
.sidebar-menu.vue-affix.affix {
    width: 230px;
}

.sidebar-menu.vue-affix.affix-top {
    position: fixed;
    top: 20vh;
}

nav.scrollactive-nav.menu-list {
    width: 100%;
}

.sidebar-menu a.subitem {
    padding-left: 40px;
}

.sidebar-menu a {
    display: block;
    padding-left: 20px;
    opacity: 0.5;

    -webkit-transition: all 1s;
    transition: all 1s;
    font-size: 13px;
}

.sidebar-menu a:hover {
    opacity: 1;
    -webkit-transition: all 1s;
    transition: all 1s;
}

.sidebar-menu a.active {
    font-weight: bold;
    font-size: 14px;
    opacity: 1;
}

</style>

