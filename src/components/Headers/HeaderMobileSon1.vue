<script setup>
import { host } from '../../scripts/publicFunctions';
import { ref } from 'vue'

function goto(url){
    window.location=host+url
  }
const isCollapse = ref(false)
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<template>
<div>
<el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
  </el-radio-group>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-sub-menu index="1">
      <template #title>
        <span>线上实习</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">实习大厅</el-menu-item>
        <el-menu-item index="1-2">我的实习</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
        <el-sub-menu index="2">
      <template #title>
        <span>招聘广场</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="2-1" @click="goto('pages/recruits.html')">招聘信息</el-menu-item>
        <el-menu-item index="2-2" @click="goto('pages/recommend.html')">实习内推</el-menu-item>
        <el-menu-item index="2-3" @click="goto('pages/myRecruits.html')">我的投递</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
    <el-menu-item index="3">
      <template #title>职前培训</template>
    </el-menu-item>
    <el-menu-item index="4">
      <template #title>金领活动</template>
    </el-menu-item>
    </el-menu>
</div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>

