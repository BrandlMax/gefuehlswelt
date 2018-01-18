<template>
<div id="pagination">
    <div class="dot" @click="changePage('one')">
        <img src="../../src/img/dot.png">
    </div>
    <div class="dot" @click="changePage('two')">
        <img src="../../src/img/dot.png">
    </div>
    <div class="dot" @click="changePage('three')">
        <img src="../../src/img/dot.png">
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
      changePage(target){
          console.log('Change Page:', target)
      }
  }
}
</script>

<style scoped>

#pagination {
    position: absolute;
    bottom: 0;
    display: flex;
}

.dot {
    width: 3vh;
    padding-bottom: 0.5vw;
    padding-right: 1vh;
    padding-left: 1vh;
}

</style>

