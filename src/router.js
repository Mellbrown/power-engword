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
    },
    {
      path: '/wordlists',
      name: 'wordlists',
      component: () => import('@/pages/wordlists')
    },
    {
      path: '/newwords',
      name: 'newwords',
      component: () => import('@/pages/newwords')
    }
  ]
})
