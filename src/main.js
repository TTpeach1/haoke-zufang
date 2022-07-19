import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入icon样式
import '@/assets/font/iconfont.css'
// 引入vant
import Vant from 'vant'
import 'vant/lib/index.css'
// rem配置
import 'amfe-flexible'

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
