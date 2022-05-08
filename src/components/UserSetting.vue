<script setup>
import UserHeader from './UserSettings/UserHeader.vue';
import Switcher from './Choices/Switcher.vue';
import PersonalInfo from './UserSettings/PersonalInfo.vue';
import Resume from './UserSettings/Resume.vue';
import MessageList from './Messages/MessageList.vue';
import MyRecruits from './MyRecruits.vue';
import CollectList from './Collects/CollectList.vue'
import { toRefs } from 'vue';
var props=defineProps(['contents'])
var userInfo=[
  {title:'用户',content:'张蠡奥'},
  {title:'性别',content:'男'},
  {title:'年龄',content:'21'},
  {title:'电话号码',content:'13272732651'},
  {title:'邮箱地址',content:'1181119044@qq.com'},
  {title:'学校',content:'中南财经政法大学'},
  {title:'专业',content:'经济学'}
]
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
var userMessages=[
  {
    title:'您的飞书实习申请通过',
    sender:'金领工场官方',
    sendTime:'2022/05/07 13:47',
    senderGraph:'',
    content:'感谢您通过飞书实习申请，请添加微信1181119044获取详细内容'
  },{
    title:'您的飞书实习申请通过',
    sender:'金领工场官方',
    sendTime:'2022/05/07 13:47',
    senderGraph:'',
    content:'感谢您通过飞书实习申请，请添加微信1181119044获取详细内容'
  }
]
</script>

<script>

export default {
  data() {
    return {
      currentPath:'个人资料'
    }
  },
  methods:{
      changeChoice(e){
          this.currentPath=e
      }
  },
  components:{
   
  },
  props:[]
}
</script>

<template>
    <div class="container mx-auto xl:px-24">
        <UserHeader></UserHeader>
        <Switcher @changechoice="changeChoice" currentchoice="个人资料" :choices="['个人资料','简历上传','上传附件','我的收藏','我的投递','我的消息']"></Switcher>
        <PersonalInfo v-if="currentPath=='个人资料'" :userinfo="userInfo"></PersonalInfo>
        <Resume v-if="currentPath=='简历上传'" :userresume="userResume"></Resume>
        <MessageList v-if="currentPath=='我的消息'" :messages="userMessages"></MessageList>
        <MyRecruits v-if="currentPath=='我的投递'" :willu="0"></MyRecruits>
        <CollectList v-if="currentPath=='我的收藏'"></CollectList>
    </div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

