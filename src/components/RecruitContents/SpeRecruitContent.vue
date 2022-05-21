<script setup>
import { toRefs } from 'vue';
var props=defineProps(['sperecruitinfo'])
var {sperecruitinfo}=toRefs(props)
</script>

<template>
<div class="p-6 whitespace-pre-line leading-7 text-sm">
    {{sperecruitinfo.content}}
</div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

