<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
var host='http://localhost:3000/pages/'
function goto(url){
    window.location=host+url
  }
</script>

<script>

</script>

<template>
    <el-dropdown class="hover:text-orange-400">
    <span class="el-dropdown-link">
      招聘广场
    </span>
    <el-icon class="el-icon--right">
        <arrow-down />
    </el-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="goto('recruits.html')">招聘信息</el-dropdown-item>
        <el-dropdown-item @click="goto('recommend.html')">实习内推</el-dropdown-item>
        <el-dropdown-item @click="goto('myRecruits.html')">我的投递</el-dropdown-item>
      </el-dropdown-menu>
    </template>
    </el-dropdown>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

