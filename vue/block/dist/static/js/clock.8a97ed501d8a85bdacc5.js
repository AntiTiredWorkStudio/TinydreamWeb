webpackJsonp([3],{"97dx":function(t,a){},JKiR:function(t,a){},MTyd:function(t,a,e){"use strict";var n=e("VU/8")({name:"tabbar",data:{tabbar:[{title:"梦想互助",normal:"http://tdream.antit.top/image/nav_index_disable.png",active:"http://tdream.antit.top/image/nav_index.png",url:"http://tinydream.ivkcld.cn/TinydreamWeb/index.html"},{title:"行动打卡",normal:"https://tdream.antit.top/ActiveSignInOff.png",active:"https://tdream.antit.top/ActiveSignInOk.png",url:"http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/clock.html"},{title:"个人中心",normal:"http://tdream.antit.top/image/nav_owner_disable.png",active:"http://tdream.antit.top/image/nav_owner.png",url:"http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/user.html"}]}},null,!1,null,null,null);a.a=n.exports},NAlg:function(t,a){},RUOb:function(t,a){},VbU8:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});e("RgoE");var n=e("0KWt"),s=(e("1E9F"),e("2Ux5")),i=(e("eqfM"),e("/QYm")),c=(e("JRZP"),e("LK01")),o=(e("ZuV/"),e("37Xn")),r=(e("3Lne"),e("SSsa")),l=(e("mMXg"),e("qYlo")),d=(e("k3b4"),e("+2ln")),u=(e("XmAh"),e("il3B")),p=(e("MY4N"),e("0zAV")),v=e("7+uW"),m={name:"payInfo",data:function(){return{actives:1,tabbar:"",contracts:"",show:!1,payCancel:!1,cid:"",desc:"",title:"",contractType:"",price:"",day:"",warm:"",status:null,theme:"",isshow:!1,custom:"",value:"",cattention:"",feedback:"",order:"",orders:"",cPerson:"",cAttendence:""}},created:function(){Options.TestServer=!1,console.log(this),this.list(this),this.Orders(this)},methods:{buy:function(t){this.show=!0,this.ContractInfo(this,t)},conType:function(t,a,e){this.status=t,12!=t?this.theme=this.contractType[t].title:(this.isshow=!0,$(".banner").css("background","rgba(0,0,0,.5) url(undefined)"),$("#theme.van-field__control").focus())},removeArray:function(t,a){for(var e=0;e<t.length;e++)if(t[e]==a){t.splice(e,1);break}},close:function(){this.status=null,this.show=!1,this.payCancel=!0},pay:function(t){if(""==this.theme)this.$dialog.alert({title:"温馨提示",message:"亲~目标才是坚持行动的动力，选择一个行动主题作为坚持目标吧！"}).then(function(){});else{var a=this.theme;console.log(a),this.wxpay(this,t,a)}},list:function(t){t.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"列表获取中..."}),TD_Request("co","list",{},function(a,e){console.log(e),t.contractType=e.themes,t.contracts=e.contracts,t.cattention=e.cattention,t.$toast.clear()},function(a,e){t.$toast.clear(),alert(e.context)})},ContractInfo:function(t,a){t.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"信息获取中..."}),TD_Request("co","info",{cid:a},function(e,n){console.log(n),t.title=n.contract.title,t.desc=n.contract.description,t.price=n.contract.price/100,t.cid=n.contract.cid,"CO0000000001"==a?$("#warm").html(t.cattention.CO0000000001).css({"font-size":"0.26rem",color:"#999"}):"CO0000000002"==a&&$("#warm").html(t.cattention.CO0000000002).css({"font-size":"0.26rem",color:"#999"}),t.$toast.clear()},function(a,e){t.$toast.clear(),alert(e.context)})},wxpay:function(t,a,e){t.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"准备中..."}),TD_Request("op","joi",{cid:a,uid:Options.GetUserInfo().openid},function(n,s){console.log(s),t.$toast.clear(),t.wxpayweb(t,s.pay,s.order.oid,a,e)},function(a,e){t.$toast.clear(),81==a?t.$dialog.alert({title:"错误提示",message:"合约ID有误，请联系客服进行处理"}).then(function(){window.location.href="cach.html?time="+(new Date).getTime()}):82==a?t.$dialog.alert({title:"温馨提示",message:"您的合约正在进行中"}).then(function(){}):11==a?t.$dialog.alert({title:"温馨提示",message:"绑定手机后才可以购买合约哦！"}).then(function(){window.location.href="../../../html/phoneManage.html?time="+(new Date).getTime()}):58==a&&t.$dialog.confirm({title:"错误提示",message:"订单错误，如连续出现此错误，请联系客服小姐姐进行处理哦！"}).then(function(){window.location.href="../../../html/cach.html?time="+(new Date).getTime()}).catch(function(){}),console.log(e)})},wxpayweb:function(t,a,e,n,s){t.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"支付中..."}),WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:a.appId,timeStamp:a.timeStamp,nonceStr:a.nonceStr,package:a.package,signType:a.signType,paySign:a.paySign},function(a){"get_brand_wcpay_request:ok"==a.err_msg?t.paySuccess(n,e,Options.GetUserInfo().openid,s):"get_brand_wcpay_request:cancel"==a.err_msg&&t.$toast.fail("支付取消")})},paySuccess:function(t,a,e,n){TD_Request("op","jof",{cid:t,oid:a,uid:e,theme:n},function(t,a){window.location.href="actionClock.html?time="+(new Date).getTime()},function(t,a){alert(t)})},againPay:function(){this.payCancel=!1,this.show=!0},confirm:function(){$(".banner").css("background","url(https://tdream.antit.top/ActiveContractBanner.jpg) no-repeat center center / 7.5rem 2.3rem"),""==this.value?(this.custom="其他",this.theme="",this.status="undefined"):(this.custom=this.value,this.theme=this.value)},cancel:function(){$(".banner").css("background","url(https://tdream.antit.top/ActiveContractBanner.jpg) no-repeat center center / 7.5rem 2.3rem"),this.custom="其他",this.theme="",this.status=null},callMe:function(){window.location.href="../../../html/cach.html?time="+(new Date).getTime()},Orders:function(t){TD_Request("op","eomp",{uid:Options.GetUserInfo().openid},function(a,e){if(console.log(e),console.log(t.feedback),e.cPerson<1e3){var n=parseInt(e.cPerson);n+=1e3}else n=e.cPerson;if(e.cAttendence<1e4){var s=parseInt(e.cAttendence);s+=1e4}else s=e.cAttendence;if(t.cPerson=n,t.cAttendence=s,t.feedback=e.feedback,0==e.orders.length)return $(".info").hide(),void $(".time").html("暂无人购买合约");var i=e.orders.shift();t.order=i,e.orders.push(i),t.orders=e.orders,t.loop(t),console.log(e.orders)},function(t,a){console.log(a)})},loop:function(t){setInterval(function(){var a=t.orders.shift();t.order=a,t.orders.push(a)},3e3)}},watch:{value:function(t){t.length>=8&&(this.value=t.substr(0,8),console.log(this.value))}}},f={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"payInfo"},[e("div",{staticClass:"clockIn"},[e("van-col",{attrs:{span:"24"}},[e("div",{staticClass:"banner"},[e("p",[t._v("已成功帮助"+t._s(""==t.cPerson?"--":t.cPerson)+"位追梦人，坚持行动"+t._s(""==t.cAttendence?"--":t.cAttendence)+"次！")])])]),t._v(" "),e("van-col",{staticStyle:{background:"#fff","margin-top":"0.3rem"},attrs:{span:"24"}},[e("div",{staticClass:"screen"},[e("span",{staticClass:"circle"},[t._v("·")]),t._v(" "),e("span",{staticClass:"info"},[t._v(t._s(""==t.order?"--":t.order.nickname)+"支付"+t._s(""==t.order?"--":t.order.bill/100)+"元合约")]),t._v(" "),e("span",{staticClass:"time"},[t._v("刚刚")])])]),t._v(" "),e("van-col",{staticClass:"contract",attrs:{span:"24"}},[e("div",{staticClass:"main"},[e("van-col",{attrs:{span:"24"}},[e("div",{staticClass:"day-100",on:{click:function(a){return a.stopPropagation(),t.buy(t.contracts[1].cid)}}},[e("h3",{staticClass:"title"},[t._v(t._s(""==t.contracts?"--":t.contracts[1].title))]),t._v(" "),e("p",{staticClass:"desc"},[t._v("\n                            "+t._s(""==t.contracts?"--":t.contracts[1].description)+"\n                        ")]),t._v(" "),e("van-button",{staticClass:"buy",attrs:{round:"",size:"small",type:"primary"},on:{click:function(a){return a.stopPropagation(),t.buy(t.contracts[1].cid)}}},[t._v("立即购买")])],1)]),t._v(" "),e("van-col",{attrs:{span:"24"}},[e("div",{staticClass:"day-21",on:{click:function(a){return a.stopPropagation(),t.buy(t.contracts[0].cid)}}},[e("h3",{staticClass:"title right"},[t._v(t._s(""==t.contracts?"--":t.contracts[0].title))]),t._v(" "),e("p",{staticClass:"desc right"},[t._v("\n                            "+t._s(""==t.contracts?"--":t.contracts[0].description)+"\n                        ")]),t._v(" "),e("van-col",{staticStyle:{"text-align":"right"},attrs:{span:"24"}},[e("van-button",{staticClass:"buy right",attrs:{round:"",size:"small",type:"primary"},on:{click:function(a){return a.stopPropagation(),t.buy(t.contracts[0].cid)}}},[t._v("立即购买")])],1)],1)])],1)]),t._v(" "),e("van-col",{staticClass:"model",staticStyle:{width:"6.8rem",margin:"0 0 0 0.3rem"}},[e("span"),t._v(" "),e("h3",{staticClass:"title"},[t._v("用户反馈")])]),t._v(" "),e("van-col",{staticClass:"feedback",attrs:{span:"24"}},t._l(t.feedback,function(a,n){return e("van-row",{key:n,staticClass:"feed_main"},[e("van-col",{attrs:{span:"5"}},[e("div",{staticClass:"head"},[e("van-icon",{attrs:{name:a.headicon}})],1)]),t._v(" "),e("van-col",{attrs:{span:"19"}},[e("h3",{staticClass:"type"},[t._v(t._s(a.title)),e("span",{staticClass:"nickname"},[t._v(t._s(a.username))])]),t._v(" "),e("p",{staticClass:"message"},[t._v("\n                        "+t._s(a.content)+"\n                    ")])])],1)}),1),t._v(" "),e("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[e("div",{staticClass:"popup"},[e("van-col",{staticClass:"title_big",attrs:{span:"24"}},[e("van-icon",{attrs:{name:"cross"},on:{click:t.close}}),t._v(" "),e("span",{staticClass:"title"},[t._v(t._s(""==t.title?"--":t.title))])],1),t._v(" "),e("van-col",{staticClass:"bill",attrs:{span:"24"}},[e("span",{staticClass:"unit"},[t._v("￥")]),t._v(" "),e("span",{staticClass:"bill_num"},[t._v(t._s(""==t.price?"--":t.price))])]),t._v(" "),e("van-col",{staticClass:"tip",attrs:{span:"24"}},[e("p",{staticClass:"tip_txt"},[t._v("支付"+t._s(""==t.desc?"--":t.desc))])]),t._v(" "),e("van-col",{staticClass:"main_title",attrs:{span:"24"}},[e("p",{staticClass:"main_tit_txt"},[t._v("选择行动主题:")])]),t._v(" "),e("van-col",{staticClass:"clock_type",attrs:{span:"24"}},[e("ul",[t._l(t.contractType,function(a,n){return e("li",{key:n,staticClass:"contract",class:n==t.status?"active":"",on:{click:function(e){return e.stopPropagation(),t.conType(n,a.check,a.title)}}},[e("van-icon",{attrs:{name:n==t.status?a.active:a.normal}}),t._v(" "),e("span",{staticClass:"cont_title"},[t._v(t._s(""==t.contractType?"--":a.title))])],1)}),t._v(" "),e("li",{staticClass:"contract",class:12==t.status?"active":"",staticStyle:{width:"100%"},on:{click:function(a){return t.conType(12)}}},[e("van-icon",{attrs:{name:12==t.status?"https://tdream.antit.top/5drinkingIA.png":"https://tdream.antit.top/5drinkingIU.png"}}),t._v(" "),e("span",{staticClass:"cont_title"},[t._v(t._s(12==t.status?t.custom:"其他"))])],1)],2),t._v(" "),e("van-dialog",{attrs:{title:"自定义主题(8字以内)","show-cancel-button":""},on:{confirm:t.confirm,cancel:t.cancel},model:{value:t.isshow,callback:function(a){t.isshow=a},expression:"isshow"}},[e("van-field",{attrs:{id:"theme",placeholder:"请输入主题"},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1)],1),t._v(" "),e("van-col",{staticClass:"warm",attrs:{span:"24"}},[e("p",{staticClass:"warning"},[t._v("注意事项:")])]),t._v(" "),e("van-col",{attrs:{span:"24",id:"warm"}}),t._v(" "),e("van-col",{staticClass:"btn",attrs:{span:"24"}},[e("van-button",{attrs:{type:"primary",round:"",size:"normal"},on:{click:function(a){return t.pay(t.cid)}}},[t._v("立即支付")])],1)],1)]),t._v(" "),e("van-popup",{staticClass:"contrace",model:{value:t.payCancel,callback:function(a){t.payCancel=a},expression:"payCancel"}},[e("div",{staticClass:"paycancel"},[e("div",{staticClass:"main"},[e("div",{staticClass:"avatar"}),t._v(" "),e("div",{staticClass:"text"},[e("div",{staticClass:"container"},[e("p",[t._v("追梦行动达人")])])])]),t._v(" "),e("div",{staticClass:"btn"},[e("div",{staticClass:"left"},[e("van-button",{staticClass:"callMe",attrs:{round:""},on:{click:t.callMe}},[t._v("和她聊聊")])],1),t._v(" "),e("div",{staticClass:"right"},[e("van-button",{staticClass:"againPay",attrs:{round:""},on:{click:t.againPay}},[t._v("重新支付")])],1)])]),t._v(" "),e("div",{staticClass:"icon",staticStyle:{"text-align":"center","font-size":"0.88rem","margin-top":"0.6rem"}},[e("van-icon",{attrs:{name:"https://tdream.antit.top/DaKaOKX.png"},on:{click:function(a){t.payCancel=!1}}})],1)])],1)])},staticRenderFns:[]};var h=e("VU/8")(m,f,!1,function(t){e("zBfb")},"data-v-40eec976",null).exports,g=e("MTyd"),_={name:"App",data:function(){return{actives:1,ispay:!1,userInfo:"",tabbar:"",contracts:"",show:!1,payCancel:!1,cid:"",desc:"",title:"",contractType:"",price:"",day:"",warm:"",status:null,theme:"",isshow:!1,custom:"",value:"",cattention:"",feedback:"",order:"",orders:"",cPerson:"",cAttendence:""}},components:{payInfo:h},created:function(){this.tabbar=g.a.data.tabbar,this.GetUserInfo(this)},methods:{GetUserInfo:function(t){t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"信息拉取中..."}),WebApp.Init("wxc5216d15dd321ac5",function(a,e){console.log(Options.GetUserInfo()),t.userInfo=Options.GetUserInfo(),Options.TestServer=!1,t.$toast.clear(),t.Register(t)})},Register:function(t){t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"信息注册中..."}),TD_Request("us","enter",{uid:t.userInfo.openid,nickname:t.userInfo.nickname,headicon:t.userInfo.headimgurl},function(a,e){console.log(e),WebApp.JSAPI.InitShare({title:t.userInfo.nickname+"已加入追梦行动派",desc:"有梦就行动，坚持返现金！",link:"http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/clock.html?time="+(new Date).getTime(),imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"}),t.$toast.clear(),t.Orders(t,t.userInfo.openid)},function(a,e){console.log(e),t.$toast.clear()})},Orders:function(t,a){this.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"数据加载中..."}),TD_Request("op","eomp",{uid:a},function(a,e){t.ispay=!0,console.log(e),t.feedback=e.feedback;var n=e.orders.shift();t.cPerson=e.cPerson,t.cAttendence=e.cAttendence,t.order=n,e.orders.push(n),t.orders=e.orders,t.$toast.clear(),t.loop(t),console.log(e.orders)},function(a,e){console.log(e),t.$toast.clear(),82==a&&(window.location.href="actionClock.html?time="+(new Date).getTime())})},loop:function(t){setInterval(function(){var a=t.orders.shift();t.order=a,t.orders.push(a)},3e3)}}},y={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"clock"},[this.ispay?a("pay-info",{attrs:{feed:this.feedback}}):this._e(),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"footer"},[e("ul",[e("li",[e("a",{attrs:{href:"../../../index.html"}},[e("i",{staticClass:"icon icon_home"}),t._v(" "),e("p",{staticClass:"text"},[t._v("梦想互助")])])]),t._v(" "),e("li",{staticClass:"active"},[e("a",{attrs:{href:"clock.html"}},[e("i",{staticClass:"icon icon_dream"}),t._v(" "),e("p",{staticClass:"text"},[t._v("行动打卡")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"user.html"}},[e("i",{staticClass:"icon icon_user"}),t._v(" "),e("p",{staticClass:"text"},[t._v("个人中心")])])])])])}]};var C=e("VU/8")(_,y,!1,function(t){e("g6lc")},"data-v-f4cfc3cc",null).exports,b=e("iA4B");v.a.component(b.ProgressBar.name,b.ProgressBar),v.a.use(n.a).use(s.a).use(i.a).use(c.a).use(o.a).use(r.a).use(l.a).use(d.a).use(u.a).use(p.a),v.a.config.productionTip=!1,new v.a({el:"#app",components:{App:C},template:"<App/>"})},eh36:function(t,a){},g6lc:function(t,a){},hW8u:function(t,a){},nsZj:function(t,a){},px3J:function(t,a){},sKgQ:function(t,a){},zBfb:function(t,a){}},["VbU8"]);
//# sourceMappingURL=clock.8a97ed501d8a85bdacc5.js.map