<script setup>
import UserHeader from './UserSettings/UserHeader.vue';
import Switcher from './Choices/Switcher.vue';
import PersonalInfo from './UserSettings/PersonalInfo.vue';
import Resume from './UserSettings/Resume.vue';
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
</script>

<script>

export default {
  data() {
    return {

    }
  },
  methods:{
      changeChoice(e){
          
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
        <Switcher @changechoice="changeChoice" :choices="['个人资料','简历上传','我的收藏','我的投递','我的消息']"></Switcher>
        <PersonalInfo :userinfo="userInfo"></PersonalInfo>
        <Resume></Resume>
    </div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

