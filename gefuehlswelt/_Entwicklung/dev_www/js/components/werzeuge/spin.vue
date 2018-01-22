<template>
    <div
    :style="{ height: toolData.height+'px', width: toolData.width+'px'}" :id="'sketch_'+toolData.id" class="sketch">
    </div>
</template>

<script>
    // Spin
    // https://codepen.io/tksiiii/pen/wpaQMV
    // Alessa Klinger (angepasst für den Prototyp)
    export default {
        props: ['toolData'],
        data() {
            return {
                saveData: [],
            }
        },
        mounted() {
            // Load Data from Server
            this.loadData();

            var toolData = this.toolData;
            var el = document.getElementById('sketch_' + this.toolData.id);
            //--------- p5 Code Here --------------
            // Ihr müsst vor alle p5 Funktionen ein p5. setzen.

            var meinWerkzeug = new p5((p5) => {
                // console.log('this Inside P5', this);

                var isDrawing = false;

                let windowW = window.innerWidth;
                let windowH = window.innerHeight;
                let centerW = windowW / 0.2;
                let centerH = windowH / 0.2;
                let circle;
                let circles = [];
                let shortSide;


                p5.setup = () => {
                    shortSide = p5.min(toolData.width, toolData.height);
                    // Create Canvas
                    var canvas = p5.createCanvas(toolData.width, toolData.height);
                    canvas.parent('sketch_' + toolData.id);
                    canvas.style('clip-path', 'url(#path_' + toolData.id + ')');

                    for (var i = 0; i < this.saveData.length; i++) {

                    }

                };

                p5.draw = () => {

                };

                var isDrawing = false;

                el.onmousedown = (e) => {
                    isDrawing = true;


                    this.saveData.push({

                    })
                }

                el.onmousemove = (e) => {
                    if (isDrawing) {

                        this.saveData.push({

                        })

                    }
                }

                el.onmouseup = () => {
                    isDrawing = false;
                    this.saveToVuex()
                };

                // This is my constructor function for my circles
                function Circle(x, y, s, r, b, g) {
                    this.x = x;
                    this.y = y;
                    this.size;

                    // Color values
                    if (r) {
                        this.size = s;
                        this.r = r;
                        this.g = g;
                        this.b = b;
                    } else {
                        this.size = getRandomInt(10, 50);
                        this.r = 135;
                        this.g = getRandomInt(200, 270);
                        this.b = 250;
                    }

                    // How the circles are drawn on the canvas
                    this.display = function() {
                        p5.noStroke();
                        p5.fill(p5.color(this.r, this.g, this.b));
                        p5.ellipse(this.x, this.y, this.size, this.size);
                    }
                }



            });
            //--------- p5 Code Ends Here --------------


            // Save Script

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
            // console.log('SaveToVuex', this.saveData)
               var newSaveData = {
                    type: "refresh",
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