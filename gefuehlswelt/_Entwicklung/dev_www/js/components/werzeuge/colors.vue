<template>
    <div
    :style="{ height: toolData.height+'px', width: toolData.width+'px'}" :id="'sketch_'+toolData.id" class="sketch">
    </div>
</template>

<script>
    // Colors
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

                let angle = 0;
                let phaseScale = 0;
                let phaseColor = 0;
                let sizeRatio = 0;
                let sizeRatioOffset = sizeRatio * 1.9;


                p5.setup = () => {

                    // Create Canvas
                    var canvas = p5.createCanvas(toolData.width, toolData.height);
                    canvas.parent('sketch_' + toolData.id);
                    canvas.style('clip-path', 'url(#path_' + toolData.id + ')');

                    for (var i = 0; i < this.saveData.length; i++) {
                    p5.push();
                        p5.translate(this.saveData[i].x, this.saveData[i].y);
                        p5.rotate(this.saveData[i].angle);
                        p5.scale(sizeRatio * p5.sin(this.saveData[i].phaseScale) + 3.5);

                        p5.colorMode(p5.RGB, 255, 255, 255, 1);
                        p5.strokeWeight(0.1);
                        p5.stroke(255, 255, 255, 130);

                        p5.colorMode(p5.HSB, 360, 100, 100, 1);
                        let c = p5.color(this.saveData[i].phaseColor, 100, 100, 0.05);
                        p5.fill(c);
                        p5.ellipse(-5, -5, 50, 50);
                    p5.pop();
                    }

                };

                p5.draw = () => {
                        angle %= p5.TWO_PI;
                        angle += 0.20;

                        phaseScale %= p5.TWO_PI;
                        phaseScale += 0.1;

                        phaseColor %= 360;
                        phaseColor += 0.6;
                };

                var isDrawing = false;

                el.onmousedown = (e) => {
                    isDrawing = true;

                    p5.push();
                        p5.translate(p5.mouseX, p5.mouseY);
                        p5.rotate(angle);
                        p5.scale(sizeRatio * p5.sin(phaseScale) + 3.5);

                        p5.colorMode(p5.RGB, 255, 255, 255, 1);
                        p5.strokeWeight(0.1);
                        p5.stroke(255, 255, 255, 130);

                        p5.colorMode(p5.HSB, 360, 100, 100, 1);
                        let c = p5.color(phaseColor, 100, 100, 0.05);
                        p5.fill(c);
                        p5.ellipse(-5, -5, 50, 50);
                    p5.pop();

                    this.saveData.push({
                        x: p5.mouseX,
                        y: p5.mouseY,
                        angle: angle,
                        phaseScale: phaseScale,
                        phaseColor: phaseColor,
                    })
                }

                el.onmousemove = (e) => {
                    if (isDrawing) {

                    p5.push();
                        p5.translate(p5.mouseX, p5.mouseY);
                        p5.rotate(angle);
                        p5.scale(sizeRatio * p5.sin(phaseScale) + 3.5);

                        p5.colorMode(p5.RGB, 255, 255, 255, 1);
                        p5.strokeWeight(0.1);
                        p5.stroke(255, 255, 255, 130);

                        p5.colorMode(p5.HSB, 360, 100, 100, 1);
                        let c = p5.color(phaseColor, 100, 100, 0.05);
                        p5.fill(c);
                        p5.ellipse(-5, -5, 50, 50);
                    p5.pop();

                    this.saveData.push({
                        x: p5.mouseX,
                        y: p5.mouseY,
                        angle: angle,
                        phaseScale: phaseScale,
                        phaseColor: phaseColor,
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