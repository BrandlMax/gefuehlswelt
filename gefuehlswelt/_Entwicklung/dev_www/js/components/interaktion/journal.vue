<template>
    <div 
        touch-action="none"
        :id="'layer_'+journalData.id" 
        class="journal maskedlayer" 
        :style="[{ 
            clipPath: 'url(#path_' + journalData.id +')', 
            top:journalData.y+'px', left:journalData.x+'px', 
            height: journalData.height+'px', 
            width: journalData.width+'px', 
            background: journalData.background}, 
            {'-webkit-clip-path':'url(#path_' + journalData.id +')'
        }]">
        
        journal
    </div>
</template>

<script>
    // console.log('JournalLayer');

    export default {
        props: ['journalData'],
        data() {
            return {}
        },
        mounted() {

            var JournalID = this.journalData.id;
            var JournalIndex = this.journalData.index;

            var editorElement = document.getElementById('layer_' + JournalID);

            // API Register
            MyScript.register(editorElement, {
                recognitionParams: {
                    type: 'TEXT',
                    server: this.$store.state.access[this.$store.state.curAccessPoint]
                }
            });

            // Wenn Eingabe erkannt wurde
            editorElement.addEventListener('exported', (event) => {

                console.log('Erkannt:', event.detail.exports['text/plain']);
                this.$router.push({
                    name: 'Entry',
                    params: {
                        id: JournalID
                    }
                });

            });

            // Rechtsklick um Canvas zu leeren
            editorElement.addEventListener('contextmenu', (ev) => {
                ev.preventDefault();
                editorElement.editor.clear();
                return false;
            }, false);

        },
        created() {

        },
        destroyed() {

        },
        components: {},
        methods: {
            maskedStyle: function() {
                return '-webkit-clip-path: url(#path_' + this.journalData.id + ')'
            },
            // Recognition
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
            }
        }
    }
</script>

<style scoped>
    .journal {
        position: absolute;
        z-index: 2000;
        background: rgba(255, 255, 255, 0.5);
    }
</style>