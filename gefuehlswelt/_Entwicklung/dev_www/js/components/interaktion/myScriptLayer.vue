<template>
    <div class="toolLayer">

        <PatternTool class="maskedlayer"
            stouch-action="none"
            v-if="Tool === 'pattern'"
            :toolData="{
                id: layerData.id, 
                height:layerData.height,
                width:layerData.width,
                x: layerData.x,
                y: layerData.y,
            }" 
            :style="{ 
                clipPath: 'url(#path_' + layerData.id +')', 
                top:layerData.y+'px', left:layerData.x+'px', 
                height: layerData.height+'px', 
                width: layerData.width+'px'
            }">
        </PatternTool>

        <UglyPen class="maskedlayer"
            stouch-action="none"
            v-if="Tool === 'ugly'"
            :toolData="{
                id: layerData.id, 
                height:layerData.height,
                width:layerData.width,
                x: layerData.x,
                y: layerData.y,
            }" 
            :style="{ 
                clipPath: 'url(#path_' + layerData.id +')', 
                top:layerData.y+'px', left:layerData.x+'px', 
                height: layerData.height+'px', 
                width: layerData.width+'px'
            }">
        </UglyPen>


        <TextTool class="maskedlayer"
            stouch-action="none"
            v-if="Tool === 'text'"
            :toolData="{
                id: layerData.id, 
                height:layerData.height,
                width:layerData.width
            }" 
            :style="{ 
                clipPath: 'url(#path_' + layerData.id +')', 
                top:layerData.y+'px', left:layerData.x+'px', 
                height: layerData.height+'px', 
                width: layerData.width+'px'
            }">
        </TextTool>

        <meinWerkzeug class="maskedlayer"
            stouch-action="none"
            v-if="Tool === 'orange'"
            :toolData="{
                id: layerData.id, 
                height:layerData.height,
                width:layerData.width
            }" 
            :style="{ 
                clipPath: 'url(#path_' + layerData.id +')', 
                top:layerData.y+'px', left:layerData.x+'px', 
                height: layerData.height+'px', 
                width: layerData.width+'px'
            }">
        </meinWerkzeug>

        <meinAnderesWerkzeug class="maskedlayer"
            touch-action="none"
            v-if="Tool === 'white'" 
            :toolData="{
                id: layerData.id, 
                height:layerData.height,
                width:layerData.width
            }" 
            :style="{ 
                clipPath: 'url(#path_' + layerData.id +')', 
                top:layerData.y+'px', left:layerData.x+'px', 
                height: layerData.height+'px', 
                width: layerData.width+'px'
            }">
        </meinAnderesWerkzeug> 

        <Inspire class="maskedlayer"
            stouch-action="none"
            v-if="Tool === 'inspire'"
            :toolData="{
                id: layerData.id, 
                height:layerData.height,
                width:layerData.width
            }" 
            :style="{ 
                clipPath: 'url(#path_' + layerData.id +')', 
                top:layerData.y+'px', left:layerData.x+'px', 
                height: layerData.height+'px', 
                width: layerData.width+'px'
            }">
        </Inspire>

        <Circles class="maskedlayer"
            stouch-action="none"
            v-if="Tool === 'circles'"
            :toolData="{
                id: layerData.id, 
                height:layerData.height,
                width:layerData.width
            }" 
            :style="{ 
                clipPath: 'url(#path_' + layerData.id +')', 
                top:layerData.y+'px', left:layerData.x+'px', 
                height: layerData.height+'px', 
                width: layerData.width+'px'
            }">
        </Circles>

        <Sketch class="maskedlayer"
            stouch-action="none"
            v-if="Tool === 'sketch'"
            :toolData="{
                id: layerData.id, 
                height:layerData.height,
                width:layerData.width
            }" 
            :style="{ 
                clipPath: 'url(#path_' + layerData.id +')', 
                top:layerData.y+'px', left:layerData.x+'px', 
                height: layerData.height+'px', 
                width: layerData.width+'px'
            }">
        </Sketch>

        <RainBrush class="maskedlayer"
            stouch-action="none"
            v-if="Tool === 'rain'"
            :toolData="{
                id: layerData.id, 
                height:layerData.height,
                width:layerData.width
            }" 
            :style="{ 
                clipPath: 'url(#path_' + layerData.id +')', 
                top:layerData.y+'px', left:layerData.x+'px', 
                height: layerData.height+'px', 
                width: layerData.width+'px'
            }">
        </RainBrush>

        <Rose class="maskedlayer"
            stouch-action="none"
            v-if="Tool === 'mandala'"
            :toolData="{
                id: layerData.id, 
                height:layerData.height,
                width:layerData.width
            }" 
            :style="{ 
                clipPath: 'url(#path_' + layerData.id +')', 
                top:layerData.y+'px', left:layerData.x+'px', 
                height: layerData.height+'px', 
                width: layerData.width+'px'
            }">
        </Rose>

        <Colors class="maskedlayer"
            stouch-action="none"
            v-if="Tool === 'colors'"
            :toolData="{
                id: layerData.id, 
                height:layerData.height,
                width:layerData.width
            }" 
            :style="{ 
                clipPath: 'url(#path_' + layerData.id +')', 
                top:layerData.y+'px', left:layerData.x+'px', 
                height: layerData.height+'px', 
                width: layerData.width+'px'
            }">
        </Colors>


        <Fade class="maskedlayer"
            stouch-action="none"
            v-if="Tool === 'fade'"
            :toolData="{
                id: layerData.id, 
                height:layerData.height,
                width:layerData.width
            }" 
            :style="{ 
                clipPath: 'url(#path_' + layerData.id +')', 
                top:layerData.y+'px', left:layerData.x+'px', 
                height: layerData.height+'px', 
                width: layerData.width+'px'
            }">
        </Fade>


        <Spin class="maskedlayer"
            stouch-action="none"
            v-if="Tool === 'spin'"
            :toolData="{
                id: layerData.id, 
                height:layerData.height,
                width:layerData.width
            }" 
            :style="{ 
                clipPath: 'url(#path_' + layerData.id +')', 
                top:layerData.y+'px', left:layerData.x+'px', 
                height: layerData.height+'px', 
                width: layerData.width+'px'
            }">
        </Spin>

        <div
            touch-action="none" 
            v-if="Tool === 'NoTool'"
            :id="'layer_'+layerData.id"  
            class="layer maskedlayer" 
            :style="{ 
                clipPath: 'url(#path_' + layerData.id +')',
                top:layerData.y+'px', 
                left:layerData.x+'px', 
                height: layerData.height+'px', 
                width: layerData.width+'px'}">
        </div>

    </div>
</template>

<script>
    import meinWerkzeug from '../werzeuge/beispiel.vue';
    import meinAnderesWerkzeug from '../werzeuge/beispiel2.vue';

    import TextTool from '../werzeuge/texttool.vue';
    import UglyPen from '../werzeuge/uglypen.vue';
    import PatternTool from '../werzeuge/pattern.vue';

    import Circles from '../werzeuge/circles.vue';
    import Sketch from '../werzeuge/Sketch.vue';
    import RainBrush from '../werzeuge/rainbrush.vue';
    import Rose from '../werzeuge/rose.vue';

    import Colors from '../werzeuge/colors.vue';
    import Fade from '../werzeuge/fade.vue';
    import Spin from '../werzeuge/spin.vue';

    import Inspire from '../werzeuge/inspire.vue';

    export default {
        props: ['layerData'],
        data() {
            return {
                Tool: 'NoTool' // Aktuelles Werkzeug
            }
        },
        mounted() {
            var LayerID = this.layerData.id;
            // console.log('Mounted thislayerid', this.layerData)
            var LayerIndex = this.layerData.index;

            // Check Current Tool
            this.currentTool();

            var editorElement = document.getElementById('layer_' + LayerID);

            // MyScript API Register
            MyScript.register(editorElement, {
                recognitionParams: {
                    type: 'TEXT',
                    server: this.$store.state.access[this.$store.state.curAccessPoint]
                }
            });

            // Wenn Eingabe erkannt wurde
            editorElement.addEventListener('exported', (event) => {

                console.log('Erkannt:', event.detail.exports['text/plain']);

                // Erkenne Werkzeug Request
                if (this.recogTool(event.detail.exports['text/plain'].toLowerCase())) {

                    console.log('Neues Tool erkannt', event.detail.exports['text/plain'].toLowerCase())

                    var newLayerData = {
                        layerID: this.layerData.id,
                        toolName: event.detail.exports['text/plain'].toLowerCase(),
                    }
                    this.$store.commit('updateLayerTool', newLayerData);
                    this.currentTool();
                }else if(event.detail.exports['text/plain'].toLowerCase().includes("x")){
                    editorElement.editor.clear();
                }

                // Delete
                if (this.recogDel(event.detail.exports['text/plain'])) {
                    editorElement.editor.clear();

                    var newLayer = this.$store.state.layers[LayerIndex];
                    newLayer.show = false;
                    this.$store.commit('removeLayer', {
                        id: this.layerData.id 
                    });
                }

            });

            // Debug: Rechtsklick um Canvas zu leeren
            editorElement.addEventListener('contextmenu', function(ev) {
                // ev.preventDefault();
                editorElement.editor.clear();
                return false;
            }, false);

        },
        created() {

        },
        destroyed() {

        },
        components: {
            meinWerkzeug,
            meinAnderesWerkzeug,
            TextTool,
            UglyPen,
            Inspire,
            PatternTool,
            Circles,
            Sketch,
            RainBrush,
            Rose,
            Colors,
            Fade,
            Spin,
        },
        methods: {
            // Current Tool
            currentTool: function() {
                this.$store.state.layers.forEach((l) => {
                    //console.log('filter',[l.id, this.layerData.id]);    
                    if (l.id === this.layerData.id) {
                        this.Tool = l.tool.toolname
                    };
                })
            },
            // maskedStyle
            maskedStyle: function() {
                return '-webkit-clip-path: url(#path_' + this.journalData.id + ')'
            },
            //Delete
            recogDel: function(gestik) {
                switch (gestik) {
                    case 'x':
                        return true;
                    case 'X':
                        return true;
                    case '×':
                        return true;
                    default:
                        return false;
                }
            },
            //Werkzeuge
            recogTool: function(gestik) {
                switch (gestik) {
                    case 'orange':
                        return true;
                    case 'white':
                        return true;
                    case 'text':
                        return true;
                    case 'ugly':
                        return true;
                    case 'inspire':
                        return true;
                    case 'pattern':
                        return true;
                    case 'circles':
                        return true;
                    case 'mandala':
                        return true;
                    case 'rain':
                        return true;
                    case 'colors':
                        return true;
                    case 'fade':
                        return true;
                    case 'spin':
                        return true;
                    case 'sketch':
                        return true;
                    default:
                        return false;
                }
            },
        }
    }
</script>

<style scoped>
    .layer {
        position: absolute;
        z-index: 2000;
        background: rgba(255, 255, 255, 0.5);
        ;
    }

    .ms-editor canvas.ms-rendering-canvas,
    .ms-editor svg {
        z-index: 10;
        pointer-events: none;
        background: none;
    }
</style>