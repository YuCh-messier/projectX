<script setup>
import { toRefs } from 'vue';
import { ArrowDown } from '@element-plus/icons-vue'
import { ArrowUp } from '@element-plus/icons-vue'
var props=defineProps(['message'])
var {message}=toRefs(props)
</script>

<template>
    <div class="p-4 rounded">
        <div class="flex items-center gap-x-3">
            <div class="rounded-[100%] bg-gray-200 w-12 h-12"><img class="rounded" :src="message.senderGraph" alt=""></div>
            <div class="text-sm">
                <div>{{message.sender}}</div>
                <div class="textSm">{{message.sendTime}}</div>
            </div>
        </div>
        <div class="m-3">
            <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item :title="message.title">
                <div class="text-base whitespace-pre-line">{{message.content}}</div>
            </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

