webpackJsonp([5],{3773:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});n("RgoE");var i=n("0KWt"),s=(n("1E9F"),n("2Ux5")),e=(n("eqfM"),n("/QYm")),c=(n("JRZP"),n("LK01")),o=(n("ZuV/"),n("37Xn")),l=(n("3Lne"),n("SSsa")),r=(n("mMXg"),n("qYlo")),u=(n("k3b4"),n("+2ln")),d=(n("XmAh"),n("il3B")),p=(n("MY4N"),n("0zAV")),h=n("7+uW"),m=n("bOdI"),f=n.n(m),v=Options.GetUserInfo().openid,_={name:"friend",data:function(){var t;return t={contracts:"",show:!1,cid:"",desc:"",title:"",contractType:"",price:"",day:"",warm:"",status:null,theme:"",isshow:!1,custom:"",value:"",payCancel:!1,nickname:""},f()(t,"theme",""),f()(t,"alrday",""),f()(t,"refund",""),t},created:function(){$_GET.opid?(this.list(this),this.Info(this,$_GET.opid),this.Orders(this)):window.location.href="clock.html?time="+(new Date).getTime()},methods:{Info:function(t,a){t.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"信息加载中..."}),TD_Request("op","oshar",{opid:a},function(n,i){console.log(i),$(".headicon").css("background","url("+i.headicon+") no-repeat center center / 1rem 1rem"),t.nickname=i.nickname,t.refund=i.refund,TD_Request("op","oif",{opid:a,uid:v},function(n,i){console.log(i),t.theme=i.info.theme,t.alrday=i.info.alrday,WebApp.JSAPI.InitShare({title:i.info.nickname+"已加入追梦行动派为 "+i.info.theme+" 坚持行动"+i.info.alrday+"天",desc:"有梦就行动，坚持返现金！",link:"http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/friend.html?time="+(new Date).getTime()+"&opid="+a,imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"}),WebApp.JSAPI.OnShareTimeLine=function(n){console.log(n),n?(t.isshow=!1,t.share(t,a,date)):n&&t.$toast.fail("您取消了分享")},WebApp.JSAPI.OnShareFriend=function(n){console.log(n),n?(t.isshow=!1,t.share(t,a,date)):n&&t.$toast.fail("您取消了分享")}},function(t,a){console.log(a)})},function(t,a){console.log(a)})},share:function(t,a,n){console.log(n),void 0!==n?(console.log(n),TD_Request("op","rep",{opid:a,date:n,uid:v},function(a,n){t.$toast.success("分享成功"),t.Mat(t)},function(a,n){t.$toast.fail("分享失败")})):window.location.href="actionClock.html?time="+(new Date).getTime()},buy:function(t){this.show=!0,this.ContractInfo(this,t)},conType:function(t,a,n){this.status=t,12!=t?this.theme=this.contractType[t].title:(this.isshow=!0,$("#theme.van-field__control").focus())},removeArray:function(t,a){for(var n=0;n<t.length;n++)if(t[n]==a){t.splice(n,1);break}},Orders:function(t){TD_Request("op","eomp",{uid:v},function(t,a){},function(t,a){console.log(a),82==t&&(window.location.href="actionClock.html?time="+(new Date).getTime())})},pay:function(t){if(""==this.theme)this.$dialog.alert({title:"温馨提示",message:"亲~目标才是坚持行动的动力，选择一个行动主题作为坚持目标吧！"}).then(function(){});else{var a=this.theme;console.log(a),this.wxpay(this,t,a)}},list:function(t){t.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"列表获取中..."}),TD_Request("co","list",{},function(a,n){t.contractType=n.themes,t.contracts=n.contracts,t.$toast.clear(),"CO0000000001"==cid?$("#warm").html(t.cattention.CO0000000001).css({"font-size":"0.26rem",color:"#999"}):"CO0000000002"==cid&&$("#warm").html(t.cattention.CO0000000002).css({"font-size":"0.26rem",color:"#999"})},function(a,n){t.$toast.clear(),alert(n.context)})},ContractInfo:function(t,a){t.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"信息获取中..."}),TD_Request("co","info",{cid:a},function(a,n){console.log(n),t.title=n.contract.title,t.desc=n.contract.description,t.price=n.contract.price/100,t.cid=n.contract.cid,t.$toast.clear()},function(a,n){t.$toast.clear(),alert(n.context)})},wxpay:function(t,a,n){t.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"准备中..."}),TD_Request("op","joi",{cid:a,uid:v},function(i,s){console.log(s),t.$toast.clear(),t.wxpayweb(t,s.pay,s.order.oid,a,n)},function(a,n){t.$toast.clear(),81==a?t.$dialog.alert({title:"错误提示",message:"合约ID有误，请联系客服进行处理"}).then(function(){window.location.href="cach.html?time="+(new Date).getTime()}):82==a?t.$dialog.alert({title:"温馨提示",message:"您的合约正在进行中"}).then(function(){}):11==a?t.$dialog.alert({title:"温馨提示",message:"绑定手机后才可以购买合约哦！"}).then(function(){window.location.href="../../../html/phoneManage.html?time="+(new Date).getTime()}):58==a&&t.$dialog.confirm({title:"错误提示",message:"订单错误，如连续出现此错误，请联系客服小姐姐进行处理哦！"}).then(function(){window.location.href="../../../html/cach.html?time="+(new Date).getTime()}).catch(function(){}),console.log(n)})},wxpayweb:function(t,a,n,i,s){t.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"支付中..."}),WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:a.appId,timeStamp:a.timeStamp,nonceStr:a.nonceStr,package:a.package,signType:a.signType,paySign:a.paySign},function(a){"get_brand_wcpay_request:ok"==a.err_msg?t.paySuccess(i,n,v,s):"get_brand_wcpay_request:cancel"==a.err_msg&&t.$toast.fail("支付取消")})},paySuccess:function(t,a,n,i){TD_Request("op","jof",{cid:t,oid:a,uid:n,theme:i,icode:$_GET.opid},function(t,a){window.location.href="../actionClock/actionClock.html?time="+(new Date).getTime()},function(t,a){alert(t)})},againPay:function(){this.payCancel=!1,this.show=!0},confirm:function(){""==this.value?(this.custom="其他",this.theme="",this.status="undefined"):(this.custom=this.value,this.theme=this.value)},cancel:function(){this.custom="其他",this.theme="",this.status="undefined"},callMe:function(){window.location.href="../../../html/cach.html?time="+(new Date).getTime()},close:function(){this.status="",this.show=!1,this.payCancel=!0}},watch:{value:function(t){t.length>=8&&(this.value=t.substr(0,20),console.log(this.value))}}},g={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("van-col",{staticClass:"friend",attrs:{span:"24"}},[n("van-col",{staticClass:"banner",attrs:{span:"24"}}),t._v(" "),n("van-col",{staticClass:"friend_info",attrs:{span:"24"}},[n("van-col",{attrs:{span:"16"}},[n("div",{staticClass:"left"},[n("div",{staticClass:"headicon"}),t._v(" "),n("p",[t._v(t._s(""==t.nickname?"--":t.nickname)+"已在追梦行动派连续为")]),t._v(" "),n("p",[t._v(t._s(""==t.theme?"--":t.theme)+"行动打卡"),n("span",{staticStyle:{"font-size":"0.38rem"}},[t._v(t._s(""==t.alrday?"--":t.alrday))]),t._v("天")]),t._v(" "),n("p",[t._v("现邀请您一起加入")]),t._v(" "),n("p",{staticStyle:{"text-align":"center","margin-top":"0.2rem",width:"3.4rem",height:"0.46rem","line-height":"0.46rem",color:"#fff",background:"#00d094"}},[t._v("坚持行动可以得"+t._s(""==t.refund?"--":t.refund/100)+"元现金")])])]),t._v(" "),n("van-col",{attrs:{span:"8"}},[n("div",{staticClass:"right",staticStyle:{float:"right","margin-right":"0.3rem"}},[n("div",{staticClass:"qr"},[n("img",{attrs:{src:"http://cloud.antit.top/LongPress2ShareQR01.jpg",alt:""}})]),t._v(" "),n("p",[t._v("长按二维码")]),t._v(" "),n("p",[t._v("加入行动派")])])])],1),t._v(" "),n("van-col",{staticClass:"contract",attrs:{span:"24"}},[n("div",{staticClass:"main"},[n("van-col",{attrs:{span:"24"}},[n("div",{staticClass:"day-100",on:{click:function(a){return t.buy(t.contracts[1].cid)}}},[n("h3",{staticClass:"title"},[t._v(t._s(""==t.contracts?"--":t.contracts[1].title))]),t._v(" "),n("p",{staticClass:"desc"},[t._v("\n                            "+t._s(""==t.contracts?"--":t.contracts[1].description)+"\n                        ")])])]),t._v(" "),n("van-col",{attrs:{span:"24"}},[n("div",{staticClass:"day-21",on:{click:function(a){return t.buy(t.contracts[0].cid)}}},[n("h3",{staticClass:"title right"},[t._v(t._s(""==t.contracts?"--":t.contracts[0].title))]),t._v(" "),n("p",{staticClass:"desc right"},[t._v("\n                            "+t._s(""==t.contracts?"--":t.contracts[0].description)+"\n                        ")])])])],1)]),t._v(" "),n("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[n("div",{staticClass:"popup"},[n("van-col",{staticClass:"title_big",attrs:{span:"24"}},[n("van-icon",{attrs:{name:"cross"},on:{click:t.close}}),t._v(" "),n("span",{staticClass:"title"},[t._v(t._s(""==t.title?"--":t.title))])],1),t._v(" "),n("van-col",{staticClass:"bill",attrs:{span:"24"}},[n("span",{staticClass:"unit"},[t._v("￥")]),t._v(" "),n("span",{staticClass:"bill_num"},[t._v(t._s(""==t.price?"--":t.price))])]),t._v(" "),n("van-col",{staticClass:"tip",attrs:{span:"24"}},[n("p",{staticClass:"tip_txt"},[t._v("支付"+t._s(""==t.desc?"--":t.desc))])]),t._v(" "),n("van-col",{staticClass:"main_title",attrs:{span:"24"}},[n("p",{staticClass:"main_tit_txt"},[t._v("选择行动主题:")])]),t._v(" "),n("van-col",{staticClass:"clock_type",attrs:{span:"24"}},[n("ul",[t._l(t.contractType,function(a,i){return n("li",{key:i,staticClass:"contract",class:i==t.status?"active":"",on:{click:function(n){return n.stopPropagation(),t.conType(i,a.check,a.title)}}},[n("van-icon",{attrs:{name:i==t.status?a.active:a.normal}}),t._v(" "),n("span",{staticClass:"cont_title"},[t._v(t._s(""==t.contractType?"--":a.title))])],1)}),t._v(" "),n("li",{staticClass:"contract",class:12==t.status?"active":"",staticStyle:{width:"100%"},on:{click:function(a){return t.conType(12)}}},[n("van-icon",{attrs:{name:12==t.status?"https://tdream.antit.top/5drinkingIA.png":"https://tdream.antit.top/5drinkingIU.png"}}),t._v(" "),n("span",{staticClass:"cont_title"},[t._v(t._s(12==t.status?t.custom:"其他"))])],1)],2),t._v(" "),n("van-dialog",{attrs:{title:"自定义主题(8字以内)","show-cancel-button":""},on:{confirm:t.confirm,cancel:t.cancel},model:{value:t.isshow,callback:function(a){t.isshow=a},expression:"isshow"}},[n("van-field",{attrs:{id:"theme",placeholder:"请输入主题"},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1)],1),t._v(" "),n("van-col",{staticClass:"warm",attrs:{span:"24"}},[n("p",{staticClass:"warning"},[t._v("注意事项:")])]),t._v(" "),n("van-col",{attrs:{span:"24",id:"warm"}}),t._v(" "),n("van-col",{staticClass:"btn",attrs:{span:"24"}},[n("van-button",{attrs:{type:"primary",round:"",size:"normal"},on:{click:function(a){return t.pay(t.cid)}}},[t._v("立即支付")])],1)],1)]),t._v(" "),n("van-popup",{staticClass:"contrace",model:{value:t.payCancel,callback:function(a){t.payCancel=a},expression:"payCancel"}},[n("div",{staticClass:"paycancel"},[n("div",{staticClass:"main"},[n("div",{staticClass:"avatar"}),t._v(" "),n("div",{staticClass:"text"},[n("div",{staticClass:"container"},[n("p",[t._v("寻梦导师")]),t._v(" "),n("p",[t._v("追梦行动达人")])])])]),t._v(" "),n("div",{staticClass:"btn"},[n("div",{staticClass:"left"},[n("van-button",{staticClass:"callMe",attrs:{round:""},on:{click:t.callMe}},[t._v("和她聊聊")])],1),t._v(" "),n("div",{staticClass:"right"},[n("van-button",{staticClass:"againPay",attrs:{round:""},on:{click:t.againPay}},[t._v("重新支付")])],1)])]),t._v(" "),n("div",{staticClass:"icon",staticStyle:{"text-align":"center","font-size":"0.88rem","margin-top":"0.6rem"}},[n("van-icon",{attrs:{name:"https://tdream.antit.top/DaKaOKX.png"},on:{click:function(a){t.payCancel=!1}}})],1)])],1)},staticRenderFns:[]};var C=n("VU/8")(_,g,!1,function(t){n("dMqY")},"data-v-71471859",null).exports;h.a.use(i.a).use(s.a).use(e.a).use(c.a).use(o.a).use(l.a).use(r.a).use(u.a).use(d.a).use(p.a),h.a.config.productionTip=!1,new h.a({el:"#app",components:{App:C},template:"<App/>"})},"97dx":function(t,a){},JKiR:function(t,a){},NAlg:function(t,a){},RUOb:function(t,a){},dMqY:function(t,a){},eh36:function(t,a){},hW8u:function(t,a){},nsZj:function(t,a){},px3J:function(t,a){},sKgQ:function(t,a){}},["3773"]);
//# sourceMappingURL=friend.f183951d8386f60be107.js.map