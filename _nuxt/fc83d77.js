(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{524:function(e,t,r){"use strict";r(38),r(33),r(37),r(39),r(32),r(54);var n=r(22),o=r(21),c=(r(28),r(95),r(183),r(9),r(93),r(3)),l=r(48),f=r(75);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=c.default.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(e){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"==typeof data.style?(Object(l.b)("style must be an object",this),data):"string"==typeof data.class?(Object(l.b)("class must be an object",this),data):(Object(f.d)(e)?data.style=v(v({},data.style),{},{"background-color":"".concat(e),"border-color":"".concat(e)}):e&&(data.class=v(v({},data.class),{},Object(o.a)({},e,!0))),data)},setTextColor:function(e){var data=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"==typeof data.style)return Object(l.b)("style must be an object",this),data;if("string"==typeof data.class)return Object(l.b)("class must be an object",this),data;if(Object(f.d)(e))data.style=v(v({},data.style),{},{color:"".concat(e),"caret-color":"".concat(e)});else if(e){var t=e.toString().trim().split(" ",2),r=Object(n.a)(t,2),c=r[0],d=r[1];data.class=v(v({},data.class),{},Object(o.a)({},c+"--text",!0)),d&&(data.class["text--"+d]=!0)}return data}}})},528:function(e,t,r){"use strict";r.d(t,"a",(function(){return _})),r.d(t,"b",(function(){return O}));r(72),r(9),r(40),r(83),r(61),r(33),r(84),r(94),r(64),r(37),r(39),r(32),r(54);var n=r(21),o=r(22),c=(r(28),r(95),r(183),r(38),r(49),r(25));function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function d(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var m=/;(?![^(]*\))/g,h=/:(.*)/;function y(style){var e,t={},r=d(style.split(m));try{for(r.s();!(e=r.n()).done;){var n=e.value.split(h),l=Object(o.a)(n,2),f=l[0],v=l[1];(f=f.trim())&&("string"==typeof v&&(v=v.trim()),t[Object(c.c)(f)]=v)}}catch(e){r.e(e)}finally{r.f()}return t}function _(){for(var e,t={},i=arguments.length;i--;)for(var r=0,n=Object.keys(arguments[i]);r<n.length;r++)switch(e=n[r]){case"class":case"directives":arguments[i][e]&&(t[e]=O(t[e],arguments[i][e]));break;case"style":arguments[i][e]&&(t[e]=w(t[e],arguments[i][e]));break;case"staticClass":if(!arguments[i][e])break;void 0===t[e]&&(t[e]=""),t[e]&&(t[e]+=" "),t[e]+=arguments[i][e].trim();break;case"on":case"nativeOn":arguments[i][e]&&(t[e]=j(t[e],arguments[i][e]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[i][e])break;t[e]||(t[e]={}),t[e]=f(f({},arguments[i][e]),t[e]);break;default:t[e]||(t[e]=arguments[i][e])}return t}function w(e,source){return e?source?(e=Object(c.G)("string"==typeof e?y(e):e)).concat("string"==typeof source?y(source):source):e:source}function O(e,source){return source?e&&e?Object(c.G)(e).concat(source):source:e}function j(){if(!(arguments.length<=0?void 0:arguments[0]))return arguments.length<=1?void 0:arguments[1];if(!(arguments.length<=1?void 0:arguments[1]))return arguments.length<=0?void 0:arguments[0];for(var e={},i=2;i--;){var t=i<0||arguments.length<=i?void 0:arguments[i];for(var r in t)t[r]&&(e[r]?e[r]=[].concat(t[r],e[r]):e[r]=t[r])}return e}},530:function(e,t,r){"use strict";r(40),r(49),r(92),r(389),r(657);var n=r(25);function o(e,t){e.style.transform=t,e.style.webkitTransform=t}function c(e){return"TouchEvent"===e.constructor.name}function l(e){return"KeyboardEvent"===e.constructor.name}var f=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=0,o=0;if(!l(e)){var f=t.getBoundingClientRect(),d=c(e)?e.touches[e.touches.length-1]:e;n=d.clientX-f.left,o=d.clientY-f.top}var v=0,m=.3;t._ripple&&t._ripple.circle?(m=.15,v=t.clientWidth/2,v=r.center?v:v+Math.sqrt(Math.pow(n-v,2)+Math.pow(o-v,2))/4):v=Math.sqrt(Math.pow(t.clientWidth,2)+Math.pow(t.clientHeight,2))/2;var h="".concat((t.clientWidth-2*v)/2,"px"),y="".concat((t.clientHeight-2*v)/2,"px"),_=r.center?h:"".concat(n-v,"px"),w=r.center?y:"".concat(o-v,"px");return{radius:v,scale:m,x:_,y:w,centerX:h,centerY:y}},d=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t._ripple&&t._ripple.enabled){var n=document.createElement("span"),c=document.createElement("span");n.appendChild(c),n.className="v-ripple__container",r.class&&(n.className+=" ".concat(r.class));var l=f(e,t,r),d=l.radius,v=l.scale,m=l.x,h=l.y,y=l.centerX,_=l.centerY,w="".concat(2*d,"px");c.className="v-ripple__animation",c.style.width=w,c.style.height=w,t.appendChild(n);var O=window.getComputedStyle(t);O&&"static"===O.position&&(t.style.position="relative",t.dataset.previousPosition="static"),c.classList.add("v-ripple__animation--enter"),c.classList.add("v-ripple__animation--visible"),o(c,"translate(".concat(m,", ").concat(h,") scale3d(").concat(v,",").concat(v,",").concat(v,")")),c.dataset.activated=String(performance.now()),setTimeout((function(){c.classList.remove("v-ripple__animation--enter"),c.classList.add("v-ripple__animation--in"),o(c,"translate(".concat(y,", ").concat(_,") scale3d(1,1,1)"))}),0)}},v=function(e){if(e&&e._ripple&&e._ripple.enabled){var t=e.getElementsByClassName("v-ripple__animation");if(0!==t.length){var r=t[t.length-1];if(!r.dataset.isHiding){r.dataset.isHiding="true";var n=performance.now()-Number(r.dataset.activated),o=Math.max(250-n,0);setTimeout((function(){r.classList.remove("v-ripple__animation--in"),r.classList.add("v-ripple__animation--out"),setTimeout((function(){1===e.getElementsByClassName("v-ripple__animation").length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),r.parentNode&&e.removeChild(r.parentNode)}),300)}),o)}}}};function m(e){return void 0===e||!!e}function h(e){var t={},element=e.currentTarget;if(element&&element._ripple&&!element._ripple.touched&&!e.rippleStop){if(e.rippleStop=!0,c(e))element._ripple.touched=!0,element._ripple.isTouch=!0;else if(element._ripple.isTouch)return;if(t.center=element._ripple.centered||l(e),element._ripple.class&&(t.class=element._ripple.class),c(e)){if(element._ripple.showTimerCommit)return;element._ripple.showTimerCommit=function(){d(e,element,t)},element._ripple.showTimer=window.setTimeout((function(){element&&element._ripple&&element._ripple.showTimerCommit&&(element._ripple.showTimerCommit(),element._ripple.showTimerCommit=null)}),80)}else d(e,element,t)}}function y(e){var element=e.currentTarget;if(element&&element._ripple){if(window.clearTimeout(element._ripple.showTimer),"touchend"===e.type&&element._ripple.showTimerCommit)return element._ripple.showTimerCommit(),element._ripple.showTimerCommit=null,void(element._ripple.showTimer=setTimeout((function(){y(e)})));window.setTimeout((function(){element._ripple&&(element._ripple.touched=!1)})),v(element)}}function _(e){var element=e.currentTarget;element&&element._ripple&&(element._ripple.showTimerCommit&&(element._ripple.showTimerCommit=null),window.clearTimeout(element._ripple.showTimer))}var w=!1;function O(e){w||e.keyCode!==n.y.enter&&e.keyCode!==n.y.space||(w=!0,h(e))}function j(e){w=!1,y(e)}function k(e){!0===w&&(w=!1,y(e))}function E(e,t,r){var n=m(t.value);n||v(e),e._ripple=e._ripple||{},e._ripple.enabled=n;var o=t.value||{};o.center&&(e._ripple.centered=!0),o.class&&(e._ripple.class=t.value.class),o.circle&&(e._ripple.circle=o.circle),n&&!r?(e.addEventListener("touchstart",h,{passive:!0}),e.addEventListener("touchend",y,{passive:!0}),e.addEventListener("touchmove",_,{passive:!0}),e.addEventListener("touchcancel",y),e.addEventListener("mousedown",h),e.addEventListener("mouseup",y),e.addEventListener("mouseleave",y),e.addEventListener("keydown",O),e.addEventListener("keyup",j),e.addEventListener("blur",k),e.addEventListener("dragstart",y,{passive:!0})):!n&&r&&C(e)}function C(e){e.removeEventListener("mousedown",h),e.removeEventListener("touchstart",h),e.removeEventListener("touchend",y),e.removeEventListener("touchmove",_),e.removeEventListener("touchcancel",y),e.removeEventListener("mouseup",y),e.removeEventListener("mouseleave",y),e.removeEventListener("keydown",O),e.removeEventListener("keyup",j),e.removeEventListener("dragstart",y),e.removeEventListener("blur",k)}var T={bind:function(e,t,r){E(e,t,!1)},unbind:function(e){delete e._ripple,C(e)},update:function(e,t){t.value!==t.oldValue&&E(e,t,m(t.oldValue))}};t.a=T},532:function(e,t,r){"use strict";var n=r(7),o=r(391);n({target:"String",proto:!0,forced:r(392)("small")},{small:function(){return o(this,"small","","")}})},539:function(e,t,r){"use strict";var n=r(3);function o(e){return function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(t,n)||this.$delete(this.$data[e],n);for(var o in t)this.$set(this.$data[e],o,t[o])}}t.a=n.default.extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",o("attrs$"),{immediate:!0}),this.$watch("$listeners",o("listeners$"),{immediate:!0})}})},545:function(e,t,r){"use strict";var n=r(7),o=r(391);n({target:"String",proto:!0,forced:r(392)("fixed")},{fixed:function(){return o(this,"tt","","")}})},564:function(e,t,r){"use strict";var n=r(7),o=r(391);n({target:"String",proto:!0,forced:r(392)("link")},{link:function(e){return o(this,"a","href",e)}})},657:function(e,t,r){var content=r(658);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(47).default)("04604cc2",content,!0,{sourceMap:!1})},658:function(e,t,r){var n=r(46)(!1);n.push([e.i,".v-ripple__container{border-radius:inherit;width:100%;height:100%;z-index:0;contain:strict}.v-ripple__animation,.v-ripple__container{color:inherit;position:absolute;left:0;top:0;overflow:hidden;pointer-events:none}.v-ripple__animation{border-radius:50%;background:currentColor;opacity:0;will-change:transform,opacity}.v-ripple__animation--enter{transition:none;opacity:0}.v-ripple__animation--in{transition:transform .25s cubic-bezier(.4,0,.2,1),opacity .1s cubic-bezier(.4,0,.2,1);opacity:.25}.v-ripple__animation--out{transition:opacity .3s cubic-bezier(.4,0,.2,1);opacity:0}",""]),e.exports=n},920:function(e,t,r){"use strict";r.r(t);var n=r(4),o=(r(65),r(31),r(123),r(97)),c=(r(35),{data:function(){return{active:!1}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.startup();case 2:case"end":return t.stop()}}),t)})))()},methods:{startup:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},openLink:function(link){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.open(link,"_blank");case 1:case"end":return e.stop()}}),e)})))()}},props:{brokers:{default:[]}},computed:{user:function(){return o.a.user},point:function(){return o.a.point},tier:function(){return o.a.tier},tiers:function(){return o.a.tiers},setting:function(){return o.a.setting}}}),l=r(56),f=r(73),d=r.n(f),v=r(580),m=r(866),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[[r("div",{staticClass:"inline-flex "},[r("vs-button",{staticClass:"btn-chat",attrs:{block:"",color:"#0052F9"},on:{click:function(t){e.active=!e.active}}},[r("span",{staticClass:"span"},[e._v("\n                    Copy Master\n                ")])]),e._v(" "),e.active?r("vs-dialog",{attrs:{"prevent-close":""},scopedSlots:e._u([{key:"header",fn:function(){return[r("h4",{staticClass:"not-margin"},[r("b",[e._v("Select Broker")])])]},proxy:!0},{key:"footer",fn:function(){},proxy:!0}],null,!1,942467314),model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[e._v(" "),r("div",{staticClass:"con-form"},[r("v-container",e._l(e.brokers,(function(t,n){return t.is_active?r("div",{key:n},[r("v-btn",{staticClass:"w-full",attrs:{blog:"","x-large":""},on:{click:function(r){return e.openLink(t.link)}}},[r("img",{staticClass:"h-10",attrs:{src:e.$url+t.image}}),e._v("  "+e._s(t.name)+"\n                              ")])],1):e._e()})),0)],1)]):e._e()],1)]],2)}),[],!1,null,"3512e2d2",null);t.default=component.exports;d()(component,{VBtn:v.a,VContainer:m.a})}}]);