<script setup>
import { toRefs,ref } from 'vue';
import SetAvatar from './SetAvatar.vue'
import { serverHost,getDatas,checkAccount } from '../../scripts/publicFunctions';
var props=defineProps(['files'])
var {files}=toRefs(props)
var ifFile=ref(true)

function checkFileNum(){
  if(files.value.length>=5){
    alert('最多上传5个文件')
    ifFile.value=false
  }
}

function download(filename){

}

function deletefile(filename){
  let ifD=window.confirm('是否删除改附件')
  if(ifD){


    window.location.reload()
  }
}
</script>

<template>
<div class="p-6">
  <div class="text-lg font-semibold">我的附件</div>
  <div class="p-4">
    <div v-for="file in files" :key="file" class="flex my-2">
        <!-- <img class="icon" v-if="file.filetype=='file'" src="./file.png"> -->
        <div class="w-24 truncate">{{file}}</div>
        <div class="mx-4"><button class="buttonStandardLight" @click="download(file)">下载</button></div>
        <div><button class="buttonStandardLight" @click="deletefile(file)">删除</button></div>
    </div>
  </div>
  <div class="text-lg font-semibold">上传附件</div>
  <form :action="serverHost+'user/uploadFile'" enctype="multipart/form-data" method="post" class="p-4 space-y-2">
      上传文件：<input type="file" @change="checkFileNum" name="files">
      <button v-if="ifFile" class="buttonStandardDark" type="submit" style="width: fit-content;" onclick="alert('稍等片刻')">提交</button>
  </form>
  <div class="text-lg font-semibold">更换头像</div>
  <SetAvatar class="p-6"></SetAvatar>
</div>
</template>

<style src="../../assets/public.css"></style>


