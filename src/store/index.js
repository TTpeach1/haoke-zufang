import Vue from 'vue'
import Vuex from 'vuex'
// import storage from '@/utils/storage'
import { getToken, setToken } from '@/utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 一个对象，储存了当前登陆用户信息（token等数据）
    // user: null
    // user: JSON.parse(window.localStorage.getItem(TOKEN_KEY))
    // user: storage.get(TOKEN_KEY) || {}
    user: getToken() || {},
    name: ''
  },
  mutations: {
    setUser(state, data) {
      state.user = data
      // 为了防止刷新丢失，我们需要把数据备份到本地存储
      // window.localStorage.setItem(TOKEN_KEY, JSON.stringify(state.user))
      // storage.set(TOKEN_KEY, data)
      setToken(data)
    },
    cunName(state, data) {
      state.name = data
    }
  },
  actions: {},
  modules: {},
  getters: {}
})
