webpackJsonp([1],{"97dx":function(t,a){},JKiR:function(t,a){},MTyd:function(t,a,n){"use strict";var s=n("VU/8")({name:"tabbar",data:{tabbar:[{title:"梦想互助",normal:"http://tdream.antit.top/image/nav_index_disable.png",active:"http://tdream.antit.top/image/nav_index.png",url:"http://tinydream.ivkcld.cn/TinydreamWeb/index.html"},{title:"行动打卡",normal:"https://tdream.antit.top/ActiveSignInOff.png",active:"https://tdream.antit.top/ActiveSignInOk.png",url:"http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/clock.html"},{title:"个人中心",normal:"http://tdream.antit.top/image/nav_owner_disable.png",active:"http://tdream.antit.top/image/nav_owner.png",url:"http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/user.html"}]}},null,!1,null,null,null);a.a=s.exports},NAlg:function(t,a){},RUOb:function(t,a){},ZZgd:function(t,a){},bFPQ:function(t,a){},eh36:function(t,a){},gVb3:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});n("RgoE");var s=n("0KWt"),i=(n("1E9F"),n("2Ux5")),e=(n("eqfM"),n("/QYm")),c=(n("JRZP"),n("LK01")),o=(n("ZuV/"),n("37Xn")),l=(n("3Lne"),n("SSsa")),r=(n("mMXg"),n("qYlo")),v=(n("k3b4"),n("+2ln")),p=(n("XmAh"),n("il3B")),d=(n("MY4N"),n("0zAV")),u=(n("9++/"),n("QhyB")),f=(n("yIEv"),n("OIh9")),_=(n("jAcA"),n("86U2")),m=(n("OWWB"),n("1fWZ")),h=n("7+uW"),C=n("MTyd");WebApp.JSAPI.Init();var y=Options.GetUserInfo().openid,g={name:"user",data:function(){return{actives:2,tabbar:"",selfinfo:"",headicon:"",ncount:"",clock:"",cAttendence:"",cPerson:"",conday:""}},created:function(){console.log(C.a),this.tabbar=C.a.data.tabbar,this.GetSelfInfo(this),this.cinfo(this)},methods:{GetSelfInfo:function(t){t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"获取信息中..."}),TD_Request("us","selfinfo",{uid:y},function(a,n){console.log(n),t.$toast.clear(),t.headicon={background:"url("+n.selfinfo.headicon+") no-repeat center center / 1.32rem 1.32rem"},t.selfinfo=n.selfinfo,null==n.total["SUM(`alrday`)"]&&(n.total["SUM(`alrday`)"]=0),null==n.total["SUM(`conday`)"]&&(n.total["SUM(`conday`)"]=0),t.cAttendence=n.total["SUM(`alrday`)"],t.conday=n.total["SUM(`conday`)"]},function(t,a){console.log(a)})},notice:function(t,a){TD_Request("no","nc",{uid:a},function(a,n){0==n.ncount?(t.ncount="",$(".noticeNum").hide()):n.ncount>=99&&(t.ncount="99+"),t.ncount=n.ncount},function(t,a){console.log(a)})},cinfo:function(t){TD_Request("op","uinfo",{uid:y},function(t,a){console.log(a)},function(t,a){console.log(a)})},record:function(){window.location.href="payRecord.html?time="+(new Date).getTime()}}},b={render:function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"user"},[n("div",{staticClass:"header"},[n("van-row",{staticClass:"head_main"},[n("van-col",{attrs:{span:"18"}},[n("div",{staticClass:"headicon",style:t.headicon}),t._v(" "),n("span",{staticClass:"nickname"},[t._v(t._s(t.selfinfo.nickname))])]),t._v(" "),n("van-col",{staticStyle:{"text-align":"right"},attrs:{span:"6"}},[n("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/SZJL.png"},on:{click:t.record}})],1)],1),t._v(" "),n("van-row",{staticClass:"info"},[n("van-col",{staticClass:"middle",attrs:{span:"6"}},[n("p",{staticClass:"font-40"},[t._v(t._s(""==t.selfinfo?"--":t.selfinfo.dayBuy))]),t._v(" "),n("p",{staticClass:"font-24"},[t._v("今日参与")])]),t._v(" "),n("van-col",{staticClass:"middle",attrs:{span:"6"}},[n("p",{staticClass:"font-40"},[t._v(t._s(""==t.selfinfo?"--":t.selfinfo.totalJoin))]),t._v(" "),n("p",{staticClass:"font-24"},[t._v("互助总数")])]),t._v(" "),n("van-col",{staticClass:"middle",attrs:{span:"6"}},[n("p",{staticClass:"font-40"},[t._v(t._s(""==t.cAttendence?0:t.cAttendence))]),t._v(" "),n("p",{staticClass:"font-24"},[t._v("打卡总数")])]),t._v(" "),n("van-col",{staticClass:"middle",attrs:{span:"6"}},[n("p",{staticClass:"font-40"},[t._v(t._s(""==t.conday?0:t.conday))]),t._v(" "),n("p",{staticClass:"font-24"},[t._v("连续打卡次数")])])],1)],1),t._v(" "),n("van-col",{staticClass:"model",attrs:{span:"24"}},[n("span"),t._v(" "),n("h3",{staticClass:"title"},[t._v("个人中心")])]),t._v(" "),n("van-row",{staticClass:"userApp",attrs:{type:"flex",align:"center",justify:"center"}},[n("van-col",{attrs:{span:"8"}},[n("a",{attrs:{href:"../../../html/dreamHelp.html"}},[n("div",{staticClass:"icon icon_join"}),t._v(" "),n("p",{staticClass:"tip"},[t._v("我的参与")])])]),t._v(" "),n("van-col",{staticClass:"line",attrs:{span:"8"}},[n("a",{attrs:{href:"../../../html/dream.html"}},[n("div",{staticClass:"icon icon_dream"}),t._v(" "),n("p",{staticClass:"tip"},[t._v("小梦想")])])]),t._v(" "),n("van-col",{attrs:{span:"8"}},[n("a",{attrs:{href:"http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/clock.html"}},[n("div",{staticClass:"icon icon_clock"}),t._v(" "),n("p",{staticClass:"tip"},[t._v("行动打卡")])])])],1),t._v(" "),n("van-col",{staticClass:"model",attrs:{span:"24"}},[n("span"),t._v(" "),n("h3",{staticClass:"title"},[t._v("其他")])]),t._v(" "),n("van-row",{staticClass:"userApp",staticStyle:{margin:"0"},attrs:{type:"flex",align:"center",justify:"center"}},[n("van-col",{attrs:{span:"8"}},[n("a",{attrs:{href:"../../../html/RedEnvelope.html"}},[n("div",{staticClass:"icon icon_pack"}),t._v(" "),n("p",{staticClass:"tip"},[t._v("梦想红包")])])]),t._v(" "),n("van-col",{staticClass:"line",attrs:{span:"8"}},[n("a",{attrs:{href:"../../../html/phoneManage.html"}},[n("div",{staticClass:"icon icon_phone"}),t._v(" "),n("p",{staticClass:"tip"},[t._v("手机号管理")])])]),t._v(" "),n("van-col",{attrs:{span:"8"}},[n("a",{attrs:{href:"../../../html/auth.html"}},[n("div",{staticClass:"icon icon_auth"}),t._v(" "),n("p",{staticClass:"tip"},[t._v("实名认证")])])])],1),t._v(" "),n("van-row",{staticClass:"userApp",attrs:{type:"flex",align:"center",justify:"center"}},[n("van-col",{attrs:{span:"8"}},[n("a",{attrs:{href:"../../../html/notice.html"}},[n("div",{staticClass:"icon icon_notice",staticStyle:{position:"relative"}}),t._v(" "),n("p",{staticClass:"tip"},[t._v("系统通知")])])]),t._v(" "),n("van-col",{staticClass:"line",attrs:{span:"8"}},[n("a",{attrs:{href:"../../../html/cach.html"}},[n("div",{staticClass:"icon icon_cach"}),t._v(" "),n("p",{staticClass:"tip"},[t._v("联系客服")])])]),t._v(" "),n("van-col",{attrs:{span:"8"}},[n("a",{attrs:{href:"../../../html/question.html"}},[n("div",{staticClass:"icon icon_question"}),t._v(" "),n("p",{staticClass:"tip"},[t._v("新手指引")])])])],1),t._v(" "),n("van-tabbar",{attrs:{"active-color":"#00d094"},model:{value:t.actives,callback:function(a){t.actives=a},expression:"actives"}},t._l(t.tabbar,function(a,s){return n("van-tabbar-item",{key:s,attrs:{url:"http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/user.html"},scopedSlots:t._u([{key:"icon",fn:function(t){return n("img",{attrs:{src:t.active?a.active:a.normal}})}}],null,!0)},[n("span",[t._v("个人中心")])])}),1)],1)},staticRenderFns:[]};var k=n("VU/8")(g,b,!1,function(t){n("yL3s")},"data-v-c0d78ce0",null).exports,A=n("iA4B");h.a.component(A.ProgressBar.name,A.ProgressBar),h.a.use(s.a).use(i.a).use(e.a).use(c.a).use(o.a).use(l.a).use(r.a).use(v.a).use(p.a).use(d.a).use(u.a).use(f.a).use(_.a).use(m.a),h.a.config.productionTip=!1,new h.a({el:"#app",components:{App:k},template:"<App/>"})},hW8u:function(t,a){},nsZj:function(t,a){},px3J:function(t,a){},sKgQ:function(t,a){},yL3s:function(t,a){}},["gVb3"]);
//# sourceMappingURL=user.ff0cd88c75c6323dde81.js.map