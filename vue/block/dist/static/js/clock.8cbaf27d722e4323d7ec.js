webpackJsonp([1],{"97dx":function(t,a){},JKiR:function(t,a){},NAlg:function(t,a){},RUOb:function(t,a){},VbU8:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});e("RgoE");var n=e("0KWt"),s=(e("1E9F"),e("2Ux5")),o=(e("eqfM"),e("/QYm")),i=(e("JRZP"),e("LK01")),c=(e("ZuV/"),e("37Xn")),l=(e("3Lne"),e("SSsa")),r=(e("mMXg"),e("qYlo")),d=(e("k3b4"),e("+2ln")),p=(e("XmAh"),e("il3B")),f=e("7+uW"),u=e("bOdI"),h=e.n(u),g=Options.GetUserInfo().openid,m=!1,v={name:"actionClock",data:function(){var t;return t={actives:1,tabbar:"",week:["日","一","二","三","四","五","六"],opid:"",currentMonth:"",isdisabled:!1,btnTxt:"立即打卡",isshow:!1,headicon:"",colckinfo:"",seek:-1,date:"",countMonth:""},h()(t,"date",""),h()(t,"shareTitle",""),t},created:function(){this.Mat(this),this.headicon=Options.GetUserInfo().headimgurl},methods:{clock:function(){this.Clock(this,this.opid)},Mat:function(t){t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"日历创建中..."}),TD_Request("op","cal",{uid:g,seek:t.seek,full:"month"},function(a,e){console.log(e),t.$toast.clear(),1==e.calendar.monthIndex.length&&$(".icon-left,.icon-right").hide(),e.calendar.monthIndex.length-1==t.seek&&$(".icon-right").hide(),t.seek=e.calendar.currentIndex,t.clockInfo(t,e.calendar.opid),t.countMonth=e.calendar.monthIndex.length-1,t.opid=e.calendar.opid,t.date=e.date,console.log(e.calendar.days),t.currentMonth=e.calendar.currentMonth.substr(0,4)+"."+e.calendar.currentMonth.substr(4,6),t.refreshDate(e.calendar.days,t,e.lastattend,e.cid)},function(a,e){t.$toast.clear(),t.$dialog.alert({title:"温馨提示",message:e.context}).then(function(){window.location.href="../../index.html?time="+(new Date).getTime()})})},Clock:function(t,a){TD_Request("op","mat",{opid:a,uid:g},function(e,n){t.btnTxt="已打卡",t.isdisabled=!0,console.log(n),t.clockInfo(t,a,n.attendance.date),t.isshow=!0},function(a,e){console.log(e),t.btnTxt="已打卡",t.isdisabled=!0,t.Mat(t)})},refreshDate:function(t,a,e,n){$(".weekDate .day").html("");t.length;var s=t[0].weekDay;"一"==s?s=1:"二"==s?s=2:"三"==s?s=3:"四"==s?s=4:"五"==s?s=5:"六"==s?s=6:"日"==s&&(s=0);for(var o=0;o<s;o++)$("<li>&nbsp;</li>").appendTo(".weekDate .day");$.each(t,function(t,n){n.hasOwnProperty("id")?(n.hasOwnProperty("today")&&n.today&&"RELAY"==n.state&&(a.btnTxt="已打卡",a.isdisabled=!0),0==n.id&&n.date==a.date&&(m=!0),"0"==n.id&&0==e?$('<li class="enable" id="'+n.date+'"><span class="normal">'+n.Day+"</span></li>").appendTo(".weekDate .day"):"0"==n.id&&-1==e?($('<li class="enable share" id="'+n.date+'"><span class="normal orange">'+n.Day+"</span></li>").appendTo(".weekDate .day"),a.btnTxt='点击"..."分享',a.isdisabled=!0):"0"==n.id&&-2==e&&($('<li class="enable" id="'+n.date+'"><span class="normal green_bg">'+n.Day+"</span></li>").appendTo(".weekDate .day"),a.btnTxt="已打卡",a.isdisabled=!0),n.dateStamp>=e&&"NONE"==n.state?$('<li class="enable" id="'+n.date+'"><span class="normal">'+n.Day+"</span></li>").appendTo(".weekDate .day"):"NONE"==n.state?$('<li class="enable leakage" data-stamp="'+n.dateStamp+'" id="'+n.date+'"><span class="normal gray">'+n.Day+"</span></li>").appendTo(".weekDate .day"):"NOTRELAY"==n.state?($('<li class="enable share" id="'+n.date+'"><span class="normal orange">'+n.Day+"</span></li>").appendTo(".weekDate .day"),a.btnTxt='点击"..."分享',a.isdisabled=!0):"RELAY"==n.state?$('<li class="enable" id="'+n.date+'"><span class="normal green_bg">'+n.Day+"</span></li>").appendTo(".weekDate .day"):"SUPPLY"==n.state&&$('<li class="enable" id="'+n.date+'"><span class="normal green">'+n.Day+"</span></li>").appendTo(".weekDate .day")):$('<li class="disabled"><span class="normal">'+n.Day+"</span></li>").appendTo(".weekDate .day")}),"CO0000000001"==n?$("li.enable.leakage").click(function(){a.$dialog.alert({title:"温馨提示",message:"该合约无法补卡"})}):"CO0000000002"==n&&$("li.enable.leakage").click(function(){a.card(a,$(this).attr("id"))}),a.clockInfo(a,a.opid,$("li.share").attr("id"))},clockInfo:function(t,a,e){console.log(e),t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"信息加载中..."}),TD_Request("op","oif",{opid:a},function(n,s){console.log(s),t.$toast.clear(),t.shareTitle=m?"追梦行动派":s.info.nickname+"已加入追梦行动派为 "+s.info.theme+" 坚持行动"+s.info.alrday+"天",WebApp.JSAPI.InitShare({title:t.shareTitle,desc:"有梦就行动，坚持返现金！",link:"http://tinydream.ivkcld.cn/TinydreamWeb/webpack/html/payInfo/friend.html?time="+(new Date).getTime()+"&opid="+a,imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"}),WebApp.JSAPI.OnShareTimeLine=function(n){console.log(n),n?(t.isshow=!1,t.share(t,a,e)):n&&t.$toast.fail("您取消了分享")},WebApp.JSAPI.OnShareFriend=function(n){console.log(n),n?(t.isshow=!1,t.share(t,a,e)):n&&t.$toast.fail("您取消了分享")},s.info.prec=parseInt(100*s.info.precentage),t.colckinfo=s.info},function(t,a){console.log(a)})},close:function(){this.isshow=!1,this.Mat(this)},card:function(t,a){t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"补卡中..."}),TD_Request("op","pat",{uid:g,date:a},function(a,e){console.log(e),t.$toast.clear(),t.Mat(t),window.location.href="../fill/fill.html?time="+(new Date).getTime()+"&opid="+t.opid+"&state=success"},function(a,e){t.$toast.clear(),87==a?t.$dialog.alert({title:"温馨提示",message:e.context}):88==a?t.$dialog.alert({title:"温馨提示",message:e.context}):89==a?window.location.href="../fill/fill.html?time="+(new Date).getTime()+"&opid="+t.opid+"&state=fail":90==a?t.$dialog.alert({title:"温馨提示",message:e.context}):91==a&&t.$dialog.alert({title:"温馨提示",message:e.context})})},share:function(t,a,e){console.log(e),void 0!==e?(console.log(e),TD_Request("op","rep",{opid:a,date:e,uid:g},function(a,e){t.$toast.success("分享成功"),t.Mat(t)},function(a,e){t.$toast.fail("分享失败")})):window.location.href="actionClock.html?time="+(new Date).getTime()},left:function(){console.log(this.seek),$(".icon-right").show(),0==this.seek?self.seek:($(".icon-left").show(),this.seek--),this.Mat(this)},right:function(){console.log(this.seek,this.countMonth),$(".icon-left").show(),this.seek==this.countMonth?$(".icon-right").hide():($(".icon-right").show(),this.seek++),this.Mat(this)},jl:function(){window.location.href="../list/list.html?time="+(new Date).getTime()}}},_={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"actionClock"},[e("div",{staticClass:"warp"},[e("van-col",{staticClass:"clock",attrs:{span:"24"}},[e("van-col",{attrs:{span:"24"}},[e("yd-progressbar",{staticClass:"progress",attrs:{progress:t.colckinfo.precentage,"trail-width":"8","trail-color":"#ffc054"}},[t._v(t._s(""==t.colckinfo?"--":t.colckinfo.prec)+"%")]),t._v(" "),e("span",{staticStyle:{color:"#00d094","text-decoration":"underline",position:"absolute",top:"0.5rem",right:"0.5rem"},on:{click:t.jl}},[t._v("合约记录")])],1),t._v(" "),e("van-col",{staticClass:"clockInfo",attrs:{span:"24"}},[e("van-row",[e("van-col",{attrs:{span:"8"}},[e("p",{staticClass:"title day"},[t._v(t._s(""==t.colckinfo?"--":t.colckinfo.desday))]),t._v(" "),e("p",{staticClass:"txt"},[t._v("距离目标天数")])]),t._v(" "),e("van-col",{attrs:{span:"8"}},[e("p",{staticClass:"title continday"},[t._v(t._s(""==t.colckinfo?"--":t.colckinfo.conday))]),t._v(" "),e("p",{staticClass:"txt"},[t._v("连续打卡天数")])]),t._v(" "),e("van-col",{attrs:{span:"8"}},[e("p",{staticClass:"title clockday"},[t._v(t._s(""==t.colckinfo?"--":t.colckinfo.alrday))]),t._v(" "),e("p",{staticClass:"txt"},[t._v("已打卡天数")])])],1)],1),t._v(" "),e("van-col",{staticClass:"btn",attrs:{span:"24"}},[e("van-button",{staticClass:"clock_btn",attrs:{round:"",disabled:t.isdisabled},on:{click:t.clock}},[t._v(t._s(t.btnTxt))])],1)],1),t._v(" "),e("van-col",{staticClass:"date",attrs:{span:"24"}},[e("div",{staticClass:"warper"},[e("van-row",{staticClass:"date",staticStyle:{width:"5.88rem",margin:"0 auto",padding:"0.38rem 0 0.5rem 0"}},[e("van-col",{staticStyle:{"text-align":"left",color:"#999"},attrs:{span:"8"}},[e("van-icon",{staticClass:"icon-left",attrs:{name:"arrow-left"},on:{click:t.left}})],1),t._v(" "),e("van-col",{staticStyle:{"text-align":"center"},attrs:{span:"8"}},[e("p",{staticStyle:{"font-size":"0.36rem"}},[t._v(t._s(""==t.currentMonth?"--":t.currentMonth))])]),t._v(" "),e("van-col",{staticStyle:{"text-align":"right",color:"#999"},attrs:{span:"8"}},[e("van-icon",{staticClass:"icon-right",attrs:{name:"arrow"},on:{click:t.right}})],1)],1),t._v(" "),e("div",{staticClass:"weekDate"},[e("ul",{staticClass:"title"},[e("li",[t._v(t._s(t.week[0]))]),t._v(" "),e("li",[t._v(t._s(t.week[1]))]),t._v(" "),e("li",[t._v(t._s(t.week[2]))]),t._v(" "),e("li",[t._v(t._s(t.week[3]))]),t._v(" "),e("li",[t._v(t._s(t.week[4]))]),t._v(" "),e("li",[t._v(t._s(t.week[5]))]),t._v(" "),e("li",[t._v(t._s(t.week[6]))])]),t._v(" "),e("ul",{staticClass:"day"})]),t._v(" "),e("div",{staticClass:"module"},[e("div",{staticClass:"main"},[e("van-col",{staticStyle:{"margin-top":"0.24rem"},attrs:{span:"16"}},[e("p",[e("span",{staticClass:"txt"},[e("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/image/blue_dot.png"}}),t._v(" "),e("span",[t._v("已打卡、已转发")])],1),t._v(" "),e("span",[e("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/image/green_dot.png"}}),t._v(" "),e("span",[t._v("已补卡")])],1)]),t._v(" "),e("p",[e("span",{staticClass:"txt"},[e("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/image/orange_dot.png"}}),t._v(" "),e("span",[t._v("已打卡、未转发")])],1),t._v(" "),e("span",[e("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/image/grey_dot.png"}}),t._v(" "),e("span",[t._v("未打卡")])],1)])])],1)])],1)])],1),t._v(" "),e("van-popup",{staticClass:"mask",model:{value:t.isshow,callback:function(a){t.isshow=a},expression:"isshow"}},[e("div",{staticClass:"clockState"},[e("div",{staticClass:"main"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.headicon,alt:""}})]),t._v(" "),e("div",{staticClass:"tip"},[e("p",[t._v("您已在追梦行动派")]),t._v(" "),e("p",[t._v("连续为"+t._s(""==t.colckinfo?"--":t.colckinfo.theme)+"行动打卡"+t._s(""==t.colckinfo?"--":t.colckinfo.conday)+"天")])]),t._v(" "),e("p",{staticClass:"shareBtn"},[t._v("点击右上角“...”立即分享今日打卡")]),t._v(" "),e("p",{staticStyle:{"text-align":"center","font-size":"0.26rem","padding-bottom":"0.4rem",color:"#4c4c4c"}},[t._v("每成功邀请1位好友参与合约可获得1次补卡机会")])])]),t._v(" "),e("van-icon",{staticClass:"close",attrs:{name:"https://tdream.antit.top/DaKaOKX.png"},on:{click:t.close}})],1)],1)},staticRenderFns:[]};var k={name:"App",data:function(){return{ispay:!1,isclock:!0,userInfo:""}},components:{actionClock:e("VU/8")(v,_,!1,function(t){e("o7fm")},"data-v-ab918778",null).exports},created:function(){this.GetUserInfo(this)},methods:{GetUserInfo:function(t){t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"信息拉取中..."}),WebApp.Init("wxc5216d15dd321ac5",function(a,e){console.log(Options.GetUserInfo()),t.userInfo=Options.GetUserInfo(),Options.TestServer=!1,t.$toast.clear(),t.Register(t)})},Register:function(t){t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"信息注册中..."}),TD_Request("us","enter",{uid:t.userInfo.openid,nickname:t.userInfo.nickname,headicon:t.userInfo.headimgurl},function(a,e){console.log(e),t.$toast.clear(),t.Orders(t,t.userInfo.openid)},function(a,e){console.log(e),t.$toast.clear()})},Orders:function(t,a){TD_Request("op","eomp",{uid:a},function(a,e){console.log(e),t.feedback=e.feedback;var n=e.orders.shift();t.cPerson=e.cPerson,t.cAttendence=e.cAttendence,t.order=n,e.orders.push(n),t.orders=e.orders,t.$toast.clear(),t.loop(t),console.log(e.orders)},function(a,e){console.log(e),t.$toast.clear(),82==a&&alert(a)})}}},b={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[this.ispay?a("pay-info"):this._e(),this._v(" "),a("action-clock")],1)},staticRenderFns:[]};var w=e("VU/8")(k,b,!1,function(t){e("Wrb5")},"data-v-7cbc1f10",null).exports,y=e("iA4B");f.a.component(y.ProgressBar.name,y.ProgressBar),f.a.use(n.a).use(s.a).use(o.a).use(i.a).use(c.a).use(l.a).use(r.a).use(d.a).use(p.a),f.a.config.productionTip=!1,new f.a({el:"#app",components:{App:w},template:"<App/>"})},Wrb5:function(t,a){},eh36:function(t,a){},hW8u:function(t,a){},nsZj:function(t,a){},o7fm:function(t,a){},sKgQ:function(t,a){}},["VbU8"]);
//# sourceMappingURL=clock.8cbaf27d722e4323d7ec.js.map