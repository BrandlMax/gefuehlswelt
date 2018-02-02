<template>
    <div class="docu">
        <LangSwitch></LangSwitch>
        
        <transition name="fade">           
            <BookBG v-if="bookBG"></BookBG>
        </transition>

        <BookContent>
            <div slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">Cover</h1>
                <p v-if="this.$store.state.lang">
                    Die austauschbaren Covers helfen dem Nutzer dabei, eine Form der Erinnerung an seine persönliche Geschichte beizubehalten. Diese sollen immer wieder neu gestaltet werden können. Der Nutzer hat dabei die Möglichkeit diese selbst anzulegen und auszudrucken, einfach selbst eines zu basteln oder sich eines in unserem Cover Store zu kaufen.
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">Cover</h1>
                <p v-if="!this.$store.state.lang">
                    The exchangeable covers allow the user to create a personal history. He or she can design them whichever way they like. Be it by making a digital image and printing it, crafting it themselves or buying one through our online store.
                </p>
            </div>

            <div class="iFrameSlot" slot="right">
                <CoverSlider></CoverSlider>
            </div>           
        </BookContent>

        <Pagination></Pagination>

        <Modal v-if="showModal" @close="showModal = false" modalType="image">
            <img src="./src/img/mel.png" alt="textImage">
            <!-- <source src="../../src/vids/trailer_test.mp4" type="video/mp4"> -->
        </Modal>

        <div class="arrow aleft" @click="changePage('0')">
            <img src="./src/img/ArrowLeft.png" alt="vorherige Seite">
        </div>

        <div class="arrow aright" @click="changePage('2')">
            <img src="./src/img/ArrowRight.png" alt="nächste Seite">
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
      LangSwitch
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

