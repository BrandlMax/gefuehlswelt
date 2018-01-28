<template>
    <div class="docu">
        <LangSwitch></LangSwitch>
        <transition name="fade">           
            <BookBG v-if="bookBG"></BookBG>
        </transition>

        <BookContent>
            <div slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">Styleguide</h1>
                <p v-if="this.$store.state.lang">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">Styleguide EN</h1>
                <p v-if="!this.$store.state.lang">
                    Englisch Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </p>
            </div>

            <div class="iFrameSlot" slot="right" style="cursor: pointer;">
                <h1 v-if="this.$store.state.lang" class="fonttest" contenteditable="true">Bearbeite mich und spiele mit der Schrift.</h1>
                <h1 v-if="!this.$store.state.lang" class="fonttest" contenteditable="true">Change this text and play with the font.</h1>
                <img src="../../src/img/fontsbg.png" alt="Fonts">
            </div>           
        </BookContent>

        <Pagination></Pagination>

        <!-- <Modal v-if="showModal" @close="showModal = false" modalType="image">
            <img src="../../src/img/mel.png" alt="textImage">
            <source src="../../src/vids/trailer_test.mp4" type="video/mp4">
        </Modal> -->

        <div class="arrow aleft" @click="changePage('6')">
            <img src="../../src/img/ArrowLeft.png" alt="vorherige Seite">
        </div>

        <div class="arrow aright" @click="changePage('8')">
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

h1.fonttest {
    position: absolute;
    width: 27vw;
    line-height: 48px;
    padding: 20px;
    box-sizing: border-box;
    color: #fff;
    margin-top: 1vw;
    overflow-y: scroll;
    overflow-x: auto;
    word-wrap: break-word;
    word-break: break-word;
    height: 200px;
    font-size: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (orientation: portrait) {
    h1.fonttest {
        position: absolute;
        width: 42vw;
        line-height: 48px;
        padding: 20px;
        box-sizing: border-box;
        color: #fff;
        margin-top: 1vw;
        height: 200px;
        font-size: 36px;
    }
}

</style>

