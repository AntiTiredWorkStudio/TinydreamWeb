import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PayInfo from './components/index/payInfo/PayInfo'
import Share from './components/index/share/Share'
import PoolInfo from './components/dreampool/poolinfo/PoolInfo'
import Dream from './components/dream/dreams/Dream'
import LuckyInfo from './components/dream/luckinfo/Luckyinfo'
import refesh from './components/refesh'
import User from './views/User'
import Clock from './views/Clock'
import Phone from './components/phone/Phone'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: '/TinydreamWeb/dream/dist/',
  routes: [
    {
      path:'/refesh',
      name:'refesh',
      component:refesh
    },
    {
      path: '/',//首页
      name: 'home',
      components:{
        default:Home
      }
    },
    {
      path:'/user',//个人中心
      name:'user',
      components:{
        user:User
      }
    },
    {
      path:'/clock',
      name:'clock',
      components:{
        clock:Clock
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
      path:'/phone',
      name:'phone',
      components:{
        phone:Phone
      }
    },
    {
      path:'/lucky/:state/:ptitle/:bill/:lid/:title/:content/:did',//幸运梦想详情
      name:'luckyinfo',
      components:{
        luckyinfo:LuckyInfo
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
