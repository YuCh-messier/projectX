<script setup>
import RecruitContent from './RecruitContent.vue'
import { toRefs } from 'vue';
var props=defineProps(['contents'])
var {contents}=toRefs(props)
</script>

<template>
    <div class="w-full">
        <div class="mx-4 space-x-4 ">
            <RecruitContent class="ml-4 inline-block border-b border-gray-300 shadow-lg lg:my-5 lg:border-0 lg:shadow-none" v-for="content in contents" :key="content.id" :content="content"></RecruitContent>
        </div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

