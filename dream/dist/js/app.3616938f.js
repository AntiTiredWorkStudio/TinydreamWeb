(function(t){function e(e){for(var n,s,r=e[0],l=e[1],c=e[2],p=0,d=[];p<r.length;p++)s=r[p],o[s]&&d.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},o={app:0},i=[];function s(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"833608e1"}[t]+".js"}function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.e=function(t){var e=[],a=o[t];if(0!==a)if(a)e.push(a[2]);else{var n=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=n);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=s(t),i=function(e){l.onerror=l.onload=null,clearTimeout(c);var a=o[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,s=new Error("Loading chunk "+t+" failed.\n("+n+": "+i+")");s.type=n,s.request=i,a[1](s)}o[t]=void 0}};var c=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),o=a.n(n);o.a},"2da2":function(t,e,a){"use strict";var n=a("ed44"),o=a.n(n);o.a},"2f62":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("7f7f"),a("3208");var n=a("c0b2"),o=(a("c194"),a("7744")),i=(a("e17f"),a("2241")),s=(a("8a58"),a("e41f")),r=(a("66b9"),a("b650")),l=(a("bda7"),a("5e46")),c=(a("da3c"),a("0b33")),p=(a("4d48"),a("d1e1")),u=(a("81e6"),a("9ffb")),d=(a("c3a6"),a("ad06")),m=(a("537a"),a("ac28")),f=(a("a52c"),a("2ed4")),h=(a("cadf"),a("551c"),a("f751"),a("097d"),a("2b0e")),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),a("router-view",{attrs:{name:"payInfo"}}),t.istab?a("tab-bar"):t._e()],1)},g=[],b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabbar"},[a("van-tabbar",{attrs:{"active-color":"#00d094"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabbar,function(e,n){return a("van-tabbar-item",{key:n,attrs:{to:e.path},scopedSlots:t._u([{key:"icon",fn:function(t){return a("img",{attrs:{src:t.active?e.active:e.normal}})}}],null,!0)},[a("span",[t._v(t._s(e.title))])])}),1)],1)},_=[],y={name:"tabbar",data:function(){return{active:0,tabbar:[{path:"/",title:"梦想互助",normal:"http://tdream.antit.top/image/nav_index_disable.png",active:"http://tdream.antit.top/image/nav_index.png"},{path:"/clock",title:"行动打卡",normal:"https://tdream.antit.top/ActiveSignInOff.png",active:"https://tdream.antit.top/ActiveSignInOk.png"},{path:"/user",title:"个人中心",normal:"http://tdream.antit.top/image/nav_owner_disable.png",active:"http://tdream.antit.top/image/nav_owner.png"}]}},created:function(){console.log(this.$route.path),"/"==this.$route.path?this.active=0:"/clock"==this.$route.path?this.active=1:"/user"==this.$route.path&&(this.active=2)},watch:{$route:function(t,e){"/"==t.path?this.active=0:"/clock"==t.path?this.active=1:"/user"==t.path&&(this.active=2)}}},C=y,w=a("2877"),x=Object(w["a"])(C,b,_,!1,null,null,null),k=x.exports,S={name:"App",data:function(){return{istab:!0}},created:function(){"/"!=this.$route.path&&"/clock"!=this.$route.path&&"/user"!=this.$route.path?this.istab=!1:this.istab=!0},methods:{},components:{TabBar:k},watch:{$route:function(t,e){/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)&&(location.href="http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/#"+t.path),console.log(t.path,t),"/"!=t.path&&"/clock"!=t.path&&"/user"!=t.path?this.istab=!1:this.istab=!0}}},I=S,T=(a("034f"),Object(w["a"])(I,v,g,!1,null,null,null)),O=T.exports,D=a("8c4f"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"banner swipslider",attrs:{id:"banner"}},[a("slider",{ref:"slider",attrs:{options:t.sliderinit}},t._l(t.someList,function(t,e){return a("slideritem",{key:e,style:t.style})}),1)],1),a("screen",{attrs:{orders:t.orders}}),a("pool",{attrs:{pools:t.pools}}),a("p",{staticClass:"luck"},[a("router-link",{staticStyle:{"text-decoration":"underline"},attrs:{to:"/history",tag:"span"}},[t._v("往期幸运者")])],1),a("rules"),t._m(0),a("van-popup",{staticClass:"dream",model:{value:t.isdaward,callback:function(e){t.isdaward=e},expression:"isdaward"}},[a("div",{staticClass:"award"},[a("div",{staticClass:"main"},[a("p",{staticClass:"title"},[t._v("幸运提示")]),a("p",{staticClass:"msg"},[t._v("\n          恭喜您成为梦想互助20190312期幸运者，请您在7个工作日内完善梦想并实名认证，通过审核后3个工作日内给您颁发梦想互助金！\n        ")]),a("div",{staticClass:"fbtn"},[a("van-button",{attrs:{type:"primary",size:"large",round:""}},[t._v("完善梦想")])],1)])])])],1)},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"icon_notice"},[a("div",{staticClass:"left"}),a("div",{staticClass:"right"},[a("div",{staticClass:"text ntext",staticStyle:{"font-size":"6px"}},[t._v("0")])])])}],M=a("b190"),P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"screen"},[a("div",{staticClass:"warp"},[a("van-col",{attrs:{span:"12"}},[a("van-icon",{staticClass:"headicon",attrs:{name:t.info.headicon}}),a("span",{staticClass:"nickname"},[t._v(t._s(t.info.nickname))])],1),a("van-col",{staticStyle:{"text-align":"right","font-size":"0.26rem"},attrs:{span:"12"}},[t._v("\n            "+t._s(t.info.message)+"\n        ")])],1)])},B=[],E={name:"screen",data:function(){return{buyinfo:"",info:""}},props:{orders:{type:[Array,Object],default:function(){return[]}}},created:function(){this.check()},methods:{interval:function(){var t=this,e=t.buyinfo.shift(),a=(new Date).getTime()/1e3,n=DescriptionTime(a-parseInt(e.ptime));if("STANDARD"==e.ptype)var o="小梦想";else if("TRADE"==e.ptype)o="小生意";e.message=n+"前购买了"+e.dcount+"份"+o,t.buyinfo.push(e),t.info=e,setInterval(function(){if(""!=t.buyinfo){var e=t.buyinfo.shift(),a=(new Date).getTime()/1e3,n=DescriptionTime(a-parseInt(e.ptime));if("STANDARD"==e.ptype)var o="小梦想";else if("TRADE"==e.ptype)o="小生意";e.message=n+"前购买了"+e.dcount+"份"+o,t.buyinfo.push(e),t.info=e}},3e3)},check:function(){var t=this,e=setInterval(function(){""!=t.buyinfo&&(t.interval(),clearInterval(e))},50)}},watch:{orders:function(t){this.buyinfo=t}}},R=E,z=(a("afe2"),Object(w["a"])(R,P,B,!1,null,"ba5db5f2",null)),N=z.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pool"},[a("van-tabs",{attrs:{swipeable:"","title-active-color":"#00d094",color:"#00d094","line-width":"20","line-height":"1"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tab",{staticClass:"dream",attrs:{title:"梦想互助"}},[a("div",{staticClass:"main"},[a("h3",{staticClass:"title"},[t._v(t._s(""!=t.mainpool?t.mainpool.ptitle:""))]),a("div",{staticClass:"progress"},[a("yd-progressbar",{attrs:{progress:""==t.mainpool?0:t.mainpool.cbill/t.mainpool.tbill,"trail-width":"4","stroke-color":"#edf0f5","trail-color":"#ffc054"}},[a("van-col",{staticClass:"timeouts",attrs:{span:"24"}},[a("van-icon",{staticClass:"icon_clock",attrs:{name:"clock-o"}}),a("span",[t._v(t._s(""==t.timeout?"":t.timeout))])],1),a("van-col",{staticClass:"current",attrs:{span:"24"}},[a("span",{staticClass:"money"},[t._v(t._s(""!=t.mainpool?t.mainpool.realBill+t.mainpool.realUnit:""))])]),a("van-col",{staticClass:"text",attrs:{span:"24"}},[a("span",[t._v(t._s(""==t.mainpool?"":t.mainpool.billHint))])])],1)],1),a("div",{staticClass:"poolInfo"},[a("van-col",{attrs:{span:"12"}},[a("p",[t._v(t._s(""==t.mainpool?"":t.mainpool.rtbillValue+t.mainpool.rtbillUnit))]),a("p",[t._v("互助目标")])]),a("van-col",{staticStyle:{"text-align":"right"},attrs:{span:"12"}},[a("p",[t._v(t._s(""==t.mainpool?"":t.mainpool.rubill+t.mainpool.rubillUnit))]),a("p",[t._v("价格")])])],1),a("div",{staticClass:"buybtn"},[a("van-button",{attrs:{type:"primary",size:"large",round:""},on:{click:function(e){return t.join("dream")}}},[t._v("参与互助")])],1)]),a("p",{staticClass:"tip"},[t._v("每个人支付少量互助金，从中随机产生1名幸运者获得累计互助金启动梦想！")])]),a("van-tab",{staticClass:"trade",attrs:{title:"生意互助"}},[a("div",{staticClass:"main"},[a("div",{staticClass:"banner",style:{background:""==t.trade?"":"url("+t.trade.trade.bannerUrl+") no-repeat center center / 6.8rem 3.86rem"}},[a("p",[a("span",[t._v(t._s(""==t.trade?"":t.trade.ptitle))]),a("span",[t._v("生意详情>>")])])]),a("div",{staticClass:"tradeInfo"},[a("p",[t._v(t._s(""==t.trade?"":t.trade.billHint)),a("span",[t._v(t._s(""==t.trade?"":t.trade.realBill+t.trade.realUnit))])]),a("div",{staticClass:"progress"},[a("yd-progressbar",{staticStyle:{height:"0.3rem"},attrs:{type:"line",progress:""==t.trade?0:t.trade.cbill/t.trade.tbill,"trail-width":"4","stroke-color":"#edf0f5","trail-color":"#ffc054"}})],1),a("div",{staticClass:"info"},[a("van-col",{attrs:{span:"12"}},[a("p",[t._v(t._s(""==t.trade?"":t.trade.rtbillValue+t.trade.rtbillUnit))]),a("p",[t._v("互助目标(不满不开)")])]),a("van-col",{attrs:{span:"12"}},[a("p",[t._v(t._s(""==t.trade?"":t.trade.rubillValue+t.trade.rubillUnit))]),a("p",[t._v("价格")])])],1),a("div",{staticClass:"tradeBtn"},[a("van-button",{attrs:{type:"primary",size:"large",round:""},on:{click:function(e){return t.join("trade")}}},[t._v("参与互助")])],1)])]),a("p",{staticClass:"tip"},[t._v("没人支付少量互助金，从中随机产生1名幸运者成为指定目标的免费获得者")])])],1)],1)},q=[],J={name:"pool",data:function(){return{mainpool:"",trade:"",active:0,timeout:this.timeout()}},props:{pools:{type:[Array,Object],default:function(){return[]}}},methods:{timeout:function(){var t=this;setInterval(function(){var e=parseInt((new Date).getTime()/1e3),a=parseInt(t.mainpool.ptime)+parseInt(t.mainpool.duration)-e,n=Math.floor(a/3600)>=10?Math.floor(a/3600):"0"+Math.floor(a/3600),o=Math.floor(a/60%60)>=10?Math.floor(a/60%60):"0"+Math.floor(a/60%60),i=Math.floor(a%60)>=10?Math.floor(a%60):"0"+Math.floor(a%60);t.timeout=n+":"+o+":"+i},1e3)},join:function(t){this.Buy(this,t)},Buy:function(t,e){var a="dream"==e?t.mainpool.pid:t.trade.pid;TD_Request("ds","buy",{uid:t.$store.state.uid,pid:a},function(a,n){console.log(n),n.actions.hasOwnProperty("editdream")?t.$dialog.confirm({title:"添加梦想",message:"您还没有添加梦想，添加梦想后即可参与互助，是否前往添加",confirmButtonText:"去添加",confirmButtonColor:"#00d094"}).then(function(){console.error("跳转小梦想添加页面")}):(t.$store.commit("actions",n.actions),console.error("梦想互助支付页面"),t.$router.push("/payInfo/"+e))},function(e,a){console.log(a),11==e&&t.$dialog.alert({title:"绑定手机",message:"您尚未绑定手机，绑定手机后就可以参与互助啦！",confirmButtonText:"去绑定",confirmButtonColor:"#00d094"}).thne(function(){console.error("跳转手机绑定页面")})})}},watch:{pools:function(t){console.log(this.$store.state),console.log(t),0==t[0].code?(this.trade=t[0].maintrade,this.mainpool=t[0].mainpool):1==t[0].code?(this.trade=t[0].maintrade,$(".dream").html(t[0].context).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"})):2==t[0].code?(this.mainpool=t[0].mainpool,$(".trade").html(t[0].context).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"})):-1==t[0].code&&($(".dream").html(t[0].tcontext).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"}),$(".trade").html(t[0].context).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"})),console.log(this.trade),console.log(this.mainpool)}}},L=J,V=(a("8037"),Object(w["a"])(L,U,q,!1,null,"e52a6a56",null)),W=V.exports,H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rules"},[t._m(0),a("div",{staticClass:"steps"},[a("van-col",{attrs:{span:"6"}},[a("van-icon",{attrs:{name:"http://tdream.antit.top/image/active_index1.png"}}),a("p",[t._v("多人互助")])],1),a("van-col",{attrs:{span:"6"}},[a("van-icon",{attrs:{name:"http://tdream.antit.top/image/avtive_index2.png"}}),a("p",[t._v("1人幸运")])],1),a("van-col",{attrs:{span:"6"}},[a("van-icon",{attrs:{name:"http://tdream.antit.top/image/avtive_index3.png"}}),a("p",[t._v("启动梦想")])],1),a("van-col",{attrs:{span:"6"}},[a("van-icon",{attrs:{name:"http://tdream.antit.top/image/active_index4.png"}}),a("p",[t._v("梦想报道")])],1)],1),a("div",{staticClass:"info"},[a("div",{staticClass:"rule"},[a("p",[a("van-icon",{attrs:{name:"http://tdream.antit.top/image/index1.png"}}),a("span",[t._v("多人互助 — — 参与互助每个人支付少量互助金")])],1),a("p",[a("van-icon",{attrs:{name:"http://tdream.antit.top/image/index2.png"}}),a("span",[t._v("1人幸运 — — 公平随机产生1名幸运者")])],1),a("p",[a("van-icon",{attrs:{name:"http://tdream.antit.top/image/index3.png"}}),a("span",[t._v("启动梦想 — — 幸运者得到累计互助金启动梦想")])],1),a("p",[a("van-icon",{attrs:{name:"http://tdream.antit.top/image/index4.png"}}),a("span",[t._v("梦想报道 — — 梦想执行跟踪报道")])],1),t._m(1)])])])},G=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("div",{staticClass:"line left"}),a("div",{staticClass:"circle left"}),a("p",[t._v("小梦想互助规则")]),a("div",{staticClass:"circle right"}),a("div",{staticClass:"line right"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"more"},[a("span",[t._v("了解更多")])])}],F={name:"rules"},K=F,Q=(a("f399"),Object(w["a"])(K,H,G,!1,null,"649c2ce4",null)),X=Q.exports,Y={name:"home",data:function(){return{sliderinit:{currentPage:0,autoplay:3e3,loop:!0,slidesToScroll:1,duration:300},someList:[{style:"background:url(http://tdream.antit.top/image/banner.png) no-repeat center center / 6.8rem 2rem"},{style:"background:url(https://tdream.antit.top/image/Red_SendPack.jpg) no-repeat center center / 6.8rem 2rem;border-radius:0.2rem"}],userInfo:"",orders:"",pools:"",isdaward:!0}},components:{slider:M["slider"],slideritem:M["slideritem"],screen:N,pool:W,rules:X},created:function(){ExistStorage("userInfo")?this.Register(this,JSON.parse(GetStorage("userInfo"))):window.location.href="http://tinydream.ivkcld.cn/TInydreamWeb/dream"},methods:{Register:function(t,e){TD_Request("us","enter",{uid:e.openid,nickname:e.nickname,headicon:e.headimgurl},function(e,a){if(console.log(a),t.$store.commit("uid",JSON.parse(GetStorage("userInfo")).openid),t.orders=a.buyinfo,0!=a.mainpool.length&&DreamPoolAnalysis(a.mainpool),0!=a.maintrade.length&&DreamPoolAnalysis(a.maintrade),0==a.mainpool.length&&0!=a.maintrade.length)var n=[{code:1,mainpool:a.mainpool,context:"暂无更多梦想池",maintrade:a.maintrade}];else if(0!=a.mainpool.length&&0==a.maintrade.length)n=[{code:2,mainpool:a.mainpool,context:"暂无更多项目",maintrade:a.maintrade}];else if(0==a.mainpool.length&&0==a.maintrade.length)n=[{code:-1,mainpool:a.mainpool,context:"暂无更多项目",tcontext:"暂无更多梦想池",maintrade:a.maintrade}];else n=[{code:0,mainpool:a.mainpool,context:"成功",maintrade:a.maintrade}];t.pools=n},function(t,e){console.log(e)})}}},Z=Y,tt=(a("76be"),Object(w["a"])(Z,j,A,!1,null,"45a3e2f2",null)),et=tt.exports,at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"payInfo"},[a("Info",{attrs:{pool:t.pool}})],1)},nt=[],ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"info"},[a("h3",{staticClass:"title"},[t._v(t._s(""==t.pool?"":t.pool.ptitle))]),a("div",{staticClass:"progress"},[a("yd-progressbar",{attrs:{progress:""==t.pool?0:t.pool.cbill/t.pool.tbill,"trail-width":"4","stroke-color":"#edf0f5","trail-color":"#ffc054"}},[a("van-col",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"timeouts",attrs:{span:"24"}},[a("van-icon",{staticClass:"icon_clock",attrs:{name:"clock-o"}}),a("span",[t._v(t._s(""==t.timeout?"":t.timeout))])],1),a("van-col",{staticClass:"current",attrs:{span:"24"}},[a("span",{staticClass:"money"},[t._v(t._s(""!=t.pool?t.pool.realBill+t.pool.realUnit:""))])]),a("van-col",{staticClass:"text",attrs:{span:"24"}},[a("span",[t._v(t._s(""==t.pool?"":t.pool.billHint))])])],1)],1),a("div",{staticClass:"payinfo"},[a("van-row",{staticStyle:{"margin-bottom":"0.56rem"}},[a("van-col",{attrs:{span:"12"}},[a("span",{staticClass:"left"},[t._v("目标金额")])]),a("van-col",{staticClass:"right",attrs:{span:"12"}},[a("span",{staticClass:"right tbill"},[t._v(t._s(""==t.pool?"":t.pool.rtbillValue+t.pool.rtbillUnit))])])],1),a("van-row",{staticStyle:{"margin-bottom":"0.56rem"}},[a("van-col",{staticStyle:{"text-align":"left"},attrs:{span:"12"}},[a("span",{staticClass:"left"},[t._v("份数")])]),a("van-col",{staticClass:"right",attrs:{span:"12"}},[a("p",[a("span",{staticClass:"add btn",on:{click:t.add}},[t._v("＋")]),a("span",{staticStyle:{margin:"0 0.3rem","font-size":"0.3rem",color:"#333"}},[t._v(t._s(t.count))]),a("span",{staticClass:"incre btn",on:{click:t.incre}},[t._v("－")])])])],1),a("van-row",{staticStyle:{"margin-bottom":"0.56rem"}},[a("van-col",{attrs:{span:"12"}},[a("span",{staticClass:"left"},[t._v("选择梦想")])]),a("van-col",{staticClass:"right",attrs:{span:"12"}},[a("span",{staticClass:"right"},[a("span",{staticStyle:{"font-size":"0.3rem",color:"#333"},attrs:{id:"dream","data-did":t.did}},[t._v(t._s(t.dream))]),t.isArrow?a("van-icon",{staticClass:"arrow",attrs:{name:"arrow"},on:{click:t.select}}):t._e()],1)])],1),a("van-row",[a("van-col",{staticStyle:{"text-align":"center",color:"#999","margin-bottom":"0.2rem"},attrs:{span:"24"}},[t._v("\n                "+t._s(""==t.pool?"":t.pool.rubillValue+t.pool.rubillUnit+" 结算")+"\n                "),a("span",{staticStyle:{"font-size":"0.36rem",color:"#00d094"}},[t._v(t._s(""==t.count?"":t.pool.rubillValue*t.count+"元"))])])],1),a("van-button",{attrs:{type:"primary",round:"",size:"large"},on:{click:function(e){return t.payment(t.count)}}},[t._v("立即支付")])],1),a("van-actionsheet",{attrs:{actions:t.actions,"cancel-text":"取消"},on:{select:t.onSelect,cancel:t.onCancel},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}})],1)},it=[],st={name:"info",data:function(){return{isshow:!0,timeout:this.timeout(),isArrow:!0,dream_context:"选择梦想",dream:"",did:"",count:1,pay:"",show:!1,actions:[]}},created:function(){"dream"==this.$route.params.type?this.isshow=!0:"trade"==this.$route.params.type&&(this.isshow=!1,$(".info .progress .current").css("margin-top",0))},mounted:function(){this.selectDream(this,this.$route.params.type)},methods:{timeout:function(){var t=this;setInterval(function(){var e=parseInt((new Date).getTime()/1e3),a=parseInt(t.pool.ptime)+parseInt(t.pool.duration)-e,n=Math.floor(a/3600)>=10?Math.floor(a/3600):"0"+Math.floor(a/3600),o=Math.floor(a/60%60)>=10?Math.floor(a/60%60):"0"+Math.floor(a/60%60),i=Math.floor(a%60)>=10?Math.floor(a%60):"0"+Math.floor(a%60);t.timeout=n+":"+o+":"+i},1e3)},selectDream:function(t,e){if("dream"==e){var a=t.$store.state.actions.buy.dream.did;this.dream_context="选择梦想",this.isArrow=!0}else if("trade"==e){a=t.$store.state.actions.buy.dream.tid;this.dream_context="本期项目",this.isArrow=!1}TD_Request("dr","gdream",{uid:t.$store.state.uid,did:a},function(a,n){console.log(n),t.did="dream"==e?n.dream.did:n.dream.tid,t.dream=n.dream.title},function(t,e){console.log(e)})},add:function(){this.count>=this.$store.state.actions.buy.dayLim?this.count=this.$store.state.actions.buy.dayLim:this.count++},incre:function(){this.count<=0?this.count=1:this.count--},select:function(){this.seldream(this)},seldream:function(t){TD_Request("dr","dlist",{uid:t.$store.state.uid},function(e,a){console.log(a);var n=[];$.each(a.dreams,function(t,e){"SUBMIT"!=e.state&&"FAILD"!=e.state||n.push({name:e.title,value:e.did})}),t.actions=n,t.show=!0},function(t,e){console.log(e)})},onSelect:function(t,e){console.log(t),this.dream=t.name,this.did=t.value,this.show=!1},payment:function(t){this.wxweb(this,this.pool.rubillValue*t*100)},wxweb:function(t,e){e=1;TD_Request("ds","wxpayweb",{oid:t.pool.order.oid,bill:e,uid:t.$store.state.uid},function(a,n){console.log(n),t.Wake(t,n,e)},function(t,e){console.log(e)})},Wake:function(t,e,a){WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:e.appId,timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:e.package,signType:e.signType,paySign:e.paySign},function(e){"get_brand_wcpay_request:ok"==e.err_msg?t.success(t,a):"get_brand_wcpay_request:cancel"==e.err_msg&&t.$toast.fail("支付取消")})},success:function(t,e){TD_Request("ds","pay",{uid:t.$store.state.uid,oid:t.pool.order.oid,bill:e,pcount:t.count,action:JSON.stringify(t.pool.order),did:$("#dream").attr("data-did")},function(t,e){alert(JSON.stringify(e))},function(a,n){alert("OID:"+t.pool.order.oid),alert("BILL:"+e),alert("PCOUNT:"+t.count),alert("ACTION:"+JSON.stringify(t.pool.order)),alert("DID:"+$("#dream").attr("data-did")),alert(JSON.stringify(n))})}},props:{pool:{type:[Array,Object],default:function(){return""}}},watch:{pool:function(t){console.log(t)}}},rt=st,lt=(a("2da2"),Object(w["a"])(rt,ot,it,!1,null,"441b8f71",null)),ct=lt.exports,pt={name:"payInfo",data:function(){return{pool:""}},components:{Info:ct},created:function(){null==this.$store.state.actions||""==this.$store.state.actions?($("body #app").html(""),this.$router.push("/")):("dream"==this.$route.params.type?console.log("小梦想互助"):"trade"==this.$route.params.type&&console.log("小生意互助"),this.ord(this))},methods:{ord:function(t){TD_Request("ds","ord",{action:JSON.stringify(t.$store.state.actions)},function(e,a){console.log(a),t.pool=DreamPoolAnalysis(a.pool),t.pool.order=a.actions.pay},function(e,a){17==e&&t.$router.push("/"),console.log(a)})}}},ut=pt,dt=(a("7bd9"),Object(w["a"])(ut,at,nt,!1,null,"2e6c4dc3",null)),mt=dt.exports;h["a"].use(D["a"]);var ft=new D["a"]({base:"/TinydreamWeb/dream/dist/",routes:[{path:"/",name:"home",components:{default:et}},{path:"/payinfo/:type",name:"payInfo",components:{payInfo:mt}},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]}),ht=a("2f625");h["a"].use(ht["a"]);var vt=new ht["a"].Store({state:{uid:"",actions:""},mutations:{uid:function(t,e){t.uid=e},actions:function(t,e){t.actions=e}}}),gt=a("df72"),bt=a("6ed7");h["a"].use(m["a"]).use(f["a"]),h["a"].use(p["a"]).use(u["a"]).use(d["a"]),h["a"].use(l["a"]).use(c["a"]),h["a"].use(r["a"]),h["a"].use(s["a"]),h["a"].use(i["a"]),h["a"].use(o["a"]),h["a"].use(n["a"]),h["a"].component(gt["ProgressBar"].name,gt["ProgressBar"]),h["a"].component(bt["Step"].name,bt["Step"]),h["a"].component(bt["StepItem"].name,bt["StepItem"]),h["a"].config.productionTip=!1,new h["a"]({store:vt,router:ft,render:function(t){return t(O)}}).$mount("#app")},"64a9":function(t,e,a){},"69d4":function(t,e,a){},"76be":function(t,e,a){"use strict";var n=a("2f62"),o=a.n(n);o.a},"7bd9":function(t,e,a){"use strict";var n=a("69d4"),o=a.n(n);o.a},8037:function(t,e,a){"use strict";var n=a("d7a8"),o=a.n(n);o.a},"8f41":function(t,e,a){},afe2:function(t,e,a){"use strict";var n=a("bcf9"),o=a.n(n);o.a},bcf9:function(t,e,a){},d7a8:function(t,e,a){},ed44:function(t,e,a){},f399:function(t,e,a){"use strict";var n=a("8f41"),o=a.n(n);o.a}});
//# sourceMappingURL=app.3616938f.js.map