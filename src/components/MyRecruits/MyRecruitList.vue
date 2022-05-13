<script setup>
import MyRecruitContent from './MyRecruitContent.vue'
import { toRefs } from 'vue';
var props=defineProps(['contents'])
var {contents}=toRefs(props)
</script>

<template>
    <div>
        <MyRecruitContent class="border-b border-gray-300 shadow-lg lg:my-5 lg:border-0 lg:shadow-none" v-for="content in contents" :key="content.id" :content="content"></MyRecruitContent>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

