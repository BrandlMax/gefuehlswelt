<template>
<div class="chapter">
    <div class="coverPreview">
        <div id="dropcover" class="dropoverlay" v-if="extraProd">
            <img class="rubberband" src="../../../src/img/band.png" alt="band">
        </div>
        <img :src="'../../../src/img/' + curProduct + '.png'" alt="cover">
    </div>
    <div class="color_switches">
        <div class="cover_switch" @click="switchProduct(1)">
            <img src="../../../src/img/cover_1.png" alt="cover">
        </div>  

        <div class="cover_switch" @click="switchProduct(0)">
            <img src="../../../src/img/cover_2.png" alt="cover">
        </div>  

        <div class="cover_switch" @click="switchProduct(1)">
            <img src="../../../src/img/cover_3.png" alt="cover">
        </div>

        <div class="cover_switch fill" @click="addExtra()">
            <div id="addCover">+</div>
            <div id="result"></div>
            <input multiple="false" type="file" id="coverUploader">
        </div>
    </div>   
</div>
</template>

<script>
// Import

export default {
  props: [],
  data(){
      return{
        curProduct: 'product_0',
        extraProd: false
      }
  },
  mounted() {
    // https://stackoverflow.com/questions/34119048/change-a-background-image-through-a-file-input
    $('#coverUploader').hide();

    $('#addCover').on('click', function() {
        $('#coverUploader').click();
        console.log("Button clicked")
    });

    $('#coverUploader').change(function() {
        var file = this.files[0];
        var reader = new FileReader();
        reader.onloadend = function() {
            $('#dropcover').css('background-image', 'url("' + reader.result + '")');
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {}
    });
      


  },
  created () {
  },
  destroyed(){

  },components: {

  },
  methods:{
      switchProduct(n){
          this.curProduct = 'product_'+n;
      },
      addExtra(){
          this.extraProd = true;
      }
  }
}
</script>

<style scoped>
    .coverPreview{
        position: absolute;
        top: 0;
        left: 70px;
        width: 70vw;
    }

    .color_switches{
        position: absolute;
        top: 0;
        margin-left: 10vw;
        cursor: pointer;
    }

    .cover_switch {
        overflow: hidden;
        height: 5vw;
        width: 5vw;
        border-radius: 102vw;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cover_switch img {
        width: 180%;
    }

    .cover_switch.fill {
        background: #66bbb1;
        font-size: 30px;
        color: #fff;
    }

    .dropoverlay{
        position: absolute;
        width: 27.8vw;
        height: 44.56vw;
        background: rgba(255, 0, 0, 0);
        right: 6.45vw;
        border-radius: 0.2vw 1vw 1vw 0.2vw;
    }

    #dropcover{
        background-image: url('');
        background-size: cover;
        background-position: center;
    }

    img.rubberband {
        width: 1.74vw;
        position: absolute;
        right: 3.4vw;
    }

    #addCover {
        position: absolute;
        /* pointer-events: none; */
        width: 5vw;
        height: 5vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input#coverUploader {
        height: 10vw;
        cursor: pointer;
    }
</style>

