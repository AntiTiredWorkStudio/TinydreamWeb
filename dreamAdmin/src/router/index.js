import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Time from '@/components/Time'
import Release from '@/components/Release'
import Tongji from '@/components/Tongji'
import Ord from '@/components/Ord'
import Photo from '@/components/Photo'
import Refund from '@/components/Refund'
import Redpack from '@/components/Redpack'
import Audit from '@/components/Audit'

Vue.use(Router)

export default new Router({
  // linkActiveClass:'active',
  routes: [
    {
      path:'/',
      name:'local_time',
      component: Time
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/release',
      name: 'release',
      component: Release
    },
    {
      path:'/tongji',
      name:'tongji',
      component: Tongji
    },
    {
      path:'/ord',
      name:'ord',
      component: Ord
    },
    {
      path:'/photo',
      name:'photo',
      component: Photo
    },
    {
      path:'/refund',
      name:'refund',
      component: Refund
    },
    {
      path:'/redpack',
      name:'redpack',
      component: Redpack
    },
    {
      path:'/audit',
      name:'audit',
      component: Audit
    }
  ],
  mode: 'history',
  linkActiveClass: "active",
})
