(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{692:function(t,e,r){"use strict";r.d(e,"a",(function(){return y}));r(9),r(57);var n=r(4),c=r(13),o=r(14),l=r(23),d=r(19),f=r(8),v=(r(65),r(67)),m=r(31),h=r(99);function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var x=function(t){Object(l.a)(h,t);var e,r,d,f,v=w(h);function h(){return Object(c.a)(this,h),v.apply(this,arguments)}return Object(o.a)(h,[{key:"getEAProduct",value:(f=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=!(r.length>0&&void 0!==r[0])||r[0],t.next=3,m.a.getHttp("/api/ea/product/?is_active="+e);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),function(){return f.apply(this,arguments)})},{key:"getIndicatorProduct",value:(d=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=!(r.length>0&&void 0!==r[0])||r[0],t.next=3,m.a.getHttp("/api/indicator/product/?is_active="+e);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),function(){return d.apply(this,arguments)})},{key:"getCopytradeProduct",value:(r=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=!(r.length>0&&void 0!==r[0])||r[0],t.next=3,m.a.getHttp("/api/copytrade/product/?is_active="+e);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),function(){return r.apply(this,arguments)})},{key:"getReqursttest",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.a.getHttp("/api/ea/requesttest/");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)})}]),h}(v.b),y=new x({store:h.a,name:"Product"})},748:function(t,e,r){var content=r(847);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(47).default)("a3a61c12",content,!0,{sourceMap:!1})},846:function(t,e,r){"use strict";r(748)},847:function(t,e,r){var n=r(46)(!1);n.push([t.i,".textellipsis{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}",""]),t.exports=n},954:function(t,e,r){"use strict";r.r(e);var n=r(4),c=(r(65),r(692)),o={data:function(){return{active:!1,eaproduct:[]}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.startup();case 2:case"end":return e.stop()}}),e)})))()},methods:{startup:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.getEAProduct();case 2:t.eaproduct=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}},l=(r(846),r(56)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"font-sans bg-white flex flex-col min-h-screen w-full"},[r("div",[r("div",{staticClass:"bg-green-400 rounded-xl md:overflow-hidden"},[t._m(0),t._v(" "),r("svg",{staticClass:"fill-current bg-green-400 text-white hidden md:block",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[r("path",{attrs:{"fill-opacity":"1",d:"M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"}})])]),t._v(" "),t._m(1),t._v(" "),r("vs-row",{staticClass:"-mt-5",attrs:{w:"12",justify:"center"}},t._l(t.eaproduct,(function(e,n){return r("div",{key:n,staticClass:"p-2 mt-2"},[r("vs-card",{scopedSlots:t._u([{key:"title",fn:function(){return[r("div",{},[r("h3",[t._v(" "+t._s(e.name)+" ")])])]},proxy:!0},{key:"img",fn:function(){return[r("img",{attrs:{src:t.$url+e.image,alt:""}})]},proxy:!0},{key:"text",fn:function(){return[r("div",{staticClass:"h-16 mt-2"},[r("p",{staticClass:"textellipsis"},[t._v("\n                                    "+t._s(e.sub_title)+"\n                                ")])]),t._v(" "),r("div",{staticClass:"flex flex-wrap justify-center mt-2"},[r("SemiAuto-FromPurchase",{attrs:{ea:e}}),t._v(" "),r("SemiAuto-FromRequestTest",{attrs:{ea:e}}),t._v(" "),r("vs-button",{staticClass:"btn-chat",attrs:{color:"#5EDA9F"},on:{click:function(r){return t.$router.push("/detailea?id="+e.id)}}},[r("span",{staticClass:"span"},[t._v("\n                                        More Detail\n                                    ")])])],1)]},proxy:!0},{key:"interactions",fn:function(){return[r("vs-button",{staticClass:"btn-chat",attrs:{success:""}},[t._v("\n                               Price:"+t._s(e.price)+"\n                            ")])]},proxy:!0}],null,!0)})],1)})),0)],1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"px-4 py-16"},[r("div",{staticClass:"relative w-full md:max-w-2xl md:mx-auto text-center"},[r("h1",{staticClass:"font-bold text-white text-xl sm:text-2xl md:text-5xl leading-tight mb-6"},[t._v("\n                            Intelligent innovation, Make your trading easy\n                        ")]),t._v(" "),r("p",{staticClass:"text-white md:text-xl md:px-18"},[t._v("\n                            EA service, the automated trading system from CANABIT is not for everyone. If you have studied the information It is worth considering whether this investment strategy and approach fits your expectations. If this approach is Let's go together\n                        ")]),t._v(" "),r("div",{staticClass:"hidden md:block h-40 w-40 rounded-full bg-green-500 absolute right-0 bottom-0 -mb-64 -mr-48 "}),t._v(" "),r("div",{staticClass:"hidden md:block h-5 w-5 rounded-full bg-green-500 absolute top-0 right-0 -mr-40 mt-32"}),t._v(" "),r("div",{staticClass:"text-center mb-10 mt-10"},[r("span",{staticClass:"inline-block w-1 h-1 rounded-full bg-white ml-1"}),t._v(" "),r("span",{staticClass:"inline-block w-3 h-1 rounded-full bg-white ml-1"}),t._v(" "),r("span",{staticClass:"inline-block w-40 h-1 rounded-full bg-white ml-1"}),t._v(" "),r("span",{staticClass:"inline-block w-3 h-1 rounded-full bg-white ml-1"}),t._v(" "),r("span",{staticClass:"inline-block w-1 h-1 rounded-full bg-white ml-1"})])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"max-w-4xl mx-auto bg-white shadow-lg relative z-20 hidden md:block",staticStyle:{"margin-top":"-320px","border-radius":"20px"}},[r("div",{staticClass:"h-20 w-20 rounded-full bg-green-500 absolute top-0 left-0 -ml-10 -mt-16",staticStyle:{"z-index":"-1"}}),t._v(" "),r("div",{staticClass:"h-5 w-5 rounded-full bg-green-500 absolute top-0 left-0 -ml-32 mt-12",staticStyle:{"z-index":"-1"}})])}],!1,null,null,null);e.default=component.exports}}]);