<script setup>
import { Search } from '@element-plus/icons-vue'
</script>

<script>

export default {
  data() {
    return {
        keyWord:''
    }
  },
  components:{
   
  },
  props:[],
  emits:['searchfunction']
}
</script>

<template>
    <div>
    <el-input v-model="keyWord" class="w-2/3 m-2" placeholder="输入关键词">
        <template #suffix>
            <el-icon class="el-input__icon"><Search /></el-icon>
        </template>
    </el-input>
    <button class="buttonStandardDark" @click="$emit('searchfunction',keyWord)"><search class="inline" style="width: 1em; height: 1em; margin-right: 4px" />搜索</button> 
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

