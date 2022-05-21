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
var userAno=ref([])
var userResume=ref({})
var recruitStatu=ref([])
var standardInfo=ref([])
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
  userAno.value=e.data.userAno
  standardInfo.value=e.data.standardInfo
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
<div>
<div class="mb-6 bg-amber-50 p-4"><MyRecruitHeader class="container mx-auto" :headerinfo="headerInfo"></MyRecruitHeader></div>
<div class="container mx-auto" >
    <div class="flex justify-between items-center my-5 px-10">
        <div class="text-lg font-semibold inline-block mx-auto">我的简历</div>
    </div>
    <div class="w-full h-fit"><MySendedInfo :userinfo="userInfo" :userano="userAno" :standardinfo="standardInfo"></MySendedInfo></div>
    <div class="mt-4"><MySendedResume :userresume="userResume"></MySendedResume></div>
    <div class="w-fit mx-auto text-sm mt-2">{{mapInfo.address}}</div>
    <div class="w-full mb-10"><SpeRecruitContent :sperecruitinfo="speRecruitInfo"></SpeRecruitContent></div>
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
</div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

