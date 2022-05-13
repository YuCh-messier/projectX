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

getDatas((e)=>{contents.value=e},'recruits/allRecruits',{type:'recruit'})
getDatas((e)=>{choices.value=e},'choices/allRecruitsTaps')
getDatas((e)=>{ppts.value=e},'ppts/setPpts')

function searchFunction(keyWord){
    if(keyWord==''){
        getDatas((e)=>{contents.value=e},'recruits/allRecruits',{type:'recruit'})
    }
    else{
    getDatas((e)=>{contents.value=e},'recruits/searchRecruits',{keyWord:keyWord,type:'recruit'})
    console.log(keyWord)
    }
}

function tapsfunction(taps){
    console.log(taps)
    }
</script>

<template>
<div>
    <PptMobile class="lg:hidden"></PptMobile>
    <div class="container mx-auto flex 2xl:px-24">
        <div class="mx-auto m-2 lg:w-1/3 lg:m-5">
            <div class="text-xl font-black hidden lg:block">热门岗位</div>
            <SearchBox @searchfunction="searchFunction" class="lg:my-4"></SearchBox>
            <TapBox class="hidden lg:block" :choices="choices" @tapsfunction="tapsfunction"></TapBox>
        </div>
        <Ppt :ppts="ppts" class="w-2/3 hidden lg:grid"></Ppt>
    </div>
    <div class="container mx-auto xl:px-24">
        <RecruitList :contents="contents"></RecruitList>
    </div>
</div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

