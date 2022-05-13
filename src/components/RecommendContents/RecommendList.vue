<script setup>
import RecommendContent from './RecommendContent.vue'
import { toRefs } from 'vue';
var props=defineProps(['contents'])
var {contents}=toRefs(props)
</script>

<template>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:px-5">
        <RecommendContent class="border-b border-gray-300 shadow-lg lg:my-5 lg:border-0 lg:shadow-none" v-for="content in contents" :key="content.id" :content="content"></RecommendContent>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

