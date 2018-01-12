<template>
    <div class="layer" :style="{ top:layerData.y+'px', left:layerData.x+'px', height: layerData.height+'px', width: layerData.width+'px'}">
    </div>
</template>

<script>
    //console.log('Layer');

    export default {
        props: ['layerData'],
        data() {
            return {}
        },
        mounted() {

        },
        created() {

        },
        destroyed() {

        },
        components: {},
        methods: {

        }
    }
</script>

<style scoped>
    .layer {
        position: absolute;
        z-index: 2000;
        background: rgb(39, 201, 166);
        clip-path: url(#form);
    }
</style>