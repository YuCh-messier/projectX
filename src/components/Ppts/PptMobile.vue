<script setup>
import { ref } from 'vue';
import { host,getDatas } from '../../scripts/publicFunctions';

var ppts=ref([{graph:''},{graph:''},{graph:''},{graph:''}])
getDatas((e)=>{ppts.value=e},'ppts/setPpts')

function goto(href){
    window.location=href
}
</script>

<template>
    <div>
    <el-carousel :interval="5000" arrow="always" height="200px">
        <el-carousel-item v-for="item in ppts" :key="item">
            <div class="w-full h-full" :style="'background-position:center;background-size:cover;background-image:url('+item.graph+');'"></div>
        </el-carousel-item>
    </el-carousel>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>
    .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    text-align: center;
    }

    .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
    }
</style>

