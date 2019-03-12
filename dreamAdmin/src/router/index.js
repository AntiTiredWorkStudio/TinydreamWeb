import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import DreamPool from '@/components/DreamPool'
import Shenhe from '@/components/Shenhe'
import Access from '@/components/Access'
import Ord from '@/components/Ord'
import Photo from '@/components/Photo'
import R_tuikuan from '@/components/R_tuikuan'
import Statis from '@/components/Statis'
import Redpack from '@/components/Redpack'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index/:title/:state',
      name: 'Index',
      component: Index
    },
    {
      path:'/dreamPool/:title',
      name:'dreamPool',
      component: DreamPool
    },
    {
      path:'/shenhe/:title',
      name:'shenhe',
      component: Shenhe
    },
    {
        path:'/access/:title',
        name:'access',
        component: Access
    },
    {
      path:'/ord/:title',
      name:'ord',
      component: Ord
    },
    {
        path:'/photo/:title',
        name:'photo',
        component: Photo
    },
    {
      path:'/rpack/:title',
      name:'tuikuan',
      component: R_tuikuan
    },
    {
      path:'/statis/:title',
      name:'statis',
      component: Statis,
    },
    {
      path:'/redpack/:title',
      name:'redpack',
      component: Redpack
    },
    {
      path:'/:title',
      name:'login',
      component: Login
    }
  ],
  mode:'history'
})
