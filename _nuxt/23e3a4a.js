(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{1009:function(t,e,l){"use strict";l.r(e);var n=l(4),d=(l(68),l(44)),h=(l(124),l(98)),r={data:function(){return{vote:{},response:!1,dialog:!0}},methods:{startup:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.getHttp("/api/vote/votemode/?is_active=true");case 2:(l=e.sent).length>0&&(t.vote=l[l.length-1]);case 4:case"end":return e.stop()}}),e)})))()}},created:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.startup();case 2:t.response=!0;case 3:case"end":return e.stop()}}),e)})))()},computed:{user:function(){return h.a.user},point:function(){return h.a.point},tier:function(){return h.a.tier},tiers:function(){return h.a.tiers},setting:function(){return h.a.setting}}},c=(l(892),l(57)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vs-dialog",{staticClass:"bg-gray-100",attrs:{width:"550px","not-center":""},scopedSlots:t._u([{key:"header",fn:function(){return[n("center",[n("img",{staticClass:"w-10 md:w-40 mtimg",attrs:{src:l(715),alt:""}}),t._v(" "),n("h2",{staticClass:"ref font-semibold text-4xl mt-2 text-green-500"},[t._v("Reward Volting")])]),t._v(" "),n("hr",{staticClass:"m-4"})]},proxy:!0}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t._v(" "),n("div",{staticClass:"con-content"},[t.response&&t.vote.id?n("div",[t.vote?n("div",[n("Reward-Countdown",{attrs:{vote:t.vote}}),t._v(" "),n("hr",{staticClass:"m-4"}),t._v(" "),n("div",{staticClass:"mt-5"},[n("Reward-ListDialog",{attrs:{vote:t.vote}})],1)],1):t._e()]):t._e()])]),t._v(" "),n("div",[t.response&&t.vote.id?n("div",[t.vote?n("div",[n("Reward-Countdown",{attrs:{vote:t.vote}}),t._v(" "),n("div",{staticClass:"mt-5"},[n("Reward-List",{attrs:{vote:t.vote}})],1)],1):t._e()]):n("div",[n("img",{attrs:{src:"https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/273214837_395383259019790_558937949465519379_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeEi2X_-ZhHBPD8rY_U8Op0hdexDfCqWOrt17EN8KpY6u2X9PR0aNmOKe5p66EE_AZLUVUvaHC2gnb97qnGHWbwi&_nc_ohc=RV5jsCNLH7QAX-RWMk8&_nc_ht=scontent.fcnx3-1.fna&oh=00_AT8bjj1cfmXB6mzzaZ2woaPgNgICvcVWChdsnOp-B_jsZw&oe=624B4179",alt:""}})])]),t._v(" "),t.response&&t.vote.id?n("div",{staticClass:" bg-green-400 flex justify-center items-center "},[n("div",{staticClass:"absolute w-60 h-60 rounded-xl bg-green-300 top-1/3 mt-16  -left-16 z-0 transform rotate-45 hidden md:block"}),t._v(" "),n("div",{staticClass:"absolute w-48 h-48 rounded-xl bg-green-300  -bottom-6 -right-10 transform rotate-12 hidden md:block"}),t._v(" "),n("div",{staticClass:"max-w-6xl mx-auto md:px-6 px-4"},[t._m(0),t._v(" "),t.vote?n("div",[n("div",{staticClass:"mt-5"},[n("Reward-List",{attrs:{vote:t.vote}})],1)]):t._e()]),t._v(" "),n("div",{staticClass:"w-40 h-40 absolute bg-green-300 rounded-full top-1/3 mt-24  right-12 hidden md:block"}),t._v(" "),n("div",{staticClass:"w-20 h-40 absolute bg-green-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"})]):n("div",[n("img",{attrs:{src:"https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/273214837_395383259019790_558937949465519379_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeEi2X_-ZhHBPD8rY_U8Op0hdexDfCqWOrt17EN8KpY6u2X9PR0aNmOKe5p66EE_AZLUVUvaHC2gnb97qnGHWbwi&_nc_ohc=RV5jsCNLH7QAX-RWMk8&_nc_ht=scontent.fcnx3-1.fna&oh=00_AT8bjj1cfmXB6mzzaZ2woaPgNgICvcVWChdsnOp-B_jsZw&oe=624B4179",alt:""}})])],1)}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"md:py-20 py-12"},[l("div",{staticClass:"md:pb-20 pb-12 max-w-3xl mx-auto text-center "},[l("h2",{staticClass:"md:text-6xl text-4xl text-white dark:text-white font-bold mb-4"},[t._v("Reward Voting")]),t._v(" "),l("p",{staticClass:"text-xl text-white dark:text-white"},[t._v("Customers can bring their points to win prizes with us.where a minimum of 50 points will be counted as a vote 1 time which customers can vote Products can be slowed until their own points are exhausted.")])]),t._v(" "),l("div",{staticClass:"text-center mb-10"},[l("span",{staticClass:"inline-block w-1 h-1 rounded-full bg-white ml-1"}),t._v(" "),l("span",{staticClass:"inline-block w-3 h-1 rounded-full bg-white ml-1"}),t._v(" "),l("span",{staticClass:"inline-block w-40 h-1 rounded-full bg-white ml-1"}),t._v(" "),l("span",{staticClass:"inline-block w-3 h-1 rounded-full bg-white ml-1"}),t._v(" "),l("span",{staticClass:"inline-block w-1 h-1 rounded-full bg-white ml-1"})])])}],!1,null,null,null);e.default=component.exports},715:function(t,e,l){t.exports=l.p+"img/trophy.16e6df0.png"},795:function(t,e,l){var content=l(893);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(41).default)("4d14a385",content,!0,{sourceMap:!1})},892:function(t,e,l){"use strict";l(795)},893:function(t,e,l){var n=l(40)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Lobster&family=Mali:wght@500&display=swap);"]),n.push([t.i,".bg-reward{background-color:#00c0b1;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 60'%3E%3Cpath fill='%2300C0B1' d='M0 0h11v11H0z'/%3E%3Cpath fill='%2316c1b0' d='M10 0h11v11H10z'/%3E%3Cpath fill='%2323c2af' d='M0 10h11v11H0z'/%3E%3Cpath fill='%232cc3af' d='M20 0h11v11H20z'/%3E%3Cpath fill='%2334c4ae' d='M10 10h11v11H10z'/%3E%3Cpath fill='%233ac5ad' d='M0 20h11v11H0z'/%3E%3Cpath fill='%2341c6ad' d='M30 0h11v11H30z'/%3E%3Cpath fill='%2346c6ac' d='M20 10h11v11H20z'/%3E%3Cpath fill='%234cc7ab' d='M10 20h11v11H10z'/%3E%3Cpath fill='%2351c8ab' d='M0 30h11v11H0z'/%3E%3Cpath fill='%2355c9aa' d='M40 0h11v11H40z'/%3E%3Cpath fill='%235acaaa' d='M30 10h11v11H30z'/%3E%3Cpath fill='%235ecba9' d='M20 20h11v11H20z'/%3E%3Cpath fill='%2363cca9' d='M10 30h11v11H10z'/%3E%3Cpath fill='%2367cca8' d='M0 40h11v11H0z'/%3E%3Cpath fill='%236bcda8' d='M50 0h11v11H50z'/%3E%3Cpath fill='%236fcea8' d='M40 10h11v11H40z'/%3E%3Cpath fill='%2373cfa7' d='M30 20h11v11H30z'/%3E%3Cpath fill='%2376d0a7' d='M20 30h11v11H20z'/%3E%3Cpath fill='%237ad1a7' d='M10 40h11v11H10z'/%3E%3Cpath fill='%237ed1a6' d='M0 50h11v11H0z'/%3E%3Cpath fill='%2381d2a6' d='M60 0h11v11H60z'/%3E%3Cpath fill='%2385d3a6' d='M50 10h11v11H50z'/%3E%3Cpath fill='%2388d4a6' d='M40 20h11v11H40z'/%3E%3Cpath fill='%238bd5a6' d='M30 30h11v11H30z'/%3E%3Cpath fill='%238fd5a6' d='M20 40h11v11H20z'/%3E%3Cpath fill='%2392d6a6' d='M10 50h11v11H10z'/%3E%3Cpath fill='%2395d7a6' d='M70 0h11v11H70z'/%3E%3Cpath fill='%2399d8a6' d='M60 10h11v11H60z'/%3E%3Cpath fill='%239cd8a6' d='M50 20h11v11H50z'/%3E%3Cpath fill='%239fd9a6' d='M40 30h11v11H40z'/%3E%3Cpath fill='%23a2daa6' d='M30 40h11v11H30z'/%3E%3Cpath fill='%23a5dba6' d='M20 50h11v11H20z'/%3E%3Cpath fill='%23a8dba6' d='M80 0h11v11H80z'/%3E%3Cpath fill='%23abdca7' d='M70 10h11v11H70z'/%3E%3Cpath fill='%23aedda7' d='M60 20h11v11H60z'/%3E%3Cpath fill='%23b1dea7' d='M50 30h11v11H50z'/%3E%3Cpath fill='%23b4dea8' d='M40 40h11v11H40z'/%3E%3Cpath fill='%23b7dfa8' d='M30 50h11v11H30z'/%3E%3Cpath fill='%23bae0a9' d='M90 0h11v11H90z'/%3E%3Cpath fill='%23bde0a9' d='M80 10h11v11H80z'/%3E%3Cpath fill='%23c0e1aa' d='M70 20h11v11H70z'/%3E%3Cpath fill='%23c2e2ab' d='M60 30h11v11H60z'/%3E%3Cpath fill='%23c5e3ab' d='M50 40h11v11H50z'/%3E%3Cpath fill='%23c8e3ac' d='M40 50h11v11H40z'/%3E%3Cpath fill='%23cbe4ad' d='M90 10h11v11H90z'/%3E%3Cpath fill='%23cde5ad' d='M80 20h11v11H80z'/%3E%3Cpath fill='%23d0e5ae' d='M70 30h11v11H70z'/%3E%3Cpath fill='%23d3e6af' d='M60 40h11v11H60z'/%3E%3Cpath fill='%23d5e7b0' d='M50 50h11v11H50z'/%3E%3Cpath fill='%23d8e8b1' d='M90 20h11v11H90z'/%3E%3Cpath fill='%23dae8b2' d='M80 30h11v11H80z'/%3E%3Cpath fill='%23dde9b3' d='M70 40h11v11H70z'/%3E%3Cpath fill='%23e0eab4' d='M60 50h11v11H60z'/%3E%3Cpath fill='%23e2eab5' d='M90 30h11v11H90z'/%3E%3Cpath fill='%23e4ebb6' d='M80 40h11v11H80z'/%3E%3Cpath fill='%23e7ecb7' d='M70 50h11v11H70z'/%3E%3Cpath fill='%23e9edb9' d='M90 40h11v11H90z'/%3E%3Cpath fill='%23ecedba' d='M80 50h11v11H80z'/%3E%3Cpath fill='%23EEB' d='M90 50h11v11H90z'/%3E%3C/svg%3E\");background-attachment:fixed;background-size:cover}.ref{font-family:\"Mali\",cursive!important}.mtimg{margin-top:-100px!important}@media only screen and (max-width:600px){.mtimg{margin:0!important}}",""]),t.exports=n}}]);