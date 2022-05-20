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
    <SearchBox @searchfunction="searchFunction" class="lg:my-4 mx-auto xl:w-3/5"></SearchBox>
    <PptMobile class="lg:hidden"></PptMobile>
    <div class="container mx-auto flex lg:px-12">
        <div class="mx-auto m-2 lg:w-1/3 lg:m-5">
            <TapBox class="hidden lg:block" :choices="choices" @tapsfunction="tapsfunction"></TapBox>
        </div>
        <Ppt :ppts="ppts" class="w-2/3 hidden lg:flex"></Ppt>
    </div>
    <div class="container mx-auto">
        <div class="border-b-4 pb-1 text-yellow-400 border-yellow-400 w-fit">热门岗位</div>
        <RecruitList :contents="contents"></RecruitList>
    </div>
</div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

