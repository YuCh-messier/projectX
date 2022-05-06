<script setup>
import { toRefs,ref,watch } from 'vue';
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

</script>

<script>

export default {
  data() {
    return {

    }
  },
  components:{
   
  },
  props:[]
}
</script>

<template>
    <div><button class="buttonStandardDark float-right" @click="addSon">添加</button>
        <div class="w-full mb-6" v-for="resume,index in resumeson" :key="resume.timePeriod">
            <div class="text-md font-semibold">经历{{index+1}}</div>
            <div class="my-3 flex" v-for="content,title in resume" :key="title">
                <div class="text-gray-500 w-1/5">{{title}}</div>
                <textarea class="bg-inherit border hover:border-amber-400 w-1/3" v-model="resumeson[index][title]" v-if="title=='经历简介'"></textarea>
                <input class="bg-inherit border hover:border-amber-400 w-1/3" v-model="resumeson[index][title]" v-else/>
            </div>
        </div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

