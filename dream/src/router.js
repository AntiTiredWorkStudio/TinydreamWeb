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
import Auth from './components/auth/Auth'
import Help from './components/dream/dreamHelp/DreamHelp'
import Fill from './components/fill/Fill'
import List from './components/list/List'
import Friend from './components/friend/Friend'
import Pay from './components/pay/Pay'
import Cach from './components/cach/Cach'
import Question from './components/question/Question'
import Notice from './components/notice/Notice'
import History from './components/index/history/History'
import HistoryInfo from './components/index/history/HistoryInfo'
import Tool from './components/tool/Tool'
import Trade from './components/index/trade/TradeInfo'
import Agree from './components/agreement/Agree'

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
      path:'/trade/:id/:pid',
      name:'tradeinfo',
      components:{
        tradeinfo:Trade
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
      path:'/agree',
      name:'agree',
      components:{
        agree:Agree
      }
    },
    {
      path:'/dreampool',//梦想池列表
      name:'help',
      components:{
        help:Help
      }
    },
    {
      path:'/clock',//打卡
      name:'clock',
      components:{
        clock:Clock
      }
    },
    {
      path:'/fill/:opid/:state',//补卡
      name:'fill',
      components:{
        fill:Fill
      }
    },
    {
      path:'/list/:type',//合约记录
      name:'list',
      components:{
        list:List
      }
    },
    {
      path:'/notice',
      name:'notice',
      components:{
        notice:Notice
      }
    },
    {
      path:'/tool',
      name:'tool',
      components:{
        tool:Tool
      }
    },
    {
      path:'/record',
      name:'payRecord',
      components:{
        payRecord:Pay
      }
    },
    {
      path:'/friend',
      name:'friend',
      components:{
        friend:Friend
      }
    },
    {
      path:'/question',
      name:'question',
      components:{
        question:Question
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
      path:'/phone',//绑定手机
      name:'phone',
      components:{
        phone:Phone
      }
    },
    {
      path:'/cach',
      name:'cach',
      components:{
        cach:Cach
      }
    },
    {
      path:'/auth',
      name:'auth',
      components:{
        auth:Auth
      }
    },
    {
      path:'/history',
      name:'history',
      components:{
        history:History
      }
    },
    {
      path:'/historyinfo',
      name:'historyinfo',
      components:{
        historyinfo:HistoryInfo
      }
    },
    {
      path:'/lucky/:state/:ptitle/:bill/:lid/:title/:content/:did/:payment',//幸运梦想详情
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
