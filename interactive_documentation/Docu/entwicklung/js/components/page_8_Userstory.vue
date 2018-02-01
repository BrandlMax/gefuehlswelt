<template>
    <div class="docu">
        <LangSwitch></LangSwitch>
        <transition name="fade">           
            <BookBG v-if="bookBG"></BookBG>
        </transition>

        <BookContent>


            <!-- 7 -->
            <div v-if="this.$store.state.userstory === '7'" slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">Userstory: Melanie</h1>
                <p v-if="this.$store.state.lang">
                   Melanie ist 20 Jahre alt und wohnt bei ihren Eltern. Jeden Morgen, um 7 Uhr, steht sie auf, um sich auf ihren Tag in der Uni vorzubereiten.
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">Userstory: Melanie</h1>
                <p v-if="!this.$store.state.lang">
                Melanie is 20 years old and lives with her parents. She gets up every morning at 7 am to get ready for her day at uni.
                </p>
            </div>

            <!-- 10 -->
            <div v-if="this.$store.state.userstory === '10'" slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">Weg zur Universität</h1>
                <p v-if="this.$store.state.lang">
                Sie fährt 20 Minuten mit dem Bus zur Uni und schaut gerne aus dem Fenster raus, während sie tagträumt.    
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">Way to university</h1>
                <p v-if="!this.$store.state.lang">
                She commutes 20 minutes by bus and always looks out the window while daydreaming.
                </p>
            </div>

            <!-- 14 -->
            <div v-if="this.$store.state.userstory === '14'" slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">Universität</h1>
                <p v-if="this.$store.state.lang">
                Die Vorlesungen interessieren sie, sie studiert gerne Japanologie. Eines Tages erhofft sie sich Schriftstellerin zu werden.
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">University</h1>
                <p v-if="!this.$store.state.lang">
                She’s happy to be studying Japanology and loves attending the lectures. She hopes to become a famous novelist one day.
                </p>
            </div>

            <!-- 18 -->
            <div v-if="this.$store.state.userstory === '18'" slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">Zwischenfall</h1>
                <p v-if="this.$store.state.lang">
                    Im Vorbeigehen bemerkt sie wie abfällig ein anderes Mädchen auf ihre Schuhe schaut. Sie kehrt ihre Gedanken nach innen und fragt sich, ob sie zu altmodisch ist.
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">Incident</h1>
                <p v-if="!this.$store.state.lang">
                While walking down the halls, she notices a snide look at her shoes from another student. She gets a bit self-conscious and starts wondering whether her wardrobe is too old-fashioned.  
                </p>
            </div>

            <!-- 20 -->
            <div v-if="this.$store.state.userstory === '20'" slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">Zuhause</h1>
                <p v-if="this.$store.state.lang">
                    Am Nachmittag schaut sie sich noch gerne eine Folge ihrer Lieblingsserie an.
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">At home</h1>
                <p v-if="!this.$store.state.lang">
                After the uni lectures, she gets home and watches an episode of her favourite TV show.
                </p>
            </div>

            <!-- 23 -->
            <div v-if="this.$store.state.userstory === '23'" slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">Schlafenszeit</h1>
                <p v-if="this.$store.state.lang">
                    Kurz vor dem Schlafengehen nimmt sie sich die Zeit, um ihre Gefühle zu verarbeiten. Sie schreibt über ihren Tag, ihren Kummer und ihre Ziele, die sich nicht aus den Augen verlieren möchte.
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">Bedtime</h1>
                <p v-if="!this.$store.state.lang">
                    Before going to bed, she takes time to unwind by writing in a journal. She writes about her feelings during the day, her heartaches and goals that she doesn’t want to let out of sight.
                </p>
            </div>


            <div class="iFrameSlot" slot="right">
                <UserstorySlider></UserstorySlider>
            </div>           
        </BookContent>

        <Pagination></Pagination>

        <Modal v-if="showModal" @close="showModal = false" modalType="video">
            <!-- <img src="../../src/img/mel.png" alt="textImage"> -->
            <source src="../../src/vids/trailer_test.mp4" type="video/mp4">
        </Modal>

        <div class="arrow aleft" @click="changePage('7')">
            <img src="../../src/img/ArrowLeft.png" alt="vorherige Seite">
        </div>

        <div class="arrow aright" @click="changePage('9')">
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
import UserstorySlider from './interactiveComps/UserstorySlider.vue';


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
      LangSwitch,
      UserstorySlider
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

