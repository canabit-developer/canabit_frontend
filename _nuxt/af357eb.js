(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{109:function(e,t,r){"use strict";r.d(t,"a",(function(){return _}));r(77);var n=r(3),o=r(20),c=r(21),f=r(33),l=r(28),h=r(14),d=r(13),m=(r(63),r(31),r(10),r(30),r(37),r(82)),v=r(139),j=r.n(v),x=r(57),y=r(41),k=r(56),w=r(110);function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(h.a)(e);if(t){var o=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var O=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},A=function(e){Object(f.a)(H,e);var t,r,l,h,d,m,v,w,O,A,_,T,U,z,S,C,M=R(H);function H(){var e;return Object(o.a)(this,H),(e=M.apply(this,arguments)).token=localStorage.getItem("token"),e.user=null,e.kyc={},e.point={},e.tier={},e.tiers=[],e.setting=[],e}return Object(c.a)(H,[{key:"setUser",value:(C=Object(n.a)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.getHttp("/api/auth/v2/profile/");case 2:return t=e.sent,e.prev=3,e.next=6,x.a.getHttp("/api/auth/v2/initprofile/");case 6:if(r=e.sent,this.user=r.user_profile?r.user_profile:{},this.kyc=r.kyc?r.kyc:{},this.point=r.point_use?r.point_use:{},this.tier=r.mytier?r.mytier:{},this.setting=r.setting?r.setting.value:{},!this.user.id){e.next=15;break}return e.next=15,this.checkTier();case 15:e.next=19;break;case 17:e.prev=17,e.t0=e.catch(3);case 19:return e.abrupt("return",t);case 20:case"end":return e.stop()}}),e,this,[[3,17]])}))),function(){return C.apply(this,arguments)})},{key:"checkTier",value:(S=Object(n.a)(regeneratorRuntime.mark((function e(){var t,r,n,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.getHttp("/api/account/tier/");case 2:return t=e.sent,this.tiers=t,e.next=6,j.a.filter(t,(function(e){return o.point.total>=e.length}));case 6:if(r=e.sent,n=r.length>0?r[r.length-1]:this.tier,this.tier.id!=n.id){e.next=11;break}e.next=13;break;case 11:return e.next=13,this.updateMyTier(n);case 13:case"end":return e.stop()}}),e,this)}))),function(){return S.apply(this,arguments)})},{key:"updateMyTier",value:(z=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.putHttp("/api/account/userpoint/".concat(this.point.id,"/"),{tier:t.id});case 2:return e.sent,e.next=5,this.setUser();case 5:return e.next=7,y.a.alert("Your Point Update to ".concat(t.name));case 7:location.reload();case 8:case"end":return e.stop()}}),e,this)}))),function(e){return z.apply(this,arguments)})},{key:"getUser",value:(U=Object(n.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.getHttp("/api/auth/v2/profile/");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),function(){return U.apply(this,arguments)})},{key:"login",value:(T=Object(n.a)(regeneratorRuntime.mark((function e(form){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.reToken();case 2:return e.next=4,x.a.postHttp("/api/auth/v1/login/",form);case 4:return t=e.sent,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return T.apply(this,arguments)})},{key:"register",value:(_=Object(n.a)(regeneratorRuntime.mark((function e(form){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.reToken();case 2:return e.next=4,x.a.postHttp("/api/auth/v2/register/",form);case 4:return t=e.sent,e.abrupt("return",t);case 6:case"end":return e.stop()}}),e,this)}))),function(e){return _.apply(this,arguments)})},{key:"logPoint",value:(A=Object(n.a)(regeneratorRuntime.mark((function e(t,r,n){var o,form,c=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=c.length>3&&void 0!==c[3]?c[3]:0,form={received_from:t,point:r,type:n,status:o,user:this.user.id},e.next=4,x.a.postHttp("/api/account/userpointhistory/",form);case 4:e.sent.id;case 6:case"end":return e.stop()}}),e,this)}))),function(e,t,r){return A.apply(this,arguments)})},{key:"cutPoint",value:(O=Object(n.a)(regeneratorRuntime.mark((function e(t){var form;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(form=this.point).current=form.current-t,e.next=4,x.a.putHttp("/api/account/userpoint/".concat(this.point.id,"/"),form);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return O.apply(this,arguments)})},{key:"addPoint",value:(w=Object(n.a)(regeneratorRuntime.mark((function e(t){var form;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(form=this.point).current=form.current+t,form.total=form.total+t,e.next=5,x.a.putHttp("/api/account/userpoint/".concat(form.id,"/"),form);case 5:case"end":return e.stop()}}),e,this)}))),function(e){return w.apply(this,arguments)})},{key:"addPointWithoutTotal",value:(v=Object(n.a)(regeneratorRuntime.mark((function e(t){var form;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(form=this.point).current=form.current+t,e.next=4,x.a.putHttp("/api/account/userpoint/".concat(form.id,"/"),form);case 4:case"end":return e.stop()}}),e,this)}))),function(e){return v.apply(this,arguments)})},{key:"reToken",value:(m=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k.a.defaults.headers.common.Authorization="";case 1:case"end":return e.stop()}}),e)}))),function(){return m.apply(this,arguments)})},{key:"storeToken",value:(d=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),k.a.defaults.headers.common.Authorization=null!=t?"Token ".concat(t):"";case 2:case"end":return e.stop()}}),e)}))),function(e){return d.apply(this,arguments)})},{key:"storeTokenToStorage",value:(h=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.setItem("token",t);case 1:case"end":return e.stop()}}),e)}))),function(e){return h.apply(this,arguments)})},{key:"checkToken",value:(l=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==this.token){e.next=3;break}return e.next=3,this.storeToken(this.token);case 3:case"end":return e.stop()}}),e,this)}))),function(){return l.apply(this,arguments)})},{key:"checkUser",value:(r=Object(n.a)(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getUser();case 2:if(t=e.sent,!this.token){e.next=11;break}if(t.id){e.next=11;break}return alert("Session หมดอายุ"),e.next=8,this.reToken();case 8:return e.next=10,this.logout();case 10:location.reload();case 11:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"logout",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.clear(),e.next=3,x.a.postHttp("/auth/logout/",{});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})}]),H}(m.b),_=new(A=O([Object(m.a)({generateMutationSetters:!0})],A))({store:w.a,name:"Auth"})},110:function(e,t,r){"use strict";var n=r(1),o=r(191);n.default.use(o.a),t.a=new o.a.Store({state:{},mutations:{},actions:{},modules:{}})},196:function(e,t,r){"use strict";r(19),r(68),r(52);var n=r(1);n.default.prototype.$ccc="text-4xl bg-green-600 p-6",n.default.prototype.$home={card:"text-4xl bg-green-600 p-6"},n.default.prototype.$url="https://canabit.ml/",n.default.prototype.$furl="https://canabit-developer.github.io/canabit_frontend/",n.default.prototype.$comma=function(e){var t,r,n;r=(t=(e=(e+="").replace(/,/g,"")).split("."))[0],n=t.length>1?"."+t[1]:"";for(var o=/(\d+)(\d{3})/;o.test(r);)r=r.replace(o,"$1,$2");return r+n}},197:function(e,t,r){"use strict";var n=r(1),o=r(409),c=r.n(o);r(569);n.default.use(c.a)},198:function(e,t,r){"use strict";var n=r(1),o=r(410),c=r.n(o);r(574);n.default.use(c.a)},244:function(e,t,r){var content=r(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("6c4e81e0",content,!0,{sourceMap:!1})},396:function(e,t,r){var content=r(536);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("56b15182",content,!0,{sourceMap:!1})},403:function(e,t,r){var content=r(561);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("b05ea684",content,!0,{sourceMap:!1})},404:function(e,t,r){var content=r(563);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("5ea66c73",content,!0,{sourceMap:!1})},41:function(e,t,r){"use strict";r.d(t,"a",(function(){return R}));var n=r(3),o=r(20),c=r(21),f=r(33),l=r(28),h=r(14),d=r(13),m=(r(63),r(31),r(10),r(77),r(82)),v=r(119),j=r.n(v),x=r(110);function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(h.a)(e);if(t){var o=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var k=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},w=function(e){Object(f.a)(_,e);var t,r,l,h,d,m,v,x,k,w,R,O,A=y(_);function _(){var e;return Object(o.a)(this,_),(e=A.apply(this,arguments)).loading=!1,e.loadTxt="Loading..",e.snackTxt="",e.snacking=!1,e.snackColor="success",e.vs=null,e}return Object(c.a)(_,[{key:"setVuesax",value:(O=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.vs=t;case 1:case"end":return e.stop()}}),e,this)}))),function(e){return O.apply(this,arguments)})},{key:"noti",value:(R=Object(n.a)(regeneratorRuntime.mark((function e(){var t,title,text,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=r.length>0&&void 0!==r[0]?r[0]:"success",title=r.length>1&&void 0!==r[1]?r[1]:"Notification",text=r.length>2&&void 0!==r[2]?r[2]:"Notification Detail",this.vs.notification({color:t,title:title,text:text});case 4:case"end":return e.stop()}}),e,this)}))),function(){return R.apply(this,arguments)})},{key:"onSnack",value:(w=Object(n.a)(regeneratorRuntime.mark((function e(t){var r,n=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.length>1&&void 0!==n[1]?n[1]:"success",e.next=3,this.offSnack();case 3:this.snacking=!0,this.snackTxt=t,this.snackColor=r;case 6:case"end":return e.stop()}}),e,this)}))),function(e){return w.apply(this,arguments)})},{key:"offSnack",value:(k=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.snacking=!1;case 1:case"end":return e.stop()}}),e,this)}))),function(){return k.apply(this,arguments)})},{key:"switchLoad",value:(x=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loading=t;case 1:case"end":return e.stop()}}),e,this)}))),function(e){return x.apply(this,arguments)})},{key:"onLoad",value:(v=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loadTxt=t,this.loading=!0;case 2:case"end":return e.stop()}}),e,this)}))),function(e){return v.apply(this,arguments)})},{key:"offLoad",value:(m=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.loading=!1;case 1:case"end":return e.stop()}}),e,this)}))),function(){return m.apply(this,arguments)})},{key:"alert",value:(d=Object(n.a)(regeneratorRuntime.mark((function e(){var title,t,text,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return title=r.length>0&&void 0!==r[0]?r[0]:"OK",t=r.length>1&&void 0!==r[1]?r[1]:"success",text=r.length>2&&void 0!==r[2]?r[2]:"",e.next=5,j.a.fire({icon:t,title:title,text:text,confirmButtonText:"OK",confirmButtonColor:"#00E96A"});case 5:case"end":return e.stop()}}),e)}))),function(){return d.apply(this,arguments)})},{key:"alertAuto",value:(h=Object(n.a)(regeneratorRuntime.mark((function e(){var title,t,r,text,n=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return title=n.length>0&&void 0!==n[0]?n[0]:"OK",t=n.length>1&&void 0!==n[1]?n[1]:2e3,r=n.length>2&&void 0!==n[2]?n[2]:"success",text=n.length>3&&void 0!==n[3]?n[3]:"",e.next=6,j.a.fire({showConfirmButton:!1,icon:r,title:title,text:text,timer:t});case 6:case"end":return e.stop()}}),e)}))),function(){return h.apply(this,arguments)})},{key:"alertnotfound",value:(l=Object(n.a)(regeneratorRuntime.mark((function e(){var title,t,text,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return title=r.length>0&&void 0!==r[0]?r[0]:"OK",t=r.length>1&&void 0!==r[1]?r[1]:"error",text=r.length>2&&void 0!==r[2]?r[2]:"",e.next=5,j.a.fire({icon:t,title:title,text:text,confirmButtonText:"OK",confirmButtonColor:"#ef4444"});case 5:case"end":return e.stop()}}),e)}))),function(){return l.apply(this,arguments)})},{key:"alerterror",value:(r=Object(n.a)(regeneratorRuntime.mark((function e(){var title,t,text,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return title=r.length>0&&void 0!==r[0]?r[0]:"Please click the link from the email again.",t=r.length>1&&void 0!==r[1]?r[1]:"error",text=r.length>2&&void 0!==r[2]?r[2]:"",e.next=5,j.a.fire({icon:t,title:title,text:text,confirmButtonText:"OK",confirmButtonColor:"#ef4444"});case 5:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)})},{key:"confirm",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(){var title,t,r=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return title=r.length>0&&void 0!==r[0]?r[0]:"Are you sure ?",e.next=3,j.a.fire({title:title,showCancelButton:!0,confirmButtonText:"OK",cancelButtonText:"Cancel",confirmButtonColor:"#00E96A"}).then((function(e){return e.isConfirmed}));case 3:return t=e.sent,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)}))),function(){return t.apply(this,arguments)})}]),_}(m.b),R=new(w=k([Object(m.a)({generateMutationSetters:!0})],w))({store:x.a,name:"Web"})},412:function(e,t,r){"use strict";var n=r(3),o=(r(19),r(68),r(63),r(109)),c=r(41),f={name:"DefaultLayout",data:function(){return{isDrawerOpen:!1,user:{},response:!1}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.setVuesax(e.$vs);case 2:return t.next=4,e.initial();case 4:return t.next=6,o.a.checkUser();case 6:case"end":return t.stop()}}),t)})))()},methods:{initial:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.checkToken();case 2:return t.next=4,o.a.setUser();case 4:return e.user=t.sent,t.next=7,e.checkUser();case 7:e.response=!!e.user.id;case 8:case"end":return t.stop()}}),t)})))()},checkUser:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.getUser();case 2:if(t.sent.id){t.next=6;break}return t.next=6,e.$router.replace("/home/");case 6:case"end":return t.stop()}}),t)})))()}},computed:{tier:function(){return o.a.tier}}},l=(r(535),r(75)),h=r(86),d=r.n(h),m=r(585),v=r(586),j=r(587),x=r(588),y=r(578),component=Object(l.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.response?r("v-app",[r("Core-Loading"),e._v(" "),r("UserMenu-MainMenu"),e._v(" "),r("v-main",{staticClass:"bg-gray-100"},[r("Core-Notification"),e._v(" "),r("div",[r("Nuxt")],1),e._v(" "),r("v-footer",{attrs:{padless:""}},[r("v-toolbar",{attrs:{color:"white",flat:""}},[r("strong",[e._v("Cashback")]),e._v("   ©"+e._s((new Date).getFullYear())+"\r\n                "),r("v-spacer"),e._v(" "),r("Core-LanguageSwitch")],1)],1)],1)],1):e._e()}),[],!1,null,null,null);t.a=component.exports;d()(component,{VApp:m.a,VFooter:v.a,VMain:j.a,VSpacer:x.a,VToolbar:y.a})},413:function(e,t,r){"use strict";var n={},o=(r(560),r(75)),c=r(86),f=r.n(c),l=r(585),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-app",[r("Home-Navbar"),e._v(" "),r("Nuxt"),e._v(" "),r("Home-Footer")],1)],1)}),[],!1,null,null,null);t.a=component.exports;f()(component,{VApp:l.a})},414:function(e,t,r){"use strict";var n={},o=(r(562),r(75)),c=r(86),f=r.n(c),l=r(585),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-app",[r("Core-Notification"),e._v(" "),r("Core-Loading"),e._v(" "),r("Nuxt")],1)],1)}),[],!1,null,null,null);t.a=component.exports;f()(component,{VApp:l.a})},440:function(e,t,r){r(441),e.exports=r(442)},469:function(e,t,r){"use strict";r(244)},470:function(e,t,r){var n=r(35)(!1);n.push([e.i,"h1[data-v-572efc6d]{font-size:20px}",""]),e.exports=n},475:function(e,t,r){var content=r(476);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("2998b330",content,!0,{sourceMap:!1})},476:function(e,t,r){var n=r(35)(!1);n.push([e.i,'.bg-primary-g{background:#4ade80;background:linear-gradient(90deg,#4ade80,#00f1cd)}.bg-main{background:#fff!important}.light-text{color:rgba(94,86,105,.68)!important}.navbar-active{background:#fff;background:linear-gradient(93deg,#fff,rgba(0,162,149,.5102415966386555))}.my-point{background-color:#4ade80}.ribbon{width:150px;height:150px;overflow:hidden;position:absolute}.ribbon:after,.ribbon:before{position:absolute;z-index:-1;content:"";display:block;border:5px solid #2980b9}.ribbon span{position:absolute;display:block;width:225px;padding:15px 0;background-color:#3498db;box-shadow:0 5px 10px rgba(0,0,0,.1);color:#fff;font:700 18px/1 "Lato",sans-serif;text-shadow:0 1px 1px rgba(0,0,0,.2);text-transform:uppercase;text-align:center}.ribbon-top-left{top:-10px;left:-10px}.ribbon-top-left:after,.ribbon-top-left:before{border-top-color:transparent;border-left-color:transparent}.ribbon-top-left:before{top:0;right:0}.ribbon-top-left:after{bottom:0;left:0}.ribbon-top-left span{right:-25px;top:30px;transform:rotate(-45deg)}.ribbon-top-right{top:-10px;right:-10px}.ribbon-top-right:after,.ribbon-top-right:before{border-top-color:transparent;border-right-color:transparent}.ribbon-top-right:before{top:0;left:0}.ribbon-top-right:after{bottom:0;right:0}.ribbon-top-right span{left:-25px;top:30px;transform:rotate(45deg)}.ribbon-bottom-left{bottom:-10px;left:-10px}.ribbon-bottom-left:after,.ribbon-bottom-left:before{border-bottom-color:transparent;border-left-color:transparent}.ribbon-bottom-left:before{bottom:0;right:0}.ribbon-bottom-left:after{top:0;left:0}.ribbon-bottom-left span{right:-25px;bottom:30px;transform:rotate(225deg)}.ribbon-bottom-right{bottom:-10px;right:-10px}.ribbon-bottom-right:after,.ribbon-bottom-right:before{border-bottom-color:transparent;border-right-color:transparent}.ribbon-bottom-right:before{bottom:0;left:0}.ribbon-bottom-right:after{top:0;right:0}.ribbon-bottom-right span{left:-25px;bottom:30px;transform:rotate(-225deg)}.box{position:relative}',""]),e.exports=n},477:function(e,t,r){var content=r(478);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("2a4641a2",content,!0,{sourceMap:!1})},478:function(e,t,r){var n=r(35)(!1);n.push([e.i,"",""]),e.exports=n},479:function(e,t,r){var content=r(480);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("aaec6fdc",content,!0,{sourceMap:!1})},480:function(e,t,r){var n=r(35)(!1);n.push([e.i,"",""]),e.exports=n},534:function(e,t,r){var map={"./af":261,"./af.js":261,"./ar":262,"./ar-dz":263,"./ar-dz.js":263,"./ar-kw":264,"./ar-kw.js":264,"./ar-ly":265,"./ar-ly.js":265,"./ar-ma":266,"./ar-ma.js":266,"./ar-sa":267,"./ar-sa.js":267,"./ar-tn":268,"./ar-tn.js":268,"./ar.js":262,"./az":269,"./az.js":269,"./be":270,"./be.js":270,"./bg":271,"./bg.js":271,"./bm":272,"./bm.js":272,"./bn":273,"./bn-bd":274,"./bn-bd.js":274,"./bn.js":273,"./bo":275,"./bo.js":275,"./br":276,"./br.js":276,"./bs":277,"./bs.js":277,"./ca":278,"./ca.js":278,"./cs":279,"./cs.js":279,"./cv":280,"./cv.js":280,"./cy":281,"./cy.js":281,"./da":282,"./da.js":282,"./de":283,"./de-at":284,"./de-at.js":284,"./de-ch":285,"./de-ch.js":285,"./de.js":283,"./dv":286,"./dv.js":286,"./el":287,"./el.js":287,"./en-au":288,"./en-au.js":288,"./en-ca":289,"./en-ca.js":289,"./en-gb":290,"./en-gb.js":290,"./en-ie":291,"./en-ie.js":291,"./en-il":292,"./en-il.js":292,"./en-in":293,"./en-in.js":293,"./en-nz":294,"./en-nz.js":294,"./en-sg":295,"./en-sg.js":295,"./eo":296,"./eo.js":296,"./es":297,"./es-do":298,"./es-do.js":298,"./es-mx":299,"./es-mx.js":299,"./es-us":300,"./es-us.js":300,"./es.js":297,"./et":301,"./et.js":301,"./eu":302,"./eu.js":302,"./fa":303,"./fa.js":303,"./fi":304,"./fi.js":304,"./fil":305,"./fil.js":305,"./fo":306,"./fo.js":306,"./fr":307,"./fr-ca":308,"./fr-ca.js":308,"./fr-ch":309,"./fr-ch.js":309,"./fr.js":307,"./fy":310,"./fy.js":310,"./ga":311,"./ga.js":311,"./gd":312,"./gd.js":312,"./gl":313,"./gl.js":313,"./gom-deva":314,"./gom-deva.js":314,"./gom-latn":315,"./gom-latn.js":315,"./gu":316,"./gu.js":316,"./he":317,"./he.js":317,"./hi":318,"./hi.js":318,"./hr":319,"./hr.js":319,"./hu":320,"./hu.js":320,"./hy-am":321,"./hy-am.js":321,"./id":322,"./id.js":322,"./is":323,"./is.js":323,"./it":324,"./it-ch":325,"./it-ch.js":325,"./it.js":324,"./ja":326,"./ja.js":326,"./jv":327,"./jv.js":327,"./ka":328,"./ka.js":328,"./kk":329,"./kk.js":329,"./km":330,"./km.js":330,"./kn":331,"./kn.js":331,"./ko":332,"./ko.js":332,"./ku":333,"./ku.js":333,"./ky":334,"./ky.js":334,"./lb":335,"./lb.js":335,"./lo":336,"./lo.js":336,"./lt":337,"./lt.js":337,"./lv":338,"./lv.js":338,"./me":339,"./me.js":339,"./mi":340,"./mi.js":340,"./mk":341,"./mk.js":341,"./ml":342,"./ml.js":342,"./mn":343,"./mn.js":343,"./mr":344,"./mr.js":344,"./ms":345,"./ms-my":346,"./ms-my.js":346,"./ms.js":345,"./mt":347,"./mt.js":347,"./my":348,"./my.js":348,"./nb":349,"./nb.js":349,"./ne":350,"./ne.js":350,"./nl":351,"./nl-be":352,"./nl-be.js":352,"./nl.js":351,"./nn":353,"./nn.js":353,"./oc-lnc":354,"./oc-lnc.js":354,"./pa-in":355,"./pa-in.js":355,"./pl":356,"./pl.js":356,"./pt":357,"./pt-br":358,"./pt-br.js":358,"./pt.js":357,"./ro":359,"./ro.js":359,"./ru":360,"./ru.js":360,"./sd":361,"./sd.js":361,"./se":362,"./se.js":362,"./si":363,"./si.js":363,"./sk":364,"./sk.js":364,"./sl":365,"./sl.js":365,"./sq":366,"./sq.js":366,"./sr":367,"./sr-cyrl":368,"./sr-cyrl.js":368,"./sr.js":367,"./ss":369,"./ss.js":369,"./sv":370,"./sv.js":370,"./sw":371,"./sw.js":371,"./ta":372,"./ta.js":372,"./te":373,"./te.js":373,"./tet":374,"./tet.js":374,"./tg":375,"./tg.js":375,"./th":376,"./th.js":376,"./tk":377,"./tk.js":377,"./tl-ph":378,"./tl-ph.js":378,"./tlh":379,"./tlh.js":379,"./tr":380,"./tr.js":380,"./tzl":381,"./tzl.js":381,"./tzm":382,"./tzm-latn":383,"./tzm-latn.js":383,"./tzm.js":382,"./ug-cn":384,"./ug-cn.js":384,"./uk":385,"./uk.js":385,"./ur":386,"./ur.js":386,"./uz":387,"./uz-latn":388,"./uz-latn.js":388,"./uz.js":387,"./vi":389,"./vi.js":389,"./x-pseudo":390,"./x-pseudo.js":390,"./yo":391,"./yo.js":391,"./zh-cn":392,"./zh-cn.js":392,"./zh-hk":393,"./zh-hk.js":393,"./zh-mo":394,"./zh-mo.js":394,"./zh-tw":395,"./zh-tw.js":395};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=534},535:function(e,t,r){"use strict";r(396)},536:function(e,t,r){var n=r(35)(!1);n.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+Thai&display=swap);"]),n.push([e.i,'*{font-family:"Noto Sans Thai",sans-serif!important}ul.breadcrumb{border-radius:50px;padding:4px 10px;list-style:none;background-color:#eee}ul.breadcrumb li{display:inline;font-size:12px}ul.breadcrumb li+li:before{padding:8px;color:#000;content:"/\\00a0"}ul.breadcrumb li a{color:#0275d8;text-decoration:none}ul.breadcrumb li a:hover{color:#01447e;text-decoration:underline}',""]),e.exports=n},56:function(e,t,r){"use strict";(function(e){var n=r(107),o=r.n(n),c={baseURL:e.env.baseURL||e.env.apiUrl||"https://canabit.ml"},f=o.a.create(c);t.a=f}).call(this,r(186))},560:function(e,t,r){"use strict";r(403)},561:function(e,t,r){var n=r(35)(!1);n.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+Thai&display=swap);"]),n.push([e.i,'*{font-family:"Noto Sans Thai",sans-serif!important}',""]),e.exports=n},562:function(e,t,r){"use strict";r(404)},563:function(e,t,r){var n=r(35)(!1);n.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Noto+Sans+Thai&display=swap);"]),n.push([e.i,'*{font-family:"Noto Sans Thai",sans-serif!important}',""]),e.exports=n},57:function(e,t,r){"use strict";r.d(t,"a",(function(){return T}));r(77);var n=r(3),o=r(20),c=r(21),f=r(33),l=r(28),h=r(14),d=r(13),m=(r(63),r(31),r(10),r(120),r(44),r(19),r(52),r(100),r(437),r(484),r(489),r(491),r(492),r(493),r(496),r(497),r(498),r(499),r(500),r(501),r(502),r(503),r(505),r(506),r(507),r(508),r(509),r(510),r(511),r(512),r(513),r(514),r(515),r(82)),v=r(56),j=r(139),x=r.n(j),y=r(41),k=r(110),w=r(0),R=r.n(w);function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(h.a)(e);if(t){var o=Object(h.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var A=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},_=function(e){Object(f.a)(M,e);var t,l,h,d,m,j,k,w,A,_,T,U,z,S,C=O(M);function M(){var e;return Object(o.a)(this,M),(e=C.apply(this,arguments)).token=null,e.url=v.a.defaults.baseURL,e}return Object(c.a)(M,[{key:"getHttp",value:(S=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(t).then((function(e){return e.data})).catch((function(e){return e.response.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e){return S.apply(this,arguments)})},{key:"postHttpAlert",value:(z=Object(n.a)(regeneratorRuntime.mark((function e(t,form){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post(t,form).then((function(e){return y.a.alert("Successfully Saved"),e.data})).catch((function(e){return y.a.alerterror("Failed to save data","error"),console.log(e),e.response.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e,t){return z.apply(this,arguments)})},{key:"postHttpAlertAccount",value:(U=Object(n.a)(regeneratorRuntime.mark((function e(t,form){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post(t,form).then((function(e){return y.a.alert("Successfully Saved"),e.data})).catch((function(e){return y.a.alert("Can not : save due to the same Account Number in the system","error"),console.log(e),e.response.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e,t){return U.apply(this,arguments)})},{key:"postHttp",value:(T=Object(n.a)(regeneratorRuntime.mark((function e(t,form){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post(t,form).then((function(e){return e.data})).catch((function(e){return e.response.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e,t){return T.apply(this,arguments)})},{key:"putHttp",value:(_=Object(n.a)(regeneratorRuntime.mark((function e(t,form){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.put(t,form).then((function(e){return e.data})).catch((function(e){return e.response.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e,t){return _.apply(this,arguments)})},{key:"putHttpAlert",value:(A=Object(n.a)(regeneratorRuntime.mark((function e(t,form){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.confirm("Do you want to continue? ");case 2:if(!e.sent){e.next=7;break}return e.next=6,v.a.put(t,form).then((function(e){return y.a.alert("Successfully executed"),e.data})).catch((function(e){return y.a.alert("Failed to complete ","error"),e.response.data}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)}))),function(e,t){return A.apply(this,arguments)})},{key:"deleteHttp",value:(w=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete(t).then((function(e){return e.data})).catch((function(e){return e.response.data}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e){return w.apply(this,arguments)})},{key:"deleteHttpAlert",value:(k=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.confirm("Are ");case 2:if(!e.sent){e.next=7;break}return e.next=6,v.a.delete(t).then((function(e){return y.a.alert("Successfully deleted"),!0})).catch((function(e){return y.a.alert("Failed to delete data","error"),!1}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)}))),function(e){return k.apply(this,arguments)})},{key:"putImageHttpAlert",value:(j=Object(n.a)(regeneratorRuntime.mark((function e(t,form){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.confirm("Are you sure you want to edit the information?");case 2:if(!e.sent){e.next=7;break}return e.next=6,v.a.put(t,form,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return y.a.alert("Successfully executed"),e.data})).catch((function(e){return y.a.alert("Failed to edit data","error"),e.response.data}));case 6:return e.abrupt("return",e.sent);case 7:case"end":return e.stop()}}),e)}))),function(e,t){return j.apply(this,arguments)})},{key:"fillData",value:function(e,t,r){return x.a.find(e,(function(e){return e[t]==r}))}},{key:"convertDate",value:function(e){return R()(e).format("DD/MM/YYYY")}},{key:"getBase64",value:(m=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,r){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){return e(n.result)},n.onerror=function(e){return r(e)}})));case 1:case"end":return e.stop()}}),e)}))),function(e){return m.apply(this,arguments)})},{key:"setWaterMark",value:(d=Object(n.a)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r(439),e.t0=n,e.t1=t,e.next=5,this.dataURLtoFile("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAALCAIAAADJDItPAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAUSURBVChTY/iPF4xKYwV4pf//BwD7UkjGd/FzOQAAAABJRU5ErkJggg==");case 5:return e.t2=e.sent,e.t3=[e.t1,e.t2],e.abrupt("return",(0,e.t0)(e.t3).image(n.image.center(.5)).then((function(img){return img})));case 8:case"end":return e.stop()}}),e,this)}))),function(e){return d.apply(this,arguments)})},{key:"dataURLtoFile",value:(h=Object(n.a)(regeneratorRuntime.mark((function e(t){var n,o,c,f,l,h,d,m,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=r(0),o=n(),c=t.substring("data:image/".length,t.indexOf(";base64")),f="".concat(o.format("ddDDmmyyhhmmss"),".").concat(c),console.log(f),l=t.split(","),h=l[0].match(/:(.*?);/)[1],d=atob(l[1]),m=d.length,v=new Uint8Array(m);m--;)v[m]=d.charCodeAt(m);return e.abrupt("return",new File([v],f,{type:h}));case 8:case"end":return e.stop()}}),e)}))),function(e){return h.apply(this,arguments)})},{key:"fileToBase64",value:(l=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=new FileReader).addEventListener("load",(function(){return r(n.result)})),n.readAsDataURL(t);case 3:case"end":return e.stop()}}),e)}))),function(e,t){return l.apply(this,arguments)})},{key:"getChoice",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getHttp("/api/webconfig/choice/?is_active=true&type__name=".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})}]),M}(m.b),T=new(_=A([Object(m.a)({generateMutationSetters:!0})],_))({store:k.a,name:"Core"})},94:function(e,t,r){"use strict";var n={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(469),r(75)),c=r(86),f=r.n(c),l=r(585),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{dark:""}},[404===e.error.statusCode?r("h1",[e._v("\n    "+e._s(e.pageNotFound)+"\n  ")]):r("h1",[e._v("\n    "+e._s(e.otherError)+"\n  ")]),e._v(" "),r("Core-Notification"),e._v(" "),r("NuxtLink",{attrs:{to:"/"}},[e._v("\n    Home page\n  ")])],1)}),[],!1,null,"572efc6d",null);t.a=component.exports;f()(component,{VApp:l.a})}},[[440,123,15,124]]]);