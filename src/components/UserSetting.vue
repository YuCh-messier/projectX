<script setup>
import UserHeader from './UserSettings/UserHeader.vue';
import Switcher from './Choices/Switcher.vue';
import PersonalInfo from './UserSettings/PersonalInfo.vue';
import Resume from './UserSettings/Resume.vue';
import MessageList from './Messages/MessageList.vue';
import MyRecruits from './MyRecruits.vue';
import CollectList from './Collects/CollectList.vue'
import { toRefs,ref } from 'vue';
import { getDatas,getDatasP,checkAccount,standardInfo,host } from '../scripts/publicFunctions';

var userInfo=ref([])
var userResume=ref({})
var userMessages=ref([])
var collects=ref([])
var currentPath=ref('个人资料')

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

function sendResume(e){
  checkAccount((e2)=>{
    if(e2.statu){
      getDatasP((e)=>{console.log(e)},'user/setUserResume',e)
    }
    else{
      alert('请登录先')
    }
  }) 
}

function changeChoice(e){
    currentPath.value=e
  }
</script>

<template>
    <div class="container mx-auto xl:px-24">
        <UserHeader :standardinfo="standardInfo"></UserHeader>
        <Switcher @changechoice="changeChoice" currentchoice="个人资料" :choices="['个人资料','简历上传','上传附件','我的收藏','我的投递','我的消息']"></Switcher>
        <PersonalInfo v-if="currentPath=='个人资料'" :userinfo="userInfo" @sendinfo="sendInfo"></PersonalInfo>
        <Resume v-if="currentPath=='简历上传'" :userresume="userResume" @sendresume="sendResume"></Resume>
        <MessageList v-if="currentPath=='我的消息'" :messages="userMessages"></MessageList>
        <MyRecruits v-if="currentPath=='我的投递'" :willu="0"></MyRecruits>
        <CollectList v-if="currentPath=='我的收藏'" :collects="collects"></CollectList>
    </div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

