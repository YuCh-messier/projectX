<script setup>
import { toRefs } from 'vue';
var props=defineProps(['collects'])
var {collects}=toRefs(props)

</script>

<template>
    <div class="px-5 sm:px-0">
        <div class="space-y-2 bg-white p-4 rounded shadow m-2" v-for="collect in collects" :key="collect.title">
            <div class="flex justify-between">
                <div class="text-sm">{{collect.title}}</div>
                <div class="tapsStandard">{{collect.tap}}</div>
            </div>
            <div class="truncate h-10">{{collect.content}}</div>
        </div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

