(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{919:function(e,t,n){"use strict";n.r(t);var r=n(4),c=(n(64),n(858)),o=n(820),l=(n(821),n(84)),f={components:{PictureInput:c.a,Cropper:o.a},data:function(){return{dialogFile:!1,image:"",step:1,canvas:{},data:{},file:{}}},methods:{changeImage2:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(e.$refs.pictureInput2.files[0]),t.next=3,l.a.getBase64(e.$refs.pictureInput2.files[0]);case 3:data=t.sent,e.image=data,e.step=2;case 6:case"end":return t.stop()}}),t)})))()},changeImage:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log(t.$refs.pictureInput.file),t.image=e,t.step=2;case 3:case"end":return n.stop()}}),n)})))()},change:function(e){var t=e.coordinates,canvas=e.canvas;console.log(t,canvas),this.canvas=t},ready:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var canvas,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e),canvas=e.canvas,r=canvas.toDataURL(),n.next=5,l.a.dataURLtoFile(r);case 5:t.file=n.sent,console.log(t.file);case 7:case"end":return n.stop()}}),n)})))()},callbackImage:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.step=1,e.dialogFile=!1,t.next=4,e.$emit("profileImage",e.file);case 4:case"end":return t.stop()}}),t)})))()},closeDialog:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.step=1,e.dialogFile=!1;case 2:case"end":return t.stop()}}),t)})))()}}},v=n(55),d=n(72),m=n.n(d),h=n(577),w=n(555),_=n(530),x=n(815),I=n(572),k=n(661),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("vs-button",{attrs:{floating:"",color:"success"},on:{click:function(t){e.dialogFile=!0}}},[e._v("Upload Picture")]),e._v(" "),e.dialogFile?n("v-dialog",{attrs:{persistent:"",scrollable:"","max-width":"500px",transition:"dialog-transition"},model:{value:e.dialogFile,callback:function(t){e.dialogFile=t},expression:"dialogFile"}},[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[e._v(" Setting Image\r\n                "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{icon:"",color:"error"},on:{click:function(t){return e.closeDialog()}}},[n("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),n("v-card-text",[1==e.step?n("div",[n("input",{ref:"pictureInput2",attrs:{accept:"image/jpeg,image/png",type:"file",name:"",id:""},on:{change:e.changeImage2}})]):e._e(),e._v(" "),2==e.step?n("div",[n("cropper",{staticClass:"cropper",attrs:{src:e.image,"stencil-props":{aspectRatio:10/12}},on:{change:e.ready}}),e._v(" "),n("br"),e._v(" "),n("center",[n("vs-button",{attrs:{floating:"",color:"success"},on:{click:function(t){return e.callbackImage()}}},[e._v("Upload Image")])],1)],1):e._e()])],1)],1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:h.a,VCard:w.a,VCardText:_.c,VCardTitle:_.d,VDialog:x.a,VIcon:I.a,VSpacer:k.a})}}]);