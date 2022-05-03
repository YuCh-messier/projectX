<script setup>
import Son1 from './HeaderSon1.vue'
import Son2 from './HeaderSon2.vue'
</script>

<script>

export default {
  data() {
    return {
      headerParts:[
          {id:2,value:'金领活动',url:''},
          {id:3,value:'职前培训',url:''},
          {id:4,value:'商务合作',url:''}
      ],
      user:{
        name:'用户',
        headImg:''
      }
    }
  },
  components:{
    Son1
  }
}
</script>

<template>
  <div id="header" class="grid grid-cols-12 gap-4 items-center m-2 text-sm text-gray-600">
    <div id="logo" class="col-start-1 col-end-3"><img src="" alt="" class="bg-pink-500 w-full h-fit"></div>

    <div id="middlePart" class="col-start-3 col-end-9 flex justify-items-center justify-around">
      <div class="hover:text-orange-400">首页</div>

      <Son1></Son1>
      <Son2></Son2>

      <div class="hover:text-orange-400">招聘</div>
      <div v-for="item in headerParts" :key="item.id" class="hover:text-orange-400">{{item.value}}</div>
    </div>

    <div></div>

    <div id="headImg"><img class="rounded-[100%] bg-pink-500 w-12 h-12" :src="user.headImg" alt=""></div>
    <div class="col-start-11 col-end-13">{{user.name}}</div>
  </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

