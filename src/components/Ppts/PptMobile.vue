<script setup>
import { toRefs } from 'vue';
import { host } from '../../scripts/publicFunctions';
var props=defineProps(['ppts'])
var {ppts}=toRefs(props)

function goto(href){
    window.location=href
}
</script>

<template>
    <div>
    <el-carousel :interval="5000" arrow="always" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">

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

