import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PayInfo from './components/index/payInfo/PayInfo'
import Share from './components/index/share/Share'
import PoolInfo from './components/dreampool/poolinfo/PoolInfo'
import Dream from './components/dream/dreams/Dream'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: '/TinydreamWeb/dream/dist/',
  routes: [
    {
      path: '/',//首页
      name: 'home',
      components:{
        default:Home
      }
    },
    {
      path:'/dream',//小梦想
      name:'dream',
      components:{
        dream:Dream
      }
    },
    {
      path:'/payinfo',//支付
      name:'payInfo',
      components:{
        payInfo:PayInfo
      }
    },
    {
      path:'/share/:pid/:did/:type',//分享
      name:'share',
      components:{
        share:Share
      }
    },
    {
      path:'/pinfo',
      name:'poolinfo',
      components:{
        poolinfo:PoolInfo
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
