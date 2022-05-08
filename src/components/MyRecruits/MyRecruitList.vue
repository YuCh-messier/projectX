<script setup>
import MyRecruitContent from './MyRecruitContent.vue'
import { toRefs } from 'vue';
var props=defineProps(['contents'])
var {contents}=toRefs(props)
</script>

<template>
    <div>
        <MyRecruitContent class="my-5" v-for="content in contents" :key="content.id" :content="content"></MyRecruitContent>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

