(function(t){function a(a){for(var n,s,r=a[0],l=a[1],c=a[2],p=0,d=[];p<r.length;p++)s=r[p],o[s]&&d.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(a);while(d.length)d.shift()();return i.push.apply(i,c||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],n=!0,s=1;s<e.length;s++){var l=e[s];0!==o[l]&&(n=!1)}n&&(i.splice(a--,1),t=r(r.s=e[0]))}return t}var n={},o={app:0},i=[];function s(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"833608e1"}[t]+".js"}function r(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.e=function(t){var a=[],e=o[t];if(0!==e)if(e)a.push(e[2]);else{var n=new Promise(function(a,n){e=o[t]=[a,n]});a.push(e[2]=n);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=s(t),i=function(a){l.onerror=l.onload=null,clearTimeout(c);var e=o[t];if(0!==e){if(e){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src,s=new Error("Loading chunk "+t+" failed.\n("+n+": "+i+")");s.type=n,s.request=i,e[1](s)}o[t]=void 0}};var c=setTimeout(function(){i({type:"timeout",target:l})},12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(a)},r.m=t,r.c=n,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)r.d(e,n,function(a){return t[a]}.bind(null,n));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var p=0;p<l.length;p++)a(l[p]);var u=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"010b":function(t,a,e){"use strict";var n=e("320c"),o=e.n(n);o.a},"034f":function(t,a,e){"use strict";var n=e("64a9"),o=e.n(n);o.a},"2f62":function(t,a,e){},"320c":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("7f7f"),e("c194");var n=e("7744"),o=(e("e17f"),e("2241")),i=(e("8a58"),e("e41f")),s=(e("66b9"),e("b650")),r=(e("bda7"),e("5e46")),l=(e("da3c"),e("0b33")),c=(e("4d48"),e("d1e1")),p=(e("81e6"),e("9ffb")),u=(e("c3a6"),e("ad06")),d=(e("537a"),e("ac28")),m=(e("a52c"),e("2ed4")),f=(e("cadf"),e("551c"),e("f751"),e("097d"),e("2b0e")),v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view"),e("router-view",{attrs:{name:"payInfo"}}),t.istab?e("tab-bar"):t._e()],1)},h=[],g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"tabbar"},[e("van-tabbar",{attrs:{"active-color":"#00d094"},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},t._l(t.tabbar,function(a,n){return e("van-tabbar-item",{key:n,attrs:{to:a.path},scopedSlots:t._u([{key:"icon",fn:function(t){return e("img",{attrs:{src:t.active?a.active:a.normal}})}}],null,!0)},[e("span",[t._v(t._s(a.title))])])}),1)],1)},b=[],_={name:"tabbar",data:function(){return{active:0,tabbar:[{path:"/",title:"梦想互助",normal:"http://tdream.antit.top/image/nav_index_disable.png",active:"http://tdream.antit.top/image/nav_index.png"},{path:"/clock",title:"行动打卡",normal:"https://tdream.antit.top/ActiveSignInOff.png",active:"https://tdream.antit.top/ActiveSignInOk.png"},{path:"/user",title:"个人中心",normal:"http://tdream.antit.top/image/nav_owner_disable.png",active:"http://tdream.antit.top/image/nav_owner.png"}]}},created:function(){console.log(this.$route.path),"/"==this.$route.path?this.active=0:"/clock"==this.$route.path?this.active=1:"/user"==this.$route.path&&(this.active=2)},watch:{$route:function(t,a){"/"==t.path?this.active=0:"/clock"==t.path?this.active=1:"/user"==t.path&&(this.active=2)}}},y=_,C=e("2877"),w=Object(C["a"])(y,g,b,!1,null,null,null),x=w.exports,k={name:"App",data:function(){return{istab:!0}},created:function(){"/"!=this.$route.path&&"/clock"!=this.$route.path&&"/user"!=this.$route.path?this.istab=!1:this.istab=!0},methods:{},components:{TabBar:x},watch:{$route:function(t,a){/iPhone|mac|iPod|iPad/i.test(navigator.userAgent)&&(location.href="http://tinydream.ivkcld.cn/TinydreamWeb/dream/dist/#"+t.path),console.log(t.path,t),"/"!=t.path&&"/clock"!=t.path&&"/user"!=t.path?this.istab=!1:this.istab=!0}}},S=k,I=(e("034f"),Object(C["a"])(S,v,h,!1,null,null,null)),O=I.exports,T=e("8c4f"),j=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"home"},[e("div",{staticClass:"banner swipslider",attrs:{id:"banner"}},[e("slider",{ref:"slider",attrs:{options:t.sliderinit}},t._l(t.someList,function(t,a){return e("slideritem",{key:a,style:t.style})}),1)],1),e("screen",{attrs:{orders:t.orders}}),e("pool",{attrs:{pools:t.pools}}),e("p",{staticClass:"luck"},[e("router-link",{staticStyle:{"text-decoration":"underline"},attrs:{to:"/history",tag:"span"}},[t._v("往期幸运者")])],1),e("rules"),t._m(0),e("van-popup",{staticClass:"dream",model:{value:t.isdaward,callback:function(a){t.isdaward=a},expression:"isdaward"}},[e("div",{staticClass:"award"},[e("div",{staticClass:"main"},[e("p",{staticClass:"title"},[t._v("幸运提示")]),e("p",{staticClass:"msg"},[t._v("\n          恭喜您成为梦想互助20190312期幸运者，请您在7个工作日内完善梦想并实名认证，通过审核后3个工作日内给您颁发梦想互助金！\n        ")]),e("div",{staticClass:"fbtn"},[e("van-button",{attrs:{type:"primary",size:"large",round:""}},[t._v("完善梦想")])],1)])])])],1)},M=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"icon_notice"},[e("div",{staticClass:"left"}),e("div",{staticClass:"right"},[e("div",{staticClass:"text ntext",staticStyle:{"font-size":"6px"}},[t._v("0")])])])}],D=e("b190"),P=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"screen"},[e("div",{staticClass:"warp"},[e("van-col",{attrs:{span:"12"}},[e("van-icon",{staticClass:"headicon",attrs:{name:t.info.headicon}}),e("span",{staticClass:"nickname"},[t._v(t._s(t.info.nickname))])],1),e("van-col",{staticStyle:{"text-align":"right","font-size":"0.26rem"},attrs:{span:"12"}},[t._v("\n            "+t._s(t.info.message)+"\n        ")])],1)])},A=[],E={name:"screen",data:function(){return{buyinfo:"",info:""}},props:{orders:{type:[Array,Object],default:function(){return[]}}},created:function(){this.check()},methods:{interval:function(){var t=this,a=t.buyinfo.shift(),e=(new Date).getTime()/1e3,n=DescriptionTime(e-parseInt(a.ptime));if("STANDARD"==a.ptype)var o="小梦想";else if("TRADE"==a.ptype)o="小生意";a.message=n+"前购买了"+a.dcount+"份"+o,t.buyinfo.push(a),t.info=a,setInterval(function(){if(""!=t.buyinfo){var a=t.buyinfo.shift(),e=(new Date).getTime()/1e3,n=DescriptionTime(e-parseInt(a.ptime));if("STANDARD"==a.ptype)var o="小梦想";else if("TRADE"==a.ptype)o="小生意";a.message=n+"前购买了"+a.dcount+"份"+o,t.buyinfo.push(a),t.info=a}},3e3)},check:function(){var t=this,a=setInterval(function(){""!=t.buyinfo&&(t.interval(),clearInterval(a))},50)}},watch:{orders:function(t){this.buyinfo=t}}},B=E,R=(e("afe2"),Object(C["a"])(B,P,A,!1,null,"ba5db5f2",null)),z=R.exports,U=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"pool"},[e("van-tabs",{attrs:{swipeable:"","title-active-color":"#00d094",color:"#00d094","line-width":"20","line-height":"1"},model:{value:t.active,callback:function(a){t.active=a},expression:"active"}},[e("van-tab",{staticClass:"dream",attrs:{title:"梦想互助"}},[e("div",{staticClass:"main"},[e("h3",{staticClass:"title"},[t._v(t._s(""!=t.mainpool?t.mainpool.ptitle:""))]),e("div",{staticClass:"progress"},[e("yd-progressbar",{attrs:{progress:""==t.mainpool?0:t.mainpool.cbill/t.mainpool.tbill,"trail-width":"4","stroke-color":"#edf0f5","trail-color":"#ffc054"}},[e("van-col",{staticClass:"timeouts",attrs:{span:"24"}},[e("van-icon",{staticClass:"icon_clock",attrs:{name:"clock-o"}}),e("span",[t._v(t._s(""==t.timeout?"":t.timeout))])],1),e("van-col",{staticClass:"current",attrs:{span:"24"}},[e("span",{staticClass:"money"},[t._v(t._s(""!=t.mainpool?t.mainpool.realBill+t.mainpool.realUnit:""))])]),e("van-col",{staticClass:"text",attrs:{span:"24"}},[e("span",[t._v(t._s(""==t.mainpool?"":t.mainpool.billHint))])])],1)],1),e("div",{staticClass:"poolInfo"},[e("van-col",{attrs:{span:"12"}},[e("p",[t._v(t._s(""==t.mainpool?"":t.mainpool.rtbillValue+t.mainpool.rtbillUnit))]),e("p",[t._v("互助目标")])]),e("van-col",{staticStyle:{"text-align":"right"},attrs:{span:"12"}},[e("p",[t._v(t._s(""==t.mainpool?"":t.mainpool.rubill+t.mainpool.rubillUnit))]),e("p",[t._v("价格")])])],1),e("div",{staticClass:"buybtn"},[e("van-button",{attrs:{type:"primary",size:"large",round:""},on:{click:function(a){return t.join("dream")}}},[t._v("参与互助")])],1)]),e("p",{staticClass:"tip"},[t._v("每个人支付少量互助金，从中随机产生1名幸运者获得累计互助金启动梦想！")])]),e("van-tab",{staticClass:"trade",attrs:{title:"生意互助"}},[e("div",{staticClass:"main"},[e("div",{staticClass:"banner",style:{background:""==t.trade?"":"url("+t.trade.trade.bannerUrl+") no-repeat center center / 6.8rem 3.86rem"}},[e("p",[e("span",[t._v(t._s(""==t.trade?"":t.trade.ptitle))]),e("span",[t._v("生意详情>>")])])]),e("div",{staticClass:"tradeInfo"},[e("p",[t._v(t._s(""==t.trade?"":t.trade.billHint)),e("span",[t._v(t._s(""==t.trade?"":t.trade.realBill+t.trade.realUnit))])]),e("div",{staticClass:"progress"},[e("yd-progressbar",{staticStyle:{height:"0.3rem"},attrs:{type:"line",progress:""==t.trade?0:t.trade.cbill/t.trade.tbill,"trail-width":"4","stroke-color":"#edf0f5","trail-color":"#ffc054"}})],1),e("div",{staticClass:"info"},[e("van-col",{attrs:{span:"12"}},[e("p",[t._v(t._s(""==t.trade?"":t.trade.rtbillValue+t.trade.rtbillUnit))]),e("p",[t._v("互助目标(不满不开)")])]),e("van-col",{attrs:{span:"12"}},[e("p",[t._v(t._s(""==t.trade?"":t.trade.rubillValue+t.trade.rubillUnit))]),e("p",[t._v("价格")])])],1),e("div",{staticClass:"tradeBtn"},[e("van-button",{attrs:{type:"primary",size:"large",round:""},on:{click:function(a){return t.join("trade")}}},[t._v("参与互助")])],1)])]),e("p",{staticClass:"tip"},[t._v("没人支付少量互助金，从中随机产生1名幸运者成为指定目标的免费获得者")])])],1)],1)},N=[],q={name:"pool",data:function(){return{mainpool:"",trade:"",active:0,timeout:this.timeout()}},props:{pools:{type:[Array,Object],default:function(){return[]}}},methods:{timeout:function(){var t=this;setInterval(function(){var a=parseInt((new Date).getTime()/1e3),e=parseInt(t.mainpool.ptime)+parseInt(t.mainpool.duration)-a,n=Math.floor(e/3600)>=10?Math.floor(e/3600):"0"+Math.floor(e/3600),o=Math.floor(e/60%60)>=10?Math.floor(e/60%60):"0"+Math.floor(e/60%60),i=Math.floor(e%60)>=10?Math.floor(e%60):"0"+Math.floor(e%60);t.timeout=n+":"+o+":"+i},1e3)},join:function(t){this.Buy(this,t)},Buy:function(t,a){var e="dream"==a?t.mainpool.pid:t.trade.pid;TD_Request("ds","buy",{uid:t.$store.state.uid,pid:e},function(e,n){console.log(n),n.actions.hasOwnProperty("editdream")?t.$dialog.confirm({title:"添加梦想",message:"您还没有添加梦想，添加梦想后即可参与互助，是否前往添加",confirmButtonText:"去添加",confirmButtonColor:"#00d094"}).then(function(){console.error("跳转小梦想添加页面")}):(t.$store.commit("actions",n.actions),console.error("梦想互助支付页面"),t.$router.push("/payInfo/"+a))},function(a,e){console.log(e),11==a&&t.$dialog.alert({title:"绑定手机",message:"您尚未绑定手机，绑定手机后就可以参与互助啦！",confirmButtonText:"去绑定",confirmButtonColor:"#00d094"}).thne(function(){console.error("跳转手机绑定页面")})})}},watch:{pools:function(t){console.log(this.$store.state),console.log(t),0==t[0].code?(this.trade=t[0].maintrade,this.mainpool=t[0].mainpool):1==t[0].code?(this.trade=t[0].maintrade,$(".dream").html(t[0].context).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"})):2==t[0].code?(this.mainpool=t[0].mainpool,$(".trade").html(t[0].context).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"})):-1==t[0].code&&($(".dream").html(t[0].tcontext).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"}),$(".trade").html(t[0].context).css({color:"#999","font-size":"0.26rem","line-height":"1.5rem"})),console.log(this.trade),console.log(this.mainpool)}}},J=q,V=(e("8037"),Object(C["a"])(J,U,N,!1,null,"e52a6a56",null)),H=V.exports,L=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"rules"},[t._m(0),e("div",{staticClass:"steps"},[e("van-col",{attrs:{span:"6"}},[e("van-icon",{attrs:{name:"http://tdream.antit.top/image/active_index1.png"}}),e("p",[t._v("多人互助")])],1),e("van-col",{attrs:{span:"6"}},[e("van-icon",{attrs:{name:"http://tdream.antit.top/image/avtive_index2.png"}}),e("p",[t._v("1人幸运")])],1),e("van-col",{attrs:{span:"6"}},[e("van-icon",{attrs:{name:"http://tdream.antit.top/image/avtive_index3.png"}}),e("p",[t._v("启动梦想")])],1),e("van-col",{attrs:{span:"6"}},[e("van-icon",{attrs:{name:"http://tdream.antit.top/image/active_index4.png"}}),e("p",[t._v("梦想报道")])],1)],1),e("div",{staticClass:"info"},[e("div",{staticClass:"rule"},[e("p",[e("van-icon",{attrs:{name:"http://tdream.antit.top/image/index1.png"}}),e("span",[t._v("多人互助 — — 参与互助每个人支付少量互助金")])],1),e("p",[e("van-icon",{attrs:{name:"http://tdream.antit.top/image/index2.png"}}),e("span",[t._v("1人幸运 — — 公平随机产生1名幸运者")])],1),e("p",[e("van-icon",{attrs:{name:"http://tdream.antit.top/image/index3.png"}}),e("span",[t._v("启动梦想 — — 幸运者得到累计互助金启动梦想")])],1),e("p",[e("van-icon",{attrs:{name:"http://tdream.antit.top/image/index4.png"}}),e("span",[t._v("梦想报道 — — 梦想执行跟踪报道")])],1),t._m(1)])])])},W=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"title"},[e("div",{staticClass:"line left"}),e("div",{staticClass:"circle left"}),e("p",[t._v("小梦想互助规则")]),e("div",{staticClass:"circle right"}),e("div",{staticClass:"line right"})])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",{staticClass:"more"},[e("span",[t._v("了解更多")])])}],G={name:"rules"},F=G,K=(e("f399"),Object(C["a"])(F,L,W,!1,null,"649c2ce4",null)),Q=K.exports,X={name:"home",data:function(){return{sliderinit:{currentPage:0,autoplay:3e3,loop:!0,slidesToScroll:1,duration:300},someList:[{style:"background:url(http://tdream.antit.top/image/banner.png) no-repeat center center / 6.8rem 2rem"},{style:"background:url(https://tdream.antit.top/image/Red_SendPack.jpg) no-repeat center center / 6.8rem 2rem;border-radius:0.2rem"}],userInfo:"",orders:"",pools:"",isdaward:!0}},components:{slider:D["slider"],slideritem:D["slideritem"],screen:z,pool:H,rules:Q},created:function(){ExistStorage("userInfo")?this.Register(this,JSON.parse(GetStorage("userInfo"))):window.location.href="http://tinydream.ivkcld.cn/TInydreamWeb/dream"},methods:{Register:function(t,a){TD_Request("us","enter",{uid:a.openid,nickname:a.nickname,headicon:a.headimgurl},function(a,e){if(console.log(e),t.$store.commit("uid",JSON.parse(GetStorage("userInfo")).openid),t.orders=e.buyinfo,0!=e.mainpool.length&&DreamPoolAnalysis(e.mainpool),0!=e.maintrade.length&&DreamPoolAnalysis(e.maintrade),0==e.mainpool.length&&0!=e.maintrade.length)var n=[{code:1,mainpool:e.mainpool,context:"暂无更多梦想池",maintrade:e.maintrade}];else if(0!=e.mainpool.length&&0==e.maintrade.length)n=[{code:2,mainpool:e.mainpool,context:"暂无更多项目",maintrade:e.maintrade}];else if(0==e.mainpool.length&&0==e.maintrade.length)n=[{code:-1,mainpool:e.mainpool,context:"暂无更多项目",tcontext:"暂无更多梦想池",maintrade:e.maintrade}];else n=[{code:0,mainpool:e.mainpool,context:"成功",maintrade:e.maintrade}];t.pools=n},function(t,a){console.log(a)})}}},Y=X,Z=(e("76be"),Object(C["a"])(Y,j,M,!1,null,"45a3e2f2",null)),tt=Z.exports,at=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"payInfo"},[e("Info",{attrs:{pool:t.pool}})],1)},et=[],nt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"info"},[e("h3",{staticClass:"title"},[t._v(t._s(""==t.pool?"":t.pool.ptitle))]),e("div",{staticClass:"progress"},[e("yd-progressbar",{attrs:{progress:""==t.pool?0:t.pool.cbill/t.pool.tbill,"trail-width":"4","stroke-color":"#edf0f5","trail-color":"#ffc054"}},[e("van-col",{directives:[{name:"show",rawName:"v-show",value:t.isshow,expression:"isshow"}],staticClass:"timeouts",attrs:{span:"24"}},[e("van-icon",{staticClass:"icon_clock",attrs:{name:"clock-o"}}),e("span",[t._v(t._s(""==t.timeout?"":t.timeout))])],1),e("van-col",{staticClass:"current",attrs:{span:"24"}},[e("span",{staticClass:"money"},[t._v(t._s(""!=t.pool?t.pool.realBill+t.pool.realUnit:""))])]),e("van-col",{staticClass:"text",attrs:{span:"24"}},[e("span",[t._v(t._s(""==t.pool?"":t.pool.billHint))])])],1)],1),e("div",{staticClass:"payinfo"},[e("van-row",{staticStyle:{"margin-bottom":"0.56rem"}},[e("van-col",{attrs:{span:"12"}},[e("span",{staticClass:"left"},[t._v("目标金额")])]),e("van-col",{staticClass:"right",attrs:{span:"12"}},[e("span",{staticClass:"right tbill"},[t._v(t._s(""==t.pool?"":t.pool.rtbillValue+t.pool.rtbillUnit))])])],1),e("van-row",{staticStyle:{"margin-bottom":"0.56rem"}},[e("van-col",{staticStyle:{"text-align":"left"},attrs:{span:"12"}},[e("span",{staticClass:"left"},[t._v("份数")])]),e("van-col",{staticClass:"right",attrs:{span:"12"}},[e("p",[e("span",{staticClass:"add btn"},[t._v("＋")]),e("span",{staticStyle:{margin:"0 0.3rem"}},[t._v("1")]),e("span",{staticClass:"incre btn"},[t._v("－")])])])],1),e("van-row",{staticStyle:{"margin-bottom":"0.56rem"}},[e("van-col",{attrs:{span:"12"}},[e("span",{staticClass:"left"},[t._v("选择梦想")])]),e("van-col",{staticClass:"right",attrs:{span:"12"}},[e("span",{staticClass:"right"},[e("span",{attrs:{id:"dream"}}),e("van-icon",{attrs:{name:"arrow"}})],1)])],1)],1)])},ot=[],it={name:"info",data:function(){return{isshow:!0,timeout:this.timeout()}},created:function(){this.selectDream(this,this.$route.params.type),"dream"==this.$route.params.type?this.isshow=!0:"trade"==this.$route.params.type&&(this.isshow=!1,$(".info .progress .current").css("margin-top",0))},methods:{timeout:function(){var t=this;setInterval(function(){var a=parseInt((new Date).getTime()/1e3),e=parseInt(t.pool.ptime)+parseInt(t.pool.duration)-a,n=Math.floor(e/3600)>=10?Math.floor(e/3600):"0"+Math.floor(e/3600),o=Math.floor(e/60%60)>=10?Math.floor(e/60%60):"0"+Math.floor(e/60%60),i=Math.floor(e%60)>=10?Math.floor(e%60):"0"+Math.floor(e%60);t.timeout=n+":"+o+":"+i},1e3)},selectDream:function(t,a){TD_Request("dr","gdream",{uid:t.$store.state.uid,did:t.$store.state.actions.pay.did},function(t,a){console.log(a)},function(t,a){console.log(a)})}},props:{pool:{type:[Array,Object],default:function(){return""}}},watch:{pool:function(t){console.log(t)}}},st=it,rt=(e("a4f8"),Object(C["a"])(st,nt,ot,!1,null,"5479acba",null)),lt=rt.exports,ct={name:"payInfo",data:function(){return{pool:""}},components:{Info:lt},created:function(){null==this.$store.state.actions?this.$router.push("/"):("dream"==this.$route.params.type?console.log("小梦想互助"):"trade"==this.$route.params.type&&console.log("小生意互助"),this.ord(this))},methods:{ord:function(t){TD_Request("ds","ord",{action:JSON.stringify(t.$store.state.actions)},function(a,e){console.log(e),t.pool=DreamPoolAnalysis(e.pool),t.$store.commit("actions",e.actions)},function(a,e){17==a&&t.$router.push("/"),console.log(e)})}}},pt=ct,ut=(e("010b"),Object(C["a"])(pt,at,et,!1,null,"1998ada4",null)),dt=ut.exports;f["a"].use(T["a"]);var mt=new T["a"]({base:"/TinydreamWeb/dream/dist/",routes:[{path:"/",name:"home",components:{default:tt}},{path:"/payinfo/:type",name:"payInfo",components:{payInfo:dt}},{path:"/about",name:"about",component:function(){return e.e("about").then(e.bind(null,"f820"))}}]}),ft=e("2f625");f["a"].use(ft["a"]);var vt=new ft["a"].Store({state:{uid:"",actions:""},mutations:{uid:function(t,a){t.uid=a},actions:function(t,a){t.actions=a}}}),ht=e("df72"),gt=e("6ed7");f["a"].use(d["a"]).use(m["a"]),f["a"].use(c["a"]).use(p["a"]).use(u["a"]),f["a"].use(r["a"]).use(l["a"]),f["a"].use(s["a"]),f["a"].use(i["a"]),f["a"].use(o["a"]),f["a"].use(n["a"]),f["a"].component(ht["ProgressBar"].name,ht["ProgressBar"]),f["a"].component(gt["Step"].name,gt["Step"]),f["a"].component(gt["StepItem"].name,gt["StepItem"]),f["a"].config.productionTip=!1,new f["a"]({store:vt,router:mt,render:function(t){return t(O)}}).$mount("#app")},"60c7":function(t,a,e){},"64a9":function(t,a,e){},"76be":function(t,a,e){"use strict";var n=e("2f62"),o=e.n(n);o.a},8037:function(t,a,e){"use strict";var n=e("d7a8"),o=e.n(n);o.a},"8f41":function(t,a,e){},a4f8:function(t,a,e){"use strict";var n=e("60c7"),o=e.n(n);o.a},afe2:function(t,a,e){"use strict";var n=e("bcf9"),o=e.n(n);o.a},bcf9:function(t,a,e){},d7a8:function(t,a,e){},f399:function(t,a,e){"use strict";var n=e("8f41"),o=e.n(n);o.a}});
//# sourceMappingURL=app.32ebba97.js.map