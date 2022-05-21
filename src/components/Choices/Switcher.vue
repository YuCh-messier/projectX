<script setup>
import { toRefs,ref,watch } from 'vue';
var props=defineProps(['choices','currentchoice'])
var currentChoice=ref(props.currentchoice)
var emits=defineEmits(['changechoice'])
var {choices}=toRefs(props)
watch(currentChoice,()=>{
    emits('changechoice',currentChoice.value)
})
function setChoice(e){
    currentChoice.value=e
    console.log(currentChoice.value)
}
var imgHost='../../assets/'
var imgEnd='.png'
var icons=['personalInfo','resume','files','collects','my','messages']
</script>

<template>
    <div class="flex gap-5 textSm justify-around p-4 lg:justify-start">
        <div :class="{'headerHoverPattern flex flex-col items-center pb-1':true,'text-gray-900 border-b-2 border-orange-400 pb-1':(choice==currentChoice)}" v-for="choice,index in choices" :key="choice" @click="setChoice(choice)">
            <img class="w-fit lg:hidden mb-1" :src="imgHost+icons[index]+imgEnd" alt="">
            <div>{{choice}}</div>
        </div>   
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

