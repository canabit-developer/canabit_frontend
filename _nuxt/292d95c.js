(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1009:function(t,r,e){"use strict";e.r(r);var o={},l=e(75),n=e(86),c=e.n(n),h=e(921),d=e(601),v=e(588),component=Object(l.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("v-app-bar",{attrs:{flat:"",color:"transparent",fixed:""}},[e("a",{attrs:{href:"#"}},[e("img",{staticClass:"h-12",attrs:{src:"images/logos/canabit_vector.svg",alt:""}})]),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(r){return t.$router.push("/home")}}},[t._v("Home")]),t._v(" "),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(r){return t.$router.push("/home/about")}}},[t._v("About")]),t._v(" "),e("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(r){return t.$router.push("/home/contract")}}},[t._v("Contract")]),t._v(" "),e("v-btn",{staticClass:"mr-2",attrs:{outlined:"",color:"primary"},on:{click:function(r){return t.$router.push("/auth/register")}}},[t._v("Register")]),t._v(" "),e("v-btn",{attrs:{color:"primary"},on:{click:function(r){return t.$router.push("/auth/login")}}},[t._v("Login")])],1)],1)}),[],!1,null,null,null);r.default=component.exports;c()(component,{VAppBar:h.a,VBtn:d.a,VSpacer:v.a})},734:function(t,r,e){var content=e(735);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(36).default)("a9b20584",content,!0,{sourceMap:!1})},735:function(t,r,e){var o=e(35)(!1);o.push([t.i,".theme--light.v-app-bar.v-toolbar.v-sheet{background-color:#f5f5f5}.theme--dark.v-app-bar.v-toolbar.v-sheet{background-color:#272727}.v-sheet.v-app-bar.v-toolbar{border-radius:0}.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-sheet.v-app-bar.v-toolbar.v-sheet--shaped{border-radius:24px 0}.v-app-bar:not([data-booted=true]){transition:none!important}.v-app-bar.v-app-bar--fixed{position:fixed;top:0;z-index:5}.v-app-bar.v-app-bar.v-app-bar--hide-shadow{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-app-bar--fade-img-on-scroll .v-toolbar__image .v-image__image{transition:opacity .4s cubic-bezier(.4,0,.2,1)}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll .v-toolbar__image{will-change:opacity}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--collapse-on-scroll .v-toolbar__extension{display:none}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--is-scrolled .v-toolbar__title{padding-top:9px}.v-app-bar.v-toolbar--prominent.v-app-bar--shrink-on-scroll.v-app-bar--is-scrolled:not(.v-app-bar--bottom) .v-toolbar__title{padding-bottom:9px}.v-app-bar.v-app-bar--shrink-on-scroll .v-toolbar__title{font-size:inherit}.v-app-bar-title__content,.v-app-bar-title__placeholder{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.v-app-bar-title__content{position:absolute}",""]),t.exports=o},921:function(t,r,e){"use strict";e(26),e(22),e(30),e(10),e(31),e(27),e(40);var o=e(9),l=(e(432),e(96),e(734),e(578)),n=e(13);var c={inserted:function(t,r,e){var o=(r.modifiers||{}).self,l=void 0!==o&&o,c=r.value,h="object"===Object(n.a)(c)&&c.options||{passive:!0},d="function"==typeof c||"handleEvent"in c?c:c.handler,v=l?t:r.arg?document.querySelector(r.arg):window;v&&(v.addEventListener("scroll",d,h),t._onScroll=Object(t._onScroll),t._onScroll[e.context._uid]={handler:d,options:h,target:l?void 0:v})},unbind:function(t,r,e){var o;if(null!=(o=t._onScroll)&&o[e.context._uid]){var l=t._onScroll[e.context._uid],n=l.handler,c=l.options,h=l.target;(void 0===h?t:h).removeEventListener("scroll",n,c),delete t._onScroll[e.context._uid]}}},h=c,d=e(211),v=e(32),f=e(1).default.extend({name:"scrollable",directives:{Scroll:c},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:function(){return{currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}},computed:{canScroll:function(){return"undefined"!=typeof window},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp:function(){this.savedScroll=this.savedScroll||this.currentScroll},isActive:function(){this.savedScroll=0}},mounted:function(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||Object(v.c)("Unable to locate element with identifier ".concat(this.scrollTarget),this))},methods:{onScroll:function(){var t=this;this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((function(){Math.abs(t.currentScroll-t.savedScroll)>t.computedScrollThreshold&&t.thresholdMet()})))},thresholdMet:function(){}}}),m=e(140),S=e(597),O=e(8),_=e(62);function x(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(r){Object(o.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}var T=Object(_.a)(l.a,f,m.a,S.a,Object(d.a)("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));r.a=T.extend({name:"v-app-bar",directives:{Scroll:h},provide:function(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data:function(){return{isActive:this.value}},computed:{applicationProperty:function(){return this.bottom?"bottom":"top"},canScroll:function(){return f.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes:function(){return y(y({},l.a.options.computed.classes.call(this)),{},{"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll})},scrollRatio:function(){var t=this.computedScrollThreshold;return Math.max((t-this.currentScroll)/t,0)},computedContentHeight:function(){if(!this.shrinkOnScroll)return l.a.options.computed.computedContentHeight.call(this);var t=this.dense?48:56;return t+(this.computedOriginalHeight-t)*this.scrollRatio},computedFontSize:function(){if(this.isProminent){return 1.25+.25*this.scrollRatio}},computedLeft:function(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop:function(){return this.app?this.$vuetify.application.bar:0},computedOpacity:function(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight:function(){var t=l.a.options.computed.computedContentHeight.call(this);return this.isExtended&&(t+=parseInt(this.extensionHeight)),t},computedRight:function(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold:function(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform:function(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;var t=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?t:-t},hideShadow:function(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed:function(){return this.collapseOnScroll?this.currentScroll>0:l.a.options.computed.isCollapsed.call(this)},isProminent:function(){return l.a.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles:function(){return y(y({},l.a.options.computed.styles.call(this)),{},{fontSize:Object(O.h)(this.computedFontSize,"rem"),marginTop:Object(O.h)(this.computedMarginTop),transform:"translateY(".concat(Object(O.h)(this.computedTransform),")"),left:Object(O.h)(this.computedLeft),right:Object(O.h)(this.computedRight)})}},watch:{canScroll:"onScroll",computedTransform:function(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll:function(t){this.isActive=!t||0!==this.currentScroll},hideOnScroll:function(t){this.isActive=!t||this.currentScroll<this.computedScrollThreshold}},created:function(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground:function(){var t=l.a.options.methods.genBackground.call(this);return t.data=this._b(t.data||{},t.tag,{style:{opacity:this.computedOpacity}}),t},updateApplication:function(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet:function(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render:function(t){var r=l.a.options.render.call(this,t);return r.data=r.data||{},this.canScroll&&(r.data.directives=r.data.directives||[],r.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),r}})}}]);