<script setup>
import { host } from '../../scripts/publicFunctions';
var props=defineProps(['content'])
var affairId=props.content.affairId
function goto(href){
    window.location=host+href
}
</script>

<template>
    <div class="bg-white hover:cursor-pointer hover:text-orange-500 p-6 rounded-sm space-y-3" @click="goto('pages/speRecruit.html?affairId='+affairId+'&type=recruit')">
        <div class="flex">
            <div class="font-semibold w-1/2">{{content.title}}</div>
            <div class="w-1/4">{{content.workDays}}</div>
            <div class="text-orange-500">{{content.salary}}</div>
        </div>
        <div class="flex text-gray-500 text-sm">
            <div class="w-1/2">
                {{content.address}}
            </div>
            <div>
                {{content.taps}}
            </div>
        </div>
        <div class="flex items-center text-gray-500 text-sm pt-4" style="border-top:1px solid #ddd">
            <div class="flex w-1/2 items-center">
                <div class="w-10 h-10 mr-3 bg-pink-200 rounded-[100%]"><img :src="content.graph" class="truncate" alt=""></div>
                <div class="text-black">{{content.companyName}}</div>
            </div>
            <div>{{content.companyTaps}}</div>
        </div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

