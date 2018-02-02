<template>
    <div class="docu">
        <LangSwitch></LangSwitch>

        <transition name="fade">           
            <BookBG v-if="bookBG"></BookBG>
        </transition>

        <BookContent>
            <div slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">Hilfe</h1>
                <p v-if="this.$store.state.lang">
                Wenn der Nutzer nicht weiter weiß, kann er oder sie das Wort Hilfe schreiben. Dadurch soll Gefühlswelt eine anleitende Animation im Hintergrund abspielen. Dies geschieht durch einen Kreis, welcher die Stiftspitze simuliert und so dem Nutzer die Bewegungsabläufe bzw. Muster vorführt, die er dann nachmachen kann.
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">Help</h1>
                <p v-if="!this.$store.state.lang">
                If the user needs help, he or she can write “help”. This prompts Gefühlswelt to play a tutorial animation in the background. We’ve chosen to animate a dot that simulates the pen, in order to encourage the user to imitate the animated sequence.
                </p>
            </div>

            <div class="iFrameSlot" slot="right">
                <TutVideo v-if="this.$store.state.lang" :tut="'04_de'"></TutVideo>
                <TutVideo v-if="!this.$store.state.lang" :tut="'04_en'"></TutVideo>

                <iframe src="./src/iFrame/prototyp/index.html#/entry/3">
                </iframe>
            </div>           
        </BookContent>

        <Pagination></Pagination>

        <Modal v-if="showModal" @close="showModal = false" modalType="image">
            <img src="./src/img/mel.png" alt="textImage">
            <!-- <source src="../../src/vids/trailer_test.mp4" type="video/mp4"> -->
        </Modal>

        <div class="arrow aleft" @click="changePage('6a')">
            <img src="./src/img/ArrowLeft.png" alt="vorherige Seite">
        </div>

        <div class="arrow aright" @click="changePage('7')">
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
          bookBG: true,
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

