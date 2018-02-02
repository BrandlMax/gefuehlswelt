<template>
    <div class="docu">
        <LangSwitch></LangSwitch>
        <transition name="fade">           
            <BookBG v-if="bookBG"></BookBG>
        </transition>

        <BookContent>
            <!-- sad -->
            <div v-if="this.$store.state.persona === 'sad'" slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">An schlechten Tagen</h1>
                <p v-if="this.$store.state.lang">
Findet sie ihre Handschrift hässlich und hat Selbstzweifel.
Sie findet auch keine Inspiration und fängt erst gar nicht an zu schreiben. Sie ist melancholisch und fühlt sich ihren Gefühlen ausgeliefert. Es fällt ihr schwer, ihre Einträge zu gestalten.
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">On bad days</h1>
                <p v-if="!this.$store.state.lang">
She can’t stand her own handwriting and suffers from a lot of self-doubt. She feels like she doesn’t have any inspiration, that her day was dull, so she doesn’t write anything at all. She’s full of melancholy and doesn’t know how to cope with her feelings. She finds it hard to care about making beautiful entries.
                </p>
            </div>

            <!-- Normal -->
            <div v-if="this.$store.state.persona === 'normal'" slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">Persona Normal</h1>
                <p v-if="this.$store.state.lang">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">Persona Normal EN</h1>
                <p v-if="!this.$store.state.lang">
                    Englisch Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </p>
            </div>


            <!-- Happy-->
            <div v-if="this.$store.state.persona === 'happy'" slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">An guten Tagen</h1>
                <p v-if="this.$store.state.lang">
                    Nimmt sich Melanie Zeit für sich selbst.
                    Sie wirft gerne einen Rückblick auf ihre Vergangenheit, um zu wie sie sich als Mensch entwickelt hat. Sie manifestiert ihre Innenwelt und zeichnet in ihre Einträge. Sie nimmt sich die Zeit, um neue Blätter für kommende Einträge liebevoll vorzubereiten.
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">On good days</h1>
                <p v-if="!this.$store.state.lang">
Melanie takes time for herself. She takes a look at old journal entries to reminisce about her past and see how much she’s grown as a person. She manifests her inner world and draws a lot in her entries. She takes the time to carefully prepare the next pages in which she’ll be writing.
                </p>
            </div>

            <div class="iFrameSlot" slot="right">
                <PersonaSlider></PersonaSlider>
            </div>           
        </BookContent>

        <Pagination></Pagination>

        <Modal v-if="showModal" @close="showModal = false" modalType="video">
            <!-- <img src="../../src/img/mel.png" alt="textImage"> -->
            <source src="./src/vids/trailer_test.mp4" type="video/mp4">
        </Modal>

        <div class="arrow aleft" @click="changePage('8')">
            <img src="./src/img/ArrowLeft.png" alt="vorherige Seite">
        </div>

        <div class="arrow aright" @click="changePage('10')">
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
import PersonaSlider from './interactiveComps/PersonaSlider.vue';


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
      PersonaSlider
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

