import { createApp } from 'vue'
// 全局导入
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './common/reset.css'
import App from './App.vue'
import { createPinia } from "pinia"

const app = createApp(App)

import router from "./router"
app.use(router)
app.use(createPinia())

app.mount('#app')
