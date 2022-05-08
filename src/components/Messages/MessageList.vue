<script setup>
import MessageSon from './MessageSon.vue';
import { toRefs } from 'vue';
var props=defineProps(['messages'])
var {messages}=toRefs(props)
</script>

<script>

export default {
  data() {
    return {
      
    }
  },
  components:{
   
  },
  methods:{

  },
  props:[]
}
</script>

<template>
    <div>
        <MessageSon class="my-5" v-for="message in messages" :key="message.title" :message="message"></MessageSon>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

