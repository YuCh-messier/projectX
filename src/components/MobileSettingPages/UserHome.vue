<script setup>
import { toRefs } from 'vue';
import { ArrowRight } from '@element-plus/icons-vue'
import { host } from '../../scripts/publicFunctions';

function goto(url){
  window.location=host+url
}

function logout(){
    document.cookie = "telephone=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "userToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload()
}
</script>

<template>
<div>
    <div class="flex justify-center mx-2 gap-x-2">
        <div class="w-1/2 p-2 h-20 bg-white z-20" @click="goto('pages/singleForm.html?type=position')">
            <img src="../../assets/anwser2.png" class="float-right my-1 h-14" alt="">
            <div class="flex items-center text-gray-500 text-sm">
                <div class="h-fit">期望职位</div>
                <ArrowRight  class="ml-1 w-4 h-fit"/>
            </div>
            <div class="text">请选择</div>
        </div>
        <div class="w-1/2 p-2 h-20 bg-white z-20" @click="goto('pages/singleForm.html?type=time')">
            <img src="../../assets/anwser1.png" class="float-right my-1 h-14" alt="">
            <div class="flex items-center text-gray-500 text-sm">
                <div class="h-fit">入职时间</div>
                <ArrowRight  class="ml-1 w-4 h-fit"/>
            </div>
            <div class="text">请选择</div>
        </div>
    </div>
    <div class="mt-2 shadow">
        <div class="w-full bg-white px-6 py-4 flex items-center justify-between" @click="goto('pages/mobileSettingPages/collects.html')">
           <div>我的收藏</div><ArrowRight  class="ml-1 w-4 h-fit"/>
        </div>
        <div class="w-full bg-white px-6 py-4 flex items-center justify-between">
           <div>联系客户</div><ArrowRight  class="ml-1 w-4 h-fit"/>
        </div>
        <div class="w-full bg-white px-6 py-4 flex items-center justify-between">
           <div>意见反馈</div><ArrowRight  class="ml-1 w-4 h-fit"/>
        </div>
    </div>
    <button class="w-full bg-amber-400 py-4 mt-6" @click="logout()">退出登录</button>
</div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

