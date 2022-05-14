import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path' 

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    host:'0.0.0.0'
  },
  root: './src/',
  base: '/',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      input: {
        recruits: resolve(__dirname, 'src/pages/recruits.html'),
        speRecruit: resolve(__dirname, 'src/pages/speRecruit.html'),
        recommend: resolve(__dirname, 'src/pages/recommend.html'),
        userSetting: resolve(__dirname, 'src/pages/userSetting.html'),
        userSettingMobile: resolve(__dirname, 'src/pages/userSettingMobile.html'),
        mySpeRecruit: resolve(__dirname, 'src/pages/mySpeRecruit.html'),
        myRecruits: resolve(__dirname, 'src/pages/myRecruits.html'),
        speRecommend: resolve(__dirname,  'src/pages/speRecommend.html'),
        singleForm: resolve(__dirname,  'src/pages/singleForm.html'),
        collects: resolve(__dirname,  'src/pages/mobileSettingPages/collects.html'),
        resume: resolve(__dirname,  'src/pages/mobileSettingPages/resume.html'),
      }
    }
  }
})
