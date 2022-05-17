<script setup>
import { toRefs } from 'vue';
import { EditPen } from '@element-plus/icons-vue'
var props=defineProps(['standardinfo'])
var {standardinfo}=toRefs(props)
</script>

<template>
    <div class="rounded bg-white" style="padding-bottom:11%;">
        <div id="backimg" class="h-0 bg-gray-200 relative z-0" :style="'padding-bottom:20%;background-position: center;background-size: cover;'+'background-image:url('+standardinfo.backImg+');'"></div>
        <div class="relative lg:translate-x-4">
            <div class="absolute w-full z-30 space-x-6 translate-y-[-70%] lg:translate-y-[-50%]">
                <div id="headimg" class="border-4 shadow-xl w-1/5 h-0 bg-gray-200 rounded z-30 align-middle mx-auto lg:hidden" :style="'padding-top:20%;background-size: cover;'+'background-image:url('+standardinfo.headImg+');'"></div>
                <div id="headimg" class="border-4 shadow-xl w-1/6 h-0 bg-gray-200 rounded z-30 align-middle mx-auto hidden lg:inline-block" :style="'padding-top:16.6%;background-size: cover;'+'background-image:url('+standardinfo.headImg+');'">
                    <div class="w-full h-6 -translate-y-6 hover:cursor-pointer" id="dodo"><EditPen class="h-6 rounded-full p-1 bg-gray-500 text-white mx-2 float-right"/></div>
                </div>
                <div class="z-30 translate-y-4 align-text-top hidden lg:inline-block">
                    <div>{{standardinfo.name}}</div>
                    <div class="textSm">{{standardinfo.school}}</div>
                    <div class="textSm">{{standardinfo.department}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>
    #dodo:hover{
        background: rgba(100, 100, 100, 0.3);
    }
</style>

