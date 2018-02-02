<template>
    <div class="docu">
        <LangSwitch></LangSwitch>
        <transition name="fade">           
            <BookBG v-if="bookBG"></BookBG>
        </transition>

        <BookContent>
            <div slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">Typografie</h1>
                <p v-if="this.$store.state.lang">
                    Die verwendeten Schriften sind <a href="https://fonts.google.com/specimen/Lato?selection.family=Lato" target="_blank">Lato</a> und <a href="https://www.fontsquirrel.com/fonts/selima" target="_blank">Selima</a>.
                    <br /> <br />
                    Der Text ist linksbündig ausgerichetet. Die Zeilenlänge ist auf den Bildschirm optimiert, mit nicht mehr als 40 Zeichen pro Zeile. Die Linienhöhe ist 32 Pixel, Fontgröße ist 16 pt mit einer Opacity von 45%.
                    Die Headlines betragen 50 Pixel und haben eine Linienhöhe von 50 Pixel.
                    <br /> <br />
                    Lato wird für den Fließtext verwendet, da das dynamische Formprinzip der Schrift, linear und ohne Serifen, für einen leichten Lesefluss sorgt. Die offene Gestaltung ermöglicht auch eine gute Lesbarkeit bei kleinerer Schriftgröße.
                    <br />
                    Selima wird für unser Produktlogo, als auch Überschriften eingesetzt. Die dekorative Schreibschrift mit Pinsel-Duktus spiegelt den DIY-Vibe unserer Marke wieder. Außerdem spiegelt es den Charakter unseres Interaktionsdesigns wieder, da sich unser Produkt stark auf die Handschrift im Interface fokussiert.
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">Typography</h1>
                <p v-if="!this.$store.state.lang">
                    This documentation is written in <a href="https://fonts.google.com/specimen/Lato?selection.family=Lato" target="_blank">Lato</a> and <a href="https://www.fontsquirrel.com/fonts/selima" target="_blank">Selima</a>.
                    <br /> <br />
                    The text is aligned along the left margin. The line length is optimised for reading at a monitor screen, which is why there’s no more than 40 characters per line. The line height for the running text is 32 pixels, the font size is 16 pt and it has an an opacity of 45%.
                    The headlines are 50 pixels big and have a line height of 50 pixels as well.
                    <br /> <br />
                    Lato has been chosen for the running text because of its dynamic formal principle, linear and sanserif, which ensures an easy flow of reading. Furthermore, the open design of the letters enables good legibility even with a smaller font size.
                    <br />
                    Selima is used as the logo for our product (Gefühlswelt), as well as any headline. The decorative writing style fits the DIY vibe of the product and transports our brand values. Additionally, it resonates with our interaction design within Gefühlswelt, which heavily focuses on handwriting within the user interface.
                </p>
            </div>

            <div class="iFrameSlot" slot="right" style="cursor: pointer;">
                <h1 v-if="this.$store.state.lang" class="fonttest" contenteditable="true">Bearbeite mich und spiele mit der Schrift.</h1>
                <h1 v-if="!this.$store.state.lang" class="fonttest" contenteditable="true">Change this text and play with the font.</h1>
                <img src="./src/img/fontsbg.png" alt="Fonts">
            </div>           
        </BookContent>

        <Pagination></Pagination>

        <!-- <Modal v-if="showModal" @close="showModal = false" modalType="image">
            <img src="../../src/img/mel.png" alt="textImage">
            <source src="../../src/vids/trailer_test.mp4" type="video/mp4">
        </Modal> -->

        <div class="arrow aleft" @click="changePage('6b')">
            <img src="./src/img/ArrowLeft.png" alt="vorherige Seite">
        </div>

        <div class="arrow aright" @click="changePage('8')">
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
    flex-direction: column;
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

