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
// 城市列表拼音
import pinyin from 'js-pinyin'

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  pinyin,
  render: (h) => h(App)
}).$mount('#app')
