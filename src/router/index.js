import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import search from '@/components/search'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        console.log(savedPosition)
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
  },
  routes: [                                                                 
    {
      path: '/home',
      name: 'home',
      component: home
  },{
    path:'/search',
    name:'search',
    component:search
  }
    // },
    // {
    // 	path:'/pro-router',

    // }
  ]
})
