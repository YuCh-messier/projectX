<script setup>
import MyRecruitHeader from './MyRecruits/MyRecruitHeader.vue';
import SpeRecruitContent from './RecruitContents/SpeRecruitContent.vue';
import MySendedInfo from './MyRecruits/MySendedInfo.vue'
import Maps from './Maps/Map.vue'
import MysendedInfo from './MyRecruits/MysendedInfo.vue'
import MySendedResume from './MyRecruits/MySendedResume.vue'
import { ref } from 'vue';
import { getDatas} from '../scripts/publicFunctions'
import { getQueryVariable } from '../scripts/publicFunctions';

var affairId=getQueryVariable('affairId')
var headerInfo=ref({})
var speRecruitInfo=ref({})
var companyInfo=ref({})
var userInfo=ref([])
var userResume=ref({})
var recruitStatu=ref([])
var mapInfo=ref({address:''})

getDatas((e)=>{
  headerInfo.value=e.headerInfo
  speRecruitInfo.value=e.speRecruitInfo
  companyInfo.value=e.companyInfo
  userInfo.value=e.userInfo
  userResume.value=e.userResume
  recruitStatu.value=e.recruitStatu
  mapInfo.value=e.mapInfo
},
'myRecruits/showMyRecruit',
{affairId:affairId}
)

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
    <div class="flex gap-x-5 xl:px-32">
        <div class="w-3/5 mb-10"><SpeRecruitContent :sperecruitinfo="speRecruitInfo"></SpeRecruitContent></div>
        <div class="w-2/5"><MysendedInfo :userinfo="userInfo"></MysendedInfo></div>
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

