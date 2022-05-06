<script setup>
import RecruitHeader from './RecruitContents/RecruitHeader.vue';
import SpeRecruitContent from './RecruitContents/SpeRecruitContent.vue';
import CompanyContent from './CompanyContents/CompanyContent.vue';
import Maps from './Maps/Map.vue'
var headerInfo={
    affairId:1,
    title:'飞书前端实习生招聘',
    taps:'互联网|前端|实习',
    address:'光谷软件园',
    workDays:'4天',
    salary:'400-500'
}
var speRecruitInfo={
    content:`
    职位描述：
1. 负责MMC买家链路业务产品（导购交易营销结算等）相关的架构设计与开发；
2. 从用户和技术出发，实现面向未来的系统规划、设计和落地；
3. 技术预研和技术难点攻关，保障系统可用性、稳定性、和可扩展性。
职位要求：
1. Java基础扎实，理解io、多线程、集合等基础框架，对JVM原理有一定的了解；
2. 对于你用过的开源框架，能了解到它的原理和机制；对Spring、ibatis开源框架熟悉；
3. 掌握多线程及高性能的设计与编码及性能调优；有高并发应用开发经验；
4. 对技术有浓厚兴趣，学习能力强，适应能力好，抗压能力强；
5.具备较强的业务理解及业务抽象能力，能理解数据，分析数据，挖掘商业本质
6. 有强烈的技术热情和钻研精神，热爱新技术；有独立、主动的学习习惯和良好的沟通表达、团队协作能力
7. 激情，有创业经历和主导平台型产品研发经验者优先"
我们鼓励人人践行公益，同学如参与过公益活动，有相关证明，也欢迎附在简历中。参考依据包括但不限于：全国志愿服务信息系统开具的志愿服务证明、“人人3小时”公益平台公益时证书、志愿服务组织（含社会团体、社会服务机构、基金会）授予的志愿服务证明等。
    `
}
var companyInfo={
    companyTaps:'互联网|前端|实习',
    companyName:'字节跳动',
    companyContent:`
    北京字节跳动科技有限公司，简称字节跳动，是一家位于中国北京的跨国互联网技术公司[2]，成立于2012年3月，旗下有产品今日头条和抖音（及其海外版本TikTok）、西瓜视频等。

至2018年，字节跳动的移动应用月度用户超过十亿人，估值750亿美元，超越Uber成为全球最有价值的创业公司[3]。截至2019年7月，字节跳动的产品和服务已覆盖全球150个国家和地区、75个语种，曾在40多个国家和地区位居应用商店总榜前列[4]。
    `,
    companyGraph:'',
}
</script>

<script>

export default {
  data() {
    return {
       
    }
  },
  methods:{

  },
  components:{
   
  },
  props:[]
}
</script>

<template>
<div class="container mx-auto" >
    <div class="mb-6 xl:px-10"><RecruitHeader :headerinfo="headerInfo"></RecruitHeader></div>
    <div class="flex gap-x-5 2xl:px-48 xl:px-24">
        <div class="w-3/5 mb-10"><SpeRecruitContent :sperecruitinfo="speRecruitInfo"></SpeRecruitContent></div>
        <div class="w-2/5"><CompanyContent :companyinfo="companyInfo"></CompanyContent></div>
    </div>
    <div class="w-fit mx-auto mt-6 font-bold text-xl">实习地点</div>
    <div class="w-fit mx-auto textSm mt-2">武汉市光谷软件园XX大厦</div>
    <div class="2xl:px-48 xl:px-24"><Maps></Maps></div>
</div>
</template>

<style src="../assets/public.css"></style>
<style scoped>

</style>

