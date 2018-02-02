<template>
<div id="displayFrame">
    <div class="paperstyle"></div>
    <div class="PageTitle">Gedankensplitter {{ $route.params.id }}</div> 
  <div id="mainCanvas" touch-action="none">
  </div>

  <div id="cmdCanvas" touch-action="none">
  cmd
  </div>

  <Help :toolData="{x: 500, y: 500}"></Help>

  <Layer 
    v-if="showSVGlayer"
   :layerData="{height: SVGheight, width: SVGwidth, x: SVGx ,y: SVGy}">
  </Layer>

  <SVGLayer 
    v-bind:SVGdata="{id: SVGid, path: SVGpath, height: SVGheight, width: SVGwidth, x: SVGx ,y: SVGy, show: showSVGlayer}">
  </SVGLayer>

  <myScriptLayer 
    v-for="(layer, index) in giveToolsofEntry()" 
    :key="index"
    v-if="layer.show" 
    :layerData="{id: layer.id, index: index, x: layer.x, y:layer.y, height: layer.h, width: layer.w, show: layer.show}">
  </myScriptLayer>

</div>
</template>

<script>
    import SVGLayer from '../interaktion/svg.vue';
    import Layer from '../interaktion/layer.vue';
    import myScriptLayer from '../interaktion/myScriptLayer.vue';
    
    import Help from '../werzeuge/help.vue';

    export default {
        data() {
            return {
                pageID: parseInt(this.$route.params.id),
                // TEST SVG DATA
                SVGpath: "M210.08,61.91l-1.06,0.26h-1.06l-1.85,0.53l-1.06,0.26l-2.65,1.06l-1.32,1.06l-2.65,1.85l-1.32,1.59l-1.32,2.65l-0.26,1.06l-0.26,4.5l0.26,2.91l0.53,2.12l2.38,5.56l3.7,5.56l3.18,2.91l3.97,2.38l7.41,3.17l3.18,0.79l7.67,1.32l3.7,0.53h5.29h1.59l4.5-1.32l3.18-1.59l5.56-3.18l2.91-2.12l5.29-4.23l2.12-1.59l3.97-3.44l1.85-2.12l1.32-2.91l0.26-1.06v-3.7l-0.79-2.91l-2.65-5.03l-1.59-2.12l-1.06-1.32l-3.44-3.17l-3.97-2.65l-2.91-1.06l-2.38-0.79l-5.29-1.59l-5.56-1.06l-2.91-0.26l-2.12-0.26l-4.76-0.53h-1.85l-3.7,0.26l-1.59,0.26l-2.38,0.26h-1.06l-2.65,0.26h-1.32l-2.38,0.53h-0.79l-1.32,0.53l-1.85,1.59l-1.32,1.85l-0.53,1.85l-0.26,0.79",
                SVGheight: 192.49148559570312,
                SVGwidth: 282.973388671875,
                SVGx: 736.0255126953125,
                SVGy: 202.65835571289062,
                showSVGlayer: false
            }
        },
        mounted() {

            window.onerror = function(e) {
                console.log(e);
                if(e.detail.message === "Unexpected error"){
                    location.reload();
                }
            }

            // Clean Timer
                
            // UNDO REDO WITH PERSIST FIX
            localStorage.setItem("urEmptyState", localStorage.getItem("vuex"));

            console.log('Current Page', this.pageID)
            // TOOL Editor
            var editorElement = document.getElementById('mainCanvas');

            // API Register
            MyScript.register(editorElement, {
                recognitionParams: {
                    type: 'DIAGRAM',
                    protocol: 'WEBSOCKET',
                    apiVersion: 'V4',
                    server: this.$store.state.access[this.$store.state.curAccessPoint]
                }
            });


            // CMD EDITOR
            var cmdeditorElement = document.getElementById('cmdCanvas');

            // API Register
            MyScript.register(cmdeditorElement, {
                recognitionParams: {
                    type: 'TEXT',
                    apiVersion: 'V4',
                    server: this.$store.state.access[this.$store.state.curAccessPoint],

                }
            });

            // Deutsch
            cmdeditorElement.editor.configuration.recognitionParams.v4.lang = 'de_DE';



            // MultiLayer Fix
            editorElement.addEventListener('pointerdown', (e) => {
                var new_e = new e.constructor(e.type, e);
                cmdeditorElement.dispatchEvent(new_e);
            });

            editorElement.addEventListener('pointerleave', (e) => {
                var new_e = new e.constructor(e.type, e);
                cmdeditorElement.dispatchEvent(new_e);
            });

            editorElement.addEventListener('pointermove', (e) => {
                var new_e = new e.constructor(e.type, e);
                cmdeditorElement.dispatchEvent(new_e);
            });

            editorElement.addEventListener('pointerout', (e) => {
                var new_e = new e.constructor(e.type, e);
                cmdeditorElement.dispatchEvent(new_e);
            });

            editorElement.addEventListener('pointerup', (e) => {
                var new_e = new e.constructor(e.type, e);
                cmdeditorElement.dispatchEvent(new_e);
            });



            editorElement.addEventListener('click', (e) => {
                console.log('Editor Clicked')
                var new_e = new e.constructor(e.type, e);
                cmdeditorElement.dispatchEvent(new_e);

                var paths = document.getElementById('MODEL-viewTransform').getElementsByTagName('path');
                var pathsList = Array.prototype.slice.call(paths);
                var SVGPath;

                // Check if there is a Form
                pathsList.forEach((element, index) => {
                    // Is there a Fill Path?
                    console.log('Charset', element.id.charAt(6));
                    if (element.id.charAt(6) === "d") {
                        console.log('TEST?!');
                        SVGPath = document.getElementById('MODEL-viewTransform').getElementsByTagName('path')[index].attributes.d.nodeValue;

                        // Positions Info
                        var posInfo = document.getElementById('MODEL-viewTransform').getBoundingClientRect();

                        // console.log('PosInfo', posInfo);
                        // console.log('SVG Path', SVGPath);
                        // editorElement.editor.clear();

                        // Update SVG File
                        this.SVGpath = SVGPath;
                        this.SVGheight = posInfo.height;
                        this.SVGwidth = posInfo.width;
                        this.SVGx = posInfo.x;
                        this.SVGy = posInfo.y;


                        // Add Layer
                        this.$store.commit('addLayer', {
                            id: this.$store.state.LayerCount,
                            SVGid: this.$store.state.LayerCount,
                            page: this.pageID,
                            x: posInfo.x,
                            y: posInfo.y,
                            w: posInfo.width,
                            h: posInfo.height,
                            svgPath: SVGPath,
                            show: true,
                            tool: {
                                toolname: 'NoTool',
                                tooldata: []
                            }
                        });
                        //editorElement.editor.clear();
                        cmdeditorElement.editor.clear();
                    } else {

                    }

                });

            });

            // Rechtsklick um Canvas zu leeren
            editorElement.addEventListener('contextmenu', function(ev) {
                // ev.preventDefault();
                editorElement.editor.clear();
                cmdeditorElement.editor.clear();
                return false;

            }, false);

            // CMD Layer
            cmdeditorElement.addEventListener('exported', (event) => {
                console.log('Erkannt:', event.detail.exports['text/plain']);

                // Erkenne Command Request
                if (this.recogCmd(event.detail.exports['text/plain'].toLowerCase())) {
                    cmdeditorElement.editor.clear();
                    editorElement.editor.clear();
                }else if(event.detail.exports['text/plain'].toLowerCase().includes("x")){
                    cmdeditorElement.editor.clear();
                    editorElement.editor.clear();
                }

            });

            // Undo and Redo
            window.addEventListener('keydown', (e) => {
                console.log(e.keyCode);
                if (e.keyCode === 37) {
                    this.undo();
                } else if (e.keyCode === 39) {
                    this.redo();
                } else if (e.keyCode === 88) {
                    cmdeditorElement.editor.clear();
                    editorElement.editor.clear();
                } else if (e.keyCode === 82) {
                     location.reload();
                }
            });

            // Resize
            window.onresize = () => { location.reload(); };


        },
        created() {

        },
        destroyed() {

        },
        components: {
            SVGLayer,
            myScriptLayer,
            Layer,
            Help
        },
        methods: {
            // Check if Tool is part of this Page
            giveToolsofEntry: function() {
                //console.log('Filter?!')
                let result = this.$store.state.layers.filter((layer) => {
                    //console.log('Filter'[layer.page,this.pageID])
                    return layer.page === this.pageID
                });
                return result

            },
            // this.$store.state
            // Recognition
            recogForm: function(gestik) {
                switch (gestik) {
                    case '0':
                        return true;
                    case 'o':
                        return true;
                    case 'O':
                        return true;
                    case '˚':
                        return true;
                    default:
                        return false;
                }
            },
            recogCmd: function(gestik) {
                switch (gestik) {
                    case '<':
                        if (this.canUndo) this.undo();
                        console.log('UNDO');
                        return true;

                    case '>':
                        if (this.canRedo) this.redo();
                        console.log('REDO');
                        return true;

                    case 's':
                        this.showSVGlayer = !this.showSVGlayer;
                        console.log('Show SVG', this.showSVGlayer);
                        return true;

                    case 'back':
                        this.$router.push({
                            name: 'Overview'
                        });
                        return true;

                    case '.':
                        return true;

                    case 'reset':
                        localStorage.clear();
                        this.$router.push({
                            name: 'Overview'
                        });
                        return true;

                    case 'hilfe':
                        console.log('Hilfe')
                        this.$store.commit('showHelpLayer', true)
                        return true;

                    case 'inspire me':
                        console.log('Inspire Me!')
                        return true;

                    default:
                        return false;
                }
            }
        }
    }
</script>

<style scoped>
    #mainCanvas {
        height: 100vh;
        width: 100vw;
        background: #F5F4F0;
        position: absolute;
        top: 0;
        left: 0;
        display: -webkit-box;
    }

    #cmdCanvas {
        height: 100vh;
        width: 100vw;
        background: rgb(0, 255, 136);
        position: fixed;
        top: 0;
        left: 0;
        display: -webkit-box;
        touch-action: none;
        z-index: 0;
    }
    .PageTitle {
        position: absolute;
        z-index: 10000;
        opacity: 0.3;
        font-family: 'selimaregular', cursive;
        font-size: 22px;
        margin-left: 20px;
        margin-top: 15px;
    }
    .paperstyle{
        position: fixed;
        height: 100vh;
        width: 100vw;
        background: url(src/png/paper.jpg);
        z-index: 20000;
        top: 0;
        left: 0;
        background-attachment: fixed;
        background-size: cover;
        mix-blend-mode: multiply;
        pointer-events: none;
        opacity: 0.6;
    }
</style>