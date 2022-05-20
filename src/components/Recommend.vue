<script setup>
import SearchBox from './Choices/SearchBox.vue';
import RecommendList from './RecommendContents/RecommendList.vue';
import { ref } from 'vue';
import { getDatas} from '../scripts/publicFunctions'
import PptMobile from './Ppts/PptMobile.vue';

var contents=ref([])
getDatas('recommends/allRecommends','get').then(e=>{contents.value=e.data})

function searchFunction(keyWord){
    if(keyWord==''){
        getDatas('recommends/allRecommends','get',{type:'recommend'}).then(e=>{contents.value=e.data})
    }
    else{
    getDatas('recommends/searchRecommends','get',{keyWord:keyWord,type:'recommend'}).then(e=>{contents.value=e.data})
    console.log(keyWord)
    }
}
</script>

<template>
<div>
    <PptMobile class="lg:hidden"></PptMobile>
    <div class="container mx-auto flex">    
        <div class="mx-auto m-2 lg:w-1/3 lg:m-5">
            <SearchBox class="lg:my-4" @searchfunction="searchFunction"></SearchBox>
        </div>
    </div>
    <div class="container mx-auto">
        <RecommendList :contents="contents"></RecommendList>
    </div>
</div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

