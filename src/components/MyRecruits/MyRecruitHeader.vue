<script setup>
import { ref,toRefs } from 'vue';
import { MostlyCloudy } from '@element-plus/icons-vue';
var props=defineProps(['headerinfo'])
var {headerinfo}=toRefs(props)
</script>

<template>
<div class="flex justify-around p-6">
    <div class="text-xl flex gap-y-4 flex-col">
        <div class="font-bold">{{headerinfo.title}}</div>
        <div class="textSm">{{headerinfo.address}}</div>
    </div>
    <div class="flex items-center">
        <div class="text-xl">{{headerinfo.workDays}}/周</div>
    </div>
    <div class="flex items-center">
        <div class="text-orange-500 text-xl">{{headerinfo.salary}}/天</div>
        <div class="tapsStandard h-fit ml-4">{{headerinfo.taps}}</div>
    </div>
</div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

