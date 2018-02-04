<template>
    <div class="docu">
        <LangSwitch></LangSwitch>

        <transition name="fade">           
            <BookBG v-if="bookBG"></BookBG>
        </transition>

        <BookContent>
            <div slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">Inspiration</h1>
                <p v-if="this.$store.state.lang">
                Wenn nötig, bietet Gefühlswelt dem Nutzer Inspiration an. Der Nutzer kann ‘Inspire’ in eine frei gezeichnete Form schreiben und erhält Vorschläge von Gefühlswelt. Dadurch kann der Nutzer von Gefühlswelt geleitet, als auch inspiriert werden.
Wenn dem Nutzer ein Vorschlag gefällt kann er diesen durch zeichnen eines Häkchens bestätigen. Sollte der Vorschlag nicht gefallen, kann der Nutzer diesen durch ein Durchstreichen verwerfen.
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">Inspiration</h1>
                <p v-if="!this.$store.state.lang">
                Gefühlswelt also provides inspiration, if needed. By writing the word “inspire”, the user triggers Gefühlswelt to assist with suggestions. That way the user will never run out of ideas.
Should the user like the suggestion, he or she can select it by drawing a tick mark. In case it’s not to their liking, he or she can strike though it or cross it out.
                </p>
            </div>

            <div class="iFrameSlot" slot="right">
                <TutVideo :tut="'03'"></TutVideo>

                <iframe src="./src/iFrame/prototyp/index.html#/entry/4">
                </iframe>
            </div>           
        </BookContent>

        <Pagination></Pagination>

        <Modal v-if="showModal" @close="showModal = false" modalType="image">
            <img src="./src/img/mel.png" alt="textImage">
            <!-- <source src="../../src/vids/trailer_test.mp4" type="video/mp4"> -->
        </Modal>

        <div class="arrow aleft" @click="changePage('5')">
            <img src="./src/img/ArrowLeft.png" alt="vorherige Seite">
        </div>

        <div class="arrow aright" @click="changePage('6b')">
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

