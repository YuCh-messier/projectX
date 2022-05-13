<script setup>
import { ref } from 'vue';
import { getQueryVariable,checkAccount,host } from '../scripts/publicFunctions';

checkAccount((e)=>{
    if(!e.statu){
        alert('请先登录！')
        window.location=host+'pages/recruits.html'
    }
})

var timeOrPosition=getQueryVariable('type')
if(timeOrPosition!='time' && timeOrPosition!='position'){
    alert('参数错误！')
    window.location=host+'pages/recruits.html'
}
</script>

<template>
    <div v-if="timeOrPosition=='position'">
        <div class="p-5 bg-white border-b">期望职位</div>
        <div class="p-5 bg-white border-b">期望行业</div>
        <div class="p-5 bg-white border-b">期望城市</div>
        <button class="bg-amber-400 w-full p-4 absolute" style="bottom:0px;">保存</button>
    </div>
    <div v-else>
        <div class="p-5 bg-white border-b">到岗时间</div>
        <div class="p-5 bg-white border-b">实习时长</div>
        <div class="p-5 bg-white border-b">每周出勤</div>
        <button class="bg-amber-400 w-full p-4 absolute" style="bottom:0px;">保存</button>
    </div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

