webpackJsonp([3],{"/jtc":function(t,a){},"97dx":function(t,a){},JKiR:function(t,a){},MTyd:function(t,a,n){"use strict";var e=n("VU/8")({name:"tabbar",data:{tabbar:[{title:"参与互助",normal:"http://tdream.antit.top/image/nav_index_disable.png",active:"http://tdream.antit.top/image/nav_index.png",url:"http://tinydream.ivkcld.cn/TinydreamWeb/index.html"},{title:"行动打卡",normal:"https://tdream.antit.top/ActiveSignInOff.png",active:"https://tdream.antit.top/ActiveSignInOk.png",url:"http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/clock.html"},{title:"个人中心",normal:"http://tdream.antit.top/image/nav_owner_disable.png",active:"http://tdream.antit.top/image/nav_owner.png",url:"http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/user.html"}]}},null,!1,null,null,null);a.a=e.exports},NAlg:function(t,a){},RUOb:function(t,a){},TdMt:function(t,a){},VbU8:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});n("RgoE");var e=n("0KWt"),s=(n("1E9F"),n("2Ux5")),i=(n("eqfM"),n("/QYm")),c=(n("JRZP"),n("LK01")),o=(n("ZuV/"),n("37Xn")),r=(n("3Lne"),n("SSsa")),l=(n("mMXg"),n("qYlo")),u=(n("k3b4"),n("+2ln")),d=(n("XmAh"),n("il3B")),p=(n("MY4N"),n("0zAV")),v=n("7+uW"),m={name:"payInfo",data:function(){return{actives:1,tabbar:"",contracts:"",show:!1,payCancel:!1,cid:"",desc:"",title:"",contractType:"",price:"",day:"",warm:"",status:null,theme:"",isshow:!1,custom:"",value:"",cattention:"",feedback:"",order:"",orders:"",cPerson:"",cAttendence:""}},created:function(){Options.TestServer=!1,console.log(this),this.list(this),this.Orders(this)},methods:{buy:function(t){this.show=!0,this.ContractInfo(this,t)},conType:function(t,a,n){this.status=t,12!=t?this.theme=this.contractType[t].title:(this.isshow=!0,$(".banner").css("background","rgba(0,0,0,.5) url(undefined)"),$("#theme.van-field__control").focus())},removeArray:function(t,a){for(var n=0;n<t.length;n++)if(t[n]==a){t.splice(n,1);break}},close:function(){this.status=null,this.show=!1,this.payCancel=!0},pay:function(t){if(""==this.theme)this.$dialog.alert({title:"温馨提示",message:"亲~目标才是坚持行动的动力，选择一个行动主题作为坚持目标吧！"}).then(function(){});else{var a=this.theme;console.log(a),this.wxpay(this,t,a)}},list:function(t){t.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"列表获取中..."}),TD_Request("co","list",{},function(a,n){console.log(n),t.contractType=n.themes,t.contracts=n.contracts,t.cattention=n.cattention,t.$toast.clear()},function(a,n){t.$toast.clear(),alert(n.context)})},ContractInfo:function(t,a){t.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"信息获取中..."}),TD_Request("co","info",{cid:a},function(n,e){console.log(e),t.title=e.contract.title,t.desc=e.contract.description,t.price=e.contract.price/100,t.cid=e.contract.cid,"CO0000000001"==a?$("#warm").html(t.cattention.CO0000000001).css({"font-size":"0.26rem",color:"#999"}):"CO0000000002"==a&&$("#warm").html(t.cattention.CO0000000002).css({"font-size":"0.26rem",color:"#999"}),t.$toast.clear()},function(a,n){t.$toast.clear(),alert(n.context)})},wxpay:function(t,a,n){t.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"准备中..."}),TD_Request("op","joi",{cid:a,uid:Options.GetUserInfo().openid},function(e,s){console.log(s),t.$toast.clear(),t.wxpayweb(t,s.pay,s.order.oid,a,n)},function(a,n){t.$toast.clear(),81==a?t.$dialog.alert({title:"错误提示",message:"合约ID有误，请联系客服进行处理"}).then(function(){window.location.href="cach.html?time="+(new Date).getTime()}):82==a?t.$dialog.alert({title:"温馨提示",message:"您的合约正在进行中"}).then(function(){}):11==a?t.$dialog.alert({title:"温馨提示",message:"绑定手机后才可以购买合约哦！"}).then(function(){window.location.href="../../../html/phoneManage.html?time="+(new Date).getTime()}):58==a&&t.$dialog.confirm({title:"错误提示",message:"订单错误，如连续出现此错误，请联系客服小姐姐进行处理哦！"}).then(function(){window.location.href="../../../html/cach.html?time="+(new Date).getTime()}).catch(function(){}),console.log(n)})},wxpayweb:function(t,a,n,e,s){t.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"支付中..."}),WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:a.appId,timeStamp:a.timeStamp,nonceStr:a.nonceStr,package:a.package,signType:a.signType,paySign:a.paySign},function(a){"get_brand_wcpay_request:ok"==a.err_msg?t.paySuccess(e,n,Options.GetUserInfo().openid,s):"get_brand_wcpay_request:cancel"==a.err_msg&&t.$toast.fail("支付取消")})},paySuccess:function(t,a,n,e){TD_Request("op","jof",{cid:t,oid:a,uid:n,theme:e},function(t,a){window.location.href="actionClock.html?time="+(new Date).getTime()},function(t,a){alert(t)})},againPay:function(){this.payCancel=!1,this.show=!0},confirm:function(){$(".banner").css("background","url(https://tdream.antit.top/ActiveContractBanner.jpg) no-repeat center center / 7.5rem 2.3rem"),""==this.value?(this.custom="其他",this.theme="",this.status="undefined"):(this.custom=this.value,this.theme=this.value)},cancel:function(){$(".banner").css("background","url(https://tdream.antit.top/ActiveContractBanner.jpg) no-repeat center center / 7.5rem 2.3rem"),this.custom="其他",this.theme="",this.status=null},callMe:function(){window.location.href="../../../html/cach.html?time="+(new Date).getTime()},Orders:function(t){TD_Request("op","eomp",{uid:Options.GetUserInfo().openid},function(a,n){if(console.log(n),console.log(t.feedback),0==n.orders.length)return $(".info").hide(),void $(".time").html("暂无人购买合约");t.feedback=n.feedback;var e=n.orders.shift();t.cPerson=n.cPerson,t.cAttendence=n.cAttendence,t.order=e,n.orders.push(e),t.orders=n.orders,t.loop(t),console.log(n.orders)},function(t,a){console.log(a)})},loop:function(t){setInterval(function(){var a=t.orders.shift();t.order=a,t.orders.push(a)},3e3)}},watch:{value:function(t){t.length>=8&&(this.value=t.substr(0,8),console.log(this.value))}}},f={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"payInfo"},[n("div",{staticClass:"clockIn"},[n("van-col",{attrs:{span:"24"}},[n("div",{staticClass:"banner"},[n("p",[t._v("已成功帮助"+t._s(""==t.cPerson?"--":t.cPerson)+"位追梦人，坚持行动"+t._s(""==t.cAttendence?"--":t.cAttendence)+"次！")])])]),t._v(" "),n("van-col",{staticStyle:{background:"#fff","margin-top":"0.3rem"},attrs:{span:"24"}},[n("div",{staticClass:"screen"},[n("span",{staticClass:"circle"},[t._v("·")]),t._v(" "),n("span",{staticClass:"info"},[t._v(t._s(""==t.order?"--":t.order.nickname)+"支付"+t._s(""==t.order?"--":t.order.bill/100)+"元合约")]),t._v(" "),n("span",{staticClass:"time"},[t._v("刚刚")])])]),t._v(" "),n("van-col",{staticClass:"contract",attrs:{span:"24"}},[n("div",{staticClass:"main"},[n("van-col",{attrs:{span:"24"}},[n("div",{staticClass:"day-100",on:{click:function(a){return a.stopPropagation(),t.buy(t.contracts[1].cid)}}},[n("h3",{staticClass:"title"},[t._v(t._s(""==t.contracts?"--":t.contracts[1].title))]),t._v(" "),n("p",{staticClass:"desc"},[t._v("\n                            "+t._s(""==t.contracts?"--":t.contracts[1].description)+"\n                        ")]),t._v(" "),n("van-button",{staticClass:"buy",attrs:{round:"",size:"small",type:"primary"},on:{click:function(a){return a.stopPropagation(),t.buy(t.contracts[1].cid)}}},[t._v("立即购买")])],1)]),t._v(" "),n("van-col",{attrs:{span:"24"}},[n("div",{staticClass:"day-21",on:{click:function(a){return a.stopPropagation(),t.buy(t.contracts[0].cid)}}},[n("h3",{staticClass:"title right"},[t._v(t._s(""==t.contracts?"--":t.contracts[0].title))]),t._v(" "),n("p",{staticClass:"desc right"},[t._v("\n                            "+t._s(""==t.contracts?"--":t.contracts[0].description)+"\n                        ")]),t._v(" "),n("van-col",{staticStyle:{"text-align":"right"},attrs:{span:"24"}},[n("van-button",{staticClass:"buy right",attrs:{round:"",size:"small",type:"primary"},on:{click:function(a){return a.stopPropagation(),t.buy(t.contracts[0].cid)}}},[t._v("立即购买")])],1)],1)])],1)]),t._v(" "),n("van-col",{staticClass:"model",staticStyle:{width:"6.8rem",margin:"0 0 0 0.3rem"}},[n("span"),t._v(" "),n("h3",{staticClass:"title"},[t._v("用户反馈")])]),t._v(" "),n("van-col",{staticClass:"feedback",attrs:{span:"24"}},t._l(t.feedback,function(a,e){return n("van-row",{key:e,staticClass:"feed_main"},[n("van-col",{attrs:{span:"5"}},[n("div",{staticClass:"head"},[n("van-icon",{attrs:{name:a.headicon}})],1)]),t._v(" "),n("van-col",{attrs:{span:"19"}},[n("h3",{staticClass:"type"},[t._v(t._s(a.title)),n("span",{staticClass:"nickname"},[t._v(t._s(a.username))])]),t._v(" "),n("p",{staticClass:"message"},[t._v("\n                        "+t._s(a.content)+"\n                    ")])])],1)}),1),t._v(" "),n("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[n("div",{staticClass:"popup"},[n("van-col",{staticClass:"title_big",attrs:{span:"24"}},[n("van-icon",{attrs:{name:"cross"},on:{click:t.close}}),t._v(" "),n("span",{staticClass:"title"},[t._v(t._s(""==t.title?"--":t.title))])],1),t._v(" "),n("van-col",{staticClass:"bill",attrs:{span:"24"}},[n("span",{staticClass:"unit"},[t._v("￥")]),t._v(" "),n("span",{staticClass:"bill_num"},[t._v(t._s(""==t.price?"--":t.price))])]),t._v(" "),n("van-col",{staticClass:"tip",attrs:{span:"24"}},[n("p",{staticClass:"tip_txt"},[t._v("支付"+t._s(""==t.desc?"--":t.desc))])]),t._v(" "),n("van-col",{staticClass:"main_title",attrs:{span:"24"}},[n("p",{staticClass:"main_tit_txt"},[t._v("选择行动主题:")])]),t._v(" "),n("van-col",{staticClass:"clock_type",attrs:{span:"24"}},[n("ul",[t._l(t.contractType,function(a,e){return n("li",{key:e,staticClass:"contract",class:e==t.status?"active":"",on:{click:function(n){return n.stopPropagation(),t.conType(e,a.check,a.title)}}},[n("van-icon",{attrs:{name:e==t.status?a.active:a.normal}}),t._v(" "),n("span",{staticClass:"cont_title"},[t._v(t._s(""==t.contractType?"--":a.title))])],1)}),t._v(" "),n("li",{staticClass:"contract",class:12==t.status?"active":"",staticStyle:{width:"100%"},on:{click:function(a){return t.conType(12)}}},[n("van-icon",{attrs:{name:12==t.status?"https://tdream.antit.top/5drinkingIA.png":"https://tdream.antit.top/5drinkingIU.png"}}),t._v(" "),n("span",{staticClass:"cont_title"},[t._v(t._s(12==t.status?t.custom:"其他"))])],1)],2),t._v(" "),n("van-dialog",{attrs:{title:"自定义主题(8字以内)","show-cancel-button":""},on:{confirm:t.confirm,cancel:t.cancel},model:{value:t.isshow,callback:function(a){t.isshow=a},expression:"isshow"}},[n("van-field",{attrs:{id:"theme",placeholder:"请输入主题"},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1)],1),t._v(" "),n("van-col",{staticClass:"warm",attrs:{span:"24"}},[n("p",{staticClass:"warning"},[t._v("注意事项:")])]),t._v(" "),n("van-col",{attrs:{span:"24",id:"warm"}}),t._v(" "),n("van-col",{staticClass:"btn",attrs:{span:"24"}},[n("van-button",{attrs:{type:"primary",round:"",size:"normal"},on:{click:function(a){return t.pay(t.cid)}}},[t._v("立即支付")])],1)],1)]),t._v(" "),n("van-popup",{staticClass:"contrace",model:{value:t.payCancel,callback:function(a){t.payCancel=a},expression:"payCancel"}},[n("div",{staticClass:"paycancel"},[n("div",{staticClass:"main"},[n("div",{staticClass:"avatar"}),t._v(" "),n("div",{staticClass:"text"},[n("div",{staticClass:"container"},[n("p",[t._v("追梦行动达人")])])])]),t._v(" "),n("div",{staticClass:"btn"},[n("div",{staticClass:"left"},[n("van-button",{staticClass:"callMe",attrs:{round:""},on:{click:t.callMe}},[t._v("和她聊聊")])],1),t._v(" "),n("div",{staticClass:"right"},[n("van-button",{staticClass:"againPay",attrs:{round:""},on:{click:t.againPay}},[t._v("重新支付")])],1)])]),t._v(" "),n("div",{staticClass:"icon",staticStyle:{"text-align":"center","font-size":"0.88rem","margin-top":"0.6rem"}},[n("van-icon",{attrs:{name:"https://tdream.antit.top/DaKaOKX.png"},on:{click:function(a){t.payCancel=!1}}})],1)])],1)])},staticRenderFns:[]};var h=n("VU/8")(m,f,!1,function(t){n("TdMt")},"data-v-8718b668",null).exports,g=n("MTyd"),_={name:"App",data:function(){return{actives:1,ispay:!1,userInfo:"",tabbar:"",contracts:"",show:!1,payCancel:!1,cid:"",desc:"",title:"",contractType:"",price:"",day:"",warm:"",status:null,theme:"",isshow:!1,custom:"",value:"",cattention:"",feedback:"",order:"",orders:"",cPerson:"",cAttendence:""}},components:{payInfo:h},created:function(){this.tabbar=g.a.data.tabbar,this.GetUserInfo(this)},methods:{GetUserInfo:function(t){t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"信息拉取中..."}),WebApp.Init("wxc5216d15dd321ac5",function(a,n){console.log(Options.GetUserInfo()),t.userInfo=Options.GetUserInfo(),Options.TestServer=!1,t.$toast.clear(),t.Register(t)})},Register:function(t){t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"信息注册中..."}),TD_Request("us","enter",{uid:t.userInfo.openid,nickname:t.userInfo.nickname,headicon:t.userInfo.headimgurl},function(a,n){console.log(n),WebApp.JSAPI.InitShare({title:t.userInfo.nickname+"已加入追梦行动派",desc:"有梦就行动，坚持返现金！",link:"http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/clock.html?time="+(new Date).getTime(),imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"}),t.$toast.clear(),t.Orders(t,t.userInfo.openid)},function(a,n){console.log(n),t.$toast.clear()})},Orders:function(t,a){this.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"数据加载中..."}),TD_Request("op","eomp",{uid:a},function(a,n){t.ispay=!0,console.log(n),t.feedback=n.feedback;var e=n.orders.shift();t.cPerson=n.cPerson,t.cAttendence=n.cAttendence,t.order=e,n.orders.push(e),t.orders=n.orders,t.$toast.clear(),t.loop(t),console.log(n.orders)},function(a,n){console.log(n),t.$toast.clear(),82==a&&(window.location.href="actionClock.html?time="+(new Date).getTime())})},loop:function(t){setInterval(function(){var a=t.orders.shift();t.order=a,t.orders.push(a)},3e3)}}},b={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"clock"},[t.ispay?n("pay-info",{attrs:{feed:t.feedback}}):t._e(),t._v(" "),n("van-tabbar",{attrs:{"active-color":"#00d094"},model:{value:t.actives,callback:function(a){t.actives=a},expression:"actives"}},t._l(t.tabbar,function(a,e){return n("van-tabbar-item",{key:e,attrs:{url:a.url},scopedSlots:t._u([{key:"icon",fn:function(t){return n("img",{attrs:{src:t.active?a.active:a.normal}})}}],null,!0)},[n("span",[t._v(t._s(a.title))])])}),1)],1)},staticRenderFns:[]};var y=n("VU/8")(_,b,!1,function(t){n("/jtc")},"data-v-b263abf0",null).exports,C=n("iA4B");v.a.component(C.ProgressBar.name,C.ProgressBar),v.a.use(e.a).use(s.a).use(i.a).use(c.a).use(o.a).use(r.a).use(l.a).use(u.a).use(d.a).use(p.a),v.a.config.productionTip=!1,new v.a({el:"#app",components:{App:y},template:"<App/>"})},eh36:function(t,a){},hW8u:function(t,a){},nsZj:function(t,a){},px3J:function(t,a){},sKgQ:function(t,a){}},["VbU8"]);
//# sourceMappingURL=clock.482f1208e7ad853ef3d1.js.map