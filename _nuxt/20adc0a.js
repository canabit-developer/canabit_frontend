(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{687:function(t,e,r){t.exports=r.p+"img/canabit_vector.5230daf.svg"},725:function(t,e,r){var content=r(780);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(44).default)("5cedc3da",content,!0,{sourceMap:!1})},779:function(t,e,r){"use strict";r(725)},780:function(t,e,r){var n=r(43)(!1);n.push([t.i,".auth-wrapper{display:flex;min-height:100vh;min-height:calc(var(--vh, 1vh)*100);width:100%;flex-basis:100%;align-items:center}.auth-wrapper a{text-decoration:unset}.auth-wrapper.auth-v1{align-items:center;justify-content:center;overflow:hidden;padding:1.5rem}.auth-wrapper.auth-v1 .auth-mask-bg{position:absolute;bottom:0;width:100%}.auth-wrapper.auth-v1 .auth-tree,.auth-wrapper.auth-v1 .auth-tree-3{position:absolute}.auth-wrapper.auth-v1 .auth-tree{bottom:0;left:0}.auth-wrapper.auth-v1 .auth-tree-3{bottom:0;right:0}.auth-wrapper.auth-v1 .auth-inner{width:28rem;z-index:1}.auth-wrapper.auth-v1 .auth-inner .auth-card{padding:.9375rem .875rem}@media(max-width:600px){.auth-v1 .auth-mask-bg,.auth-v1 .auth-tree,.auth-v1 .auth-tree-3{display:none}}",""]),t.exports=n},906:function(t,e,r){"use strict";r.r(e);var n=r(4),c=(r(64),r(84)),o={layout:"root",data:function(){return{activated:!0}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.initial();case 2:case"end":return e.stop()}}),e)})))()},methods:{initial:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.activated=!0,e.next=3,c.a.postHttp("/api/auth/v2/verify-registration/",{user_id:t.$route.query.user_id,timestamp:t.$route.query.timestamp,signature:t.$route.query.signature});case 3:r=e.sent,console.log(r),t.activated=!1;case 6:case"end":return e.stop()}}),e)})))()}}},l=(r(779),r(55)),d=r(72),h=r.n(d),v=r(577),m=r(555),f=r(530),x=r(591),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col items-center justify-center"},[n("v-card",{staticClass:"auth-card"},[n("v-card-title",{staticClass:"d-flex align-center justify-center  "},[n("router-link",{staticClass:"d-flex align-center",attrs:{to:"/"}},[n("img",{staticClass:"h-14",attrs:{src:r(687),alt:""}})])],1),t._v(" "),n("v-card-text",{staticClass:"d-flex align-center"},[n("v-divider"),t._v(" "),n("v-divider")],1),t._v(" "),t.activated?n("v-card-text",{staticClass:"mt-3"},[n("center",[n("span",{staticClass:"em em-radio_button text-5xl animate__animated  animate__pulse animate__infinite\tinfinite"})]),t._v(" "),n("p",{staticClass:"text-2xl font-weight-semibold text--primary mb-2 text-center "},[t._v("\r\n                Activating...\r\n            ")]),t._v(" "),n("center",[n("p",{staticClass:"mb-2"},[t._v("\r\n                    Please Wait\r\n                ")])])],1):n("div",[n("v-card-text",{staticClass:"mt-4"},[n("center",[n("span",{staticClass:"em em-raised_hands text-6xl animate__animated  animate__pulse animate__infinite\tinfinite"})]),t._v(" "),n("p",{staticClass:"text-2xl font-weight-semibold mb-2 text-center text-green-600"},[t._v("\r\n                    Activate Success\r\n                ")]),t._v(" "),n("center",[n("p",{staticClass:"mb-2"},[t._v("\r\n                        You can login with your account now.\r\n                    ")])])],1),t._v(" "),n("v-card-actions",{staticClass:"flex flex-col w-full"},[n("v-btn",{staticClass:"bg-primary-g mt-6",attrs:{dark:"",block:""},on:{click:function(e){return t.$router.push("/auth/login")}}},[t._v("Back to login")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VBtn:v.a,VCard:m.a,VCardActions:f.a,VCardText:f.c,VCardTitle:f.d,VDivider:x.a})}}]);