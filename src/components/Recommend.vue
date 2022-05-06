<script setup>
import SearchBox from './Choices/SearchBox.vue';
import RecommendList from './RecommendContents/RecommendList.vue';

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
    <div class="container mx-auto flex">
        <div class="w-full lg:w-1/3 mx-auto m-5">
            <SearchBox @searchfunction="searchFunction"></SearchBox>
        </div>
    </div>
    <div class="container mx-auto">
        <RecommendList :contents="contents"></RecommendList>
    </div>
</div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

