webpackJsonp([7],{"37xj":function(t,a){},"97dx":function(t,a){},JKiR:function(t,a){},MTyd:function(t,a,e){"use strict";var s=e("VU/8")({name:"tabbar",data:{tabbar:[{title:"参与互助",normal:"http://tdream.antit.top/image/nav_index_disable.png",active:"http://tdream.antit.top/image/nav_index.png",url:"http://tinydream.ivkcld.cn/TinydreamWeb/index.html"},{title:"行动打卡",normal:"https://tdream.antit.top/ActiveSignInOff.png",active:"https://tdream.antit.top/ActiveSignInOk.png",url:"http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/clock.html"},{title:"个人中心",normal:"http://tdream.antit.top/image/nav_owner_disable.png",active:"http://tdream.antit.top/image/nav_owner.png",url:"http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/user.html"}]}},null,!1,null,null,null);a.a=s.exports},NAlg:function(t,a){},RUOb:function(t,a){},UpFc:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});e("RgoE");var s=e("0KWt"),n=(e("1E9F"),e("2Ux5")),i=(e("eqfM"),e("/QYm")),o=(e("JRZP"),e("LK01")),l=(e("ZuV/"),e("37Xn")),c=(e("3Lne"),e("SSsa")),r=(e("mMXg"),e("qYlo")),d=(e("k3b4"),e("+2ln")),p=(e("XmAh"),e("il3B")),u=e("7+uW"),h=e("bOdI"),m=e.n(h),v=e("MTyd"),g=Options.GetUserInfo().openid,f=!1,_={name:"actionClock",data:function(){var t;return t={actives:1,tabbar:"",week:["日","一","二","三","四","五","六"],opid:"",currentMonth:"",isdisabled:!1,btnTxt:"立即打卡",isshow:!1,headicon:"",colckinfo:"",seek:-1,date:"",countMonth:""},m()(t,"date",""),m()(t,"shareTitle",""),m()(t,"ishare",!1),m()(t,"issuccess",!1),m()(t,"state",!0),m()(t,"url",""),m()(t,"bill",""),m()(t,"totalday",""),t},created:function(){this.tabbar=v.a.data.tabbar,this.Mat(this),this.headicon=Options.GetUserInfo().headimgurl},methods:{clock:function(t){"share"==t?(this.ishare=!0,this.isshow=!1):this.Clock(this,this.opid)},Mat:function(t,a){t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"日历创建中..."}),TD_Request("op","cal",{uid:g,seek:t.seek,full:"month"},function(e,s){console.log(s),t.$toast.clear(),1==s.calendar.monthIndex.length&&$(".icon-left,.icon-right").hide(),s.calendar.monthIndex.length-1==t.seek&&$(".icon-right").hide(),t.seek=s.calendar.currentIndex,t.clockInfo(t,s.calendar.opid),t.countMonth=s.calendar.monthIndex.length-1,t.opid=s.calendar.opid,t.date=s.date,console.log(t.date),console.log(new Date(t.date)/1e3-28800),console.log(s.calendar.days),t.currentMonth=s.calendar.currentMonth.substr(0,4)+"."+s.calendar.currentMonth.substr(4,6),t.refreshDate(s.calendar.days,t,s.lastattend,s.cid,a)},function(a,e){t.$toast.clear(),t.$dialog.alert({title:"温馨提示",message:e.context}).then(function(){window.location.href="clock.html?time="+(new Date).getTime()})})},Clock:function(t,a){TD_Request("op","mat",{opid:a,uid:g},function(e,s){t.btnTxt="已打卡",t.isdisabled=!0,console.log(s),t.clockInfo(t,a,s.attendance.date),t.isshow=!0,"SUCCESS"==s.end?(t.issuccess=!0,t.url="https://tdream.antit.top/share_mmexportOK.png",t.state=!0):"FAILD"==end&&(t.state=!1,t.issuccess=!0,t.url="https://tdream.antit.top/share_mmexport.png")},function(a,e){console.log(e),t.btnTxt="已打卡",t.isshow=!0,t.isdisabled=!0,$(".mask .tip").html('<p style="color:00d094">打卡成功</p>'),t.Mat(t,e.firstday)})},hy_close:function(){this.issuccess=!1},refreshDate:function(t,a,e,s){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";TD_Request("co","info",{cid:s},function(t,e){console.log(e),a.bill=e.contract.refund/100,a.totalday=e.contract.durnation},function(t,a){console.log(a)}),$(".weekDate .day").html("");t.length;var i=t[0].weekDay;"一"==i?i=1:"二"==i?i=2:"三"==i?i=3:"四"==i?i=4:"五"==i?i=5:"六"==i?i=6:"日"==i&&(i=0);for(var o=0;o<i;o++)$("<li>&nbsp;</li>").appendTo(".weekDate .day");$.each(t,function(t,s){s.hasOwnProperty("id")?(s.hasOwnProperty("today")&&s.today&&"RELAY"==s.state&&(a.btnTxt="已打卡",a.isdisabled=!0),0==s.id&&s.date==a.date&&(f=!0),"0"==s.id&&"NONE"==s.state&&s.dateStamp>=e?$('<li class="enable" id="'+s.date+'"><span class="normal">'+s.Day+"</span></li>").appendTo(".weekDate .day"):"0"==s.id&&"NONE"==n&&s.date==a.date?$('<li class="disabled"><span class="normal">'+s.Day+"</span></li>").appendTo(".weekDate .day"):"0"==s.id&&"NOTRELAY"==n&&s.date==a.date?($('<li class="enable share" id="'+s.date+'"><span class="normal orange">'+s.Day+"</span></li>").appendTo(".weekDate .day"),a.btnTxt="分 享",a.isdisabled=!1):"0"==s.id&&"RELAY"==n&&s.date==a.date?(a.btnTxt="已打卡",a.isdisabled=!0,$('<li class="enable" id="'+s.date+'"><span class="normal green_bg">'+s.Day+"</span></li>").appendTo(".weekDate .day")):s.dateStamp<Math.round(new Date(a.date)/1e3)-28800&&"NOTRELAY"==s.state?$('<li class="enable leakage" id="'+s.date+'"><span class="normal orange">'+s.Day+"</span></li>").appendTo(".weekDate .day"):s.dateStamp<Math.round(new Date(a.date)/1e3)-28800&&"NONE"==s.state?$('<li class="enable leakage" data-stamp="'+s.dateStamp+'" id="'+s.date+'"><span class="normal gray">'+s.Day+"</span></li>").appendTo(".weekDate .day"):s.dateStamp>=e&&"NONE"==s.state?$('<li class="enable" id="'+s.date+'"><span class="normal">'+s.Day+"</span></li>").appendTo(".weekDate .day"):"NONE"==s.state?$('<li class="enable leakage" data-stamp="'+s.dateStamp+'" id="'+s.date+'"><span class="normal gray">'+s.Day+"</span></li>").appendTo(".weekDate .day"):"NOTRELAY"==s.state?($('<li class="enable share" id="'+s.date+'"><span class="normal orange">'+s.Day+"</span></li>").appendTo(".weekDate .day"),a.btnTxt="分 享",a.isdisabled=!1):"RELAY"==s.state?(a.btnTxt="已打卡",a.isdisabled=!0,$('<li class="enable" id="'+s.date+'"><span class="normal green_bg">'+s.Day+"</span></li>").appendTo(".weekDate .day")):"SUPPLY"==s.state?$('<li class="enable" id="'+s.date+'"><span class="normal green">'+s.Day+"</span></li>").appendTo(".weekDate .day"):(a.btnTxt="立即打卡",a.isdisabled=!1)):$('<li class="disabled"><span class="normal">'+s.Day+"</span></li>").appendTo(".weekDate .day")}),$(".day li").css({width:"14.28%","text-align":"center","font-size":"0.26rem",color:"#999",float:"left","margin-top":"0.5rem"}),$(".day li .normal").css({width:" 0.5rem",height:"0.5rem","border-radius":"50%",margin:"0 auto",display:"inline-block","line-height":" 0.5rem"}),$(".day li span.green").css({background:"#00d022",color:"#fff"}),$(".day li span.green_bg").css({background:"#00d094",color:"#fff"}),$(".day li span.orange").css({background:"orange",color:"#fff"}),$(".day li span.gray").css({background:"#c8c8c8",color:"#9b9b9b"}),$(".day li.disabled").css("color","#9b9b9b"),$(".day li.enable").css({"font-size":"0.26rem",color:"#000",background:"#fff"}),"CO0000000001"==s?$("li.enable.leakage").click(function(){a.$dialog.alert({title:"温馨提示",message:"该合约无法补卡"})}):"CO0000000002"==s&&$("li.enable.leakage").click(function(){a.card(a,$(this).attr("id"))}),a.clockInfo(a,a.opid,$("li.share").attr("id"))},clockInfo:function(t,a,e){console.log(e),t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"信息加载中..."}),TD_Request("op","oif",{opid:a},function(s,n){if(console.log(n),t.$toast.clear(),f){t.shareTitle=n.info.nickname+"刚刚加入追梦行动派，邀请您一起加入！";var i="http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/friend.html?time="+(new Date).getTime()+"&opid="+a+"&type=new"}else{t.shareTitle=n.info.nickname+"已加入追梦行动派为 "+n.info.theme+" 坚持行动"+n.info.alrday+"1天";i="http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/friend.html?time="+(new Date).getTime()+"&opid="+a}WebApp.JSAPI.InitShare({title:t.shareTitle,desc:"有梦就行动，坚持返现金！",link:i,imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"}),WebApp.JSAPI.OnShareTimeLine=function(s){t.issuccess=!1,console.log(s),s?(t.isshow=!1,t.share(t,a,e)):s&&t.$toast.fail("您取消了分享")},WebApp.JSAPI.OnShareFriend=function(s){t.issuccess=!1,console.log(s),s?(t.isshow=!1,t.share(t,a,e)):s&&t.$toast.fail("您取消了分享")},n.info.prec=parseInt(100*n.info.precentage),t.colckinfo=n.info},function(t,a){console.log(a)})},close:function(){this.isshow=!1,this.Mat(this)},card:function(t,a){t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"补卡中..."}),TD_Request("op","pat",{uid:g,date:a},function(a,e){console.log(e),t.$toast.clear(),t.Mat(t),window.location.href="fill.html?time="+(new Date).getTime()+"&opid="+t.opid+"&state=success"},function(a,e){t.$toast.clear(),87==a?t.$dialog.alert({title:"温馨提示",message:e.context}):88==a?t.$dialog.alert({title:"温馨提示",message:e.context}):89==a?window.location.href="fill.html?time="+(new Date).getTime()+"&opid="+t.opid+"&state=fail":90==a?t.$dialog.alert({title:"温馨提示",message:e.context}):91==a&&t.$dialog.alert({title:"温馨提示",message:e.context})})},share:function(t,a,e){console.log(e),void 0!==e?(console.log(e),TD_Request("op","rep",{opid:a,date:e,uid:g},function(a,e){t.$toast.success("分享成功"),t.Mat(t)},function(a,s){t.$toast.fail("分享失败"),console.log(e)})):window.location.href="actionClock.html?time="+(new Date).getTime()},left:function(){console.log(this.seek),$(".icon-right").show(),0==this.seek?self.seek:($(".icon-left").show(),this.seek--),this.Mat(this)},right:function(){console.log(this.seek,this.countMonth),$(".icon-left").show(),this.seek==this.countMonth?$(".icon-right").hide():($(".icon-right").show(),this.seek++),this.Mat(this)},jl:function(){window.location.href=f?"list.html?time="+(new Date).getTime()+"&type=new":"list.html?time="+(new Date).getTime()},guid:function(){this.ishare=!0,this.isshow=!1},guid_close:function(){this.ishare=!1}}},k={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"actionClock"},[e("div",{staticClass:"warp"},[e("van-col",{staticClass:"clock",attrs:{span:"24"}},[e("van-col",{attrs:{span:"24"}},[e("yd-progressbar",{staticClass:"progress",attrs:{progress:t.colckinfo.precentage,"trail-width":"8","trail-color":"#ffc054"}},[t._v(t._s(""==t.colckinfo?"--":t.colckinfo.prec)+"%")]),t._v(" "),e("span",{staticStyle:{color:"#00d094","text-decoration":"underline",position:"absolute",top:"0.5rem",right:"0.5rem"},on:{click:t.jl}},[t._v("合约记录")])],1),t._v(" "),e("van-col",{staticClass:"clockInfo",attrs:{span:"24"}},[e("van-row",[e("van-col",{attrs:{span:"8"}},[e("p",{staticClass:"title day"},[t._v(t._s(""==t.colckinfo?"--":t.colckinfo.desday))]),t._v(" "),e("p",{staticClass:"txt"},[t._v("距离目标天数")])]),t._v(" "),e("van-col",{attrs:{span:"8"}},[e("p",{staticClass:"title continday"},[t._v(t._s(""==t.colckinfo?"--":t.colckinfo.conday))]),t._v(" "),e("p",{staticClass:"txt"},[t._v("连续打卡天数")])]),t._v(" "),e("van-col",{attrs:{span:"8"}},[e("p",{staticClass:"title clockday"},[t._v(t._s(""==t.colckinfo?"--":t.colckinfo.alrday))]),t._v(" "),e("p",{staticClass:"txt"},[t._v("已打卡天数")])])],1)],1),t._v(" "),e("van-col",{staticClass:"btn",attrs:{span:"24"}},[e("van-button",{staticClass:"clock_btn",attrs:{round:"",disabled:t.isdisabled},on:{click:function(a){return t.clock("分 享"==t.btnTxt?"share":"")}}},[t._v(t._s(t.btnTxt))])],1)],1),t._v(" "),e("van-col",{staticClass:"date",attrs:{span:"24"}},[e("div",{staticClass:"warper"},[e("van-row",{staticClass:"date",staticStyle:{width:"5.88rem",margin:"0 auto",padding:"0.38rem 0 0.5rem 0"}},[e("van-col",{staticStyle:{"text-align":"left",color:"#999"},attrs:{span:"8"}},[e("van-icon",{staticClass:"icon-left",attrs:{name:"arrow-left"},on:{click:t.left}})],1),t._v(" "),e("van-col",{staticStyle:{"text-align":"center"},attrs:{span:"8"}},[e("p",{staticStyle:{"font-size":"0.36rem"}},[t._v(t._s(""==t.currentMonth?"--":t.currentMonth))])]),t._v(" "),e("van-col",{staticStyle:{"text-align":"right",color:"#999"},attrs:{span:"8"}},[e("van-icon",{staticClass:"icon-right",attrs:{name:"arrow"},on:{click:t.right}})],1)],1),t._v(" "),e("div",{staticClass:"weekDate"},[e("ul",{staticClass:"title"},[e("li",[t._v(t._s(t.week[0]))]),t._v(" "),e("li",[t._v(t._s(t.week[1]))]),t._v(" "),e("li",[t._v(t._s(t.week[2]))]),t._v(" "),e("li",[t._v(t._s(t.week[3]))]),t._v(" "),e("li",[t._v(t._s(t.week[4]))]),t._v(" "),e("li",[t._v(t._s(t.week[5]))]),t._v(" "),e("li",[t._v(t._s(t.week[6]))])]),t._v(" "),e("ul",{staticClass:"day"})]),t._v(" "),e("div",{staticClass:"module"},[e("div",{staticClass:"main"},[e("van-col",{staticStyle:{"margin-top":"0.24rem"},attrs:{span:"16"}},[e("p",[e("span",{staticClass:"txt"},[e("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/image/blue_dot.png"}}),t._v(" "),e("span",[t._v("已打卡、已转发")])],1),t._v(" "),e("span",[e("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/image/green_dot.png"}}),t._v(" "),e("span",[t._v("已补卡")])],1)]),t._v(" "),e("p",[e("span",{staticClass:"txt"},[e("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/image/orange_dot.png"}}),t._v(" "),e("span",[t._v("已打卡、未转发")])],1),t._v(" "),e("span",[e("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/image/grey_dot.png"}}),t._v(" "),e("span",[t._v("未打卡")])],1)])])],1)])],1)])],1),t._v(" "),e("van-popup",{staticClass:"mask",model:{value:t.isshow,callback:function(a){t.isshow=a},expression:"isshow"}},[e("div",{staticClass:"clockState"},[e("div",{staticClass:"main"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.headicon,alt:""}})]),t._v(" "),e("div",{staticClass:"tip"},[e("p",[t._v("您已在追梦行动派")]),t._v(" "),e("p",[t._v("连续为"+t._s(""==t.colckinfo?"--":t.colckinfo.theme)+"行动打卡"+t._s(""==t.colckinfo?"--":t.colckinfo.conday)+"天")])]),t._v(" "),e("p",{staticClass:"shareBtn",on:{click:t.guid}},[t._v("分享本日打卡")]),t._v(" "),e("p",{staticStyle:{"text-align":"center","font-size":"0.26rem","padding-bottom":"0.4rem",color:"#4c4c4c"}},[t._v("每成功邀请1位好友参与合约可获得1次补卡机会")])])]),t._v(" "),e("van-icon",{staticClass:"close",attrs:{name:"https://tdream.antit.top/DaKaOKX.png"},on:{click:t.close}})],1),t._v(" "),e("van-tabbar",{attrs:{"active-color":"#00d094"},model:{value:t.actives,callback:function(a){t.actives=a},expression:"actives"}},t._l(t.tabbar,function(a,s){return e("van-tabbar-item",{key:s,attrs:{url:a.url,info:a.info},scopedSlots:t._u([{key:"icon",fn:function(t){return e("img",{attrs:{src:t.active?a.active:a.normal}})}}],null,!0)},[e("span",[t._v(t._s(a.title))])])}),1),t._v(" "),e("van-popup",{staticClass:"guid_mask",model:{value:t.ishare,callback:function(a){t.ishare=a},expression:"ishare"}},[e("div",{staticClass:"guid"}),t._v(" "),e("div",{staticClass:"btn",on:{click:t.guid_close}})]),t._v(" "),e("van-popup",{staticClass:"bgd",model:{value:t.issuccess,callback:function(a){t.issuccess=a},expression:"issuccess"}},[e("div",{staticClass:"bg",style:{background:"url("+t.url+") no-repeat center center / 7.12rem 8.62rem"}},[e("p",[t._v(t._s(1==t.state?"恭喜您完成"+t.totalday+"天的行动合约":"您的表现优秀，但最终未完成"+t.totalday+"天 "))]),t._v(" "),e("p",{staticClass:"tip",style:{display:1==t.state?"block":"none"}},[t._v("平台即将给您颁发"+t._s(""==t.bill?"--":t.bill)+"元奖励金")]),t._v(" "),e("p",{staticClass:"tip",style:{display:1==t.state?"block":"none"}},[t._v("7天内审核朋友圈转发情况")]),t._v(" "),e("p",{staticClass:"tip",style:{display:1==t.state?"block":"none"}},[t._v("没问图自动给您返款")]),t._v(" "),e("p",{staticClass:"tip",style:{display:1==t.state?"block":"none"}},[t._v("请注意查收！")]),t._v(" "),e("van-button",{on:{click:t.hy_close}},[t._v("我知道了")])],1)])],1)},staticRenderFns:[]};var b=e("VU/8")(_,k,!1,function(t){e("37xj")},"data-v-d245810a",null).exports,y=e("iA4B");u.a.component(y.ProgressBar.name,y.ProgressBar),u.a.use(s.a).use(n.a).use(i.a).use(o.a).use(l.a).use(c.a).use(r.a).use(d.a).use(p.a),u.a.config.productionTip=!1,new u.a({el:"#app",components:{App:b},template:"<App/>"})},eh36:function(t,a){},hW8u:function(t,a){},nsZj:function(t,a){},sKgQ:function(t,a){}},["UpFc"]);
//# sourceMappingURL=actionClock.ba927f15be9f08090680.js.map