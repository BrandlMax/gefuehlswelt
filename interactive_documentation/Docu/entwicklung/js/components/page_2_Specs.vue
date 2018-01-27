<template>
    <div class="docu">
        <LangSwitch></LangSwitch>
        
        <transition name="fade">           
            <BookBG v-if="bookBG"></BookBG>
        </transition>

        <BookContent>
            <div slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">Specs</h1>
                <p v-if="this.$store.state.lang">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">Specs EN</h1>
                <p v-if="!this.$store.state.lang">
                    Englisch Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </p>
            </div>

            <div class="iFrameSlot" slot="right">
                <SpecsSlider></SpecsSlider>
            </div>           
        </BookContent>

        <Pagination></Pagination>

        <Modal v-if="showModal" @close="showModal = false" modalType="image">
            <img src="../../src/img/mel.png" alt="textImage">
            <!-- <source src="../../src/vids/trailer_test.mp4" type="video/mp4"> -->
        </Modal>

        <div class="arrow aleft" @click="changePage('1')">
            <img src="../../src/img/ArrowLeft.png" alt="vorherige Seite">
        </div>

        <div class="arrow aright" @click="changePage('3')">
            <img src="../../src/img/ArrowRight.png" alt="nächste Seite">
        </div>
    </div>
</template>

<script>
// Kapitel einfügen
import BookBG from './book/bookbg.vue';
import BookContent from './book/bookcontent.vue';
import Pagination from './book/pagination.vue';
import Modal from './book/modal.vue';
import LangSwitch from './book/langswitch.vue';
// interComps
import TutVideo from './interactiveComps/tutorialVideo.vue';
import CoverSlider from './interactiveComps/coverSlider.vue';
import SpecsSlider from './interactiveComps/specsSlider.vue';


// Search

export default {
  props: [],
  data(){
      return{
          bookBG: false,
          showModal: false
      }
  },
  mounted() {
      console.log('Docu');

      // Refresh Local Storage
      localStorage.clear();


  },
  created () {

  },
  destroyed(){

  },components: {
      BookBG,
      BookContent,
      Pagination,
      Modal,
      TutVideo,
      CoverSlider,
      LangSwitch,
      SpecsSlider
  },
  methods:{
    checkClick(){
        console.log('click')
    },
    changePage(id){
        this.$router.push({ name: id})
    },
  }
}
</script>

<style>

</style>

