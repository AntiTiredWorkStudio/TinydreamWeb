webpackJsonp([7],{"97dx":function(a,t){},JKiR:function(a,t){},MTyd:function(a,t,e){"use strict";var s=e("VU/8")({name:"tabbar",data:{tabbar:[{title:"梦想互助",normal:"http://tdream.antit.top/image/nav_index_disable.png",active:"http://tdream.antit.top/image/nav_index.png",url:"http://tinydream.ivkcld.cn/TinydreamWeb/index.html"},{title:"行动打卡",normal:"https://tdream.antit.top/ActiveSignInOff.png",active:"https://tdream.antit.top/ActiveSignInOk.png",url:"http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/clock.html"},{title:"个人中心",normal:"http://tdream.antit.top/image/nav_owner_disable.png",active:"http://tdream.antit.top/image/nav_owner.png",url:"http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/user.html"}]}},null,!1,null,null,null);t.a=s.exports},NAlg:function(a,t){},RUOb:function(a,t){},UpFc:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});e("RgoE");var s=e("0KWt"),n=(e("1E9F"),e("2Ux5")),i=(e("eqfM"),e("/QYm")),l=(e("JRZP"),e("LK01")),o=(e("ZuV/"),e("37Xn")),c=(e("3Lne"),e("SSsa")),d=(e("mMXg"),e("qYlo")),r=(e("k3b4"),e("+2ln")),p=(e("XmAh"),e("il3B")),m=e("7+uW"),g=e("mvHQ"),h=e.n(g),u=e("bOdI"),f=e.n(u),v=e("MTyd"),b=Options.GetUserInfo().openid,y=!1,k={name:"actionClock",data:function(){var a;return a={actives:1,tabbar:"",week:["日","一","二","三","四","五","六"],opid:"",currentMonth:"",isdisabled:!1,btnTxt:"立即打卡",isshow:!1,headicon:"",colckinfo:"",seek:-1,date:"",countMonth:""},f()(a,"date",""),f()(a,"shareTitle",""),f()(a,"ishare",!1),f()(a,"cid",""),f()(a,"issuccess",!1),f()(a,"state",!0),f()(a,"url",""),f()(a,"bill",""),f()(a,"totalday",""),f()(a,"alert",""),f()(a,"today",""),f()(a,"first",""),f()(a,"currentindex",""),a},created:function(){this.tabbar=v.a.data.tabbar,this.Mat(this),this.headicon=Options.GetUserInfo().headimgurl},methods:{clock:function(a){"share"==a?(this.ishare=!0,this.isshow=!1):this.Clock(this,this.opid)},Mat:function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";a.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"加载中..."}),TD_Request("op","cal",{uid:b,seek:a.seek,full:"month"},function(e,s){console.log(s),a.$toast.clear(),1==s.calendar.monthIndex.length&&$(".icon-left,.icon-right").css("opacity",0),s.calendar.monthIndex.length-1==a.seek&&$(".icon-right").hide(),a.currentindex=s.calendar.monthIndex.length-1,a.seek=s.calendar.currentIndex,a.clockInfo(a,s.calendar.opid),a.countMonth=s.calendar.monthIndex.length-1,a.opid=s.calendar.opid,a.date=s.date,a.cid=s.cid,console.log(a.date),console.log(new Date(a.date)/1e3-28800),console.log(s.calendar.days),a.currentMonth=s.calendar.currentMonth.substr(0,4)+"."+s.calendar.currentMonth.substr(4,6),a.refreshDate(s.calendar.days,a,s.lastattend,s.cid,t)},function(t,e){a.$toast.clear(),a.$dialog.alert({title:"温馨提示",message:e.context}).then(function(){window.location.href="clock.html?time="+(new Date).getTime()})})},Clock:function(a,t){TD_Request("op","mat",{opid:t,uid:b},function(t,e){a.btnTxt="已打卡",a.isdisabled=!0,console.log(e),a.colckinfo.alrday=parseInt(a.colckinfo.alrday)+1,a.alert={msg:"<p>您已在追梦行动派</p><p>连续为"+a.colckinfo.theme+"行动打卡"+a.colckinfo.alrday+"天</p>"},"undefined"==e.attendance.date&&(e.attendance.date=a.date),a.isshow=!0,"SUCCESS"==e.end?(a.issuccess=!0,a.url="https://tdream.antit.top/share_mmexportOK.png",a.state=!0):"FAILD"==e.end&&(a.state=!1,a.issuccess=!0,a.url="https://tdream.antit.top/share_mmexport.png"),a.Mat(a)},function(t,e){console.log(e),a.btnTxt="已打卡",a.alert={msg:"<p style='color:#00d094'>打卡成功</p>"},a.isshow=!0,a.isdisabled=!0,a.isstate=!1,a.Mat(a,e.firstday)})},hy_close:function(){this.issuccess=!1},refreshDate:function(a,t,e,s){var n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";TD_Request("co","info",{cid:s},function(a,e){console.log(e),t.bill=e.contract.refund/100,t.totalday=e.contract.durnation},function(a,t){console.log(t)}),$(".weekDate .day").html("");a.length;var i=a[0].weekDay;"一"==i?i=1:"二"==i?i=2:"三"==i?i=3:"四"==i?i=4:"五"==i?i=5:"六"==i?i=6:"日"==i&&(i=0);for(var l=0;l<i;l++)$("<li>&nbsp;</li>").appendTo(".weekDate .day");$.each(a,function(a,s){s.hasOwnProperty("id")?(s.hasOwnProperty("today")&&(t.today=s,s.today&&"RELAY"==s.state&&(t.btnTxt="已打卡",t.isdisabled=!0)),("0"==s.id&&s.date==t.date||1==s.id&&s.date==t.date)&&(y=!0),0==s.id&&(t.first=s),console.log(n),""!=n?(console.log("firstday不为空"),"0"==s.id?("NONE"==n&&s.dateStamp>e?$('<li class="enable" id="'+s.date+'"><span class="normal">'+s.Day+"</span></li>").appendTo(".weekDate .day"):"NONE"==n&&s.dateStamp<e||"NONE"==n&&s.dateStamp<new Date(t.date)/1e3-28800?$('<li class="enable" id="'+s.date+'"><span class="normal">'+s.Day+"</span></li>").appendTo(".weekDate .day"):"NOTRELAY"==n&&s.date==t.date?($('<li class="enable share" id="'+s.date+'"><span class="normal orange">'+s.Day+"</span></li>").appendTo(".weekDate .day"),t.btnTxt="分 享"):"RELAY"==n&&s.date==t.date?($('<li class="enable" id="'+s.date+'"><span class="normal green_bg">'+s.Day+"</span></li>").appendTo(".weekDate .day"),t.btnTxt,t.isdisabled=!0):"RELAY"==n&&s.date!=t.date&&s.dateStamp<new Date(t.date)/1e3-28800&&($('<li class="enable" id="'+s.date+'"><span class="normal green_bg">'+s.Day+"</span></li>").appendTo(".weekDate .day"),t.btnTxt,t.isdisabled=!0),"RELAY"==n&&s.date!=t.date&&s.dateStamp<new Date(t.date)/1e3-28800&&(t.btnTxt,t.isdisabled=!0)):("NONE"==s.state&&s.dateStamp>e?$('<li class="enable" id="'+s.date+'"><span class="normal">'+s.Day+"</span></li>").appendTo(".weekDate .day"):"NONE"==s.state&&s.dateStamp<e||"NONE"==s.state&&s.dateStamp<new Date(t.date)/1e3-28800?$('<li class="enable leakage" data-stamp="'+s.dateStamp+'" id="'+s.date+'"><span class="normal gray">'+s.Day+"</span></li>").appendTo(".weekDate .day"):"NOTRELAY"==s.state&&s.date==t.date?($('<li class="enable share" id="'+s.date+'"><span class="normal orange">'+s.Day+"</span></li>").appendTo(".weekDate .day"),t.btnTxt="分 享"):"NOTRELAY"==s.state&&s.date!=t.date?($('<li class="enable share" id="'+s.date+'"><span class="normal orange">'+s.Day+"</span></li>").appendTo(".weekDate .day"),t.btnTxt="立即打卡"):"RELAY"==s.state&&s.date==t.date?($('<li class="enable" id="'+s.date+'"><span class="normal green_bg">'+s.Day+"</span></li>").appendTo(".weekDate .day"),t.btnTxt,t.isdisabled=!0):"RELAY"==s.state&&s.date!=t.date?($('<li class="enable" id="'+s.date+'"><span class="normal green_bg">'+s.Day+"</span></li>").appendTo(".weekDate .day"),t.btnTxt,t.isdisabled=!1):"SUPPLY"==s.state&&$('<li class="enable" id="'+s.date+'"><span class="normal green">'+s.Day+"</span></li>").appendTo(".weekDate .day"),"RELAY"==s.state&&s.date!=t.date&&s.dateStamp<new Date(t.date)/1e3-28800&&(t.btnTxt,t.isdisabled=!0))):(console.log("firstday为空"),"0"==s.id?("NONE"==s.state&&s.dateStamp>e?$('<li class="enable" id="'+s.date+'"><span class="normal">'+s.Day+"</span></li>").appendTo(".weekDate .day"):"NONE"==s.state&&s.dateStamp<e||"NONE"==s.state&&s.dateStamp<new Date(t.date)/1e3-28800?$('<li class="enable" id="'+s.date+'"><span class="normal">'+s.Day+"</span></li>").appendTo(".weekDate .day"):"NOTRELAY"==s.state&&s.date!=t.date?($('<li class="enable share" id="'+s.date+'"><span class="normal orange">'+s.Day+"</span></li>").appendTo(".weekDate .day"),t.btnTxt="立即打卡"):"RELAY"==s.state&&s.date!=t.date?($('<li class="enable" id="'+s.date+'"><span class="normal green_bg">'+s.Day+"</span></li>").appendTo(".weekDate .day"),t.btnTxt,t.isdisabled=!1):"RELAY"==s.state&&s.date!=t.date&&s.dateStamp<new Date(t.date)/1e3-28800&&($('<li class="enable" id="'+s.date+'"><span class="normal green_bg">'+s.Day+"</span></li>").appendTo(".weekDate .day"),t.btnTxt,t.isdisabled=!0),"RELAY"==s.state&&s.date!=t.date&&s.dateStamp<new Date(t.date)/1e3-28800&&(t.btnTxt,t.isdisabled=!0)):("NONE"==s.state&&s.dateStamp>e?$('<li class="enable" id="'+s.date+'"><span class="normal">'+s.Day+"</span></li>").appendTo(".weekDate .day"):"NONE"==s.state&&s.dateStamp<e||"NONE"==s.state&&s.dateStamp<new Date(t.date)/1e3-28800?$('<li class="enable leakage" data-stamp="'+s.dateStamp+'" id="'+s.date+'"><span class="normal gray">'+s.Day+"</span></li>").appendTo(".weekDate .day"):"NOTRELAY"==s.state&&s.date==t.date?($('<li class="enable share" id="'+s.date+'"><span class="normal orange">'+s.Day+"</span></li>").appendTo(".weekDate .day"),t.btnTxt="分 享"):"NOTRELAY"==s.state&&s.date!=t.date?($('<li class="enable share" id="'+s.date+'"><span class="normal orange">'+s.Day+"</span></li>").appendTo(".weekDate .day"),t.btnTxt="立即打卡"):"RELAY"==s.state&&s.date==t.date?($('<li class="enable" id="'+s.date+'"><span class="normal green_bg">'+s.Day+"</span></li>").appendTo(".weekDate .day"),t.btnTxt,t.isdisabled=!0):"RELAY"==s.state&&s.date!=t.date?($('<li class="enable" id="'+s.date+'"><span class="normal green_bg">'+s.Day+"</span></li>").appendTo(".weekDate .day"),t.btnTxt,t.isdisabled=!1):"RELAY"==s.state&&s.date!=t.date&&s.dateStamp<new Date(t.date)/1e3-28800?($('<li class="enable" id="'+s.date+'"><span class="normal green_bg">'+s.Day+"</span></li>").appendTo(".weekDate .day"),t.btnTxt,t.isdisabled=!0):"RELAY"==s.state&&s.date!=t.date&&s.dateStamp>=new Date(t.date)/1e3-28800?($('<li class="enable" id="'+s.date+'"><span class="normal green_bg">'+s.Day+"</span></li>").appendTo(".weekDate .day"),t.btnTxt,t.isdisabled=!1):"SUPPLY"==s.state&&$('<li class="enable" id="'+s.date+'"><span class="normal green">'+s.Day+"</span></li>").appendTo(".weekDate .day"),"RELAY"==s.state&&s.date!=t.date&&s.dateStamp<new Date(t.date)/1e3-28800&&(t.btnTxt,t.isdisabled=!0)))):$('<li class="disabled"><span class="normal">'+s.Day+"</span></li>").appendTo(".weekDate .day")}),$(".day li").css({width:"14.28%","text-align":"center","font-size":"0.26rem",color:"#999",float:"left","margin-top":"0.5rem"}),$(".day li .normal").css({width:" 0.5rem",height:"0.5rem","border-radius":"50%",margin:"0 auto",display:"inline-block","line-height":" 0.5rem"}),$(".day li span.green").css({background:"#00d022",color:"#fff"}),$(".day li span.green_bg").css({background:"#00d094",color:"#fff"}),$(".day li span.orange").css({background:"orange",color:"#fff"}),$(".day li span.gray").css({background:"#c8c8c8",color:"#9b9b9b"}),$(".day li.disabled").css("color","#9b9b9b"),$(".day li.enable").css({"font-size":"0.26rem",color:"#000",background:"#fff"}),"CO0000000001"==s?$("li.enable.leakage").click(function(){t.$dialog.alert({title:"温馨提示",message:"该合约无法补卡"})}):"CO0000000002"==s&&$("li.enable.leakage").click(function(){t.card(t,$(this).attr("id"))}),t.clockInfo(t,t.opid,t.date)},clockInfo:function(a,t){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";console.log(e),a.$toast.loading({message:"加载中..."}),TD_Request("op","oif",{opid:t},function(s,n){if(console.log(n),a.$toast.clear(),-1!==window.navigator.userAgent.toLowerCase().indexOf("android")||a.$toast.clear(),console.log(a.first,a.today),"0"==a.first.id&&""==a.today){a.shareTitle=n.info.nickname+"刚刚加入追梦行动派，邀请您一起加入！";var i="http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/friend.html?time="+(new Date).getTime()+"&opid="+t+"&type=new"}else if("NOTRELAY"==a.today.state){n.info.alrday=parseInt(n.info.alrday),a.shareTitle=n.info.nickname+"已加入追梦行动派为 "+n.info.theme+" 坚持行动"+(n.info.alrday+1)+"天";i="http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/friend.html?time="+(new Date).getTime()+"&opid="+t}else{a.shareTitle=n.info.nickname+"已加入追梦行动派为 "+n.info.theme+" 坚持行动"+n.info.alrday+"天";i="http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/friend.html?time="+(new Date).getTime()+"&opid="+t}WebApp.JSAPI.InitShare({title:a.shareTitle,desc:"有梦就行动，坚持返现金！",link:i,imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"}),WebApp.JSAPI.OnShareTimeLine=function(s){console.log(s),s?(a.isshow=!1,a.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"加载中..."}),setTimeout(function(){a.$toast.clear(),a.share(a,t,e)},500)):s||a.$toast.fail("转发失败")},WebApp.JSAPI.OnShareFriend=function(s){a.issuccess=!1,console.log(s),s?"CO0000000001"==a.cid?(a.isshow=!1,a.share(a,t,e)):(a.isshow=!1,a.$toast.success("转发成功")):s||a.$toast.fail("转发失败")},n.info.prec=parseInt(100*n.info.precentage),a.colckinfo=n.info},function(a,t){console.log(t)})},close:function(){this.isshow=!1,this.Mat(this)},card:function(a,t){a.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"补卡中..."}),TD_Request("op","pat",{uid:b,date:t},function(t,e){console.log(e),a.$toast.clear(),a.Mat(a),window.location.href="fill.html?time="+(new Date).getTime()+"&opid="+a.opid+"&state=success"},function(t,e){a.$toast.clear(),87==t?a.$dialog.alert({title:"温馨提示",message:e.context}):88==t?a.$dialog.alert({title:"温馨提示",message:e.context}):89==t?window.location.href="fill.html?time="+(new Date).getTime()+"&opid="+a.opid+"&state=fail":90==t?a.$dialog.alert({title:"温馨提示",message:e.context}):91==t&&a.$dialog.alert({title:"温馨提示",message:e.context})})},share:function(a,t,e){this.ishare=!1,""==e&&(e=a.date),void 0!==e?TD_Request("op","rep",{opid:a.opid,date:a.date,uid:b},function(t,e){a.$toast.success("分享成功"),setTimeout(function(){a.Mat(a)},2e3)},function(t,e){84==t?a.$toast.success("分享成功"):92==t?a.$dialog.alert({title:"温馨提示",message:"您尚未打卡"}):93==t?a.$dialog.alert({title:"温馨提示",message:"您的打卡已超时"}):-1==t&&(alert(h()(e)),a.$dialog.alert({title:"温馨提示",message:"服务器异常，请联系客服处理"}).then(function(){alert(h()(err))}))}):window.location.href="actionClock.html?time="+(new Date).getTime()},left:function(){console.log(this.seek),self.seek>=self.currentindex?self.seek=self.currentindex:($(".icon-right").show(),0==this.seek?self.seek:($(".icon-left").show(),this.seek--),this.Mat(this))},right:function(){self.seek<=0?self.seek=0:(console.log(this.seek,this.countMonth),$(".icon-left").show(),this.seek==this.countMonth?$(".icon-right").hide():($(".icon-right").show(),this.seek++),this.Mat(this))},jl:function(){window.location.href=y?"list.html?time="+(new Date).getTime()+"&type=new":"list.html?time="+(new Date).getTime()},guid:function(){this.ishare=!0,this.isshow=!1},guid_close:function(){this.ishare=!1}}},_={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"actionClock"},[e("div",{staticClass:"warp"},[e("van-col",{staticClass:"clock",attrs:{span:"24"}},[e("van-col",{attrs:{span:"24"}},[e("yd-progressbar",{staticClass:"progress",attrs:{progress:a.colckinfo.precentage,"trail-width":"8","trail-color":"#ffc054"}},[a._v(a._s(""==a.colckinfo?"--":a.colckinfo.prec)+"%")]),a._v(" "),e("span",{staticStyle:{color:"#00d094","text-decoration":"underline",position:"absolute",top:"0.5rem",right:"0.5rem"},on:{click:a.jl}},[a._v("合约记录")])],1),a._v(" "),e("van-col",{staticClass:"clockInfo",attrs:{span:"24"}},[e("van-row",[e("van-col",{attrs:{span:"8"}},[e("p",{staticClass:"title day"},[a._v(a._s(""==a.colckinfo?"--":a.colckinfo.desday))]),a._v(" "),e("p",{staticClass:"txt"},[a._v("距离目标天数")])]),a._v(" "),e("van-col",{attrs:{span:"8"}},[e("p",{staticClass:"title continday"},[a._v(a._s(""==a.colckinfo?"--":a.colckinfo.conday))]),a._v(" "),e("p",{staticClass:"txt"},[a._v("连续打卡天数")])]),a._v(" "),e("van-col",{attrs:{span:"8"}},[e("p",{staticClass:"title clockday"},[a._v(a._s(""==a.colckinfo?"--":a.colckinfo.alrday))]),a._v(" "),e("p",{staticClass:"txt"},[a._v("已打卡天数")])])],1)],1),a._v(" "),e("van-col",{staticClass:"btn",attrs:{span:"24"}},[e("van-button",{staticClass:"clock_btn",attrs:{round:"",disabled:a.isdisabled},on:{click:function(t){return a.clock("分 享"==a.btnTxt?"share":"")}}},[a._v(a._s(a.btnTxt))])],1)],1),a._v(" "),e("van-col",{staticClass:"date",attrs:{span:"24"}},[e("div",{staticClass:"warper"},[e("van-row",{staticClass:"date",staticStyle:{width:"5.88rem",margin:"0 auto",padding:"0.38rem 0 0.5rem 0","text-align":"center"}},[e("van-col",{staticStyle:{"text-align":"left",color:"#999"},attrs:{span:"8"}},[e("van-icon",{staticClass:"icon-left",attrs:{name:"arrow-left"},on:{click:a.left}})],1),a._v(" "),e("van-col",{staticStyle:{"text-align":"center"},attrs:{span:"8"}},[e("p",{staticStyle:{"font-size":"0.36rem"}},[a._v(a._s(""==a.currentMonth?"--":a.currentMonth))])]),a._v(" "),e("van-col",{staticStyle:{"text-align":"right",color:"#999"},attrs:{span:"8"}},[e("van-icon",{staticClass:"icon-right",attrs:{name:"arrow"},on:{click:a.right}})],1)],1),a._v(" "),e("div",{staticClass:"weekDate"},[e("ul",{staticClass:"title"},[e("li",[a._v(a._s(a.week[0]))]),a._v(" "),e("li",[a._v(a._s(a.week[1]))]),a._v(" "),e("li",[a._v(a._s(a.week[2]))]),a._v(" "),e("li",[a._v(a._s(a.week[3]))]),a._v(" "),e("li",[a._v(a._s(a.week[4]))]),a._v(" "),e("li",[a._v(a._s(a.week[5]))]),a._v(" "),e("li",[a._v(a._s(a.week[6]))])]),a._v(" "),e("ul",{staticClass:"day"})]),a._v(" "),e("div",{staticClass:"module"},[e("div",{staticClass:"main"},[e("van-col",{staticStyle:{"margin-top":"0.24rem"},attrs:{span:"16"}},[e("p",[e("span",{staticClass:"txt"},[e("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/image/blue_dot.png"}}),a._v(" "),e("span",[a._v("已打卡、已转发")])],1),a._v(" "),e("span",[e("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/image/green_dot.png"}}),a._v(" "),e("span",[a._v("已补卡")])],1)]),a._v(" "),e("p",[e("span",{staticClass:"txt"},[e("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/image/orange_dot.png"}}),a._v(" "),e("span",[a._v("已打卡、未转发")])],1),a._v(" "),e("span",[e("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/image/grey_dot.png"}}),a._v(" "),e("span",[a._v("未打卡")])],1)])])],1)])],1)])],1),a._v(" "),e("van-popup",{staticClass:"mask",model:{value:a.isshow,callback:function(t){a.isshow=t},expression:"isshow"}},[e("div",{staticClass:"clockState"},[e("div",{staticClass:"main"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:a.headicon,alt:""}})]),a._v(" "),e("div",{staticClass:"tip",domProps:{innerHTML:a._s(a.alert.msg)}}),a._v(" "),e("p",{staticClass:"shareBtn",on:{click:a.guid}},[a._v("分享今日打卡")]),a._v(" "),e("p",{staticStyle:{"text-align":"center","font-size":"0.26rem","padding-bottom":"0.4rem",color:"#4c4c4c"}},[a._v("每成功邀请1位好友参与合约可获得1次补卡机会")])])]),a._v(" "),e("van-icon",{staticClass:"close",attrs:{name:"https://tdream.antit.top/DaKaOKX.png"},on:{click:a.close}})],1),a._v(" "),a._m(0),a._v(" "),e("van-popup",{staticClass:"guid_mask",model:{value:a.ishare,callback:function(t){a.ishare=t},expression:"ishare"}},[e("div",{staticClass:"guid"}),a._v(" "),e("div",{staticClass:"btn",on:{click:a.guid_close}})]),a._v(" "),e("van-popup",{staticClass:"bgd",model:{value:a.issuccess,callback:function(t){a.issuccess=t},expression:"issuccess"}},[e("div",{staticClass:"bg",style:{background:"url("+a.url+") no-repeat center center / 7.12rem 8.62rem"}},[e("p",[a._v(a._s(1==a.state?"恭喜您完成"+a.totalday+"天的行动合约":"您的表现优秀，但最终未完成"+a.totalday+"天 "))]),a._v(" "),e("p",{staticClass:"tip",style:{display:1==a.state?"block":"none"}},[a._v("平台即将给您颁发"+a._s(""==a.bill?"--":a.bill)+"元奖励金")]),a._v(" "),e("p",{staticClass:"tip",style:{display:1==a.state?"block":"none"}},[a._v("7天内审核朋友圈转发情况")]),a._v(" "),e("p",{staticClass:"tip",style:{display:1==a.state?"block":"none"}},[a._v("没问图自动给您返款")]),a._v(" "),e("p",{staticClass:"tip",style:{display:1==a.state?"block":"none"}},[a._v("请注意查收！")]),a._v(" "),e("van-button",{on:{click:a.hy_close}},[a._v("我知道了")])],1)])],1)},staticRenderFns:[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"footer"},[e("ul",[e("li",[e("a",{attrs:{href:"../../../index.html"}},[e("i",{staticClass:"icon icon_home"}),a._v(" "),e("p",{staticClass:"text"},[a._v("梦想互助")])])]),a._v(" "),e("li",{staticClass:"active"},[e("a",{attrs:{href:"clock.html"}},[e("i",{staticClass:"icon icon_dream"}),a._v(" "),e("p",{staticClass:"text"},[a._v("行动打卡")])])]),a._v(" "),e("li",[e("a",{attrs:{href:"user.html"}},[e("i",{staticClass:"icon icon_user"}),a._v(" "),e("p",{staticClass:"text"},[a._v("个人中心")])])])])])}]};var w=e("VU/8")(k,_,!1,function(a){e("kOET")},"data-v-4aa44935",null).exports,T=e("iA4B");m.a.component(T.ProgressBar.name,T.ProgressBar),m.a.use(s.a).use(n.a).use(i.a).use(l.a).use(o.a).use(c.a).use(d.a).use(r.a).use(p.a),m.a.config.productionTip=!1,new m.a({el:"#app",components:{App:w},template:"<App/>"})},eh36:function(a,t){},hW8u:function(a,t){},kOET:function(a,t){},nsZj:function(a,t){},sKgQ:function(a,t){}},["UpFc"]);
//# sourceMappingURL=actionClock.578652119e2e2cc4ef6b.js.map