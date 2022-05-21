<script setup>
import { toRefs } from 'vue';
import { EditPen,Avatar,HomeFilled,Checked } from '@element-plus/icons-vue'
import { host } from '../../scripts/publicFunctions';
var props=defineProps(['standardinfo'])
var {standardinfo}=toRefs(props)

function goto(href){
    window.location=host+href
}
</script>

<template>
    <div class="rounded bg-gradient-to-r from-orange-50 to-green-50 p-4"> 
        <div id="headimg" class="mr-4 border-4 shadow-xl w-1/6 h-0 bg-gray-200 rounded z-30 align-middle mx-auto lg:inline-block" :style="'padding-top:16.6%;background-size: cover;'+'background-image:url('+standardinfo.headImg+');'">
            <div class="w-full h-6 -translate-y-6 hover:cursor-pointer" id="dodo" @click="goto('pages/setAvatar.html')"><EditPen class="h-6 rounded-full p-1 bg-gray-500 text-white mx-2 float-right"/></div>
        </div>
        <div class="z-30 space-y-1 align-text-top hidden lg:inline-block">
            <div class="flex items-center"><Avatar class="w-4 mr-1"/>{{standardinfo.name}}</div>
            <div class="textSm flex items-center"><HomeFilled class="text-gray-400 w-4 mr-1"/>{{standardinfo.school}}</div>
            <div class="textSm flex items-center"><Checked class="text-gray-400 w-4 mr-1"/>{{standardinfo.department}}</div>
        </div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>
    #dodo:hover{
        background: rgba(100, 100, 100, 0.3);
    }
</style>

