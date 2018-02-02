<template>
<div class="chapter">
    <div class="coverPreview">
        <div id="dropcover" class="dropoverlay" v-if="extraProd">
            <img class="rubberband" src="./src/img/band.png" alt="band">
        </div>
        <img :src="'./src/img/' + curProduct + '.png'" alt="cover">
    </div>
    <div class="color_switches">
        <div class="cover_switch" @click="switchProduct(1)">
            <img src="./src/img/cover_1.png" alt="cover">
        </div>  

        <div class="cover_switch" @click="switchProduct(2)">
            <img src="./src/img/cover_2.png" alt="cover">
        </div>  

        <div class="cover_switch" @click="switchProduct(3)">
            <img src="./src/img/cover_3.png" alt="cover">
        </div>

        <div class="cover_switch" @click="switchProduct(4)">
            <img src="./src/img/cover_4.png" alt="cover">
        </div>

        <div class="cover_switch" @click="switchProduct(0)">
            <img src="./src/img/cover_0.png" alt="cover">
        </div>

        <div class="cover_switch fill" @click="addExtra()">
            <div id="addCover">+</div>
            <div id="result"></div>
            <input multiple="false" type="file" accept=".png,.jpg" id="coverUploader">
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
        curProduct: 'product_1',
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
          this.extraProd = false;
      },
      addExtra(){
          this.curProduct = 'product_0';
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
        width: 27.6vw;
        height: 44.19vw;
        background: rgba(255, 0, 0, 0);
        right: 6.45vw;
        border-radius: 0.2vw 1vw 1vw 0.2vw;
        margin-top: 0.24vw;
    }

    #dropcover{
        background-image: none;
        background-size: cover;
        background-position: center;
        mix-blend-mode: screen;
        opacity: 0.98;
    }

    img.rubberband {
        width: 1.73vw;
        position: absolute;
        right: 3.4vw;
        mix-blend-mode: unset;
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

    @media only screen and (orientation: portrait) {
        .coverPreview{
            position: relative;
            top: 0;
            left: 0;
            width: 100%;
            margin-bottom: 4vw;
        }
        .color_switches{
            position: relative;
            margin-left: 15vw;
            cursor: pointer;
            margin-top: -43vw;
            margin-bottom: 7vw;
        }
        .dropoverlay {
            position: absolute;
            width: 23.8vw;
            height: 38.24vw;
            background: rgba(255, 0, 0, 0);
            right: 5.45vw;
            border-radius: 0.2vw 1vw 1vw 0.2vw;
        }
        img.rubberband {
            width: 1.5vw;
            position: absolute;
            right: 2.9vw;
        }
    }
</style>

