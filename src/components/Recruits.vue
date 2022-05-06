<script setup>
import Ppt from './Ppts/Ppt.vue'
import SearchBox from './Choices/SearchBox.vue';
import TapBox from './Choices/TapBox.vue';
import RecruitList from './RecruitContents/RecruitList.vue';

var choices=[
        ['光谷','武璐路','南湖大道'],
        ['金融','会计','前端','算法'],
        ['4天以下','4天','5天','6天'],
        ['小于200','200-300','300-400','400以上']
]
var ppts=[
    {url:'#',graph:''},
    {url:'#',graph:''},
    {url:'#',graph:''},
    {url:'#',graph:''}
]
var contents=[
    {
    affairId:1,
    title:'飞书前端实习生招聘',
    taps:'互联网|前端|实习',
    companyTaps:'互联网|前端|实习',
    companyName:'字节跳动',
    address:'光谷软件园',
    graph:'',
    workDays:'4天',
    salary:'400-500',
    url:'#'
},{
    affairId:1,
    title:'飞书前端实习生招聘',
    taps:'互联网|前端|实习',
    companyTaps:'互联网|前端|实习',
    companyName:'字节跳动',
    address:'光谷软件园',
    graph:'',
    workDays:'4天',
    salary:'400-500',
    url:'#'
}
]
</script>

<script>

export default {
  data() {
    return {
       
    }
  },
  methods:{
      searchFunction(keyWord){
          console.log(keyWord)
      },
      tapsfunction(taps){
          console.log(taps)
      }
  },
  components:{
   
  },
  props:[],
  emits:[]
}
</script>

<template>
<div>
    <div class="container mx-auto flex 2xl:px-24">
        <div class="w-full lg:w-1/3 m-5 space-y-4">
            <div class="text-xl font-black">热门岗位</div>
            <SearchBox @searchfunction="searchFunction"></SearchBox>
            <TapBox :choices="choices" @tapsfunction="tapsfunction"></TapBox>
        </div>
        <Ppt :ppts="ppts" class="w-2/3 hidden lg:block"></Ppt>
    </div>
    <div class="container mx-auto xl:px-24">
        <RecruitList :contents="contents"></RecruitList>
    </div>
</div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

