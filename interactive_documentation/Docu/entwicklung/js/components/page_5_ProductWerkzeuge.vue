<template>
    <div class="docu">
        <LangSwitch></LangSwitch>

        <transition name="fade">           
            <BookBG v-if="bookBG"></BookBG>
        </transition>

        <BookContent>
            <div slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">Werkzeuge</h1>
                <p v-if="this.$store.state.lang">
                    Durch die generativen Werkzeuge, möchten wir dem Nutzer die Möglichkeit gegeben, auch ohne Erfahrung im Zeichnen beeindruckende Einträge anzulegen. Durch diese soll die Gestaltung des Eintrages leicht und dennoch ästhetisch ansprechend gemacht werden. Probiere doch mal das Werkzeug „<span class="rotate">Sketch, Mandala, Ugly, Easy, Colors, Rain, Circles, Orange, White, Text, Pattern</span>“.
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">Tools</h1>
                <p v-if="!this.$store.state.lang">
                    Gefühlswelt helps the user to create stunning entries, even if they’re not a master at drawing, by offering generative tools. These tools make it easy for the user to create aesthetically pleasing designs and drawings. Let's try „<span class="rotate">Sketch, Mandala, Ugly, Easy, Colors, Rain, Circles, Orange, White, Text, Pattern</span>“.
                </p>
            </div>

            <div class="iFrameSlot" slot="right">
                <TutVideo :tut="'02'"></TutVideo>

                <iframe src="./src/iFrame/prototyp/index.html#/entry/2">
                </iframe>
                
            </div>           
        </BookContent>

        <Pagination></Pagination>

        <Modal v-if="showModal" @close="showModal = false" modalType="image">
            <img src="./src/img/mel.png" alt="textImage">
            <!-- <source src="../../src/vids/trailer_test.mp4" type="video/mp4"> -->
        </Modal>

        <div class="arrow aleft" @click="changePage('3')">
            <img src="./src/img/ArrowLeft.png" alt="vorherige Seite">
        </div>

        <div class="arrow aright" @click="changePage('6a')">
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
          showModal: false,
      }
  },
  mounted() {
      console.log('Docu');

      // Refresh Local Storage
      localStorage.clear();

      $(".rotate").textrotator({
        animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
        separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
        speed: 2000 // How many milliseconds until the next word show.
    });


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

