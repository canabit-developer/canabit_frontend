(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{420:function(t,e,n){var content=n(466);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(46).default)("7a4b819a",content,!0,{sourceMap:!1})},465:function(t,e,n){"use strict";n(420)},466:function(t,e,n){var c=n(45)(!1);c.push([t.i,".box-shadows[data-v-93cec32c]{box-shadow:0 5px 10px -4px rgba(94,86,105,.42)}",""]),t.exports=c},494:function(t,e,n){"use strict";n.r(e);var c={props:{title:{type:String,default:"text"},icon:{type:String,default:void 0},path:{type:String,default:"/"}},computed:{activate:function(){return this.$route.path==this.path},activateBg:function(){return this.$route.path==this.path?"navbar-active shadow-2xl text-white box-shadows":""},activateTxt:function(){return this.$route.path==this.path?"text-white ":"light-text "}}},o=(n(465),n(53)),r=n(100),l=n.n(r),h=n(338),v=n(404),d=n(405),f=n(370),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-list-item",{class:t.activateBg,attrs:{dark:t.activate},on:{click:function(e){return t.$router.push(""+t.path)}}},[n("v-list-item-icon",[n("v-icon",[t._v("\r\n            "+t._s(t.icon||t.alternateIcon)+"\r\n        ")])],1),t._v(" "),n("v-list-item-title",{class:t.activateTxt},[t._v("\r\n        "+t._s(t.title)+"\r\n    ")])],1)}),[],!1,null,"93cec32c",null);e.default=component.exports;l()(component,{VIcon:h.a,VListItem:v.a,VListItemIcon:d.a,VListItemTitle:f.a})}}]);