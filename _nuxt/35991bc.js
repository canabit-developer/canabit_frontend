(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{704:function(t,e,r){t.exports=r.p+"img/1.d79cbd6.png"},760:function(t,e,r){var content=r(859);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(47).default)("7e917c04",content,!0,{sourceMap:!1})},858:function(t,e,r){"use strict";r(760)},859:function(t,e,r){var n=r(46)(!1);n.push([t.i,".upgrade-banner{position:absolute;bottom:13px;left:50%;transform:translateX(-50%)}",""]),t.exports=n},966:function(t,e,r){"use strict";r.r(e);var n=r(4),o=(r(65),r(97)),c=r(31),l={data:function(){return{isDrawerOpen:!0,kyc:{},form:{},response:!1}},methods:{logout:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.logout();case 2:return t.next=4,location.reload();case 4:case"end":return t.stop()}}),t)})))()},getMyKyc:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.getHttp("/api/account/kyc/?user=".concat(t.user.id));case 2:(r=e.sent).length>0&&(t.kyc=r[r.length-1]);case 4:case"end":return e.stop()}}),e)})))()},initial:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.getHttp("/api/account/userprofile/".concat(t.user.id,"/"));case 2:t.form=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},computed:{user:function(){return o.a.user},point:function(){return o.a.point},tier:function(){return o.a.tier},imageProfile:function(){return o.a.user.image_profile}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.initial();case 2:return e.next=4,t.getMyKyc();case 4:t.response=!0;case 5:case"end":return e.stop()}}),e)})))()}},v=(r(858),r(56)),d=r(73),m=r.n(d),f=r(977),_=r(882),k=r(579),h=r(587),x=r(883),w=r(573),y=r(650),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.response?n("div",{staticClass:"bg-main"},[n("v-app-bar",{attrs:{app:"",flat:"",absolute:"",color:"transparent"}},[n("div",{staticClass:"boxed-container w-full"},[n("div",{staticClass:"d-flex align-center mx-6"},[n("v-app-bar-nav-icon",{staticClass:"d-block d-lg-none me-2",on:{click:function(e){t.isDrawerOpen=!t.isDrawerOpen}}}),t._v(" "),n("v-spacer"),t._v(" "),t.kyc.user_verified?t._e():n("vs-button",{staticClass:"my-point",attrs:{color:"#FF0000",floating:""},on:{click:function(e){return t.$router.push("/account")}}},[n("v-icon",{staticClass:"mr-2",staticStyle:{color:"white"}},[t._v("mdi-account-alert")]),t._v(" ยังไม่ได้ยืนยันตัวตน KYC\n                ")],1),t._v(" "),n("vs-button",{staticClass:"my-point",attrs:{color:"#4ade80",floating:""}},[n("v-icon",{staticClass:"mr-2",staticStyle:{color:"white"}},[t._v("mdi-bitcoin")]),t._v("\n                    Point : "+t._s(t.point.current)+"\n                ")],1),t._v(" "),n("div",[n("div",{staticClass:"flex  gap-3 items-center font-semibold text-gray-800 p-3 rounded-md hover:cursor-pointer "},[n("vs-avatar",{staticClass:"hidden md:block sm:block xs:block",attrs:{history:"",success:""}},[t.imageProfile?n("img",{staticClass:"w-10 h-10 rounded-full",attrs:{src:t.$url+t.imageProfile,alt:"Rebecca Burke"}}):n("img",{attrs:{src:r(704)}})]),t._v(" "),n("div",{staticClass:"flex flex-col"},[n("div",{staticClass:"text-green-400 hidden md:block sm:block xs:block "},[t._v("\n                                "+t._s(t.user.display_name)+"\n                            ")]),t._v(" "),n("div",{staticClass:"text-gray-400 text-sm font-normal hidden md:block sm:block xs:block"},[t._v("\n                                "+t._s(t.user.first_name)+" "+t._s(t.user.last_name)+"\n                            ")])])],1)])],1)])]),t._v(" "),n("v-navigation-drawer",{staticClass:"app-navigation-menu bg-main shadow-2xl",attrs:{app:"",floating:"",width:"260",right:t.$vuetify.rtl},scopedSlots:t._u([{key:"append",fn:function(){return[n("div",[n("div",{on:{click:function(e){return t.logout()}}},[n("UserMenu-NavbarLink",{attrs:{path:"/logout",title:"Logout",icon:"mdi-logout"}})],1)])]},proxy:!0}],null,!1,2220892113),model:{value:t.isDrawerOpen,callback:function(e){t.isDrawerOpen=e},expression:"isDrawerOpen"}},[n("div",{staticClass:"vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2"},[n("router-link",{staticClass:"d-flex align-center text-decoration-none w-full",attrs:{to:"/"}},[n("center",[n("v-slide-x-transition",[n("img",{staticClass:"h-14",attrs:{src:"https://www.img.in.th/images/90cc2f82b6c393cc69828ea5a21eacd1.png",alt:""}})])],1)],1)],1),t._v(" "),n("div",{staticClass:"p-6 flex flex-col items-center"}),t._v(" "),n("v-list",{staticClass:"vertical-nav-menu-items pr-5 -mt-16",attrs:{expand:"",shaped:""}},[n("UserMenu-NavbarLink",{attrs:{path:"/",title:"Home",icon:"em em-house"}}),t._v(" "),t.kyc.user_verified?n("UserMenu-NavbarLink",{attrs:{path:"/transaction",title:"Transaction",icon:"em em-clipboard"}}):t._e(),t._v(" "),t.kyc.user_verified?n("UserMenu-NavbarLink",{attrs:{path:"/forex",title:"Forex Broker",icon:"em em-bank"}}):t._e(),t._v(" "),t.kyc.user_verified?n("UserMenu-NavMenuGroup",{attrs:{icon:"em em-shopping_trolley",title:"Product"}},[n("div",{staticClass:"ml-2"},[n("UserMenu-NavbarLink",{attrs:{path:"/semiauto",title:"EA",icon:"em em-chart"}})],1),t._v(" "),n("div",{staticClass:"ml-2"},[n("UserMenu-NavbarLink",{attrs:{path:"/signals",title:"Indicator",icon:"em em-arrow_double_down"}})],1),t._v(" "),n("div",{staticClass:"ml-2"},[n("UserMenu-NavbarLink",{attrs:{path:"/copytrade",title:" Copy Trade",icon:"em em-bookmark_tabs"}})],1)]):t._e(),t._v(" "),t.kyc.user_verified?n("UserMenu-NavbarLink",{attrs:{path:"/accountstatus",title:"History Account",icon:"em em-clock1"}}):t._e(),t._v(" "),n("UserMenu-NavMenuSectionTitle",{attrs:{title:"USER SETTING"}}),t._v(" "),n("UserMenu-NavbarLink",{attrs:{path:"/account",title:"Account Setting",icon:"em em-wrench"}})],1)],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;m()(component,{VAppBar:f.a,VAppBarNavIcon:_.a,VIcon:k.a,VList:h.a,VNavigationDrawer:x.a,VSlideXTransition:w.d,VSpacer:y.a})}}]);