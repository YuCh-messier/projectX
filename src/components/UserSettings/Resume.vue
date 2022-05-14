<script setup>
import { toRefs,ref } from 'vue';
import ResumeSon from './ResumeSon.vue';
import UserResumeSon from '../Forms/UserResumeSon.vue';
import UserResume from '../Forms/UserResume.vue';
var props=defineProps(['userresume'])
var emits=defineEmits(['sendresume'])
var {userresume}=toRefs(props)
var statu=ref(0)
function changeStatu(e){
  if(statu.value==1){
    emits('sendresume',e)
  }
  statu.value=(statu.value==0)?1:0
}
</script>

<template>
    <div v-if="statu==0">
        <div class="flex justify-between items-center my-5 px-10">
            <div class="text-lg font-semibold inline-block">我的简历</div>
            <button class="h-fit buttonStandardDark" @click="changeStatu">修改</button>
        </div>
        <div class="py-4 px-10 rounded-sm">
            <div class="text-md font-semibold pb-4" style="border-bottom:1px solid #999">个人简介</div>
            <div class="rounded p-4 mt-2 bg-white w-full whitespace-pre-line">{{userresume.overView}}</div>
        </div>
        <div class="py-4 px-10 rounded-sm">
            <div class="text-md font-semibold pb-4" style="border-bottom:1px solid #999">获奖经历</div>
            <div class="rounded p-4 mt-2 bg-white w-full whitespace-pre-line">{{userresume.awards}}</div>
        </div>
        <div class="py-4 px-10 rounded-sm">
            <div class="text-md font-semibold pb-4" style="border-bottom:1px solid #999">专业技能</div>
            <div class="rounded p-4 mt-2 bg-white w-full whitespace-pre-line">{{userresume.skills}}</div>
        </div>
        <div class="py-4 px-10 rounded-sm">
          <div class="text-md font-semibold pb-4" style="border-bottom:1px solid #999">教育经历</div>
          <ResumeSon class="p-4 my-2" :resumeson="userresume.educateView"></ResumeSon>
        </div>
                <div class="py-4 px-10 rounded-sm">
          <div class="text-md font-semibold pb-4" style="border-bottom:1px solid #999">实习经历</div>
          <ResumeSon class="bg-white p-4 my-2" :resumeson="userresume.internshipView"></ResumeSon>
        </div>
                <div class="py-4 px-10 rounded-sm">
          <div class="text-md font-semibold pb-4" style="border-bottom:1px solid #999">项目经历</div>
          <ResumeSon class="p-4 my-2" :resumeson="userresume.projectView"></ResumeSon>
        </div>
    </div>
    <UserResume v-else :userresume="userresume" @getback="changeStatu"></UserResume>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

