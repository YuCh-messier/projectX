<script setup>
import { toRefs,watch,ref } from 'vue';
import { ArrowRight } from '@element-plus/icons-vue'

var props=defineProps(['choices'])
var {choices}=toRefs(props)
var emits=defineEmits(['tapsfunction'])
var checkBoxs=ref([[],[],[],[]])
watch(checkBoxs.value,()=>{emits('tapsfunction',checkBoxs.value)})

function addMe(ind,me){
  if(checkBoxs.value[ind].indexOf(me)==-1){
    checkBoxs.value[ind].push(me)
  }
  else{
    checkBoxs.value[ind].splice(checkBoxs.value[ind].indexOf(me),1)
  }
}

function ifMe(ind,me){
  return (checkBoxs.value[ind].indexOf(me)!=-1)?'text-amber-400':''
}
</script>

<template>
<div class="flex items-center">
  <div class="space-y-3 p-4 ">
  <div class="flex items-center">
    <span class="mr-4 font-semibold">位置</span>
    <div class="flex textSm gap-x-3">
      <div @click="addMe(0,choice)" class="hover:cursor-pointer hover:text-amber-400" :class="ifMe(0,choice)" v-for="choice in choices[0]" :key="choice">{{choice}}</div>
    </div>
    <ArrowRight class="h-4 text-gray-500 float-right ml-4"/>
  </div>

    <div class="flex items-center">
    <span class="mr-4 font-semibold">标签</span>
    <div class="flex textSm gap-x-3">
      <div @click="addMe(1,choice)" class="hover:cursor-pointer hover:text-amber-400" :class="ifMe(1,choice)" v-for="choice in choices[1]" :key="choice">{{choice}}</div>
    </div>
    <ArrowRight class="h-4 text-gray-500 float-right ml-4"/>
  </div>

    <div class="flex items-center">
    <span class="mr-4 font-semibold">时间(周)</span>
    <div class="flex textSm gap-x-3">
      <div @click="addMe(2,choice)" class="hover:cursor-pointer hover:text-amber-400" :class="ifMe(2,choice)" v-for="choice in choices[2]" :key="choice">{{choice}}</div>
    </div>
    <ArrowRight class="h-4 text-gray-500 float-right ml-4"/>
  </div>

    <div class="flex items-center">
    <span class="mr-4 font-semibold">薪水(天)</span>
    <div class="flex textSm gap-x-3">
      <div @click="addMe(3,choice)" class="hover:cursor-pointer hover:text-amber-400" :class="ifMe(3,choice)" v-for="choice in choices[3]" :key="choice">{{choice}}</div>
    </div>
    <ArrowRight class="h-4 text-gray-500 float-right ml-4"/>
  </div>
  </div>
</div> 
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

