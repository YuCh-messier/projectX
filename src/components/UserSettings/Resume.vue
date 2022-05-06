<script setup>
import { toRefs } from 'vue';
import ResumeSon from './ResumeSon.vue';
var props=defineProps(['userresume'])
// var {userResume}=toRefs(props)
var userResume={
  overView:`我是一个优秀的大学生`,
  educateView:[
    {
      '学校':'中南财经政法大学',
      '学位':'学士',
      '时间':'2019-2023',
      '经历简介':`我在学校干了很多事情`
    },{
      '学校':'中南财经政法大学',
      '学位':'学士',
      '时间':'2019-2023',
      '经历简介':`我在学校干了很多事情`
    }
  ],
  internshipView:[
    {
      companyName:'武汉同创万智科技有限公司',
      position:'技术部部长',
      timePeriod:'2020-至今',
      companyIntro:`我在公司干了很多事情`
    },{
      companyName:'武汉同创万智科技有限公司',
      position:'技术部部长',
      timePeriod:'2020-至今',
      companyIntro:`我在公司干了很多事情`
    }
  ],
  projectView:[
    {
      projectName:'网站开发',
      role:'架构师|产品经理',
      timePeriod:'2022-至今',
      projectIntro:'我做了很多事情'
    }
  ]
}
</script>

<script>

export default {
  data() {
    return {

    }
  },
  components:{
   
  },
  props:[]
}
</script>

<template>
    <div>
        <div class="flex justify-between items-center my-5 px-10">
            <div class="text-lg font-semibold inline-block">我的简历</div>
            <button class="h-fit buttonStandardDark">修改</button>
        </div>
        <div class="py-4 px-10 rounded-sm">
            <div class="text-md font-semibold pb-4" style="border-bottom:1px solid #999">个人简介</div>
            <div class="rounded p-4 mt-2 bg-white w-full">{{userResume.overView}}</div>
        </div>
        <div class="py-4 px-10 rounded-sm">
          <div class="text-md font-semibold pb-4" style="border-bottom:1px solid #999">教育经历</div>
          <ResumeSon class="bg-orange-50 p-4 my-2" :resumeson="userResume.educateView"></ResumeSon>
        </div>
                <div class="py-4 px-10 rounded-sm">
          <div class="text-md font-semibold pb-4" style="border-bottom:1px solid #999">实习经历</div>
          <ResumeSon class="bg-white p-4 my-2" :resumeson="userResume.internshipView"></ResumeSon>
        </div>
                <div class="py-4 px-10 rounded-sm">
          <div class="text-md font-semibold pb-4" style="border-bottom:1px solid #999">项目经历</div>
          <ResumeSon class="bg-orange-50 p-4 my-2" :resumeson="userResume.projectView"></ResumeSon>
        </div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

