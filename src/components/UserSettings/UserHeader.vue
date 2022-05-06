<script setup>
import { toRefs } from 'vue';
var props=defineProps(['contents'])

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
    <div class="p-6 bg-gray-200" style="padding-bottom:11%;">
        <div class="h-0 bg-pink-300 relative z-0" style="padding-bottom:20%;"></div>
        <div class="relative translate-x-4">
            <div class="absolute w-full z-30 space-x-6 translate-y-[-50%]">
            <div class="border-4 shadow-xl w-1/6 h-0 bg-pink-200 rounded z-30 inline-block align-middle" style="padding-top:16.6%;"><img class="picFullMode" src="" alt=""></div>
            <div class="z-30 inline-block translate-y-4 align-text-top">
                <div>张蠡奥</div>
                <div class="textSm">中南财经政法大学</div>
                <div class="textSm">经济学</div>
            </div>
            </div>
        </div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

