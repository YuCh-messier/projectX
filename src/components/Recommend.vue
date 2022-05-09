<script setup>
import SearchBox from './Choices/SearchBox.vue';
import RecommendList from './RecommendContents/RecommendList.vue';
import { ref } from 'vue';
import { getDatas} from '../scripts/publicFunctions'

var contents=ref([])
getDatas((e)=>{contents.value=e},'recommends/allRecommends')

function searchFunction(keyWord){
    if(keyWord==''){
        alert('haha')
        getDatas((e)=>{contents.value=e},'recommends/allRecommends')
    }
    else{
    getDatas((e)=>{contents.value=e},'recruits/searchRecommends',{keyWord:keyWord,type:'recommend'})
    console.log(keyWord)
    }
}
</script>

<template>
<div>
    <div class="container mx-auto flex">
        <div class="w-full lg:w-1/3 mx-auto m-5">
            <SearchBox @searchfunction="searchFunction"></SearchBox>
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

