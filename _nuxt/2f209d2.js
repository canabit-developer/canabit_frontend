(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{783:function(t,n,e){"use strict";e.r(n);var r=e(4),o=(e(54),e(85)),c=e(97),l=(e(176),{data:function(){return{lists:[],user:c.a.user,response:!1}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.initial();case 2:case"end":return n.stop()}}),n)})))()},methods:{initial:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.a.getHttp("/api/connection/user/favourite/?user=".concat(t.user.id));case 2:t.lists=n.sent,console.log(t.lists),t.response=!0;case 5:case"end":return n.stop()}}),n)})))()}}}),f=e(48),d=e(61),m=e.n(d),v=e(548),x=e(589),component=Object(f.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{staticClass:"mt-6"},[e("v-toolbar",{attrs:{color:"transparent",flat:""}},[e("h2",{staticClass:"text-2xl font-semibold"},[t._v("You Favorite")])]),t._v(" "),e("div",[e("vs-card-group",t._l(t.lists,(function(n,r){return e("vs-card",{key:r,on:{click:function(e){return t.$router.push("/profilebrand?id="+n.brand.id)}},scopedSlots:t._u([{key:"title",fn:function(){return[e("h3",{staticClass:"font-semibold"},[t._v(t._s(n.brand.name))])]},proxy:!0},{key:"img",fn:function(){return[e("v-img",{staticClass:"h-48 w-auto mx-auto",attrs:{contain:"",src:""+t.$url+n.brand.image}})]},proxy:!0},{key:"text",fn:function(){return[e("p",{staticClass:"text-orange-500 font-semibold"},[t._v("\r\n                       เงินคืนสูงสุด "+t._s(n.brand.point_back)+" %\r\n                    ")])]},proxy:!0}],null,!0)})})),1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;m()(component,{VImg:v.a,VToolbar:x.a})}}]);