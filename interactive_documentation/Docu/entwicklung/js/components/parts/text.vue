<template>
    <div class="text" :id="uniqueTitle">
        <slot></slot>
    </div>
</template>

<script>
// Sonstige Plugins
import footnotes from '../../../../node_modules/showdown-footnotes';
// Create Converter
// https://github.com/showdownjs/showdown 
var converter = new showdown.Converter({
    extensions: [footnotes]
});
export default {
    props: ['uniqueTitle'],
    data() {
        return {

        }
    },
    mounted() {
        // console.log('this.$slots.default[0]',this.$slots.default[0])
        var innerHTML = this.convertMarkdown(this.$slots.default[0].text);
        document.getElementById(this.uniqueTitle).innerHTML = innerHTML;
    },
    created() {
        hljs.initHighlightingOnLoad();
    },
    destroyed() {

    },
    components: {

    },
    methods: {
        convertMarkdown(text) {
            let outputHtml = [];
            //console.log('unformatted Text', text)
            var html = converter.makeHtml(text);
            // console.log('HTML Outcome', html)
            return html;
        }
    }
}
</script>

<style scoped>

</style>

