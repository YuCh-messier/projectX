<script setup>
import RecruitContent from './RecruitContent.vue'
import { toRefs } from 'vue';
var props=defineProps(['contents'])
var {contents}=toRefs(props)
</script>

<script>

export default {
  data() {
    return {
      host:'http://localhost:3000/pages/'
    }
  },
  components:{
   
  },
  methods:{
    goto(url){
      window.location=this.host+url
    }
  },
  props:[]
}
</script>

<template>
    <div>
        <RecruitContent @click="goto('speRecruit.html')" class="my-5" v-for="content in contents" :key="content.id" :content="content"></RecruitContent>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

