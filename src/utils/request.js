import axios from 'axios'
import store from '@/store'

const request = axios.create({
  baseURL: 'http://liufusong.top:8080'
  // timeout: 3000
})
// // 在这里添加请求拦截器
// // 在这里我们已经利用axios.create()配置好了一个axios对象，所以在这里必须要给这个新生成的axios对象进行配置请求拦截器
// request.interceptors.request.use(
//   function (config) {
//     // 在发送请求之前做些什么
//     // config ==> 本次请求的配置对对象
//     // console.log(config)
//     // 将store中的容器user从store.state中解构出来
//     // const TOKEN_KEY = 'HAOKE_USER'
//     // const user = JSON.parse(window.localStorage.getItem(TOKEN_KEY))
//     const { user } = store.state
//     // 添加判断，如果用户已经登录并且用户token已经保存就让其添加请求头，否则无效，截断请求
//     if (user && user.token) {
//       config.headers.authorization = user.token
//     }
//     return config
//   },
//   function (err) {
//     // promise.rejectd（） 截断请求
//     return Promise.reject(err)
//   }
// )

// 请求拦截
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    // 拿到token，添加到请求头中
    const { user } = store.state
    if (user && user.token) config.headers.Authorization = user.token
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// // 添加响应拦截器
// request.interceptors.response.use(
//   function (response) {
//     // 对响应数据做点什么
//     const { message, success } = response.data
//     if (success) {
//       message.success(message)
//     } else {
//       message.error(message)
//       return Promise.reject(new Error(message))
//     }
//     return response
//   },
//   function (error) {
//     console.dir(error)
//   }
// )

export default request
