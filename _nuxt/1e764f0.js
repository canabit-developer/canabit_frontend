(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{724:function(e,t,r){e.exports=r.p+"img/google.7f6f14a.png"},725:function(e,t,r){"use strict";var n=r(745),o=r(766),c=r(765),l=Object(n.a)({apiKey:"AIzaSyANW893d6UyMZ3Z-GpoWGhGhrs2zX6AlHQ",authDomain:"canabit-platform.firebaseapp.com",projectId:"canabit-platform",storageBucket:"canabit-platform.appspot.com",messagingSenderId:"683239611053",appId:"1:683239611053:web:fa4977ea881871a9140424",measurementId:"G-LLL97QCV3R"}),m=(Object(o.a)(l),Object(c.c)());t.a={Auth:m,FacebookAuthProvider:c.a,signInWithRedirect:c.e,getRedirectResult:c.d,GoogleAuthProvider:c.b}},922:function(e,t,r){"use strict";r.r(t);var n=r(4),o=(r(28),r(95),r(40),r(65),r(35)),c=(r(97),r(725)),l=r(31),m={data:function(){return{}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.initAuth();case 2:case"end":return t.stop()}}),t)})))()},methods:{initAuth:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.switchLoad(!0);case 2:return r=c.a.Auth,t.next=5,c.a.getRedirectResult(r).then(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){var n,l,m,d,f,h,v,w,k,x,R;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log(r.providerId),"facebook.com"!=r.providerId){t.next=20;break}return n=c.a.FacebookAuthProvider.credentialFromResult(r),l=r.user,m=n.accessToken,t.next=7,e.getProfile(m);case 7:return d=t.sent,t.next=10,e.getRegisterForm(d,l.uid,"Facebook");case 10:return f=t.sent,t.next=13,e.getLoginForm(d,l.uid);case 13:return h=t.sent,console.log("facebook callback"),t.next=17,o.a.switchLoad(!1);case 17:e.$emit("callback",{login:h,register:f}),t.next=39;break;case 20:if("google.com"!=r.providerId){t.next=39;break}return v=c.a.GoogleAuthProvider.credentialFromResult(r),w=r.user,v.accessToken,k=w.displayName.split(" "),w.first_name=k[0],w.last_name=k[1],w.name=w.displayName,w.id=w.uid,t.next=31,e.getRegisterForm(w,w.uid,"Google");case 31:return x=t.sent,t.next=34,e.getLoginForm(w,w.uid);case 34:return R=t.sent,console.log("Google callback"),t.next=38,o.a.switchLoad(!1);case 38:e.$emit("callback",{login:R,register:x});case 39:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.switchLoad(!1);case 2:t.code,t.message,t.email,c.a.FacebookAuthProvider.credentialFromError(t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 5:t.sent;case 6:case"end":return t.stop()}}),t)})))()},getProfile:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.getHttp("https://graph.facebook.com/v12.0/me?access_token=".concat(e,"&fields=id,picture,name,first_name,last_name,website,link,email"));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))()},getRegisterForm:function(e,t,r){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{username:e.email,first_name:e.first_name,last_name:e.last_name,password_confirm:btoa("Canabit@".concat(e.email))+"Canabit926d42",password:btoa("Canabit@".concat(e.email))+"Canabit926d42",email:e.email,display_name:e.name,register_by:r,created_at:"2022-01-10T08:23:44.639702Z",updated_at:"2022-01-10T08:23:44.639702Z"});case 1:case"end":return t.stop()}}),t)})))()},getLoginForm:function(e,t){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{username:e.email,password:btoa("Canabit@".concat(e.email))+"Canabit926d42"});case 1:case"end":return t.stop()}}),t)})))()},loginFacebook:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push("/auth/login");case 2:(r=new c.a.FacebookAuthProvider).addScope("public_profile"),r.addScope("user_birthday"),r.addScope("email"),(n=c.a.Auth).languageCode="th",c.a.signInWithRedirect(n,r);case 9:case"end":return t.stop()}}),t)})))()},loginGoogle:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$router.push("/auth/login");case 2:r=new c.a.GoogleAuthProvider,(n=c.a.Auth).languageCode="th",c.a.signInWithRedirect(n,r);case 6:case"end":return t.stop()}}),t)})))()}}},d=m,f=r(56),h=r(73),v=r.n(h),w=r(568),k=r(588),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col md:flex-row justify-space-around items-around w-full"},[n("v-btn",{staticClass:"capitalize ",attrs:{large:"",dark:"",color:"blue"},on:{click:function(t){return e.loginFacebook()}}},[n("v-icon",{attrs:{className:"mr-2"}},[e._v("mdi-facebook")]),e._v(" "),n("span",{staticClass:"capitalize "},[e._v("Contuine with Facebook")])],1),e._v(" "),n("br"),e._v(" "),n("v-btn",{attrs:{large:"",color:"white"},on:{click:function(t){return e.loginGoogle()}}},[n("img",{staticClass:"h-4 w-auto mr-2",attrs:{src:r(724),alt:""}}),e._v(" "),n("span",{staticClass:"capitalize "},[e._v("Contuine with Google")])])],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VBtn:w.a,VIcon:k.a})}}]);