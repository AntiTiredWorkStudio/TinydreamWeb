webpackJsonp([1],{"3HSV":function(t,a,e){"use strict";var n="oSORf5kkXvHNxhIx8lQVe3DFRFvw",s={name:"PayInfo",data:function(){return{actives:1,tabbar:"",contracts:"",show:!1,payCancel:!1,cid:"",desc:"",title:"",contractType:"",price:"",day:"",warm:"",status:null,theme:"",isshow:!1,custom:"",value:"",cattention:"",feedback:"",order:"",orders:"",cPerson:"",cAttendence:""}},created:function(){Options.TestServer=!1,this.list(this),this.Orders(this)},methods:{buy:function(t){this.show=!0,this.ContractInfo(this,t)},conType:function(t,a,e){this.status=t,12!=t?this.theme=this.contractType[t].title:(this.isshow=!0,$(".banner").css("background","rgba(0,0,0,.5) url(undefined)"),$("#theme.van-field__control").focus())},removeArray:function(t,a){for(var e=0;e<t.length;e++)if(t[e]==a){t.splice(e,1);break}},close:function(){this.status=null,this.show=!1,this.payCancel=!0},pay:function(t){if(""==this.theme)this.$dialog.alert({title:"温馨提示",message:"亲~目标才是坚持行动的动力，选择一个行动主题作为坚持目标吧！"}).then(function(){});else{var a=this.theme;console.log(a),this.wxpay(this,t,a)}},list:function(t){t.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"列表获取中..."}),TD_Request("co","list",{},function(a,e){console.log(e),t.contractType=e.themes,t.contracts=e.contracts,t.cattention=e.cattention,t.$toast.clear()},function(a,e){t.$toast.clear(),alert(e.context)})},ContractInfo:function(t,a){t.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"信息获取中..."}),TD_Request("co","info",{cid:a},function(e,n){console.log(n),t.title=n.contract.title,t.desc=n.contract.description,t.price=n.contract.price/100,t.cid=n.contract.cid,"CO0000000001"==a?$("#warm").html(t.cattention.CO0000000001):"CO0000000002"==a&&$("#warm").html(t.cattention.CO0000000002),t.$toast.clear()},function(a,e){t.$toast.clear(),alert(e.context)})},wxpay:function(t,a,e){t.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"准备中..."}),TD_Request("op","joi",{cid:a,uid:n},function(n,s){console.log(s),t.$toast.clear(),t.wxpayweb(t,s.pay,s.order.oid,a,e)},function(a,e){t.$toast.clear(),81==a?t.$dialog.alert({title:"错误提示",message:"合约ID有误，请联系客服进行处理"}).then(function(){window.location.href="cach.html?time="+(new Date).getTime()}):82==a?t.$dialog.alert({title:"温馨提示",message:"您的合约正在进行中"}).then(function(){}):11==a?t.$dialog.alert({title:"温馨提示",message:"绑定手机后才可以购买合约哦！"}).then(function(){window.location.href="../../../html/phoneManage.html?time="+(new Date).getTime()}):58==a&&t.$dialog.confirm({title:"错误提示",message:"订单错误，如连续出现此错误，请联系客服小姐姐进行处理哦！"}).then(function(){window.location.href="../../../html/cach.html?time="+(new Date).getTime()}).catch(function(){}),console.log(e)})},wxpayweb:function(t,a,e,s,i){t.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"支付中..."}),WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:a.appId,timeStamp:a.timeStamp,nonceStr:a.nonceStr,package:a.package,signType:a.signType,paySign:a.paySign},function(a){"get_brand_wcpay_request:ok"==a.err_msg?t.paySuccess(s,e,n,i):"get_brand_wcpay_request:cancel"==a.err_msg&&t.$toast.fail("支付取消")})},paySuccess:function(t,a,e,n){TD_Request("op","jof",{cid:t,oid:a,uid:e,theme:n},function(t,a){window.location.href="../actionClock/actionClock.html?time="+(new Date).getTime()},function(t,a){alert(t)})},againPay:function(){this.payCancel=!1,this.show=!0},confirm:function(){$(".banner").css("background","url(https://tdream.antit.top/ActiveContractBanner.jpg) no-repeat center center / 7.5rem 2.3rem"),""==this.value?(this.custom="其他",this.theme="",this.status="undefined"):(this.custom=this.value,this.theme=this.value)},cancel:function(){$(".banner").css("background","url(https://tdream.antit.top/ActiveContractBanner.jpg) no-repeat center center / 7.5rem 2.3rem"),this.custom="其他",this.theme="",this.status=null},callMe:function(){window.location.href="../../../html/cach.html?time="+(new Date).getTime()},Orders:function(t){this.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"数据加载中..."}),TD_Request("op","eomp",{uid:n},function(a,e){console.log(e),t.feedback=e.feedback;var n=e.orders.shift();t.cPerson=e.cPerson,t.cAttendence=e.cAttendence,t.order=n,e.orders.push(n),t.orders=e.orders,t.$toast.clear(),t.loop(t),console.log(e.orders)},function(t,a){console.log(a)})},loop:function(t){setInterval(function(){var a=t.orders.shift();t.order=a,t.orders.push(a)},3e3)}},watch:{value:function(t){t.length>=8&&(this.value=t.substr(0,20),console.log(this.value))}}},i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"clockIn"},[e("van-col",{attrs:{span:"24"}},[e("div",{staticClass:"banner"},[e("p",[t._v("已成功帮助"+t._s(""==t.cPerson?"--":t.cPerson)+"追梦人，坚持行动"+t._s(""==t.cAttendence?"--":t.cAttendence)+"次！")])])]),t._v(" "),e("van-col",{staticStyle:{background:"#fff","margin-top":"0.3rem"},attrs:{span:"24"}},[e("div",{staticClass:"screen"},[e("span",{staticClass:"circle"},[t._v("·")]),t._v(" "),e("span",{staticClass:"info"},[t._v(t._s(""==t.order?"--":t.order.nickname)+"支付"+t._s(""==t.order?"--":t.order.bill/100)+"元合约")]),t._v(" "),e("span",{staticClass:"time"},[t._v("刚刚")])])]),t._v(" "),e("van-col",{staticClass:"contract",attrs:{span:"24"}},[e("div",{staticClass:"main"},[e("van-col",{attrs:{span:"24"}},[e("div",{staticClass:"day-100",on:{click:function(a){return a.stopPropagation(),t.buy(t.contracts[1].cid)}}},[e("h3",{staticClass:"title"},[t._v(t._s(""==t.contracts?"--":t.contracts[1].title))]),t._v(" "),e("p",{staticClass:"desc"},[t._v("\n                              "+t._s(""==t.contracts?"--":t.contracts[1].description)+"\n                          ")]),t._v(" "),e("van-button",{staticClass:"buy",attrs:{round:"",size:"small",type:"primary"},on:{click:function(a){return a.stopPropagation(),t.buy(t.contracts[1].cid)}}},[t._v("立即购买")])],1)]),t._v(" "),e("van-col",{attrs:{span:"24"}},[e("div",{staticClass:"day-21",on:{click:function(a){return a.stopPropagation(),t.buy(t.contracts[1].cid)}}},[e("h3",{staticClass:"title right"},[t._v(t._s(""==t.contracts?"--":t.contracts[0].title))]),t._v(" "),e("p",{staticClass:"desc right"},[t._v("\n                              "+t._s(""==t.contracts?"--":t.contracts[0].description)+"\n                          ")]),t._v(" "),e("van-col",{staticStyle:{"text-align":"right"},attrs:{span:"24"}},[e("van-button",{staticClass:"buy right",attrs:{round:"",size:"small",type:"primary"},on:{click:function(a){return a.stopPropagation(),t.buy(t.contracts[0].cid)}}},[t._v("立即购买")])],1)],1)])],1)]),t._v(" "),e("van-col",{staticClass:"model",staticStyle:{width:"6.8rem",margin:"0 0 0 0.3rem"}},[e("span"),t._v(" "),e("h3",{staticClass:"title"},[t._v("用户反馈")])]),t._v(" "),e("van-col",{staticClass:"feedback",attrs:{span:"24"}},t._l(t.feedback,function(a,n){return e("van-row",{key:n,staticClass:"feed_main"},[e("van-col",{attrs:{span:"5"}},[e("div",{staticClass:"head"},[e("van-icon",{attrs:{name:a.headicon}})],1)]),t._v(" "),e("van-col",{attrs:{span:"19"}},[e("h3",{staticClass:"type"},[t._v(t._s(a.title)),e("span",{staticClass:"nickname"},[t._v(t._s(a.username))])]),t._v(" "),e("p",{staticClass:"message"},[t._v("\n                          "+t._s(a.content)+"\n                      ")])])],1)}),1),t._v(" "),e("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[e("div",{staticClass:"popup"},[e("van-col",{staticClass:"title_big",attrs:{span:"24"}},[e("van-icon",{attrs:{name:"cross"},on:{click:t.close}}),t._v(" "),e("span",{staticClass:"title"},[t._v(t._s(""==t.title?"--":t.title))])],1),t._v(" "),e("van-col",{staticClass:"bill",attrs:{span:"24"}},[e("span",{staticClass:"unit"},[t._v("￥")]),t._v(" "),e("span",{staticClass:"bill_num"},[t._v(t._s(""==t.price?"--":t.price))])]),t._v(" "),e("van-col",{staticClass:"tip",attrs:{span:"24"}},[e("p",{staticClass:"tip_txt"},[t._v("支付"+t._s(""==t.desc?"--":t.desc))])]),t._v(" "),e("van-col",{staticClass:"main_title",attrs:{span:"24"}},[e("p",{staticClass:"main_tit_txt"},[t._v("选择行动主题:")])]),t._v(" "),e("van-col",{staticClass:"clock_type",attrs:{span:"24"}},[e("ul",[t._l(t.contractType,function(a,n){return e("li",{key:n,staticClass:"contract",class:n==t.status?"active":"",on:{click:function(e){return e.stopPropagation(),t.conType(n,a.check,a.title)}}},[e("van-icon",{attrs:{name:n==t.status?a.active:a.normal}}),t._v(" "),e("span",{staticClass:"cont_title"},[t._v(t._s(""==t.contractType?"--":a.title))])],1)}),t._v(" "),e("li",{staticClass:"contract",class:12==t.status?"active":"",staticStyle:{width:"100%"},on:{click:function(a){return t.conType(12)}}},[e("van-icon",{attrs:{name:12==t.status?"https://tdream.antit.top/5drinkingIA.png":"https://tdream.antit.top/5drinkingIU.png"}}),t._v(" "),e("span",{staticClass:"cont_title"},[t._v(t._s(12==t.status?t.custom:"其他"))])],1)],2),t._v(" "),e("van-dialog",{attrs:{title:"自定义主题(8字以内)","show-cancel-button":""},on:{confirm:t.confirm,cancel:t.cancel},model:{value:t.isshow,callback:function(a){t.isshow=a},expression:"isshow"}},[e("van-field",{attrs:{id:"theme",placeholder:"请输入主题"},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1)],1),t._v(" "),e("van-col",{staticClass:"warm",attrs:{span:"24"}},[e("p",{staticClass:"warning"},[t._v("注意事项:")])]),t._v(" "),e("van-col",{attrs:{span:"24",id:"warm"}}),t._v(" "),e("van-col",{staticClass:"btn",attrs:{span:"24"}},[e("van-button",{attrs:{type:"primary",round:"",size:"normal"},on:{click:function(a){return t.pay(t.cid)}}},[t._v("立即支付")])],1)],1)]),t._v(" "),e("van-popup",{staticClass:"contrace",model:{value:t.payCancel,callback:function(a){t.payCancel=a},expression:"payCancel"}},[e("div",{staticClass:"paycancel"},[e("div",{staticClass:"main"},[e("div",{staticClass:"avatar"}),t._v(" "),e("div",{staticClass:"text"},[e("div",{staticClass:"container"},[e("p",[t._v("寻梦导师")]),t._v(" "),e("p",[t._v("追梦行动达人")])])])]),t._v(" "),e("div",{staticClass:"btn"},[e("div",{staticClass:"left"},[e("van-button",{staticClass:"callMe",attrs:{round:""},on:{click:t.callMe}},[t._v("和她聊聊")])],1),t._v(" "),e("div",{staticClass:"right"},[e("van-button",{staticClass:"againPay",attrs:{round:""},on:{click:t.againPay}},[t._v("重新支付")])],1)])]),t._v(" "),e("div",{staticClass:"icon",staticStyle:{"text-align":"center","font-size":"0.88rem","margin-top":"0.6rem"}},[e("van-icon",{attrs:{name:"https://tdream.antit.top/DaKaOKX.png"},on:{click:function(a){t.payCancel=!1}}})],1)])],1)])},staticRenderFns:[]};var o=e("VU/8")(s,i,!1,function(t){e("uRqf")},null,null);a.a=o.exports},"674+":function(t,a){},DnOS:function(t,a){},JKiR:function(t,a){},RUOb:function(t,a){},aLZh:function(t,a){},eh36:function(t,a){},hW8u:function(t,a){},nsZj:function(t,a){},qOuj:function(t,a,e){"use strict";var n=e("bOdI"),s=e.n(n);e("r8FW");var i=e("VU/8")({name:"common",data:function(){return{tabbar:[{title:"参与互助",normal:"http://tdream.antit.top/image/nav_index_disable.png",active:"http://tdream.antit.top/image/nav_index.png",url:"http://tinydream.ivkcld.cn/TinydreamWeb/webpack/index.html",info:""},{title:"行动打卡",normal:"https://tdream.antit.top/ActiveSignInOff.png",active:"https://tdream.antit.top/ActiveSignInOk.png",url:"http://tinydream.ivkcld.cn/TinydreamWeb/webpack/html/payInfo/clockIn.html",info:""},{title:"个人中心",normal:"http://tdream.antit.top/image/nav_owner_disable.png",active:"http://tdream.antit.top/image/nav_owner.png",url:"http://tinydream.ivkcld.cn/TinydreamWeb/webpack/html/user/user.html",info:""}],ncount:""}}},null,!1,function(t){e("DnOS")},null,null).exports,o="oSORf5hkHfOy3Yo4FQIPdbHKQljM",c=!1,l={name:"App",data:function(){var t;return t={actives:1,tabbar:"",week:["日","一","二","三","四","五","六"],opid:"",currentMonth:"",isdisabled:!1,btnTxt:"立即打卡",isshow:!1,headicon:"",colckinfo:"",seek:-1,date:"",countMonth:""},s()(t,"date",""),s()(t,"shareTitle",""),t},created:function(){Options.TestServer=!1,this.tabbar=i.tabbar,this.GetUserInfo(this)},methods:{GetUserInfo:function(t){t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"信息拉取中..."}),WebApp.Init("wxc5216d15dd321ac5",function(a,e){console.log(Options.GetUserInfo()),t.$toast.clear(),t.Mat(t),t.headicon=Options.GetUserInfo().headimgurl})},clock:function(){this.Clock(this,this.opid)},Mat:function(t){t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"日历创建中..."}),TD_Request("op","cal",{uid:o,seek:t.seek,full:"month"},function(a,e){console.log(e),t.$toast.clear(),1==e.calendar.monthIndex.length&&$(".icon-left,.icon-right").hide(),e.calendar.monthIndex.length-1==t.seek&&$(".icon-right").hide(),t.seek=e.calendar.currentIndex,t.clockInfo(t,e.calendar.opid),t.countMonth=e.calendar.monthIndex.length-1,t.opid=e.calendar.opid,t.date=e.date,console.log(e.calendar.days),t.currentMonth=e.calendar.currentMonth.substr(0,4)+"."+e.calendar.currentMonth.substr(4,6),t.refreshDate(e.calendar.days,t,e.lastattend,e.cid)},function(a,e){t.$toast.clear(),t.$dialog.alert({title:"温馨提示",message:e.context}).then(function(){window.location.href="../../index.html?time="+(new Date).getTime()})})},Clock:function(t,a){TD_Request("op","mat",{opid:a,uid:o},function(e,n){t.btnTxt="已打卡",t.isdisabled=!0,console.log(n),t.clockInfo(t,a,n.attendance.date),t.isshow=!0},function(a,e){console.log(e),t.btnTxt="已打卡",t.isdisabled=!0,t.Mat(t)})},refreshDate:function(t,a,e,n){$(".weekDate .day").html("");t.length;var s=t[0].weekDay;"一"==s?s=1:"二"==s?s=2:"三"==s?s=3:"四"==s?s=4:"五"==s?s=5:"六"==s?s=6:"日"==s&&(s=0);for(var i=0;i<s;i++)$("<li>&nbsp;</li>").appendTo(".weekDate .day");$.each(t,function(t,n){n.hasOwnProperty("id")?(n.hasOwnProperty("today")&&n.today&&"RELAY"==n.state&&(a.btnTxt="已打卡",a.isdisabled=!0),0==n.id&&n.date==a.date&&(c=!0),"0"==n.id&&0==e?$('<li class="enable" id="'+n.date+'"><span class="normal">'+n.Day+"</span></li>").appendTo(".weekDate .day"):"0"==n.id&&-1==e?($('<li class="enable share" id="'+n.date+'"><span class="normal orange">'+n.Day+"</span></li>").appendTo(".weekDate .day"),a.btnTxt='点击"..."分享',a.isdisabled=!0):"0"==n.id&&-2==e&&($('<li class="enable" id="'+n.date+'"><span class="normal green_bg">'+n.Day+"</span></li>").appendTo(".weekDate .day"),a.btnTxt="已打卡",a.isdisabled=!0),n.dateStamp>=e&&"NONE"==n.state?$('<li class="enable" id="'+n.date+'"><span class="normal">'+n.Day+"</span></li>").appendTo(".weekDate .day"):"NONE"==n.state?$('<li class="enable leakage" data-stamp="'+n.dateStamp+'" id="'+n.date+'"><span class="normal gray">'+n.Day+"</span></li>").appendTo(".weekDate .day"):"NOTRELAY"==n.state?($('<li class="enable share" id="'+n.date+'"><span class="normal orange">'+n.Day+"</span></li>").appendTo(".weekDate .day"),a.btnTxt='点击"..."分享',a.isdisabled=!0):"RELAY"==n.state?$('<li class="enable" id="'+n.date+'"><span class="normal green_bg">'+n.Day+"</span></li>").appendTo(".weekDate .day"):"SUPPLY"==n.state&&$('<li class="enable" id="'+n.date+'"><span class="normal green">'+n.Day+"</span></li>").appendTo(".weekDate .day")):$('<li class="disabled"><span class="normal">'+n.Day+"</span></li>").appendTo(".weekDate .day")}),"CO0000000001"==n?$("li.enable.leakage").click(function(){a.$dialog.alert({title:"温馨提示",message:"该合约无法补卡"})}):"CO0000000002"==n&&$("li.enable.leakage").click(function(){a.card(a,$(this).attr("id"))}),a.clockInfo(a,a.opid,$("li.share").attr("id"))},clockInfo:function(t,a,e){console.log(e),t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"信息加载中..."}),TD_Request("op","oif",{opid:a},function(n,s){console.log(s),t.$toast.clear(),t.shareTitle=c?"追梦行动派":s.info.nickname+"已加入追梦行动派为 "+s.info.theme+" 坚持行动"+s.info.alrday+"天",WebApp.JSAPI.InitShare({title:t.shareTitle,desc:"有梦就行动，坚持返现金！",link:"http://tinydream.ivkcld.cn/TinydreamWeb/webpack/html/payInfo/friend.html?time="+(new Date).getTime()+"&opid="+a,imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"}),WebApp.JSAPI.OnShareTimeLine=function(n){console.log(n),n?(t.isshow=!1,t.share(t,a,e)):n&&t.$toast.fail("您取消了分享")},WebApp.JSAPI.OnShareFriend=function(n){console.log(n),n?(t.isshow=!1,t.share(t,a,e)):n&&t.$toast.fail("您取消了分享")},s.info.prec=parseInt(100*s.info.precentage),t.colckinfo=s.info},function(t,a){console.log(a)})},close:function(){this.isshow=!1,this.Mat(this)},card:function(t,a){t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"补卡中..."}),TD_Request("op","pat",{uid:o,date:a},function(a,e){console.log(e),t.$toast.clear(),t.Mat(t),window.location.href="../fill/fill.html?time="+(new Date).getTime()+"&opid="+t.opid+"&state=success"},function(a,e){t.$toast.clear(),87==a?t.$dialog.alert({title:"温馨提示",message:e.context}):88==a?t.$dialog.alert({title:"温馨提示",message:e.context}):89==a?window.location.href="../fill/fill.html?time="+(new Date).getTime()+"&opid="+t.opid+"&state=fail":90==a?t.$dialog.alert({title:"温馨提示",message:e.context}):91==a&&t.$dialog.alert({title:"温馨提示",message:e.context})})},share:function(t,a,e){console.log(e),void 0!==e?(console.log(e),TD_Request("op","rep",{opid:a,date:e,uid:o},function(a,e){t.$toast.success("分享成功"),t.Mat(t)},function(a,e){t.$toast.fail("分享失败")})):window.location.href="actionClock.html?time="+(new Date).getTime()},left:function(){console.log(this.seek),$(".icon-right").show(),0==this.seek?self.seek:($(".icon-left").show(),this.seek--),this.Mat(this)},right:function(){console.log(this.seek,this.countMonth),$(".icon-left").show(),this.seek==this.countMonth?$(".icon-right").hide():($(".icon-right").show(),this.seek++),this.Mat(this)},jl:function(){window.location.href="../list/list.html?time="+(new Date).getTime()}}},r={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"actionClock"},[e("div",{staticClass:"warp"},[e("van-col",{staticClass:"clock",attrs:{span:"24"}},[e("van-col",{attrs:{span:"24"}},[e("yd-progressbar",{staticClass:"progress",attrs:{progress:t.colckinfo.precentage,"trail-width":"8","trail-color":"#ffc054"}},[t._v(t._s(""==t.colckinfo?"--":t.colckinfo.prec)+"%")]),t._v(" "),e("span",{staticStyle:{color:"#00d094","text-decoration":"underline",position:"absolute",top:"0.5rem",right:"0.5rem"},on:{click:t.jl}},[t._v("合约记录")])],1),t._v(" "),e("van-col",{staticClass:"clockInfo",attrs:{span:"24"}},[e("van-row",[e("van-col",{attrs:{span:"8"}},[e("p",{staticClass:"title day"},[t._v(t._s(""==t.colckinfo?"--":t.colckinfo.desday))]),t._v(" "),e("p",{staticClass:"txt"},[t._v("距离目标天数")])]),t._v(" "),e("van-col",{attrs:{span:"8"}},[e("p",{staticClass:"title continday"},[t._v(t._s(""==t.colckinfo?"--":t.colckinfo.conday))]),t._v(" "),e("p",{staticClass:"txt"},[t._v("连续打卡天数")])]),t._v(" "),e("van-col",{attrs:{span:"8"}},[e("p",{staticClass:"title clockday"},[t._v(t._s(""==t.colckinfo?"--":t.colckinfo.alrday))]),t._v(" "),e("p",{staticClass:"txt"},[t._v("已打卡天数")])])],1)],1),t._v(" "),e("van-col",{staticClass:"btn",attrs:{span:"24"}},[e("van-button",{staticClass:"clock_btn",attrs:{round:"",disabled:t.isdisabled},on:{click:t.clock}},[t._v(t._s(t.btnTxt))])],1)],1),t._v(" "),e("van-col",{staticClass:"date",attrs:{span:"24"}},[e("div",{staticClass:"warper"},[e("van-row",{staticClass:"date",staticStyle:{width:"5.88rem",margin:"0 auto",padding:"0.38rem 0 0.5rem 0"}},[e("van-col",{staticStyle:{"text-align":"left",color:"#999"},attrs:{span:"8"}},[e("van-icon",{staticClass:"icon-left",attrs:{name:"arrow-left"},on:{click:t.left}})],1),t._v(" "),e("van-col",{staticStyle:{"text-align":"center"},attrs:{span:"8"}},[e("p",{staticStyle:{"font-size":"0.36rem"}},[t._v(t._s(""==t.currentMonth?"--":t.currentMonth))])]),t._v(" "),e("van-col",{staticStyle:{"text-align":"right",color:"#999"},attrs:{span:"8"}},[e("van-icon",{staticClass:"icon-right",attrs:{name:"arrow"},on:{click:t.right}})],1)],1),t._v(" "),e("div",{staticClass:"weekDate"},[e("ul",{staticClass:"title"},[e("li",[t._v(t._s(t.week[0]))]),t._v(" "),e("li",[t._v(t._s(t.week[1]))]),t._v(" "),e("li",[t._v(t._s(t.week[2]))]),t._v(" "),e("li",[t._v(t._s(t.week[3]))]),t._v(" "),e("li",[t._v(t._s(t.week[4]))]),t._v(" "),e("li",[t._v(t._s(t.week[5]))]),t._v(" "),e("li",[t._v(t._s(t.week[6]))])]),t._v(" "),e("ul",{staticClass:"day"})]),t._v(" "),e("div",{staticClass:"module"},[e("div",{staticClass:"main"},[e("van-col",{staticStyle:{"margin-top":"0.24rem"},attrs:{span:"16"}},[e("p",[e("span",{staticClass:"txt"},[e("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/image/blue_dot.png"}}),t._v(" "),e("span",[t._v("已打卡、已转发")])],1),t._v(" "),e("span",[e("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/image/green_dot.png"}}),t._v(" "),e("span",[t._v("已补卡")])],1)]),t._v(" "),e("p",[e("span",{staticClass:"txt"},[e("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/image/orange_dot.png"}}),t._v(" "),e("span",[t._v("已打卡、未转发")])],1),t._v(" "),e("span",[e("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/image/grey_dot.png"}}),t._v(" "),e("span",[t._v("未打卡")])],1)])])],1)])],1)])],1),t._v(" "),e("van-popup",{staticClass:"mask",model:{value:t.isshow,callback:function(a){t.isshow=a},expression:"isshow"}},[e("div",{staticClass:"clockState"},[e("div",{staticClass:"main"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.headicon,alt:""}})]),t._v(" "),e("div",{staticClass:"tip"},[e("p",[t._v("您已在追梦行动派")]),t._v(" "),e("p",[t._v("连续为"+t._s(""==t.colckinfo?"--":t.colckinfo.theme)+"行动打卡"+t._s(""==t.colckinfo?"--":t.colckinfo.conday)+"天")])]),t._v(" "),e("p",{staticClass:"shareBtn"},[t._v("点击右上角“...”立即分享今日打卡")]),t._v(" "),e("p",{staticStyle:{"text-align":"center","font-size":"0.26rem","padding-bottom":"0.4rem",color:"#4c4c4c"}},[t._v("每成功邀请1位好友参与合约可获得1次补卡机会")])])]),t._v(" "),e("van-icon",{staticClass:"close",attrs:{name:"https://tdream.antit.top/DaKaOKX.png"},on:{click:t.close}})],1)],1)])},staticRenderFns:[]};var d=e("VU/8")(l,r,!1,function(t){e("674+")},null,null);a.a=d.exports},sKgQ:function(t,a){},uRqf:function(t,a){},"vzl+":function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});e("3Lne");var n=e("SSsa"),s=(e("JRZP"),e("LK01")),i=(e("ZuV/"),e("37Xn")),o=(e("eqfM"),e("/QYm")),c=(e("k3b4"),e("+2ln")),l=(e("mMXg"),e("qYlo")),r=(e("XmAh"),e("il3B")),d=e("7+uW"),p=e("3HSV"),u=e("qOuj"),v={name:"clockIn",components:{payInfo:p.a,clockIn:u.a},data:function(){return{feedback:"",order:"",orders:"",cPerson:"",cAttendence:"",ispay:!1,isclock:!1}},created:function(){this.Orders(this)},methods:{Orders:function(t){this.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"数据加载中..."}),TD_Request("op","eomp",{uid:"oSORf5kkXvHNxhIx8lQVe3DFRFvw"},function(a,e){console.log(e),t.ispay=!0,t.feedback=e.feedback;var n=e.orders.shift();t.cPerson=e.cPerson,t.cAttendence=e.cAttendence,t.order=n,e.orders.push(n),t.orders=e.orders,t.$toast.clear(),t.loop(t),console.log(e.orders)},function(a,e){console.log(e),82==a&&(t.$toast.clear(),t.isclock=!0)})},loop:function(t){setInterval(function(){var a=t.orders.shift();t.order=a,t.orders.push(a)},3e3)}}},h={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"clock"},[a("clock-in",{directives:[{name:"show",rawName:"v-show",value:this.isclock,expression:"isclock"}]})],1)},staticRenderFns:[]};var f=e("VU/8")(v,h,!1,function(t){e("aLZh")},null,null).exports,m=e("iA4B");d.default.use(n.a).use(s.a).use(i.a).use(o.a).use(c.a).use(l.a).use(r.a),d.default.component(m.ProgressBar.name,m.ProgressBar),d.default.config.productionTip=!1,new d.default({el:"#app",components:{App:f},template:"<App/>"})}},["vzl+"]);
//# sourceMappingURL=clockIn.94da487d279785bb017c.js.map