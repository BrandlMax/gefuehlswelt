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

                // Enter
                if(this.recogEnter(event.detail.exports['text/plain'])){
                    this.$router.push({
                        name: 'Entry',
                        params: {
                            id: JournalID
                        }
                    });
                }else if(event.detail.exports['text/plain'].toLowerCase().includes("x")){
                    editorElement.editor.clear();
                }

                // Delete
                if (this.recogDel(event.detail.exports['text/plain'])) {
                    editorElement.editor.clear();

                    this.$store.commit('removeJournal', {
                        id: this.journalData.id 
                    });
                }

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
            // Enter
            recogEnter: function(gestik){
                switch (gestik) {
                    case 'v':
                        return true;
                    case '✓':
                        return true;
                    case 'V':
                        return true;
                    default:
                        return false;
                }               
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