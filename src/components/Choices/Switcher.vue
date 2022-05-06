<script setup>
import { toRefs,ref,watch } from 'vue';
var props=defineProps(['choices'])
var emits=defineEmits(['changechoice'])
var {choices}=toRefs(props)
var currentChoice=ref('个人资料')
watch(currentChoice,()=>{
    emits('changechoice',currentChoice.value)
})
function setChoice(e){
    currentChoice.value=e
    console.log(currentChoice.value)
}
</script>

<script>

export default {
  data() {
    return {

    }
  },
  components:{
   
  },
  props:[]
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

