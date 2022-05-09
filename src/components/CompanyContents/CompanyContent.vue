<script setup>
import { toRefs } from 'vue';
var props=defineProps(['companyinfo'])
var {companyinfo}=toRefs(props)
</script>

<template>
<div class="bg-white rounded whitespace-pre-line textSm leading-6 space-y-6 rounded-xl pb-6">
  <div class="w-[100%] h-0 rounded-t-xl truncate shadow-md" :style="'padding-bottom:50%;background-position: center;background-size: cover;backgroung-size:cover;background-image: url('+companyinfo.companyGraph+');'"></div>
  <div class="m-6">{{companyinfo.companyContent}}</div>
  <div class="tapsStandard w-fit mx-auto m-6">{{companyinfo.companyTaps}}</div>
</div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

