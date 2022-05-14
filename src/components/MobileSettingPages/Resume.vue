<script setup>
import { ArrowRight,CirclePlus } from '@element-plus/icons-vue'
import { toRefs,ref } from 'vue';
import { getDatas,checkAccount,getDatasP,host } from '../../scripts/publicFunctions';

checkAccount((e)=>{
    if(!e.statu){
        alert('请先登录！')
        window.location=host+'pages/recruits.html'
    }
})

var userresume=ref({})
getDatas((e)=>{
  userresume.value=e.userResume
  sessionStorage.setItem('userResume',JSON.stringify(e.userResume))
},'user/getUserInfo')

function sendresume(e){
  checkAccount((e2)=>{
    if(e2.statu){
      getDatasP((e)=>{console.log(e)},'user/setUserResume',e)
    }
    else{
      alert('请登录先')
    }
  }) 
}

function changeStatu(e){
  if(statu.value==1){
    sendresume(e)
  }
  statu.value=(statu.value==0)?1:0
}
var statu=ref(0)

function goto(url){
  window.location=host+url
}

</script>

<template>
<div>
  <div class="p-5 border-b" @click="goto('pages/singleForm2.html?type=overView')">
    <div class="text-lg">个人简介</div>
    <div>
      <div class="inline-block w-11/12 whitespace-pre-line align-middle textSm">{{userresume.overView}}</div>
      <div class="inline-block"><ArrowRight class="w-5 text-orange-400"/></div>
    </div>
  </div>

  <div class="p-5 border-b" @click="goto('pages/singleForm2.html?type=awards')">
    <div class="text-lg">获奖经历</div>
    <div>
      <div class="inline-block w-11/12 whitespace-pre-line align-middle textSm">{{userresume.awards}}</div>
      <div class="inline-block"><ArrowRight class="w-5 text-orange-400"/></div>
    </div>
  </div>

  <div class="p-5 border-b" @click="goto('pages/singleForm2.html?type=skills')">
    <div class="text-lg">专业技能</div>
    <div>
      <div class="inline-block w-11/12 whitespace-pre-line align-middle textSm">{{userresume.skills}}</div>
      <div class="inline-block"><ArrowRight class="w-5 text-orange-400"/></div>
    </div>
  </div>

  <div class="p-5 border-b">
    <div class="text-lg flex justify-between"><div>教育经历</div><CirclePlus class="w-5 text-orange-400" @click="goto('pages/singleForm4.html?type=educateView')"/></div>
    <div>
      <div class="inline-block w-11/12 align-middle">
        <div class="w-full whitespace-pre-line" v-for="item,index in userresume.educateView" :key="item.time" @click="goto('pages/singleForm3.html?type=educateView&num='+index)">
          <div class="my-2">经历{{index+1}}</div>
          <div class="textSm my-1" v-for="value,key in item" :key="key">
            <div v-if="key!='经历简介'">{{key}}:{{value}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="p-5 border-b">
    <div class="text-lg flex justify-between"><div>实习经历</div><CirclePlus class="w-5 text-orange-400" @click="goto('pages/singleForm4.html?type=internshipView')"/></div>
    <div>
      <div class="inline-block w-11/12 align-middle">
        <div class="w-full whitespace-pre-line" v-for="item,index in userresume.internshipView" :key="item.time" @click="goto('pages/singleForm3.html?type=internshipView&num='+index)">
          <div class="my-2">经历{{index+1}}</div>
          <div class="textSm my-1" v-for="value,key in item" :key="key">
            <div v-if="key!='经历简介'">{{key}}:{{value}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="p-5 border-b">
    <div class="text-lg flex justify-between"><div>项目经历</div><CirclePlus class="w-5 text-orange-400" @click="goto('pages/singleForm4.html?type=projectView')"/></div>
    <div>
      <div class="inline-block w-11/12 align-middle">
        <div class="w-full whitespace-pre-line" v-for="item,index in userresume.projectView" :key="item.time" @click="goto('pages/singleForm3.html?type=projectView&num='+index)">
          <div class="my-2">经历{{index+1}}</div>
          <div class="textSm my-1" v-for="value,key in item" :key="key">
            <div v-if="key!='经历简介'">{{key}}:{{value}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

