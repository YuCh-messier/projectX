<script setup>
import { toRefs,ref } from 'vue';
import { getDatas,checkAccount } from '../../scripts/publicFunctions';

var collects=ref([])

checkAccount((e)=>{
    if(!e.statu){
        alert('请先登录！')
        window.location=host+'pages/recruits.html'
    }
})
getDatas((e)=>{
  collects.value=e.collects
},'user/getUserInfo')

function goto(url){
    window.location=url
}
</script>

<template>
    <div class="lg:px-4">
        <div class="hover:cursor-pointer space-y-2 bg-white p-4 rounded shadow m-2" v-for="collect in collects" :key="collect.title" @click="goto(collect.url)">
            <div class="flex justify-between">
                <div class="text-sm">{{collect.title}}</div>
                <div class="tapsStandard">{{collect.tap}}</div>
            </div>
            <div class="truncate h-10">{{collect.content}}</div>
        </div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

