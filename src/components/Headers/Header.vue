<script setup>
import { Expand } from '@element-plus/icons-vue'
import Son1 from './HeaderSon1.vue'
import Son2 from './HeaderSon2.vue'
import HeaderMobileSon1 from './HeaderMobileSon1.vue';
import { host,getDatas } from '../../scripts/publicFunctions';
import { ref } from 'vue';

var props=defineProps(['user'])
var headerParts=[
          {id:2,value:'金领活动',url:''},
          {id:3,value:'职前培训',url:''},
          {id:4,value:'商务合作',url:''}
      ]

function goto(url){
    window.location=host+url
  }


function changeCol(){
  showCol.value=!showCol.value
  ifCol.value=showCol.value?'text-gray-900':'text-gray-500'
}

var showCol=ref(false)
var ifCol=ref('text-gray-500')
</script>

<template>
<div class="bg-white shadow-md">
  <div id="header" class="container mx-auto grid grid-cols-12 gap-4 items-center py-2 textSm hidden lg:grid">
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
    <div v-else class="flex"><el-button class="buttonStandard" @click="goto('pages/login.html')">登录</el-button><el-button class="buttonStandard" @click="goto('pages/register.html')" :icon="Search">注册</el-button></div>
  </div>

  <div class="block lg:hidden">
    <div class="flex justify-between items-center py-2 px-6">
      <Expand :class="'inline h-8 hover:cursor-pointer '+ifCol" @click="changeCol"/>
      <HeaderMobileSon1 class="absolute z-50 top-10" v-if="showCol" style="left:0px;"></HeaderMobileSon1>
      <div class="flex items-center">
        <div id="headImg" class="mr-2" v-if="user.statu"><img @click="goto('pages/userSetting.html')" class="rounded-[100%] bg-gray-200 w-10 h-10 headerHoverPattern" :src="user.headImg" alt=""></div>
        <div class="col-start-11 col-end-13 textSm" v-if="user.statu">Welcome , {{user.name}}</div>
        <div v-else class="flex"><el-button class="buttonStandard" @click="goto('pages/login.html')">登录</el-button><el-button class="buttonStandard" @click="goto('pages/register.html')" :icon="Search">注册</el-button></div>
      </div>
    </div>
  </div>
</div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

