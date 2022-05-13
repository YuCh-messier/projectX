<script setup>
import { toRefs } from 'vue';
import { EditPen } from '@element-plus/icons-vue'
import { host } from '../../scripts/publicFunctions';

var props=defineProps(['standardinfo'])
var {standardinfo}=toRefs(props)

function goto(url){
  window.location=host+url
}
</script>

<template>
    <div class="flex justify-between items-center rounded bg-amber-400 px-8 py-6 pb-20">
        <div  @click="goto('pages/mobileSettingPages/resume.html')">
            <div class="text-2xl text-white">{{standardinfo.name}}</div>
            <div class="text-sm text-white"><EditPen class="w-4 inline mr-1"/>点击生成我的简历</div>
        </div>
        <img :src="standardinfo.headImg" class="w-20 rounded-full h-20 shadow-xl" alt="">
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

