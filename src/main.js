import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
import ElementPlus from 'element-plus'
import zhTw from 'element-plus/es/locale/lang/zh-tw'
import 'dayjs/locale/zh-tw'

app.use(createPinia())
app.use(router)

app.use(ElementPlus, {
  locale: zhTw
})
app.mount('#app')
