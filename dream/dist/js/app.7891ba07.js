(function(t){function e(e){for(var a,i,s=e[0],l=e[1],c=e[2],u=0,d=[];u<s.length;u++)i=s[u],o[i]&&d.push(o[i][0]),o[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3cf9d77f"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=o[t]=[e,a]});e.push(n[2]=a);var r,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t),r=function(e){l.onerror=l.onload=null,clearTimeout(c);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}o[t]=void 0}};var c=setTimeout(function(){r({type:"timeout",target:l})},12e4);l.onerror=l.onload=r,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),o=n.n(a);o.a},"1b88":function(t,e,n){"use strict";var a=n("2c33"),o=n.n(a);o.a},"2c33":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("7f7f"),n("66b9");var a=n("b650"),o=(n("bda7"),n("5e46")),r=(n("da3c"),n("0b33")),i=(n("4d48"),n("d1e1")),s=(n("81e6"),n("9ffb")),l=(n("c3a6"),n("ad06")),c=(n("537a"),n("ac28")),u=(n("a52c"),n("2ed4")),p=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("tab-bar")],1)},f=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabbar"},[n("van-tabbar",{attrs:{"active-color":"#00d094"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabbar,function(e,a){return n("van-tabbar-item",{key:a,attrs:{to:e.path},scopedSlots:t._u([{key:"icon",fn:function(t){return n("img",{attrs:{src:t.active?e.active:e.normal}})}}],null,!0)},[n("span",[t._v(t._s(e.title))])])}),1)],1)},h=[],v={name:"tabbar",data:function(){return{active:0,tabbar:[{path:"/",title:"梦想互助",normal:"http://tdream.antit.top/image/nav_index_disable.png",active:"http://tdream.antit.top/image/nav_index.png"},{path:"/clock",title:"行动打卡",normal:"https://tdream.antit.top/ActiveSignInOff.png",active:"https://tdream.antit.top/ActiveSignInOk.png"},{path:"/user",title:"个人中心",normal:"http://tdream.antit.top/image/nav_owner_disable.png",active:"http://tdream.antit.top/image/nav_owner.png"}]}},created:function(){console.log(this.$route.path),"/"==this.$route.path?this.active=0:"/clock"==this.$route.path?this.active=1:"/user"==this.$route.path&&(this.active=2)}},b=v,g=n("2877"),y=Object(g["a"])(b,m,h,!1,null,null,null),_=y.exports,x={name:"App",data:function(){},components:{TabBar:_}},w=x,k=(n("034f"),Object(g["a"])(w,d,f,!1,null,null,null)),C=k.exports,I=n("8c4f"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"banner swipslider",attrs:{id:"banner"}},[n("slider",{ref:"slider",attrs:{options:t.sliderinit}},t._l(t.someList,function(t,e){return n("slideritem",{key:e,style:t.style})}),1)],1),n("screen",{attrs:{orders:t.orders}}),n("pool",{attrs:{pools:t.pools}})],1)},j=[],T=n("b190"),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"screen"},[n("div",{staticClass:"warp"},[n("van-col",{attrs:{span:"12"}},[n("van-icon",{staticClass:"headicon",attrs:{name:t.info.headicon}}),n("span",{staticClass:"nickname"},[t._v(t._s(t.info.nickname))])],1),n("van-col",{staticStyle:{"text-align":"right","font-size":"0.26rem"},attrs:{span:"12"}},[t._v("\n            "+t._s(t.info.message)+"\n        ")])],1)])},S=[],D={name:"screen",data:function(){return{buyinfo:"",info:""}},props:{orders:{type:[Array,Object],default:function(){return[]}}},created:function(){this.check()},methods:{interval:function(){var t=this,e=t.buyinfo.shift(),n=(new Date).getTime()/1e3,a=DescriptionTime(n-parseInt(e.ptime));if("STANDARD"==e.ptype)var o="小梦想";else if("TRADE"==e.ptype)o="小生意";e.message=a+"前购买了"+e.dcount+"份"+o,t.buyinfo.push(e),t.info=e,setInterval(function(){if(""!=t.buyinfo){var e=t.buyinfo.shift(),n=(new Date).getTime()/1e3,a=DescriptionTime(n-parseInt(e.ptime));if("STANDARD"==e.ptype)var o="小梦想";else if("TRADE"==e.ptype)o="小生意";e.message=a+"前购买了"+e.dcount+"份"+o,t.buyinfo.push(e),t.info=e}},3e3)},check:function(){var t=this,e=setInterval(function(){""!=t.buyinfo&&(t.interval(),clearInterval(e))},50)}},watch:{orders:function(t){this.buyinfo=t}}},P=D,M=(n("c77e"),Object(g["a"])(P,A,S,!1,null,"72ef17c4",null)),E=M.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pool"},[n("van-tabs",{attrs:{swipeable:"","title-active-color":"#00d094",color:"#00d094","line-width":"20","line-height":"1"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tab",{staticClass:"dream",attrs:{title:"梦想互助"}},[n("div",{staticClass:"main"},[n("h3",{staticClass:"title"},[t._v(t._s(""!=t.mainpool?t.mainpool.ptitle:""))]),n("div",{staticClass:"progress"},[n("yd-progressbar",{attrs:{progress:t.progress1,"trail-width":"4","stroke-color":"#edf0f5","trail-color":"#ffc054"}},[n("van-col",{staticClass:"timeouts",attrs:{span:"24"}},[n("van-icon",{staticClass:"icon_clock",attrs:{name:"clock-o"}}),n("span",[t._v(t._s(t.timeout))])],1),n("van-col",{staticClass:"current",attrs:{span:"24"}},[n("span",{staticClass:"money"},[t._v(t._s(""!=t.mainpool?t.mainpool.realBill+t.mainpool.realUnit:""))])]),n("van-col",{staticClass:"text",attrs:{span:"24"}},[n("span",[t._v(t._s(""==t.mainpool?"":t.mainpool.billHint))])])],1)],1),n("div",{staticClass:"poolInfo"},[n("van-col",{attrs:{span:"12"}},[n("p",[t._v(t._s(""==t.mainpool?"":t.mainpool.rtbillValue+t.mainpool.rtbillUnit))]),n("p",[t._v("互助目标")])]),n("van-col",{staticStyle:{"text-align":"right"},attrs:{span:"12"}},[n("p",[t._v(t._s(""==t.mainpool?"":t.mainpool.rubill+t.mainpool.rubillUnit))]),n("p",[t._v("价格")])])],1),n("div",{staticClass:"buybtn"},[n("van-button",{attrs:{type:"primary",size:"large",round:""}},[t._v("参与互助")])],1)]),n("p",{staticClass:"tip"},[t._v("每个人支付少量互助金，从中随机产生1名幸运者获得累计互助金启动梦想！")])]),n("van-tab",{staticClass:"trade dream",attrs:{title:"生意互助"}},[n("div",{staticClass:"main"},[n("div",{staticClass:"banner"},[n("p",[n("span",[t._v(t._s(""==t.trade?"":t.trade.ptitle))]),n("span",[t._v("生意详情>>")])])])])])],1),n("p",{staticClass:"luck"},[n("router-link",{staticStyle:{"text-decoration":"underline"},attrs:{to:"/history",tag:"span"}},[t._v("往期幸运者")])],1)],1)},U=[],z={name:"pool",data:function(){return{mainpool:"",trade:"",active:0,progress1:0,timeout:this.timeout()}},props:{pools:{type:[Array,Object],default:function(){return[]}}},methods:{timeout:function(){var t=this;setInterval(function(){var e=parseInt((new Date).getTime()/1e3),n=parseInt(t.mainpool.ptime)+parseInt(t.mainpool.duration)-e,a=Math.floor(n/3600)>=10?Math.floor(n/3600):"0"+Math.floor(n/3600),o=Math.floor(n/60%60)>=10?Math.floor(n/60%60):"0"+Math.floor(n/60%60),r=Math.floor(n%60)>=10?Math.floor(n%60):"0"+Math.floor(n%60);t.timeout=a+":"+o+":"+r},1e3)}},watch:{pools:function(t){console.log(t),0==t[0].code?(this.trade=t[0].maintrade,this.mainpool=t[0].mainpool):1==t[0].code?(this.trade=t[0].maintrade,$(".dream").html(t[0].context).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"})):2==t[0].code?(this.mainpool=t[0].mainpool,$(".trade").html(t[0].context).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"})):-1==t[0].code&&($(".dream").html(t[0].tcontext).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"}),$(".trade").html(t[0].context).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"})),console.log(this.trade),console.log(this.mainpool)}}},B=z,G=(n("1b88"),Object(g["a"])(B,R,U,!1,null,"489c7f4a",null)),L=G.exports,q={name:"home",data:function(){return{sliderinit:{currentPage:0,autoplay:3e3,loop:!0,slidesToScroll:1,duration:300},someList:[{style:"background:url(http://tdream.antit.top/image/banner.png) no-repeat center center / 6.8rem 2rem"},{style:"background:url(https://tdream.antit.top/image/Red_SendPack.jpg) no-repeat center center / 6.8rem 2rem;border-radius:0.2rem"}],userInfo:"",orders:"",pools:""}},components:{slider:T["slider"],slideritem:T["slideritem"],screen:E,pool:L},created:function(){this.GetUserInfo(this)},methods:{GetUserInfo:function(t){WebApp.Init("wxc5216d15dd321ac5",function(e,n){console.log(Options.GetUserInfo()),t.userInfo=Options.GetUserInfo(),t.Register(t,t.userInfo)})},Register:function(t,e){TD_Request("us","enter",{uid:e.openid,nickname:e.nickname,headicon:e.headimgurl},function(e,n){if(console.log(n),t.orders=n.buyinfo,0!=n.mainpool.length&&DreamPoolAnalysis(n.mainpool),0!=n.maintrade.length&&DreamPoolAnalysis(n.maintrade),0==n.mainpool.length&&0!=n.maintrade.length)var a=[{code:1,mainpool:n.mainpool,context:"暂无更多梦想池",maintrade:n.maintrade}];else if(0!=n.mainpool.length&&0==n.maintrade.length)a=[{code:2,mainpool:n.mainpool,context:"暂无更多项目",maintrade:n.maintrade}];else if(0==n.mainpool.length&&0==n.maintrade.length)a=[{code:-1,mainpool:n.mainpool,context:"暂无更多项目",tcontext:"暂无更多梦想池",maintrade:n.maintrade}];else a=[{code:0,mainpool:n.mainpool,context:"成功",maintrade:n.maintrade}];t.pools=a},function(t,e){console.log(e)})}}},J=q,N=(n("f2d3"),Object(g["a"])(J,O,j,!1,null,"241fc2d7",null)),W=N.exports;p["a"].use(I["a"]);var H=new I["a"]({mode:"history",base:"/TinydreamWeb/dream/dist/",routes:[{path:"/",name:"home",component:W},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),V=n("df72");p["a"].use(c["a"]).use(u["a"]),p["a"].use(i["a"]).use(s["a"]).use(l["a"]),p["a"].use(o["a"]).use(r["a"]),p["a"].use(a["a"]),p["a"].component(V["ProgressBar"].name,V["ProgressBar"]),p["a"].config.productionTip=!1,new p["a"]({router:H,render:function(t){return t(C)}}).$mount("#app")},"64a9":function(t,e,n){},c77e:function(t,e,n){"use strict";var a=n("fc8e"),o=n.n(a);o.a},e76f:function(t,e,n){},f2d3:function(t,e,n){"use strict";var a=n("e76f"),o=n.n(a);o.a},fc8e:function(t,e,n){}});
//# sourceMappingURL=app.7891ba07.js.map