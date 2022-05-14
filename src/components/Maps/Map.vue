<script setup>
import { onMounted } from 'vue';
var mapInfo=JSON.parse(sessionStorage.getItem('mapinfo'))
onMounted(
    ()=>{
        var width=document.body.clientWidth
        if(width>700){
            var opts = {
                width: 250,     // 信息窗口宽度
                height: 100,    // 信息窗口高度
                title: "位置"  // 信息窗口标题
            }
        }
        else{
            var opts = {
            width: 20,     // 信息窗口宽度
            height: 5,    // 信息窗口高度
            title: "位置"  // 信息窗口标题
        }
        }
        var map = new BMapGL.Map("map");
        // 创建地图实例 
        var point = new BMapGL.Point(mapInfo.coordinate[0],mapInfo.coordinate[1]);
        // 创建点坐标 
        map.centerAndZoom(point, 15);
        map.enableScrollWheelZoom(true); 
        // 初始化地图，设置中心点坐标和地图级别 

        var infoWindow = new BMapGL.InfoWindow(mapInfo.address, opts);  // 创建信息窗口对象
        map.openInfoWindow(infoWindow, map.getCenter());        // 打开信息窗口
    }
)
</script>

<template>
<div id="map" class="bg-gray-200 my-8 mx-auto" style="width:100%;height:0;padding-bottom:50%;">
{{mapInfo}}
</div>
</template>

<style src="../../assets/public.css"></style>
<style scoped>

</style>

