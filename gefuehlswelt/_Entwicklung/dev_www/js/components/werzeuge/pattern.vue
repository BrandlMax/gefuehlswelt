<template>
        <div :width="toolData.width" :height="toolData.height" :style="{ clipPath: 'url(#path_' + toolData.id +')', height: toolData.height+'px', width: toolData.width+'px', backgroundImage:'url(../src/png/patterns/' + patterns[randomPattern] +')'}" :id="'sketch_'+toolData.id" class="sketch pattern"></div>
</template>

<script>
    // Test ob geladen
    //console.log('WerzeugName');
    // Erstmal Ignorieren
    export default {
        props: ['toolData'],
        data() {
            return {
                patterns: [
                    '01.jpg',
                    '02.jpg',
                    '03.jpg',
                    '04.png',
                    '05.jpg',
                    '06.png',
                    '07.png',
                    '08.jpg',
                    '09.png',
                    '10.png',
                    '11.gif',
                    '12.png',
                    '13.png',
                    '14.png',
                    '15.png'

                ],
                randomPattern: null
            }
        },
        created(){
            
            this.loadData();
            // console.log('After Load', this.randomPattern)
            var toolData = this.toolData;

            /* SCRIPT STARTS */
                if(this.randomPattern === undefined){
                    // Math.random() * (max - min) + min
                    this.randomPattern = Math.floor((Math.random() * (this.patterns.length-1)) + 1);
                    // console.log('Random Pattern', this.randomPattern);
                    this.saveToVuex()
                }
            /* SCRIPT ENDS */

        },
        mounted() {

        },
        methods: {
            loadData: function() {
                this.$store.state.layers.forEach((l) => {
                    if (l.id === this.toolData.id) {
                        // console.log('Inside Update Function', l.tool.tooldata.pnum)
                        this.randomPattern = l.tool.tooldata.pnum
                    };
                })
            },
            saveToData: function(x, y) {
                // console.log('SaveToData', this.saveData)
                this.saveData.push({
                    pnum : this.randomPattern
                });

            },
            saveToVuex: function() {
                console.log('SaveToVuex', this.saveData)

                // Performance Break

                var newSaveData = {
                    type: "refresh",
                    id: this.toolData.id,
                    data: {pnum : this.randomPattern}
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
        background: #fff;
    }
</style>
