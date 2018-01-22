<template>
    <div
    :style="{ height: toolData.height+'px', width: toolData.width+'px'}" :id="'sketch_'+toolData.id" class="sketch">
    </div>
</template>

<script>
    // RAIN BRUSH
    /*
    Reference & License:
    Copyright (c) 2018 by Juriy Zaytsev (https://codepen.io/kangax/pen/HFpun)
    Fork of an original work by Juriy Zaytsev (https://codepen.io/kangax/pen/bznkE)

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

    The above open source pen has been adjusted to work with p5.js (https://p5js.org/) by Janett Herdt.
    */
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

            var el = document.getElementById('sketch_' + this.toolData.id);

            var toolData = this.toolData;
            //--------- p5 Code Here --------------
            // Ihr müsst vor alle p5 Funktionen ein p5. setzen.

            var meinWerkzeug = new p5((p5) => {
                // console.log('this Inside P5', this);

                var brush;
                p5.preload = () => {
                    brush = p5.loadImage('../src/png/brush2.png');
                }

                p5.setup = () => {
                    // Create Canvas
                    var canvas = p5.createCanvas(toolData.width, toolData.height);
                    canvas.parent('sketch_' + toolData.id);
                    canvas.style('clip-path', 'url(#path_' + toolData.id + ')');

                    p5.background(255);

                    if(this.saveData[0]){
                        for (var i = 0; i < this.saveData.length; i++) {
                            p5.image(brush, this.saveData[i].x, this.saveData[i].y, 20, 20);
                        }
                    }
                };

                var isDrawing, lastPoint;

                // Calculating the distance between points
                function distanceBetween(point1, point2) {
                    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
                }

                // Angle maths
                function angleBetween(point1, point2) {
                    return Math.atan2(point2.x - point1.x, point2.y - point1.y);
                }

                p5.draw = () => {
                    // Sets the style for rendering line endings.
                    p5.strokeCap(p5.ROUND);
                    // Sets the style of the joints which connect line segments.
                    p5.strokeJoin(p5.ROUND);

                    // The boolean system variable mouseIsPressed is true if the mouse is pressed and false if not.
                    if (p5.mouseIsPressed) {
                        isDrawing = true;

                        // Previous mouse positions x & y
                        lastPoint = {
                            x: p5.pmouseX,
                            y: p5.pmouseY
                        };
                        // Current mouse positions of x & y
                        var currentPoint = {
                            x: p5.mouseX,
                            y: p5.mouseY
                        };

                        // Calculating the distance between the previous and current points
                        var dist = distanceBetween(lastPoint, currentPoint);
                        // Angle maths between the previous and current points
                        var angle = angleBetween(lastPoint, currentPoint);

                        // "Marker" effect
                        for (var i = 0; i < dist; i++) {
                            var x = lastPoint.x + (Math.sin(angle) * i) - 25;
                            var y = lastPoint.y + (Math.cos(angle) * i) - 25;
                            p5.image(brush, x, y, 20, 20);
                            this.saveData.push({x: x, y: y})
                        }
                        lastPoint = currentPoint;
                    }
                };

                el.onmouseup = (e) => {
                    this.saveToVuex();
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