<template>
<div id="pagination">

    <div v-for="(point, index) in this.$router.options.routes" :key="index" :class="['dot tooltip', {active: checkActive(point.name)}]" @click="changePage(point.name)">
        <img :src="'./src/img/dot_'+ point.color+'.png'">
        <span class="tooltiptext">{{point.title}}</span>
    </div>

</div>
</template>

<script>
// Import

export default {
  props: [],
  data(){
      return{
          curPath: this.$route.name
      }
  },
  mounted() {
      console.log('Router', this.$router.options.routes);
       console.log('Router Detail', this.$route.path);
  },
  created () {
  },
  destroyed(){

  },components: {

  },
  methods:{
    changePage(id){
        this.$router.push({ name: id})
    },
    checkActive(name){
        console.log('checkActive', this.curPath === '/'+ name)
        return this.curPath === name;
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
    max-width: 23px;
    padding-bottom: 0.5vw;
    padding-right: 1vh;
    padding-left: 1vh;
    cursor: pointer;
    opacity: 0.2;
    transition: all 0.5s ease;
}

.dot:hover{
    opacity: 1;
    transition: all 0.5s ease;
}

.dot.active{
    opacity: 1;
    transition: all 0.5s ease;
}

/* Tooltip container */
.tooltip {
    position: relative;
    display: inline-block;
}

/* Tooltip text */
.tooltip .tooltiptext {
    opacity: 0;
    width: 120px;
    bottom: 100%;
    left: 50%; 
    margin-left: -70px; 
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
 
    position: absolute;
    z-index: 1;

    margin-bottom: 10px;
    transition: all 0.5s ease;

    line-height: 22px;
    padding: 10px;
}

.tooltip .tooltiptext::after {
    content: " ";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.5) transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
    opacity: 1;
    transition: all 0.5s ease;
}

span.tooltiptext {
    pointer-events: none;
}


</style>

