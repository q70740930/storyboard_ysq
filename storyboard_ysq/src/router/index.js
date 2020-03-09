import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/home.vue'
import Code from '@/views/Code/code.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/code',
    name: 'code',
    component: Code
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
