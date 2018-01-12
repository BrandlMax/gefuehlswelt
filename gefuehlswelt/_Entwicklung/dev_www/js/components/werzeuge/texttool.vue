<template>
        <div :width="toolData.width" :height="toolData.height" :style="{ clipPath: 'url(#path_' + toolData.id +')', height: toolData.height+'px', width: toolData.width+'px'}" :id="'sketch_'+toolData.id" class="sketch texttool"></div>
</template>

<script>
    // Test ob geladen
    //console.log('WerzeugName');
    // Erstmal Ignorieren
    export default {
        props: ['toolData'],
        data() {
            return {
                saveData: '<g id="pendingStrokes"></g>',
            }
        },
        mounted() {

            var toolData = this.toolData;

            /* SCRIPT STARTS */
            var editorElement = document.getElementById('sketch_' + this.toolData.id);

            // MyScript API Register
            MyScript.register(editorElement, {
                recognitionParams: {
                    type: 'TEXT',
                    server: this.$store.state.access[this.$store.state.curAccessPoint],
                }
            });

            editorElement.addEventListener('exported', (event) => {
                //console.log('Erkannt:', event.detail.exports['text/plain']);
                this.saveToVuex();
            });

            /* SCRIPT ENDS */
            
            // LITTLE DIRTY TIMEOUT FIX
            setTimeout(() => {
                checkIfLoaded();
            }, 2000);

            var checkIfLoaded = () =>{
                console.log('CheckIfLoaded')
                if(document.getElementById('sketch_' + this.toolData.id).getElementsByTagName('svg')[0]){
                    this.loadData();
                }else{
                    setTimeout(() => {
                        checkIfLoaded();
                    }, 2000);
                }
            }

        },
        methods: {
            loadData: function() {
                this.$store.state.layers.forEach((l) => {
                    if (l.id === this.toolData.id) {
                        if (this.saveData.constructor != Array) {
                            this.saveData = '<g id="pendingStrokes"></g>' + l.tool.tooldata;
                            document.getElementById('sketch_' + this.toolData.id).getElementsByTagName('svg')[0].innerHTML = this.saveData;
                        }
                    };
                })
            },
            saveToData: function(x, y) {
                // console.log('SaveToData', this.saveData)
                var g = document.getElementById('sketch_' + this.toolData.id).getElementsByTagName('svg')[0].innerHTML;
                this.saveData = '<g id="pendingStrokes"></g> ' + g;

            },
            saveToVuex: function() {
                // console.log('SaveToVuex', this.saveData)
                this.saveToData();
                var newSaveData = {
                    id: this.toolData.id,
                    data: '<g id="pendingStrokes"></g> ' + this.saveData
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
    .texttool{
        fill: #1820d2;
        background: #fff;
    }
</style>