<template>
    <div class="text" :id="uniqueTitle">
        <slot></slot>
    </div>
</template>

<script>
// Sonstige Plugins
// ShowDown
import footnotes from '../../../../node_modules/showdown-footnotes';

//Marked
import marked from '../../../../node_modules/marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: true
});

// MarkdownIt
import MarkdownIt from '../../../../node_modules/markdown-it';
import MarkdownItFootnote from '../../../../node_modules/markdown-it-footnote';
import markdownItAnchor from '../../../../node_modules/markdown-it-anchor';

var mdit = new MarkdownIt({
  html:         false,        // Enable HTML tags in source
  xhtmlOut:     false,        // Use '/' to close single tags (<br />).
                              // This is only for full CommonMark compatibility.
  breaks:       false,        // Convert '\n' in paragraphs into <br>
  langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
                              // useful for external highlighters.
  linkify:      true,        // Autoconvert URL-like text to links

  // Enable some language-neutral replacement + quotes beautification
  typographer:  true,

  // Double + single quotes replacement pairs, when typographer enabled,
  // and smartquotes on. Could be either a String or an Array.
  //
  // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
  // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
  quotes: '„“‚‘',

});

mdit.use(MarkdownItFootnote);
mdit.use(markdownItAnchor);
console.log('Mdit', mdit);


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
            // Showdown
            // var html = converter.makeHtml(text);
            
            // Marked
            // var html = marked(text);

            // Mardown-it
            var html = mdit.render(text);
            console.log('HTML Outcome mdit', html)
            return html;
        }
    }
}
</script>

<style scoped>

</style>

