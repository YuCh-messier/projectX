<script setup>
import RecruitHeader from './RecruitContents/RecruitHeader.vue';
import SpeRecruitContent from './RecruitContents/SpeRecruitContent.vue';
import CompanyContent from './CompanyContents/CompanyContent.vue';
import Maps from './Maps/Map.vue'
import { ref} from 'vue';
import { checkAccount, getDatas,getQueryVariable } from '../scripts/publicFunctions'

var affairId=getQueryVariable('affairId')
var type=getQueryVariable('type')
var headerInfo=ref({})
var speRecruitInfo=ref({})
var companyInfo=ref({})
var mapInfo=ref({address:''})
var ifCollect=ref(false)

getDatas('recruits/speRecruit','get',{affairId:affairId,type:type}).then(e=>{
    headerInfo.value=e.data.headerInfo
    speRecruitInfo.value=e.data.speRecruitInfo
    companyInfo.value=e.data.companyInfo
    mapInfo.value=e.data.mapInfo
    sessionStorage.setItem('mapinfo',JSON.stringify(e.data.mapInfo))
})

if(checkAccount()[0]){
  getDatas('collect/checkCollect','post',{affairId:affairId,type:'recruit'}).then(e=>{
    ifCollect.value=(e.data=='success')?true:false
  })
}

function setRecruit(){
  if(checkAccount()[0]){
    getDatas('myRecruits/setRecruit','post',{affairId:affairId,type:'recruit'}).then(e=>{
      console.log(e.data)
    })
  }
  else{
    alert('请登录先')
  }
}

function setCollect(){
  if(checkAccount()[0]){
    ifCollect.value=true
    getDatas('collect/setCollect','post',{affairId:affairId,type:'recruit'}).then(e=>{
      console.log(e.data)
    })
  }
  else{
    alert('请登录先')
  }
}

</script>

<template>
<div>
  <div class="mb-6 bg-amber-50"><RecruitHeader class="container mx-auto" @setcollect="setCollect" @setrecruit="setRecruit" :ifcollect="!ifCollect" :headerinfo="headerInfo"></RecruitHeader></div>
<div class="container mx-auto lg:px-32">
  <div class="border-b-4 pb-1 font-semibold border-yellow-400 w-fit mb-6">职位描述</div>
    <div class="flex gap-x-2">
        <div class="w-full mb-10"><SpeRecruitContent style="font-size: 0.9em;" :sperecruitinfo="speRecruitInfo"></SpeRecruitContent></div>
        <div class="w-2/5 hidden lg:block"><CompanyContent class="bg-gray-50" :companyinfo="companyInfo"></CompanyContent></div>
    </div>
    <div class="w-full block lg:hidden"><CompanyContent :companyinfo="companyInfo"></CompanyContent></div>
    <div class="w-fit mx-auto mt-6 font-bold text-xl border-yellow-400 border-b-4 pb-1">实习地点</div>
    <div class="w-fit mx-auto textSm mt-2">{{mapInfo.address}}</div>
    <div class="xl:px-32 mx-auto lg:w-4/5"><Maps></Maps></div>
</div>
</div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

