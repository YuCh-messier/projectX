<script setup>
import { ref } from 'vue';
import { getQueryVariable,checkAccount,host,getDatasP } from '../scripts/publicFunctions';

checkAccount((e)=>{
    if(!e.statu){
        alert('请先登录！')
        window.location=host+'pages/recruits.html'
    }
})

var type=getQueryVariable('type')
if(type!='educateView' && type!='internshipView' && type!='projectView'){
    alert('参数错误！')
    window.location=host+'pages/recruits.html'
}

var values=ref(JSON.parse(sessionStorage.getItem('userResume')))
var dicts={
    educateView:'教育经历',
    internshipView:'实习经历',
    projectView:'项目经历'
}

function send(){
  let tocheck=Object.values(blankValue.value)
  if(tocheck.indexOf('')!=-1){
    alert('内容不完整')
  }
  else{
  values.value[type].push(blankValue.value)
  checkAccount((e2)=>{
    if(e2.statu){
      getDatasP((e)=>{console.log(e)},'user/setUserResume',values.value)
      alert('上传成功')
      window.location=host+'pages/mobileSettingPages/resume.html'
    }
    else{
      alert('请登录先')
    }
  }) 
  }
}

var blankValue=ref({})
    if(type=='educateView'){
    blankValue=ref({
        '学校':'',
        '学位':'',
        '时间':'',
        '经历简介':''
    })
}
else if(type=='internshipView'){
    blankValue=ref({
        '公司':'',
        '职位':'',
        '时间':'',
        '经历简介':'',
    })  
}
else{
    blankValue=ref({
        '项目':'',
        '角色':'',
        '时间':'',
        '经历简介':'',
    })   
}

</script>

<template>
    <div>
      <div class="text-lg m-4">{{dicts[type]}}</div>
        <div v-for="items,keys in blankValue" :key="items.time">
          <div class="m-4">{{keys}}</div>
          <textarea v-if="keys=='经历简介'" v-model="blankValue[keys]" class="p-5 bg-white border w-full"></textarea>
          <div v-else-if="keys=='学位'" class="p-5 bg-white border w-full">
              <el-radio v-model="blankValue[keys]" label="大专" size="large">大专</el-radio>
              <el-radio v-model="blankValue[keys]" label="本科" size="large">本科</el-radio>
              <el-radio v-model="blankValue[keys]" label="硕士" size="large">硕士</el-radio>
              <el-radio v-model="blankValue[keys]" label="博士" size="large">博士</el-radio>
              <el-radio v-model="blankValue[keys]" label="其他" size="large">其他</el-radio>
          </div>
          <input v-else v-model="blankValue[keys]" class="p-5 bg-white border w-full"/>
        </div>
      <div><button class="bg-amber-400 w-full p-4 absolute" style="bottom:0px;" @click="send()">保存</button></div>
    </div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

