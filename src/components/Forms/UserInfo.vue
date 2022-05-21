<script setup>
import { toRefs,watch } from 'vue';
var props=defineProps(['userinfo','userano'])
var emits=defineEmits(['getback'])
var {userinfo}=toRefs(props)
var {userano}=toRefs(props)
var submitUserInfo=function(){
    for(let i=0;i<userinfo.value.length;i++){
        if(userinfo.value[i].content==''){
            alert('内容不完整')
            return
        }
    }
    emits('getback',{...userinfo.value,...userano.value})
}
</script>

<template>
    <div v-if="userano">
        <div class="flex justify-between items-center my-5 px-10">
            <div class="text-lg font-semibold inline-block">基本信息</div>
            <button class="h-fit buttonStandardLight" @click="submitUserInfo">提交</button>
        </div>
        
        <div class="flex py-4 px-10 rounded-sm border-b" v-for="value,key in userinfo" :key="key">
            <div class="w-1/3 text-gray-500">{{key}}</div>
            <div v-if="key=='性别'" style="background-color:inherit;" class="hover:border-amber-400">
                <el-radio v-model="userinfo[key]" label="男" size="large">男</el-radio>
                <el-radio v-model="userinfo[key]" label="女" size="large">女</el-radio>
            </div>
            <input :placeholder="key" v-else style="background-color:inherit;outline: none;" v-model="userinfo[key]"/>
        </div>

        <div class="flex justify-between items-center my-5 px-10">
            <div class="text-lg font-semibold inline-block">其他信息</div>
        </div>
        <div class="flex py-4 px-10 rounded-sm border-b ">
            <div class="w-1/3 text-gray-500">期望岗位</div>
            <input style="background-color:inherit;outline: none;" v-model="userano.userPosition.value1"/>
        </div>
        <div class="flex py-4 px-10 rounded-sm border-b">
            <div class="w-1/3 text-gray-500">期望行业</div>
            <input style="background-color:inherit;outline: none;" v-model="userano.userPosition.value2"/>
        </div>
        <div class="flex py-4 px-10 rounded-sm border-b ">
            <div class="w-1/3 text-gray-500">期望城市</div>
            <input style="background-color:inherit;outline: none;" v-model="userano.userPosition.value3"/>
        </div>
        <div class="flex py-4 px-10 rounded-sm border-b">
            <div class="w-1/3 text-gray-500">到岗时间</div>
            <input style="background-color:inherit;outline: none;" v-model="userano.userTime.value1"/>
        </div>
        <div class="flex py-4 px-10 rounded-sm border-b ">
            <div class="w-1/3 text-gray-500">实习时长</div>
            <input style="background-color:inherit;outline: none;" v-model="userano.userTime.value2"/>
        </div>
        <div class="flex py-4 px-10 rounded-sm border-b">
            <div class="w-1/3 text-gray-500">每周出勤</div>
            <input style="background-color:inherit;outline: none;" v-model="userano.userTime.value3"/>
        </div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

