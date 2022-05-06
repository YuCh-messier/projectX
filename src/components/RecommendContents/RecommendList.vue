<script setup>
import RecommendContent from './RecommendContent.vue'
import { toRefs } from 'vue';
var props=defineProps(['contents'])
var {contents}=toRefs(props)
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
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 px-5 sm:px-0">
        <RecommendContent class="my-5" v-for="content in contents" :key="content.id" :content="content"></RecommendContent>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

