<template>
<div id="bookcontent">

    <div id="leftSide" class="side left">
        <div class="textArea">
        <slot name="left"></slot>
        </div>
    </div>

    <div class="side right">
        <slot name="right"></slot>
    </div>

</div>
</template>

<script>
// Import

export default {
  props: [],
  data(){
      return{
      }
  },
  mounted() {
        var elem = document.getElementById('leftSide');
        // Check if Overflow
        if(this.isOverflown(elem)){
            elem.className = elem.className + ' overflowScroll';
        }

        window.onresize = () =>{
            console.log('resize')
            if(this.isOverflown(elem)){
                elem.className = elem.className + ' overflowScroll';
            }else{
                elem.className = 'side left';
            }
        };
  },
  created () {
  },
  destroyed(){

  },components: {
  },
  methods:{
        isOverflown(element) {

            return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
        }
  }
}
</script>

<style scoped>

</style>

