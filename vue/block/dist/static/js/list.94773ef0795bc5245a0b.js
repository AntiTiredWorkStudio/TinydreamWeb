webpackJsonp([1],{"97dx":function(t,s){},JKiR:function(t,s){},NAlg:function(t,s){},RUOb:function(t,s){},ZZgd:function(t,s){},eh36:function(t,s){},gMOn:function(t,s){},hW8u:function(t,s){},jb7J:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});n("RgoE");var a=n("0KWt"),e=(n("1E9F"),n("2Ux5")),i=(n("eqfM"),n("/QYm")),c=(n("JRZP"),n("LK01")),o=(n("ZuV/"),n("37Xn")),l=(n("3Lne"),n("SSsa")),r=(n("mMXg"),n("qYlo")),u=(n("k3b4"),n("+2ln")),d=(n("XmAh"),n("il3B")),p=(n("MY4N"),n("0zAV")),m=(n("9++/"),n("QhyB")),v=(n("OWWB"),n("1fWZ")),h=n("7+uW"),f=Options.GetUserInfo().openid,g={name:"list",data:function(){return{loading:!1,finished:!1,seek:0,count:0,list:[],isshow:!1,alrday:"",menday:"",misday:"",conday:""}},methods:{load:function(){this.getList(this),this.count>this.seek&&(this.seek++,this.getList(this))},getList:function(t){TD_Request("op","olist",{uid:f,seek:t.seek,count:10},function(s,n){console.log(n),t.loading=!1,$.each(n.operations,function(s,n){"DOING"==n.state?n.url="https://tdream.antit.top/active.png":"SUCCESS"==n.state?n.url="https://tdream.antit.top/actived.png":"FAILED"==n.state&&(n.url="https://tdream.antit.top/unactive.png"),"CO0000000002"==n.cid&&"DOING"==n.state||"CO0000000002"==n.cid&&"SUCCESS"==n.state?$(".mt-20").css("background","url(https://tdream.antit.top/image/Contract100.png) no-repeat center center / 6.8rem 2.7rem"):"CO0000000001"==n.cid&&"DOING"==n.state||"CO0000000001"==n.cid&&"SUCCESS"==n.state?$(".mt-20").css("background","url(https://tdream.antit.top/image/Contract21.png) no-repeat center center / 6.8rem 2.7rem"):"CO0000000002"==n.cid&&"FAILED"==n.state?$(".mt-20").css("background","url(https://tdream.antit.top/hylb100.png) no-repeat center center / 6.8rem 2.7rem"):"CO0000000001"==n.cid&&"FAILED"==n.state&&$(".mt-20").css("background","url(https://tdream.antit.top/hylb21.png) no-repeat center center / 6.8rem 2.7rem"),t.list.push(n),t.list.length>=t.count&&(t.finished=!0)})},function(t,s){console.log(s)})},get:function(t,s,n,a,e){this.alrday=s,this.menday=n,this.misday=a,this.conday=e,this.isshow=!0},close:function(){this.isshow=!1}}},C={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"list"},[n("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.load},model:{value:t.loading,callback:function(s){t.loading=s},expression:"loading"}},[n("van-cell",{staticClass:"mt-20"},t._l(t.list,function(s,a){return n("div",{key:a,staticClass:"right"},[n("van-icon",{staticClass:"icon",attrs:{name:s.url}}),t._v(" "),n("div",{staticClass:"btn"},[n("van-button",{attrs:{round:""},on:{click:function(n){return t.get(s.cid,s.alrday,s.menday,s.misday,s.conday)}}},[t._v("查看打卡详情")])],1)],1)}),0)],1),t._v(" "),n("van-popup",{staticClass:"info",model:{value:t.isshow,callback:function(s){t.isshow=s},expression:"isshow"}},[n("div",{staticClass:"main"},[n("div",{staticClass:"mt-80"},[n("p",[t._v(t._s(t.alrday)),n("span",{staticStyle:{"font-size":"0.28rem"}},[t._v("天")])]),t._v(" "),n("p",{staticStyle:{"font-size":"0.28rem"}},[t._v("本合约共累计打卡")])]),t._v(" "),n("div",{staticClass:"mt-95"},[n("van-col",{attrs:{span:"8"}},[n("p",{staticClass:"txt"},[t._v("连续打卡")]),t._v(" "),n("p",{staticClass:"num"},[t._v(t._s(t.conday))])]),t._v(" "),n("van-col",{attrs:{span:"8"}},[n("p",{staticClass:"txt"},[t._v("缺卡")]),t._v(" "),n("p",{staticClass:"num"},[t._v(t._s(t.misday))])]),t._v(" "),n("van-col",{attrs:{span:"8"}},[n("p",{staticClass:"txt"},[t._v("补卡")]),t._v(" "),n("p",{staticClass:"num"},[t._v(t._s(t.menday))])])],1),t._v(" "),n("p",{staticClass:"tip"},[t._v("点击右上角“...”立即分享打卡历程")])]),t._v(" "),n("div",{staticClass:"close",staticStyle:{"text-align":"center"}},[n("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/DaKaOKX.png"},on:{click:t.close}})],1)])],1)},staticRenderFns:[]};var _=n("VU/8")(g,C,!1,function(t){n("gMOn")},"data-v-2bec88e3",null).exports;h.a.use(a.a).use(e.a).use(i.a).use(c.a).use(o.a).use(l.a).use(r.a).use(u.a).use(d.a).use(p.a).use(m.a).use(v.a),h.a.config.productionTip=!1,new h.a({el:"#app",components:{App:_},template:"<App/>"})},nsZj:function(t,s){},px3J:function(t,s){},sKgQ:function(t,s){}},["jb7J"]);
//# sourceMappingURL=list.94773ef0795bc5245a0b.js.map