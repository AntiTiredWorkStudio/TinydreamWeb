webpackJsonp([6],{"2Ixz":function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});i("RgoE");var e=i("0KWt"),a=(i("1E9F"),i("2Ux5")),s=(i("eqfM"),i("/QYm")),o=(i("JRZP"),i("LK01")),c=(i("ZuV/"),i("37Xn")),r=(i("3Lne"),i("SSsa")),d=(i("mMXg"),i("qYlo")),l=(i("k3b4"),i("+2ln")),u=(i("XmAh"),i("il3B")),p=(i("MY4N"),i("0zAV")),f=i("7+uW"),m=Options.GetUserInfo().openid,h={name:"fill",data:function(){return{headicons:"",cardinfo:"",css:""}},created:function(){Options.TestServer=!1,""!=$_GET.opid?("success"==$_GET.state?this.css={background:"url(https://tdream.antit.top/image/rightframe.png) no-repeat","background-size":"5.86rem 2.19rem"}:this.css={"background-image":"url(https://tdream.antit.top/BuKaCiShuBeiJing.png)","background-size":"5.86rem 2.19rem"},this.Info(this,$_GET.opid),this.headIcon(this)):window.location.href="actionClock.html?time="+(new Date).getTime()},methods:{Info:function(t,n){t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"信息加载中..."}),TD_Request("op","uinfo",{uid:m},function(i,e){t.$toast.clear(),console.log(e);var a=e.info.menchance;TD_Request("op","oif",{opid:n,uid:m},function(i,e){WebApp.JSAPI.InitShare({title:e.info.nickname+"已加入追梦行动派为 "+e.info.theme+" 坚持行动"+e.info.alrday+"天",desc:"有梦就行动，坚持返现金！",link:"http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/friend.html?time="+(new Date).getTime()+"&opid="+n,imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"}),console.log(e),t.cardinfo={menchance:a,misday:e.info.misday,menday:e.info.menday}},function(t,n){console.log(n)})},function(n,i){t.$toast.clear(),console.log(i)})},headIcon:function(t){TD_Request("op","ihics",{uid:m},function(n,i){console.log(i),t.headicons=i.headicons,0==i.headicons.length&&$(".tip").html("当前你还没有邀请到小伙伴呢，快去邀请小伙伴们一起参加追梦行动吧！").show()},function(t,n){console.log(n)})}}},v={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"fill"},[i("div",{staticClass:"top",style:t.css},[i("p",[t._v("当前剩余"+t._s(""==t.cardinfo?"--":t.cardinfo.menchance)+"次补卡机会")])]),t._v(" "),i("div",{staticClass:"middle"},[i("p",[t._v("成功补卡"+t._s(""==t.cardinfo?"--":t.cardinfo.menday)+"次还有"+t._s(""==t.cardinfo?"--":t.cardinfo.misday)+"次未打卡")])]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"bottom-t"},[i("van-col",{attrs:{span:"2"}},[i("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/image/rightarrow.png"}})],1),t._v(" "),i("van-col",{attrs:{span:"20"}},[i("p",[t._v("\n                    您已影响身边"),i("span",[t._v(t._s(t.headicons.length))]),t._v("位小伙伴成为追梦行动派\n                ")])]),t._v(" "),i("van-col",{attrs:{span:"2"}},[i("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/image/leftarrow.png"}})],1)],1),t._v(" "),i("div",{staticClass:"tip"}),t._v(" "),t._l(t.headicons,function(n,e){return i("div",{key:e,staticClass:"bottom"},t._l(t.headicons,function(t,n){return i("van-icon",{key:n,staticClass:"icon",attrs:{name:t}})}),1)})],2)},staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"center"},[n("p",[this._v("点击右上角“...”立即分享今日打卡")])])},function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"center_b"},[n("p",[this._v("赶紧转发今日的打卡到朋友圈吧，")]),this._v(" "),n("p",[this._v("每成功影响一位好友成为行动派")]),this._v(" "),n("p",[this._v("（支付参与行动合约）")]),this._v(" "),n("p",[this._v("可以得到1次补卡机会哦！")])])}]};var _=i("VU/8")(h,v,!1,function(t){i("tSJ2")},"data-v-76775617",null).exports,g=i("iA4B");f.a.component(g.ProgressBar.name,g.ProgressBar),f.a.use(e.a).use(a.a).use(s.a).use(o.a).use(c.a).use(r.a).use(d.a).use(l.a).use(u.a).use(p.a),f.a.config.productionTip=!1,new f.a({el:"#app",components:{App:_},template:"<App/>"})},"97dx":function(t,n){},JKiR:function(t,n){},NAlg:function(t,n){},RUOb:function(t,n){},eh36:function(t,n){},hW8u:function(t,n){},nsZj:function(t,n){},px3J:function(t,n){},sKgQ:function(t,n){},tSJ2:function(t,n){}},["2Ixz"]);
//# sourceMappingURL=fill.ab55453ce4b89e76cb73.js.map