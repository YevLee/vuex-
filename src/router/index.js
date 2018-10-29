import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: resolve=>require(['../views/home'],resolve)
    },
     {
      path: '/login',
      name: 'Login',
      component: resolve=>require(['../views/login'],resolve)
    },
     {
      path: '/center',
      name: 'Center',
      component: resolve=>require(['../views/center'],resolve)
    }
  ]
})
