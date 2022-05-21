<script setup>
import { host } from '../../scripts/publicFunctions';
import { computed } from '@vue/reactivity';
import { AddLocation } from '@element-plus/icons-vue';
import { AlarmClock } from '@element-plus/icons-vue';

var props=defineProps(['content'])
var affairId=props.content.affairId
function goto(href){
    window.location=host+href
}
var taps=computed(()=>{
    return props.content.taps.split('|')
})
</script>

<template>
    <div class="bg-white hover:cursor-pointer hover:text-orange-500 p-6 rounded-sm space-y-3" @click="goto('pages/speRecruit.html?affairId='+affairId+'&type=recruit')">
        <div class="flex items-center">
            <div class="font-semibold w-2/4 truncate">{{content.title}}</div>
            <div class="mr-2 tapDark">实习</div>
            <div class="text-orange-500">{{content.salary}}</div>
        </div>
        <div class="textSm inline-block mx-1 py-0.5 px-2 border" v-for="tap in taps" :key="tap">
            {{tap}}
        </div>
        <div class="flex gap-x-4 text-gray-500 text-sm">
            <div class="flex items-center">
                <AddLocation class="h-4 w-4 mr-1"/>
                {{content.address}}
            </div>
            <div class="flex items-center">
                <AlarmClock class="h-4 w-4 mr-1"/>
                {{content.workDays}}
            </div>
        </div>
        <div class="flex items-center text-gray-500 text-sm pt-4" style="border-top:1px solid #ddd">
            <div class="flex w-1/2 items-center">
                <div class="w-10 h-10 mr-3 bg-pink-200 rounded-[100%] truncate"><img :src="content.graph" alt=""></div>
                <div class="text-black">{{content.companyName}}</div>
            </div>
            <div>{{content.companyTaps}}</div>
        </div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

