<script setup>
import { toRefs,computed } from 'vue';
var props=defineProps(['companyinfo'])
var {companyinfo}=toRefs(props)

var taps=computed(()=>{
    return companyinfo.value.companyTaps.split('|')
})
</script>

<template>
<div class="whitespace-pre-line textSm leading-6 space-y-6 pb-6">
  <div>
    <img class="w-" src="" alt="">
  </div>
  <div class="w-[100%] h-0 rounded-t-xl truncate shadow-md" :style="'padding-bottom:50%;background-position: center;background-size: cover;backgroung-size:cover;background-image: url('+companyinfo.companyGraph+');'"></div>
  <div class="m-6">{{companyinfo.companyContent}}</div>
  <div class="h-fit hidden lg:flex gap-x-4 mx-auto w-fit">
      <div class="tapDark" v-for="tap in taps" :key="tap">{{tap}}</div>
  </div>
</div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

