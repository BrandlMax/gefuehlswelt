<template>
    <transition name="modal">
        <div class="modal-mask" @click="$emit('close')">
        <div class="modal-wrapper">
            <div class="modal-container">
                <div @click="$emit('close')" id="modal_closeBtn">
                    <img src="./src/img/Close.png" alt="close">
                </div>

                <div v-if="modalType === 'video'" class="modal_video">
                    <video controls="true" autoplay="true">
                        <slot></slot>
                        Your browser does not support the video tag.
                    </video>
                </div>
                
                <div v-if="modalType === 'image'" class="modal_image">
                        <slot></slot>
                </div>

                <div  v-if="modalType === 'excel'" class="modal_excel">
                            <iframe :src="iframelink">
                    </iframe>
                </div>
            </div>
        </div>
        </div>
    </transition>
</template>

<script>
// Import

export default {
  props: ['modalType', 'iframelink', 'autoPush'],
  data(){
      return{
      }
  },
  mounted() {
  },
  created () {
  },
  destroyed(){

  },components: {

  },
  methods:{
  }
}
</script>

<style scoped>

#modal_closeBtn {
    width: 4vw;
    position: absolute;
    right: 4vw;
    cursor: pointer;
    z-index: 9998;
    margin-top: -1vw;
}

.modal-mask {
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .8);
    display: table;
    transition: opacity .3s ease;
    cursor: zoom-out;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 90vw;
    margin: 0px auto;
    padding: 20px 20px;
    /* background-color: #fff; */
    border-radius: 2px;
    /* box-shadow: 0 2px 8px rgba(0, 0, 0, .33); */
    transition: all .3s ease;
    font-family: Helvetica, Arial, sans-serif;
}

.modal-default-button {
    float: right;
}


/* Video */
.modal_video {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal_video video {
    width: 100%;
}


.modal_excel iframe {
    height: 50vw;
}


/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
    opacity: 0;
}

.modal-leave-active {
    opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}

</style>

