webpackJsonp([1],{"Fz/r":function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});s("3Lne");var n=s("SSsa"),e=(s("JRZP"),s("LK01")),c=(s("ZuV/"),s("37Xn")),i=(s("eqfM"),s("/QYm")),o=(s("k3b4"),s("+2ln")),l=(s("mMXg"),s("qYlo")),r=(s("XmAh"),s("il3B")),u=(s("MY4N"),s("0zAV")),p=s("7+uW"),d="oSORf5kkXvHNxhIx8lQVe3DFRFvw",v={name:"PayInfo",data:function(){return{actives:1,tabbar:"",contracts:"",show:!1,payCancel:!1,cid:"",desc:"",title:"",contractType:"",price:"",day:"",warm:"",status:null,theme:"",isshow:!1,custom:"",value:"",cattention:"",feedback:"",order:"",orders:"",cPerson:"",cAttendence:""}},created:function(){Options.TestServer=!0,this.list(this),this.Orders(this)},methods:{buy:function(t){this.show=!0,this.ContractInfo(this,t)},conType:function(t,a,s){this.status=t,12!=t?this.theme=this.contractType[t].title:(this.isshow=!0,$(".banner").css("background","rgba(0,0,0,.5) url(undefined)"),$("#theme.van-field__control").focus())},removeArray:function(t,a){for(var s=0;s<t.length;s++)if(t[s]==a){t.splice(s,1);break}},close:function(){this.status=null,this.show=!1,this.payCancel=!0},pay:function(t){if(""==this.theme)this.$dialog.alert({title:"温馨提示",message:"亲~目标才是坚持行动的动力，选择一个行动主题作为坚持目标吧！"}).then(function(){});else{var a=this.theme;console.log(a),this.wxpay(this,t,a)}},list:function(t){t.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"列表获取中..."}),TD_Request("co","list",{},function(a,s){console.log(s),t.contractType=s.themes,t.contracts=s.contracts,t.cattention=s.cattention,t.$toast.clear()},function(a,s){t.$toast.clear(),alert(s.context)})},ContractInfo:function(t,a){t.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"信息获取中..."}),TD_Request("co","info",{cid:a},function(s,n){console.log(n),t.title=n.contract.title,t.desc=n.contract.description,t.price=n.contract.price/100,t.cid=n.contract.cid,"CO0000000001"==a?$("#warm").html(t.cattention.CO0000000001):"CO0000000002"==a&&$("#warm").html(t.cattention.CO0000000002),t.$toast.clear()},function(a,s){t.$toast.clear(),alert(s.context)})},wxpay:function(t,a,s){t.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"准备中..."}),TD_Request("op","joi",{cid:a,uid:d},function(n,e){console.log(e),t.$toast.clear(),t.wxpayweb(t,e.pay,e.order.oid,a,s)},function(a,s){t.$toast.clear(),81==a?t.$dialog.alert({title:"错误提示",message:"合约ID有误，请联系客服进行处理"}).then(function(){window.location.href="cach.html?time="+(new Date).getTime()}):82==a?t.$dialog.alert({title:"温馨提示",message:"您的合约正在进行中"}).then(function(){}):11==a?t.$dialog.alert({title:"温馨提示",message:"绑定手机后才可以购买合约哦！"}).then(function(){window.location.href="../../../html/phoneManage.html?time="+(new Date).getTime()}):58==a&&t.$dialog.confirm({title:"错误提示",message:"订单错误，如连续出现此错误，请联系客服小姐姐进行处理哦！"}).then(function(){window.location.href="../../../html/cach.html?time="+(new Date).getTime()}).catch(function(){}),console.log(s)})},wxpayweb:function(t,a,s,n,e){t.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"支付中..."}),WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:a.appId,timeStamp:a.timeStamp,nonceStr:a.nonceStr,package:a.package,signType:a.signType,paySign:a.paySign},function(a){"get_brand_wcpay_request:ok"==a.err_msg?t.paySuccess(n,s,d,e):"get_brand_wcpay_request:cancel"==a.err_msg&&t.$toast.fail("支付取消")})},paySuccess:function(t,a,s,n){TD_Request("op","jof",{cid:t,oid:a,uid:s,theme:n},function(t,a){window.location.href="../actionClock/actionClock.html?time="+(new Date).getTime()},function(t,a){alert(t)})},againPay:function(){this.payCancel=!1,this.show=!0},confirm:function(){$(".banner").css("background","url(https://tdream.antit.top/ActiveContractBanner.jpg) no-repeat center center / 7.5rem 2.3rem"),""==this.value?(this.custom="其他",this.theme="",this.status="undefined"):(this.custom=this.value,this.theme=this.value)},cancel:function(){$(".banner").css("background","url(https://tdream.antit.top/ActiveContractBanner.jpg) no-repeat center center / 7.5rem 2.3rem"),this.custom="其他",this.theme="",this.status=null},callMe:function(){window.location.href="../../../html/cach.html?time="+(new Date).getTime()},Orders:function(t){this.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"数据加载中..."}),TD_Request("op","eomp",{uid:d},function(a,s){console.log(s),t.feedback=s.feedback;var n=s.orders.shift();t.cPerson=s.cPerson,t.cAttendence=s.cAttendence,t.order=n,s.orders.push(n),t.orders=s.orders,t.$toast.clear(),t.loop(t),console.log(s.orders)},function(t,a){console.log(a)})},loop:function(t){setInterval(function(){var a=t.orders.shift();t.order=a,t.orders.push(a)},3e3)}},watch:{value:function(t){t.length>=8&&(this.value=t.substr(0,20),console.log(this.value))}}},h={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"clockIn"},[s("van-col",{attrs:{span:"24"}},[s("div",{staticClass:"banner"},[s("p",[t._v("已成功帮助"+t._s(""==t.cPerson?"--":t.cPerson)+"追梦人，坚持行动"+t._s(""==t.cAttendence?"--":t.cAttendence)+"次！")])])]),t._v(" "),s("van-col",{staticStyle:{background:"#fff","margin-top":"0.3rem"},attrs:{span:"24"}},[s("div",{staticClass:"screen"},[s("span",{staticClass:"circle"},[t._v("·")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s(""==t.order?"--":t.order.nickname)+"支付"+t._s(""==t.order?"--":t.order.bill/100)+"元合约")]),t._v(" "),s("span",{staticClass:"time"},[t._v("刚刚")])])]),t._v(" "),s("van-col",{staticClass:"contract",attrs:{span:"24"}},[s("div",{staticClass:"main"},[s("van-col",{attrs:{span:"24"}},[s("div",{staticClass:"day-100",on:{click:function(a){return a.stopPropagation(),t.buy(t.contracts[1].cid)}}},[s("h3",{staticClass:"title"},[t._v(t._s(""==t.contracts?"--":t.contracts[1].title))]),t._v(" "),s("p",{staticClass:"desc"},[t._v("\n                              "+t._s(""==t.contracts?"--":t.contracts[1].description)+"\n                          ")]),t._v(" "),s("van-button",{staticClass:"buy",attrs:{round:"",size:"small",type:"primary"},on:{click:function(a){return a.stopPropagation(),t.buy(t.contracts[1].cid)}}},[t._v("立即购买")])],1)]),t._v(" "),s("van-col",{attrs:{span:"24"}},[s("div",{staticClass:"day-21",on:{click:function(a){return a.stopPropagation(),t.buy(t.contracts[1].cid)}}},[s("h3",{staticClass:"title right"},[t._v(t._s(""==t.contracts?"--":t.contracts[0].title))]),t._v(" "),s("p",{staticClass:"desc right"},[t._v("\n                              "+t._s(""==t.contracts?"--":t.contracts[0].description)+"\n                          ")]),t._v(" "),s("van-col",{staticStyle:{"text-align":"right"},attrs:{span:"24"}},[s("van-button",{staticClass:"buy right",attrs:{round:"",size:"small",type:"primary"},on:{click:function(a){return a.stopPropagation(),t.buy(t.contracts[0].cid)}}},[t._v("立即购买")])],1)],1)])],1)]),t._v(" "),s("van-col",{staticClass:"model",staticStyle:{width:"6.8rem",margin:"0 0 0 0.3rem"}},[s("span"),t._v(" "),s("h3",{staticClass:"title"},[t._v("用户反馈")])]),t._v(" "),s("van-col",{staticClass:"feedback",attrs:{span:"24"}},t._l(t.feedback,function(a,n){return s("van-row",{key:n,staticClass:"feed_main"},[s("van-col",{attrs:{span:"5"}},[s("div",{staticClass:"head"},[s("van-icon",{attrs:{name:a.headicon}})],1)]),t._v(" "),s("van-col",{attrs:{span:"19"}},[s("h3",{staticClass:"type"},[t._v(t._s(a.title)),s("span",{staticClass:"nickname"},[t._v(t._s(a.username))])]),t._v(" "),s("p",{staticClass:"message"},[t._v("\n                          "+t._s(a.content)+"\n                      ")])])],1)}),1),t._v(" "),s("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[s("div",{staticClass:"popup"},[s("van-col",{staticClass:"title_big",attrs:{span:"24"}},[s("van-icon",{attrs:{name:"cross"},on:{click:t.close}}),t._v(" "),s("span",{staticClass:"title"},[t._v(t._s(""==t.title?"--":t.title))])],1),t._v(" "),s("van-col",{staticClass:"bill",attrs:{span:"24"}},[s("span",{staticClass:"unit"},[t._v("￥")]),t._v(" "),s("span",{staticClass:"bill_num"},[t._v(t._s(""==t.price?"--":t.price))])]),t._v(" "),s("van-col",{staticClass:"tip",attrs:{span:"24"}},[s("p",{staticClass:"tip_txt"},[t._v("支付"+t._s(""==t.desc?"--":t.desc))])]),t._v(" "),s("van-col",{staticClass:"main_title",attrs:{span:"24"}},[s("p",{staticClass:"main_tit_txt"},[t._v("选择行动主题:")])]),t._v(" "),s("van-col",{staticClass:"clock_type",attrs:{span:"24"}},[s("ul",[t._l(t.contractType,function(a,n){return s("li",{key:n,staticClass:"contract",class:n==t.status?"active":"",on:{click:function(s){return s.stopPropagation(),t.conType(n,a.check,a.title)}}},[s("van-icon",{attrs:{name:n==t.status?a.active:a.normal}}),t._v(" "),s("span",{staticClass:"cont_title"},[t._v(t._s(""==t.contractType?"--":a.title))])],1)}),t._v(" "),s("li",{staticClass:"contract",class:12==t.status?"active":"",staticStyle:{width:"100%"},on:{click:function(a){return t.conType(12)}}},[s("van-icon",{attrs:{name:12==t.status?"https://tdream.antit.top/5drinkingIA.png":"https://tdream.antit.top/5drinkingIU.png"}}),t._v(" "),s("span",{staticClass:"cont_title"},[t._v(t._s(12==t.status?t.custom:"其他"))])],1)],2),t._v(" "),s("van-dialog",{attrs:{title:"自定义主题(8字以内)","show-cancel-button":""},on:{confirm:t.confirm,cancel:t.cancel},model:{value:t.isshow,callback:function(a){t.isshow=a},expression:"isshow"}},[s("van-field",{attrs:{id:"theme",placeholder:"请输入主题"},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1)],1),t._v(" "),s("van-col",{staticClass:"warm",attrs:{span:"24"}},[s("p",{staticClass:"warning"},[t._v("注意事项:")])]),t._v(" "),s("van-col",{attrs:{span:"24",id:"warm"}}),t._v(" "),s("van-col",{staticClass:"btn",attrs:{span:"24"}},[s("van-button",{attrs:{type:"primary",round:"",size:"normal"},on:{click:function(a){return t.pay(t.cid)}}},[t._v("立即支付")])],1)],1)]),t._v(" "),s("van-popup",{staticClass:"contrace",model:{value:t.payCancel,callback:function(a){t.payCancel=a},expression:"payCancel"}},[s("div",{staticClass:"paycancel"},[s("div",{staticClass:"main"},[s("div",{staticClass:"avatar"}),t._v(" "),s("div",{staticClass:"text"},[s("div",{staticClass:"container"},[s("p",[t._v("寻梦导师")]),t._v(" "),s("p",[t._v("追梦行动达人")])])])]),t._v(" "),s("div",{staticClass:"btn"},[s("div",{staticClass:"left"},[s("van-button",{staticClass:"callMe",attrs:{round:""},on:{click:t.callMe}},[t._v("和她聊聊")])],1),t._v(" "),s("div",{staticClass:"right"},[s("van-button",{staticClass:"againPay",attrs:{round:""},on:{click:t.againPay}},[t._v("重新支付")])],1)])]),t._v(" "),s("div",{staticClass:"icon",staticStyle:{"text-align":"center","font-size":"0.88rem","margin-top":"0.6rem"}},[s("van-icon",{attrs:{name:"https://tdream.antit.top/DaKaOKX.png"},on:{click:function(a){t.payCancel=!1}}})],1)])],1)])},staticRenderFns:[]};var m=s("VU/8")(v,h,!1,function(t){s("fcEQ")},null,null).exports;p.default.use(n.a).use(e.a).use(c.a).use(i.a).use(o.a).use(l.a).use(r.a).use(u.a),p.default.config.productionTip=!1,new p.default({el:"#app",components:{App:m},template:"<App/>"})},JKiR:function(t,a){},RUOb:function(t,a){},eh36:function(t,a){},fcEQ:function(t,a){},hW8u:function(t,a){},nsZj:function(t,a){},px3J:function(t,a){},sKgQ:function(t,a){}},["Fz/r"]);
//# sourceMappingURL=payInfo.cd39c32f691b08e83ece.js.map