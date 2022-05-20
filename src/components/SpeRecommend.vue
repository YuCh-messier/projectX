<script setup>
import RecruitHeader from './RecruitContents/RecruitHeader.vue';
import SpeRecruitContent from './RecruitContents/SpeRecruitContent.vue';
import CompanyContent from './CompanyContents/CompanyContent.vue';
import Maps from './Maps/Map.vue'
import { ref } from 'vue';
import { checkAccount, getDatas,checkSpecialAccount,getQueryVariable} from '../scripts/publicFunctions'

var affairId=getQueryVariable('affairId')
var type=getQueryVariable('type')
var headerInfo=ref({})
var speRecruitInfo=ref({})
var companyInfo=ref({})
var mapInfo=ref({address:''})
var ifCollect=ref(false)
var affairKey=ref('')

getDatas('recommends/speRecommend','get',{affairId:affairId,type:type}).then(e=>{
    headerInfo.value=e.data.headerInfo
    speRecruitInfo.value=e.data.speRecruitInfo
    companyInfo.value=e.data.companyInfo
    mapInfo.value=e.data.mapInfo
    affairKey.value=e.data.affairKey
    sessionStorage.setItem('mapinfo',JSON.stringify(e.data.mapInfo))
})

if(checkAccount()[0]){
  getDatas('collect/checkCollect','post',{affairId:affairId,type:'recommend'}).then(e=>{
    ifCollect.value=(e.data=='success')?true:false
  })
}

function setRecruit(){
  if(checkAccount()[0]){
    getDatas('myRecruits/setRecruit','post',{affairId:affairId,type:'recommend'}).then(e=>{
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
    getDatas('collect/setCollect','post',{affairId:affairId,type:'recommend'}).then(e=>{
      console.log(e.data)
    })
  }
  else{
    alert('请登录先')
  }
}
</script>

<template>
<div class="container mx-auto">
    <div class="lg:mb-6"><RecruitHeader @setcollect="setCollect" @setrecruit="setRecruit" :ifcollect="!ifCollect" :headerinfo="headerInfo"></RecruitHeader></div>
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

