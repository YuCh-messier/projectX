<script setup>
import { ref,toRefs,computed } from 'vue';
import { MostlyCloudy } from '@element-plus/icons-vue';
var props=defineProps(['headerinfo'])
var {headerinfo}=toRefs(props)

var taps=computed(()=>{
    return headerinfo.value.taps.split('|')
})
</script>

<template>
<div class="flex justify-around p-6 flex-col lg:flex-row">
    <div class="text-xl flex gap-y-4 flex-col">
        <div class="font-bold">{{headerinfo.title}}</div>
        <div class="textSm">{{headerinfo.address}}</div>
    </div>
    <div class="flex items-center my-4 lg:my-0">
        <div class="text-xl">{{headerinfo.workDays}}/周</div>
    </div>
    <div class="flex items-center">
        <div class="text-orange-500 text-xl">{{headerinfo.salary}}/天</div>
        <div class="h-fit ml-4 hidden lg:flex gap-x-4">
            <div class="tapDark" v-for="tap in taps" :key="tap">{{tap}}</div>
        </div>
    </div>
</div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

