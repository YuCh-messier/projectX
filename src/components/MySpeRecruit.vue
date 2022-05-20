<script setup>
import MyRecruitHeader from './MyRecruits/MyRecruitHeader.vue';
import SpeRecruitContent from './RecruitContents/SpeRecruitContent.vue';
import MySendedInfo from './MyRecruits/MySendedInfo.vue'
import Maps from './Maps/Map.vue'
import MySendedResume from './MyRecruits/MySendedResume.vue'
import { ref } from 'vue';
import { getDatas,getQueryVariable,checkAccount} from '../scripts/publicFunctions'

var affairId=getQueryVariable('affairId')
var headerInfo=ref({})
var speRecruitInfo=ref({})
var companyInfo=ref({})
var userInfo=ref([])
var userResume=ref({})
var recruitStatu=ref([])
var mapInfo=ref({address:''})

if(!checkAccount()[0]){
    alert('请先登录！')
    window.location=host+'pages/login.html'
}

getDatas('myRecruits/showMyRecruit','get',{affairId:affairId}).then(e=>{
  headerInfo.value=e.data.headerInfo
  speRecruitInfo.value=e.data.speRecruitInfo
  companyInfo.value=e.data.companyInfo
  userInfo.value=e.data.userInfo
  userResume.value=e.data.userResume
  recruitStatu.value=e.data.recruitStatu
  mapInfo.value=e.data.mapInfo
})

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
<div class="container mx-auto" >
    <div class="mb-6"><MyRecruitHeader :headerinfo="headerInfo"></MyRecruitHeader></div>
    <div class="flex gap-x-5 flex-col lg:flex-row xl:px-32">
        <div class="w-full mb-10 lg:w-3/5"><SpeRecruitContent :sperecruitinfo="speRecruitInfo"></SpeRecruitContent></div>
        <div class="w-full lg:w-2/5"><MySendedInfo :userinfo="userInfo"></MySendedInfo></div>
    </div>
    <div class="w-fit mx-auto mt-6 font-bold text-xl">实习地点</div>
    <div class="w-fit mx-auto textSm mt-2">{{mapInfo.address}}</div>
    <div class="xl:px-32"><MySendedResume :userresume="userResume"></MySendedResume></div>
    <div>
        <div class="w-fit mx-auto mt-6 font-bold text-xl">当前状态</div>
        <div class="flex m-5">
            <div class="w-1/3 flex flex-col items-center">
                <div :class="[myStatu('待浏览')]">提交</div>
                <div class="textSm">{{recruitStatu[0]}}</div>
            </div>
            <div class="w-1/3 flex flex-col items-center">
                <div :class="[myStatu('已浏览')]">浏览</div>
                <div class="textSm">{{recruitStatu[1]}}</div>
            </div>
            <div class="w-1/3 flex flex-col items-center">
                <div :class="[myStatu('已完成')]">反馈</div>
                <div class="textSm">{{recruitStatu[2]}}</div>
            </div>
        </div>
    </div>
</div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

