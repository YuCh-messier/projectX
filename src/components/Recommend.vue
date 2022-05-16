<script setup>
import SearchBox from './Choices/SearchBox.vue';
import RecommendList from './RecommendContents/RecommendList.vue';
import { ref } from 'vue';
import { getDatas} from '../scripts/publicFunctions'
import PptMobile from './Ppts/PptMobile.vue';

var contents=ref([])
getDatas((e)=>{contents.value=e},'recommends/allRecommends')

function searchFunction(keyWord){
    if(keyWord==''){
        alert('haha')
        getDatas((e)=>{contents.value=e},'recommends/allRecommends')
    }
    else{
    getDatas((e)=>{contents.value=e},'recommends/searchRecommends',{keyWord:keyWord,type:'recommend'})
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

