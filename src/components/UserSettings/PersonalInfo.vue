<script setup>
import { Clock,GoodsFilled,EditPen,Avatar,HomeFilled,Checked,MapLocation,Male,Calendar,Cellphone,Message } from '@element-plus/icons-vue'
import { toRefs,ref } from 'vue';
import UserInfo from '../Forms/UserInfo.vue';
var props=defineProps(['userinfo','userano'])
var emits=defineEmits(['sendinfo'])
var {userinfo}=toRefs(props)
var {userano}=toRefs(props)
var statu=ref(0)
function changeStatu(e){
  if(statu.value==1){
    emits('sendinfo',e)
  }
  statu.value=(statu.value==0)?1:0
}

</script>
<template>
    <div v-if="statu==0 && userano">

        <div class="inline-block border-l-4 border-orange-400 pl-2 font-semibold my-8">基本信息</div><button class="h-fit buttonStandardDarkO float-right m-8" @click="changeStatu">修改</button>

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

        <div class="border-l-4 border-orange-400 pl-2 font-semibold my-8">求职偏好</div>
        <div class="ml-4 font-semibold my-2">{{userano.userPosition.value1}}</div>

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
    <UserInfo v-else :userinfo="userinfo" :userano="userano" @getback="changeStatu"></UserInfo>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

