<script setup>
import { toRefs } from 'vue';
import { host } from '../../scripts/publicFunctions';
var props=defineProps(['ppts'])
var {ppts}=toRefs(props)

function goto(href){
    window.location=href
}
</script>

<template>
    <div id="ppt" class="gap-5 m-5">
        <div style="grid-area: a;" class="bg-pink-200"><img class="picFullMode" :src="ppts[0].graph" alt="" @click="goto(ppts[0].url)"/></div>
        <div style="grid-area: b;" class="bg-pink-200"><img class="picFullMode" :src="ppts[1].graph" alt="" @click="goto(ppts[1].url)"/></div>
        <div style="grid-area: c;" class="bg-pink-200"><img class="picFullMode" :src="ppts[2].graph" alt="" @click="goto(ppts[2].url)"/></div>
        <div style="grid-area: d;" class="bg-pink-200"><img class="picFullMode" :src="ppts[3].graph" alt="" @click="goto(ppts[3].url)"/></div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>
    #ppt{
        display: grid;
        grid-template-areas:    'a a b'
                                'a a c'
                                'a a d';
        grid-template-columns: 3fr 3fr 2fr;
        grid-template-rows: auto;
    }
    #ppt img{
        height: 0;
        padding-bottom: 50%;
    }
</style>

