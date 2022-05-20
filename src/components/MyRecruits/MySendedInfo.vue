<script setup>
import { toRefs,ref } from 'vue';
var props=defineProps(['userinfo'])
var {userinfo}=toRefs(props)
var statu=ref(0)
function changeStatu(){
  statu.value=(statu.value==0)?1:0
}
</script>

<template>
    <div v-if="statu==0">
        <div class="flex justify-between items-center my-5 px-10">
            <div class="text-lg font-semibold inline-block">基本信息</div>
        </div>
        <div v-for="info,index in userinfo" :key="info">
          <div class="flex py-4 px-10 rounded-sm" :class="{'bg-white':(index%2==0)}" v-for="value,key in info" :key="value">
            <div class="w-1/3 text-gray-500">{{key}}</div>
            <div>{{value}}</div>
          </div>
        </div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

