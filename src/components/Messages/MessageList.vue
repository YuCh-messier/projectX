<script setup>
import MessageSon from './MessageSon.vue';
import { toRefs } from 'vue';
var props=defineProps(['messages'])
var {messages}=toRefs(props)
</script>

<template>
    <div>
        <MessageSon class="my-5 bg-gray-50" v-for="message in messages" :key="message.title" :message="message"></MessageSon>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

