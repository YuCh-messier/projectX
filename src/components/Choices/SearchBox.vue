<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue';
var keyWord=ref('')
var emits=defineEmits(['searchfunction'])
</script>

<template>
    <div class="flex justify-center items-center">
    <el-input v-model="keyWord" class="w-1/2 lg:my-2 h-10" placeholder="输入关键词">
        <template #suffix>
            <button class="buttonStandardDark h-10 rounded-l-none translate-x-4" style="border-top-left-radius: 0;border-bottom-left-radius: 0;" @click="$emit('searchfunction',keyWord)"><search class="inline" style="width: 1em; height: 1em; margin-right: 4px" />搜索</button> 
        </template>
    </el-input>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

