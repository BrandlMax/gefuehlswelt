<template>
    <div class="docu">
        <LangSwitch></LangSwitch>

        <transition name="fade">           
            <BookBG v-if="bookBG"></BookBG>
        </transition>

        <BookContent>
            <div slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">Gedankensphären</h1>
                <p v-if="this.$store.state.lang">
Jede Gedankensphäre repräsentiert ein eigenes Journal, das durch eine frei gezeichnete Form vom Nutzer bestimmt wird.
<br /><br />
Einzelne Einträge werden als Gedankensplitter benannt, diese werden auch vom Nutzer als eine Fläche gezeichnet.
Die Anzahl an Gedankensplittern beeinflusst die Gestaltung der inneren Fläche der Gedankensphäre.
<br /><br />
Es kann eine unendliche Anzahl an Gedankensphären und Gedankensplittern angelegt werden. Damit entsteht mit der Zeit eine sehr individuelle Formlandschaft, die den Journalfortschritt des Nutzers wiedergibt.
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">Gedankensphären</h1>
                <p v-if="!this.$store.state.lang">
Every Gedankensphäre represents a journal. The user decides what he or she wants that shape to look like by drawing it.
<br /><br />
Single entries in the journal are called Gedankensplitter. The user can draw these within the Gedankensphäre. The more entries are created, the fuller the Gedankensphäre gets.
<br /><br />
You can create an unlimited amount of Gedankensphären and Gedankensplitter. And with time, the user will have created a very personal landscape that marks the progress of his or her journal journey.
                </p>
            </div>

            <div class="iFrameSlot" slot="right">
                <TutVideo :tut="'01'"></TutVideo>

                <iframe src="./src/iFrame/prototyp/index.html">
                </iframe>
            </div>           
        </BookContent>

        <Pagination></Pagination>

        <Modal v-if="showModal" @close="showModal = false" modalType="image">
            <img src="./src/img/mel.png" alt="textImage">
            <!-- <source src="../../src/vids/trailer_test.mp4" type="video/mp4"> -->
        </Modal>

        <div class="arrow aleft" @click="changePage('2')">
            <img src="./src/img/ArrowLeft.png" alt="vorherige Seite">
        </div>

        <div class="arrow aright" @click="changePage('5')">
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

