<template>
    <transition name="fade">
        <div class="tutvideo" v-if="showVideo">

            <transition name="fade">
                <div id="startBtn" v-if="startBtn" @click="startVideo()">
                    <div class="triangle"></div>
                    <div class="triangleBg"></div>
                </div>
            </transition>

            <video id="tutVideo" autoplay="false">
                <source :src="'../../../src/vids/tut_'+ tut +'.mp4'" type="video/mp4">
                Your browser does not support the video tag.
            </video>

        </div>
    </transition>
</template>

<script>
// Import

/*
<TutVideo :tut="01"></TutVideo>
*/

export default {
  props: ['tut'],
  data(){
      return{
          showVideo: true,
          startBtn: true
      }
  },
  mounted() {

        var video = document.getElementById('tutVideo');
        video.pause();
        video.onended = (e) => {
            console.log('Video Ended');
            this.showVideo = false;
        };

  },
  created () {
  },
  destroyed(){

  },components: {

  },
  methods:{
      startVideo(){
        this.startBtn = false;
        var video = document.getElementById('tutVideo');
        video.play();
      }
  }
}
</script>

<style scoped>

video{
    width: 100%;
}

.tutvideo {
    width: 34.4vw;
    position: absolute;
    margin-top: 0.26vw;
}

#startBtn{
    position: absolute;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 45.8vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-transform: uppercase;
    font-size: 2vw;
    cursor: pointer;
    z-index: 9999;
}

.triangle{
    box-sizing: border-box;
    width: 40px;
    height: 50px;
    border-width: 25px 0px 25px 40px;
    border-style: solid;
    border-color: transparent transparent transparent #ffffff;
    margin-left: 13px;
}

.triangleBg{
    box-sizing: border-box;
    height: 70px;
    width: 70px;
    position: absolute;
    border: 2px solid #fff;
    border-radius: 160px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>

