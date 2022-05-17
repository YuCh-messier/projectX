<script setup>
import UserHeader from './MobileSettingPages/UserHeader.vue';
import Switcher from './MobileSettingPages/Switcher.vue';
import PersonalInfo from './MobileSettingPages/PersonalInfo.vue';
import MessageList from './Messages/MessageList.vue';
import MyRecruits from './MyRecruits.vue';
import UserHome from './MobileSettingPages/UserHome.vue';
import Files from './Forms/Files.vue';
import { toRefs,ref } from 'vue';
import { getDatas,getDatasP,checkAccount,standardInfo,host } from '../scripts/publicFunctions';

var userInfo=ref([])
var userResume=ref({})
var userMessages=ref([])
var collects=ref([])
var userAno=ref({})
var currentPath=ref('个人资料')
var currentPathM=ref('首页')

checkAccount((e)=>{
    if(!e.statu){
        alert('请先登录！')
        window.location=host+'pages/recruits.html'
    }
})
getDatas((e)=>{
  userInfo.value=e.userInfo
  userResume.value=e.userResume
  userMessages.value=e.userMessages
  collects.value=e.collects
  userAno.value=e.userAno
  sessionStorage.setItem('userAno',JSON.stringify(userAno.value))
},'user/getUserInfo')

function sendInfo(e){
  checkAccount((e2)=>{
    if(e2.statu){
      getDatasP((e)=>{console.log(e)},'user/setUserInfo',e)
    }
    else{
      alert('请登录先')
    }
  })
}

function changeChoice(e){
    currentPath.value=e
  }

function changeChoiceM(e){
    currentPathM.value=e
  }

</script>

<template>
    <div>
      <div>
        <UserHeader :standardinfo="standardInfo"></UserHeader>
        <div class="absolute w-full"><Switcher class="-translate-y-16 relative" @changechoice="changeChoiceM" currentchoice="首页" :choices="['首页','资料','附件','投递','消息']"></Switcher></div>
        <div class="mt-16">
        <PersonalInfo v-if="currentPathM=='资料'" :userinfo="userInfo" @sendinfo="sendInfo"></PersonalInfo>
        <UserHome v-if="currentPathM=='首页'" :userano="userAno"></UserHome>
        <Files v-if="currentPathM=='附件'"></Files>
        <MessageList v-if="currentPathM=='消息'" :messages="userMessages"></MessageList>
        <MyRecruits v-if="currentPathM=='投递'" :willu="0"></MyRecruits>
        </div>
      </div>
    </div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

