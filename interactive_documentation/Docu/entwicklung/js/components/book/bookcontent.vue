<template>
<div id="bookcontent">

    <div class="side left">
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
  },
  created () {
  },
  destroyed(){

  },components: {
  },
  methods:{
  }
}
</script>

<style scoped>

</style>

