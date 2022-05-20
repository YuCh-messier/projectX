<script setup>
import MyRecruitList from './MyRecruits/MyRecruitList.vue';
import { ref } from 'vue';
import { getDatas,checkAccount,host} from '../scripts/publicFunctions'
import PptMobile from './Ppts/PptMobile.vue';

if(!checkAccount()[0]){
    alert('请先登录！')
    window.location=host+'pages/login.html'
}

var {willu}=defineProps(['willu'])
var contents=ref([])

getDatas('myRecruits/allMyRecruits','get').then(e=>{contents.value=e.data})
</script>

<template>
<div>
    <div class="container mx-auto flex 2xl:px-24">
        <div v-if="willu!=0" class="hidden lg:block w-full lg:w-1/3 m-5 space-y-4">
            <div class="hidden lg:block text-xl font-black">我的投递</div>
        </div>
    </div>
    <PptMobile v-if="willu!=0" class="lg:hidden"></PptMobile>
    <div class="container mx-auto xl:px-24">
        <MyRecruitList :contents="contents"></MyRecruitList>
    </div>
</div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

