(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{688:function(e,t,r){e.exports=r.p+"img/canabit_vector.5230daf.svg"},727:function(e,t,r){var content=r(777);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(47).default)("9aaf5abc",content,!0,{sourceMap:!1})},776:function(e,t,r){"use strict";r(727)},777:function(e,t,r){var n=r(46)(!1);n.push([e.i,".auth-wrapper{display:flex;min-height:100vh;min-height:calc(var(--vh, 1vh)*100);width:100%;flex-basis:100%;align-items:center}.auth-wrapper a{text-decoration:unset}.auth-wrapper.auth-v1{align-items:center;justify-content:center;overflow:hidden;padding:1.5rem}.auth-wrapper.auth-v1 .auth-mask-bg{position:absolute;bottom:0;width:100%}.auth-wrapper.auth-v1 .auth-tree,.auth-wrapper.auth-v1 .auth-tree-3{position:absolute}.auth-wrapper.auth-v1 .auth-tree{bottom:0;left:0}.auth-wrapper.auth-v1 .auth-tree-3{bottom:0;right:0}.auth-wrapper.auth-v1 .auth-inner{width:28rem;z-index:1}.auth-wrapper.auth-v1 .auth-inner .auth-card{padding:.9375rem .875rem}@media(max-width:600px){.auth-v1 .auth-mask-bg,.auth-v1 .auth-tree,.auth-v1 .auth-tree-3{display:none}}",""]),e.exports=n},904:function(e,t,r){"use strict";r.r(t);var n=r(4),o=(r(28),r(66),r(65),r(31)),c=r(35),l=r(97),d={layout:"root",data:function(){return{isPasswordVisible:!1,form:{login:"",password:""},error:{},errorRegister:{}}},created:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{login:function(){var e=arguments,t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c,d;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=!(e.length>0&&void 0!==e[0])||e[0],r.next=3,o.a.postHttp("/api/auth/v2/check/",t.form);case 3:if(!(c=r.sent).username){r.next=21;break}return t.form.username=c.username,r.next=8,l.a.login(t.form);case 8:if(!(d=r.sent).key){r.next=19;break}return r.next=12,l.a.storeToken(d.key);case 12:return r.next=14,l.a.storeTokenToStorage(d.key);case 14:return r.next=16,t.$router.replace("/");case 16:return r.abrupt("return",!0);case 19:return n&&(t.error=d),r.abrupt("return",!1);case 21:case"end":return r.stop()}}),r)})))()},callback:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.form=e.login,r.next=3,t.login(!1);case 3:if(n=r.sent){r.next=23;break}return r.next=7,c.a.switchLoad(!0);case 7:return r.next=9,l.a.register(e.register);case 9:if(!(o=r.sent).id){r.next=18;break}return r.next=13,c.a.switchLoad(!1);case 13:return r.next=15,t.$router.replace("/auth/verify");case 15:console.log(o),r.next=21;break;case 18:return t.errorRegister=o,r.next=21,c.a.switchLoad(!1);case 21:r.next=24;break;case 23:t.error=n;case 24:return r.next=26,c.a.switchLoad(!1);case 26:console.log(e);case 27:case"end":return r.stop()}}),r)})))()}}},v=d,m=(r(776),r(56)),f=r(73),h=r.n(f),x=r(678),w=r(580),_=r(542),k=r(530),y=r(579),C=r(655),R=r(652),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card",{staticClass:"auth-card"},[n("v-card-title",{staticClass:"d-flex align-center justify-center py-7"},[n("router-link",{staticClass:"d-flex align-center",attrs:{to:"/"}},[n("img",{staticClass:"h-14",attrs:{src:r(688),alt:""}})])],1),e._v(" "),n("v-card-text",[n("p",{staticClass:"text-2xl font-weight-semibold text--primary mb-2 text-center "},[e._v("\r\n                Welcome to Cannabit! 👋🏻\r\n            ")]),e._v(" "),n("p",{staticClass:"mb-2"},[e._v("\r\n                Please sign-in to your account and start the adventure\r\n            ")])]),e._v(" "),n("v-card-text",[e.error.detail?n("div",[n("v-alert",{attrs:{dense:"",outlined:"",text:"",type:"error",value:!0}},[e._v("\r\n                    "+e._s(e.error.detail)+"\r\n                ")])],1):e._e(),e._v(" "),e.errorRegister.email?n("div",e._l(e.errorRegister.email,(function(t,i){return n("v-alert",{key:i,attrs:{dense:"",outlined:"",text:"",type:"error",value:!0}},[e._v("\r\n                    "+e._s(t)+"\r\n                ")])})),1):e._e(),e._v(" "),e.errorRegister.password?n("div",e._l(e.errorRegister.password,(function(t,i){return n("v-alert",{key:i,attrs:{dense:"",outlined:"",text:"",type:"error",value:!0}},[e._v("\r\n                    "+e._s(t)+"\r\n                ")])})),1):e._e(),e._v(" "),e.errorRegister.phone_number?n("div",e._l(e.errorRegister.phone_number,(function(t,i){return n("v-alert",{key:i,attrs:{dense:"",outlined:"",text:"",type:"error",value:!0}},[e._v("\r\n                    "+e._s(t)+"\r\n                ")])})),1):e._e(),e._v(" "),n("form",{on:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[n("v-text-field",{staticClass:"mb-3",attrs:{"prepend-inner-icon":"mdi-card-account-details",required:"",color:"primary",outlined:"",label:"Username",placeholder:"email,phone number","hide-details":""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}}),e._v(" "),n("br"),e._v(" "),n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-form-textbox-password",required:"",color:"primary",outlined:"",type:e.isPasswordVisible?"text":"password",label:"Password",placeholder:"············","append-icon":e.isPasswordVisible?"mdi-eye-off-outline":"mdi-eye-outline","hide-details":""},on:{"click:append":function(t){e.isPasswordVisible=!e.isPasswordVisible}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e._v(" "),n("div",{staticClass:"d-flex align-center justify-space-between flex-wrap"},[n("v-spacer"),e._v(" "),n("router-link",{staticClass:"mt-1",attrs:{to:{path:"/auth/forgot"}}},[e._v("\r\n                        Forgot Password?\r\n                    ")])],1),e._v(" "),n("v-btn",{staticClass:"bg-primary-g mt-6",attrs:{type:"submit","x-large":"",dark:"",block:""}},[e._v("\r\n                    Login\r\n                ")])],1)]),e._v(" "),n("v-card-text",{staticClass:"d-flex align-center justify-center flex-wrap mt-2"},[n("span",{staticClass:"me-2"},[e._v("\r\n                New on our platform?\r\n            ")]),e._v(" "),n("router-link",{staticClass:"font-semibold",attrs:{to:{path:"/auth/register"}}},[e._v("\r\n                Create an account\r\n            ")])],1),e._v(" "),n("v-card-text",{staticClass:"d-flex align-center mt-2"},[n("v-divider"),e._v(" "),n("span",{staticClass:"mx-5"},[e._v("or")]),e._v(" "),n("v-divider")],1),e._v(" "),n("v-card-actions",{staticClass:"flex flex-col w-full"},[n("Auth-SocialLogin",{on:{callback:e.callback}}),e._v(" "),n("br")],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VAlert:x.a,VBtn:w.a,VCard:_.a,VCardActions:k.a,VCardText:k.c,VCardTitle:k.d,VDivider:y.a,VSpacer:C.a,VTextField:R.a})}}]);