<script setup>
import { toRefs,watch } from 'vue';
var props=defineProps(['userinfo'])
var emits=defineEmits(['getback'])
var {userinfo}=toRefs(props)
var submitUserInfo=function(){
    for(let i=0;i<userinfo.value.length;i++){
        if(userinfo.value[i].content==''){
            alert('内容不完整')
            return
        }
    }
    emits('getback',userinfo.value)
}
</script>

<template>
    <div>
        <div class="flex justify-between items-center my-5 px-10">
            <div class="text-lg font-semibold inline-block">基本信息</div>
            <button class="h-fit buttonStandardLight z-20" @click="submitUserInfo">提交</button>
        </div>

        <div v-for="info,index in userinfo" :key="info">
          <div class="flex py-4 px-10 rounded-sm" :class="{'bg-white':(index%2==0)}" v-for="value,key in info" :key="value">
            <div class="w-1/3 text-gray-500">{{key}}</div>
            <div v-if="key=='性别'" style="background-color:inherit;" class="hover:border-amber-400">
                <el-radio v-model="userinfo[index][key]" label="男" size="large">男</el-radio>
                <el-radio v-model="userinfo[index][key]" label="女" size="large">女</el-radio>
            </div>
            <input v-else style="background-color:inherit;" class="border hover:border-amber-400" v-model="userinfo[index][key]"/>
          </div>
        </div>

    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

