<script setup>
import { toRefs } from 'vue';
var props=defineProps(['sperecruitinfo'])
var {sperecruitinfo}=toRefs(props)
</script>

<template>
<div class="bg-white p-6 rounded whitespace-pre-line text-md leading-7">
    {{sperecruitinfo.content}}
</div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

