<template>
    <div class="docu">
        <LangSwitch></LangSwitch>
        <transition name="fade">           
            <BookBG v-if="bookBG"></BookBG>
        </transition>

        <BookContent>
            <div slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">Gefühlswelt</h1>
                <p v-if="this.$store.state.lang">
                    Für schreibfreudige Menschen, die Klarheit im Kopf schaffen wollen, ist Gefühlswelt ein Lifestyle Produkt, welches ihre Gedanken und Gefühle unterbringt, Datensicherheit bietet, mit dem sie schnell und einfach anhand von Werkzeugen ihre Innenwelt individuell manifestieren können.
                    <br /><br />
                    Im Gegensatz zum analogen Journal, bietet Gefühlswelt die Möglichkeit durch verschiedene digitale und generative Eingabemethoden einen Ort an dem unendlich oft experementiert werden kann.
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">Gefühlswelt</h1>
                <p v-if="!this.$store.state.lang">
                    Gefühlswelt is a lifestyle product for people with a love for writing, who want to find some clarity of mind. It’s a place for their thoughts and feelings. 
It’s a great tool to manifest your inner world quickly and easily.
<br /><br />
As opposed to conventional journals, Gefühlswelt offers you a wide variety of digital input and generative tools. It’s a great space to experiment as often as you like without any qualms about making mistakes.
                </p>
            </div>

            <div class="iFrameSlot" slot="right" style="cursor: pointer;" @click="showModal = true">
                <img src="./src/img/Trailer_Placeholder.png" alt="Trailer">
            </div>           
        </BookContent>

        <Pagination></Pagination>

        <Modal v-if="showModal" @close="showModal = false" modalType="video">
            <!-- <img src="../../src/img/mel.png" alt="textImage"> -->
            <source v-if="this.$store.state.lang" src="./src/vids/Trailer_de.mp4" type="video/mp4">
            <source v-if="!this.$store.state.lang" src="./src/vids/Trailer_en.mp4" type="video/mp4">
        </Modal>

        <!-- <div class="arrow aleft" @click="changePage('2')">
            <img src="../../src/img/ArrowLeft.png" alt="vorherige Seite">
        </div> -->

        <div class="arrow aright" @click="changePage('1')">
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
          showModal: true,
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

