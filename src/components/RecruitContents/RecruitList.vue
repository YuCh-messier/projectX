<script setup>
import RecruitContent from './RecruitContent.vue'
import { toRefs } from 'vue';
var props=defineProps(['contents'])
var {contents}=toRefs(props)
</script>

<template>
    <div>
        <RecruitContent class="my-5" v-for="content in contents" :key="content.id" :content="content"></RecruitContent>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

