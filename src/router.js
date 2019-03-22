import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/splash')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('@/pages/main')
    }
  ]
})
