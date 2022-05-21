<script setup>
import RecruitContent from './RecruitContent.vue'
import { toRefs } from 'vue';
var props=defineProps(['contents'])
var {contents}=toRefs(props)
</script>

<template>
    <div>
        <div class="border-b-4 pb-1 text-yellow-400 border-yellow-400 w-fit ml-12 mb-6">热门岗位</div>

        <div class="gap-y-4 w-fit mx-auto gap-x-4 grid grid-cols-3 my-4">
            <div class="bg-gradient-to-r from-green-400 to-blue-400 h-12 w-96 text-sm font-semibold text-white flexStandard">知名大厂，触手可及</div>
            <div class="bg-gradient-to-r from-orange-400 to-red-400 h-12 w-96 text-sm font-semibold text-white flexStandard">知名大厂，触手可及</div>
            <div class="bg-gradient-to-r from-pink-400 to-purple-400 h-12 w-96 text-sm font-semibold text-white flexStandard">知名大厂，触手可及</div>
        </div>

        <div class="gap-y-4 w-fit mx-auto gap-x-4 grid grid-cols-3">
            <RecruitContent class="border-gray-200 border" v-for="content in contents" :key="content.id" :content="content"></RecruitContent>
        </div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

