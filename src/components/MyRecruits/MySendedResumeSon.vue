<script setup>
import { toRefs,ref } from 'vue';
import { HomeFilled,Checked,Calendar } from '@element-plus/icons-vue'
var props=defineProps(['resumeson'])
var {resumeson}=toRefs(props)

var res=ref([])
for(let i=0;i<resumeson.value.length;i++){
    let resume=resumeson.value[i]
    res.value.push(Object.values(resume))
}
</script>

<template>
    <div>
        <div v-for="resume in res" :key="resume">
        <div class="flex gap-x-8 ml-4 my-6">
            <div class="flex items-center"><HomeFilled class="w-4 mr-1"/>{{resume[0]}}</div>
            <div class="flex items-center"><checked class="w-4 mr-1"/>{{resume[1]}}</div>
            <div class="flex items-center"><calendar class="w-4 mr-1"/>{{resume[2]}}</div>
        </div>
        <div class="ml-6 whitespace-pre textSm">{{resume[3]}}</div>
        </div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

