<script setup>
import Ppt from './Ppts/Ppt.vue'
import SearchBox from './Choices/SearchBox.vue';
import TapBox from './Choices/TapBox.vue';
import RecruitList from './RecruitContents/RecruitList.vue';
import { ref } from 'vue';
import { getDatas} from '../scripts/publicFunctions'

var choices=ref([])
var contents=ref([])
var ppts=ref([])

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
    <div class="container mx-auto flex 2xl:px-24">
        <div class="w-full lg:w-1/3 m-5 space-y-4">
            <div class="text-xl font-black">热门岗位</div>
            <SearchBox @searchfunction="searchFunction"></SearchBox>
            <TapBox :choices="choices" @tapsfunction="tapsfunction"></TapBox>
        </div>
        <Ppt :ppts="ppts" class="w-2/3 hidden lg:block"></Ppt>
    </div>
    <div class="container mx-auto xl:px-24">
        <RecruitList :contents="contents"></RecruitList>
    </div>
</div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

