(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{524:function(t,e,n){"use strict";n(38),n(33),n(37),n(39),n(32),n(54);var r=n(22),o=n(21),l=(n(28),n(94),n(183),n(9),n(93),n(3)),c=n(48),d=n(75);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=l.default.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(t){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof data.style?(Object(c.b)("style must be an object",this),data):"string"==typeof data.class?(Object(c.b)("class must be an object",this),data):(Object(d.d)(t)?data.style=f(f({},data.style),{},{"background-color":"".concat(t),"border-color":"".concat(t)}):t&&(data.class=f(f({},data.class),{},Object(o.a)({},t,!0))),data)},setTextColor:function(t){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof data.style)return Object(c.b)("style must be an object",this),data;if("string"==typeof data.class)return Object(c.b)("class must be an object",this),data;if(Object(d.d)(t))data.style=f(f({},data.style),{},{color:"".concat(t),"caret-color":"".concat(t)});else if(t){var e=t.toString().trim().split(" ",2),n=Object(r.a)(e,2),l=n[0],h=n[1];data.class=f(f({},data.class),{},Object(o.a)({},l+"--text",!0)),h&&(data.class["text--"+h]=!0)}return data}}})},529:function(t,e,n){"use strict";var r=n(7),o=n(391);r({target:"String",proto:!0,forced:n(392)("small")},{small:function(){return o(this,"small","","")}})},530:function(t,e,n){"use strict";n(529);var r=n(3);e.a=r.default.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium:function(){return Boolean(!(this.xSmall||this.small||this.large||this.xLarge))},sizeableClasses:function(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},540:function(t,e,n){"use strict";var r=n(3);function o(t){return function(e,n){for(var r in n)Object.prototype.hasOwnProperty.call(e,r)||this.$delete(this.$data[t],r);for(var o in e)this.$set(this.$data[t],o,e[o])}}e.a=r.default.extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",o("attrs$"),{immediate:!0}),this.$watch("$listeners",o("listeners$"),{immediate:!0})}})},563:function(t,e,n){var content=n(564);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("6b715e77",content,!0,{sourceMap:!1})},564:function(t,e,n){var r=n(46)(!1);r.push([t.i,'.theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon:focus:after{opacity:.12}.theme--light.v-icon.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon:focus:after{opacity:.24}.theme--dark.v-icon.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon.v-icon{align-items:center;display:inline-flex;font-feature-settings:"liga";font-size:24px;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-icon.v-icon:after{background-color:currentColor;border-radius:50%;content:"";display:inline-block;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transform:scale(1.3);width:100%;transition:opacity .2s cubic-bezier(.4,0,.6,1)}.v-icon.v-icon--dense{font-size:20px}.v-icon--right{margin-left:8px}.v-icon--left{margin-right:8px}.v-icon.v-icon.v-icon--link{cursor:pointer;outline:none}.v-icon--disabled{pointer-events:none}.v-icon--dense .v-icon__component,.v-icon--dense .v-icon__svg{height:20px}.v-icon__component,.v-icon__svg{height:24px;width:24px}.v-icon__svg{fill:currentColor}',""]),t.exports=r},579:function(t,e,n){"use strict";n(38),n(33),n(37),n(39),n(32),n(54);var r,o=n(21),l=(n(529),n(9),n(90),n(91),n(28),n(389),n(183),n(184),n(72),n(563),n(540)),c=n(524),d=n(530),h=n(182),f=n(25),v=n(3),m=n(181);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}!function(t){t.xSmall="12px",t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(r||(r={}));var y=Object(m.a)(l.a,c.a,d.a,h.a).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(f.C)(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(f.z)(t).find((function(e){return t[e]}));return e&&r[e]||Object(f.h)(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:w({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=w(w({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(data){data.class=w(w({},data.class),this.themeClasses),this.setTextColor(this.color,data)},renderFontIcon:function(t,e){var n=[],data=this.getDefaultData(),r="material-icons",o=t.indexOf("-"),l=o<=-1;l?n.push(t):function(t){return["fas","far","fal","fab","fad","fak"].some((function(e){return t.includes(e)}))}(r=t.slice(0,o))&&(r=""),data.class[r]=!0,data.class[t]=!l;var c=this.getSize();return c&&(data.style={fontSize:c}),this.applyColors(data),e(this.hasClickListener?"button":this.tag,data,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},r=this.getSize();return r&&(n.style={fontSize:r,height:r,width:r}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var data={class:{"v-icon__component":!0}},n=this.getSize();n&&(data.style={fontSize:n,height:n,width:n}),this.applyColors(data);var component=t.component;return data.props=t.props,data.nativeOn=data.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(component,data)])}},render:function(t){var e=this.getIcon();return"string"==typeof e?function(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e.a=v.default.extend({name:"v-icon",$_wrapperFor:y,functional:!0,render:function(t,e){var data=e.data,n=e.children,r="";return data.domProps&&(r=data.domProps.textContent||data.domProps.innerHTML||r,delete data.domProps.textContent,delete data.domProps.innerHTML),t(y,data,r?[r]:n)}})},895:function(t,e,n){"use strict";n.r(e);var r=n(4),o=(n(65),n(31)),l=(n(123),n(97)),c={data:function(){return{ea:{}}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.startup();case 2:case"end":return e.stop()}}),e)})))()},methods:{startup:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.getHttp("/api/ea/product/".concat(t.$route.query.id,"/"));case 2:t.ea=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},computed:{user:function(){return l.a.user},point:function(){return l.a.point},tier:function(){return l.a.tier},tiers:function(){return l.a.tiers},setting:function(){return l.a.setting}}},d=n(56),h=n(73),f=n.n(h),v=n(579),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"font-sans bg-white flex flex-col min-h-screen w-full"},[n("h2",{staticClass:"text-xl font-semibold"},[n("v-icon",{staticClass:"mr-2"},[t._v("em em-chart")]),t._v("  Detail EA")],1),t._v(" "),n("ul",{staticClass:"breadcrumb mt-3"},[n("li",[n("a",{attrs:{href:"#"},on:{click:function(e){return t.$router.push("/")}}},[t._v("Home")])]),t._v(" "),n("li",[n("a",{on:{click:function(e){return t.$router.push("/semiauto")}}},[t._v("  EA ")])]),t._v(" "),n("li",[t._v("Detail EA")])]),t._v(" "),n("div",[n("div",{staticClass:"bg-green-400 rounded-xl md:overflow-hidden mt-3"},[t._m(0),t._v(" "),n("svg",{staticClass:"fill-current bg-green-400 text-white hidden md:block",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"}},[n("path",{attrs:{"fill-opacity":"1",d:"M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"}})])]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"max-w-7xl mx-auto bg-white  relative  rounded-xl lg:mt-5 md:-mt-24"},[n("SemiAuto-DetailEA",{attrs:{ea:t.ea}})],1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"px-4 py-16"},[n("div",{staticClass:"relative w-full md:max-w-2xl md:mx-auto text-center"},[n("h1",{staticClass:"font-bold text-white text-xl sm:text-2xl md:text-5xl leading-tight mb-6"},[t._v("\r\n                           Intelligent innovation, Make your trading easy\r\n                        ")]),t._v(" "),n("p",{staticClass:"text-white md:text-xl md:px-18"},[t._v("\r\n                            EA service, the automated trading system from CANABIT is not for everyone. If you have studied the information It is worth considering whether this investment strategy and approach fits your expectations. If this approach is Let's go together.\r\n                        ")]),t._v(" "),n("div",{staticClass:"hidden md:block h-40 w-40 rounded-full bg-green-500 absolute right-0 bottom-0 -mb-64 -mr-48 "}),t._v(" "),n("div",{staticClass:"hidden md:block h-5 w-5 rounded-full bg-green-500 absolute top-0 right-0 -mr-40 mt-32"}),t._v(" "),n("div",{staticClass:"text-center mb-10 mt-10"},[n("span",{staticClass:"inline-block w-1 h-1 rounded-full bg-white ml-1"}),t._v(" "),n("span",{staticClass:"inline-block w-3 h-1 rounded-full bg-white ml-1"}),t._v(" "),n("span",{staticClass:"inline-block w-40 h-1 rounded-full bg-white ml-1"}),t._v(" "),n("span",{staticClass:"inline-block w-3 h-1 rounded-full bg-white ml-1"}),t._v(" "),n("span",{staticClass:"inline-block w-1 h-1 rounded-full bg-white ml-1"})])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"max-w-4xl mx-auto bg-white shadow-lg relative hidden md:block",staticStyle:{"margin-top":"-320px","border-radius":"20px"}},[n("div",{staticClass:"h-20 w-20 rounded-full bg-green-500 absolute top-0 left-0 -ml-10 -mt-16",staticStyle:{"z-index":"-1"}}),t._v(" "),n("div",{staticClass:"h-5 w-5 rounded-full bg-green-500 absolute top-0 left-0 -ml-32 mt-12",staticStyle:{"z-index":"-1"}})])}],!1,null,null,null);e.default=component.exports;f()(component,{VIcon:v.a})}}]);