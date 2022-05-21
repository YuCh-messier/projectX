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
import { getDatas,checkAccount,standardInfo,host,setStandardInfo } from '../scripts/publicFunctions';

var userInfo=ref([])
var userResume=ref({})
var userMessages=ref([])
var collects=ref([])
var userAno=ref({userPosition:{},userTime:{}})
var currentPath=ref('个人资料')
var files=ref([])

if(!checkAccount()[0]){
    alert('请先登录！')
    window.location=host+'pages/login.html'
}

getDatas('user/getUserInfo','get').then(e=>{
  userInfo.value=e.data.userInfo
  userResume.value=e.data.userResume
  userMessages.value=e.data.userMessages
  collects.value=e.data.collects
  userAno.value=e.data.userAno
  files.value=e.data.files
})

function sendInfo(e){
  if(checkAccount()[0]){
    getDatas('user/setUserInfo','post',e).then(e2=>{
      console.log(e.data);setStandardInfo()
    })
    getDatas('user/setAno','post',{...e.userTime,type:'time'})
    getDatas('user/setAno','post',{...e.userPosition,type:'position'})
  }  
}

function sendResume(e){
  if(checkAccount()[0]){
    getDatas('user/setUserResume','post',e).then(e2=>{
      console.log(e.data);setStandardInfo()
    })
  }
}

function changeChoice(e){
    currentPath.value=e
  }

function logout(){
    document.cookie = "telephone=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "userToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload()
}
</script>

<template>
    <div class="container mx-auto xl:px-24">
      <div>
        <UserHeader :standardinfo="standardInfo"></UserHeader>
        <Switcher class="shadow-md" @changechoice="changeChoice" currentchoice="个人资料" :choices="['个人资料','简历上传','上传附件','我的收藏','我的投递','我的消息']"></Switcher>
        <PersonalInfo v-if="currentPath=='个人资料'" :userano="userAno" :userinfo="userInfo" @sendinfo="sendInfo"></PersonalInfo>
        <Resume v-if="currentPath=='简历上传'" :userresume="userResume" @sendresume="sendResume"></Resume>
        <MessageList v-if="currentPath=='我的消息'" :messages="userMessages"></MessageList>
        <MyRecruits v-if="currentPath=='我的投递'" :willu="0"></MyRecruits>
        <Files v-if="currentPath=='上传附件'" :files="files"></Files>
        <CollectList v-if="currentPath=='我的收藏'" :collects="collects"></CollectList>
      </div>
      <button class="buttonLargeDark block mx-auto mt-6" @click="logout">退出登录</button>
    </div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

