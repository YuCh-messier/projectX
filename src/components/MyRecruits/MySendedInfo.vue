<script setup>
import { Clock,GoodsFilled,EditPen,Avatar,HomeFilled,Checked,MapLocation,Male,Calendar,Cellphone,Message } from '@element-plus/icons-vue'
import { toRefs,ref } from 'vue';
var props=defineProps(['userinfo','userano','standardinfo'])
var {userinfo}=toRefs(props)

</script>

<template>
    <div class="space-y-6">
      <div class="border-l-4 border-orange-400 pl-2 font-semibold my-8">基本信息</div>
      <div class="rounded bg-gradient-to-r from-orange-50 to-green-50 p-4"> 
          <div id="headimg" class="mr-4 border-4 shadow-xl w-1/6 h-0 bg-gray-200 rounded z-30 align-middle mx-auto lg:inline-block" :style="'padding-top:16.6%;background-size: cover;'+'background-image:url('+standardinfo.headImg+');'"></div>
          <div class="z-30 space-y-1 align-text-top hidden lg:inline-block">
              <div class="flex items-center"><Avatar class="w-4 mr-1"/>{{standardinfo.name}}</div>
              <div class="textSm flex items-center"><HomeFilled class="text-gray-400 w-4 mr-1"/>{{standardinfo.school}}</div>
              <div class="textSm flex items-center"><Checked class="text-gray-400 w-4 mr-1"/>{{standardinfo.department}}</div>
          </div>
      </div>
      <div class="space-y-2">
      <div class="flex gap-x-8 ml-4">
          <div class="flex items-center"><Avatar class="w-4 mr-1"/>{{userinfo['姓名']}}</div>
          <div class="flex items-center"><Female v-if="userinfo['性别']=='女'" class="w-4 mr-1"/><Male v-else class="w-4 mr-1"/>{{userinfo['性别']}}</div>
          <div class="flex items-center"><Calendar class="w-4 mr-1"/>{{userinfo['生日']}}</div>
      </div>

      <div class="flex gap-x-8 ml-4">
          <div class="flex items-center"><Cellphone class="w-4 mr-1"/>{{userinfo['电话号码']}}</div>
          <div class="flex items-center"><Message class="w-4 mr-1"/>{{userinfo['邮箱地址']}}</div>
      </div>

      <div class="flex gap-x-8 ml-4">
          <div class="flex items-center"><HomeFilled class="w-4 mr-1"/>{{userinfo['学校']}}</div>
          <div class="flex items-center"><Checked class="w-4 mr-1"/>{{userinfo['专业']}}</div>
      </div>
      </div>

      <div class="ml-4 font-semibold my-4">{{userano.userPosition.value1}}</div>

      <div class="space-y-2">
      <div class="flex gap-x-8 ml-4">
          <div class="flex items-center"><GoodsFilled class="w-4 mr-1"/>期望行业：{{userano.userPosition.value2}}</div>
          <div class="flex items-center"><MapLocation class="w-4 mr-1"/>期望地点：{{userano.userPosition.value3}}</div>
      </div>

      <div class="flex gap-x-8 ml-4">
          <div class="flex items-center"><Clock class="w-4 mr-1"/>到岗时间：{{userano.userTime.value1}}</div>
          <div class="flex items-center">实习时长：{{userano.userTime.value2}}</div>
          <div class="flex items-center">工作时间：{{userano.userTime.value3}}</div>
      </div>
      </div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

