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
                    Alessa Klinger 
                    <br />
                    <a href="mailto:alessa-klinger@hotmail.de">alessa-klinger@hotmail.de</a>
                    <br /><br />
                    Janett Herdt
                    <br /> 
                    <a href="mailto:janett.herdt@gmail.com">janett.herdt@gmail.com</a>
                    <br /><br />
                    Maximilian Brandl 
                    <br />
                    <a href="mailto:hi@brandl-maximilian.de">hi@brandl-maximilian.de</a>
                </p>
                <a class="btn" v-if="this.$store.state.lang && this.ELECTRON" href="http://brandl-maximilian.de/h_da/p3/P3_Feinkonzeptdokumentation.pdf">Download Feinkonzept (pdf)</a>
                <a class="btn" v-if="this.$store.state.lang && !this.ELECTRON" href="http://brandl-maximilian.de/h_da/p3/P3_Feinkonzeptdokumentation.pdf" target="_blank">Download Feinkonzept (pdf)</a>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">Contact</h1>
                <p v-if="!this.$store.state.lang">
                    Alessa Klinger 
                    <br />
                    <a href="mailto:alessa-klinger@hotmail.de">alessa-klinger@hotmail.de</a>
                    <br /><br />
                    Janett Herdt
                    <br /> 
                    <a href="mailto:janett.herdt@gmail.com">janett.herdt@gmail.com</a>
                    <br /><br />
                    Maximilian Brandl 
                    <br />
                    <a href="mailto:hi@brandl-maximilian.de">hi@brandl-maximilian.de</a>
                </p>
                <a class="btn" v-if="!this.$store.state.lang && this.ELECTRON" href="http://brandl-maximilian.de/h_da/p3/P3_Feinkonzeptdokumentation.pdf">Download concept - german (pdf)</a>
                <a class="btn" v-if="!this.$store.state.lang && !this.ELECTRON" href="http://brandl-maximilian.de/h_da/p3/P3_Feinkonzeptdokumentation.pdf" target="_blank">Download concept - german (pdf)</a>
            </div>

            <div class="iFrameSlot" slot="right">
                <img src="./src/img/team.png" alt="Team Gefühlswelt">
            </div>            
        </BookContent>

        <Pagination></Pagination>

        <Modal v-if="showModal" @close="showModal = false" modalType="image">
            <img src="./src/img/team_full.png" alt="Team Gefühlswelt">
        </Modal>

        <div class="arrow aleft" @click="changePage('14')">
            <img src="./src/img/ArrowLeft.png" alt="vorherige Seite">
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
          ELECTRON: false
      }
  },
  mounted() {
      console.log('Docu');

      // Refresh Local Storage
      localStorage.clear();

            // ELECTRON FIX
            var userAgent = navigator.userAgent.toLowerCase();
            if (userAgent.indexOf(' electron/') > -1) {
                console.log('IN EEELLLLEEEECTROOOOON!!!!!!!!', userAgent);
                this.ELECTRON = true;
            }


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

<style scoped>

a.btn {
    display: block;
    background: #75cab1;
    border-radius: 360px;
    color: #fff;
    padding: 10px 30px 10px 30px;
    width: fit-content;
    margin-top: 23px;
}

</style>

