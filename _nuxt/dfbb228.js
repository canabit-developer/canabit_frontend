(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{715:function(e,t,r){e.exports=r.p+"img/1.d79cbd6.png"},716:function(e,t,r){"use strict";r.d(t,"a",(function(){return k}));r(57);var n=r(4),o=r(13),c=r(14),l=r(23),m=r(19),f=r(8),d=r(17),v=(r(65),r(39),r(9),r(40),r(49),r(67)),h=r(31),x=r(99);function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(m.a)(this,r)}}var y=function(e,t,r,desc){var n,o=arguments.length,c=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(o<3?n(c):o>3?n(t,r,c):n(t,r))||c);return o>3&&c&&Object.defineProperty(t,r,c),c},_=function(e){Object(l.a)(y,e);var t,r,m,f,d,v,x=w(y);function y(){var e;return Object(o.a)(this,y),(e=x.apply(this,arguments)).dialogCityState=!1,e.currentGeo=null,e.currentProvince=null,e.currentAmphur=null,e.currentDistrict=null,e.showName=null,e.city={},e}return Object(c.a)(y,[{key:"getGeo",value:(v=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.getHttp("/api/location/geography/");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(){return v.apply(this,arguments)})},{key:"getProvince",value:(d=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.getHttp("/api/location/province/?geo=".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e){return d.apply(this,arguments)})},{key:"getAmphur",value:(f=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.getHttp("/api/location/amphur/?province=".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e){return f.apply(this,arguments)})},{key:"getDistrict",value:(m=Object(n.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.getHttp("/api/location/district/?amphur=".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),function(e){return m.apply(this,arguments)})},{key:"setShowName",value:(r=Object(n.a)(regeneratorRuntime.mark((function e(){var t,r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=this.currentProvince?this.currentProvince.name:"-",r=this.currentGeo?this.currentGeo.name:"-",n=this.currentAmphur?this.currentAmphur.name:"-",o=this.currentDistrict?this.currentDistrict.name:"-",this.showName="".concat(r,"  จ.").concat(t," อ.").concat(n," ต.").concat(o);case 5:case"end":return e.stop()}}),e,this)}))),function(){return r.apply(this,arguments)})},{key:"getFullCity",value:(t=Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.getHttp("/api/location/geography/");case 2:return e.t0=e.sent,e.next=5,h.a.getHttp("/api/location/province/");case 5:return e.t1=e.sent,e.next=8,h.a.getHttp("/api/location/province/");case 8:return e.t2=e.sent,e.next=11,h.a.getHttp("/api/location/district/");case 11:e.t3=e.sent,this.city={geo:e.t0,province:e.t1,amphur:e.t2,district:e.t3};case 13:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})}]),y}(v.b),k=new(_=y([Object(v.a)({generateMutationSetters:!0})],_))({store:x.a,name:"City"})},913:function(e,t,r){"use strict";r.r(t);var n=r(4),o=(r(65),r(97)),c=r(31),l=(r(400),r(716)),m={components:{},data:function(){return{form:{},user:o.a.user,showCropper:!0,data:{},src:"http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png",foreigner:!1,nonName:!0,kyc:{}}},computed:{imageProfile:function(){return o.a.user.image_profile},CityFrom:function(){return l.a.showName}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.initial();case 2:case"end":return t.stop()}}),t)})))()},methods:{getMyKyc:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.getHttp("/api/account/kyc/?user=".concat(e.user.id));case 2:(r=t.sent).length>0&&(e.kyc=r[r.length-1],1==e.kyc.user_verified_name_error&&(e.nonName=!1));case 4:case"end":return t.stop()}}),t)})))()},imageuploaded:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log(e);case 1:case"end":return t.stop()}}),t)})))()},initial:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.getHttp("/api/account/userprofile/".concat(e.user.id,"/"));case 2:return e.form=t.sent,delete e.form.image_profile,t.next=6,e.setCity();case 6:return t.next=8,e.getMyKyc();case 8:case"end":return t.stop()}}),t)})))()},updateProfile:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.form.geo=l.a.currentGeo.id,e.form.province=l.a.currentProvince.id,e.form.amphur=l.a.currentAmphur.id,e.form.district=l.a.currentDistrict.id,t.next=6,c.a.putHttpAlert("/api/account/userprofile/".concat(e.user.id,"/"),e.form);case 6:t.sent;case 7:case"end":return t.stop()}}),t)})))()},getFileImage:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var image,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return image=e,(n=new FormData).append("image_profile",image),r.next=5,c.a.putImageHttpAlert("/api/account/userprofile/".concat(t.user.id,"/"),n);case 5:return r.sent,r.next=8,o.a.setUser();case 8:return r.next=10,t.initial();case 10:case"end":return r.stop()}}),r)})))()},openCityDialog:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.a.dialogCityState=!0;case 1:case"end":return e.stop()}}),e)})))()},setCity:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.a.getHttp("/api/location/geography/".concat(e.form.geo,"/"));case 2:return l.a.currentGeo=t.sent,t.next=5,c.a.getHttp("/api/location/province/".concat(e.form.province,"/"));case 5:return l.a.currentProvince=t.sent,t.next=8,c.a.getHttp("/api/location/amphur/".concat(e.form.amphur,"/"));case 8:return l.a.currentAmphur=t.sent,t.next=11,c.a.getHttp("/api/location/district/".concat(e.form.district,"/"));case 11:return l.a.currentDistrict=t.sent,t.next=14,l.a.setShowName();case 14:case"end":return t.stop()}}),t)})))()}}},f=r(56),d=r(73),v=r.n(d),h=r(678),x=r(542),w=r(530),y=r(970),_=r(587),k=r(578),C=r(652),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Core-City"),e._v(" "),n("img",{ref:"ximg",staticClass:"w-full",attrs:{src:"",alt:""}}),e._v(" "),n("v-card",{staticClass:"pa-3 mt-2 pl-2",attrs:{flat:""}},[n("v-card-text",{staticClass:"d-flex"},[n("vs-avatar",{attrs:{size:"120",history:"",circle:""}},[e.imageProfile?n("img",{attrs:{src:e.$url+e.imageProfile,alt:""}}):n("img",{attrs:{src:r(715)}})]),e._v(" "),n("img",{ref:"imgs",attrs:{src:"",alt:""}}),e._v(" "),n("div",{staticClass:"ml-4"},[n("h3",{staticClass:"text-3xl"},[e._v(e._s(e.form.display_name))]),e._v(" "),n("div",{staticClass:"mt-2"},[n("Core-ImageInput",{on:{profileImage:e.getFileImage}})],1)])],1),e._v(" "),n("v-card-text",[n("form",{staticClass:"multi-col-validation mt-6",on:{submit:function(t){return t.preventDefault(),e.updateProfile.apply(null,arguments)}}},[n("div",{staticClass:"flex flex-col md:flex-row md:flex-wrap"},[n("div",{staticClass:"w-full flex"},[n("h2",{staticClass:"w-full md:w-9/12 text-2xl mb-4"},[n("v-icon",{staticClass:"mr-2 "},[e._v("em em-female-technologist")]),e._v(" General Profile")],1),e._v(" "),"Facebook"==e.form.register_by?n("v-chip",{staticClass:"ma-2 w-full md:w-3/12 ",attrs:{color:"blue",dark:"",small:""}},[n("v-icon",[e._v("mdi-facebook")]),e._v(" Register By Facebook\r\n                        ")],1):"Google"==e.form.register_by?n("v-chip",{staticClass:"ma-2 w-full md:w-3/12 ",attrs:{color:"grey",dark:"",small:""}},[n("v-icon",[e._v("mdi-google")]),e._v(" Register By Google\r\n                        ")],1):n("v-chip",{staticClass:"ma-2 w-full md:w-3/12 ",attrs:{color:"primary",small:""}},[n("v-icon",[e._v("mdi-login")]),e._v(" Register By Website\r\n                        ")],1)],1),e._v(" "),n("div",{staticClass:"w-full"},[e.nonName?e._e():n("v-alert",{attrs:{type:"error",outlined:""}},[e._v("\r\n                            ชื่อ-สกุล ไม่ตรงกับบัตรประจำตัวประชาชน โปรดแก้ไขข้อมูล\r\n                        ")])],1),e._v(" "),n("v-text-field",{staticClass:"w-full md:w-1/2 mt-2 pl-2",attrs:{"prepend-inner-icon":"em em-bust_in_silhouette",label:"Display Name",dense:"",outlined:""},model:{value:e.form.display_name,callback:function(t){e.$set(e.form,"display_name",t)},expression:"form.display_name"}}),e._v(" "),n("v-text-field",{staticClass:"w-full md:w-1/2 mt-2 pl-2",attrs:{disabled:"","prepend-inner-icon":"em em-email",label:"E-mail",dense:"",outlined:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),n("v-text-field",{staticClass:"w-full md:w-1/2 mt-2 pl-2",attrs:{disabled:e.nonName,"prepend-inner-icon":"em em-man-frowning",label:"First Name",dense:"",outlined:""},model:{value:e.form.first_name,callback:function(t){e.$set(e.form,"first_name",t)},expression:"form.first_name"}}),e._v(" "),n("v-text-field",{staticClass:"w-full md:w-1/2 mt-2 pl-2",attrs:{disabled:e.nonName,"prepend-inner-icon":"em em-man-frowning",label:"Last name",dense:"",outlined:""},model:{value:e.form.last_name,callback:function(t){e.$set(e.form,"last_name",t)},expression:"form.last_name"}}),e._v(" "),n("br"),n("br"),e._v(" "),n("h2",{staticClass:"w-full text-2xl"},[n("v-icon",{staticClass:"mr-2"},[e._v("em em-house")]),e._v(" Address")],1),e._v(" "),n("v-checkbox",{attrs:{label:"Foreigner"},model:{value:e.form.foreigner,callback:function(t){e.$set(e.form,"foreigner",t)},expression:"form.foreigner"}}),e._v(" "),n("v-text-field",{staticClass:"w-full  pl-2",attrs:{"prepend-inner-icon":"em em-house",label:"Address",dense:"",outlined:""},model:{value:e.form.address,callback:function(t){e.$set(e.form,"address",t)},expression:"form.address"}}),e._v(" "),e.form.foreigner?e._e():n("v-text-field",{staticClass:"w-full md:w-1/2 mt-2 pl-2",attrs:{dense:"",outlined:"",value:e.CityFrom,type:"text",label:"Province District","prepend-inner-icon":"em em-house_buildings"},on:{click:e.openCityDialog,focus:e.openCityDialog}}),e._v(" "),e.form.foreigner?e._e():n("v-text-field",{staticClass:"w-full md:w-1/2 mt-2 pl-2",attrs:{"prepend-inner-icon":"em em-postbox",label:"zip code",dense:"",outlined:""},model:{value:e.form.zipcode,callback:function(t){e.$set(e.form,"zipcode",t)},expression:"form.zipcode"}})],1),e._v(" "),n("br"),e._v(" "),n("vs-button",{attrs:{type:"submit",floating:"",block:"",color:"success"},on:{click:e.updateProfile}},[e._v("Save Changes")])],1)])],1)],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VAlert:h.a,VCard:x.a,VCardText:w.c,VCheckbox:y.a,VChip:_.a,VIcon:k.a,VTextField:C.a})}}]);