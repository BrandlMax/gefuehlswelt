<template>
    <div v-if="this.$store.state.help" class="kleinerhelfer">
        <video id="helpvideo" :width="toolData.width" :height="toolData.height">
            <source v-if="!this.ELECTRON" src="./src/mp4/Help.mp4" type="video/mp4">
            <source v-if="this.ELECTRON" src="./src/iframe/prototyp/src/mp4/Help.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
</template>

<script>
    // Test ob geladen
    //console.log('WerzeugName');
    // Erstmal Ignorieren
    export default {
        props: ['toolData'],
        data() {
            return {
                saveData: '',
                ELECTRON: false
            }
        },
        mounted() {
            if(this.$store.state.help){
                var video = document.getElementById('helpvideo')
                video.play();
                var toolData = this.toolData;

                video.addEventListener('ended', (e) => {
                    this.$store.commit('showHelpLayer', false)
                }, false);
            }
        },
        updated(){
            if(this.$store.state.help){
                var video = document.getElementById('helpvideo')
                video.play();

                video.addEventListener('ended', (e) => {
                    this.$store.commit('showHelpLayer', false)
                }, false);
            }
        },
        methods: {
            
        }
    }
</script>

<style scoped>
    .kleinerhelfer {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1000;
    }
    .texttool{
        fill: #1820d2;
        background: #fff;
    }
    video{
        height: 100%;
        width: 100%;
    }
</style>