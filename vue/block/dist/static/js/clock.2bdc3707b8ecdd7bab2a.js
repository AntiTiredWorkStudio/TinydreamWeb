webpackJsonp([1],{"97dx":function(t,a){},DafU:function(t,a){},JKiR:function(t,a){},NAlg:function(t,a){},RUOb:function(t,a){},VL4o:function(t,a){},VbU8:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});s("RgoE");var e=s("0KWt"),n=(s("1E9F"),s("2Ux5")),i=(s("eqfM"),s("/QYm")),o=(s("JRZP"),s("LK01")),c=(s("ZuV/"),s("37Xn")),l=(s("3Lne"),s("SSsa")),r=(s("mMXg"),s("qYlo")),d=(s("k3b4"),s("+2ln")),p=(s("XmAh"),s("il3B")),u=s("7+uW"),v="oSORf5kkXvHNxhIx8lQVe3DFRFvw",h={name:"payinfo",data:function(){return{actives:1,tabbar:"",contracts:"",show:!1,payCancel:!1,cid:"",desc:"",title:"",contractType:"",price:"",day:"",warm:"",status:null,theme:"",isshow:!1,custom:"",value:"",cattention:"",feedback:"",order:"",orders:"",cPerson:"",cAttendence:""}},created:function(){this.list(this)},methods:{buy:function(t){this.show=!0,this.ContractInfo(this,t)},conType:function(t,a,s){this.status=t,12!=t?this.theme=this.contractType[t].title:(this.isshow=!0,$(".banner").css("background","rgba(0,0,0,.5) url(undefined)"),$("#theme.van-field__control").focus())},removeArray:function(t,a){for(var s=0;s<t.length;s++)if(t[s]==a){t.splice(s,1);break}},close:function(){this.status=null,this.show=!1,this.payCancel=!0},pay:function(t){if(""==this.theme)this.$dialog.alert({title:"温馨提示",message:"亲~目标才是坚持行动的动力，选择一个行动主题作为坚持目标吧！"}).then(function(){});else{var a=this.theme;console.log(a),this.wxpay(this,t,a)}},list:function(t){t.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"列表获取中..."}),TD_Request("co","list",{},function(a,s){console.log(s),t.contractType=s.themes,t.contracts=s.contracts,t.cattention=s.cattention,t.$toast.clear()},function(a,s){t.$toast.clear(),alert(s.context)})},ContractInfo:function(t,a){t.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"信息获取中..."}),TD_Request("co","info",{cid:a},function(s,e){console.log(e),t.title=e.contract.title,t.desc=e.contract.description,t.price=e.contract.price/100,t.cid=e.contract.cid,"CO0000000001"==a?$("#warm").html(t.cattention.CO0000000001):"CO0000000002"==a&&$("#warm").html(t.cattention.CO0000000002),t.$toast.clear()},function(a,s){t.$toast.clear(),alert(s.context)})},wxpay:function(t,a,s){t.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"准备中..."}),TD_Request("op","joi",{cid:a,uid:v},function(e,n){console.log(n),t.$toast.clear(),t.wxpayweb(t,n.pay,n.order.oid,a,s)},function(a,s){t.$toast.clear(),81==a?t.$dialog.alert({title:"错误提示",message:"合约ID有误，请联系客服进行处理"}).then(function(){window.location.href="cach.html?time="+(new Date).getTime()}):82==a?t.$dialog.alert({title:"温馨提示",message:"您的合约正在进行中"}).then(function(){}):11==a?t.$dialog.alert({title:"温馨提示",message:"绑定手机后才可以购买合约哦！"}).then(function(){window.location.href="../../../html/phoneManage.html?time="+(new Date).getTime()}):58==a&&t.$dialog.confirm({title:"错误提示",message:"订单错误，如连续出现此错误，请联系客服小姐姐进行处理哦！"}).then(function(){window.location.href="../../../html/cach.html?time="+(new Date).getTime()}).catch(function(){}),console.log(s)})},wxpayweb:function(t,a,s,e,n){t.$toast.loading({duraction:0,forbidClick:!0,loadingType:"circular",message:"支付中..."}),WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:a.appId,timeStamp:a.timeStamp,nonceStr:a.nonceStr,package:a.package,signType:a.signType,paySign:a.paySign},function(a){"get_brand_wcpay_request:ok"==a.err_msg?t.paySuccess(e,s,v,n):"get_brand_wcpay_request:cancel"==a.err_msg&&t.$toast.fail("支付取消")})},paySuccess:function(t,a,s,e){TD_Request("op","jof",{cid:t,oid:a,uid:s,theme:e},function(t,a){window.location.href="../actionClock/actionClock.html?time="+(new Date).getTime()},function(t,a){alert(t)})},againPay:function(){this.payCancel=!1,this.show=!0},confirm:function(){$(".banner").css("background","url(https://tdream.antit.top/ActiveContractBanner.jpg) no-repeat center center / 7.5rem 2.3rem"),""==this.value?(this.custom="其他",this.theme="",this.status="undefined"):(this.custom=this.value,this.theme=this.value)},cancel:function(){$(".banner").css("background","url(https://tdream.antit.top/ActiveContractBanner.jpg) no-repeat center center / 7.5rem 2.3rem"),this.custom="其他",this.theme="",this.status=null},callMe:function(){window.location.href="../../../html/cach.html?time="+(new Date).getTime()}},watch:{value:function(t){t.length>=8&&(this.value=t.substr(0,20),console.log(this.value))}}},f={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"payInfo"},[s("div",{staticClass:"clockIn"},[s("van-col",{attrs:{span:"24"}},[s("div",{staticClass:"banner"},[s("p",[t._v("已成功帮助"+t._s(""==t.cPerson?"--":t.cPerson)+"追梦人，坚持行动"+t._s(""==t.cAttendence?"--":t.cAttendence)+"次！")])])]),t._v(" "),s("van-col",{staticStyle:{background:"#fff","margin-top":"0.3rem"},attrs:{span:"24"}},[s("div",{staticClass:"screen"},[s("span",{staticClass:"circle"},[t._v("·")]),t._v(" "),s("span",{staticClass:"info"},[t._v(t._s(""==t.order?"--":t.order.nickname)+"支付"+t._s(""==t.order?"--":t.order.bill/100)+"元合约")]),t._v(" "),s("span",{staticClass:"time"},[t._v("刚刚")])])]),t._v(" "),s("van-col",{staticClass:"contract",attrs:{span:"24"}},[s("div",{staticClass:"main"},[s("van-col",{attrs:{span:"24"}},[s("div",{staticClass:"day-100",on:{click:function(a){return a.stopPropagation(),t.buy(t.contracts[1].cid)}}},[s("h3",{staticClass:"title"},[t._v(t._s(""==t.contracts?"--":t.contracts[1].title))]),t._v(" "),s("p",{staticClass:"desc"},[t._v("\n                            "+t._s(""==t.contracts?"--":t.contracts[1].description)+"\n                        ")]),t._v(" "),s("van-button",{staticClass:"buy",attrs:{round:"",size:"small",type:"primary"},on:{click:function(a){return a.stopPropagation(),t.buy(t.contracts[1].cid)}}},[t._v("立即购买")])],1)]),t._v(" "),s("van-col",{attrs:{span:"24"}},[s("div",{staticClass:"day-21",on:{click:function(a){return a.stopPropagation(),t.buy(t.contracts[1].cid)}}},[s("h3",{staticClass:"title right"},[t._v(t._s(""==t.contracts?"--":t.contracts[0].title))]),t._v(" "),s("p",{staticClass:"desc right"},[t._v("\n                            "+t._s(""==t.contracts?"--":t.contracts[0].description)+"\n                        ")]),t._v(" "),s("van-col",{staticStyle:{"text-align":"right"},attrs:{span:"24"}},[s("van-button",{staticClass:"buy right",attrs:{round:"",size:"small",type:"primary"},on:{click:function(a){return a.stopPropagation(),t.buy(t.contracts[0].cid)}}},[t._v("立即购买")])],1)],1)])],1)]),t._v(" "),s("van-col",{staticClass:"model",staticStyle:{width:"6.8rem",margin:"0 0 0 0.3rem"}},[s("span"),t._v(" "),s("h3",{staticClass:"title"},[t._v("用户反馈")])]),t._v(" "),s("van-col",{staticClass:"feedback",attrs:{span:"24"}},t._l(t.feedback,function(a,e){return s("van-row",{key:e,staticClass:"feed_main"},[s("van-col",{attrs:{span:"5"}},[s("div",{staticClass:"head"},[s("van-icon",{attrs:{name:a.headicon}})],1)]),t._v(" "),s("van-col",{attrs:{span:"19"}},[s("h3",{staticClass:"type"},[t._v(t._s(a.title)),s("span",{staticClass:"nickname"},[t._v(t._s(a.username))])]),t._v(" "),s("p",{staticClass:"message"},[t._v("\n                        "+t._s(a.content)+"\n                    ")])])],1)}),1),t._v(" "),s("van-popup",{attrs:{position:"bottom",overlay:!0},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}},[s("div",{staticClass:"popup"},[s("van-col",{staticClass:"title_big",attrs:{span:"24"}},[s("van-icon",{attrs:{name:"cross"},on:{click:t.close}}),t._v(" "),s("span",{staticClass:"title"},[t._v(t._s(""==t.title?"--":t.title))])],1),t._v(" "),s("van-col",{staticClass:"bill",attrs:{span:"24"}},[s("span",{staticClass:"unit"},[t._v("￥")]),t._v(" "),s("span",{staticClass:"bill_num"},[t._v(t._s(""==t.price?"--":t.price))])]),t._v(" "),s("van-col",{staticClass:"tip",attrs:{span:"24"}},[s("p",{staticClass:"tip_txt"},[t._v("支付"+t._s(""==t.desc?"--":t.desc))])]),t._v(" "),s("van-col",{staticClass:"main_title",attrs:{span:"24"}},[s("p",{staticClass:"main_tit_txt"},[t._v("选择行动主题:")])]),t._v(" "),s("van-col",{staticClass:"clock_type",attrs:{span:"24"}},[s("ul",[t._l(t.contractType,function(a,e){return s("li",{key:e,staticClass:"contract",class:e==t.status?"active":"",on:{click:function(s){return s.stopPropagation(),t.conType(e,a.check,a.title)}}},[s("van-icon",{attrs:{name:e==t.status?a.active:a.normal}}),t._v(" "),s("span",{staticClass:"cont_title"},[t._v(t._s(""==t.contractType?"--":a.title))])],1)}),t._v(" "),s("li",{staticClass:"contract",class:12==t.status?"active":"",staticStyle:{width:"100%"},on:{click:function(a){return t.conType(12)}}},[s("van-icon",{attrs:{name:12==t.status?"https://tdream.antit.top/5drinkingIA.png":"https://tdream.antit.top/5drinkingIU.png"}}),t._v(" "),s("span",{staticClass:"cont_title"},[t._v(t._s(12==t.status?t.custom:"其他"))])],1)],2),t._v(" "),s("van-dialog",{attrs:{title:"自定义主题(8字以内)","show-cancel-button":""},on:{confirm:t.confirm,cancel:t.cancel},model:{value:t.isshow,callback:function(a){t.isshow=a},expression:"isshow"}},[s("van-field",{attrs:{id:"theme",placeholder:"请输入主题"},model:{value:t.value,callback:function(a){t.value=a},expression:"value"}})],1)],1),t._v(" "),s("van-col",{staticClass:"warm",attrs:{span:"24"}},[s("p",{staticClass:"warning"},[t._v("注意事项:")])]),t._v(" "),s("van-col",{attrs:{span:"24",id:"warm"}}),t._v(" "),s("van-col",{staticClass:"btn",attrs:{span:"24"}},[s("van-button",{attrs:{type:"primary",round:"",size:"normal"},on:{click:function(a){return t.pay(t.cid)}}},[t._v("立即支付")])],1)],1)]),t._v(" "),s("van-popup",{staticClass:"contrace",model:{value:t.payCancel,callback:function(a){t.payCancel=a},expression:"payCancel"}},[s("div",{staticClass:"paycancel"},[s("div",{staticClass:"main"},[s("div",{staticClass:"avatar"}),t._v(" "),s("div",{staticClass:"text"},[s("div",{staticClass:"container"},[s("p",[t._v("寻梦导师")]),t._v(" "),s("p",[t._v("追梦行动达人")])])])]),t._v(" "),s("div",{staticClass:"btn"},[s("div",{staticClass:"left"},[s("van-button",{staticClass:"callMe",attrs:{round:""},on:{click:t.callMe}},[t._v("和她聊聊")])],1),t._v(" "),s("div",{staticClass:"right"},[s("van-button",{staticClass:"againPay",attrs:{round:""},on:{click:t.againPay}},[t._v("重新支付")])],1)])]),t._v(" "),s("div",{staticClass:"icon",staticStyle:{"text-align":"center","font-size":"0.88rem","margin-top":"0.6rem"}},[s("van-icon",{attrs:{name:"https://tdream.antit.top/DaKaOKX.png"},on:{click:function(a){t.payCancel=!1}}})],1)])],1)])},staticRenderFns:[]};var m=s("VU/8")(h,f,!1,function(t){s("DafU")},"data-v-4c201b74",null).exports,g=s("bOdI"),_=s.n(g),k=Options.GetUserInfo().openid,y=!1,C={name:"clockIn",data:function(){var t;return t={actives:1,tabbar:"",week:["日","一","二","三","四","五","六"],opid:"",currentMonth:"",isdisabled:!1,btnTxt:"立即打卡",isshow:!1,headicon:"",colckinfo:"",seek:-1,date:"",countMonth:""},_()(t,"date",""),_()(t,"shareTitle",""),t},created:function(){Options.TestServer=!1,this.Mat(this),this.headicon=Options.GetUserInfo().headimgurl},methods:{clock:function(){this.Clock(this,this.opid)},Mat:function(t){t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"日历创建中..."}),TD_Request("op","cal",{uid:k,seek:t.seek,full:"month"},function(a,s){console.log(s),t.$toast.clear(),1==s.calendar.monthIndex.length&&$(".icon-left,.icon-right").hide(),s.calendar.monthIndex.length-1==t.seek&&$(".icon-right").hide(),t.seek=s.calendar.currentIndex,t.clockInfo(t,s.calendar.opid),t.countMonth=s.calendar.monthIndex.length-1,t.opid=s.calendar.opid,t.date=s.date,console.log(s.calendar.days),t.currentMonth=s.calendar.currentMonth.substr(0,4)+"."+s.calendar.currentMonth.substr(4,6),t.refreshDate(s.calendar.days,t,s.lastattend,s.cid)},function(a,s){t.$toast.clear(),t.$dialog.alert({title:"温馨提示",message:s.context}).then(function(){window.location.href="../../index.html?time="+(new Date).getTime()})})},Clock:function(t,a){TD_Request("op","mat",{opid:a,uid:k},function(s,e){t.btnTxt="已打卡",t.isdisabled=!0,console.log(e),t.clockInfo(t,a,e.attendance.date),t.isshow=!0},function(a,s){console.log(s),t.btnTxt="已打卡",t.isdisabled=!0,t.Mat(t)})},refreshDate:function(t,a,s,e){$(".weekDate .day").html("");t.length;var n=t[0].weekDay;"一"==n?n=1:"二"==n?n=2:"三"==n?n=3:"四"==n?n=4:"五"==n?n=5:"六"==n?n=6:"日"==n&&(n=0);for(var i=0;i<n;i++)$("<li>&nbsp;</li>").appendTo(".weekDate .day");$.each(t,function(t,e){e.hasOwnProperty("id")?(e.hasOwnProperty("today")&&e.today&&"RELAY"==e.state&&(a.btnTxt="已打卡",a.isdisabled=!0),0==e.id&&e.date==a.date&&(y=!0),"0"==e.id&&0==s?$('<li class="enable" id="'+e.date+'"><span class="normal">'+e.Day+"</span></li>").appendTo(".weekDate .day"):"0"==e.id&&-1==s?($('<li class="enable share" id="'+e.date+'"><span class="normal orange">'+e.Day+"</span></li>").appendTo(".weekDate .day"),a.btnTxt='点击"..."分享',a.isdisabled=!0):"0"==e.id&&-2==s&&($('<li class="enable" id="'+e.date+'"><span class="normal green_bg">'+e.Day+"</span></li>").appendTo(".weekDate .day"),a.btnTxt="已打卡",a.isdisabled=!0),e.dateStamp>=s&&"NONE"==e.state?$('<li class="enable" id="'+e.date+'"><span class="normal">'+e.Day+"</span></li>").appendTo(".weekDate .day"):"NONE"==e.state?$('<li class="enable leakage" data-stamp="'+e.dateStamp+'" id="'+e.date+'"><span class="normal gray">'+e.Day+"</span></li>").appendTo(".weekDate .day"):"NOTRELAY"==e.state?($('<li class="enable share" id="'+e.date+'"><span class="normal orange">'+e.Day+"</span></li>").appendTo(".weekDate .day"),a.btnTxt='点击"..."分享',a.isdisabled=!0):"RELAY"==e.state?$('<li class="enable" id="'+e.date+'"><span class="normal green_bg">'+e.Day+"</span></li>").appendTo(".weekDate .day"):"SUPPLY"==e.state&&$('<li class="enable" id="'+e.date+'"><span class="normal green">'+e.Day+"</span></li>").appendTo(".weekDate .day")):$('<li class="disabled"><span class="normal">'+e.Day+"</span></li>").appendTo(".weekDate .day")}),"CO0000000001"==e?$("li.enable.leakage").click(function(){a.$dialog.alert({title:"温馨提示",message:"该合约无法补卡"})}):"CO0000000002"==e&&$("li.enable.leakage").click(function(){a.card(a,$(this).attr("id"))}),a.clockInfo(a,a.opid,$("li.share").attr("id"))},clockInfo:function(t,a,s){console.log(s),t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"信息加载中..."}),TD_Request("op","oif",{opid:a},function(e,n){console.log(n),t.$toast.clear(),t.shareTitle=y?"追梦行动派":n.info.nickname+"已加入追梦行动派为 "+n.info.theme+" 坚持行动"+n.info.alrday+"天",WebApp.JSAPI.InitShare({title:t.shareTitle,desc:"有梦就行动，坚持返现金！",link:"http://tinydream.ivkcld.cn/TinydreamWeb/webpack/html/payInfo/friend.html?time="+(new Date).getTime()+"&opid="+a,imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"}),WebApp.JSAPI.OnShareTimeLine=function(e){console.log(e),e?(t.isshow=!1,t.share(t,a,s)):e&&t.$toast.fail("您取消了分享")},WebApp.JSAPI.OnShareFriend=function(e){console.log(e),e?(t.isshow=!1,t.share(t,a,s)):e&&t.$toast.fail("您取消了分享")},n.info.prec=parseInt(100*n.info.precentage),t.colckinfo=n.info},function(t,a){console.log(a)})},close:function(){this.isshow=!1,this.Mat(this)},card:function(t,a){t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"补卡中..."}),TD_Request("op","pat",{uid:k,date:a},function(a,s){console.log(s),t.$toast.clear(),t.Mat(t),window.location.href="../fill/fill.html?time="+(new Date).getTime()+"&opid="+t.opid+"&state=success"},function(a,s){t.$toast.clear(),87==a?t.$dialog.alert({title:"温馨提示",message:s.context}):88==a?t.$dialog.alert({title:"温馨提示",message:s.context}):89==a?window.location.href="../fill/fill.html?time="+(new Date).getTime()+"&opid="+t.opid+"&state=fail":90==a?t.$dialog.alert({title:"温馨提示",message:s.context}):91==a&&t.$dialog.alert({title:"温馨提示",message:s.context})})},share:function(t,a,s){console.log(s),void 0!==s?(console.log(s),TD_Request("op","rep",{opid:a,date:s,uid:k},function(a,s){t.$toast.success("分享成功"),t.Mat(t)},function(a,s){t.$toast.fail("分享失败")})):window.location.href="actionClock.html?time="+(new Date).getTime()},left:function(){console.log(this.seek),$(".icon-right").show(),0==this.seek?self.seek:($(".icon-left").show(),this.seek--),this.Mat(this)},right:function(){console.log(this.seek,this.countMonth),$(".icon-left").show(),this.seek==this.countMonth?$(".icon-right").hide():($(".icon-right").show(),this.seek++),this.Mat(this)},jl:function(){window.location.href="../list/list.html?time="+(new Date).getTime()}}},b={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"clockIn"},[s("div",{staticClass:"actionClock"},[s("div",{staticClass:"warp"},[s("van-col",{staticClass:"clock",attrs:{span:"24"}},[s("van-col",{attrs:{span:"24"}},[s("yd-progressbar",{staticClass:"progress",attrs:{progress:t.colckinfo.precentage,"trail-width":"8","trail-color":"#ffc054"}},[t._v(t._s(""==t.colckinfo?"--":t.colckinfo.prec)+"%")]),t._v(" "),s("span",{staticStyle:{color:"#00d094","text-decoration":"underline",position:"absolute",top:"0.5rem",right:"0.5rem"},on:{click:t.jl}},[t._v("合约记录")])],1),t._v(" "),s("van-col",{staticClass:"clockInfo",attrs:{span:"24"}},[s("van-row",[s("van-col",{attrs:{span:"8"}},[s("p",{staticClass:"title day"},[t._v(t._s(""==t.colckinfo?"--":t.colckinfo.desday))]),t._v(" "),s("p",{staticClass:"txt"},[t._v("距离目标天数")])]),t._v(" "),s("van-col",{attrs:{span:"8"}},[s("p",{staticClass:"title continday"},[t._v(t._s(""==t.colckinfo?"--":t.colckinfo.conday))]),t._v(" "),s("p",{staticClass:"txt"},[t._v("连续打卡天数")])]),t._v(" "),s("van-col",{attrs:{span:"8"}},[s("p",{staticClass:"title clockday"},[t._v(t._s(""==t.colckinfo?"--":t.colckinfo.alrday))]),t._v(" "),s("p",{staticClass:"txt"},[t._v("已打卡天数")])])],1)],1),t._v(" "),s("van-col",{staticClass:"btn",attrs:{span:"24"}},[s("van-button",{staticClass:"clock_btn",attrs:{round:"",disabled:t.isdisabled},on:{click:t.clock}},[t._v(t._s(t.btnTxt))])],1)],1),t._v(" "),s("van-col",{staticClass:"date",attrs:{span:"24"}},[s("div",{staticClass:"warper"},[s("van-row",{staticClass:"date",staticStyle:{width:"5.88rem",margin:"0 auto",padding:"0.38rem 0 0.5rem 0"}},[s("van-col",{staticStyle:{"text-align":"left",color:"#999"},attrs:{span:"8"}},[s("van-icon",{staticClass:"icon-left",attrs:{name:"arrow-left"},on:{click:t.left}})],1),t._v(" "),s("van-col",{staticStyle:{"text-align":"center"},attrs:{span:"8"}},[s("p",{staticStyle:{"font-size":"0.36rem"}},[t._v(t._s(""==t.currentMonth?"--":t.currentMonth))])]),t._v(" "),s("van-col",{staticStyle:{"text-align":"right",color:"#999"},attrs:{span:"8"}},[s("van-icon",{staticClass:"icon-right",attrs:{name:"arrow"},on:{click:t.right}})],1)],1),t._v(" "),s("div",{staticClass:"weekDate"},[s("ul",{staticClass:"title"},[s("li",[t._v(t._s(t.week[0]))]),t._v(" "),s("li",[t._v(t._s(t.week[1]))]),t._v(" "),s("li",[t._v(t._s(t.week[2]))]),t._v(" "),s("li",[t._v(t._s(t.week[3]))]),t._v(" "),s("li",[t._v(t._s(t.week[4]))]),t._v(" "),s("li",[t._v(t._s(t.week[5]))]),t._v(" "),s("li",[t._v(t._s(t.week[6]))])]),t._v(" "),s("ul",{staticClass:"day"})]),t._v(" "),s("div",{staticClass:"module"},[s("div",{staticClass:"main"},[s("van-col",{staticStyle:{"margin-top":"0.24rem"},attrs:{span:"16"}},[s("p",[s("span",{staticClass:"txt"},[s("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/image/blue_dot.png"}}),t._v(" "),s("span",[t._v("已打卡、已转发")])],1),t._v(" "),s("span",[s("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/image/green_dot.png"}}),t._v(" "),s("span",[t._v("已补卡")])],1)]),t._v(" "),s("p",[s("span",{staticClass:"txt"},[s("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/image/orange_dot.png"}}),t._v(" "),s("span",[t._v("已打卡、未转发")])],1),t._v(" "),s("span",[s("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/image/grey_dot.png"}}),t._v(" "),s("span",[t._v("未打卡")])],1)])])],1)])],1)])],1),t._v(" "),s("van-popup",{staticClass:"mask",model:{value:t.isshow,callback:function(a){t.isshow=a},expression:"isshow"}},[s("div",{staticClass:"clockState"},[s("div",{staticClass:"main"},[s("div",{staticClass:"avatar"},[s("img",{attrs:{src:t.headicon,alt:""}})]),t._v(" "),s("div",{staticClass:"tip"},[s("p",[t._v("您已在追梦行动派")]),t._v(" "),s("p",[t._v("连续为"+t._s(""==t.colckinfo?"--":t.colckinfo.theme)+"行动打卡"+t._s(""==t.colckinfo?"--":t.colckinfo.conday)+"天")])]),t._v(" "),s("p",{staticClass:"shareBtn"},[t._v("点击右上角“...”立即分享今日打卡")]),t._v(" "),s("p",{staticStyle:{"text-align":"center","font-size":"0.26rem","padding-bottom":"0.4rem",color:"#4c4c4c"}},[t._v("每成功邀请1位好友参与合约可获得1次补卡机会")])])]),t._v(" "),s("van-icon",{staticClass:"close",attrs:{name:"https://tdream.antit.top/DaKaOKX.png"},on:{click:t.close}})],1)],1)])},staticRenderFns:[]};var w={name:"App",data:function(){return{ispay:!1,isclock:!1}},components:{payInfo:m,clockIn:s("VU/8")(C,b,!1,function(t){s("VL4o")},"data-v-e524b4c0",null).exports},created:function(){this.GetUserInfo(this)},methods:{GetUserInfo:function(t){t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"信息拉取中..."}),WebApp.Init("wxc5216d15dd321ac5",function(a,s){console.log(Options.GetUserInfo()),t.userInfo=Options.GetUserInfo(),Options.TestServer=!1,t.$toast.clear(),t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"信息注册中..."}),t.Register(t)})},Register:function(t){TD_Request("us","enter",{uid:t.userInfo.openid,nickname:t.userInfo.nickname,headicon:t.userInfo.headimgurl},function(a,s){console.log(s),t.$toast.clear(),t.Orders(t)},function(t,a){console.log(a)})},Orders:function(t){this.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"数据加载中..."}),TD_Request("op","eomp",{uid:"oSORf5kkXvHNxhIx8lQVe3DFRFvw"},function(a,s){console.log(s),t.feedback=s.feedback;var e=s.orders.shift();t.cPerson=s.cPerson,t.cAttendence=s.cAttendence,t.order=e,s.orders.push(e),t.orders=s.orders,t.$toast.clear(),t.loop(t),console.log(s.orders)},function(a,s){console.log(s),t.$toast.clear()})}}},T={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[this.ispay?a("pay-info"):this._e(),this._v(" "),a("clock-in")],1)},staticRenderFns:[]};var x=s("VU/8")(w,T,!1,function(t){s("vLYD")},"data-v-d09058e8",null).exports,D=s("iA4B");u.a.component(D.ProgressBar.name,D.ProgressBar),u.a.use(e.a).use(n.a).use(i.a).use(o.a).use(c.a).use(l.a).use(r.a).use(d.a).use(p.a),u.a.config.productionTip=!1,new u.a({el:"#app",components:{App:x},template:"<App/>"})},eh36:function(t,a){},hW8u:function(t,a){},nsZj:function(t,a){},sKgQ:function(t,a){},vLYD:function(t,a){}},["VbU8"]);
//# sourceMappingURL=clock.2bdc3707b8ecdd7bab2a.js.map