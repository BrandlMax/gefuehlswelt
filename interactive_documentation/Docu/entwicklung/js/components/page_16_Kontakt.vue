<template>
    <div class="docu">
        <LangSwitch></LangSwitch>
        <transition name="fade">           
            <BookBG v-if="bookBG"></BookBG>
        </transition>

        <BookContent>
            <div slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">Kontakt</h1>
                <p v-if="this.$store.state.lang">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                    <a class="btn" href="http://brandl-maximilian.de/h_da/p3/P3_Feinkonzeptdokumentation.pdf">Download Feinkonzept (pdf)</a>
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">Kontakt EN</h1>
                <p v-if="!this.$store.state.lang">
                    Englisch Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                    <a class="btn" href="http://brandl-maximilian.de/h_da/p3/P3_Feinkonzeptdokumentation.pdf">Download detailed concept (pdf)</a>
                </p>
            </div>

            <div class="iFrameSlot" slot="right">
                <img src="../../src/img/team.png" alt="Team Gefühlswelt">
            </div>            
        </BookContent>

        <Pagination></Pagination>

        <Modal v-if="showModal" @close="showModal = false" modalType="image">
            <img src="../../src/img/team_full.png" alt="Team Gefühlswelt">
        </Modal>

        <div class="arrow aleft" @click="changePage('15')">
            <img src="../../src/img/ArrowLeft.png" alt="vorherige Seite">
        </div>

        <!-- <div class="arrow aright" @click="changePage('1')">
            <img src="../../src/img/ArrowRight.png" alt="nächste Seite">
        </div> -->
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

p a.btn {
    display: block;
    background: #75cab1;
    border-radius: 360px;
    color: #fff;
    padding: 10px 30px 10px 30px;
    width: fit-content;
    margin-top: 23px;
}

</style>

