(function(t){function e(e){for(var n,s,r=e[0],l=e[1],c=e[2],p=0,u=[];p<r.length;p++)s=r[p],o[s]&&u.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);d&&d(e);while(u.length)u.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},o={app:0},i=[];function s(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"677dfa34"}[t]+".js"}function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=o[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=n);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=s(t),i=function(e){l.onerror=l.onload=null,clearTimeout(c);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+n+": "+i+")");s.type=n,s.request=i,a[1](s)}o[t]=void 0}};var c=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),o=a.n(n);o.a},"15a7":function(t,e,a){"use strict";var n=a("d056"),o=a.n(n);o.a},"218f":function(t,e,a){"use strict";var n=a("92bf"),o=a.n(n);o.a},"25de":function(t,e,a){"use strict";var n=a("78f4"),o=a.n(n);o.a},"2f31":function(t,e,a){"use strict";var n=a("9b19"),o=a.n(n);o.a},"2f62":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("7f7f"),a("2994");var n=a("2bdd"),o=(a("e7e5"),a("d399")),i=(a("3208"),a("c0b2")),s=(a("c194"),a("7744")),r=(a("e17f"),a("2241")),l=(a("8a58"),a("e41f")),c=(a("66b9"),a("b650")),p=(a("bda7"),a("5e46")),d=(a("da3c"),a("0b33")),u=(a("4d48"),a("d1e1")),m=(a("81e6"),a("9ffb")),f=(a("c3a6"),a("ad06")),h=(a("537a"),a("ac28")),v=(a("a52c"),a("2ed4")),g=(a("cadf"),a("551c"),a("f751"),a("097d"),a("2b0e")),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),a("router-view",{attrs:{name:"payInfo"}}),a("router-view",{attrs:{name:"share"}}),a("router-view",{attrs:{name:"poolinfo"}}),a("router-view",{attrs:{name:"dream"}}),t.istab?a("tab-bar"):t._e()],1)},_=[],y=(a("6762"),a("2fdb"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabbar"},[a("van-tabbar",{attrs:{"active-color":"#00d094"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabbar,function(e,n){return a("van-tabbar-item",{key:n,attrs:{to:e.path},scopedSlots:t._u([{key:"icon",fn:function(t){return a("img",{attrs:{src:t.active?e.active:e.normal}})}}],null,!0)},[a("span",[t._v(t._s(e.title))])])}),1)],1)}),w=[],S={name:"tabbar",data:function(){return{active:0,tabbar:[{path:"/",title:"梦想互助",normal:"http://tdream.antit.top/image/nav_index_disable.png",active:"http://tdream.antit.top/image/nav_index.png"},{path:"/clock",title:"行动打卡",normal:"https://tdream.antit.top/ActiveSignInOff.png",active:"https://tdream.antit.top/ActiveSignInOk.png"},{path:"/user",title:"个人中心",normal:"http://tdream.antit.top/image/nav_owner_disable.png",active:"http://tdream.antit.top/image/nav_owner.png"}]}},created:function(){console.log(this.$route.path),"/"==this.$route.path?this.active=0:"/clock"==this.$route.path?this.active=1:"/user"==this.$route.path&&(this.active=2)},watch:{$route:function(t,e){"/"==t.path?this.active=0:"/clock"==t.path?this.active=1:"/user"==t.path&&(this.active=2)}}},C=S,x=a("2877"),k=Object(x["a"])(C,y,w,!1,null,null,null),O=k.exports,I={name:"App",data:function(){return{istab:!0}},created:function(){console.error("End.vue尚未接入");var t=window.location.href;t.includes("")&&("/"!=this.$route.path&&"/clock"!=this.$route.path&&"/user"!=this.$route.path?this.istab=!1:this.istab=!0),this.$store.commit("uid",JSON.parse(GetStorage("userInfo")).openid)},methods:{},components:{TabBar:O},mounted:function(){this.$store.commit("uid",JSON.parse(GetStorage("userInfo")).openid)},watch:{$route:function(t,e){/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)&&(location.href="http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/#"+t.path),this.$store.commit("uid",JSON.parse(GetStorage("userInfo")).openid),console.log(t.path,t),"/"!=t.path&&"/clock"!=t.path&&"/user"!=t.path?this.istab=!1:this.istab=!0}}},T=I,j=(a("034f"),Object(x["a"])(T,b,_,!1,null,null,null)),P=j.exports,D=a("8c4f"),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"banner swipslider",attrs:{id:"banner"}},[a("slider",{ref:"slider",attrs:{options:t.sliderinit}},t._l(t.someList,function(t,e){return a("slideritem",{key:e,style:t.style})}),1)],1),a("screen",{attrs:{orders:t.orders}}),a("pool",{attrs:{pools:t.pools}}),a("p",{staticClass:"luck"},[a("router-link",{staticStyle:{"text-decoration":"underline"},attrs:{to:"/history",tag:"span"}},[t._v("往期幸运者")])],1),a("rules"),t._m(0),a("van-popup",{staticClass:"dream",model:{value:t.isdaward,callback:function(e){t.isdaward=e},expression:"isdaward"}},[a("div",{staticClass:"award"},[a("div",{staticClass:"main"},[a("p",{staticClass:"title"},[t._v("幸运提示")]),a("p",{staticClass:"msg"},[t._v("\n          恭喜您成为梦想互助20190312期幸运者，请您在7个工作日内完善梦想并实名认证，通过审核后3个工作日内给您颁发梦想互助金！\n        ")]),a("div",{staticClass:"fbtn"},[a("van-button",{attrs:{type:"primary",size:"large",round:""}},[t._v("完善梦想")])],1)])])])],1)},R=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"icon_notice"},[a("div",{staticClass:"left"}),a("div",{staticClass:"right"},[a("div",{staticClass:"text ntext",staticStyle:{"font-size":"6px"}},[t._v("0")])])])}],E=a("b190"),N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"screen"},[a("div",{staticClass:"warp"},[a("van-col",{attrs:{span:"12"}},[a("van-icon",{staticClass:"headicon",attrs:{name:t.info.headicon}}),a("span",{staticClass:"nickname"},[t._v(t._s(t.info.nickname))])],1),a("van-col",{staticStyle:{"text-align":"right","font-size":"0.26rem"},attrs:{span:"12"}},[t._v("\n            "+t._s(t.info.message)+"\n        ")])],1)])},J=[],A={name:"screen",data:function(){return{buyinfo:"",info:""}},props:{orders:{type:[Array,Object],default:function(){return[]}}},created:function(){this.check()},methods:{interval:function(){var t=this,e=t.buyinfo.shift(),a=(new Date).getTime()/1e3,n=DescriptionTime(a-parseInt(e.ptime));if("STANDARD"==e.ptype)var o="小梦想";else if("TRADE"==e.ptype)o="小生意";e.message=n+"前购买了"+e.dcount+"份"+o,t.buyinfo.push(e),t.info=e,setInterval(function(){if(""!=t.buyinfo){var e=t.buyinfo.shift(),a=(new Date).getTime()/1e3,n=DescriptionTime(a-parseInt(e.ptime));if("STANDARD"==e.ptype)var o="小梦想";else if("TRADE"==e.ptype)o="小生意";e.message=n+"前购买了"+e.dcount+"份"+o,t.buyinfo.push(e),t.info=e}},3e3)},check:function(){var t=this,e=setInterval(function(){""!=t.buyinfo&&(t.interval(),clearInterval(e))},50)}},watch:{orders:function(t){this.buyinfo=t}}},B=A,G=(a("afe2"),Object(x["a"])(B,N,J,!1,null,"ba5db5f2",null)),L=G.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pool"},[a("van-tabs",{attrs:{swipeable:"","title-active-color":"#00d094",color:"#00d094","line-width":"20","line-height":"1"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tab",{staticClass:"dream",attrs:{title:"梦想互助"}},[a("div",{staticClass:"main"},[a("h3",{staticClass:"title"},[t._v(t._s(""!=t.mainpool?t.mainpool.ptitle:""))]),a("div",{staticClass:"progress"},[a("yd-progressbar",{attrs:{progress:""==t.mainpool?0:t.mainpool.cbill/t.mainpool.tbill,"trail-width":"4","stroke-color":"#edf0f5","trail-color":"#ffc054"}},[a("van-col",{staticClass:"timeouts",attrs:{span:"24"}},[a("van-icon",{staticClass:"icon_clock",attrs:{name:"clock-o"}}),a("span",[t._v(t._s(""==t.timeout?"":t.timeout))])],1),a("van-col",{staticClass:"current",attrs:{span:"24"}},[a("span",{staticClass:"money"},[t._v(t._s(""!=t.mainpool?t.mainpool.realBill+t.mainpool.realUnit:""))])]),a("van-col",{staticClass:"text",attrs:{span:"24"}},[a("span",[t._v(t._s(""==t.mainpool?"":t.mainpool.billHint))])])],1)],1),a("div",{staticClass:"poolInfo"},[a("van-col",{attrs:{span:"12"}},[a("p",[t._v(t._s(""==t.mainpool?"":t.mainpool.rtbillValue+t.mainpool.rtbillUnit))]),a("p",[t._v("互助目标")])]),a("van-col",{staticStyle:{"text-align":"right"},attrs:{span:"12"}},[a("p",[t._v(t._s(""==t.mainpool?"":t.mainpool.rubill+t.mainpool.rubillUnit))]),a("p",[t._v("价格")])])],1),a("div",{staticClass:"buybtn"},[a("van-button",{attrs:{type:"primary",size:"large",round:""},on:{click:function(e){return t.join("dream")}}},[t._v("参与互助")])],1)]),a("p",{staticClass:"tip"},[t._v("每个人支付少量互助金，从中随机产生1名幸运者获得累计互助金启动梦想！")])]),a("van-tab",{staticClass:"trade",attrs:{title:"生意互助"}},[a("div",{staticClass:"main"},[a("div",{staticClass:"banner",style:{background:""==t.trade?"":"url("+t.trade.trade.bannerUrl+") no-repeat center center / 6.8rem 3.86rem"}},[a("p",[a("span",[t._v(t._s(""==t.trade?"":t.trade.ptitle))]),a("span",[t._v("生意详情>>")])])]),a("div",{staticClass:"tradeInfo"},[a("p",[t._v(t._s(""==t.trade?"":t.trade.billHint)),a("span",[t._v(t._s(""==t.trade?"":t.trade.realBill+t.trade.realUnit))])]),a("div",{staticClass:"progress"},[a("yd-progressbar",{staticStyle:{height:"0.3rem"},attrs:{type:"line",progress:""==t.trade?0:t.trade.cbill/t.trade.tbill,"trail-width":"4","stroke-color":"#edf0f5","trail-color":"#ffc054"}})],1),a("div",{staticClass:"info"},[a("van-col",{attrs:{span:"12"}},[a("p",[t._v(t._s(""==t.trade?"":t.trade.rtbillValue+t.trade.rtbillUnit))]),a("p",[t._v("互助目标(不满不开)")])]),a("van-col",{attrs:{span:"12"}},[a("p",[t._v(t._s(""==t.trade?"":t.trade.rubillValue+t.trade.rubillUnit))]),a("p",[t._v("价格")])])],1),a("div",{staticClass:"tradeBtn"},[a("van-button",{attrs:{type:"primary",size:"large",round:""},on:{click:function(e){return t.join("trade")}}},[t._v("参与互助")])],1)])]),a("p",{staticClass:"tip"},[t._v("没人支付少量互助金，从中随机产生1名幸运者成为指定目标的免费获得者")])])],1)],1)},z=[],U={name:"pool",data:function(){return{mainpool:"",trade:"",active:0,timeout:this.timeout()}},props:{pools:{type:[Array,Object],default:function(){return[]}}},methods:{timeout:function(){var t=this;setInterval(function(){var e=parseInt((new Date).getTime()/1e3),a=parseInt(t.mainpool.ptime)+parseInt(t.mainpool.duration)-e,n=Math.floor(a/3600)>=10?Math.floor(a/3600):"0"+Math.floor(a/3600),o=Math.floor(a/60%60)>=10?Math.floor(a/60%60):"0"+Math.floor(a/60%60),i=Math.floor(a%60)>=10?Math.floor(a%60):"0"+Math.floor(a%60);t.timeout=n+":"+o+":"+i},1e3)},join:function(t){this.Buy(this,t)},Buy:function(t,e){var a="dream"==e?t.mainpool.pid:t.trade.pid;TD_Request("ds","buy",{uid:t.$store.state.uid,pid:a},function(a,n){console.log(n),n.actions.hasOwnProperty("editdream")?t.$dialog.confirm({title:"添加梦想",message:"您还没有添加梦想，添加梦想后即可参与互助，是否前往添加",confirmButtonText:"去添加",confirmButtonColor:"#00d094"}).then(function(){console.error("跳转小梦想添加页面")}):(t.$store.commit("actions",n.actions),console.error("梦想互助支付页面"),SaveStorage("action",JSON.stringify(t.$store.state.actions)),SaveStorage("type",e),t.$router.push("/payinfo"))},function(e,a){console.log(a),11==e&&t.$dialog.alert({title:"绑定手机",message:"您尚未绑定手机，绑定手机后就可以参与互助啦！",confirmButtonText:"去绑定",confirmButtonColor:"#00d094"}).thne(function(){console.error("跳转手机绑定页面")})})}},watch:{pools:function(t){console.log(this.$store.state),console.log(t),0==t[0].code?(this.trade=t[0].maintrade,this.mainpool=t[0].mainpool):1==t[0].code?(this.trade=t[0].maintrade,$(".dream").html(t[0].context).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"})):2==t[0].code?(this.mainpool=t[0].mainpool,$(".trade").html(t[0].context).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"})):-1==t[0].code&&($(".dream").html(t[0].tcontext).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"}),$(".trade").html(t[0].context).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"})),console.log(this.trade),console.log(this.mainpool)},timeout:function(t){console.log(t),"00:00:00"==t&&window.location.reload()}}},V=U,W=(a("600f"),Object(x["a"])(V,q,z,!1,null,"50271840",null)),H=W.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rules"},[t._m(0),a("div",{staticClass:"steps"},[a("van-col",{attrs:{span:"6"}},[a("van-icon",{attrs:{name:"http://tdream.antit.top/image/active_index1.png"}}),a("p",[t._v("多人互助")])],1),a("van-col",{attrs:{span:"6"}},[a("van-icon",{attrs:{name:"http://tdream.antit.top/image/avtive_index2.png"}}),a("p",[t._v("1人幸运")])],1),a("van-col",{attrs:{span:"6"}},[a("van-icon",{attrs:{name:"http://tdream.antit.top/image/avtive_index3.png"}}),a("p",[t._v("启动梦想")])],1),a("van-col",{attrs:{span:"6"}},[a("van-icon",{attrs:{name:"http://tdream.antit.top/image/active_index4.png"}}),a("p",[t._v("梦想报道")])],1)],1),a("div",{staticClass:"info"},[a("div",{staticClass:"rule"},[a("p",[a("van-icon",{attrs:{name:"http://tdream.antit.top/image/index1.png"}}),a("span",[t._v("多人互助 — — 参与互助每个人支付少量互助金")])],1),a("p",[a("van-icon",{attrs:{name:"http://tdream.antit.top/image/index2.png"}}),a("span",[t._v("1人幸运 — — 公平随机产生1名幸运者")])],1),a("p",[a("van-icon",{attrs:{name:"http://tdream.antit.top/image/index3.png"}}),a("span",[t._v("启动梦想 — — 幸运者得到累计互助金启动梦想")])],1),a("p",[a("van-icon",{attrs:{name:"http://tdream.antit.top/image/index4.png"}}),a("span",[t._v("梦想报道 — — 梦想执行跟踪报道")])],1),t._m(1)])])])},Q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("div",{staticClass:"line left"}),a("div",{staticClass:"circle left"}),a("p",[t._v("小梦想互助规则")]),a("div",{staticClass:"circle right"}),a("div",{staticClass:"line right"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"more"},[a("span",[t._v("了解更多")])])}],Y={name:"rules"},K=Y,X=(a("f399"),Object(x["a"])(K,F,Q,!1,null,"649c2ce4",null)),Z=X.exports,tt={name:"home",data:function(){return{sliderinit:{currentPage:0,autoplay:3e3,loop:!0,slidesToScroll:1,duration:300},someList:[{style:"background:url(http://tdream.antit.top/image/banner.png) no-repeat center center / 6.8rem 2rem"},{style:"background:url(https://tdream.antit.top/image/Red_SendPack.jpg) no-repeat center center / 6.8rem 2rem;border-radius:0.2rem"}],userInfo:"",orders:"",pools:"",isdaward:!0}},components:{slider:E["slider"],slideritem:E["slideritem"],screen:L,pool:H,rules:Z},created:function(){ExistStorage("userInfo")?this.Register(this,JSON.parse(GetStorage("userInfo"))):window.location.href="http://tinydream.ivkcld.cn/TInydreamWeb/dream"},methods:{Register:function(t,e){TD_Request("us","enter",{uid:e.openid,nickname:e.nickname,headicon:e.headimgurl},function(e,a){if(console.log(a),t.$store.commit("uid",JSON.parse(GetStorage("userInfo")).openid),t.orders=a.buyinfo,0!=a.mainpool.length&&DreamPoolAnalysis(a.mainpool),0!=a.maintrade.length&&DreamPoolAnalysis(a.maintrade),0==a.mainpool.length&&0!=a.maintrade.length)var n=[{code:1,mainpool:a.mainpool,context:"暂无更多梦想池",maintrade:a.maintrade}];else if(0!=a.mainpool.length&&0==a.maintrade.length)n=[{code:2,mainpool:a.mainpool,context:"暂无更多项目",maintrade:a.maintrade}];else if(0==a.mainpool.length&&0==a.maintrade.length)n=[{code:-1,mainpool:a.mainpool,context:"暂无更多项目",tcontext:"暂无更多梦想池",maintrade:a.maintrade}];else n=[{code:0,mainpool:a.mainpool,context:"成功",maintrade:a.maintrade}];t.pools=n},function(t,e){console.log(e)})}}},et=tt,at=(a("76be"),Object(x["a"])(et,M,R,!1,null,"45a3e2f2",null)),nt=at.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"payInfo"},[a("div",{staticClass:"info"},[a("h3",{staticClass:"title"},[t._v(t._s(""==t.pool?"":t.pool.ptitle))]),a("div",{staticClass:"progress"},[a("yd-progressbar",{attrs:{progress:t.pool.cbill/t.pool.tbill,"trail-width":"4","stroke-color":"#edf0f5","trail-color":"#ffc054"}},[a("van-col",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"timeouts",attrs:{span:"24"}},[a("van-icon",{staticClass:"icon_clock",attrs:{name:"clock-o"}}),a("span",[t._v(t._s(""==t.timeout?"":t.timeout))])],1),a("van-col",{staticClass:"current",attrs:{span:"24"}},[a("span",{staticClass:"money"},[t._v(t._s(""!=t.pool?t.pool.realBill+t.pool.realUnit:""))])]),a("van-col",{staticClass:"text",attrs:{span:"24"}},[a("span",[t._v(t._s(""==t.pool?"":t.pool.billHint))])])],1)],1),a("div",{staticClass:"payinfo"},[a("van-row",{staticStyle:{"margin-bottom":"0.56rem"}},[a("van-col",{attrs:{span:"12"}},[a("span",{staticClass:"left"},[t._v("目标金额")])]),a("van-col",{staticClass:"right",attrs:{span:"12"}},[a("span",{staticClass:"right tbill"},[t._v(t._s(""==t.pool?"":t.pool.rtbillValue+t.pool.rtbillUnit))])])],1),a("van-row",{staticStyle:{"margin-bottom":"0.56rem"}},[a("van-col",{staticStyle:{"text-align":"left"},attrs:{span:"12"}},[a("span",{staticClass:"left"},[t._v("份数")])]),a("van-col",{staticClass:"right",attrs:{span:"12"}},[a("p",[a("span",{staticClass:"add btn",on:{click:t.add}},[t._v("＋")]),a("span",{staticStyle:{margin:"0 0.3rem","font-size":"0.3rem",color:"#333"}},[t._v(t._s(t.count))]),a("span",{staticClass:"incre btn",on:{click:t.incre}},[t._v("－")])])])],1),a("van-row",{staticStyle:{"margin-bottom":"0.56rem"}},[a("van-col",{attrs:{span:"12"}},[a("span",{staticClass:"left"},[t._v("选择梦想")])]),a("van-col",{staticClass:"right",attrs:{span:"12"}},[a("span",{staticClass:"right"},[a("span",{staticStyle:{"font-size":"0.3rem",color:"#333"},attrs:{id:"dream","data-did":t.did}},[t._v(t._s(t.dream))]),t.isArrow?a("van-icon",{staticClass:"arrow",attrs:{name:"arrow"},on:{click:t.select}}):t._e()],1)])],1),a("van-row",[a("van-col",{staticStyle:{"text-align":"center",color:"#999","margin-bottom":"0.2rem"},attrs:{span:"24"}},[t._v("\n                    "+t._s(""==t.pool?"":t.pool.rubillValue+t.pool.rubillUnit+" 结算")+"\n                    "),a("span",{staticStyle:{"font-size":"0.36rem",color:"#00d094"}},[t._v(t._s(""==t.count?"":t.pool.rubillValue*t.count+"元"))])])],1),a("van-button",{attrs:{type:"primary",round:"",size:"large"},on:{click:function(e){return t.payment(t.count)}}},[t._v("立即支付")])],1),a("van-actionsheet",{attrs:{actions:t.actions,"cancel-text":"取消"},on:{select:t.onSelect,cancel:t.onCancel},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)])},it=[],st={name:"payInfo",data:function(){return{pool:"",isshow:!0,timeout:this.timeout(),isArrow:!0,dream_context:"选择梦想",dream:"",did:"",count:1,pay:"",show:!1,actions:[]}},created:function(){if(ExistStorage("action")){GetStorage("type"),this.selectDream(this,GetStorage("type")),this.ord(this)}else this.$router.push("/")},methods:{ord:function(t){TD_Request("ds","ord",{action:GetStorage("action")},function(e,a){console.log(a),DreamPoolAnalysis(a.pool),a.pool.order=a.actions,t.pool=a.pool,console.log(t.pool)},function(t,e){console.log(e)})},selectDream:function(t,e){if("dream"==e){var a=JSON.parse(GetStorage("action")).buy.dream.did;t.dream_context="选择梦想",this.isArrow=!0}else if("trade"==e){a=JSON.parse(GetStorage("action")).buy.dream.tid;this.dream_context="本期项目",this.isArrow=!1}TD_Request("dr","gdream",{uid:t.$store.state.uid,did:a},function(a,n){console.log(n),t.did="dream"==e?n.dream.did:n.dream.tid,t.dream=n.dream.title},function(t,e){console.log(e)})},add:function(){this.count>=JSON.parse(GetStorage("action")).buy.dayLim?this.count=JSON.parse(GetStorage("action")).buy.dayLim:this.count++},incre:function(){this.count<=1?this.count=1:this.count--},timeout:function(){var t=this;setInterval(function(){var e=parseInt((new Date).getTime()/1e3),a=parseInt(t.pool.ptime)+parseInt(t.pool.duration)-e,n=Math.floor(a/3600)>=10?Math.floor(a/3600):"0"+Math.floor(a/3600),o=Math.floor(a/60%60)>=10?Math.floor(a/60%60):"0"+Math.floor(a/60%60),i=Math.floor(a%60)>=10?Math.floor(a%60):"0"+Math.floor(a%60);t.timeout=n+":"+o+":"+i},1e3)},select:function(){this.seldream(this)},seldream:function(t){TD_Request("dr","dlist",{uid:t.$store.state.uid},function(e,a){console.log(a);var n=[];$.each(a.dreams,function(t,e){"SUBMIT"!=e.state&&"FAILD"!=e.state||n.push({name:e.title,value:e.did})}),t.actions=n,t.show=!0},function(t,e){console.log(e)})},onSelect:function(t,e){console.log(t),this.dream=t.name,this.did=t.value,this.show=!1},payment:function(t){this.wxweb(this,this.pool.rubillValue*t*100)},wxweb:function(t,e){e=1;TD_Request("ds","wxpayweb",{oid:t.pool.order.pay.oid,bill:e,uid:t.$store.state.uid},function(a,n){console.log(n),t.Wake(t,n,e)},function(t,e){console.log(e)})},Wake:function(t,e,a){WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:e.appId,timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:e.package,signType:e.signType,paySign:e.paySign},function(e){alert(JSON.stringify(e)),"get_brand_wcpay_request:ok"==e.err_msg?t.success(t,a):"get_brand_wcpay_request:cancel"==e.err_msg&&t.$toast.fail("支付取消")})},success:function(t,e){var a={};a=t.pool.order,TD_Request("ds","pay",{uid:t.$store.state.uid,oid:t.pool.order.pay.oid,bill:e,pcount:t.count,action:JSON.stringify(a),did:$("#dream").attr("data-did")},function(e,a){alert(JSON.stringify(a));var n=$("#dream").attr("data-did");RemoveStorage("action"),t.$router.push("/share/"+t.pool.pid+"/"+n+"/"+t.$route.params.type)},function(t,e){alert(JSON.stringify(e))})}},watch:{$route:function(t,e){ExistStorage("action")||this.$router.push("/")}}},rt=st,lt=(a("f9a3"),Object(x["a"])(rt,ot,it,!1,null,"e02e9a56",null)),ct=lt.exports,pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"share"},[t._m(0),a("p",{staticClass:"tip"},[t._v("长按图片分享")]),a("div",{staticClass:"btn",on:{click:t.look}})])},dt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"share"}},[a("canvas",{attrs:{id:"canvas"}})])}],ut={name:"share",data:function(){return{img:["https://tdream.antit.top/LongPress2Share01.jpg","https://tdream.antit.top/LongPress2Share02.jpg","https://tdream.antit.top/LongPress2Share03.jpg","https://tdream.antit.top/LongPress2Share04.jpg","https://tdream.antit.top/LongPress2Share05.jpg","https://tdream.antit.top/LongPress2Share06.jpg","https://tdream.antit.top/LongPress2Share07.jpg","https://tdream.antit.top/LongPress2Share08.jpg","https://tdream.antit.top/LongPress2Share09.jpg","https://tdream.antit.top/LongPress2Share10.jpg","https://tdream.antit.top/LongPress2Share11.jpg","https://tdream.antit.top/LongPress2Share12.jpg"]}},created:function(){var t=Math.floor(Math.random()*this.img.length),e=this.img[t],a=this;$.post("http://tinydream.ivkcld.cn/TinydreamWeb/php/url.php",{headimgurl:JSON.parse(GetStorage("userInfo")).headimgurl},function(t){console.log(e,t);var n=t;TD_Request("dr","gdream",{uid:a.$store.state.uid,did:a.$route.params.did},function(t,o){console.log(o);var i=o,s=document.getElementById("canvas");$(s).css({width:$(window).width(),height:$(window).height()});var r=s.getContext("2d"),l=r.backingStorePixelRatio||r.webkitBackingStorePixelRatio||r.mozBackingStorePixelRatio||r.msBackingStorePixelRatio||r.oBackingStorePixelRatio||r.backingStorePixelRatio||1,c=(window.devicePixelRatio||1)/l;console.log(c),s.width=$(window).width()*c,s.height=$(window).height()*c;$(window).width(),$(window).height(),$(window).height();var p=[e,n,"http://tdream.antit.top/LongPress2ShareQR.jpg"];a.next(i,a,r,p,0,0,0,$(window).width()*c,$(window).height()*c,c)})})},methods:{next:function(t,e,a,n,o,i,s,r,l,c){try{var p=new Image;p.setAttribute("crossOrigin","anonymous"),p.src=n[o]}catch(d){}p.onload=function(){if(2!=o)a.drawImage(p,i,s,r,l),e.next(t,e,a,n,o+1,15*c,40*c,50*c,50*c,c);else{i=$(window).width()*c-75*c,s=$(window).height()*c-85*c,r=60*c,l=60*c,a.drawImage(p,i,s,r,l),a.globalCompositeOperation="source-over",a.fillStyle="#fff";var d=15*c;if(a.font=d+"px 微软雅黑",JSON.parse(GetStorage("userInfo")).nickname.length>7)var u=JSON.parse(GetStorage("userInfo")).nickname.substring(0,7)+"...";else u=JSON.parse(GetStorage("userInfo")).nickname;var m=(new Date).getFullYear();if("dream"==e.$route.params.type)var f="小梦想";else f="小生意";if(a.fillText(u+" #"+m+f+"#",75*c,56*c),t.dream.title.length>6)var h=t.dream.title.substring(0,6)+"...";else h=t.dream.title;d=19*c;a.font=d+"px 微软雅黑",a.fillText(h+"(已成功参与互助)",75*c,88*c);d=14*c;a.font=d+"px 微软雅黑",a.fillText("扫码关注",$(window).width()*c-141*c,$(window).height()*c-44*c),a.fillText("追梦行动派",$(window).width()*c-155*c,$(window).height()*c-25*c);var v=document.getElementById("canvas"),g=v.toDataURL("image/png"),b=new Image;b.src=g,$("#share").html(b),$("img").css("width","100%")}}},look:function(){var t=this;TD_Request("dp","pinfo",{pid:t.$route.params.pid},function(e,a){console.log(a),DreamPoolAnalysis(a.pool),SaveStorage("pinfo",JSON.stringify(a.pool)),t.$router.push("/pinfo")},function(t,e){console.log(e)})}}},mt=ut,ft=(a("2f31"),Object(x["a"])(mt,pt,dt,!1,null,"1df38b80",null)),ht=ft.exports,vt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"poolinfo"},[t.isrun?a("Progress"):t._e(),a("Tab"),t.isrun?t._e():a("End")],1)},gt=[],bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"progress"},[a("div",{staticClass:"main"},[a("h3",[t._v(t._s(""==t.pool?"":t.pool.ptitle))]),a("div",{staticClass:"progre"},[a("yd-progressbar",{attrs:{progress:t.pool.cbill/t.pool.tbill,"trail-width":"4","stroke-color":"#edf0f5","trail-color":"#ffc054"}},[a("van-col",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"timeouts",attrs:{span:"24"}},[a("van-icon",{staticClass:"icon_clock",attrs:{name:"clock-o"}}),a("span",[t._v(t._s(""==t.timeout?"":t.timeout))])],1),a("van-col",{staticClass:"current",attrs:{span:"24"}},[a("span",{staticClass:"money"},[t._v(t._s(""!=t.pool?t.pool.realBill+t.pool.realUnit:""))])]),a("van-col",{staticClass:"text",attrs:{span:"24"}},[a("span",[t._v(t._s(""==t.pool?"":t.pool.billHint))])])],1)],1),a("div",{staticClass:"info"},[a("van-col",{attrs:{span:"8"}},[a("p",{staticClass:"green"},[t._v(t._s(""==t.pool?"":t.pool.rtbillValue+t.pool.rtbillUnit))]),a("p",{staticClass:"title"},[t._v("目标金额")])]),a("van-col",{attrs:{span:"8"}},[a("p",{staticClass:"green"},[t._v("互助中")]),a("p",{staticClass:"title"},[t._v("中奖者编号")])]),a("van-col",{attrs:{span:"8"}},[a("p",{staticClass:"green"},[t._v(t._s(t.count))]),a("p",{staticClass:"title"},[t._v(" 总参与份数")])])],1),a("div",{staticClass:"join"},[a("van-button",{attrs:{type:"primary",round:"",size:"large"},on:{click:function(e){return t.join(t.type)}}},[t._v("参与互助")])],1)])])},_t=[],yt={name:"progress",data:function(){return{mainpool:"",pool:"",timeout:"",isshow:!0,count:"",tip:"",type:""}},created:function(){this.pool=JSON.parse(GetStorage("pinfo")),this.type=this.pool.state,this.count=JSON.parse(GetStorage("pinfo")).pcount,"TRADE"==this.pool.state&&(this.isshow=!1),this.timeouts(this),console.log(this.pool),console.log(H)},methods:{timeouts:function(t){setInterval(function(){var e=parseInt((new Date).getTime()/1e3),a=parseInt(t.pool.ptime)+parseInt(t.pool.duration)-e,n=Math.floor(a/3600)>=10?Math.floor(a/3600):"0"+Math.floor(a/3600),o=Math.floor(a/60%60)>=10?Math.floor(a/60%60):"0"+Math.floor(a/60%60),i=Math.floor(a%60)>=10?Math.floor(a%60):"0"+Math.floor(a%60);t.timeout=n+":"+o+":"+i},1e3)},join:function(t){t="TRADE"==t?"trade":"dream",this.mainpool=this.pool,H.methods.Buy(this,t)}}},wt=yt,St=(a("218f"),Object(x["a"])(wt,bt,_t,!1,null,"70583d62",null)),Ct=St.exports,xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"end"},[a("Tab")],1)},$t=[],kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab"},[a("van-tabs",{attrs:{swipeable:"","title-active-color":"#00d094",color:"#00d094","line-width":"20","line-height":"1"},on:{change:t.change},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tab",{staticClass:"me",attrs:{title:"我的编号"}},[a("div",{staticClass:"warp"},t._l(t.lotter,function(e,n){return a("van-col",{key:n,attrs:{span:"12"}},[a("p",{staticClass:"lid"},[t._v(t._s(e.lid))])])}),1)]),a("van-tab",{staticClass:"user",attrs:{title:"用户编号"}},[a("van-list",{attrs:{finished:t.finished,"finished-text":"我是有底线的~~"},on:{load:t.Onload},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.userOrde,function(e,n){return a("van-cell",{key:n},[a("van-col",{staticStyle:{"text-align":"left"},attrs:{span:"6"}},[a("p",[t._v(t._s(e.tele))])]),a("van-col",{attrs:{span:"6"}},[a("p",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.dcount+" 份"))])]),a("van-col",{attrs:{span:"6"}},[a("p",{staticStyle:{color:"#00d094"},on:{click:function(a){return t.look(e.oid)}}},[t._v("查看编号")])]),a("van-col",{attrs:{span:"6"}},[a("p",[t._v(t._s(e.dtit))])]),a("van-dialog",{attrs:{title:"用户编号","show-cancel-button":"","confirm-button-color":"#00d094"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("div",{staticClass:"lid_warp"},t._l(t.lottey,function(e,n){return a("van-col",{key:n,attrs:{span:"12"}},[a("p",[t._v(t._s(e.lid))])])}),1)])],1)}),1)],1)],1)],1)},Ot=[],It={name:"tab",data:function(){return{lotter:"",loading:!1,finished:!1,userOrde:[],seek:0,ordCount:"",show:!1,lottey:""}},created:function(){this.lid(this),this.counts(this)},methods:{lid:function(t){TD_Request("ds","pdetial",{uid:t.$store.state.uid,pid:JSON.parse(GetStorage("pinfo")).pid},function(e,a){console.log(a),""!=a.lottey&&a.lottey!={}&&null!=a.lottey||$(".warp").html("请先参与互助").css({"text-align":"center",color:"#808080","font-size":"0.32rem"}),t.lotter=a.lottey},function(t,e){console.log(e)})},counts:function(t){TD_Request("ds","precs",{pid:JSON.parse(GetStorage("pinfo")).pid},function(e,a){t.ordCount=a.ordCount,t.userLid(t,t.seek)},function(t,e){console.log(e)})},userLid:function(t,e){TD_Request("ds","preco",{pid:JSON.parse(GetStorage("pinfo")).pid,min:e,max:5},function(e,a){console.log(a),0!=a.orders.length?($.each(a.orders,function(e,a){a.dtitle.length>5?a.dtit=a.dtitle.substr(0,4)+"...":a.dtit=a.dtitle,t.userOrde.push(a)}),t.loading=!1,t.userOrde.length!=t.ordCount?console.log(t.userOrde):t.finished=!0):t.finished=!0},function(t,e){console.log(e)})},Onload:function(){this.seek+=5,console.log(this.seek),this.userLid(this,this.seek)},look:function(t){this.getlid(this,t)},getlid:function(t,e){TD_Request("aw","onums",{oid:e},function(e,a){console.log(a),t.show=!0,t.txt="确认",t.lottey=a.nums},function(t,e){console.log(e)})}}},Tt=It,jt=(a("25de"),Object(x["a"])(Tt,kt,Ot,!1,null,"647f4c67",null)),Pt=jt.exports,Dt={name:"end",components:{Tab:Pt}},Mt=Dt,Rt=Object(x["a"])(Mt,xt,$t,!1,null,"9d42b350",null),Et=Rt.exports,Nt={name:"poolinfo",data:function(){return{pool:"",isrun:!0}},components:{Progress:Ct,End:Et,Tab:Pt},created:function(){console.log(this.$route.params),this.pool=JSON.parse(GetStorage("pinfo")),"RUNNING"==this.pool.state?this.isrun=!0:"FINISHE"==this.state&&(this.isrun=!1)},methods:{}},Jt=Nt,At=(a("15a7"),Object(x["a"])(Jt,vt,gt,!1,null,"56ab9795",null)),Bt=At.exports,Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dream"},[a("Tab")],1)},Lt=[],qt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab"},[t._v("\n    div.\n")])},zt=[],Ut={name:"tab"},Vt=Ut,Wt=(a("e5b0"),Object(x["a"])(Vt,qt,zt,!1,null,"d244e312",null)),Ht=Wt.exports,Ft={name:"dream",components:{Tab:Ht}},Qt=Ft,Yt=(a("f8a2"),Object(x["a"])(Qt,Gt,Lt,!1,null,"35600b42",null)),Kt=Yt.exports;g["a"].use(D["a"]);var Xt=new D["a"]({base:"/TinydreamWeb/dream/dist/",routes:[{path:"/",name:"home",components:{default:nt}},{path:"/dream",name:"dream",components:{dream:Kt}},{path:"/payinfo",name:"payInfo",components:{payInfo:ct}},{path:"/share/:pid/:did/:type",name:"share",components:{share:ht}},{path:"/pinfo",name:"poolinfo",components:{poolinfo:Bt}},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),Zt=a("2f625");g["a"].use(Zt["a"]);var te=new Zt["a"].Store({state:{uid:"",actions:"",pinfo:""},mutations:{uid:function(t,e){t.uid=e},actions:function(t,e){t.actions=e},poolInfo:function(t,e){t.pinfo=e}}}),ee=a("df72"),ae=a("6ed7");g["a"].use(h["a"]).use(v["a"]),g["a"].use(u["a"]).use(m["a"]).use(f["a"]),g["a"].use(p["a"]).use(d["a"]),g["a"].use(c["a"]),g["a"].use(l["a"]),g["a"].use(r["a"]),g["a"].use(s["a"]),g["a"].use(i["a"]),g["a"].use(o["a"]),g["a"].use(n["a"]).use(s["a"]),g["a"].component(ee["ProgressBar"].name,ee["ProgressBar"]),g["a"].component(ae["Step"].name,ae["Step"]),g["a"].component(ae["StepItem"].name,ae["StepItem"]),g["a"].config.productionTip=!1,new g["a"]({store:te,router:Xt,render:function(t){return t(P)}}).$mount("#app")},"5b6c":function(t,e,a){},"600f":function(t,e,a){"use strict";var n=a("93ba"),o=a.n(n);o.a},"64a9":function(t,e,a){},"76be":function(t,e,a){"use strict";var n=a("2f62"),o=a.n(n);o.a},"78f4":function(t,e,a){},"8f41":function(t,e,a){},"92bf":function(t,e,a){},"93ba":function(t,e,a){},"9b19":function(t,e,a){},ad02:function(t,e,a){},afe2:function(t,e,a){"use strict";var n=a("bcf9"),o=a.n(n);o.a},bcf9:function(t,e,a){},d056:function(t,e,a){},ddb8:function(t,e,a){},e5b0:function(t,e,a){"use strict";var n=a("ad02"),o=a.n(n);o.a},f399:function(t,e,a){"use strict";var n=a("8f41"),o=a.n(n);o.a},f8a2:function(t,e,a){"use strict";var n=a("5b6c"),o=a.n(n);o.a},f9a3:function(t,e,a){"use strict";var n=a("ddb8"),o=a.n(n);o.a}});
//# sourceMappingURL=app.0a101b59.js.map