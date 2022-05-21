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
    <div class="bg-gradient-to-r from-orange-50 to-green-50 py-4 mb-4"><SearchBox @searchfunction="searchFunction" class="mx-auto xl:w-3/5"></SearchBox></div>
    <PptMobile class="lg:hidden"></PptMobile>
    <div class="container mx-auto">
        <RecommendList :contents="contents"></RecommendList>
    </div>
</div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

