<template>
    <div class="docu">
        <LangSwitch></LangSwitch>
        <transition name="fade">           
            <BookBG v-if="bookBG"></BookBG>
        </transition>

        <BookContent>
            <div slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">Systemdiagramm</h1>
                <p v-if="this.$store.state.lang">
                    Das Systemdiagramm dient zur Übersicht des Modells von Gefühlswelt.
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">Systemdiagramm EN</h1>
                <p v-if="!this.$store.state.lang">
                    The system diagram illustrates the model of Gefühlswelt.
                </p>
            </div>

            <div class="iFrameSlot" slot="right" style="cursor: zoom-in;" @click="showModal = true">
                <img v-if="this.$store.state.lang" src="./src/img/sys_de.png" alt="Systemskizze">
                <img v-if="!this.$store.state.lang" src="./src/img/sys_en.png" alt="Systemskizze">
            </div>            
        </BookContent>

        <Pagination></Pagination>

        <Modal v-if="showModal" @close="showModal = false" modalType="image">
            <img v-if="this.$store.state.lang" src="./src/img/sys_de_full.png" alt="Systemskizze">
            <img v-if="!this.$store.state.lang" src="./src/img/sys_en_full.png" alt="Systemskizze">
        </Modal>

        <div class="arrow aleft" @click="changePage('11')">
            <img src="./src/img/ArrowLeft.png" alt="vorherige Seite">
        </div>

        <div class="arrow aright" @click="changePage('13')">
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


// Search

export default {
  props: [],
  data(){
      return{
          bookBG: false,
          showModal: false,
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

