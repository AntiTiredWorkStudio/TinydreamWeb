webpackJsonp([4],{"97dx":function(t,i){},JKiR:function(t,i){},NAlg:function(t,i){},RUOb:function(t,i){},ZZgd:function(t,i){},eh36:function(t,i){},hW8u:function(t,i){},jb7J:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});s("RgoE");var n=s("0KWt"),e=(s("1E9F"),s("2Ux5")),a=(s("eqfM"),s("/QYm")),o=(s("JRZP"),s("LK01")),c=(s("ZuV/"),s("37Xn")),l=(s("3Lne"),s("SSsa")),d=(s("mMXg"),s("qYlo")),p=(s("k3b4"),s("+2ln")),r=(s("XmAh"),s("il3B")),u=(s("MY4N"),s("0zAV")),h=(s("9++/"),s("QhyB")),m=(s("OWWB"),s("1fWZ")),v=s("7+uW"),f=Options.GetUserInfo().openid;WebApp.JSAPI.InitShare({title:"追梦行动派",desc:"有梦就行动，坚持返现金！",link:"http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/clock.html?time="+(new Date).getTime(),imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"});var g={name:"list",data:function(){return{loading:!1,finished:!1,seek:0,count:0,list:[],isshow:!1,alrday:"",menday:"",misday:"",conday:"",opid:"",ishare:!1}},methods:{load:function(){this.getList(this),this.count>this.seek&&(this.seek++,this.getList(this))},guid:function(){this.ishare=!0},guid_close:function(){this.isshow=!1,this.ishare=!1},getList:function(t){TD_Request("op","olist",{uid:f,seek:t.seek,count:10},function(i,s){console.log(s),t.loading=!1,0==s.operations.length&&(t.finished=!0),$.each(s.operations,function(i,s){"DOING"==s.state?s.url="https://tdream.antit.top/active.png":"SUCCESS"==s.state?s.url="https://tdream.antit.top/actived.png":"FAILED"==s.state&&(s.url="https://tdream.antit.top/unactive.png"),"CO0000000002"==s.cid&&"DOING"==s.state||"CO0000000002"==s.cid&&"SUCCESS"==s.state?s.bg="https://tdream.antit.top/image/Contract100.png":"CO0000000001"==s.cid&&"DOING"==s.state||"CO0000000001"==s.cid&&"SUCCESS"==s.state?s.bg="https://tdream.antit.top/image/Contract21.png":"CO0000000002"==s.cid&&"FAILED"==s.state?s.bg="https://tdream.antit.top/hylb100.png":"CO0000000001"==s.cid&&"FAILED"==s.state&&(s.bg="https://tdream.antit.top/hylb21.png"),t.list.push(s),t.list.length>=t.count&&(t.finished=!0)})},function(t,i){console.log(i)})},get:function(t,i,s,n,e,a){this.alrday=i,this.menday=s,this.misday=n,this.conday=e,this.opid=a,this.isshow=!0},close:function(){this.isshow=!1}},watch:{opid:function(t){if(""!=t){if("new"==$_GET.type)var i="http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/friend.html?time="+(new Date).getTime()+"&opid="+this.opid+"&type=new";else i="http://tinydream.ivkcld.cn/TinydreamWeb/vue/block/dist/friend.html?time="+(new Date).getTime()+"&opid="+this.opid;WebApp.JSAPI.InitShare({title:"追梦行动派",desc:"有梦就行动，坚持返现金！",link:i,imgUrl:"https://tdream.antit.top/image/miniLogo.jpg"}),WebApp.JSAPI.OnShareTimeLine=function(t){self.ishare=!1},WebApp.JSAPI.OnShareFriend=function(t){self.ishare=!1}}}}},_={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"list"},[s("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.load},model:{value:t.loading,callback:function(i){t.loading=i},expression:"loading"}},t._l(t.list,function(i,n){return s("van-cell",{key:n,staticClass:"mt-20",style:{background:"url("+i.bg+") no-repeat center center / 6.8rem 2.7rem"}},[s("div",{staticClass:"right"},[s("van-icon",{staticClass:"icon",attrs:{name:i.url}}),t._v(" "),s("div",{staticClass:"btn"},[s("van-button",{attrs:{round:""},on:{click:function(s){return t.get(i.cid,i.alrday,i.menday,i.misday,i.conday,i.opid)}}},[t._v("查看打卡详情")])],1)],1)])}),1),t._v(" "),s("van-popup",{staticClass:"info",model:{value:t.isshow,callback:function(i){t.isshow=i},expression:"isshow"}},[s("div",{staticClass:"main"},[s("div",{staticClass:"mt-80"},[s("p",[t._v(t._s(t.alrday)),s("span",{staticStyle:{"font-size":"0.28rem"}},[t._v("天")])]),t._v(" "),s("p",{staticStyle:{"font-size":"0.28rem"}},[t._v("本合约共累计打卡")])]),t._v(" "),s("div",{staticClass:"mt-95"},[s("van-col",{attrs:{span:"8"}},[s("p",{staticClass:"txt"},[t._v("连续打卡")]),t._v(" "),s("p",{staticClass:"num"},[t._v(t._s(t.conday))])]),t._v(" "),s("van-col",{attrs:{span:"8"}},[s("p",{staticClass:"txt"},[t._v("缺卡")]),t._v(" "),s("p",{staticClass:"num"},[t._v(t._s(t.misday))])]),t._v(" "),s("van-col",{attrs:{span:"8"}},[s("p",{staticClass:"txt"},[t._v("补卡")]),t._v(" "),s("p",{staticClass:"num"},[t._v(t._s(t.menday))])])],1),t._v(" "),s("p",{staticClass:"tip",on:{click:t.guid}},[t._v("立即分享打卡历程")])]),t._v(" "),s("div",{staticClass:"close",staticStyle:{"text-align":"center"}},[s("van-icon",{staticClass:"icon",attrs:{name:"https://tdream.antit.top/DaKaOKX.png"},on:{click:t.close}})],1)]),t._v(" "),s("van-popup",{staticClass:"guid_mask",model:{value:t.ishare,callback:function(i){t.ishare=i},expression:"ishare"}},[s("div",{staticClass:"guid"}),t._v(" "),s("div",{staticClass:"btn",on:{click:t.guid_close}})])],1)},staticRenderFns:[]};var C=s("VU/8")(g,_,!1,function(t){s("nIfX")},"data-v-5ad3c7d4",null).exports;v.a.use(n.a).use(e.a).use(a.a).use(o.a).use(c.a).use(l.a).use(d.a).use(p.a).use(r.a).use(u.a).use(h.a).use(m.a),v.a.config.productionTip=!1,new v.a({el:"#app",components:{App:C},template:"<App/>"})},nIfX:function(t,i){},nsZj:function(t,i){},px3J:function(t,i){},sKgQ:function(t,i){}},["jb7J"]);
//# sourceMappingURL=list.97b5325b4573327239f8.js.map