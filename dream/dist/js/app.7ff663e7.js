(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)i=s[l],a[i]&&p.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f9f75635"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=a[t]=[e,r]});e.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t),o=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[t]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("4d48");var r=n("d1e1"),a=(n("81e6"),n("9ffb")),o=(n("c3a6"),n("ad06")),i=(n("537a"),n("ac28")),s=(n("a52c"),n("2ed4")),c=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("tab-bar")],1)},l=[],f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabbar"},[n("van-tabbar",{attrs:{"active-color":"#00d094"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabbar,function(e,r){return n("van-tabbar-item",{key:r,attrs:{to:e.path},scopedSlots:t._u([{key:"icon",fn:function(t){return n("img",{attrs:{src:t.active?e.active:e.normal}})}}],null,!0)},[n("span",[t._v(t._s(e.title))])])}),1)],1)},p=[],d={name:"tabbar",data:function(){return{active:0,tabbar:[{path:"/",title:"梦想互助",normal:"http://tdream.antit.top/image/nav_index_disable.png",active:"http://tdream.antit.top/image/nav_index.png"},{path:"/clock",title:"行动打卡",normal:"https://tdream.antit.top/ActiveSignInOff.png",active:"https://tdream.antit.top/ActiveSignInOk.png"},{path:"/user",title:"个人中心",normal:"http://tdream.antit.top/image/nav_owner_disable.png",active:"http://tdream.antit.top/image/nav_owner.png"}]}},created:function(){console.log(this.$route.path),"/"==this.$route.path?this.active=0:"/clock"==this.$route.path?this.active=1:"/user"==this.$route.path&&(this.active=2)}},m=d,b=n("2877"),h=Object(b["a"])(m,f,p,!1,null,null,null),v=h.exports,g={name:"App",data:function(){},components:{TabBar:v}},y=g,_=(n("034f"),Object(b["a"])(y,u,l,!1,null,null,null)),w=_.exports,O=n("8c4f"),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"banner swipslider",attrs:{id:"banner"}},[n("slider",{ref:"slider",attrs:{options:t.sliderinit}},t._l(t.someList,function(t,e){return n("slideritem",{key:e,style:t.style})}),1)],1),n("screen",{attrs:{orders:t.orders}})],1)},x=[],j=n("b190"),I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"screen"},[n("div",{staticClass:"warp"},[n("van-col",{attrs:{span:"12"}},[n("van-icon",{staticClass:"headicon",attrs:{name:"http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83eoTsG8maiciaYZHEdMhnmmL4iaia6u4q4GzbZhKJYztrXVe3WGKoYwD1E4QfdpWFVxJPqRhO3ALt7FP9g/132"}}),n("span",{staticClass:"nickname"},[t._v("暮色微凉城")])],1),n("van-col",{staticStyle:{"text-align":"right","font-size":"0.26rem"},attrs:{span:"12"}},[t._v("\n            3小时前购买了一份小梦想\n        ")])],1)])},P=[],S={name:"screen",data:function(){return{buyinfo:"",info:""}},props:{orders:{type:[Array,Object],default:function(){return[]}}},mounted:function(){this.interval()},updated:function(){console.log(this.buyinfo)},methods:{interval:function(){var t=this;setInterval(function(){if(""!=t.buyinfo){var e=t.buyinfo.shift();t.buyinfo.push(e),t.info=e,console.log(t.buyinfo)}},3e3)}},watch:{orders:function(t){this.buyinfo=t}}},T=S,$=(n("6cbb"),Object(b["a"])(T,I,P,!1,null,"5dda38fc",null)),A=$.exports,C={name:"home",data:function(){return{sliderinit:{currentPage:0,autoplay:3e3,loop:!0,slidesToScroll:1,duration:300},someList:[{style:"background:url(http://tdream.antit.top/image/banner.png) no-repeat center center / 6.8rem 1.86rem"},{style:"background:url(https://tdream.antit.top/image/Red_SendPack.jpg) no-repeat center center / 6.8rem 1.86rem"}],userInfo:"",orders:""}},components:{slider:j["slider"],slideritem:j["slideritem"],screen:A},created:function(){this.GetUserInfo(this)},methods:{GetUserInfo:function(t){WebApp.Init("wxc5216d15dd321ac5",function(e,n){console.log(Options.GetUserInfo()),t.userInfo=Options.GetUserInfo(),t.Register(t,t.userInfo)})},Register:function(t,e){TD_Request("us","enter",{uid:e.openid,nickname:e.nickname,headicon:e.headimgurl},function(e,n){console.log(n),t.orders=n.buyinfo},function(t,e){console.log(e)})}}},E=C,G=(n("9c7b"),Object(b["a"])(E,k,x,!1,null,"e5e5f2d4",null)),q=G.exports;c["a"].use(O["a"]);var L=new O["a"]({mode:"history",base:"/TinydreamWeb/dream/dist/",routes:[{path:"/",name:"home",component:q},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});c["a"].use(i["a"]).use(s["a"]),c["a"].use(r["a"]).use(a["a"]).use(o["a"]),c["a"].config.productionTip=!1,new c["a"]({router:L,render:function(t){return t(w)}}).$mount("#app")},"64a9":function(t,e,n){},"6cbb":function(t,e,n){"use strict";var r=n("8e28"),a=n.n(r);a.a},"8e28":function(t,e,n){},"9c7b":function(t,e,n){"use strict";var r=n("ba86"),a=n.n(r);a.a},ba86:function(t,e,n){}});
//# sourceMappingURL=app.7ff663e7.js.map