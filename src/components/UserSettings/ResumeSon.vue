<script setup>
import { toRefs } from 'vue';
var props=defineProps(['resumeson'])
var {resumeson}=toRefs(props)
</script>

<template>
    <div>
        <div class="w-full mb-6" v-for="resume,index in resumeson" :key="resume.timePeriod">
            <div class="text-md font-semibold">经历{{index+1}}</div>
            <div class="my-3 flex" v-for="content,title in resume" :key="title">
                <div class="text-gray-500 w-1/5">{{title}}</div>
                <div class="whitespace-pre-line">{{content}}</div>
            </div>
        </div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

