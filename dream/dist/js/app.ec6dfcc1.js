(function(t){function e(e){for(var a,o,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)o=s[l],r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function o(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3cf9d77f"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=r[t]=[e,a]});e.push(n[2]=a);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=o(t),i=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+a+": "+i+")");o.type=a,o.request=i,n[1](o)}r[t]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:c})},12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"2a8e":function(t,e,n){"use strict";var a=n("40f2"),r=n.n(a);r.a},"3d56":function(t,e,n){"use strict";var a=n("91f5"),r=n.n(a);r.a},"40f2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e566");var a=n("5d26"),r=(n("bda7"),n("5e46")),i=(n("da3c"),n("0b33")),o=(n("4d48"),n("d1e1")),s=(n("81e6"),n("9ffb")),c=(n("c3a6"),n("ad06")),u=(n("537a"),n("ac28")),l=(n("a52c"),n("2ed4")),p=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("tab-bar")],1)},d=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabbar"},[n("van-tabbar",{attrs:{"active-color":"#00d094"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabbar,function(e,a){return n("van-tabbar-item",{key:a,attrs:{to:e.path},scopedSlots:t._u([{key:"icon",fn:function(t){return n("img",{attrs:{src:t.active?e.active:e.normal}})}}],null,!0)},[n("span",[t._v(t._s(e.title))])])}),1)],1)},v=[],h={name:"tabbar",data:function(){return{active:0,tabbar:[{path:"/",title:"梦想互助",normal:"http://tdream.antit.top/image/nav_index_disable.png",active:"http://tdream.antit.top/image/nav_index.png"},{path:"/clock",title:"行动打卡",normal:"https://tdream.antit.top/ActiveSignInOff.png",active:"https://tdream.antit.top/ActiveSignInOk.png"},{path:"/user",title:"个人中心",normal:"http://tdream.antit.top/image/nav_owner_disable.png",active:"http://tdream.antit.top/image/nav_owner.png"}]}},created:function(){console.log(this.$route.path),"/"==this.$route.path?this.active=0:"/clock"==this.$route.path?this.active=1:"/user"==this.$route.path&&(this.active=2)}},b=h,g=n("2877"),y=Object(g["a"])(b,m,v,!1,null,null,null),_=y.exports,w={name:"App",data:function(){},components:{TabBar:_}},k=w,O=(n("034f"),Object(g["a"])(k,f,d,!1,null,null,null)),j=O.exports,x=n("8c4f"),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"banner swipslider",attrs:{id:"banner"}},[n("slider",{ref:"slider",attrs:{options:t.sliderinit}},t._l(t.someList,function(t,e){return n("slideritem",{key:e,style:t.style})}),1)],1),n("screen",{attrs:{orders:t.orders}}),n("pool",{attrs:{pools:t.pools}})],1)},I=[],C=n("b190"),A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"screen"},[n("div",{staticClass:"warp"},[n("van-col",{attrs:{span:"12"}},[n("van-icon",{staticClass:"headicon",attrs:{name:t.info.headicon}}),n("span",{staticClass:"nickname"},[t._v(t._s(t.info.nickname))])],1),n("van-col",{staticStyle:{"text-align":"right","font-size":"0.26rem"},attrs:{span:"12"}},[t._v("\n            "+t._s(t.info.message)+"\n        ")])],1)])},S=[],D={name:"screen",data:function(){return{buyinfo:"",info:""}},props:{orders:{type:[Array,Object],default:function(){return[]}}},created:function(){this.check()},methods:{interval:function(){var t=this,e=t.buyinfo.shift(),n=(new Date).getTime()/1e3,a=DescriptionTime(n-parseInt(e.ptime));if("STANDARD"==e.ptype)var r="小梦想";else if("TRADE"==e.ptype)r="小生意";e.message=a+"前购买了"+e.dcount+"份"+r,t.buyinfo.push(e),t.info=e,setInterval(function(){if(""!=t.buyinfo){var e=t.buyinfo.shift(),n=(new Date).getTime()/1e3,a=DescriptionTime(n-parseInt(e.ptime));if("STANDARD"==e.ptype)var r="小梦想";else if("TRADE"==e.ptype)r="小生意";e.message=a+"前购买了"+e.dcount+"份"+r,t.buyinfo.push(e),t.info=e}},3e3)},check:function(){var t=this,e=setInterval(function(){""!=t.buyinfo&&(t.interval(),clearInterval(e))},50)}},watch:{orders:function(t){this.buyinfo=t}}},P=D,$=(n("c77e"),Object(g["a"])(P,A,S,!1,null,"72ef17c4",null)),E=$.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pool"},[n("van-tabs",{attrs:{swipeable:""},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[n("van-tab",{staticClass:"dream",attrs:{title:"梦想互助"}},[n("div",{staticClass:"main"},[n("h3",{staticClass:"title"},[t._v("梦想互助20190313期")]),n("div",{staticClass:"progress"},[n("van-circle")],1)])]),n("van-tab",{staticClass:"trade",attrs:{title:"生意互助"}},[t._v("\n            2\n        ")])],1)],1)},G=[],M={name:"pool",data:function(){return{mainpool:"",trade:"",active:0}},props:{pools:{type:[Array,Object],default:function(){return[]}}},computed:{mainpools:function(){return this.pools.mainpool}},watch:{pools:function(t){this.mainpool=t.mainpool,this.trade=t.maintrade}}},U=M,L=(n("3d56"),Object(g["a"])(U,R,G,!1,null,"4fbf9971",null)),q=L.exports,J={name:"home",data:function(){return{sliderinit:{currentPage:0,autoplay:3e3,loop:!0,slidesToScroll:1,duration:300},someList:[{style:"background:url(http://tdream.antit.top/image/banner.png) no-repeat center center / 6.8rem 2rem"},{style:"background:url(https://tdream.antit.top/image/Red_SendPack.jpg) no-repeat center center / 6.8rem 2rem;border-radius:0.2rem"}],userInfo:"",orders:"",pools:""}},components:{slider:C["slider"],slideritem:C["slideritem"],screen:E,pool:q},created:function(){this.GetUserInfo(this)},methods:{GetUserInfo:function(t){WebApp.Init("wxc5216d15dd321ac5",function(e,n){console.log(Options.GetUserInfo()),t.userInfo=Options.GetUserInfo(),t.Register(t,t.userInfo)})},Register:function(t,e){TD_Request("us","enter",{uid:e.openid,nickname:e.nickname,headicon:e.headimgurl},function(e,n){console.log(n),t.orders=n.buyinfo;var a=[{mainpool:n.mainpool},{maintrade:n.maintrade}];t.pools=a},function(t,e){console.log(e)})}}},N=J,W=(n("2a8e"),Object(g["a"])(N,T,I,!1,null,"71b30f04",null)),z=W.exports;p["a"].use(x["a"]);var B=new x["a"]({mode:"history",base:"/TinydreamWeb/dream/dist/",routes:[{path:"/",name:"home",component:z},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});p["a"].use(u["a"]).use(l["a"]),p["a"].use(o["a"]).use(s["a"]).use(c["a"]),p["a"].use(r["a"]).use(i["a"]),p["a"].use(a["a"]),p["a"].config.productionTip=!1,new p["a"]({router:B,render:function(t){return t(j)}}).$mount("#app")},"64a9":function(t,e,n){},"91f5":function(t,e,n){},c77e:function(t,e,n){"use strict";var a=n("fc8e"),r=n.n(a);r.a},fc8e:function(t,e,n){}});
//# sourceMappingURL=app.ec6dfcc1.js.map