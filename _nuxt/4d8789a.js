(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1028:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(620),n(63),n(109)),c=n(57),l=n(678),d=n(41),f={data:function(){return{indicator:[]}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.startup();case 1:case"end":return e.stop()}}),e)})))()},methods:{startup:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.getIndicatorProduct();case 2:t.indicator=e.sent;case 3:case"end":return e.stop()}}),e)})))()},order:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var form;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return form={code:"IN"+Date.now(),user:e.user.id,product:t.id},n.next=3,d.a.confirm("Do you want to Download Indicators");case 3:if(!n.sent){n.next=10;break}return window.open(t.link),n.next=8,c.a.postHttp("/api/indicator/order/",form);case 8:n.sent.id&&e.$router.push("/history?tab=1");case 10:case"end":return n.stop()}}),n)})))()}},computed:{user:function(){return o.a.user},point:function(){return o.a.point},tier:function(){return o.a.tier},tiers:function(){return o.a.tiers},setting:function(){return o.a.setting}}},h=(n(904),n(75)),v=n(86),m=n.n(v),x=n(596),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"font-sans flex flex-col min-h-screen w-full"},[n("div",{staticClass:"bg-green-400 rounded-xl md:overflow-hidden"},[t._m(0),t._v(" "),n("svg",{staticClass:"fill-current bg-green-400 text-gray-100 hidden md:block",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[n("path",{attrs:{"fill-opacity":"1",d:"M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"}})])]),t._v(" "),t._m(1),t._v(" "),n("vs-row",{staticClass:"lg:-mt-6 md:-mt-36",attrs:{w:"12",justify:"center"}},t._l(t.indicator,(function(e,r){return n("div",{key:r,staticClass:"p-5",attrs:{w:"1"}},[n("vs-card",{scopedSlots:t._u([{key:"title",fn:function(){return[n("div",{staticClass:"flex flex-nowrap mt-1"},[n("h3",[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"flex justify-end"},[n("h3",{staticClass:"text-green-400"},[t._v("\r\n                                    Price : Free\r\n                                ")])])])]},proxy:!0},{key:"img",fn:function(){return[n("img",{attrs:{src:t.$url+e.image,alt:""}})]},proxy:!0},{key:"text",fn:function(){return[n("div",{staticClass:"h-16 mt-3"},[n("p",{staticClass:"textellipsis"},[t._v("\r\n                                "+t._s(e.detail)+"\r\n                            ")])]),t._v(" "),n("vs-button",{staticClass:"btn-chat mt-3",attrs:{block:"",floating:"",color:"#4ade80"},on:{click:function(n){return t.order(e)}}},[n("span",{staticClass:"span"},[n("v-icon",{staticClass:"mr-2",attrs:{color:"#ffff"}},[t._v("mdi-cloud-download-outline")]),t._v("\r\n                                Download\r\n                            ")],1)])]},proxy:!0},{key:"interactions",fn:function(){},proxy:!0}],null,!0)})],1)})),0)],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-4 py-16"},[n("div",{staticClass:"relative w-full md:max-w-2xl md:mx-auto text-center"},[n("h1",{staticClass:"font-bold text-white text-xl sm:text-2xl md:text-5xl leading-tight mb-6"},[t._v("\r\n                        Free products! For Cash Back members\r\n                    ")]),t._v(" "),n("p",{staticClass:"text-white md:text-xl md:px-18"},[t._v('\r\n                        Signals are forex trading indicators that can give you information about your trades. Including telling the trend of which direction the candlestick is going, as well as some indicators that can tell the point where you will open a buy order. Or sell orders as well. Indicators are often called by another name "Indy".\r\n                    ')]),t._v(" "),n("div",{staticClass:"hidden md:block h-40 w-40 rounded-full bg-green-500 absolute right-0 bottom-0 -mb-64 -mr-48 "}),t._v(" "),n("div",{staticClass:"hidden md:block h-5 w-5 rounded-full bg-green-500 absolute top-0 right-0 -mr-40 mt-32"}),t._v(" "),n("div",{staticClass:"text-center mb-10 mt-10"},[n("span",{staticClass:"inline-block w-1 h-1 rounded-full bg-white ml-1"}),t._v(" "),n("span",{staticClass:"inline-block w-3 h-1 rounded-full bg-white ml-1"}),t._v(" "),n("span",{staticClass:"inline-block w-40 h-1 rounded-full bg-white ml-1"}),t._v(" "),n("span",{staticClass:"inline-block w-3 h-1 rounded-full bg-white ml-1"}),t._v(" "),n("span",{staticClass:"inline-block w-1 h-1 rounded-full bg-white ml-1"})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"max-w-4xl mx-auto bg-white shadow-lg relative  hidden md:block",staticStyle:{"margin-top":"-320px","border-radius":"20px"}},[n("div",{staticClass:"h-20 w-20 rounded-full bg-green-500 absolute top-0 left-0 -ml-64 -mt-16",staticStyle:{"z-index":"-1"}}),t._v(" "),n("div",{staticClass:"h-5 w-5 rounded-full bg-green-500 absolute top-0 left-0 -ml-32 mt-12",staticStyle:{"z-index":"-1"}})])}],!1,null,null,null);e.default=component.exports;m()(component,{VIcon:x.a})},593:function(t,e,n){"use strict";var r=n(5),o=n(202);r({target:"String",proto:!0,forced:n(203)("small")},{small:function(){return o(this,"small","","")}})},596:function(t,e,n){"use strict";n(26),n(22),n(30),n(31),n(27),n(40);var r,o=n(9),c=(n(593),n(10),n(74),n(76),n(19),n(96),n(138),n(120),n(49),n(598),n(204)),l=n(200),d=n(602),f=n(108),h=n(8),v=n(1),m=n(62);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}!function(t){t.xSmall="12px",t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(r||(r={}));var y=Object(m.a)(c.a,l.a,d.a,f.a).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(h.C)(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(h.z)(t).find((function(e){return t[e]}));return e&&r[e]||Object(h.h)(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:w({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=w(w({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(data){data.class=w(w({},data.class),this.themeClasses),this.setTextColor(this.color,data)},renderFontIcon:function(t,e){var n=[],data=this.getDefaultData(),r="material-icons",o=t.indexOf("-"),c=o<=-1;c?n.push(t):function(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}(r=t.slice(0,o))&&(r=""),data.class[r]=!0,data.class[t]=!c;var l=this.getSize();return l&&(data.style={fontSize:l}),this.applyColors(data),e(this.hasClickListener?"button":this.tag,data,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},r=this.getSize();return r&&(n.style={fontSize:r,height:r,width:r}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var data={class:{"v-icon__component":!0}},n=this.getSize();n&&(data.style={fontSize:n,height:n,width:n}),this.applyColors(data);var component=t.component;return data.props=t.props,data.nativeOn=data.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(component,data)])}},render:function(t){var e=this.getIcon();return"string"==typeof e?function(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e.a=v.default.extend({name:"v-icon",$_wrapperFor:y,functional:!0,render:function(t,e){var data=e.data,n=e.children,r="";return data.domProps&&(r=data.domProps.textContent||data.domProps.innerHTML||r,delete data.domProps.textContent,delete data.domProps.innerHTML),t(y,data,r?[r]:n)}})},598:function(t,e,n){var content=n(599);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("6b715e77",content,!0,{sourceMap:!1})},599:function(t,e,n){var r=n(35)(!1);r.push([t.i,'.theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon:focus:after{opacity:.12}.theme--light.v-icon.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon:focus:after{opacity:.24}.theme--dark.v-icon.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon.v-icon{align-items:center;display:inline-flex;font-feature-settings:"liga";font-size:24px;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-icon.v-icon:after{background-color:currentColor;border-radius:50%;content:"";display:inline-block;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transform:scale(1.3);width:100%;transition:opacity .2s cubic-bezier(.4,0,.6,1)}.v-icon.v-icon--dense{font-size:20px}.v-icon--right{margin-left:8px}.v-icon--left{margin-right:8px}.v-icon.v-icon.v-icon--link{cursor:pointer;outline:none}.v-icon--disabled{pointer-events:none}.v-icon--dense .v-icon__component,.v-icon--dense .v-icon__svg{height:20px}.v-icon__component,.v-icon__svg{height:24px;width:24px}.v-icon__svg{fill:currentColor}',""]),t.exports=r},602:function(t,e,n){"use strict";n(593);var r=n(1);e.a=r.default.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!(this.xSmall||this.small||this.large||this.xLarge))},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},620:function(t,e,n){"use strict";var r=n(5),o=n(202);r({target:"String",proto:!0,forced:n(203)("link")},{link:function(t){return o(this,"a","href",t)}})},678:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));n(10),n(77);var r=n(3),o=n(20),c=n(21),l=n(33),d=n(28),f=n(14),h=(n(63),n(82)),v=n(57),m=n(110);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var w=function(t){Object(l.a)(m,t);var e,n,d,f,h=x(m);function m(){return Object(o.a)(this,m),h.apply(this,arguments)}return Object(c.a)(m,[{key:"getEAProduct",value:(f=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=!(n.length>0&&void 0!==n[0])||n[0],t.next=3,v.a.getHttp("/api/ea/product/?is_active="+e);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),function(){return f.apply(this,arguments)})},{key:"getIndicatorProduct",value:(d=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=!(n.length>0&&void 0!==n[0])||n[0],t.next=3,v.a.getHttp("/api/indicator/product/?is_active="+e);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),function(){return d.apply(this,arguments)})},{key:"getCopytradeProduct",value:(n=Object(r.a)(regeneratorRuntime.mark((function t(){var e,n=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=!(n.length>0&&void 0!==n[0])||n[0],t.next=3,v.a.getHttp("/api/copytrade/product/?is_active="+e);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)}))),function(){return n.apply(this,arguments)})},{key:"getReqursttest",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.getHttp("/api/ea/requesttest/");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)})}]),m}(h.b),y=new w({store:m.a,name:"Product"})},771:function(t,e,n){var content=n(905);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("656a2fa9",content,!0,{sourceMap:!1})},904:function(t,e,n){"use strict";n(771)},905:function(t,e,n){var r=n(35)(!1);r.push([t.i,".textellipsis{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}",""]),t.exports=r}}]);