<script setup>
import { toRefs,ref } from 'vue';
import UserResumeSon from './UserResumeSon.vue';
var props=defineProps(['userresume'])
var {userresume}=toRefs(props)
var emits=defineEmits(['getback'])
var submitUserResume=function(){
  var eduList=userresume.value.educateView
  var internList=userresume.value.internshipView
  var projectList=userresume.value.projectView
  if(userresume.overView==''){
      alert('内容不完整')
      return 
  }
  for(let i=0;i<eduList.length;i++){
    if(!checkBlank(eduList[i])){
      alert('内容不完整')
      return
    }
  }
  for(let i=0;i<internList.length;i++){
  if(!checkBlank(internList[i])){
    alert('内容不完整')
    return
  }
}
  for(let i=0;i<projectList.length;i++){
  if(!checkBlank(projectList[i])){
    alert('内容不完整')
    return
  }
}
    emits('getback',userresume.value)
}
function checkBlank(obj){
  var items=Object.values(obj)
  for(let i=0;i<items.length;i++){
    if(items[i]==''){
      return false
    }
  }
  return true
}
</script>

<template>
    <div>
        <div class="flex justify-between items-center my-5 px-10">
            <div class="text-lg font-semibold inline-block">我的简历</div>
            <button class="h-fit buttonStandardLight" @click="submitUserResume">提交</button>
        </div>
        <div class="py-4 px-10 rounded-sm">
            <div class="text-md font-semibold pb-4" style="border-bottom:1px solid #999">个人简介</div>
            <textarea v-model="userresume.overView" class="rounded p-4 mt-2 bg-white w-full"></textarea>
        </div>
        <div class="py-4 px-10 rounded-sm">
            <div class="text-md font-semibold pb-4" style="border-bottom:1px solid #999">获奖经历</div>
            <textarea v-model="userresume.awards" class="rounded p-4 mt-2 bg-white w-full"></textarea>
        </div>
        <div class="py-4 px-10 rounded-sm">
            <div class="text-md font-semibold pb-4" style="border-bottom:1px solid #999">专业技能</div>
            <textarea v-model="userresume.skills" class="rounded p-4 mt-2 bg-white w-full"></textarea>
        </div>
        <div class="py-4 px-10 rounded-sm">
          <div class="text-md font-semibold pb-4" style="border-bottom:1px solid #999">教育经历</div>
          <UserResumeSon class="p-4 my-2" :type="0" :resumeson1="userresume.educateView" v-model="userresume.educateView"></UserResumeSon>
        </div>
        <div class="py-4 px-10 rounded-sm">
          <div class="text-md font-semibold pb-4" style="border-bottom:1px solid #999">实习经历</div>
          <UserResumeSon class="bg-white p-4 my-2" :type="1" :resumeson1="userresume.internshipView"></UserResumeSon>
        </div>
        <div class="py-4 px-10 rounded-sm">
          <div class="text-md font-semibold pb-4" style="border-bottom:1px solid #999">项目经历</div>
          <UserResumeSon class="p-4 my-2" :type="2" :resumeson1="userresume.projectView"></UserResumeSon>
        </div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

