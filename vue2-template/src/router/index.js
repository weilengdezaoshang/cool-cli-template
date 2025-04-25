/*
 * @Author: chenGuoFeng chenguofeng@xk.design
 * @Date: 2025-04-06 12:38:34
 * @LastEditors: chenGuoFeng chenguofeng@xk.design
 * @LastEditTime: 2025-04-12 23:31:53
 * @FilePath: /cool-cli-template/vue2-template/src/router/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // 路由懒加载
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router 