<template>
    <div
    :style="{ height: toolData.height+'px', width: toolData.width+'px'}" :id="'sketch_'+toolData.id" class="sketch">
    </div>
</template>

<script>
    // ROSE GENERATOR
    /*
    References:
    https://en.wikipedia.org/wiki/Rose_(mathematics)
    https://www.youtube.com/watch?v=f5QBExMNB1I
    */
    // Auf Grundlage von Janett Herdt (angepasst für den Prototyp)
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
            //--------- p5 Code Here --------------
            // Ihr müsst vor alle p5 Funktionen ein p5. setzen.

            var meinWerkzeug = new p5((p5) => {
                // console.log('this Inside P5', this);

                // The denominator (1-9)
                var d;
                // The numerator (1-7)
                var n;
                // Number of petals
                var k;
                var isDrawing = true;

                if (this.saveData.d) {
                    d = this.saveData.d;
                    n = this.saveData.n;
                    k = this.saveData.k;
                    isDrawing = false;
                }

                var el = document.getElementById('sketch_' + this.toolData.id);

                p5.setup = () => {
                    // Create Canvas
                    var canvas = p5.createCanvas(toolData.width, toolData.height);
                    canvas.parent('sketch_' + toolData.id);
                    canvas.style('clip-path', 'url(#path_' + toolData.id + ')');
                    p5.background(255);
                    // Load Before

                };


                el.onmousedown = (e) => {
                    isDrawing = !isDrawing;
                    this.saveData = {
                        d: d,
                        n: n,
                        k: k
                    };
                    this.saveToVuex();
                }

                p5.draw = () => {
                    // Put the drawing in the middle
                    p5.translate(toolData.width / 2, toolData.height / 2);

                    // Scaling of the rose
                    var s = 1.3;

                    p5.beginShape();
                    p5.stroke(0);
                    p5.strokeWeight(2);
                    p5.strokeCap(p5.ROUND);
                    p5.smooth();

                    // Rose mathematics
                    for (var a = 0; a < p5.TWO_PI * d; a += 0.02) {
                        var r = 200 * p5.cos(k * a) * s;
                        var x = r * p5.cos(a) * s;
                        var y = r * p5.sin(a) * s;
                        p5.vertex(x, y);
                    }

                    p5.endShape(p5.CLOSE);

                };

                el.onmousemove = (e) => {
                    if (isDrawing) {

                        // Changing the d values depending on the mouse movement on the x-axis
                        if (p5.mouseX === 0 && p5.mouseX || toolData.width / 9 * 1) {
                            d = 1;
                        }
                        if (p5.mouseX >= toolData.width / 9 * 1 && p5.mouseX < toolData.width / 9 * 2) {
                            d = 2;
                        }
                        if (p5.mouseX >= toolData.width / 9 * 2 && p5.mouseX < toolData.width / 9 * 3) {
                            d = 3;
                        }
                        if (p5.mouseX >= toolData.width / 9 * 3 && p5.mouseX < toolData.width / 9 * 4) {
                            d = 4;
                        }
                        if (p5.mouseX >= toolData.width / 9 * 4 && p5.mouseX < toolData.width / 9 * 5) {
                            d = 5;
                        }
                        if (p5.mouseX >= toolData.width / 9 * 5 && p5.mouseX < toolData.width / 9 * 6) {
                            d = 6;
                        }
                        if (p5.mouseX >= toolData.width / 9 * 6 && p5.mouseX < toolData.width / 9 * 7) {
                            d = 7;
                        }
                        if (p5.mouseX >= toolData.width / 9 * 7 && p5.mouseX < toolData.width / 9 * 8) {
                            d = 8;
                        }
                        if (p5.mouseX >= toolData.width / 9 * 8 && p5.mouseX <= toolData.width) {
                            d = 9;
                        }

                        // Changing the n values depending on the mouse movement on the y-axis
                        if (p5.mouseY === 0 && p5.mouseY || toolData.height / 7 * 1) {
                            n = 1;
                        }
                        if (p5.mouseY >= toolData.height / 7 * 1 && p5.mouseY < toolData.height / 7 * 2) {
                            n = 2;
                        }
                        if (p5.mouseY >= toolData.height / 7 * 2 && p5.mouseY < toolData.height / 7 * 3) {
                            n = 3;
                        }
                        if (p5.mouseY >= toolData.height / 7 * 3 && p5.mouseY < toolData.height / 7 * 4) {
                            n = 4;
                        }
                        if (p5.mouseY >= toolData.height / 7 * 4 && p5.mouseY < toolData.height / 7 * 5) {
                            n = 5;
                        }
                        if (p5.mouseY >= toolData.height / 7 * 5 && p5.mouseY < toolData.height / 7 * 6) {
                            n = 6;
                        }
                        if (p5.mouseY >= toolData.height / 7 * 6 && p5.mouseY <= toolData.height) {
                            n = 7;
                        }

                        k = n / d;

                    }
                    // Prevent default
                    return false;
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
                console.log('SaveToVuex', this.saveData)
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