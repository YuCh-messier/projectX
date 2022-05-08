<script setup>
import RecruitHeader from './RecruitContents/RecruitHeader.vue';
import SpeRecruitContent from './RecruitContents/SpeRecruitContent.vue';
import CompanyContent from './CompanyContents/CompanyContent.vue';
import Maps from './Maps/Map.vue'
import { ref } from 'vue';
import { getDatas} from '../scripts/publicFunctions'
import { getQueryVariable } from '../scripts/publicFunctions';
import { getDatasP } from '../scripts/publicFunctions';

var affairId=getQueryVariable('affairId')
var type=getQueryVariable('type')
var headerInfo=ref({})
var speRecruitInfo=ref({})
var companyInfo=ref({})
getDatas((e)=>{
    console.log(e)
    headerInfo.value=e.headerInfo
    speRecruitInfo.value=e.speRecruitInfo
    companyInfo.value=e.companyInfo
    },
    'recruits/speRecruit',
    {affairId:affairId,type:type}
    )

function setRecruit(){
  getDatasP((e)=>{alert(e)},'myrecruits/setRecruit',{affairId:affairId,telephone:'13272732651'})
}
</script>

<script>

export default {
  data() {
    return {
       
    }
  },
  methods:{

  },
  components:{
   
  },
  props:[]
}
</script>

<template>
<div class="container mx-auto" >
    <div class="mb-6"><RecruitHeader @setrecruit="setRecruit" :headerinfo="headerInfo"></RecruitHeader></div>
    <div class="flex gap-x-5 xl:px-32">
        <div class="w-3/5 mb-10"><SpeRecruitContent :sperecruitinfo="speRecruitInfo"></SpeRecruitContent></div>
        <div class="w-2/5"><CompanyContent :companyinfo="companyInfo"></CompanyContent></div>
    </div>
    <div class="w-fit mx-auto mt-6 font-bold text-xl">实习地点</div>
    <div class="w-fit mx-auto textSm mt-2">武汉市光谷软件园XX大厦</div>
    <div class="xl:px-32"><Maps></Maps></div>
</div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

