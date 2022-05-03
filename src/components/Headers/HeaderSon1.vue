<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
</script>

<script>

</script>

<template>
    <el-dropdown class="hover:text-orange-400">
    <span class="el-dropdown-link">
      线上实习
    </span>
    <el-icon class="el-icon--right">
        <arrow-down />
    </el-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>项目广场</el-dropdown-item>
        <el-dropdown-item>我的项目</el-dropdown-item>
      </el-dropdown-menu>
    </template>
    </el-dropdown>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

