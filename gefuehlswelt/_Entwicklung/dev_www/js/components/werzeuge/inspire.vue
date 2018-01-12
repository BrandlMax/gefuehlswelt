<template>
        <div :width="toolData.width" 
            :height="toolData.height" 
            :style="{ clipPath: 'url(#path_' + toolData.id +')', 
            height: toolData.height+'px', width: toolData.width+'px'}" 
            :id="'sketch_'+toolData.id" class="sketch inspire">
        
            <video id="inspirevideo" :width="toolData.width" :height="toolData.height">
                <source src="../../../src/mp4/Inspire.mp4" type="video/mp4">
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
            }
        },
        mounted() {
            var video = document.getElementById('inspirevideo')
            video.play();

            video.addEventListener('ended', (e) => {
                console.log('Inspire End');
                this.$store.commit('removeLayer', {
                    id: this.toolData.id 
                });
            }, false);
        },
        methods: {
            loadData: function() {
                this.$store.state.layers.forEach((l) => {
                    if (l.id === this.toolData.id) {
                        if (this.saveData.constructor != Array) {
                            this.saveData = l.tool.tooldata;
                            document.getElementById('sketch_' + this.toolData.id).getElementsByTagName('svg')[0].innerHTML = this.saveData;
                        }
                    };
                })
            },
            saveToData: function(x, y) {
                // console.log('SaveToData', this.saveData)
                var g = document.getElementById('sketch_' + this.toolData.id).getElementsByTagName('svg')[0].innerHTML;
                this.saveData = g;

            },
            saveToVuex: function() {
                // console.log('SaveToVuex', this.saveData)
                this.saveToData();
                var newSaveData = {
                    id: this.toolData.id,
                    data: this.saveData
                }
                this.$store.commit('updateToolSaveData', newSaveData);
            },
        }
    }
</script>

<style scoped>
    .sketch {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 1000;
    }
    .inspire{

    }
</style>