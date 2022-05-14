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

var icons=['../../assets/home.png','../../assets/personalInfo.png','../../assets/files.png','../../assets/my.png','../../assets/messages.png']
</script>

<template>
    <div class="flex gap-5 textSm justify-around p-4 lg:justify-start lg:border lg:border-gray-300 bg-white shadow m-4 rounded">
        <div :class="{'headerHoverPattern flex flex-col items-center':true,'text-gray-900':(choices[0]==currentChoice)}" @click="setChoice(choices[0])">
            <img class="w-10 lg:hidden mb-1" src="../../assets/home.png" alt="">
            <div>{{choices[0]}}</div>
        </div>  
        <div :class="{'headerHoverPattern flex flex-col items-center':true,'text-gray-900':(choices[1]==currentChoice)}" @click="setChoice(choices[1])">
            <img class="w-10 lg:hidden mb-1" src="../../assets/personalInfo.png" alt="">
            <div>{{choices[1]}}</div>
        </div>   
        <div :class="{'headerHoverPattern flex flex-col items-center':true,'text-gray-900':(choices[2]==currentChoice)}" @click="setChoice(choices[2])">
            <img class="w-10 lg:hidden mb-1" src="../../assets/files.png" alt="">
            <div>{{choices[2]}}</div>
        </div>   
        <div :class="{'headerHoverPattern flex flex-col items-center':true,'text-gray-900':(choices[3]==currentChoice)}" @click="setChoice(choices[3])">
            <img class="w-10 lg:hidden mb-1" src="../../assets/my.png" alt="">
            <div>{{choices[3]}}</div>
        </div>   
        <div :class="{'headerHoverPattern flex flex-col items-center':true,'text-gray-900':(choices[4]==currentChoice)}" @click="setChoice(choices[4])">
            <img class="w-10 lg:hidden mb-1" src="../../assets/messages.png" alt="">
            <div>{{choices[4]}}</div>
        </div>    
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

