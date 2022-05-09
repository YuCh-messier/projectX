<script setup>
import { toRefs } from 'vue';
var props=defineProps(['standardinfo'])
var {standardinfo}=toRefs(props)
</script>

<template>
    <div class="rounded bg-white" style="padding-bottom:11%;">
        <div id="backimg" class="h-0 bg-gray-200 relative z-0" :style="'padding-bottom:20%;background-position: center;background-size: cover;'+'background-image:url('+standardinfo.backImg+');'"></div>
        <div class="relative translate-x-4">
            <div class="absolute w-full z-30 space-x-6 translate-y-[-50%]">
            <div id="headimg" class="border-4 shadow-xl w-1/6 h-0 bg-gray-200 rounded z-30 inline-block align-middle" :style="'padding-top:16.6%;background-size: cover;'+'background-image:url('+standardinfo.headImg+');'"></div>
            <div class="z-30 inline-block translate-y-4 align-text-top">
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

</style>

