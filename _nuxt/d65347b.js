(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{408:function(t,e,n){"use strict";n.d(e,"a",(function(){return k}));var r=n(15),c=n(13),o=n(14),f=n(30),l=n(23),d=n(10),h=n(22),v=(n(85),n(40),n(6),n(70),n(422)),m=n(411),y=n.n(m),O=n(0),j=n(378);O.default.use(j.a);var R=new j.a.Store({state:{},mutations:{},actions:{},modules:{}});function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var x=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},_=function(t){Object(f.a)(m,t);var e,n,l,d,h,v=w(m);function m(){var t;return Object(c.a)(this,m),(t=v.apply(this,arguments)).loading=!1,t.loadTxt="Loading..",t}return Object(o.a)(m,[{key:"switchLoad",value:(h=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.loading=e;case 1:case"end":return t.stop()}}),t,this)}))),function(t){return h.apply(this,arguments)})},{key:"onLoad",value:(d=Object(r.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.loadTxt=e,this.loading=!0;case 2:case"end":return t.stop()}}),t,this)}))),function(t){return d.apply(this,arguments)})},{key:"offLoad",value:(l=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.loading=!1;case 1:case"end":return t.stop()}}),t,this)}))),function(){return l.apply(this,arguments)})},{key:"alert",value:(n=Object(r.a)(regeneratorRuntime.mark((function t(){var title,e,text,n=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return title=n.length>0&&void 0!==n[0]?n[0]:"OK",e=n.length>1&&void 0!==n[1]?n[1]:"success",text=n.length>2&&void 0!==n[2]?n[2]:"",t.next=5,y.a.fire({icon:e,title:title,text:text,confirmButtonText:"OK"});case 5:case"end":return t.stop()}}),t)}))),function(){return n.apply(this,arguments)})},{key:"confirm",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){var title,e,n=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return title=n.length>0&&void 0!==n[0]?n[0]:"Are you sure ?",t.next=3,y.a.fire({title:title,showCancelButton:!0,confirmButtonText:"OK",cancelButtonText:"Cancel"}).then((function(t){return t.isConfirmed}));case 3:return e=t.sent,t.abrupt("return",e);case 5:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)})}]),m}(v.b),k=new(_=x([Object(v.a)({generateMutationSetters:!0})],_))({store:R,name:"Web"})},451:function(t,e,n){t.exports=n.p+"img/canabit_a.3f3cec8.jpg"},491:function(t,e,n){"use strict";n.r(e);var r=n(15),c=n(13),o=n(14),f=n(30),l=n(23),d=n(10),h=n(22),v=(n(85),n(40),n(6),n(70),n(408)),m=n(452);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var O=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},j=function(t){Object(f.a)(l,t);var e,n=y(l);function l(){var t;return Object(c.a)(this,l),(t=n.apply(this,arguments)).overlay=!0,t}return Object(o.a)(l,[{key:"created",value:(e=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)}))),function(){return e.apply(this,arguments)})},{key:"loadX",get:function(){return v.a.loading}},{key:"loadTxt",get:function(){return v.a.loadTxt}}]),l}(m.Vue),R=j=O([Object(m.Component)({components:{},computed:{}})],j),w=n(53),x=n(100),_=n.n(x),k=n(340),B=n(398),component=Object(w.a)(R,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-overlay",{attrs:{"z-index":"99",value:t.loadX}},[r("v-btn",{staticClass:" animate__animated animate__pulse animate__infinite\tinfinite",staticStyle:{height:"158px",width:"158px"},attrs:{color:"white",fab:""}},[r("img",{staticClass:"w-auto  h-20   animate__animated animate__bounce animate__infinite infinite",attrs:{src:n(451),alt:""}})]),t._v(" "),r("center",[r("h2",{staticClass:"text-xl animate__animated animate__swing animate__infinite\tinfinite"},[t._v(t._s(t.loadTxt)+"...")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VBtn:k.a,VOverlay:B.a})}}]);