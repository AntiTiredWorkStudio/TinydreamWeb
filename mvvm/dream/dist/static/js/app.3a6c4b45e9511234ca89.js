webpackJsonp([1],{"97dx":function(t,e){},JsOw:function(t,e){},Ld5A:function(t,e){},NAlg:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("3AsM");var a=n("7ZPY"),i=(n("zP7x"),n("rD0v")),s=(n("RgoE"),n("0KWt")),r=(n("1E9F"),n("2Ux5")),o=n("7+uW"),c={name:"tabbar",data:function(){return{active:0,tabbar:[{path:"/",title:"梦想互助",normal:"http://tdream.antit.top/image/nav_index_disable.png",active:"http://tdream.antit.top/image/nav_index.png"},{path:"/clock",title:"行动打卡",normal:"https://tdream.antit.top/ActiveSignInOff.png",active:"https://tdream.antit.top/ActiveSignInOk.png"},{path:"/user",title:"个人中心",normal:"http://tdream.antit.top/image/nav_owner_disable.png",active:"http://tdream.antit.top/image/nav_owner.png"}]}},created:function(){console.log(this.$route.path),"/"==this.$route.path?this.active=0:"/clock"==this.$route.path?this.active=1:"/user"==this.$route.path&&(this.active=2)}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabbar"},[n("van-tabbar",{attrs:{"active-color":"#00d094"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},t._l(t.tabbar,function(e,a){return n("van-tabbar-item",{key:a,attrs:{to:e.path},scopedSlots:t._u([{key:"icon",fn:function(t){return n("img",{attrs:{src:t.active?e.active:e.normal}})}}],null,!0)},[n("span",[t._v(t._s(e.title))])])}),1)],1)},staticRenderFns:[]};var p={name:"App",components:{tabbar:n("VU/8")(c,u,!1,function(t){n("Ld5A")},null,null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view"),this._v(" "),e("tabbar")],1)},staticRenderFns:[]};var m=n("VU/8")(p,l,!1,function(t){n("ag6r")},null,null).exports,h=n("/ocq"),d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[e("div",{staticClass:"banner"},[e("van-swipe",{attrs:{autoplay:3e3,"indicator-color":"white"}},[e("van-swipe-item",[e("img",{attrs:{src:"http://tdream.antit.top/image/banner.png",alt:"新手指引"}})]),this._v(" "),e("van-swipe-item",[e("img",{attrs:{src:"https://tdream.antit.top/image/Red_SendPack.jpg",alt:"梦想红包"}})])],1)],1)])},staticRenderFns:[]};var v=n("VU/8")({name:"home",data:function(){return{}},created:function(){},methods:{}},d,!1,function(t){n("NpNo")},"data-v-0ae87994",null).exports,f={name:"home",data:function(){return{msg:""}},created:function(){this.Message(this)},methods:{Message:function(t){setTimeout(function(){t.msg="打卡页"},2e3)}}},g={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"home"},[this._v("\n    "+this._s(this.msg)+"\n")])},staticRenderFns:[]};var _=n("VU/8")(f,g,!1,function(t){n("ZeWB")},"data-v-659c7999",null).exports,b={name:"home",data:function(){return{msg:""}},created:function(){this.Message(this)},methods:{Message:function(t){setTimeout(function(){t.msg="个人中心"},2e3)}}},w={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"home"},[this._v("\n    "+this._s(this.msg)+"\n")])},staticRenderFns:[]};var x=n("VU/8")(b,w,!1,function(t){n("QWoX")},"data-v-d0f7625e",null).exports;o.a.use(h.a);var k=new h.a({routes:[{path:"/",name:"home",component:v},{path:"/clock",name:"clock",component:_},{path:"/user",name:"user",component:x}],mode:"history"});o.a.use(s.a).use(r.a),o.a.use(a.a).use(i.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:k,components:{App:m},template:"<App/>"})},NpNo:function(t,e){},QWoX:function(t,e){},W0KU:function(t,e){},ZeWB:function(t,e){},ag6r:function(t,e){},nsZj:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.3a6c4b45e9511234ca89.js.map