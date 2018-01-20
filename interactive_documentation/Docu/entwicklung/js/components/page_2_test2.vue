<template>
    <div class="docu">

        <transition name="fade">           
            <BookBG v-if="bookBG"></BookBG>
        </transition>

        <BookContent>
            <div slot="left">
                <h1>Product Demo</h1>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </p>
            </div>

            <div class="iFrameSlot" slot="right">
                <TutVideo :tut="'test'"></TutVideo>

                <iframe src="http://localhost:3000/src/iFrame/prototyp/">
                </iframe>
            </div>           
        </BookContent>

        <Pagination></Pagination>

        <Modal v-if="showModal" @close="showModal = false" modalType="image">
            <img src="../../src/img/mel.png" alt="textImage">
            <!-- <source src="../../src/vids/trailer_test.mp4" type="video/mp4"> -->
        </Modal>

        <div class="arrow left" @click="changePage('1')">
            <img src="../../src/img/ArrowLeft.png" alt="vorherige Seite">
        </div>

        <div class="arrow right" @click="changePage('3')">
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
      TutVideo
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

/* Global Style */

body{
    font-family: 'importedLato', Arial, sans-serif;
    font-size: 16px;
    line-height: 32px;
    color: #333333;
    background: #F3F2EE;

    margin: 0;
    padding: 0;
}

h1, h2, h3, h4, h5{
    font-family: 'selimaregular', cursive;
    color: #333333;
    font-weight: normal;
}

h1{
    font-size: 4vw;
}

h2{
    font-size: 3vw;
}

img{
    width: 100%;
}

a {
    text-decoration: none;
    color: #6EB5C9;
    opacity: 1;
}

a:hover{
    opacity: 0.5;
    -webkit-transition: all 1s;
    transition: all 1s;
}

.docu{
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
}

.arrow {
    position: absolute;
    z-index: 9000;
    opacity: 0.5;
    cursor: pointer;
    transition: all 0.5s ease
}

.arrow:hover{
    opacity: 1.0;
}

.arrow.left {
    left: 0;
    width: 10vw;
    margin-left: 20px;
}

.arrow.right {
    right: 0;
    width: 10vw;
    margin-right: 20px;
}


</style>

