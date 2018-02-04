<template>
    <div class="docu">
        <LangSwitch></LangSwitch>
        <transition name="fade">           
            <BookBG v-if="bookBG"></BookBG>
        </transition>

        <BookContent>
            <div slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">Marke</h1>
                <p v-if="this.$store.state.lang">
                    Das Markenprisma diente uns als Ansatz zur Beschreibung unserer Markenidentität, welche uns eine grobe Richtung für Kommunikation und Gestaltung gab.
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">Brand</h1>
                <p v-if="!this.$store.state.lang">
                    The brand Identity Prism serves as an overview for the values that our company and brand is going to be associated with. It’s a guideline how Gefühlswelt is going to market itself to its users.
                </p>
            </div>

            <div v-if="this.$store.state.lang" class="iFrameSlot" slot="right" style="cursor: zoom-in;" @click="showModal = true">
                <img src="./src/img/prism_de.png" alt="Brand Identity Prism">
            </div>

            <div v-if="!this.$store.state.lang" class="iFrameSlot" slot="right" style="cursor: zoom-in;" @click="showModal = true">
                <img src="./src/img/prism_en.png" alt="Brand Identity Prism">
            </div>           
        </BookContent>

        <Pagination></Pagination>

        <Modal v-if="showModal" @close="showModal = false" modalType="image">
            <img v-if="this.$store.state.lang" src="./src/img/prism_de_full.png" alt="Brand Identity Prism">
            <img v-if="!this.$store.state.lang" src="./src/img/prism_en_full.png" alt="Brand Identity Prism">
        </Modal>

        <div class="arrow aleft" @click="changePage('10')">
            <img src="./src/img/ArrowLeft.png" alt="vorherige Seite">
        </div>

        <div class="arrow aright" @click="changePage('12')">
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

