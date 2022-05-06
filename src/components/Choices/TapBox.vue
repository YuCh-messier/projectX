<script setup>
import { toRefs,watch,ref } from 'vue';
var props=defineProps(['choices'])
var {choices}=toRefs(props)
var emits=defineEmits(['tapsfunction'])
var checkBoxs=ref([[],[],[],[]])
watch(checkBoxs.value,()=>{emits('tapsfunction',checkBoxs.value)})

</script>

<script>

export default {
  data() {
    return {

    }
  },
  components:{
   
  }
}
</script>

<template>
<div class="space-y-3">
  <div class="demo-button-style flex items-center">
    <span class="w-1/5">位置：</span><el-checkbox-group v-model="checkBoxs[0]">
      <el-checkbox-button v-for="choice in choices[0]" :key="choice" :label="choice">{{
        choice
      }}</el-checkbox-button>
    </el-checkbox-group>
  </div>

    <div class="demo-button-style flex items-center">
    <span class="w-1/5">标签：</span><el-checkbox-group v-model="checkBoxs[1]">
      <el-checkbox-button v-for="choice in choices[1]" :key="choice" :label="choice">{{
        choice
      }}</el-checkbox-button>
    </el-checkbox-group>
  </div>

    <div class="demo-button-style flex items-center">
    <span class="w-1/5">时间(周)：</span><el-checkbox-group v-model="checkBoxs[2]">
      <el-checkbox-button v-for="choice in choices[2]" :key="choice" :label="choice">{{
        choice
      }}</el-checkbox-button>
    </el-checkbox-group>
  </div>

    <div class="demo-button-style flex items-center">
    <span class="w-1/5">薪水(天)：</span><el-checkbox-group v-model="checkBoxs[3]">
      <el-checkbox-button v-for="choice in choices[3]" :key="choice" :label="choice">{{
        choice
      }}</el-checkbox-button>
    </el-checkbox-group>
  </div>
</div> 
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

