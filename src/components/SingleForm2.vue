<script setup>
import { ref } from 'vue';
import { getQueryVariable,checkAccount,host,getDatas } from '../scripts/publicFunctions';

if(!checkAccount()[0]){
    alert('请先登录！')
    window.location=host+'pages/login.html'
}

var type=getQueryVariable('type')
if(type!='overView' && type!='awards' && type!='skills'){
    alert('参数错误！')
    window.location=host+'pages/recruits.html'
}

var values=ref(JSON.parse(sessionStorage.getItem('userResume')))
var dicts={
    overView:'个人简介',
    awards:'所获奖项',
    skills:'个人技能'
}

function send(){
  getDatas('user/setUserResume','post',values.value)
  alert('上传成功')
  window.location=host+'pages/mobileSettingPages/resume.html'
}
</script>

<template>
    <div>
        <div class="text-lg m-4">{{dicts[type]}}</div>
        <textarea v-model="values[type]" class="p-5 bg-white border w-full"></textarea>
        <div><button class="bg-amber-400 w-full p-4 absolute" style="bottom:0px;" @click="send()">保存</button></div>
    </div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

