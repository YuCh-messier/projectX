<script setup>
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
        <div class="flex justify-between items-center my-5 px-10">
            <div class="text-lg font-semibold inline-block">基本信息</div>
            <button class="h-fit buttonStandardDark" @click="changeStatu">修改</button>
        </div>
        <div v-for="info,index in userinfo" :key="info">
          <div class="flex py-4 px-10 rounded-sm" :class="{'bg-white':(index%2==0)}" v-for="value,key in info" :key="value">
            <div class="w-1/3 text-gray-500">{{key}}</div>
            <div>{{value}}</div>
          </div>
        </div>
        <div class="flex justify-between items-center my-5 px-10">
            <div class="text-lg font-semibold inline-block">其他信息</div>
        </div>
        <div class="flex py-4 px-10 rounded-sm bg-white">
            <div class="w-1/3 text-gray-500">期望岗位</div>
            <div>{{userano.userPosition.value1}}</div>
        </div>
        <div class="flex py-4 px-10 rounded-sm">
            <div class="w-1/3 text-gray-500">期望行业</div>
            <div>{{userano.userPosition.value2}}</div>
        </div>
        <div class="flex py-4 px-10 rounded-sm bg-white">
            <div class="w-1/3 text-gray-500">期望城市</div>
            <div>{{userano.userPosition.value3}}</div>
        </div>
        <div class="flex py-4 px-10 rounded-sm">
            <div class="w-1/3 text-gray-500">到岗时间</div>
            <div>{{userano.userTime.value1}}</div>
        </div>
        <div class="flex py-4 px-10 rounded-sm bg-white">
            <div class="w-1/3 text-gray-500">实习时长</div>
            <div>{{userano.userTime.value2}}</div>
        </div>
        <div class="flex py-4 px-10 rounded-sm">
            <div class="w-1/3 text-gray-500">每周出勤</div>
            <div>{{userano.userTime.value3}}</div>
        </div>
    </div>
    <UserInfo v-else :userinfo="userinfo" :userano="userano" @getback="changeStatu"></UserInfo>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

