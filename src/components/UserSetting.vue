<script setup>
import UserHeader from './UserSettings/UserHeader.vue';
import Switcher from './Choices/Switcher.vue';
import PersonalInfo from './UserSettings/PersonalInfo.vue';
import Resume from './UserSettings/Resume.vue';
import MessageList from './Messages/MessageList.vue';
import MyRecruits from './MyRecruits.vue';
import CollectList from './Collects/CollectList.vue'
import Files from './Forms/Files.vue';
import { toRefs,ref } from 'vue';
import { getDatas,getDatasP,checkAccount,standardInfo,host } from '../scripts/publicFunctions';

var userInfo=ref([])
var userResume=ref({})
var userMessages=ref([])
var collects=ref([])
var userAno=ref({userPosition:{},userTime:{}})
var currentPath=ref('个人资料')
var currentPathM=ref('资料')

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

function changeChoiceM(e){
    currentPathM.value=e
  }

function logout(){
    document.cookie = "telephone=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "userToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload()
}
</script>

<template>
    <div class="container mx-auto xl:px-24">
      <div class="hidden md:block">
        <UserHeader :standardinfo="standardInfo"></UserHeader>
        <Switcher @changechoice="changeChoice" currentchoice="个人资料" :choices="['个人资料','简历上传','上传附件','我的收藏','我的投递','我的消息']"></Switcher>
        <PersonalInfo v-if="currentPath=='个人资料'" :userano="userAno" :userinfo="userInfo" @sendinfo="sendInfo"></PersonalInfo>
        <Resume v-if="currentPath=='简历上传'" :userresume="userResume" @sendresume="sendResume"></Resume>
        <MessageList v-if="currentPath=='我的消息'" :messages="userMessages"></MessageList>
        <MyRecruits v-if="currentPath=='我的投递'" :willu="0"></MyRecruits>
        <Files v-if="currentPath=='上传附件'"></Files>
        <CollectList v-if="currentPath=='我的收藏'" :collects="collects"></CollectList>
      </div>
      <div class="block md:hidden">
        <UserHeader :standardinfo="standardInfo"></UserHeader>
        <Switcher @changechoice="changeChoiceM" currentchoice="资料" :choices="['资料','简历','附件','收藏','投递','消息']"></Switcher>
        <PersonalInfo v-if="currentPathM=='资料'" :userano="userAno" :userinfo="userInfo" @sendinfo="sendInfo"></PersonalInfo>
        <Resume v-if="currentPathM=='简历'" :userresume="userResume" @sendresume="sendResume"></Resume>
        <MessageList v-if="currentPathM=='消息'" :messages="userMessages"></MessageList>
        <MyRecruits v-if="currentPathM=='投递'" :willu="0"></MyRecruits>
        <CollectList v-if="currentPathM=='收藏'" :collects="collects"></CollectList>
      </div>
      <button class="buttonBigDark block mx-auto mt-6" @click="logout">退出登录</button>
    </div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

