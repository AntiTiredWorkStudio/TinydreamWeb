(function(t){function e(e){for(var a,i,u=e[0],c=e[1],s=e[2],l=0,f=[];l<u.length;l++)i=u[l],r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},o=[];function i(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4d22c860"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=r[t]=[e,a]});e.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(t),o=function(e){c.onerror=c.onload=null,clearTimeout(s);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+o+")");i.type=a,i.request=o,n[1](i)}r[t]=void 0}};var s=setTimeout(function(){o({type:"timeout",target:c})},12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var p=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"0eb0":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("7844");var a=n("5596"),r=(n("4b0a"),n("2bb1")),o=(n("537a"),n("ac28")),i=(n("a52c"),n("2ed4")),u=(n("cadf"),n("551c"),n("f751"),n("097d"),n("2b0e")),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view"),n("tabbar")],1)},s=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("van-tabbar",{attrs:{"active-color":"#00d094"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabbar,function(e,a){return n("van-tabbar-item",{key:a,attrs:{to:e.path},scopedSlots:t._u([{key:"icon",fn:function(t){return n("img",{attrs:{src:t.active?e.active:e.normal}})}}],null,!0)},[n("span",[t._v(t._s(e.title))])])}),1)},p=[],f={name:"tabbar",data:function(){return{active:0,tabbar:[{path:"/",title:"梦想互助",normal:"http://tdream.antit.top/image/nav_index_disable.png",active:"http://tdream.antit.top/image/nav_index.png"},{path:"/clock",title:"行动打卡",normal:"https://tdream.antit.top/ActiveSignInOff.png",active:"https://tdream.antit.top/ActiveSignInOk.png"},{path:"/user",title:"个人中心",normal:"http://tdream.antit.top/image/nav_owner_disable.png",active:"http://tdream.antit.top/image/nav_owner.png"}]}}},d=f,m=n("2877"),v=Object(m["a"])(d,l,p,!1,null,null,null),b=v.exports,h={name:"app",components:{tabbar:b}},g=h,y=(n("034f"),Object(m["a"])(g,c,s,!1,null,null,null)),_=y.exports,w=n("8c4f"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"banner"},[n("van-swipe",{attrs:{autoplay:3e3,"indicator-color":"white"}},[n("van-swipe-item",[n("img",{attrs:{src:"http://tdream.antit.top/image/banner.png",alt:"新手指引"}})]),n("van-swipe-item",[n("img",{attrs:{src:"https://tdream.antit.top/image/Red_SendPack.jpg",alt:"梦想红包"}})])],1)],1)])},j=[],x={name:"home",data:function(){return{userInfo:""}},created:function(){this.GetUserInfo(this)},methods:{GetUserInfo:function(t){WebApp.Init("wxc5216d15dd321ac5",function(t,e){console.log(Options.GetUserInfo()),console.log(this)})}}},k=x,P=(n("edf0"),Object(m["a"])(k,O,j,!1,null,"4cb488fe",null)),S=P.exports;u["a"].use(w["a"]);var I=new w["a"]({mode:"history",base:"",routes:[{path:"/",name:"home",component:S},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]});u["a"].use(o["a"]).use(i["a"]),u["a"].use(a["a"]).use(r["a"]),u["a"].config.productionTip=!1,new u["a"]({router:I,render:function(t){return t(_)}}).$mount("#app")},"64a9":function(t,e,n){},edf0:function(t,e,n){"use strict";var a=n("0eb0"),r=n.n(a);r.a}});
//# sourceMappingURL=app.cc572105.js.map