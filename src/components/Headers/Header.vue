<script setup>
import Son1 from './HeaderSon1.vue'
import Son2 from './HeaderSon2.vue'
import { host } from '../../scripts/publicFunctions';
import { getDatasP,setStandardInfo } from '../../scripts/publicFunctions';

var props=defineProps(['user'])
var headerParts=[
          {id:2,value:'金领活动',url:''},
          {id:3,value:'职前培训',url:''},
          {id:4,value:'商务合作',url:''}
      ]

function goto(url){
    window.location=host+url
  }

function login(){
  getDatasP((e)=>{console.log(e);setStandardInfo()},'user/login')
}
</script>

<template>
<div class="bg-white shadow-md">
  <div id="header" class="container mx-auto grid grid-cols-12 gap-4 items-center py-2 textSm">
    <div id="logo" class="col-start-1 col-end-3"><img src="" alt="" class="bg-pink-500 w-full h-fit"></div>

    <div id="middlePart" class="col-start-3 col-end-9 flexStandard">
      <div class="headerHoverPattern">首页</div>

      <Son1 class="headerHoverPattern"></Son1>
      <Son2 class="headerHoverPattern"></Son2>

      <div v-for="item in headerParts" :key="item.id" class="headerHoverPattern">{{item.value}}</div>
    </div>

    <div></div>

    <div id="headImg" v-if="user.statu"><img @click="goto('pages/userSetting.html')" class="rounded-[100%] bg-gray-200 w-10 h-10 headerHoverPattern" :src="user.headImg" alt=""></div>
    <div class="col-start-11 col-end-13" v-if="user.statu">欢迎使用！{{user.name}}</div>
    <div v-else class="flex"><el-button class="buttonStandard" @click="login">登录</el-button><el-button class="buttonStandard" :icon="Search">注册</el-button></div>
  </div>
</div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

