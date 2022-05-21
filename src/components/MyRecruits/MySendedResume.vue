<script setup>
import { toRefs,ref } from 'vue';
import MySendedResumeSon from './MySendedResumeSon.vue';
var props=defineProps(['userresume'])
var {userresume}=toRefs(props)
</script>

<template>
    <div>
      <div class="py-2 px-2 rounded-sm">
          <div class="border-l-4 border-orange-400 pl-2 font-semibold my-2">个人简介</div>
          <div class="rounded p-4 mt-2 bg-white w-full whitespace-pre-line">{{userresume.overView}}</div>
      </div>
      <div class="py-2 px-2 rounded-sm">
          <div class="border-l-4 border-orange-400 pl-2 font-semibold my-2">获奖经历</div>
          <div class="rounded p-4 mt-2 bg-white w-full whitespace-pre-line">{{userresume.awards}}</div>
      </div>
      <div class="py-2 px-2 rounded-sm">
          <div class="border-l-4 border-orange-400 pl-2 font-semibold my-2">专业技能</div>
          <div class="rounded p-4 mt-2 bg-white w-full whitespace-pre-line">{{userresume.skills}}</div>
      </div>
      <div class="py-2 px-2 rounded-sm">
        <div class="border-l-4 border-orange-400 pl-2 font-semibold my-2">教育经历</div>
        <MySendedResumeSon class="my-2" :resumeson="userresume.educateView"></MySendedResumeSon>
      </div>
      <div class="py-2 px-2 rounded-sm">
        <div class="border-l-4 border-orange-400 pl-2 font-semibold my-2">实习经历</div>
        <MySendedResumeSon class="my-2" :resumeson="userresume.internshipView"></MySendedResumeSon>
      </div>
      <div class="py-2 px-2 rounded-sm">
        <div class="border-l-4 border-orange-400 pl-2 font-semibold my-2">项目经历</div>
        <MySendedResumeSon class="my-2" :resumeson="userresume.projectView"></MySendedResumeSon>
      </div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

