<script setup>
import { toRefs,ref } from 'vue';
import ResumeSon from './ResumeSon.vue';
import UserResumeSon from '../Forms/UserResumeSon.vue';
import UserResume from '../Forms/UserResume.vue';
import { getDatas,checkAccount,getDatasP } from '../../scripts/publicFunctions';

checkAccount((e)=>{
    if(!e.statu){
        alert('请先登录！')
        window.location=host+'pages/recruits.html'
    }
})

var userresume=ref({})
getDatas((e)=>{
  userresume.value=e.userResume
},'user/getUserInfo')

function sendresume(e){
  checkAccount((e2)=>{
    if(e2.statu){
      getDatasP((e)=>{console.log(e)},'user/setUserResume',e)
    }
    else{
      alert('请登录先')
    }
  }) 
}

function changeStatu(e){
  if(statu.value==1){
    sendresume(e)
  }
  statu.value=(statu.value==0)?1:0
}
var statu=ref(0)

</script>

<template>
    <div v-if="statu==0">
        <div class="flex justify-between items-center my-5 px-10">
            <div class="text-lg font-semibold inline-block">我的简历</div>
            <button class="h-fit buttonStandardDark" @click="changeStatu">修改</button>
        </div>
        <div class="py-4 px-10 rounded-sm">
            <div class="text-md font-semibold pb-4" style="border-bottom:1px solid #999">个人简介</div>
            <div class="rounded p-4 mt-2 bg-white w-full">{{userresume.overView}}</div>
        </div>
        <div class="py-4 px-10 rounded-sm">
          <div class="text-md font-semibold pb-4" style="border-bottom:1px solid #999">教育经历</div>
          <ResumeSon class="p-4 my-2" :resumeson="userresume.educateView"></ResumeSon>
        </div>
                <div class="py-4 px-10 rounded-sm">
          <div class="text-md font-semibold pb-4" style="border-bottom:1px solid #999">实习经历</div>
          <ResumeSon class="bg-white p-4 my-2" :resumeson="userresume.internshipView"></ResumeSon>
        </div>
                <div class="py-4 px-10 rounded-sm">
          <div class="text-md font-semibold pb-4" style="border-bottom:1px solid #999">项目经历</div>
          <ResumeSon class="p-4 my-2" :resumeson="userresume.projectView"></ResumeSon>
        </div>
    </div>
    <UserResume v-else :userresume="userresume" @getback="changeStatu"></UserResume>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

