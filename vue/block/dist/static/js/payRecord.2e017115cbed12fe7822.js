webpackJsonp([2],{"97dx":function(t,i){},JKiR:function(t,i){},NAlg:function(t,i){},RUOb:function(t,i){},WPhB:function(t,i){},ZZgd:function(t,i){},bFPQ:function(t,i){},ch9H:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});e("RgoE");var s=e("0KWt"),n=(e("1E9F"),e("2Ux5")),a=(e("eqfM"),e("/QYm")),o=(e("JRZP"),e("LK01")),l=(e("ZuV/"),e("37Xn")),c=(e("3Lne"),e("SSsa")),r=(e("mMXg"),e("qYlo")),d=(e("k3b4"),e("+2ln")),u=(e("XmAh"),e("il3B")),h=(e("MY4N"),e("0zAV")),f=(e("9++/"),e("QhyB")),g=(e("yIEv"),e("OIh9")),p=(e("jAcA"),e("86U2")),v=(e("OWWB"),e("1fWZ")),m=e("7+uW"),b=Options.GetUserInfo().openid;WebApp.JSAPI.InitShare({title:"追梦行动派",desc:"有梦就行动，坚持返现金！",link:"http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/clock.html?time="+new Date,imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"});var _={name:"payRecord",data:function(){return{active:0,loading:!1,finished:!1,list:[],seek:0,total:0}},created:function(){Options.TestServer=!1,this.income(this,this.seek)},methods:{spend:function(t,i){t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"订单加载中..."}),TD_Request("ds","oinfo",{uid:b,seek:i,count:10},function(i,e){console.log(e),t.loading=!1,t.total=e.total,0!=e.total?(t.$toast.clear(),$.each(e.orders,function(i,e){var s=1e3*parseInt(e.ptime),n=new Date(s);e.time=n.toLocaleString().replace(/\//g,"-"),1==e.oid.substr(0,1)&&"DR"==e.did.substr(0,2)?e.title="[支出]购买小梦想互助":1==e.oid.substr(0,1)&&"TR"==e.did.substr(0,2)?e.title="[支出]购买小生意互助":3==e.oid.substr(0,1)?e.title="[支出]购买行动打卡合约":9==e.oid.substr(0,1)&&(e.title="[支出]购买小梦想梦想互助--红包领取"),t.list.push(e)}),t.list.length>=t.total?t.finished=!0:t.finished=!1,console.log(t.list.length)):t.finished=!0},function(t,i){console.log(i)})},income:function(t,i){t.$toast.loading({duration:0,forbidClick:!0,loadingType:"circular",message:"订单加载中..."}),TD_Request("ds","rinfo",{uid:b,seek:i,count:10},function(i,e){console.log(e),t.loading=!1,t.$toast.clear(),t.total=e.count,0!=e.count?($.each(e.refund,function(i,e){var s=1e3*parseInt(e.ptime),n=new Date(s);e.time=n.toLocaleString().replace(/\//g,"-"),t.list.push(e)}),t.list.length>=t.count?t.finished=!0:t.finished=!1):t.finished=!0},function(t,i){console.log(i)})},load:function(){this.loading=!0,this.seek++,this.spend(this,this.seek)},onload:function(){this.loading=!0,this.seek++,this.income(this,this.seek)},tabChange:function(t,i){this.seek=0,this.list=[],console.log(i),"支出"==i?this.spend(this,this.seek):"收入"==i&&this.income(this,this.seek)}}},k={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"record"},[e("div",{staticClass:"main"},[e("van-tabs",{attrs:{swipeable:"",color:"#00d094","title-active-color":"#00d094"},on:{change:t.tabChange},model:{value:t.active,callback:function(i){t.active=i},expression:"active"}},[e("van-tab",{staticClass:"tab",attrs:{title:"收入"}},[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.onload},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},t._l(t.list,function(i,s){return e("van-cell",{key:s},[e("h3",{staticClass:"title"},[t._v(t._s(i.reason))]),t._v(" "),e("div",{staticClass:"pay right",staticStyle:{color:"#00d094"}},[t._v("+"+t._s(i.bill/100))]),t._v(" "),e("br"),t._v(" "),e("p",[t._v(t._s(i.time))]),t._v(" "),e("p",{staticClass:"right",staticStyle:{float:"right","font-size":"0.28rem"}},[t._v("订单号:"+t._s(i.oid))])])}),1)],1),t._v(" "),e("van-tab",{staticClass:"tab",attrs:{title:"支出"}},[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.load},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},t._l(t.list,function(i,s){return e("van-cell",{key:s},[e("h3",{staticClass:"title"},[t._v(t._s(i.title))]),t._v(" "),e("div",{staticClass:"pay right",staticStyle:{color:"red"}},[t._v("-"+t._s(i.bill/100))]),t._v(" "),e("br"),t._v(" "),e("p",[t._v(t._s(i.time))]),t._v(" "),e("p",{staticClass:"right",staticStyle:{float:"right","font-size":"0.28rem"}},[t._v("订单号:"+t._s(i.oid))])])}),1)],1)],1)],1)])},staticRenderFns:[]};var y=e("VU/8")(_,k,!1,function(t){e("WPhB")},"data-v-2b6abac1",null).exports,C=e("iA4B");m.a.component(C.ProgressBar.name,C.ProgressBar),m.a.use(s.a).use(n.a).use(a.a).use(o.a).use(l.a).use(c.a).use(r.a).use(d.a).use(u.a).use(h.a).use(f.a).use(g.a).use(p.a).use(v.a),m.a.config.productionTip=!1,new m.a({el:"#app",components:{App:y},template:"<App/>"})},eh36:function(t,i){},hW8u:function(t,i){},nsZj:function(t,i){},px3J:function(t,i){},sKgQ:function(t,i){}},["ch9H"]);
//# sourceMappingURL=payRecord.2e017115cbed12fe7822.js.map