(function(t){function e(e){for(var r,i,u=e[0],c=e[1],s=e[2],l=0,f=[];l<u.length;l++)i=u[l],a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o=[];function i(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f9f75635"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise(function(e,r){n=a[t]=[e,r]});e.push(n[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(t),o=function(e){c.onerror=c.onload=null,clearTimeout(s);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[t]=void 0}};var s=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("537a");var r=n("ac28"),a=(n("a52c"),n("2ed4")),o=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("tab-bar")],1)},u=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabbar"},[n("van-tabbar",{attrs:{"active-color":"#00d094"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabbar,function(e,r){return n("van-tabbar-item",{key:r,attrs:{to:e.path},scopedSlots:t._u([{key:"icon",fn:function(t){return n("img",{attrs:{src:t.active?e.active:e.normal}})}}],null,!0)},[n("span",[t._v(t._s(e.title))])])}),1)],1)},s=[],l={name:"tabbar",data:function(){return{active:0,tabbar:[{path:"/",title:"梦想互助",normal:"http://tdream.antit.top/image/nav_index_disable.png",active:"http://tdream.antit.top/image/nav_index.png"},{path:"/clock",title:"行动打卡",normal:"https://tdream.antit.top/ActiveSignInOff.png",active:"https://tdream.antit.top/ActiveSignInOk.png"},{path:"/user",title:"个人中心",normal:"http://tdream.antit.top/image/nav_owner_disable.png",active:"http://tdream.antit.top/image/nav_owner.png"}]}},created:function(){console.log(this.$route.path),"/"==this.$route.path?this.active=0:"/clock"==this.$route.path?this.active=1:"/user"==this.$route.path&&(this.active=2)}},p=l,f=n("2877"),d=Object(f["a"])(p,c,s,!1,null,null,null),m=d.exports,h={name:"App",data:function(){},components:{TabBar:m}},v=h,b=(n("034f"),Object(f["a"])(v,i,u,!1,null,null,null)),g=b.exports,y=n("8c4f"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"banner swipslider",attrs:{id:"banner"}},[n("slider",{ref:"slider",attrs:{options:t.sliderinit}},t._l(t.someList,function(t,e){return n("slideritem",{key:e,style:t.style})}),1)],1)])},w=[],O={name:"home",data:function(){return{sliderinit:{currentPage:0,autoplay:3e3,loop:!0,slidesToScroll:1,duration:300},someList:[{style:"background:url(http://tdream.antit.top/image/banner.png) no-repeat center center / 6.8rem 1.86rem"},{style:"background:url(https://tdream.antit.top/image/Red_SendPack.jpg) no-repeat center center / 6.8rem 1.86rem"}],userInfo:""}},created:function(){this.GetUserInfo(this)},methods:{GetUserInfo:function(t){WebApp.Init("wxc5216d15dd321ac5",function(e,n){console.log(Options.GetUserInfo()),t.userInfo=Options.GetUserInfo()})}}},j=O,k=(n("7057"),Object(f["a"])(j,_,w,!1,null,"f8bf0b5e",null)),x=k.exports;o["a"].use(y["a"]);var P=new y["a"]({mode:"history",base:"",routes:[{path:"/",name:"home",component:x},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});o["a"].use(r["a"]).use(a["a"]),o["a"].config.productionTip=!1,new o["a"]({router:P,render:function(t){return t(g)}}).$mount("#app")},"64a9":function(t,e,n){},7057:function(t,e,n){"use strict";var r=n("da88"),a=n.n(r);a.a},da88:function(t,e,n){}});
//# sourceMappingURL=app.b6bbfa70.js.map