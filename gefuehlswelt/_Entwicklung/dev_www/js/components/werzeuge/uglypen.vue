<template>
        <canvas :width="toolData.width" :height="toolData.height" :style="{ clipPath: 'url(#path_' + toolData.id +')', height: toolData.height+'px', width: toolData.width+'px'}" :id="'sketch_'+toolData.id" class="sketch uglypen"></canvas>
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
            var toolData = this.toolData;
            var limit = 500;
            // Load Before
            // this.saveData.forEach((point) => {
            //     p5.fill(255, 100, 50);
            //     p5.ellipse(point.x, point.y, 25, 25);
            // })

            /* SCRIPT STARTS */
            var getRandomInt = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            var el = document.getElementById('sketch_' + this.toolData.id);
            var ctx = el.getContext('2d');

            ctx.lineJoin = ctx.lineCap = 'round';

            // LITTLE DIRTY TIMEOUT FIX

            console.log(this.saveData)

            for (var i = 1; i < this.saveData.length; i++) {
                console.log()
                ctx.beginPath();
                ctx.moveTo(this.saveData[i - 1].x, this.saveData[i - 1].y);
                ctx.lineWidth = this.saveData[i].width;
                ctx.lineTo(this.saveData[i].x, this.saveData[i].y);
                ctx.stroke();
            }

            var isDrawing;
            var points = [];

            el.onmousedown = (e) => {
                isDrawing = true;
                points.length = 0;

                if (points.length < limit) {
                    points.push({
                        x: e.clientX - this.toolData.x,
                        y: e.clientY - this.toolData.y,
                        width: getRandomInt(2, 2.5)
                    });
                } else {
                    points.splice(0, 1);
                    points.push({
                        x: e.clientX - this.toolData.x,
                        y: e.clientY - this.toolData.y,
                        width: getRandomInt(2, 2.5)
                    });
                }
                // this.saveToData(p5.mouseX, p5.mouseY)
            };

            el.onmousemove = (e) => {
                if (!isDrawing) return;

                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                if (points.length < limit) {
                    points.push({
                        x: e.clientX - this.toolData.x,
                        y: e.clientY - this.toolData.y,
                        width: getRandomInt(2, 2.5)
                    });
                } else {
                    points.splice(0, 1);
                    points.push({
                        x: e.clientX - this.toolData.x,
                        y: e.clientY - this.toolData.y,
                        width: getRandomInt(2, 2.5)
                    });
                }


                for (var i = 1; i < points.length; i++) {
                    ctx.beginPath();
                    ctx.moveTo(points[i - 1].x, points[i - 1].y);
                    ctx.lineWidth = points[i].width;
                    ctx.lineTo(points[i].x, points[i].y);
                    ctx.stroke();
                }
            };

            el.onmouseup = () => {
                isDrawing = false;
                console.log('POINTS', points.length);
                this.saveData = points;
                this.saveToVuex()
            };
            /* SCRIPT ENDS */


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

                // Performance Break

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
    }

    .uglypen {
        fill: #1820d2;
        background: #fff;
    }

</style>
