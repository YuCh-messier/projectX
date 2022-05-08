import { createApp } from 'vue'
import Header from '../components/Headers/Header.vue'
import Footer from '../components/Footers/Footer.vue'
import { checkAccount } from './publicFunctions';

checkAccount((user)=>{
    createApp(Header,{user:{userInfo:user,statu:true}}).mount('#header')
})
createApp(Footer).mount('#footer')

