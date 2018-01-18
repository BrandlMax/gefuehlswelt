<template>
    <div class="docu">
        <BookBG></BookBG>

        <BookContent>
            <div slot="left">
                <h1>Left side</h1>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </p>
            </div>

            <div class="iFrameSlot" slot="right">
                <iframe src="http://localhost:3000/src/iFrame/prototyp/">
                </iframe>
            </div>           
        </BookContent>

        <Pagination></Pagination>

        <Modal></Modal>
    </div>
</template>

<script>
// Kapitel einfügen
import BookBG from './book/bookbg.vue';
import BookContent from './book/bookcontent.vue';
import Pagination from './book/pagination.vue';
import Modal from './book/modal.vue';


// Search

export default {
  props: [],
  data(){
      return{
        showModal: false
      }
  },
  mounted() {
      console.log('Docu');
  },
  created () {

  },
  destroyed(){

  },components: {
      BookBG,
      BookContent,
      Pagination,
      Modal
  },
  methods:{
      checkClick(){
          console.log('click')
      }
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


</style>

