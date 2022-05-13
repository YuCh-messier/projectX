<script setup>
import { toRefs,ref } from 'vue';
import UserInfo from '../Forms/UserInfo.vue';
var props=defineProps(['userinfo'])
var emits=defineEmits(['sendinfo'])
var {userinfo}=toRefs(props)
var statu=ref(0)
function changeStatu(e){
  if(statu.value==1){
    emits('sendinfo',e)
  }
  statu.value=(statu.value==0)?1:0
}
</script>

<template>
    <div v-if="statu==0">
        <div class="flex justify-between items-center my-5 px-10">
            <div class="text-lg font-semibold inline-block">基本信息</div>
            <button class="h-fit buttonStandardDark" @click="changeStatu">修改</button>
        </div>
        <div class="flex py-4 px-10 rounded-sm" :class="{'bg-white':(index%2==0)}" v-for="info,index in userinfo" :key="info.title">
            <div class="w-1/3 text-gray-500">{{info.title}}</div>
            <div>{{info.content}}</div>
        </div>
    </div>
    <UserInfo v-else :userinfo="userinfo" @getback="changeStatu"></UserInfo>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

