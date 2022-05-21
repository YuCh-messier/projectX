<script setup>
import MyRecruitContent from './MyRecruitContent.vue'
import Switcher from '../Choices/Switcher.vue';
import { toRefs,ref } from 'vue';

var props=defineProps(['contents'])
var {contents}=toRefs(props)

var choice=ref('待浏览')
function ifC(me){
    return me==choice.value?'border-b-4 pb-1 text-yellow-400 border-yellow-400 w-fit hover:cursor-pointer':'pb-1 hover:cursor-pointer'
}
</script>

<template>
    <div>
        <div class="flex py-4 gap-x-4">
            <div :class="ifC('待浏览')" @click="choice='待浏览'">待浏览</div>
            <div :class="ifC('已浏览')" @click="choice='已浏览'">已浏览</div>
            <div :class="ifC('已完成')" @click="choice='已完成'">已完成</div>
        </div>    
        <div class="grid grid-cols-2 gap-x-4 gap-y-4">
            <MyRecruitContent class="border-b border-gray-300 shadow-lg lg:border lg:shadow-none" v-for="content in contents" :key="content.id" :content="content"></MyRecruitContent>
        </div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

