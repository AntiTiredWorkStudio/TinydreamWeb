(function(t){function e(e){for(var n,i,s=e[0],l=e[1],c=e[2],p=0,d=[];p<s.length;p++)i=s[p],o[i]&&d.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==o[l]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},o={app:0},r=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3cf9d77f"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(t){var e=[],a=o[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=n);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t),r=function(e){l.onerror=l.onload=null,clearTimeout(c);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+n+": "+r+")");i.type=n,i.request=r,a[1](i)}o[t]=void 0}};var c=setTimeout(function(){r({type:"timeout",target:l})},12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"013b":function(t,e,a){"use strict";var n=a("2cf3"),o=a.n(n);o.a},"034f":function(t,e,a){"use strict";var n=a("64a9"),o=a.n(n);o.a},"2cf3":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("7f7f"),a("66b9");var n=a("b650"),o=(a("bda7"),a("5e46")),r=(a("da3c"),a("0b33")),i=(a("4d48"),a("d1e1")),s=(a("81e6"),a("9ffb")),l=(a("c3a6"),a("ad06")),c=(a("537a"),a("ac28")),p=(a("a52c"),a("2ed4")),u=(a("cadf"),a("551c"),a("f751"),a("097d"),a("2b0e")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),a("tab-bar")],1)},m=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabbar"},[a("van-tabbar",{attrs:{"active-color":"#00d094"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabbar,function(e,n){return a("van-tabbar-item",{key:n,attrs:{to:e.path},scopedSlots:t._u([{key:"icon",fn:function(t){return a("img",{attrs:{src:t.active?e.active:e.normal}})}}],null,!0)},[a("span",[t._v(t._s(e.title))])])}),1)],1)},v=[],h={name:"tabbar",data:function(){return{active:0,tabbar:[{path:"/",title:"梦想互助",normal:"http://tdream.antit.top/image/nav_index_disable.png",active:"http://tdream.antit.top/image/nav_index.png"},{path:"/clock",title:"行动打卡",normal:"https://tdream.antit.top/ActiveSignInOff.png",active:"https://tdream.antit.top/ActiveSignInOk.png"},{path:"/user",title:"个人中心",normal:"http://tdream.antit.top/image/nav_owner_disable.png",active:"http://tdream.antit.top/image/nav_owner.png"}]}},created:function(){console.log(this.$route.path),"/"==this.$route.path?this.active=0:"/clock"==this.$route.path?this.active=1:"/user"==this.$route.path&&(this.active=2)}},b=h,g=a("2877"),_=Object(g["a"])(b,f,v,!1,null,null,null),y=_.exports,C={name:"App",data:function(){},components:{TabBar:y}},x=C,w=(a("034f"),Object(g["a"])(x,d,m,!1,null,null,null)),k=w.exports,I=a("8c4f"),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"banner swipslider",attrs:{id:"banner"}},[a("slider",{ref:"slider",attrs:{options:t.sliderinit}},t._l(t.someList,function(t,e){return a("slideritem",{key:e,style:t.style})}),1)],1),a("screen",{attrs:{orders:t.orders}}),a("pool",{attrs:{pools:t.pools}}),a("p",{staticClass:"luck"},[a("router-link",{staticStyle:{"text-decoration":"underline"},attrs:{to:"/history",tag:"span"}},[t._v("往期幸运者")])],1),a("rules")],1)},S=[],j=a("b190"),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"screen"},[a("div",{staticClass:"warp"},[a("van-col",{attrs:{span:"12"}},[a("van-icon",{staticClass:"headicon",attrs:{name:t.info.headicon}}),a("span",{staticClass:"nickname"},[t._v(t._s(t.info.nickname))])],1),a("van-col",{staticStyle:{"text-align":"right","font-size":"0.26rem"},attrs:{span:"12"}},[t._v("\n            "+t._s(t.info.message)+"\n        ")])],1)])},A=[],D={name:"screen",data:function(){return{buyinfo:"",info:""}},props:{orders:{type:[Array,Object],default:function(){return[]}}},created:function(){this.check()},methods:{interval:function(){var t=this,e=t.buyinfo.shift(),a=(new Date).getTime()/1e3,n=DescriptionTime(a-parseInt(e.ptime));if("STANDARD"==e.ptype)var o="小梦想";else if("TRADE"==e.ptype)o="小生意";e.message=n+"前购买了"+e.dcount+"份"+o,t.buyinfo.push(e),t.info=e,setInterval(function(){if(""!=t.buyinfo){var e=t.buyinfo.shift(),a=(new Date).getTime()/1e3,n=DescriptionTime(a-parseInt(e.ptime));if("STANDARD"==e.ptype)var o="小梦想";else if("TRADE"==e.ptype)o="小生意";e.message=n+"前购买了"+e.dcount+"份"+o,t.buyinfo.push(e),t.info=e}},3e3)},check:function(){var t=this,e=setInterval(function(){""!=t.buyinfo&&(t.interval(),clearInterval(e))},50)}},watch:{orders:function(t){this.buyinfo=t}}},P=D,M=(a("c77e"),Object(g["a"])(P,T,A,!1,null,"72ef17c4",null)),E=M.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pool"},[a("van-tabs",{attrs:{swipeable:"","title-active-color":"#00d094",color:"#00d094","line-width":"20","line-height":"1"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tab",{staticClass:"dream",attrs:{title:"梦想互助"}},[a("div",{staticClass:"main"},[a("h3",{staticClass:"title"},[t._v(t._s(""!=t.mainpool?t.mainpool.ptitle:""))]),a("div",{staticClass:"progress"},[a("yd-progressbar",{attrs:{progress:""==t.mainpool?0:t.mainpool.cbill/t.mainpool.tbill,"trail-width":"4","stroke-color":"#edf0f5","trail-color":"#ffc054"}},[a("van-col",{staticClass:"timeouts",attrs:{span:"24"}},[a("van-icon",{staticClass:"icon_clock",attrs:{name:"clock-o"}}),a("span",[t._v(t._s(""==t.timeout?"":t.timeout))])],1),a("van-col",{staticClass:"current",attrs:{span:"24"}},[a("span",{staticClass:"money"},[t._v(t._s(""!=t.mainpool?t.mainpool.realBill+t.mainpool.realUnit:""))])]),a("van-col",{staticClass:"text",attrs:{span:"24"}},[a("span",[t._v(t._s(""==t.mainpool?"":t.mainpool.billHint))])])],1)],1),a("div",{staticClass:"poolInfo"},[a("van-col",{attrs:{span:"12"}},[a("p",[t._v(t._s(""==t.mainpool?"":t.mainpool.rtbillValue+t.mainpool.rtbillUnit))]),a("p",[t._v("互助目标")])]),a("van-col",{staticStyle:{"text-align":"right"},attrs:{span:"12"}},[a("p",[t._v(t._s(""==t.mainpool?"":t.mainpool.rubill+t.mainpool.rubillUnit))]),a("p",[t._v("价格")])])],1),a("div",{staticClass:"buybtn"},[a("van-button",{attrs:{type:"primary",size:"large",round:""}},[t._v("参与互助")])],1)]),a("p",{staticClass:"tip"},[t._v("每个人支付少量互助金，从中随机产生1名幸运者获得累计互助金启动梦想！")])]),a("van-tab",{staticClass:"trade",attrs:{title:"生意互助"}},[a("div",{staticClass:"main"},[a("div",{staticClass:"banner",style:{background:""==t.trade?"":"url("+t.trade.trade.bannerUrl+") no-repeat center center / 6.8rem 3.86rem"}},[a("p",[a("span",[t._v(t._s(""==t.trade?"":t.trade.ptitle))]),a("span",[t._v("生意详情>>")])])]),a("div",{staticClass:"tradeInfo"},[a("p",[t._v(t._s(""==t.trade?"":t.trade.billHint)),a("span",[t._v(t._s(""==t.trade?"":t.trade.realBill+t.trade.realUnit))])]),a("div",{staticClass:"progress"},[a("yd-progressbar",{staticStyle:{height:"0.3rem"},attrs:{type:"line",progress:""==t.trade?0:t.trade.cbill/t.trade.tbill,"trail-width":"4","stroke-color":"#edf0f5","trail-color":"#ffc054"}})],1),a("div",{staticClass:"info"},[a("van-col",{attrs:{span:"12"}},[a("p",[t._v(t._s(""==t.trade?"":t.trade.rtbillValue+t.trade.rtbillUnit))]),a("p",[t._v("互助目标(不满不开)")])]),a("van-col",{attrs:{span:"12"}},[a("p",[t._v(t._s(""==t.trade?"":t.trade.rubillValue+t.trade.rubillUnit))]),a("p",[t._v("价格")])])],1),a("div",{staticClass:"tradeBtn"},[a("van-button",{attrs:{type:"primary",size:"large",round:""}},[t._v("参与互助")])],1)])]),a("p",{staticClass:"tip"},[t._v("没人支付少量互助金，从中随机产生1名幸运者成为指定目标的免费获得者")])])],1)],1)},R=[],z={name:"pool",data:function(){return{mainpool:"",trade:"",active:0,timeout:this.timeout()}},props:{pools:{type:[Array,Object],default:function(){return[]}}},methods:{timeout:function(){var t=this;setInterval(function(){var e=parseInt((new Date).getTime()/1e3),a=parseInt(t.mainpool.ptime)+parseInt(t.mainpool.duration)-e,n=Math.floor(a/3600)>=10?Math.floor(a/3600):"0"+Math.floor(a/3600),o=Math.floor(a/60%60)>=10?Math.floor(a/60%60):"0"+Math.floor(a/60%60),r=Math.floor(a%60)>=10?Math.floor(a%60):"0"+Math.floor(a%60);t.timeout=n+":"+o+":"+r},1e3)}},watch:{pools:function(t){console.log(t),0==t[0].code?(this.trade=t[0].maintrade,this.mainpool=t[0].mainpool):1==t[0].code?(this.trade=t[0].maintrade,$(".dream").html(t[0].context).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"})):2==t[0].code?(this.mainpool=t[0].mainpool,$(".trade").html(t[0].context).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"})):-1==t[0].code&&($(".dream").html(t[0].tcontext).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"}),$(".trade").html(t[0].context).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"})),console.log(this.trade),console.log(this.mainpool)}}},B=z,G=(a("013b"),Object(g["a"])(B,U,R,!1,null,"2142e434",null)),L=G.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rules"},[t._m(0),a("div",{staticClass:"steps"},[a("yd-step",{attrs:{current:"2"}},[a("yd-step-item",[a("span",{attrs:{slot:"bottom"},slot:"bottom"},[t._v("步骤一")])]),a("yd-step-item",[a("span",{attrs:{slot:"bottom"},slot:"bottom"},[t._v("步骤二")])]),a("yd-step-item",[a("span",{attrs:{slot:"bottom"},slot:"bottom"},[t._v("步骤三")])]),a("yd-step-item",[a("span",{attrs:{slot:"bottom"},slot:"bottom"},[t._v("步骤四")])])],1)],1)])},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("div",{staticClass:"line left"}),a("div",{staticClass:"circle left"}),a("p",[t._v("小梦想互助规则")]),a("div",{staticClass:"circle right"}),a("div",{staticClass:"line right"})])}],H={name:"rules"},J=H,N=(a("9dec"),Object(g["a"])(J,V,q,!1,null,"612be34b",null)),W=N.exports,F={name:"home",data:function(){return{sliderinit:{currentPage:0,autoplay:3e3,loop:!0,slidesToScroll:1,duration:300},someList:[{style:"background:url(http://tdream.antit.top/image/banner.png) no-repeat center center / 6.8rem 2rem"},{style:"background:url(https://tdream.antit.top/image/Red_SendPack.jpg) no-repeat center center / 6.8rem 2rem;border-radius:0.2rem"}],userInfo:"",orders:"",pools:""}},components:{slider:j["slider"],slideritem:j["slideritem"],screen:E,pool:L,rules:W},created:function(){this.GetUserInfo(this)},methods:{GetUserInfo:function(t){WebApp.Init("wxc5216d15dd321ac5",function(e,a){console.log(Options.GetUserInfo()),t.userInfo=Options.GetUserInfo(),t.Register(t,t.userInfo)})},Register:function(t,e){TD_Request("us","enter",{uid:e.openid,nickname:e.nickname,headicon:e.headimgurl},function(e,a){if(console.log(a),t.orders=a.buyinfo,0!=a.mainpool.length&&DreamPoolAnalysis(a.mainpool),0!=a.maintrade.length&&DreamPoolAnalysis(a.maintrade),0==a.mainpool.length&&0!=a.maintrade.length)var n=[{code:1,mainpool:a.mainpool,context:"暂无更多梦想池",maintrade:a.maintrade}];else if(0!=a.mainpool.length&&0==a.maintrade.length)n=[{code:2,mainpool:a.mainpool,context:"暂无更多项目",maintrade:a.maintrade}];else if(0==a.mainpool.length&&0==a.maintrade.length)n=[{code:-1,mainpool:a.mainpool,context:"暂无更多项目",tcontext:"暂无更多梦想池",maintrade:a.maintrade}];else n=[{code:0,mainpool:a.mainpool,context:"成功",maintrade:a.maintrade}];t.pools=n},function(t,e){console.log(e)})}}},K=F,Q=(a("c070"),Object(g["a"])(K,O,S,!1,null,"599c3220",null)),X=Q.exports;u["a"].use(I["a"]);var Y=new I["a"]({mode:"history",base:"/TinydreamWeb/dream/dist/",routes:[{path:"/",name:"home",component:X},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),Z=a("df72"),tt=a("6ed7");u["a"].use(c["a"]).use(p["a"]),u["a"].use(i["a"]).use(s["a"]).use(l["a"]),u["a"].use(o["a"]).use(r["a"]),u["a"].use(n["a"]),u["a"].component(Z["ProgressBar"].name,Z["ProgressBar"]),u["a"].component(tt["Step"].name,tt["Step"]),u["a"].component(tt["StepItem"].name,tt["StepItem"]),u["a"].config.productionTip=!1,new u["a"]({router:Y,render:function(t){return t(k)}}).$mount("#app")},"64a9":function(t,e,a){},"9dec":function(t,e,a){"use strict";var n=a("ca40"),o=a.n(n);o.a},c070:function(t,e,a){"use strict";var n=a("c82c"),o=a.n(n);o.a},c77e:function(t,e,a){"use strict";var n=a("fc8e"),o=a.n(n);o.a},c82c:function(t,e,a){},ca40:function(t,e,a){},fc8e:function(t,e,a){}});
//# sourceMappingURL=app.9aaf455c.js.map