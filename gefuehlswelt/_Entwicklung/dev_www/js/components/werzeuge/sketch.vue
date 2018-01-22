<template>
    <div
    :style="{ height: toolData.height+'px', width: toolData.width+'px'}" :id="'sketch_'+toolData.id" class="sketch">
    </div>
</template>

<script>
    // Sketchy Pen
    /*
    Reference: http://perfectionkills.com/exploring-canvas-drawing-techniques/#nearby-connections

    Copyright (c) 2018 by Juriy Zaytsev (https://codepen.io/kangax/pen/EjivI)
    Fork of an original work by Juriy Zaytsev (https://codepen.io/kangax/pen/Hlfac)

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


    The above open source pen has been adjusted to work with p5.js (https://p5js.org/) by Janett Herdt.
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
            var el = document.getElementById('sketch_' + this.toolData.id);
            //--------- p5 Code Here --------------
            // Ihr müsst vor alle p5 Funktionen ein p5. setzen.

            var meinWerkzeug = new p5((p5) => {
                // console.log('this Inside P5', this);

                // Saving points into an empty array
                var points = [];

                var dx, dy, d;
                var isDrawing = false;

                p5.setup = () => {

                    // Create Canvas
                    var canvas = p5.createCanvas(toolData.width, toolData.height);
                    canvas.parent('sketch_' + toolData.id);
                    canvas.style('clip-path', 'url(#path_' + toolData.id + ')');

                    p5.background(255);
                    // Load Before

                    for(var i = 0; i < this.saveData.length; i++){
                        
                        var curPointX = this.saveData[i].x
                        var curPointY = this.saveData[i].y
                        // Color of the line
                        p5.stroke('rgba(0, 0, 0, 0.5)');

                        // Rendering line endings
                        p5.strokeCap(p5.ROUND);
                        // Sets the style of the joints which connect line segments.
                        p5.strokeJoin(p5.ROUND);

                        p5.noFill();
                        p5.strokeWeight(1);
                        p5.beginShape();
                        p5.vertex(curPointX, curPointY);
                        p5.vertex(curPointX, curPointY);
                        p5.endShape();

                        for (var j = 0; j < this.saveData.length; j++) {

                            dx = this.saveData[j].x - curPointX;
                            dy = this.saveData[j].y - curPointY;
                            d = dx * dx + dy * dy;


                            if (d < 1000) {
                                p5.noFill();
                                p5.beginShape();
                                p5.stroke('rgba(0, 0, 0, 0.3)');
                                p5.vertex(curPointX + (dx * 0.2), curPointY + (dy * 0.2));
                                p5.vertex(this.saveData[j].x - (dx * 0.2), this.saveData[j].y - (dy * 0.2));
                                p5.endShape();
                            }
                        }
                        

                    }


                };

                p5.draw = () => {

                    if (isDrawing) {

                        // Color of the line
                        p5.stroke('rgba(0, 0, 0, 0.5)');

                        // Rendering line endings
                        p5.strokeCap(p5.ROUND);
                        // Sets the style of the joints which connect line segments.
                        p5.strokeJoin(p5.ROUND);

                        points.push({
                            x: p5.mouseX,
                            y: p5.mouseY
                        });

                        p5.noFill();
                        p5.strokeWeight(1);
                        p5.beginShape();
                        p5.vertex(p5.pmouseX, p5.pmouseY);
                        p5.vertex(p5.mouseX, p5.mouseY);
                        p5.endShape();

                        for (var i = 0; i < points.length; i++) {
                            points[i].cx = p5.mouseX;
                            points[i].cy = p5.mouseY;
                            dx = points[i].x - points[i].cx;
                            dy = points[i].y - points[i].cy;
                            d = dx * dx + dy * dy;


                            if (d < 1000) {
                                p5.noFill();
                                p5.beginShape();
                                p5.stroke('rgba(0, 0, 0, 0.3)');
                                p5.vertex(points[i].cx + (dx * 0.2), points[i].cy + (dy * 0.2));
                                p5.vertex(points[i].x - (dx * 0.2), points[i].y - (dy * 0.2));
                                p5.endShape();
                            }
                        }
                    }

                };


                el.onmousedown = (e) => {
                    isDrawing = true;
                }

                el.onmousemove = (e) => {

                }

                el.onmouseup = () => {
                    isDrawing = false;
                    this.saveData = points;
                    this.saveToVuex();
                };



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