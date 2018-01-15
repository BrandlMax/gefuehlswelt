<template>
		<div @mouseup="saveToVuex()" :style="{ clipPath: 'url(#path_' + toolData.id +')', height: toolData.height+'px', width: toolData.width+'px'}" :id="'sketch_'+toolData.id" class="sketch"></div>
</template>

<script>
    // Test ob geladen
    //console.log('WerzeugName');
    // Erstmal Ignorieren
    export default {
        props: ['toolData'],
        data() {
            return {
                saveData: [],
            }
        },
        mounted() {

            this.loadData();

            //--------- p5 Code Here --------------
            // Ihr müsst vor alle p5 Funktionen ein p5. setzen.
            // console.log('toolDataSetup',this.toolData);
            var toolData = this.toolData;
            var meinWerkzeug = new p5((p5) => {

                p5.setup = () => {
                    // Create Canvas
                    var canvas = p5.createCanvas(toolData.width, toolData.height);
                    canvas.parent('sketch_' + toolData.id);
                    canvas.style('clip-path', 'url(#path_' + toolData.id + ')');
                    //console.log('canvas', canvas)

                    // Load Before
                    this.saveData.forEach((point) => {
                        p5.fill(255, 100, 50);
                        p5.ellipse(point.x, point.y, 25, 25);
                    })
                };

                p5.draw = () => {
                    // p5.background(0);
                    p5.fill(255, 100, 50);
                    if (p5.mouseIsPressed) {
                        p5.ellipse(p5.mouseX, p5.mouseY, 25, 25);

                        // Save Data
                        this.saveToData(p5.mouseX, p5.mouseY)
                    }
                };

            });
            //--------- p5 Code Ends Here --------------

        },
        methods: {
            loadData: function() {
                this.$store.state.layers.forEach((l) => {
                    if (l.id === this.toolData.id) {
                        this.saveData = l.tool.tooldata
                    };
                })
            },
            saveToData: function(x, y) {
                // console.log('SaveToData', this.saveData)
                this.saveData.push({
                    x: x,
                    y: y
                });

            },
            saveToVuex: function() {
                console.log('SaveToVuex', this.saveData)
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
        background: #fff;
    }
</style>