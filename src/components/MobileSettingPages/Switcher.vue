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
var icons=['home','personalInfo','files','my','messages']
</script>

<template>
    <div class="flex gap-5 textSm justify-around p-4 lg:justify-start lg:border lg:border-gray-300 bg-white shadow m-4 rounded">
        <div :class="{'headerHoverPattern flex flex-col items-center':true,'text-gray-900':(choice==currentChoice)}" v-for="choice,index in choices" :key="choice" @click="setChoice(choice)">
            <img class="w-10 lg:hidden mb-1" :src="imgHost+icons[index]+imgEnd" alt="">
            <div>{{choice}}</div>
        </div>   
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

