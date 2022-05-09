<script setup>
import { toRefs,ref } from 'vue';
import MySendedResumeSon from './MySendedResumeSon.vue';
var props=defineProps(['userresume'])
var {userresume}=toRefs(props)
var statu=ref(0)
function changeStatu(){
  statu.value=(statu.value==0)?1:0
}
</script>

<template>
    <div v-if="statu==0">
        <div class="flex justify-between items-center my-5 px-10">
            <div class="text-lg font-semibold inline-block">我的简历</div>
        </div>
        <div class="py-4 px-10 rounded-sm">
            <div class="text-md font-semibold pb-4" style="border-bottom:1px solid #999">个人简介</div>
            <div class="rounded p-4 mt-2 bg-white w-full">{{userresume.overView}}</div>
        </div>
        <div class="py-4 px-10 rounded-sm">
          <div class="text-md font-semibold pb-4" style="border-bottom:1px solid #999">教育经历</div>
          <MySendedResumeSon class="p-4 my-2" :resumeson="userresume.educateView"></MySendedResumeSon>
        </div>
                <div class="py-4 px-10 rounded-sm">
          <div class="text-md font-semibold pb-4" style="border-bottom:1px solid #999">实习经历</div>
          <MySendedResumeSon class="bg-white p-4 my-2" :resumeson="userresume.internshipView"></MySendedResumeSon>
        </div>
                <div class="py-4 px-10 rounded-sm">
          <div class="text-md font-semibold pb-4" style="border-bottom:1px solid #999">项目经历</div>
          <MySendedResumeSon class="p-4 my-2" :resumeson="userresume.projectView"></MySendedResumeSon>
        </div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

