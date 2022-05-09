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
</script>

<template>
    <div class="flex gap-5 textSm p-4" style="border:1px solid #ddd">
        <div :class="{'headerHoverPattern':true,'text-gray-900':(choice==currentChoice)}" v-for="choice in choices" :key="choice" @click="setChoice(choice)">
            {{choice}}
        </div>   
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

