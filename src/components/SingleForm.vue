<script setup>
import { ref } from 'vue';
import { getQueryVariable,checkAccount,host,getDatas } from '../scripts/publicFunctions';

if(!checkAccount()[0]){
    alert('请先登录！')
    window.location=host+'pages/login.html'
}

var timeOrPosition=getQueryVariable('type')
if(timeOrPosition!='time' && timeOrPosition!='position'){
    alert('参数错误！')
    window.history.back(1)
}
var endtop=timeOrPosition=='time'?'userTime':'userPosition'
var values=ref(JSON.parse(sessionStorage.getItem('userAno'))[endtop])

function send(type){
    getDatas('user/setAno','post',{...values.value,type:type})
    alert('上传成功')
    window.location=host+'pages/mobileSettingPages/resume.html'
}
</script>

<template>
    <div v-if="timeOrPosition=='position'">
        <input v-model="values.value1" placeholder="期望职位 例：产品经理|数据分析师" class="p-5 bg-white border-b w-full" />
        <input v-model="values.value2" placeholder="期望行业 例：互联网|金融" class="p-5 bg-white border-b w-full" />
        <input v-model="values.value3" placeholder="期望城市 例：武汉|上海" class="p-5 bg-white border-b w-full" />
        <div><button class="bg-amber-400 w-full p-4 absolute" style="bottom:0px;" @click="send('position')">保存</button></div>
    </div>
    <div v-else>
        <input v-model="values.value1" placeholder="到岗时间 例：3个月内" class="p-5 bg-white border-b w-full" />
        <input v-model="values.value2" placeholder="实习时长 例：3-6个月" class="p-5 bg-white border-b w-full" />
        <input v-model="values.value3" placeholder="每周出勤 例：5天" class="p-5 bg-white border-b w-full" />
        <div><button class="bg-amber-400 w-full p-4 absolute" style="bottom:0px;" @click="send('time')">保存</button></div>
    </div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

