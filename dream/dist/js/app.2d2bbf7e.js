(function(e){function t(t){for(var a,i,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)i=s[u],o[i]&&d.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},r=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"3cf9d77f"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=o[e]=[t,a]});t.push(n[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e),r=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}o[e]=void 0}};var l=setTimeout(function(){r({type:"timeout",target:c})},12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("64a9"),o=n.n(a);o.a},3517:function(e,t,n){"use strict";var a=n("eec9"),o=n.n(a);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e566");var a=n("5d26"),o=(n("bda7"),n("5e46")),r=(n("da3c"),n("0b33")),i=(n("4d48"),n("d1e1")),s=(n("81e6"),n("9ffb")),c=(n("c3a6"),n("ad06")),l=(n("537a"),n("ac28")),u=(n("a52c"),n("2ed4")),p=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("tab-bar")],1)},f=[],m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tabbar"},[n("van-tabbar",{attrs:{"active-color":"#00d094"},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.tabbar,function(t,a){return n("van-tabbar-item",{key:a,attrs:{to:t.path},scopedSlots:e._u([{key:"icon",fn:function(e){return n("img",{attrs:{src:e.active?t.active:t.normal}})}}],null,!0)},[n("span",[e._v(e._s(t.title))])])}),1)],1)},h=[],v={name:"tabbar",data:function(){return{active:0,tabbar:[{path:"/",title:"梦想互助",normal:"http://tdream.antit.top/image/nav_index_disable.png",active:"http://tdream.antit.top/image/nav_index.png"},{path:"/clock",title:"行动打卡",normal:"https://tdream.antit.top/ActiveSignInOff.png",active:"https://tdream.antit.top/ActiveSignInOk.png"},{path:"/user",title:"个人中心",normal:"http://tdream.antit.top/image/nav_owner_disable.png",active:"http://tdream.antit.top/image/nav_owner.png"}]}},created:function(){console.log(this.$route.path),"/"==this.$route.path?this.active=0:"/clock"==this.$route.path?this.active=1:"/user"==this.$route.path&&(this.active=2)}},b=v,g=n("2877"),y=Object(g["a"])(b,m,h,!1,null,null,null),_=y.exports,x={name:"App",data:function(){},components:{TabBar:_}},w=x,k=(n("034f"),Object(g["a"])(w,d,f,!1,null,null,null)),O=k.exports,j=n("8c4f"),T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"banner swipslider",attrs:{id:"banner"}},[n("slider",{ref:"slider",attrs:{options:e.sliderinit}},e._l(e.someList,function(e,t){return n("slideritem",{key:t,style:e.style})}),1)],1),n("screen",{attrs:{orders:e.orders}}),n("pool",{attrs:{pools:e.pools}})],1)},A=[],C=n("b190"),I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"screen"},[n("div",{staticClass:"warp"},[n("van-col",{attrs:{span:"12"}},[n("van-icon",{staticClass:"headicon",attrs:{name:e.info.headicon}}),n("span",{staticClass:"nickname"},[e._v(e._s(e.info.nickname))])],1),n("van-col",{staticStyle:{"text-align":"right","font-size":"0.26rem"},attrs:{span:"12"}},[e._v("\n            "+e._s(e.info.message)+"\n        ")])],1)])},D=[],S={name:"screen",data:function(){return{buyinfo:"",info:""}},props:{orders:{type:[Array,Object],default:function(){return[]}}},created:function(){this.check()},methods:{interval:function(){var e=this,t=e.buyinfo.shift(),n=(new Date).getTime()/1e3,a=DescriptionTime(n-parseInt(t.ptime));if("STANDARD"==t.ptype)var o="小梦想";else if("TRADE"==t.ptype)o="小生意";t.message=a+"前购买了"+t.dcount+"份"+o,e.buyinfo.push(t),e.info=t,setInterval(function(){if(""!=e.buyinfo){var t=e.buyinfo.shift(),n=(new Date).getTime()/1e3,a=DescriptionTime(n-parseInt(t.ptime));if("STANDARD"==t.ptype)var o="小梦想";else if("TRADE"==t.ptype)o="小生意";t.message=a+"前购买了"+t.dcount+"份"+o,e.buyinfo.push(t),e.info=t}},3e3)},check:function(){var e=this,t=setInterval(function(){""!=e.buyinfo&&(e.interval(),clearInterval(t))},50)}},watch:{orders:function(e){this.buyinfo=e}}},P=S,E=(n("c77e"),Object(g["a"])(P,I,D,!1,null,"72ef17c4",null)),R=E.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pool"},[n("van-tabs",{attrs:{swipeable:""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("van-tab",{staticClass:"dream",attrs:{title:"梦想互助"}},[n("div",{staticClass:"main"},[n("h3",{staticClass:"title"},[e._v(e._s(""!=e.mainpool?e.mainpool.ptitle:""))]),n("div",{staticClass:"progress"},[n("van-circle",{staticClass:"circle_progress",attrs:{speed:100,rate:e.rate,color:"#ffc057",fill:"#fff","layer-color":"#ebedf0"},model:{value:e.current,callback:function(t){e.current=t},expression:"current"}})],1)])]),n("van-tab",{staticClass:"trade",attrs:{title:"生意互助"}},[e._v("\n            2\n        ")])],1)],1)},G=[],M={name:"pool",data:function(){return{mainpool:"",trade:"",active:0,current:100,rate:1e4}},props:{pools:{type:[Array,Object],default:function(){return[]}}},computed:{mainpools:function(){return this.pools.mainpool}},watch:{pools:function(e){console.log(e),0==e[0].code?(this.trade=e[0].maintrade,this.mainpool=e[0].mainpool):1==e[0].code?(this.trade=e[0].maintrade,$(".dream").html(e[0].context).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"})):2==e[0].code?(this.mainpool=e[0].mainpool,$(".trade").html(e[0].context).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"})):-1==code&&($(".dream").html(e[0].tcontext).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"}),$(".trade").html(e[0].context).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"})),console.log(this.trade),console.log(this.mainpool)}}},U=M,L=(n("3517"),Object(g["a"])(U,z,G,!1,null,"4ddb3a8c",null)),q=L.exports,J={name:"home",data:function(){return{sliderinit:{currentPage:0,autoplay:3e3,loop:!0,slidesToScroll:1,duration:300},someList:[{style:"background:url(http://tdream.antit.top/image/banner.png) no-repeat center center / 6.8rem 2rem"},{style:"background:url(https://tdream.antit.top/image/Red_SendPack.jpg) no-repeat center center / 6.8rem 2rem;border-radius:0.2rem"}],userInfo:"",orders:"",pools:""}},components:{slider:C["slider"],slideritem:C["slideritem"],screen:R,pool:q},created:function(){this.GetUserInfo(this)},methods:{GetUserInfo:function(e){WebApp.Init("wxc5216d15dd321ac5",function(t,n){console.log(Options.GetUserInfo()),e.userInfo=Options.GetUserInfo(),e.Register(e,e.userInfo)})},Register:function(e,t){TD_Request("us","enter",{uid:t.openid,nickname:t.nickname,headicon:t.headimgurl},function(t,n){if(console.log(n),e.orders=n.buyinfo,0!=n.mainpool.length&&DreamPoolAnalysis(n.mainpool),0!=n.maintrade.length&&DreamPoolAnalysis(n.maintrade),0==n.mainpool.length&&0!=n.maintrade.length)var a=[{code:1,mainpool:n.mainpool,context:"暂无更多梦想池",maintrade:n.maintrade}];else if(0!=n.mainpool.length&&0==n.maintrade.length)a=[{code:2,mainpool:n.mainpool,context:"暂无更多项目",maintrade:n.maintrade}];else if(0==n.mainpool.length&&0==n.maintrade.length)a=[{code:-1,mainpool:n.mainpool,context:"暂无更多项目",tcontext:"暂无更多梦想池",maintrade:n.maintrade}];else a=[{code:0,mainpool:n.mainpool,context:"成功",maintrade:n.maintrade}];e.pools=a},function(e,t){console.log(t)})}}},N=J,W=(n("73bf"),Object(g["a"])(N,T,A,!1,null,"2a180ec0",null)),B=W.exports;p["a"].use(j["a"]);var F=new j["a"]({mode:"history",base:"/TinydreamWeb/dream/dist/",routes:[{path:"/",name:"home",component:B},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});p["a"].use(l["a"]).use(u["a"]),p["a"].use(i["a"]).use(s["a"]).use(c["a"]),p["a"].use(o["a"]).use(r["a"]),p["a"].use(a["a"]),p["a"].config.productionTip=!1,new p["a"]({router:F,render:function(e){return e(O)}}).$mount("#app")},"64a9":function(e,t,n){},"6d44":function(e,t,n){},"73bf":function(e,t,n){"use strict";var a=n("6d44"),o=n.n(a);o.a},c77e:function(e,t,n){"use strict";var a=n("fc8e"),o=n.n(a);o.a},eec9:function(e,t,n){},fc8e:function(e,t,n){}});
//# sourceMappingURL=app.2d2bbf7e.js.map