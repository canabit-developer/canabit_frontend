(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{179:function(e,t,r){"use strict";var n=r(3);n.default.prototype.$ccc="text-4xl bg-green-600 p-6",n.default.prototype.$home={card:"text-4xl bg-green-600 p-6"},n.default.prototype.$url="https://www.admin-canabit.tk/"},180:function(e,t,r){"use strict";var n=r(3),o=r(384),c=r.n(o);r(516);n.default.use(c.a)},220:function(e,t,r){var content=r(433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(47).default)("6c4e81e0",content,!0,{sourceMap:!1})},31:function(e,t,r){"use strict";r.d(t,"a",(function(){return T}));r(57);var n=r(4),o=r(13),c=r(14),f=r(23),l=r(19),h=r(8),d=r(16),m=(r(65),r(39),r(9),r(184),r(49),r(28),r(95),r(124),r(401),r(447),r(453),r(455),r(456),r(457),r(460),r(461),r(462),r(463),r(464),r(465),r(466),r(467),r(469),r(470),r(471),r(472),r(473),r(474),r(475),r(476),r(477),r(478),r(479),r(67)),v=r(45),j=r(123),y=r.n(j),k=r(35),x=r(99),w=r(0),R=r.n(w);function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(h.a)(e);if(t){var o=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var _=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},M=function(e){Object(f.a)(A,e);var t,l,h,d,m,j,x,w,_,M,T,z,S,H=O(A);function A(){var e;return Object(o.a)(this,A),(e=H.apply(this,arguments)).token=null,e.url=v.a.defaults.baseURL,e}return Object(c.a)(A,[{key:"getHttp",value:(S=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(t).then((function(e){return e.data})).catch((function(e){return e.response.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e){return S.apply(this,arguments)})},{key:"postHttpAlert",value:(z=Object(n.a)(regeneratorRuntime.mark((function e(t,form){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post(t,form).then((function(e){return k.a.alert("Successfully Saved"),e.data})).catch((function(e){return k.a.alert("Failed to save data","error"),console.log(e),e.response.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e,t){return z.apply(this,arguments)})},{key:"postHttp",value:(T=Object(n.a)(regeneratorRuntime.mark((function e(t,form){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post(t,form).then((function(e){return e.data})).catch((function(e){return e.response.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e,t){return T.apply(this,arguments)})},{key:"putHttp",value:(M=Object(n.a)(regeneratorRuntime.mark((function e(t,form){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.put(t,form).then((function(e){return e.data})).catch((function(e){return e.response.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e,t){return M.apply(this,arguments)})},{key:"putHttpAlert",value:(_=Object(n.a)(regeneratorRuntime.mark((function e(t,form){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.confirm("Are you sure you want to edit the information?");case 2:if(!e.sent){e.next=7;break}return e.next=6,v.a.put(t,form).then((function(e){return k.a.alert("Successfully edited"),e.data})).catch((function(e){return k.a.alert("Failed to edit data","error"),e.response.data}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)}))),function(e,t){return _.apply(this,arguments)})},{key:"deleteHttp",value:(w=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete(t).then((function(e){return e.data})).catch((function(e){return e.response.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e){return w.apply(this,arguments)})},{key:"deleteHttpAlert",value:(x=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.confirm("Are you sure you want to delete the data?");case 2:if(!e.sent){e.next=7;break}return e.next=6,v.a.delete(t).then((function(e){return k.a.alert("Successfully deleted"),!0})).catch((function(e){return k.a.alert("Failed to delete data","error"),!1}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)}))),function(e){return x.apply(this,arguments)})},{key:"putImageHttpAlert",value:(j=Object(n.a)(regeneratorRuntime.mark((function e(t,form){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.confirm("Are you sure you want to edit the information?");case 2:if(!e.sent){e.next=7;break}return e.next=6,v.a.put(t,form,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return k.a.alert("Successfully edited"),e.data})).catch((function(e){return k.a.alert("Failed to edit data","error"),e.response.data}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)}))),function(e,t){return j.apply(this,arguments)})},{key:"fillData",value:function(e,t,r){return y.a.find(e,(function(e){return e[t]==r}))}},{key:"convertDate",value:function(e){return R()(e).format("DD/MM/YYYY")}},{key:"getBase64",value:(m=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){return e(n.result)},n.onerror=function(e){return r(e)}})));case 1:case"end":return e.stop()}}),e)}))),function(e){return m.apply(this,arguments)})},{key:"setWaterMark",value:(d=Object(n.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r(400),e.abrupt("return",n([t]).image(n.text.center("สำหรับสมัครสมาชิก Cashback  เท่านั้น","50px Josefin Slab","blue",.5)).then((function(img){return img})));case 2:case"end":return e.stop()}}),e)}))),function(e){return d.apply(this,arguments)})},{key:"dataURLtoFile",value:(h=Object(n.a)(regeneratorRuntime.mark((function e(t){var n,o,c,f,l,h,d,m,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=r(0),o=n(),c=t.substring("data:image/".length,t.indexOf(";base64")),f="".concat(o.format("ddDDmmyyhhmmss"),".").concat(c),console.log(f),l=t.split(","),h=l[0].match(/:(.*?);/)[1],d=atob(l[1]),m=d.length,v=new Uint8Array(m);m--;)v[m]=d.charCodeAt(m);return e.abrupt("return",new File([v],f,{type:h}));case 8:case"end":return e.stop()}}),e)}))),function(e){return h.apply(this,arguments)})},{key:"fileToBase64",value:(l=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=new FileReader).addEventListener("load",(function(){return r(n.result)})),n.readAsDataURL(t);case 3:case"end":return e.stop()}}),e)}))),function(e,t){return l.apply(this,arguments)})},{key:"getChoice",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getHttp("/api/webconfig/choice/?is_active=true&type__name=".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),A}(m.b),T=new(M=_([Object(m.a)({generateMutationSetters:!0})],M))({store:x.a,name:"Core"})},35:function(e,t,r){"use strict";r.d(t,"a",(function(){return R}));var n=r(4),o=r(13),c=r(14),f=r(23),l=r(19),h=r(8),d=r(16),m=(r(65),r(39),r(9),r(57),r(67)),v=r(146),j=r.n(v),y=r(99);function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(h.a)(e);if(t){var o=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var x=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},w=function(e){Object(f.a)(w,e);var t,r,l,h,d,m,v,y,x=k(w);function w(){var e;return Object(o.a)(this,w),(e=x.apply(this,arguments)).loading=!1,e.loadTxt="Loading..",e.snackTxt="",e.snacking=!1,e.snackColor="success",e}return Object(c.a)(w,[{key:"onSnack",value:(y=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:"success",e.next=3,this.offSnack();case 3:this.snacking=!0,this.snackTxt=t,this.snackColor=r;case 6:case"end":return e.stop()}}),e,this)}))),function(e){return y.apply(this,arguments)})},{key:"offSnack",value:(v=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.snacking=!1;case 1:case"end":return e.stop()}}),e,this)}))),function(){return v.apply(this,arguments)})},{key:"switchLoad",value:(m=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loading=t;case 1:case"end":return e.stop()}}),e,this)}))),function(e){return m.apply(this,arguments)})},{key:"onLoad",value:(d=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadTxt=t,this.loading=!0;case 2:case"end":return e.stop()}}),e,this)}))),function(e){return d.apply(this,arguments)})},{key:"offLoad",value:(h=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loading=!1;case 1:case"end":return e.stop()}}),e,this)}))),function(){return h.apply(this,arguments)})},{key:"alert",value:(l=Object(n.a)(regeneratorRuntime.mark((function e(){var title,t,text,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return title=r.length>0&&void 0!==r[0]?r[0]:"OK",t=r.length>1&&void 0!==r[1]?r[1]:"success",text=r.length>2&&void 0!==r[2]?r[2]:"",e.next=5,j.a.fire({icon:t,title:title,text:text,confirmButtonText:"OK",confirmButtonColor:"#00E96A"});case 5:case"end":return e.stop()}}),e)}))),function(){return l.apply(this,arguments)})},{key:"alerterror",value:(r=Object(n.a)(regeneratorRuntime.mark((function e(){var title,t,text,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return title=r.length>0&&void 0!==r[0]?r[0]:"Please click the link from the email again.",t=r.length>1&&void 0!==r[1]?r[1]:"error",text=r.length>2&&void 0!==r[2]?r[2]:"",e.next=5,j.a.fire({icon:t,title:title,text:text,confirmButtonText:"OK",confirmButtonColor:"#00E96A"});case 5:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)})},{key:"confirm",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(){var title,t,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return title=r.length>0&&void 0!==r[0]?r[0]:"Are you sure ?",e.next=3,j.a.fire({title:title,showCancelButton:!0,confirmButtonText:"OK",cancelButtonText:"Cancel",confirmButtonColor:"#00E96A"}).then((function(e){return e.isConfirmed}));case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})}]),w}(m.b),R=new(w=x([Object(m.a)({generateMutationSetters:!0})],w))({store:y.a,name:"Web"})},372:function(e,t,r){var content=r(500);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(47).default)("56b15182",content,!0,{sourceMap:!1})},373:function(e,t,r){var content=r(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(47).default)("b05ea684",content,!0,{sourceMap:!1})},374:function(e,t,r){var content=r(506);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(47).default)("5ea66c73",content,!0,{sourceMap:!1})},386:function(e,t,r){"use strict";var n=r(4),o=(r(28),r(66),r(65),r(97)),c={name:"DefaultLayout",data:function(){return{isDrawerOpen:!1,user:{},response:!1}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.initial();case 2:return t.next=4,o.a.checkUser();case 4:case"end":return t.stop()}}),t)})))()},methods:{initial:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.checkToken();case 2:return t.next=4,o.a.setUser();case 4:return e.user=t.sent,t.next=7,e.checkUser();case 7:e.response=!!e.user.id;case 8:case"end":return t.stop()}}),t)})))()},checkUser:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.getUser();case 2:if(t.sent.id){t.next=6;break}return t.next=6,e.$router.replace("/home/");case 6:case"end":return t.stop()}}),t)})))()}},computed:{tier:function(){return o.a.tier}}},f=(r(499),r(56)),l=r(73),h=r.n(l),d=r(522),m=r(523),component=Object(f.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.response?r("v-app",{staticClass:"bg-main"},[r("Core-Loading"),e._v(" "),r("UserMenu-MainMenu"),e._v(" "),r("v-main",[r("Core-Notification"),e._v(" "),r("div",{staticClass:" md:ml-28 md:mr-28"},[r("Nuxt")],1)],1)],1):e._e()}),[],!1,null,null,null);t.a=component.exports;h()(component,{VApp:d.a,VMain:m.a})},387:function(e,t,r){"use strict";var n={},o=(r(503),r(56)),c=r(73),f=r.n(c),l=r(522),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-app",[r("Home-Navbar"),e._v(" "),r("Nuxt"),e._v(" "),r("Home-Footer")],1)],1)}),[],!1,null,null,null);t.a=component.exports;f()(component,{VApp:l.a})},388:function(e,t,r){"use strict";var n={},o=(r(505),r(56)),c=r(73),f=r.n(c),l=r(522),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-app",[r("Core-Notification"),e._v(" "),r("Core-Loading"),e._v(" "),r("Nuxt")],1)],1)}),[],!1,null,null,null);t.a=component.exports;f()(component,{VApp:l.a})},402:function(e,t,r){r(403),e.exports=r(404)},432:function(e,t,r){"use strict";r(220)},433:function(e,t,r){var n=r(46)(!1);n.push([e.i,"h1[data-v-572efc6d]{font-size:20px}",""]),e.exports=n},438:function(e,t,r){var content=r(439);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(47).default)("2998b330",content,!0,{sourceMap:!1})},439:function(e,t,r){var n=r(46)(!1);n.push([e.i,".bg-primary-g{background:#4ade80;background:linear-gradient(90deg,#4ade80,#00f1cd)}.bg-main{background:#fff!important}.light-text{color:rgba(94,86,105,.68)!important}.navbar-active{background-attachment:fixed;background-size:cover}.my-point,.navbar-active{background-color:#4ade80}",""]),e.exports=n},440:function(e,t,r){var content=r(441);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(47).default)("2a4641a2",content,!0,{sourceMap:!1})},441:function(e,t,r){var n=r(46)(!1);n.push([e.i,"",""]),e.exports=n},442:function(e,t,r){var content=r(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(47).default)("aaec6fdc",content,!0,{sourceMap:!1})},443:function(e,t,r){var n=r(46)(!1);n.push([e.i,"",""]),e.exports=n},45:function(e,t,r){"use strict";(function(e){var n=r(89),o=r.n(n),c={baseURL:e.env.baseURL||e.env.apiUrl||"https://www.admin-canabit.tk"},f=o.a.create(c);t.a=f}).call(this,r(170))},498:function(e,t,r){var map={"./af":237,"./af.js":237,"./ar":238,"./ar-dz":239,"./ar-dz.js":239,"./ar-kw":240,"./ar-kw.js":240,"./ar-ly":241,"./ar-ly.js":241,"./ar-ma":242,"./ar-ma.js":242,"./ar-sa":243,"./ar-sa.js":243,"./ar-tn":244,"./ar-tn.js":244,"./ar.js":238,"./az":245,"./az.js":245,"./be":246,"./be.js":246,"./bg":247,"./bg.js":247,"./bm":248,"./bm.js":248,"./bn":249,"./bn-bd":250,"./bn-bd.js":250,"./bn.js":249,"./bo":251,"./bo.js":251,"./br":252,"./br.js":252,"./bs":253,"./bs.js":253,"./ca":254,"./ca.js":254,"./cs":255,"./cs.js":255,"./cv":256,"./cv.js":256,"./cy":257,"./cy.js":257,"./da":258,"./da.js":258,"./de":259,"./de-at":260,"./de-at.js":260,"./de-ch":261,"./de-ch.js":261,"./de.js":259,"./dv":262,"./dv.js":262,"./el":263,"./el.js":263,"./en-au":264,"./en-au.js":264,"./en-ca":265,"./en-ca.js":265,"./en-gb":266,"./en-gb.js":266,"./en-ie":267,"./en-ie.js":267,"./en-il":268,"./en-il.js":268,"./en-in":269,"./en-in.js":269,"./en-nz":270,"./en-nz.js":270,"./en-sg":271,"./en-sg.js":271,"./eo":272,"./eo.js":272,"./es":273,"./es-do":274,"./es-do.js":274,"./es-mx":275,"./es-mx.js":275,"./es-us":276,"./es-us.js":276,"./es.js":273,"./et":277,"./et.js":277,"./eu":278,"./eu.js":278,"./fa":279,"./fa.js":279,"./fi":280,"./fi.js":280,"./fil":281,"./fil.js":281,"./fo":282,"./fo.js":282,"./fr":283,"./fr-ca":284,"./fr-ca.js":284,"./fr-ch":285,"./fr-ch.js":285,"./fr.js":283,"./fy":286,"./fy.js":286,"./ga":287,"./ga.js":287,"./gd":288,"./gd.js":288,"./gl":289,"./gl.js":289,"./gom-deva":290,"./gom-deva.js":290,"./gom-latn":291,"./gom-latn.js":291,"./gu":292,"./gu.js":292,"./he":293,"./he.js":293,"./hi":294,"./hi.js":294,"./hr":295,"./hr.js":295,"./hu":296,"./hu.js":296,"./hy-am":297,"./hy-am.js":297,"./id":298,"./id.js":298,"./is":299,"./is.js":299,"./it":300,"./it-ch":301,"./it-ch.js":301,"./it.js":300,"./ja":302,"./ja.js":302,"./jv":303,"./jv.js":303,"./ka":304,"./ka.js":304,"./kk":305,"./kk.js":305,"./km":306,"./km.js":306,"./kn":307,"./kn.js":307,"./ko":308,"./ko.js":308,"./ku":309,"./ku.js":309,"./ky":310,"./ky.js":310,"./lb":311,"./lb.js":311,"./lo":312,"./lo.js":312,"./lt":313,"./lt.js":313,"./lv":314,"./lv.js":314,"./me":315,"./me.js":315,"./mi":316,"./mi.js":316,"./mk":317,"./mk.js":317,"./ml":318,"./ml.js":318,"./mn":319,"./mn.js":319,"./mr":320,"./mr.js":320,"./ms":321,"./ms-my":322,"./ms-my.js":322,"./ms.js":321,"./mt":323,"./mt.js":323,"./my":324,"./my.js":324,"./nb":325,"./nb.js":325,"./ne":326,"./ne.js":326,"./nl":327,"./nl-be":328,"./nl-be.js":328,"./nl.js":327,"./nn":329,"./nn.js":329,"./oc-lnc":330,"./oc-lnc.js":330,"./pa-in":331,"./pa-in.js":331,"./pl":332,"./pl.js":332,"./pt":333,"./pt-br":334,"./pt-br.js":334,"./pt.js":333,"./ro":335,"./ro.js":335,"./ru":336,"./ru.js":336,"./sd":337,"./sd.js":337,"./se":338,"./se.js":338,"./si":339,"./si.js":339,"./sk":340,"./sk.js":340,"./sl":341,"./sl.js":341,"./sq":342,"./sq.js":342,"./sr":343,"./sr-cyrl":344,"./sr-cyrl.js":344,"./sr.js":343,"./ss":345,"./ss.js":345,"./sv":346,"./sv.js":346,"./sw":347,"./sw.js":347,"./ta":348,"./ta.js":348,"./te":349,"./te.js":349,"./tet":350,"./tet.js":350,"./tg":351,"./tg.js":351,"./th":352,"./th.js":352,"./tk":353,"./tk.js":353,"./tl-ph":354,"./tl-ph.js":354,"./tlh":355,"./tlh.js":355,"./tr":356,"./tr.js":356,"./tzl":357,"./tzl.js":357,"./tzm":358,"./tzm-latn":359,"./tzm-latn.js":359,"./tzm.js":358,"./ug-cn":360,"./ug-cn.js":360,"./uk":361,"./uk.js":361,"./ur":362,"./ur.js":362,"./uz":363,"./uz-latn":364,"./uz-latn.js":364,"./uz.js":363,"./vi":365,"./vi.js":365,"./x-pseudo":366,"./x-pseudo.js":366,"./yo":367,"./yo.js":367,"./zh-cn":368,"./zh-cn.js":368,"./zh-hk":369,"./zh-hk.js":369,"./zh-mo":370,"./zh-mo.js":370,"./zh-tw":371,"./zh-tw.js":371};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=498},499:function(e,t,r){"use strict";r(372)},500:function(e,t,r){var n=r(46)(!1);n.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+Thai&display=swap);"]),n.push([e.i,'*{font-family:"Noto Sans Thai",sans-serif!important}ul.breadcrumb{border-radius:50px;padding:4px 10px;list-style:none;background-color:#eee}ul.breadcrumb li{display:inline;font-size:12px}ul.breadcrumb li+li:before{padding:8px;color:#000;content:"/\\00a0"}ul.breadcrumb li a{color:#0275d8;text-decoration:none}ul.breadcrumb li a:hover{color:#01447e;text-decoration:underline}',""]),e.exports=n},503:function(e,t,r){"use strict";r(373)},504:function(e,t,r){var n=r(46)(!1);n.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+Thai&display=swap);"]),n.push([e.i,'*{font-family:"Noto Sans Thai",sans-serif!important}',""]),e.exports=n},505:function(e,t,r){"use strict";r(374)},506:function(e,t,r){var n=r(46)(!1);n.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+Thai&display=swap);"]),n.push([e.i,'*{font-family:"Noto Sans Thai",sans-serif!important}',""]),e.exports=n},80:function(e,t,r){"use strict";var n={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(432),r(56)),c=r(73),f=r.n(c),l=r(522),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{dark:""}},[404===e.error.statusCode?r("h1",[e._v("\n    "+e._s(e.pageNotFound)+"\n  ")]):r("h1",[e._v("\n    "+e._s(e.otherError)+"\n  ")]),e._v(" "),r("Core-Notification"),e._v(" "),r("NuxtLink",{attrs:{to:"/"}},[e._v("\n    Home page\n  ")])],1)}),[],!1,null,"572efc6d",null);t.a=component.exports;f()(component,{VApp:l.a})},97:function(e,t,r){"use strict";r.d(t,"a",(function(){return M}));r(57);var n=r(4),o=r(13),c=r(14),f=r(23),l=r(19),h=r(8),d=r(16),m=(r(65),r(39),r(9),r(37),r(40),r(67)),v=r(123),j=r.n(v),y=r(31),k=r(35),x=r(45),w=r(99);function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(h.a)(e);if(t){var o=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var O=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},_=function(e){Object(f.a)(B,e);var t,r,l,h,d,m,v,w,O,_,M,T,z,S,H,A,C,N,U,L=R(B);function B(){var e;return Object(o.a)(this,B),(e=L.apply(this,arguments)).token=localStorage.getItem("token"),e.user=null,e.kyc={},e.point={},e.tier={},e.tiers=[],e.setting=[],e}return Object(c.a)(B,[{key:"setUser",value:(U=Object(n.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.getHttp("/api/auth/v2/profile/");case 2:if(t=e.sent,this.user=t,!this.user.id){e.next=15;break}return e.next=7,this.getMyKyc();case 7:return e.next=9,this.getMypoint();case 9:return e.next=11,this.getMyTier();case 11:return e.next=13,this.checkTier();case 13:return e.next=15,this.getSetting();case 15:return e.abrupt("return",t);case 16:case"end":return e.stop()}}),e,this)}))),function(){return U.apply(this,arguments)})},{key:"getMyKyc",value:(N=Object(n.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.getHttp("/api/account/kyc/?user=".concat(this.user.id));case 2:(t=e.sent).length>0&&(this.kyc=t[t.length-1]);case 4:case"end":return e.stop()}}),e,this)}))),function(){return N.apply(this,arguments)})},{key:"getSetting",value:(C=Object(n.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.getHttp("/api/webconfig/setting/");case 2:(t=e.sent).length>0&&(this.setting=JSON.parse(t[t.length-1].value));case 4:case"end":return e.stop()}}),e,this)}))),function(){return C.apply(this,arguments)})},{key:"getMypoint",value:(A=Object(n.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.getHttp("/api/account/userpoint/?user=".concat(this.user.id));case 2:(t=e.sent).length>0&&(this.point=t[t.length-1]);case 4:case"end":return e.stop()}}),e,this)}))),function(){return A.apply(this,arguments)})},{key:"getMyTier",value:(H=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.getHttp("/api/account/tier/".concat(this.point.tier,"/"));case 2:this.tier=e.sent;case 3:case"end":return e.stop()}}),e,this)}))),function(){return H.apply(this,arguments)})},{key:"checkTier",value:(S=Object(n.a)(regeneratorRuntime.mark((function e(){var t,r,n,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.getHttp("/api/account/tier/");case 2:return t=e.sent,this.tiers=t,e.next=6,j.a.filter(t,(function(e){return o.point.total>=e.length}));case 6:if(r=e.sent,n=r.length>0?r[r.length-1]:this.tier,this.tier.id!=n.id){e.next=11;break}e.next=13;break;case 11:return e.next=13,this.updateMyTier(n);case 13:case"end":return e.stop()}}),e,this)}))),function(){return S.apply(this,arguments)})},{key:"updateMyTier",value:(z=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.putHttp("/api/account/userpoint/".concat(this.point.id,"/"),{tier:t.id});case 2:return e.sent,e.next=5,this.getMypoint();case 5:return e.next=7,k.a.alert("Your Point Update to ".concat(t.name));case 7:location.reload();case 8:case"end":return e.stop()}}),e,this)}))),function(e){return z.apply(this,arguments)})},{key:"getUser",value:(T=Object(n.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.getHttp("/api/auth/v2/profile/");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),function(){return T.apply(this,arguments)})},{key:"login",value:(M=Object(n.a)(regeneratorRuntime.mark((function e(form){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.reToken();case 2:return e.next=4,y.a.postHttp("/api/auth/v1/login/",form);case 4:return t=e.sent,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return M.apply(this,arguments)})},{key:"register",value:(_=Object(n.a)(regeneratorRuntime.mark((function e(form){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.reToken();case 2:return e.next=4,y.a.postHttp("/api/auth/v2/register/",form);case 4:return t=e.sent,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return _.apply(this,arguments)})},{key:"logPoint",value:(O=Object(n.a)(regeneratorRuntime.mark((function e(t,r,n){var form;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return form={received_from:t,point:r,type:n,status:0,user:this.user.id},e.next=3,y.a.postHttp("/api/account/userpointhistory/",form);case 3:e.sent.id;case 5:case"end":return e.stop()}}),e,this)}))),function(e,t,r){return O.apply(this,arguments)})},{key:"cutPoint",value:(w=Object(n.a)(regeneratorRuntime.mark((function e(t){var form;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(form=this.point).current=form.current-t,e.next=4,y.a.putHttp("/api/account/userpoint/".concat(this.point.id,"/"),form);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return w.apply(this,arguments)})},{key:"addPoint",value:(v=Object(n.a)(regeneratorRuntime.mark((function e(t){var form;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(form=this.point).current=form.current+t,form.total=form.total+t,e.next=5,y.a.putHttp("/api/account/userpoint/".concat(form.id,"/"),form);case 5:case"end":return e.stop()}}),e,this)}))),function(e){return v.apply(this,arguments)})},{key:"reToken",value:(m=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:x.a.defaults.headers.common.Authorization="";case 1:case"end":return e.stop()}}),e)}))),function(){return m.apply(this,arguments)})},{key:"storeToken",value:(d=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),x.a.defaults.headers.common.Authorization=null!=t?"Token ".concat(t):"";case 2:case"end":return e.stop()}}),e)}))),function(e){return d.apply(this,arguments)})},{key:"storeTokenToStorage",value:(h=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem("token",t);case 1:case"end":return e.stop()}}),e)}))),function(e){return h.apply(this,arguments)})},{key:"checkToken",value:(l=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==this.token){e.next=3;break}return e.next=3,this.storeToken(this.token);case 3:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})},{key:"checkUser",value:(r=Object(n.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getUser();case 2:if(t=e.sent,!this.token){e.next=11;break}if(t.id){e.next=11;break}return alert("Session หมดอายุ"),e.next=8,this.reToken();case 8:return e.next=10,this.logout();case 10:location.reload();case 11:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"logout",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.clear(),e.next=3,y.a.postHttp("/auth/logout/",{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})}]),B}(m.b),M=new(_=O([Object(m.a)({generateMutationSetters:!0})],_))({store:w.a,name:"Auth"})},99:function(e,t,r){"use strict";var n=r(3),o=r(174);n.default.use(o.a),t.a=new o.a.Store({state:{},mutations:{},actions:{},modules:{}})}},[[402,112,14,113]]]);