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

#bookcontent {
    position: absolute;
    width: 83vw;
    display: flex;
    justify-content: space-around;
    height: 45vw;
}

.side{

    width: 34.4vw;
}

.left{
    /* background: #ffc043; */
    margin-top: -1vw;
    padding: 3vw;
    box-sizing: border-box;
    padding-left: 4vw;
    display: flex;
    justify-content: center;
    align-items: center;
}

.right{
    /* background: #43ffc7; */
    margin-right: 1vw;
    margin-top: -1vw;
    box-sizing: border-box;
}

.textArea {

}

.left p{
    opacity: 0.45;
    color: #000000;
    line-height: 2.5vw;
    font-size: 1.3vw;
}

iframe{
    height: 100%;
    width: 100%;
}
.iFrameSlot{
    height: 100%;
    width: 100%;
}

</style>

