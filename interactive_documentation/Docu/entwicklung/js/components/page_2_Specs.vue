<template>
    <div class="docu">
        <LangSwitch></LangSwitch>
        
        <transition name="fade">           
            <BookBG v-if="bookBG"></BookBG>
        </transition>

        <BookContent>
            <!-- front -->
            <div v-if="this.$store.state.specs === 'front'" slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">Technische Details: Vorderseite</h1>
                <p v-if="this.$store.state.lang">
Folgende Technologien werden in Gefühlswelt auf der Vorderseite eingesetzt:
<br /><br />
Die Vorderseite wird mittels eines Gummibands stabilisiert.

Das Haptische Feedback des Produkts soll angenehm und sinnlich sein. Das Cover soll gestaltbar und austauschbar sein. Die Individualität des Nutzers soll sich dadurch an der Oberfläche von Gefühlswelt widerspiegeln.

Für das berührungssensible Display auf der Innenseite gibt es noch einen druckempfindlichen Stylus.  
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">Technical details: Front</h1>
                <p v-if="!this.$store.state.lang">
The following technologies are used at the front side of Gefühlswelt:
<br /><br />
The case cover is fastened with an elastic band.

The haptic feedback of the cover is an important component of Gefühlswelt. Which is why the cover is also changeable and free to be customised by the user. That way the individuality of the user is also reflected on the surface of Gefühlswelt.

The pressure-sensitive Stylus is supposed to be used on the touch-sensitive display.
                </p>
            </div>

            <!-- inside -->
            <div v-if="this.$store.state.specs === 'inside'" slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">Technische Details: Innenseite</h1>
                <p v-if="this.$store.state.lang">
Folgende Technologien werden im Inneren von Gefühlswelt eingesetzt:
<br /><br />
Eine Kamera, ein Mikrofon und Lautsprecher. 

Der LCD Multi-Touch Display ermöglicht dem Nutzer auch mit seinem Finger mit Gefühlswelt zu interagieren.

Alle Nutzerdaten sowie die Datenbank werden auf einer herausnehmbare SD-Karte verschlüsselt gespeichert. Gefühlswelt hat 2 SD-Kartenslots, damit der Nutzer jederzeit seinen Speicher auf eine größere SD-Karte transferieren kann.

Da hier auf eine Internetverbindung verzichtet wird, um Datensicherheit zu gewährleisten, setzen wir Bluetooth ein.
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">Technical details: Inside</h1>
                <p v-if="!this.$store.state.lang">
The following technologies are on the inside of Gefühlswelt:
<br /><br />
A camera, mikrofon and speakers.

The LCD Multi-Touch Display enables the user to interact with Gefühlswelt via touch.

The database and all user data are encrypted and saved onto the removable SD cards. Gefühlswelt has 2 SD card slots so the user can transfer his or her data onto a bigger SD card at any time.

We have opted to use Bluetooth rather than an internet connection, because data security is very important for our product.
                </p>
            </div>

            <!-- back -->
            <div v-if="this.$store.state.specs === 'back'" slot="left">
                <!-- Deutsch -->
                <h1 v-if="this.$store.state.lang">Technische Details: Rückseite</h1>
                <p v-if="this.$store.state.lang">
Folgende Technologien befinden sich auf der Rückseite von Gefühlswelt:
<br /><br />
Einen Fingerabdrucksensor, um den Nutzer zu authentifizieren.
Eine weitere Kamera, um Bilder aufzunehmen oder QR-Codes zu scannen.
                </p>
                <!-- Englisch -->
                <h1 v-if="!this.$store.state.lang">Technical details: Back</h1>
                <p v-if="!this.$store.state.lang">
The following technologies are used on the back side of Gefühlswelt:
<br /><br />
A fingerprint sensor is used in order to authenticate the user.
Another camera to take pictures with or scan QR codes.
                </p>
            </div>

            <div class="iFrameSlot" slot="right">
                <SpecsSlider></SpecsSlider>
            </div>           
        </BookContent>

        <Pagination></Pagination>

        <Modal v-if="showModal" @close="showModal = false" modalType="image">
            <img src="./src/img/mel.png" alt="textImage">
            <!-- <source src="../../src/vids/trailer_test.mp4" type="video/mp4"> -->
        </Modal>

        <div class="arrow aleft" @click="changePage('1')">
            <img src="./src/img/ArrowLeft.png" alt="vorherige Seite">
        </div>

        <div class="arrow aright" @click="changePage('3')">
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
import CoverSlider from './interactiveComps/coverSlider.vue';
import SpecsSlider from './interactiveComps/specsSlider.vue';


// Search

export default {
  props: [],
  data(){
      return{
          bookBG: false,
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
      CoverSlider,
      LangSwitch,
      SpecsSlider
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

