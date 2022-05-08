<script setup>
import { toRefs } from 'vue';
var props=defineProps(['collects'])
// var {collects}=toRefs(props)
var collects=[
    {
        title:'飞书前端实习生招聘',
        content:`职位描述：
1. 负责MMC买家链路业务产品（导购交易营销结算等）相关的架构设计与开发；
2. 从用户和技术出发，实现面向未来的系统规划、设计和落地；
3. 技术预研和技术难点攻关，保障系统可用性、稳定性、和可扩展性。
职位要求：
1. Java基础扎实，理解io、多线程、集合等基础框架，对JVM原理有一定的了解；`,
        url:'',tap:'实习'
    },    {
        title:'飞书前端实习生招聘',
        content:`职位描述：
1. 负责MMC买家链路业务产品（导购交易营销结算等）相关的架构设计与开发；
2. 从用户和技术出发，实现面向未来的系统规划、设计和落地；
3. 技术预研和技术难点攻关，保障系统可用性、稳定性、和可扩展性。
职位要求：
1. Java基础扎实，理解io、多线程、集合等基础框架，对JVM原理有一定的了解；`,
        url:'',tap:'网页'
    }
]
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
    <div class="px-5 sm:px-0">
        <div class="space-y-2 bg-white p-4 rounded shadow m-2" v-for="collect in collects" :key="collect.title">
            <div class="flex justify-between">
                <div class="text-sm">{{collect.title}}</div>
                <div class="tapsStandard">{{collect.tap}}</div>
            </div>
            <div class="truncate h-10">{{collect.content}}</div>
        </div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

