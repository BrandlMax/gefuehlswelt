<template>
    <div class="docu">
        <LangSwitch></LangSwitch>
        <transition name="fade">           
            <BookBG v-if="bookBG"></BookBG>
        </transition>

        <BookContent>
            <div slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">Prototyp</h1>
                <p v-if="this.$store.state.lang">
Der Prototyp ist mit VueJS gebaut, einem Javascript framework das es uns ermöglichte schnell Ergebnisse zu erhalten. Darauf aufbauend nutzen wir die Vue-Plugins „vuex“ und „vue-router“.  
Für die Handschrift- und Formenerkennung diente uns die MyScript API. Die Maskierungen der Werkzeuge und Gedankensphären wurden mit SVG-Masks erzeugt.
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">Prototype</h1>
                <p v-if="!this.$store.state.lang">
The prototype is build with VueJS, a JavaScript framework that yields quick results. The Vue plugins “vuex” and “vue-router” are also used. The MyScript API is used for the handwriting and shape recognition. The masking of different layers for tools and Gedankensphären was achieved through SVG masks.
                </p>
            </div>

            <div class="iFrameSlot" slot="right" style="cursor: zoom-in;" @click="showModal = true">
                <img src="./src/img/Aufbau.png" alt="Systemskizze Prototyp">
            </div>            
        </BookContent>

        <Pagination></Pagination>

        <Modal v-if="showModal" @close="showModal = false" modalType="image">
            <img src="./src/img/Aufbau_full.png" alt="Systemskizze Prototyp">
        </Modal>

        <div class="arrow aleft" @click="changePage('13')">
            <img src="./src/img/ArrowLeft.png" alt="vorherige Seite">
        </div>

        <div class="arrow aright" @click="changePage('16')">
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

