webpackJsonp([2],{"97dx":function(t,e){},GNi9:function(t,e){},JKiR:function(t,e){},NAlg:function(t,e){},RUOb:function(t,e){},ZZgd:function(t,e){},bFPQ:function(t,e){},ch9H:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("RgoE");var s=i("0KWt"),n=(i("1E9F"),i("2Ux5")),o=(i("eqfM"),i("/QYm")),a=(i("JRZP"),i("LK01")),l=(i("ZuV/"),i("37Xn")),c=(i("3Lne"),i("SSsa")),r=(i("mMXg"),i("qYlo")),d=(i("k3b4"),i("+2ln")),u=(i("XmAh"),i("il3B")),h=(i("MY4N"),i("0zAV")),f=(i("9++/"),i("QhyB")),g=(i("yIEv"),i("OIh9")),p=(i("jAcA"),i("86U2")),v=(i("OWWB"),i("1fWZ")),m=i("7+uW"),_=Options.GetUserInfo().openid,b={name:"payRecord",data:function(){return{active:0,loading:!1,finished:!1,list:[],seek:0,total:0}},created:function(){WebApp.JSAPI.InitShare({title:"追梦行动派",desc:"有梦就行动，坚持返现金！",link:"http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/clock.html?time="+(new Date).getTime(),imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"}),Options.TestServer=!1,this.income(this,this.seek)},methods:{spend:function(t,e){t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"加载中..."}),TD_Request("ds","oinfo",{uid:_,seek:e,count:10},function(e,i){console.log(i),t.loading=!1,t.total=i.total,0!=i.total&&0!=i.orders.length?(t.$toast.clear(),$.each(i.orders,function(e,i){var s=1e3*parseInt(i.ptime),n=new Date(s);i.time=n.toLocaleString().replace(/\//g,"-"),1==i.oid.substr(0,1)&&"DR"==i.did.substr(0,2)?i.title="[支出]购买小梦想互助":1==i.oid.substr(0,1)&&"TR"==i.did.substr(0,2)?i.title="[支出]购买小生意互助":3==i.oid.substr(0,1)?i.title="[支出]购买行动打卡合约":9==i.oid.substr(0,1)&&(i.title="[支出]购买小梦想梦想互助--红包领取"),t.list.push(i)}),console.log(list,t.total),t.list.length>=t.total?t.finished=!0:t.finished=!1,console.log(t.list.length)):t.finished=!0},function(t,e){console.log(e)})},income:function(t,e){t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"加载中..."}),TD_Request("ds","rinfo",{uid:_,seek:e,count:10},function(e,i){console.log(i),t.loading=!1,t.$toast.clear(),t.total=i.count,0!=i.count&&0!=i.refund.length?($.each(i.refund,function(e,i){var s=1e3*parseInt(i.time),n=new Date(s);i.time=n.toLocaleString().replace(/\//g,"-"),t.list.push(i)}),t.list.length>=t.count?t.finished=!0:t.finished=!1):t.finished=!0},function(t,e){console.log(e)})},load:function(){this.loading=!0,this.seek++,this.spend(this,this.seek)},onload:function(){this.loading=!0,this.seek++,this.income(this,this.seek)},tabChange:function(t,e){this.seek=0,this.list=[],console.log(e),"支出"==e?this.spend(this,this.seek):"收入"==e&&this.income(this,this.seek)}}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"record"},[i("div",{staticClass:"main"},[i("van-tabs",{attrs:{swipeable:"",color:"#00d094","title-active-color":"#00d094"},on:{change:t.tabChange},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[i("van-tab",{staticClass:"tab",attrs:{title:"收入"}},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onload},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,function(e,s){return i("van-cell",{key:s},[i("h3",{staticClass:"title"},[t._v(t._s(e.reason))]),t._v(" "),i("div",{staticClass:"pay right",staticStyle:{color:"#00d094"}},[t._v("+"+t._s(e.bill/100))]),t._v(" "),i("br"),t._v(" "),i("p",[t._v(t._s(e.time))]),t._v(" "),i("p",{staticClass:"right",staticStyle:{float:"right","font-size":"0.28rem"}},[t._v("订单号:"+t._s(e.oid))])])}),1)],1),t._v(" "),i("van-tab",{staticClass:"tab",attrs:{title:"支出"}},[i("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.load},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,function(e,s){return i("van-cell",{key:s},[i("h3",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"pay right",staticStyle:{color:"red"}},[t._v("-"+t._s(e.bill/100))]),t._v(" "),i("br"),t._v(" "),i("p",[t._v(t._s(e.time))]),t._v(" "),i("p",{staticClass:"right",staticStyle:{float:"right","font-size":"0.28rem"}},[t._v("订单号:"+t._s(e.oid))])])}),1)],1)],1)],1)])},staticRenderFns:[]};var y=i("VU/8")(b,k,!1,function(t){i("GNi9")},"data-v-75c1912c",null).exports,C=i("iA4B");m.a.component(C.ProgressBar.name,C.ProgressBar),m.a.use(s.a).use(n.a).use(o.a).use(a.a).use(l.a).use(c.a).use(r.a).use(d.a).use(u.a).use(h.a).use(f.a).use(g.a).use(p.a).use(v.a),m.a.config.productionTip=!1,new m.a({el:"#app",components:{App:y},template:"<App/>"})},eh36:function(t,e){},hW8u:function(t,e){},nsZj:function(t,e){},px3J:function(t,e){},sKgQ:function(t,e){}},["ch9H"]);
//# sourceMappingURL=payRecord.238277ea83e14e9fdd54.js.map