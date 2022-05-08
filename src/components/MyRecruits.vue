<script setup>
import MyRecruitList from './MyRecruits/MyRecruitList.vue';
import { ref } from 'vue';
import { getDatas} from '../scripts/publicFunctions'

var {willu}=defineProps(['willu'])
var contents=ref([])
getDatas((e)=>{contents.value=e},'myRecruits/allMyRecruits',{telephone:'13272732651',token:'NNKOYCA'})
</script>

<template>
<div>
    <div class="container mx-auto flex 2xl:px-24">
        <div v-if="willu!=0" class="w-full lg:w-1/3 m-5 space-y-4">
            <div class="text-xl font-black">我的投递</div>
        </div>
    </div>
    <div class="container mx-auto xl:px-24">
        <MyRecruitList :contents="contents"></MyRecruitList>
    </div>
</div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

