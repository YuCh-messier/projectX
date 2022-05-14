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
var num=getQueryVariable('num')
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
  checkAccount((e2)=>{
    if(e2.statu){
      let tocheck=Object.values(values.value[type][num])
      if(tocheck.indexOf('')!=-1){
        alert('内容不完整')
      }
      else{
        getDatasP((e)=>{console.log(e)},'user/setUserResume',values.value)
        alert('上传成功')
        window.location=host+'pages/mobileSettingPages/resume.html'
      }
    }
    else{
      alert('请登录先')
    }
  }) 
}

function deleteu(){
  checkAccount((e2)=>{
    if(e2.statu){
      var ifde=window.confirm('是否删除')
      if(ifde){
        delete values.value[type][num]
        getDatasP((e)=>{console.log(e)},'user/setUserResume',values.value)
        alert('删除成功')
        window.location=host+'pages/mobileSettingPages/resume.html'
      }
    }
    else{
      alert('请登录先')
    }
  }) 
}
</script>

<template>
    <div>
      <div class="text-lg m-4">{{dicts[type]}}</div>
        <div v-for="items,keys in values[type][num]" :key="items.time">
          <div class="m-4">{{keys}}</div>
          <textarea v-if="keys=='经历简介'" v-model="values[type][num][keys]" class="p-5 bg-white border w-full"></textarea>
          <div v-else-if="keys=='学位'" class="p-5 bg-white border w-full">
              <el-radio v-model="values[type][num][keys]" label="大专" size="large">大专</el-radio>
              <el-radio v-model="values[type][num][keys]" label="本科" size="large">本科</el-radio>
              <el-radio v-model="values[type][num][keys]" label="硕士" size="large">硕士</el-radio>
              <el-radio v-model="values[type][num][keys]" label="博士" size="large">博士</el-radio>
              <el-radio v-model="values[type][num][keys]" label="其他" size="large">其他</el-radio>
          </div>
          <input v-else v-model="values[type][num][keys]" class="p-5 bg-white border w-full"/>
        </div>
      <div>
        <button class="bg-amber-400 w-1/2 p-4 absolute" style="bottom:0px;left:0px;" @click="send()">保存</button>
        <button class="bg-blue-400 w-1/2 p-4 absolute" style="bottom:0px;right:0px;" @click="deleteu()">删除</button>
      </div>
    </div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

