(function(t){function e(e){for(var n,r,s=e[0],l=e[1],c=e[2],p=0,d=[];p<s.length;p++)r=s[p],i[r]&&d.push(i[r][0]),i[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var l=a[r];0!==i[l]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},o=[];function r(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"833608e1"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=i[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise(function(e,n){a=i[t]=[e,n]});e.push(a[2]=n);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=r(t),o=function(e){l.onerror=l.onload=null,clearTimeout(c);var a=i[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+n+": "+o+")");r.type=n,r.request=o,a[1](r)}i[t]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),i=a.n(n);i.a},"52e3":function(t,e,a){"use strict";var n=a("b65f"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("7f7f"),a("e17f");var n=a("2241"),i=(a("8a58"),a("e41f")),o=(a("66b9"),a("b650")),r=(a("bda7"),a("5e46")),s=(a("da3c"),a("0b33")),l=(a("4d48"),a("d1e1")),c=(a("81e6"),a("9ffb")),p=(a("c3a6"),a("ad06")),u=(a("537a"),a("ac28")),d=(a("a52c"),a("2ed4")),m=(a("cadf"),a("551c"),a("f751"),a("097d"),a("2b0e")),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),a("router-view",{attrs:{name:"payInfo"}}),t.istab?a("tab-bar"):t._e()],1)},v=[],h=(a("a481"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabbar"},[a("van-tabbar",{attrs:{"active-color":"#00d094"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabbar,function(e,n){return a("van-tabbar-item",{key:n,attrs:{to:e.path},scopedSlots:t._u([{key:"icon",fn:function(t){return a("img",{attrs:{src:t.active?e.active:e.normal}})}}],null,!0)},[a("span",[t._v(t._s(e.title))])])}),1)],1)}),b=[],g={name:"tabbar",data:function(){return{active:0,tabbar:[{path:"/",title:"梦想互助",normal:"http://tdream.antit.top/image/nav_index_disable.png",active:"http://tdream.antit.top/image/nav_index.png"},{path:"/clock",title:"行动打卡",normal:"https://tdream.antit.top/ActiveSignInOff.png",active:"https://tdream.antit.top/ActiveSignInOk.png"},{path:"/user",title:"个人中心",normal:"http://tdream.antit.top/image/nav_owner_disable.png",active:"http://tdream.antit.top/image/nav_owner.png"}]}},created:function(){console.log(this.$route.path),"/"==this.$route.path?this.active=0:"/clock"==this.$route.path?this.active=1:"/user"==this.$route.path&&(this.active=2)},watch:{$route:function(t,e){"/"==t.path?this.active=0:"/clock"==t.path?this.active=1:"/user"==t.path&&(this.active=2)}}},_=g,y=a("2877"),C=Object(y["a"])(_,h,b,!1,null,null,null),x=C.exports,w={name:"App",data:function(){return{istab:!0}},created:function(){this.$router.replace("/"),"/"!=this.$route.path&&"/clock"!=this.$route.path&&"/user"!=this.$route.path?this.istab=!1:this.istab=!0},methods:{},components:{TabBar:x},watch:{$route:function(t,e){/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)&&(location.href="http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/#"+this.to.path),console.log(t.path,t),"/"!=t.path&&"/clock"!=t.path&&"/user"!=t.path?this.istab=!1:this.istab=!0}}},k=w,I=(a("034f"),Object(y["a"])(k,f,v,!1,null,null,null)),S=I.exports,j=a("8c4f"),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"banner swipslider",attrs:{id:"banner"}},[a("slider",{ref:"slider",attrs:{options:t.sliderinit}},t._l(t.someList,function(t,e){return a("slideritem",{key:e,style:t.style})}),1)],1),a("screen",{attrs:{orders:t.orders}}),a("pool",{attrs:{pools:t.pools}}),a("p",{staticClass:"luck"},[a("router-link",{staticStyle:{"text-decoration":"underline"},attrs:{to:"/history",tag:"span"}},[t._v("往期幸运者")])],1),a("rules"),t._m(0),a("van-popup",{staticClass:"dream",model:{value:t.isdaward,callback:function(e){t.isdaward=e},expression:"isdaward"}},[a("div",{staticClass:"award"},[a("div",{staticClass:"main"},[a("p",{staticClass:"title"},[t._v("幸运提示")]),a("p",{staticClass:"msg"},[t._v("\n          恭喜您成为梦想互助20190312期幸运者，请您在7个工作日内完善梦想并实名认证，通过审核后3个工作日内给您颁发梦想互助金！\n        ")]),a("div",{staticClass:"fbtn"},[a("van-button",{attrs:{type:"primary",size:"large",round:""}},[t._v("完善梦想")])],1)])])])],1)},O=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"icon_notice"},[a("div",{staticClass:"left"}),a("div",{staticClass:"right"},[a("div",{staticClass:"text ntext",staticStyle:{"font-size":"6px"}},[t._v("0")])])])}],P=a("b190"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"screen"},[a("div",{staticClass:"warp"},[a("van-col",{attrs:{span:"12"}},[a("van-icon",{staticClass:"headicon",attrs:{name:t.info.headicon}}),a("span",{staticClass:"nickname"},[t._v(t._s(t.info.nickname))])],1),a("van-col",{staticStyle:{"text-align":"right","font-size":"0.26rem"},attrs:{span:"12"}},[t._v("\n            "+t._s(t.info.message)+"\n        ")])],1)])},D=[],E={name:"screen",data:function(){return{buyinfo:"",info:""}},props:{orders:{type:[Array,Object],default:function(){return[]}}},created:function(){this.check()},methods:{interval:function(){var t=this,e=t.buyinfo.shift(),a=(new Date).getTime()/1e3,n=DescriptionTime(a-parseInt(e.ptime));if("STANDARD"==e.ptype)var i="小梦想";else if("TRADE"==e.ptype)i="小生意";e.message=n+"前购买了"+e.dcount+"份"+i,t.buyinfo.push(e),t.info=e,setInterval(function(){if(""!=t.buyinfo){var e=t.buyinfo.shift(),a=(new Date).getTime()/1e3,n=DescriptionTime(a-parseInt(e.ptime));if("STANDARD"==e.ptype)var i="小梦想";else if("TRADE"==e.ptype)i="小生意";e.message=n+"前购买了"+e.dcount+"份"+i,t.buyinfo.push(e),t.info=e}},3e3)},check:function(){var t=this,e=setInterval(function(){""!=t.buyinfo&&(t.interval(),clearInterval(e))},50)}},watch:{orders:function(t){this.buyinfo=t}}},M=E,B=(a("afe2"),Object(y["a"])(M,A,D,!1,null,"ba5db5f2",null)),z=B.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pool"},[a("van-tabs",{attrs:{swipeable:"","title-active-color":"#00d094",color:"#00d094","line-width":"20","line-height":"1"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tab",{staticClass:"dream",attrs:{title:"梦想互助"}},[a("div",{staticClass:"main"},[a("h3",{staticClass:"title"},[t._v(t._s(""!=t.mainpool?t.mainpool.ptitle:""))]),a("div",{staticClass:"progress"},[a("yd-progressbar",{attrs:{progress:""==t.mainpool?0:t.mainpool.cbill/t.mainpool.tbill,"trail-width":"4","stroke-color":"#edf0f5","trail-color":"#ffc054"}},[a("van-col",{staticClass:"timeouts",attrs:{span:"24"}},[a("van-icon",{staticClass:"icon_clock",attrs:{name:"clock-o"}}),a("span",[t._v(t._s(""==t.timeout?"":t.timeout))])],1),a("van-col",{staticClass:"current",attrs:{span:"24"}},[a("span",{staticClass:"money"},[t._v(t._s(""!=t.mainpool?t.mainpool.realBill+t.mainpool.realUnit:""))])]),a("van-col",{staticClass:"text",attrs:{span:"24"}},[a("span",[t._v(t._s(""==t.mainpool?"":t.mainpool.billHint))])])],1)],1),a("div",{staticClass:"poolInfo"},[a("van-col",{attrs:{span:"12"}},[a("p",[t._v(t._s(""==t.mainpool?"":t.mainpool.rtbillValue+t.mainpool.rtbillUnit))]),a("p",[t._v("互助目标")])]),a("van-col",{staticStyle:{"text-align":"right"},attrs:{span:"12"}},[a("p",[t._v(t._s(""==t.mainpool?"":t.mainpool.rubill+t.mainpool.rubillUnit))]),a("p",[t._v("价格")])])],1),a("div",{staticClass:"buybtn"},[a("van-button",{attrs:{type:"primary",size:"large",round:""},on:{click:function(e){return t.join("dream")}}},[t._v("参与互助")])],1)]),a("p",{staticClass:"tip"},[t._v("每个人支付少量互助金，从中随机产生1名幸运者获得累计互助金启动梦想！")])]),a("van-tab",{staticClass:"trade",attrs:{title:"生意互助"}},[a("div",{staticClass:"main"},[a("div",{staticClass:"banner",style:{background:""==t.trade?"":"url("+t.trade.trade.bannerUrl+") no-repeat center center / 6.8rem 3.86rem"}},[a("p",[a("span",[t._v(t._s(""==t.trade?"":t.trade.ptitle))]),a("span",[t._v("生意详情>>")])])]),a("div",{staticClass:"tradeInfo"},[a("p",[t._v(t._s(""==t.trade?"":t.trade.billHint)),a("span",[t._v(t._s(""==t.trade?"":t.trade.realBill+t.trade.realUnit))])]),a("div",{staticClass:"progress"},[a("yd-progressbar",{staticStyle:{height:"0.3rem"},attrs:{type:"line",progress:""==t.trade?0:t.trade.cbill/t.trade.tbill,"trail-width":"4","stroke-color":"#edf0f5","trail-color":"#ffc054"}})],1),a("div",{staticClass:"info"},[a("van-col",{attrs:{span:"12"}},[a("p",[t._v(t._s(""==t.trade?"":t.trade.rtbillValue+t.trade.rtbillUnit))]),a("p",[t._v("互助目标(不满不开)")])]),a("van-col",{attrs:{span:"12"}},[a("p",[t._v(t._s(""==t.trade?"":t.trade.rubillValue+t.trade.rubillUnit))]),a("p",[t._v("价格")])])],1),a("div",{staticClass:"tradeBtn"},[a("van-button",{attrs:{type:"primary",size:"large",round:""},on:{click:function(e){return t.join("trade")}}},[t._v("参与互助")])],1)])]),a("p",{staticClass:"tip"},[t._v("没人支付少量互助金，从中随机产生1名幸运者成为指定目标的免费获得者")])])],1)],1)},U=[],q={name:"pool",data:function(){return{mainpool:"",trade:"",active:0,timeout:this.timeout()}},props:{pools:{type:[Array,Object],default:function(){return[]}}},methods:{timeout:function(){var t=this;setInterval(function(){var e=parseInt((new Date).getTime()/1e3),a=parseInt(t.mainpool.ptime)+parseInt(t.mainpool.duration)-e,n=Math.floor(a/3600)>=10?Math.floor(a/3600):"0"+Math.floor(a/3600),i=Math.floor(a/60%60)>=10?Math.floor(a/60%60):"0"+Math.floor(a/60%60),o=Math.floor(a%60)>=10?Math.floor(a%60):"0"+Math.floor(a%60);t.timeout=n+":"+i+":"+o},1e3)},join:function(t){this.Buy(this,t)},Buy:function(t,e){var a="dream"==e?t.mainpool.pid:t.trade.pid;TD_Request("ds","buy",{uid:t.$store.state.uid,pid:a},function(a,n){console.log(n),n.actions.hasOwnProperty("editdream")?t.$dialog.confirm({title:"添加梦想",message:"您还没有添加梦想，添加梦想后即可参与互助，是否前往添加",confirmButtonText:"去添加",confirmButtonColor:"#00d094"}).then(function(){console.error("跳转小梦想添加页面")}):(t.$store.commit("actions",n.actions),console.error("梦想互助支付页面"),t.$router.push("/payInfo/"+e))},function(e,a){console.log(a),11==e&&t.$dialog.alert({title:"绑定手机",message:"您尚未绑定手机，绑定手机后就可以参与互助啦！",confirmButtonText:"去绑定",confirmButtonColor:"#00d094"}).thne(function(){console.error("跳转手机绑定页面")})})}},watch:{pools:function(t){console.log(this.$store.state.uid),console.log(t),0==t[0].code?(this.trade=t[0].maintrade,this.mainpool=t[0].mainpool):1==t[0].code?(this.trade=t[0].maintrade,$(".dream").html(t[0].context).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"})):2==t[0].code?(this.mainpool=t[0].mainpool,$(".trade").html(t[0].context).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"})):-1==t[0].code&&($(".dream").html(t[0].tcontext).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"}),$(".trade").html(t[0].context).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"})),console.log(this.trade),console.log(this.mainpool)}}},J=q,L=(a("d278"),Object(y["a"])(J,R,U,!1,null,"57a8439a",null)),N=L.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rules"},[t._m(0),a("div",{staticClass:"steps"},[a("van-col",{attrs:{span:"6"}},[a("van-icon",{attrs:{name:"http://tdream.antit.top/image/active_index1.png"}}),a("p",[t._v("多人互助")])],1),a("van-col",{attrs:{span:"6"}},[a("van-icon",{attrs:{name:"http://tdream.antit.top/image/avtive_index2.png"}}),a("p",[t._v("1人幸运")])],1),a("van-col",{attrs:{span:"6"}},[a("van-icon",{attrs:{name:"http://tdream.antit.top/image/avtive_index3.png"}}),a("p",[t._v("启动梦想")])],1),a("van-col",{attrs:{span:"6"}},[a("van-icon",{attrs:{name:"http://tdream.antit.top/image/active_index4.png"}}),a("p",[t._v("梦想报道")])],1)],1),a("div",{staticClass:"info"},[a("div",{staticClass:"rule"},[a("p",[a("van-icon",{attrs:{name:"http://tdream.antit.top/image/index1.png"}}),a("span",[t._v("多人互助 — — 参与互助每个人支付少量互助金")])],1),a("p",[a("van-icon",{attrs:{name:"http://tdream.antit.top/image/index2.png"}}),a("span",[t._v("1人幸运 — — 公平随机产生1名幸运者")])],1),a("p",[a("van-icon",{attrs:{name:"http://tdream.antit.top/image/index3.png"}}),a("span",[t._v("启动梦想 — — 幸运者得到累计互助金启动梦想")])],1),a("p",[a("van-icon",{attrs:{name:"http://tdream.antit.top/image/index4.png"}}),a("span",[t._v("梦想报道 — — 梦想执行跟踪报道")])],1),t._m(1)])])])},W=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("div",{staticClass:"line left"}),a("div",{staticClass:"circle left"}),a("p",[t._v("小梦想互助规则")]),a("div",{staticClass:"circle right"}),a("div",{staticClass:"line right"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"more"},[a("span",[t._v("了解更多")])])}],G={name:"rules"},H=G,F=(a("f399"),Object(y["a"])(H,V,W,!1,null,"649c2ce4",null)),K=F.exports,Q={name:"home",data:function(){return{sliderinit:{currentPage:0,autoplay:3e3,loop:!0,slidesToScroll:1,duration:300},someList:[{style:"background:url(http://tdream.antit.top/image/banner.png) no-repeat center center / 6.8rem 2rem"},{style:"background:url(https://tdream.antit.top/image/Red_SendPack.jpg) no-repeat center center / 6.8rem 2rem;border-radius:0.2rem"}],userInfo:"",orders:"",pools:"",isdaward:!0}},components:{slider:P["slider"],slideritem:P["slideritem"],screen:z,pool:N,rules:K},created:function(){ExistStorage("userInfo")?this.Register(this,JSON.parse(GetStorage("userInfo"))):window.location.href="http://tinydream.ivkcld.cn/TInydreamWeb/dream"},methods:{Register:function(t,e){TD_Request("us","enter",{uid:e.openid,nickname:e.nickname,headicon:e.headimgurl},function(e,a){if(console.log(a),t.$store.commit("uid",GetStorage("userInfo").openid),t.orders=a.buyinfo,0!=a.mainpool.length&&DreamPoolAnalysis(a.mainpool),0!=a.maintrade.length&&DreamPoolAnalysis(a.maintrade),0==a.mainpool.length&&0!=a.maintrade.length)var n=[{code:1,mainpool:a.mainpool,context:"暂无更多梦想池",maintrade:a.maintrade}];else if(0!=a.mainpool.length&&0==a.maintrade.length)n=[{code:2,mainpool:a.mainpool,context:"暂无更多项目",maintrade:a.maintrade}];else if(0==a.mainpool.length&&0==a.maintrade.length)n=[{code:-1,mainpool:a.mainpool,context:"暂无更多项目",tcontext:"暂无更多梦想池",maintrade:a.maintrade}];else n=[{code:0,mainpool:a.mainpool,context:"成功",maintrade:a.maintrade}];t.pools=n},function(t,e){console.log(e)})}}},X=Q,Y=(a("52e3"),Object(y["a"])(X,T,O,!1,null,"a9d9f952",null)),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"payInfo"})},et=[],at={name:"payInfo"},nt=at,it=Object(y["a"])(nt,tt,et,!1,null,"9cbbbbae",null),ot=it.exports;m["a"].use(j["a"]);var rt=new j["a"]({base:"/TinydreamWeb/dream/dist/",routes:[{path:"/",name:"home",components:{default:Z}},{path:"/payinfo/:type",name:"payInfo",components:{payInfo:ot}},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),st=a("2f62");m["a"].use(st["a"]);var lt=new st["a"].Store({state:{uid:"",actions:""},mutations:{uid:function(t,e){t.uid=e},actions:function(t,e){t.actions=e}}}),ct=a("df72"),pt=a("6ed7");m["a"].use(u["a"]).use(d["a"]),m["a"].use(l["a"]).use(c["a"]).use(p["a"]),m["a"].use(r["a"]).use(s["a"]),m["a"].use(o["a"]),m["a"].use(i["a"]),m["a"].use(n["a"]),m["a"].component(ct["ProgressBar"].name,ct["ProgressBar"]),m["a"].component(pt["Step"].name,pt["Step"]),m["a"].component(pt["StepItem"].name,pt["StepItem"]),m["a"].config.productionTip=!1,new m["a"]({store:lt,router:rt,render:function(t){return t(S)}}).$mount("#app")},"64a9":function(t,e,a){},"70da":function(t,e,a){},"8f41":function(t,e,a){},afe2:function(t,e,a){"use strict";var n=a("bcf9"),i=a.n(n);i.a},b65f:function(t,e,a){},bcf9:function(t,e,a){},d278:function(t,e,a){"use strict";var n=a("70da"),i=a.n(n);i.a},f399:function(t,e,a){"use strict";var n=a("8f41"),i=a.n(n);i.a}});
//# sourceMappingURL=app.c70a2c42.js.map