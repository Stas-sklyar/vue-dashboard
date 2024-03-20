import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import store from '@/store/index.js'
import directives from '@/directives/index.js'


const app = createApp(App)

app.use(router)
app.use(Antd)
app.use(store)
Object.keys(directives).forEach((key) => {
  app.directive(key, directives[key])
})

app.mount('#app')
