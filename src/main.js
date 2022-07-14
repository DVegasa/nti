import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

createApp(App)
    .use(ElementPlus)
    .use(store)
    .use(router)
    .mount('#app')
