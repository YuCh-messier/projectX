import { createApp } from 'vue'
import Header from '../components/Headers/Header.vue'
import Footer from '../components/Footers/Footer.vue'
import { standardInfo } from './publicFunctions';

createApp(Header,{user:standardInfo}).mount('#header')
createApp(Footer).mount('#footer')

