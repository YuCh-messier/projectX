<script setup>
import { host } from '../../scripts/publicFunctions';
var props=defineProps(['content'])
var affairId=props.content.affairId
function goto(href){
    window.location=host+href
}
function myStatu(e){
    if(e=='待浏览'){
        return 'text-red-500'
    }
    else{
        return (e=='已浏览')?'text-amber-500':'text-green-500'
    }
}
</script>

<template>
    <div class="bg-white hover:cursor-pointer hover:text-orange-500 p-6 rounded-sm space-y-3" @click="goto('pages/mySpeRecruit.html?affairId='+affairId)">
        <div class="flex">
            <div class="font-semibold w-1/2">{{content.title}}</div>
            <div :class="[myStatu(content.statu),'w-1/4']">{{content.statu}}</div>
            <div class="text-sm">{{content.sendTime}}</div>
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

