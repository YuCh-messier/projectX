<script setup>
import { toRefs } from 'vue';
var props=defineProps(['companyinfo'])
var {companyinfo}=toRefs(props)
</script>

<template>
<div class="bg-white rounded whitespace-pre-line textSm leading-6 space-y-6 rounded-xl pb-6">
  <div ><img class="bg-pink-200 w-[100%] h-0 rounded-t-xl" style="padding-bottom:50%;" :src="companyinfo.companyGraph" alt=""></div>
  <div class="m-6">{{companyinfo.companyContent}}</div>
  <div class="tapsStandard w-fit mx-auto m-6">{{companyinfo.companyTaps}}</div>
</div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

