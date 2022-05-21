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
    <div id="ppt" class="flex">
        <div class="w-3/4">
            <div class="img" style="background-size:cover;background-position:center;" :style="'background-image:url('+ppts[0].graph+');'"></div>
        </div>
        <div class="w-1/4">
            <div class="img border" style="background-size:cover;background-position:center;" :style="'background-image:url('+ppts[1].graph+');'"></div>
            <div class="img border" style="background-size:cover;background-position:center;" :style="'background-image:url('+ppts[2].graph+');'"></div>
            <div class="img border" style="background-size:cover;background-position:center;" :style="'background-image:url('+ppts[3].graph+');'"></div>
        </div>
    </div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>
    #ppt{
        display: flex;
    }
    #ppt .img{
        height: 0;
        padding-bottom: 50%;
    }
</style>

