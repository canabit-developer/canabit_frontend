(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{805:function(e,t,r){e.exports=r.p+"img/google.7f6f14a.png"},881:function(e,t,r){"use strict";r.r(t);var n=r(4),o=(r(28),r(95),r(40),r(65),r(35)),c=(r(97),r(806)),l=r(861),m=r(859),d=Object(c.a)({apiKey:"AIzaSyANW893d6UyMZ3Z-GpoWGhGhrs2zX6AlHQ",authDomain:"canabit-platform.firebaseapp.com",projectId:"canabit-platform",storageBucket:"canabit-platform.appspot.com",messagingSenderId:"683239611053",appId:"1:683239611053:web:fa4977ea881871a9140424",measurementId:"G-LLL97QCV3R"}),f=(Object(l.a)(d),{Auth:Object(m.c)(),FacebookAuthProvider:m.a,signInWithRedirect:m.e,getRedirectResult:m.d,GoogleAuthProvider:m.b}),h=r(31),v={data:function(){return{}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.initAuth();case 2:case"end":return t.stop()}}),t)})))()},methods:{initAuth:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.switchLoad(!0);case 2:return r=f.Auth,t.next=5,f.getRedirectResult(r).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){var n,c,l,m,d,h,v,w,k,R,x;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(r.providerId),"facebook.com"!=r.providerId){t.next=20;break}return n=f.FacebookAuthProvider.credentialFromResult(r),c=r.user,l=n.accessToken,t.next=7,e.getProfile(l);case 7:return m=t.sent,t.next=10,e.getRegisterForm(m,c.uid,"Facebook");case 10:return d=t.sent,t.next=13,e.getLoginForm(m,c.uid);case 13:return h=t.sent,console.log("facebook callback"),t.next=17,o.a.switchLoad(!1);case 17:e.$emit("callback",{login:h,register:d}),t.next=39;break;case 20:if("google.com"!=r.providerId){t.next=39;break}return v=f.GoogleAuthProvider.credentialFromResult(r),w=r.user,v.accessToken,k=w.displayName.split(" "),w.first_name=k[0],w.last_name=k[1],w.name=w.displayName,w.id=w.uid,t.next=31,e.getRegisterForm(w,w.uid,"Google");case 31:return R=t.sent,t.next=34,e.getLoginForm(w,w.uid);case 34:return x=t.sent,console.log("Google callback"),t.next=38,o.a.switchLoad(!1);case 38:e.$emit("callback",{login:x,register:R});case 39:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.switchLoad(!1);case 2:t.code,t.message,t.email,f.FacebookAuthProvider.credentialFromError(t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:t.sent;case 6:case"end":return t.stop()}}),t)})))()},getProfile:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.getHttp("https://graph.facebook.com/v12.0/me?access_token=".concat(e,"&fields=id,picture,name,first_name,last_name,website,link,email"));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))()},getRegisterForm:function(e,t,r){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{username:e.email,first_name:e.first_name,last_name:e.last_name,password_confirm:btoa("Canabit@".concat(e.email))+"Canabit926d42",password:btoa("Canabit@".concat(e.email))+"Canabit926d42",email:e.email,display_name:e.name,register_by:r,created_at:"2022-01-10T08:23:44.639702Z",updated_at:"2022-01-10T08:23:44.639702Z"});case 1:case"end":return t.stop()}}),t)})))()},getLoginForm:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{username:e.email,password:btoa("Canabit@".concat(e.email))+"Canabit926d42"});case 1:case"end":return t.stop()}}),t)})))()},loginFacebook:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=new f.FacebookAuthProvider).addScope("public_profile"),t.addScope("user_birthday"),t.addScope("email"),(r=f.Auth).languageCode="th",f.signInWithRedirect(r,t);case 7:case"end":return e.stop()}}),e)})))()},loginGoogle:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new f.GoogleAuthProvider,(r=f.Auth).languageCode="th",f.signInWithRedirect(r,t);case 4:case"end":return e.stop()}}),e)})))()}}},w=v,k=r(56),R=r(73),x=r.n(R),_=r(580),C=r(578),component=Object(k.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col md:flex-row justify-space-around items-around w-full"},[n("v-btn",{staticClass:"capitalize ",attrs:{large:"",dark:"",color:"blue"},on:{click:function(t){return e.loginFacebook()}}},[n("v-icon",{staticClass:"mr-2"},[e._v("mdi-facebook")]),e._v(" "),n("span",{staticClass:"capitalize "},[e._v("Contuine with Facebook")])],1),n("br"),e._v(" "),n("v-btn",{attrs:{large:"",color:"white"},on:{click:function(t){return e.loginGoogle()}}},[n("img",{staticClass:"h-4 w-auto mr-2",attrs:{src:r(805),alt:""}}),e._v(" "),n("span",{staticClass:"capitalize "},[e._v("Contuine with Google")])])],1)}),[],!1,null,null,null);t.default=component.exports;x()(component,{VBtn:_.a,VIcon:C.a})}}]);