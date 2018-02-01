<template>
    <div class="docu">
        <LangSwitch></LangSwitch>
        <transition name="fade">           
            <BookBG v-if="bookBG"></BookBG>
        </transition>

        <BookContent>
            <div slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">Kostenanalyse</h1>
                <p v-if="this.$store.state.lang">
                    Um Gefühlswelt auch unter realistischen Bedingungen auf dem Markt testen zu können, kalkulieren wir welche monetären Mittel für die Entstehung von Gefühlswelt gebraucht werden würden.
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">Cost Analysis</h1>
                <p v-if="!this.$store.state.lang">
                    A cost analysis has been made in order to calculate the costs of Gefühlswelt and test whether it would be a viable business idea.
                </p>
            </div>

            <div class="iFrameSlot" slot="right" style="cursor: zoom-in;"  @click="showModal = true">
                <img v-if="this.$store.state.lang" src="../../src/img/Chart_de.png" alt="Chart">
                <img v-if="!this.$store.state.lang" src="../../src/img/Chart.png" alt="Chart">
            </div>           
        </BookContent>

        <Pagination></Pagination>

        <Modal v-if="showModal" @close="showModal = false" modalType="excel" iframelink="http://localhost:3000/src/iFrame/projektcalc">
            
        </Modal>

        <div class="arrow aleft" @click="changePage('9')">
            <img src="../../src/img/ArrowLeft.png" alt="vorherige Seite">
        </div>

        <div class="arrow aright" @click="changePage('11')">
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
.klickzone {
    height: 45.8vw;
    cursor: zoom-in;
    position: absolute;
    width: 33vw;
    margin-left: -0.6vw;
    margin-top: -1vw;
}

</style>

