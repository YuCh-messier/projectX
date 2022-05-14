<script setup>
import RecruitHeader from './RecruitContents/RecruitHeader.vue';
import SpeRecruitContent from './RecruitContents/SpeRecruitContent.vue';
import CompanyContent from './CompanyContents/CompanyContent.vue';
import Maps from './Maps/Map.vue'
import { ref } from 'vue';
import { checkAccount, getDatas,getDatasP,getQueryVariable } from '../scripts/publicFunctions'

var affairId=getQueryVariable('affairId')
var type=getQueryVariable('type')
var headerInfo=ref({})
var speRecruitInfo=ref({})
var companyInfo=ref({})
var mapInfo=ref({address:''})
var ifCollect=ref(false)

getDatas((e)=>{
    console.log(e)
    headerInfo.value=e.headerInfo
    speRecruitInfo.value=e.speRecruitInfo
    companyInfo.value=e.companyInfo
    mapInfo.value=e.mapInfo
    sessionStorage.setItem('mapinfo',JSON.stringify(e.mapInfo))
    },
    'recruits/speRecruit',
    {affairId:affairId,type:type}
    )

checkAccount((e)=>{
  if(e.statu){
    getDatasP((e2)=>{ifCollect.value=(e2=='success')?true:false},'collect/checkCollect',{affairId:affairId,type:'recruit'})
  }
  else{
    
  }
})

function setRecruit(){
  checkAccount((e)=>{
  if(e.statu){
    getDatasP((e2)=>{alert(e2)},'myrecruits/setRecruit',{affairId:affairId,type:'recruit'})
  }
  else{
    alert('请登录先')
  }
  })
}

function setCollect(){
  checkAccount((e)=>{
    if(e.statu){
      ifCollect.value=true
      getDatasP((e2)=>{alert(e2)},'collect/setCollect',{affairId:affairId,type:'recruit'})
    }
    else{
      alert('请登录先')
    }
  })
}
</script>

<template>
<div class="container mx-auto">
    <div class="mb-6"><RecruitHeader @setcollect="setCollect" @setrecruit="setRecruit" :ifcollect="!ifCollect" :headerinfo="headerInfo"></RecruitHeader></div>
    <div class="flex gap-x-5 xl:px-32">
        <div class="w-full mb-10 lg:w-3/5"><SpeRecruitContent :sperecruitinfo="speRecruitInfo"></SpeRecruitContent></div>
        <div class="w-2/5 hidden lg:block"><CompanyContent :companyinfo="companyInfo"></CompanyContent></div>
    </div>
    <div class="w-full block lg:hidden"><CompanyContent :companyinfo="companyInfo"></CompanyContent></div>
    <div class="w-fit mx-auto mt-6 font-bold text-xl">实习地点</div>
    <div class="w-fit mx-auto textSm mt-2">{{mapInfo.address}}</div>
    <div class="xl:px-32 mx-auto lg:w-4/5"><Maps></Maps></div>
</div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

