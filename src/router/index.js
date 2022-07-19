import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入组件
import Login from '@/views/login'
import Layout from '@/views/layout'
import Find from '@/views/find'
import My from '@/views/my'
import News from '@/views/news'
import Home from '@/views/home'
import MyCollection from '@/views/myCollection'
import MyHome from '@/views/myHome'
import City from '@/views/city'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout/home'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/myhome',
    component: MyHome
  },
  {
    path: '/mycollection',
    component: MyCollection
  },
  {
    path: '/city',
    component: City
  },
  {
    path: '/layout',
    component: Layout,
    children: [
      {
        path: 'find',
        component: Find
      },
      {
        path: 'my',
        component: My
      },
      {
        path: 'news',
        component: News
      },
      {
        path: 'home',
        component: Home
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
