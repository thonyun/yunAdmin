import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import svgIcon from '@/components/svg/index'
import './assets/css/main.less'

// 引入echarts
import echarts from '@/util/echarts'

// 引入Element-Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// 引入Element-Plus图标
import * as ElementPlusIconVue from '@element-plus/icons-vue'

const app = createApp(App)

// 注册Element-Plus 图标实例
for (const [key, component] of Object.entries(ElementPlusIconVue)) {
    app.component(key, component)
}

// 挂载到实例上
// app.config.globalProperties.$echarts = echarts
// 第二种方式 vue3采用provide,inject方式使用
app.provide('$echarts', echarts)

// 挂载Element-Plus, 使用国际化, 设置图标尺寸以及弹窗层级
app.use(ElementPlus, {
    zIndex: 3000,
    locale: zhCn
})

app.component('svg-icon', svgIcon)
app.use(store).use(router).mount('#app')
