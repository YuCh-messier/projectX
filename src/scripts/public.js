import { createApp } from 'vue'
import Header from '../components/Headers/Header.vue'
import Footer from '../components/Footers/Footer.vue'
import { checkAccount } from './publicFunctions';
var user=checkAccount()


createApp(Header,{user:user}).mount('#header')
createApp(Footer).mount('#footer')

