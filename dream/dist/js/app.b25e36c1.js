(function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)i=s[l],a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f9f75635"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=a[t]=[e,r]});e.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t),o=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[t]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},1195:function(t,e,n){"use strict";var r=n("3cf4"),a=n.n(r);a.a},"2a8e":function(t,e,n){"use strict";var r=n("40f2"),a=n.n(r);a.a},"3cf4":function(t,e,n){},"40f2":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("4d48");var r=n("d1e1"),a=(n("81e6"),n("9ffb")),o=(n("c3a6"),n("ad06")),i=(n("537a"),n("ac28")),s=(n("a52c"),n("2ed4")),c=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("tab-bar")],1)},l=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabbar"},[n("van-tabbar",{attrs:{"active-color":"#00d094"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabbar,function(e,r){return n("van-tabbar-item",{key:r,attrs:{to:e.path},scopedSlots:t._u([{key:"icon",fn:function(t){return n("img",{attrs:{src:t.active?e.active:e.normal}})}}],null,!0)},[n("span",[t._v(t._s(e.title))])])}),1)],1)},f=[],d={name:"tabbar",data:function(){return{active:0,tabbar:[{path:"/",title:"梦想互助",normal:"http://tdream.antit.top/image/nav_index_disable.png",active:"http://tdream.antit.top/image/nav_index.png"},{path:"/clock",title:"行动打卡",normal:"https://tdream.antit.top/ActiveSignInOff.png",active:"https://tdream.antit.top/ActiveSignInOk.png"},{path:"/user",title:"个人中心",normal:"http://tdream.antit.top/image/nav_owner_disable.png",active:"http://tdream.antit.top/image/nav_owner.png"}]}},created:function(){console.log(this.$route.path),"/"==this.$route.path?this.active=0:"/clock"==this.$route.path?this.active=1:"/user"==this.$route.path&&(this.active=2)}},m=d,h=n("2877"),v=Object(h["a"])(m,p,f,!1,null,null,null),b=v.exports,g={name:"App",data:function(){},components:{TabBar:b}},y=g,_=(n("034f"),Object(h["a"])(y,u,l,!1,null,null,null)),w=_.exports,k=n("8c4f"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"banner swipslider",attrs:{id:"banner"}},[n("slider",{ref:"slider",attrs:{options:t.sliderinit}},t._l(t.someList,function(t,e){return n("slideritem",{key:e,style:t.style})}),1)],1),n("screen",{attrs:{orders:t.orders}}),n("pool",{attrs:{pools:t.pools}})],1)},j=[],T=n("b190"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"screen"},[n("div",{staticClass:"warp"},[n("van-col",{attrs:{span:"12"}},[n("van-icon",{staticClass:"headicon",attrs:{name:t.info.headicon}}),n("span",{staticClass:"nickname"},[t._v(t._s(t.info.nickname))])],1),n("van-col",{staticStyle:{"text-align":"right","font-size":"0.26rem"},attrs:{span:"12"}},[t._v("\n            "+t._s(t.info.message)+"\n        ")])],1)])},I=[],A={name:"screen",data:function(){return{buyinfo:"",info:""}},props:{orders:{type:[Array,Object],default:function(){return[]}}},created:function(){this.check()},methods:{interval:function(){var t=this,e=t.buyinfo.shift(),n=(new Date).getTime()/1e3,r=DescriptionTime(n-parseInt(e.ptime));if("STANDARD"==e.ptype)var a="小梦想";else if("TRADE"==e.ptype)a="小生意";e.message=r+"前购买了"+e.dcount+"份"+a,t.buyinfo.push(e),t.info=e,setInterval(function(){if(""!=t.buyinfo){var e=t.buyinfo.shift(),n=(new Date).getTime()/1e3,r=DescriptionTime(n-parseInt(e.ptime));if("STANDARD"==e.ptype)var a="小梦想";else if("TRADE"==e.ptype)a="小生意";e.message=r+"前购买了"+e.dcount+"份"+a,t.buyinfo.push(e),t.info=e}},3e3)},check:function(){var t=this,e=setInterval(function(){""!=t.buyinfo&&(t.interval(),clearInterval(e))},50)}},watch:{orders:function(t){this.buyinfo=t}}},S=A,D=(n("c77e"),Object(h["a"])(S,x,I,!1,null,"72ef17c4",null)),P=D.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pool"})},C=[],E={name:"pool",data:function(){return{mainpool:"",trade:""}},props:{pools:{type:[Array,Object],default:function(){return[]}}},computed:{mainpools:function(){return this.pools.mainpool}},watch:{pools:function(t){console.log(t),console.log(this.mainpools()),this.mainpool=t.mainpool,this.trade=t.maintrade}}},R=E,G=(n("1195"),Object(h["a"])(R,$,C,!1,null,"05f7e13c",null)),M=G.exports,U={name:"home",data:function(){return{sliderinit:{currentPage:0,autoplay:3e3,loop:!0,slidesToScroll:1,duration:300},someList:[{style:"background:url(http://tdream.antit.top/image/banner.png) no-repeat center center / 6.8rem 2rem"},{style:"background:url(https://tdream.antit.top/image/Red_SendPack.jpg) no-repeat center center / 6.8rem 2rem;border-radius:0.2rem"}],userInfo:"",orders:"",pools:""}},components:{slider:T["slider"],slideritem:T["slideritem"],screen:P,pool:M},created:function(){this.GetUserInfo(this)},methods:{GetUserInfo:function(t){WebApp.Init("wxc5216d15dd321ac5",function(e,n){console.log(Options.GetUserInfo()),t.userInfo=Options.GetUserInfo(),t.Register(t,t.userInfo)})},Register:function(t,e){TD_Request("us","enter",{uid:e.openid,nickname:e.nickname,headicon:e.headimgurl},function(e,n){console.log(n),t.orders=n.buyinfo;var r=[{mainpool:n.mainpool},{maintrade:n.maintrade}];t.pools=r},function(t,e){console.log(e)})}}},L=U,q=(n("2a8e"),Object(h["a"])(L,O,j,!1,null,"71b30f04",null)),J=q.exports;c["a"].use(k["a"]);var N=new k["a"]({mode:"history",base:"/TinydreamWeb/dream/dist/",routes:[{path:"/",name:"home",component:J},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});c["a"].use(i["a"]).use(s["a"]),c["a"].use(r["a"]).use(a["a"]).use(o["a"]),c["a"].config.productionTip=!1,new c["a"]({router:N,render:function(t){return t(w)}}).$mount("#app")},"64a9":function(t,e,n){},c77e:function(t,e,n){"use strict";var r=n("fc8e"),a=n.n(r);a.a},fc8e:function(t,e,n){}});
//# sourceMappingURL=app.b25e36c1.js.map