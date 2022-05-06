<script setup>
import { toRefs } from 'vue';
var props=defineProps(['userinfo'])
var {userInfo}=toRefs(props)
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
            <div class="text-lg font-semibold inline-block">基本信息</div>
            <button class="h-fit buttonStandardDark">修改</button>
        </div>
        <div class="flex py-4 px-10 rounded-sm" :class="{'bg-white':(index%2==0)}" v-for="info,index in userinfo" :key="info.title">
            <div class="w-1/3 text-gray-500">{{info.title}}</div>
            <div>{{info.content}}</div>
        </div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

