import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import Chat from 'vue3-beautiful-chat'

createApp(App)
    .use(ElementPlus)
    .use(store)
    .use(router)
    .use(Chat)
    .mount('#app')
