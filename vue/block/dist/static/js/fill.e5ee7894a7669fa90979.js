webpackJsonp([5],{"2Ixz":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});i("RgoE");var e=i("0KWt"),a=(i("1E9F"),i("2Ux5")),s=(i("eqfM"),i("/QYm")),o=(i("JRZP"),i("LK01")),c=(i("ZuV/"),i("37Xn")),r=(i("3Lne"),i("SSsa")),l=(i("mMXg"),i("qYlo")),d=(i("k3b4"),i("+2ln")),u=(i("XmAh"),i("il3B")),p=(i("MY4N"),i("0zAV")),m=i("7+uW"),h={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"footer"},[i("ul",[i("li",[i("a",{attrs:{href:"../index.html"}},[i("i",{staticClass:"icon icon_home"}),t._v(" "),i("p",{staticClass:"text"},[t._v("参与互助")])])]),t._v(" "),i("li",[i("a",{attrs:{href:"../html/dream.html"}},[i("i",{staticClass:"icon icon_dream"}),t._v(" "),i("p",{staticClass:"text"},[t._v("小梦想")])])]),t._v(" "),i("li",{staticClass:"active"},[i("a",{attrs:{href:"../html/user.html"}},[i("i",{staticClass:"icon icon_user"}),t._v(" "),i("p",{staticClass:"text"},[t._v("个人中心")])])])])])}]};var v=i("VU/8")({name:"tab",data:function(){return{tabbar:[{title:"梦想互助",normal:"http://tdream.antit.top/image/nav_index_disable.png",active:"http://tdream.antit.top/image/nav_index.png",url:"http://tinydream.ivkcld.cn/TinydreamWeb/index.html"},{title:"行动打卡",normal:"https://tdream.antit.top/ActiveSignInOff.png",active:"https://tdream.antit.top/ActiveSignInOk.png",url:"http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/clock.html"},{title:"个人中心",normal:"http://tdream.antit.top/image/nav_owner_disable.png",active:"http://tdream.antit.top/image/nav_owner.png",url:"http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/user.html"}]}}},h,!1,function(t){i("figr")},null,null).exports,f=Options.GetUserInfo().openid,_={name:"fill",data:function(){return{headicons:"",cardinfo:"",css:"",ishare:!1}},components:{tab:v},created:function(){Options.TestServer=!1,""!=$_GET.opid?("success"==$_GET.state?this.css={background:"url(https://tdream.antit.top/image/rightframe.png) no-repeat","background-size":"5.86rem 2.19rem"}:this.css={"background-image":"url(https://tdream.antit.top/BuKaCiShuBeiJing.png)","background-size":"5.86rem 2.19rem"},this.Info(this,$_GET.opid),this.headIcon(this)):window.location.href="actionClock.html?time="+(new Date).getTime()},methods:{guid:function(){this.ishare=!0},Info:function(t,n){t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"信息加载中..."}),TD_Request("op","uinfo",{uid:f},function(i,e){t.$toast.clear(),console.log(e);var a=e.info.menchance;TD_Request("op","oif",{opid:n,uid:f},function(i,e){if("new"==$_GET.type)var s=e.info.nickname+"已加入追梦行动派",o="http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/friend.html?time="+(new Date).getTime()+"&opid="+n+"&type=new";else(new Date).getTime(),e.info.nickname,e.info.theme,e.info.alrday;WebApp.JSAPI.InitShare({title:s,desc:"有梦就行动，坚持返现金！",link:o,imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"}),WebApp.JSAPI.OnShareTimeLine=function(n){t.ishare=!1},WebApp.JSAPI.OnShareFriend=function(n){t.ishare=!1},console.log(e),t.cardinfo={menchance:a,misday:e.info.misday,menday:e.info.menday}},function(t,n){console.log(n)})},function(n,i){t.$toast.clear(),console.log(i)})},headIcon:function(t){TD_Request("op","ihics",{uid:f},function(n,i){console.log(i),t.headicons=i.headicons,0==i.headicons.length&&$(".tip").html("当前你还没有邀请到小伙伴呢，快去邀请小伙伴们一起参加追梦行动吧！").show()},function(t,n){console.log(n)})},guid_close:function(){this.ishare=!1}}},g={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"fill"},[i("div",{staticClass:"top",style:t.css},[i("p",[t._v("当前剩余"+t._s(""==t.cardinfo?"--":t.cardinfo.menchance)+"次补卡机会")])]),t._v(" "),i("div",{staticClass:"middle"},[i("p",[t._v("成功补卡"+t._s(""==t.cardinfo?"--":t.cardinfo.menday)+"次还有"+t._s(""==t.cardinfo?"--":t.cardinfo.misday)+"次未打卡")])]),t._v(" "),i("div",{staticClass:"center"},[i("p",{on:{click:t.guid}},[t._v("立即分享今日打卡")])]),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"bottom-t"},[i("van-col",{attrs:{span:"2"}},[i("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/image/rightarrow.png"}})],1),t._v(" "),i("van-col",{attrs:{span:"20"}},[i("p",[t._v("\n                    您已影响身边"),i("span",[t._v(t._s(t.headicons.length))]),t._v("位小伙伴成为追梦行动派\n                ")])]),t._v(" "),i("van-col",{attrs:{span:"2"}},[i("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/image/leftarrow.png"}})],1)],1),t._v(" "),i("div",{staticClass:"tip"}),t._v(" "),i("div",{staticClass:"bottom"},t._l(t.headicons,function(t,n){return i("van-icon",{key:n,staticClass:"icon",attrs:{name:t}})}),1),t._v(" "),i("van-popup",{staticClass:"guid_mask",model:{value:t.ishare,callback:function(n){t.ishare=n},expression:"ishare"}},[i("div",{staticClass:"guid"}),t._v(" "),i("div",{staticClass:"btn",on:{click:t.guid_close}})]),t._v(" "),i("tab")],1)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"center_b"},[n("p",[this._v("赶紧转发今日的打卡到朋友圈吧，")]),this._v(" "),n("p",[this._v("每成功影响一位好友成为行动派")]),this._v(" "),n("p",[this._v("（支付参与行动合约）")]),this._v(" "),n("p",[this._v("可以得到1次补卡机会哦！")])])}]};var b=i("VU/8")(_,g,!1,function(t){i("zkBS")},"data-v-6d99e574",null).exports,k=i("iA4B");m.a.component(k.ProgressBar.name,k.ProgressBar),m.a.use(e.a).use(a.a).use(s.a).use(o.a).use(c.a).use(r.a).use(l.a).use(d.a).use(u.a).use(p.a),m.a.config.productionTip=!1,new m.a({el:"#app",components:{App:b},template:"<App/>"})},"97dx":function(t,n){},JKiR:function(t,n){},NAlg:function(t,n){},RUOb:function(t,n){},eh36:function(t,n){},figr:function(t,n){},hW8u:function(t,n){},nsZj:function(t,n){},px3J:function(t,n){},sKgQ:function(t,n){},zkBS:function(t,n){}},["2Ixz"]);
//# sourceMappingURL=fill.e5ee7894a7669fa90979.js.map