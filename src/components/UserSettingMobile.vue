<script setup>
import UserHeader from './MobileSettingPages/UserHeader.vue';
import Switcher from './MobileSettingPages/Switcher.vue';
import PersonalInfo from './MobileSettingPages/PersonalInfo.vue';
import MessageList from './Messages/MessageList.vue';
import MyRecruits from './MyRecruits.vue';
import UserHome from './MobileSettingPages/UserHome.vue';
import Files from './Forms/Files.vue';
import { toRefs,ref } from 'vue';
import { getDatas,checkAccount,standardInfo,host, setStandardInfo } from '../scripts/publicFunctions';

var userInfo=ref([])
var userResume=ref({})
var userMessages=ref([])
var collects=ref([])
var userAno=ref({})
var currentPathM=ref('首页')
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
  sessionStorage.setItem('userAno',JSON.stringify(userAno.value))
  files.value=e.data.files
})

function sendInfo(e){
  if(checkAccount()[0]){
    getDatas('user/setUserInfo','post',e).then(e2=>{
      console.log(e2.data);setStandardInfo()
    })
  }  
}

function sendResume(e){
  if(checkAccount()[0]){
    getDatas('user/setUserResume','post',e).then(e2=>{
      console.log(e2.data);setStandardInfo()
    })
  }
}

function logout(){
    document.cookie = "telephone=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "userToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload()
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
        <Files v-if="currentPathM=='附件'" :files="files"></Files>
        <MessageList v-if="currentPathM=='消息'" :messages="userMessages"></MessageList>
        <MyRecruits v-if="currentPathM=='投递'" :willu="0"></MyRecruits>
        </div>
      </div>
    </div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

