(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{658:function(e,t,r){e.exports=r.p+"img/google.7f6f14a.png"},705:function(e,t,r){"use strict";r.r(t);var n=r(4),o=(r(26),r(94),r(39),r(52),r(42)),c=(r(112),r(659)),l=r(691),d=r(689),m=Object(c.a)({apiKey:"AIzaSyANW893d6UyMZ3Z-GpoWGhGhrs2zX6AlHQ",authDomain:"canabit-platform.firebaseapp.com",projectId:"canabit-platform",storageBucket:"canabit-platform.appspot.com",messagingSenderId:"683239611053",appId:"1:683239611053:web:fa4977ea881871a9140424",measurementId:"G-LLL97QCV3R"}),f=(Object(l.a)(m),{Auth:Object(d.c)(),FacebookAuthProvider:d.a,signInWithRedirect:d.e,getRedirectResult:d.d,GoogleAuthProvider:d.b}),h=r(85),v={data:function(){return{}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.initAuth();case 2:case"end":return t.stop()}}),t)})))()},methods:{initAuth:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=f.Auth,t.next=3,f.getRedirectResult(r).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){var n,c,l,d,m,h,v,k,w,R,x;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.switchLoad(!0);case 2:if(console.log(r.providerId),"facebook.com"!=r.providerId){t.next=22;break}return n=f.FacebookAuthProvider.credentialFromResult(r),c=r.user,l=n.accessToken,t.next=9,e.getProfile(l);case 9:return d=t.sent,t.next=12,e.getRegisterForm(d,c.uid,"Facebook");case 12:return m=t.sent,t.next=15,e.getLoginForm(d,c.uid);case 15:return h=t.sent,console.log("facebook callback"),t.next=19,o.a.switchLoad(!1);case 19:e.$emit("callback",{login:h,register:m}),t.next=41;break;case 22:if("google.com"!=r.providerId){t.next=41;break}return v=f.GoogleAuthProvider.credentialFromResult(r),k=r.user,v.accessToken,w=k.displayName.split(" "),k.first_name=w[0],k.last_name=w[1],k.name=k.displayName,k.id=k.uid,t.next=33,e.getRegisterForm(k,k.uid,"Google");case 33:return R=t.sent,t.next=36,e.getLoginForm(k,k.uid);case 36:return x=t.sent,console.log("Google callback"),t.next=40,o.a.switchLoad(!1);case 40:e.$emit("callback",{login:x,register:R});case 41:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.switchLoad(!1);case 2:t.code,t.message,t.email,f.FacebookAuthProvider.credentialFromError(t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:t.sent;case 4:case"end":return t.stop()}}),t)})))()},getProfile:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.getHttp("https://graph.facebook.com/v12.0/me?access_token=".concat(e,"&fields=id,picture,name,first_name,last_name,website,link,email"));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))()},getRegisterForm:function(e,t,r){return Object(n.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",{username:e.id,first_name:e.first_name,last_name:e.last_name,password_confirm:btoa("Canabit@".concat(e.id))+"Canabit"+t,password:btoa("Canabit@".concat(e.id))+"Canabit"+t,email:e.email,display_name:e.name,register_by:r,created_at:"2022-01-10T08:23:44.639702Z",updated_at:"2022-01-10T08:23:44.639702Z"});case 1:case"end":return n.stop()}}),n)})))()},getLoginForm:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",{username:e.id,password_confirm:btoa("Canabit@".concat(e.id))+"Canabit"+t,password:btoa("Canabit@".concat(e.id))+"Canabit"+t});case 1:case"end":return r.stop()}}),r)})))()},loginFacebook:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=new f.FacebookAuthProvider).addScope("public_profile"),t.addScope("user_birthday"),t.addScope("email"),(r=f.Auth).languageCode="th",f.signInWithRedirect(r,t);case 7:case"end":return e.stop()}}),e)})))()},loginGoogle:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new f.GoogleAuthProvider,(r=f.Auth).languageCode="th",f.signInWithRedirect(r,t);case 4:case"end":return e.stop()}}),e)})))()}}},k=v,w=r(61),R=r(79),x=r.n(R),_=r(495),C=r(498),component=Object(w.a)(k,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-btn",{staticClass:"capitalize ",attrs:{block:"",large:"",dark:"",color:"blue"},on:{click:function(t){return e.loginFacebook()}}},[n("v-icon",{staticClass:"mr-2"},[e._v("mdi-facebook")]),e._v(" "),n("span",{staticClass:"capitalize "},[e._v("Contuine with Facebook")])],1),n("br"),e._v(" "),n("v-btn",{attrs:{block:"",large:"",color:"white"},on:{click:function(t){return e.loginGoogle()}}},[n("img",{staticClass:"h-4 w-auto mr-2",attrs:{src:r(658),alt:""}}),e._v(" "),n("span",{staticClass:"capitalize "},[e._v("Contuine with Google")])])],1)}),[],!1,null,null,null);t.default=component.exports;x()(component,{VBtn:_.a,VIcon:C.a})}}]);