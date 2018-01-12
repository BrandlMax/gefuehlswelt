<template>
    <div class="toolLayer">

        <meinWerkzeug class="maskedlayer"
            stouch-action="none"
            v-if="Tool === 'mandala'"
            :toolData="{id: layerData.id, height:layerData.height,width:layerData.width}" 
            :style="{ clipPath: 'url(#path_' + layerData.id +')', top:layerData.y+'px', left:layerData.x+'px', height: layerData.height+'px', width: layerData.width+'px'}">
        </meinWerkzeug>

        <meinAnderesWerkzeug class="maskedlayer"
            touch-action="none"
            v-if="Tool === 'doodle'" 
            :toolData="{id: layerData.id, height:layerData.height,width:layerData.width}" 
            :style="{ clipPath: 'url(#path_' + layerData.id +')', top:layerData.y+'px', left:layerData.x+'px', height: layerData.height+'px', width: layerData.width+'px'}">
        </meinAnderesWerkzeug> 

        <div
            touch-action="none" 
            v-if="Tool === 'NoTool'"
            :id="'layer_'+layerData.id"  
            class="layer maskedlayer" 
            :style="{ clipPath: 'url(#path_' + layerData.id +')',top:layerData.y+'px', left:layerData.x+'px', height: layerData.height+'px', width: layerData.width+'px'}">
        </div>

    </div>
</template>

<script>
    import meinWerkzeug from '../werzeuge/beispiel.vue';
    import meinAnderesWerkzeug from '../werzeuge/beispiel2.vue';

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
                }

                // Delete
                if (this.recogDel(event.detail.exports['text/plain'])) {
                    editorElement.editor.clear();

                    var newLayer = this.$store.state.layers[LayerIndex];
                    newLayer.show = false;
                    this.$store.commit('removeLayer', {
                        index: LayerIndex,
                        updatedLayer: newLayer
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
            meinAnderesWerkzeug
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
                    case 'mandala':
                        return true;
                    case 'doodle':
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