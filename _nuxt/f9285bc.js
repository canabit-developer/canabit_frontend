(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{723:function(t,e,r){"use strict";r.d(e,"a",(function(){return y}));r(9),r(59);var n=r(4),o=r(13),c=r(14),l=r(24),d=r(20),f=r(8),v=(r(68),r(69)),m=r(44),h=r(100);function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var x=function(t){Object(l.a)(h,t);var e,r,d,f,v=w(h);function h(){return Object(o.a)(this,h),v.apply(this,arguments)}return Object(c.a)(h,[{key:"getEAProduct",value:(f=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=!(r.length>0&&void 0!==r[0])||r[0],t.next=3,m.a.getHttp("/api/ea/product/?is_active="+e);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),function(){return f.apply(this,arguments)})},{key:"getIndicatorProduct",value:(d=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=!(r.length>0&&void 0!==r[0])||r[0],t.next=3,m.a.getHttp("/api/indicator/product/?is_active="+e);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),function(){return d.apply(this,arguments)})},{key:"getCopytradeProduct",value:(r=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=!(r.length>0&&void 0!==r[0])||r[0],t.next=3,m.a.getHttp("/api/copytrade/product/?is_active="+e);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),function(){return r.apply(this,arguments)})},{key:"getReqursttest",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.getHttp("/api/ea/requesttest/");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)})}]),h}(v.b),y=new x({store:h.a,name:"Product"})},786:function(t,e,r){var content=r(861);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("d5bef97e",content,!0,{sourceMap:!1})},860:function(t,e,r){"use strict";r(786)},861:function(t,e,r){var n=r(40)(!1);n.push([t.i,".textellipsis{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}",""]),t.exports=n},974:function(t,e,r){"use strict";r.r(e);var n=r(4),o=(r(68),r(723)),c={data:function(){return{copytradeproduct:[]}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.startup();case 1:case"end":return e.stop()}}),e)})))()},methods:{startup:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.getCopytradeProduct();case 2:t.copytradeproduct=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}},l=(r(860),r(57)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"font-sans bg-white flex flex-col min-h-screen w-full"},[r("div",{attrs:{Anyone:""}},[r("div",{staticClass:"bg-green-400 rounded-xl md:overflow-hidden"},[t._m(0),t._v(" "),r("svg",{staticClass:"fill-current bg-green-400 text-white hidden md:block",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[r("path",{attrs:{"fill-opacity":"1",d:"M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"}})])]),t._v(" "),t._m(1),t._v(" "),r("vs-row",{staticClass:"-mt-5",attrs:{w:"12",justify:"center"}},t._l(t.copytradeproduct,(function(e,n){return r("vs-clos",{key:n,staticClass:"p-2 mt-2"},[r("vs-card",{scopedSlots:t._u([{key:"title",fn:function(){return[r("h3",[t._v(t._s(e.name))])]},proxy:!0},{key:"img",fn:function(){return[r("img",{attrs:{src:t.$url+e.image,alt:""}})]},proxy:!0},{key:"text",fn:function(){return[r("div",{staticClass:"h-16 mt-2"},[r("p",{staticClass:"textellipsis"},[t._v("\r\n                                    "+t._s(e.sub_title)+"\r\n                                ")])]),t._v(" "),r("vs-button",{staticClass:"btn-chat mt-5",attrs:{block:"",floating:"",color:"#4ade80"},on:{click:function(r){return t.$router.push("/detailcopytrade?id="+e.id)}}},[r("span",{staticClass:"span"},[t._v("\r\n                                    Detail Master\r\n                                ")])])]},proxy:!0}],null,!0)})],1)})),1)],1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-4 py-16"},[r("div",{staticClass:"relative w-full md:max-w-2xl md:mx-auto text-center"},[r("h1",{staticClass:"font-bold text-white text-xl sm:text-2xl md:text-5xl leading-tight mb-6"},[t._v("\r\n                            Copy Leader Track profits From traders around the world.\r\n                        ")]),t._v(" "),r("p",{staticClass:"text-white md:text-xl md:px-18"},[t._v("\r\n                            Invest with automation Full-featured and making it easy to enter the world of finance, allows you to follow and connect Professional Traders, Leaders, and Followers together to make profits and track success from traders all over the world\r\n                        ")]),t._v(" "),r("div",{staticClass:"hidden md:block h-40 w-40 rounded-full bg-green-500 absolute right-0 bottom-0 -mb-64 -mr-48 "}),t._v(" "),r("div",{staticClass:"hidden md:block h-5 w-5 rounded-full bg-green-500 absolute top-0 right-0 -mr-40 mt-32"}),t._v(" "),r("div",{staticClass:"text-center mb-10 mt-10"},[r("span",{staticClass:"inline-block w-1 h-1 rounded-full bg-white ml-1"}),t._v(" "),r("span",{staticClass:"inline-block w-3 h-1 rounded-full bg-white ml-1"}),t._v(" "),r("span",{staticClass:"inline-block w-40 h-1 rounded-full bg-white ml-1"}),t._v(" "),r("span",{staticClass:"inline-block w-3 h-1 rounded-full bg-white ml-1"}),t._v(" "),r("span",{staticClass:"inline-block w-1 h-1 rounded-full bg-white ml-1"})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"max-w-4xl mx-auto bg-white shadow-lg relative  hidden md:block",staticStyle:{"margin-top":"-320px","border-radius":"20px"}},[r("div",{staticClass:"h-20 w-20 rounded-full bg-green-500 absolute top-0 left-0 -ml-10 -mt-16",staticStyle:{"z-index":"-1"}}),t._v(" "),r("div",{staticClass:"h-5 w-5 rounded-full bg-green-500 absolute top-0 left-0 -ml-32 mt-12",staticStyle:{"z-index":"-1"}})])}],!1,null,null,null);e.default=component.exports}}]);