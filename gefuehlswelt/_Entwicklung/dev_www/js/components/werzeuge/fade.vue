<template>
    <div
    :style="{ height: toolData.height+'px', width: toolData.width+'px'}" :id="'sketch_'+toolData.id" class="sketch">
    </div>
</template>

<script>
    // Fade
    // https://codepen.io/tksiiii/pen/wdgaLd
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
            var circles = [];
            var toolData = this.toolData;
            var el = document.getElementById('sketch_' + this.toolData.id);
            //--------- p5 Code Here --------------
            // Ihr müsst vor alle p5 Funktionen ein p5. setzen.

            var meinWerkzeug = new p5((p5) => {
                // console.log('this Inside P5', this);
                
                p5.setup = () => {

                    // Create Canvas
                    var canvas = p5.createCanvas(toolData.width, toolData.height);
                    canvas.parent('sketch_' + toolData.id);
                    canvas.style('clip-path', 'url(#path_' + toolData.id + ')');

                    // console.log('circlelength', this.saveData)
                    // Load Before
                    for (var i = 0; i < this.saveData.length; i++) {
                        circles.push(new Circle(this.saveData[i].x, this.saveData[i].y, this.saveData[i].size, this.saveData[i].r, this.saveData[i].g, this.saveData[i].b));
                    }

                    // console.log('circlelength', circles)

                };

                p5.draw = () => {

                    for (var i = 0; i < circles.length; i++) {
                        circles[i].display();
                    }

                };

                var isDrawing = false;
                el.onmousedown = (e) => {
                    isDrawing = true;
                    circles.push(new Circle(p5.mouseX, p5.mouseY));
                    this.saveData = circles;
                    // console.log('saveDatainPress', this.saveData)
                    // console.log('circlelength', circles);
                }

                el.onmousemove = (e) => {
                    if (isDrawing) {
                        circles.push(new Circle(p5.mouseX, p5.mouseY));
                        this.saveData = circles;
                        // console.log('saveDatainPress', this.saveData)
                        // console.log('circlelength', circles);
                    }
                }

                el.onmouseup = () => {
                    isDrawing = false;
                    this.saveData = circles;
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