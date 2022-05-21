<script setup>
import Ppt from './Ppts/Ppt.vue'
import SearchBox from './Choices/SearchBox.vue';
import TapBox from './Choices/TapBox.vue';
import RecruitList from './RecruitContents/RecruitList.vue';
import { ref } from 'vue';
import { getDatas} from '../scripts/publicFunctions'
import PptMobile from './Ppts/PptMobile.vue';

var choices=ref([])
var contents=ref([])
var ppts=ref([{graph:''},{graph:''},{graph:''},{graph:''}])

getDatas('recruits/allRecruits','get',{type:'recruit'}).then(e=>{contents.value=e.data})
getDatas('choices/allRecruitsTaps','get').then(e=>{choices.value=e.data})
getDatas('ppts/setPpts','get').then(e=>{ppts.value=e.data})

function searchFunction(keyWord){
    if(keyWord==''){
        getDatas('recruits/allRecruits','get').then(e=>{contents.value=e.data})
    }
    else{
    getDatas('recruits/searchRecruits','get',{keyWord:keyWord,type:'recruit'}).then(e=>{contents.value=e.data})
    console.log(keyWord)
    }
}

function tapsfunction(taps){
    console.log(taps)
    }
</script>

<template>
<div>
    <div class="bg-gradient-to-r from-orange-50 to-green-50 py-4 mb-4"><SearchBox @searchfunction="searchFunction" class="mx-auto xl:w-3/5"></SearchBox></div>
    <PptMobile :ppts="ppts" class="lg:hidden"></PptMobile>
    <div class="container mx-auto flex lg:px-12">
        <TapBox class="hidden lg:flex w-1/3 bg-white" :choices="choices" @tapsfunction="tapsfunction"></TapBox>
        <Ppt :ppts="ppts" class="w-2/3 hidden lg:flex"></Ppt>
    </div>
    <div class="container mx-auto mb-6">
        <RecruitList :contents="contents"></RecruitList>
    </div>
</div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

