<script setup>
import { toRefs,ref,watch } from 'vue';
import { DeleteFilled,Plus } from '@element-plus/icons-vue'

var props=defineProps(['resumeson1','type'])
var {resumeson1}=toRefs(props)
var resumeson=ref(resumeson1.value)
var {type}=toRefs(props)
function addSon(){
    if(type.value==0){
    var son=ref({
        '学校':'',
        '学位':'',
        '时间':'',
        '经历简介':''
    })
    resumeson.value.push(son.value)
    }
    else if(type.value==1){
        var son=ref({
            '公司':'',
            '职位':'',
            '时间':'',
            '经历简介':'',
        })
        resumeson.value.push(son.value)
    }
    else{
        var son=ref({
            '项目':'',
            '角色':'',
            '时间':'',
            '经历简介':'',
        })
        resumeson.value.push(son.value)
    }
}

function deleteSon(i){
    var a=window.confirm('是否删除？')
    if(a){
        resumeson.value.splice(i,1)
    }
}
</script>

<template>
    <div><button class="buttonStandardDark float-right" @click="addSon"><Plus class="w-4 inline-block mr-2" />添加</button>
        <div class="w-full mb-6" v-for="resume,index in resumeson" :key="resume.timePeriod">
            <div class="text-md font-semibold inline-block mr-5">经历{{index+1}}</div><button class="text-sm text-orange-400 hover:text-orange-200 inline-block" @click="deleteSon(index)"><DeleteFilled class="w-4 inline-block"/>删除</button>
            <div class="my-3 flex border-b py-2" v-for="content,title in resume" :key="title">
                <div class="text-gray-500 w-1/5">{{title}}</div>
                <textarea class="bg-inherit lg:w-1/3" style="outline:none;" v-model="resumeson[index][title]" v-if="title=='经历简介'"></textarea>
                <div v-else-if="title=='学位'" class="bg-inherit">
                    <el-radio v-model="resumeson[index][title]" label="大专" size="large">大专</el-radio>
                    <el-radio v-model="resumeson[index][title]" label="本科" size="large">本科</el-radio>
                    <el-radio v-model="resumeson[index][title]" label="硕士" size="large">硕士</el-radio>
                    <el-radio v-model="resumeson[index][title]" label="博士" size="large">博士</el-radio>
                    <el-radio v-model="resumeson[index][title]" label="其他" size="large">其他</el-radio>
                </div>
                <input style="outline:none;" class="bg-inherit w-full lg:w-1/3" v-model="resumeson[index][title]" v-else/>
            </div>
        </div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

