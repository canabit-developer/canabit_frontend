(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1005:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),c={components:{},data:function(){return{}},props:{vote:{default:{}}},computed:{endDate:function(){return o()(this.vote.times).format("MMM  DD YYYY hh:mm:ss")},startDate:function(){return o()().format("MMM  DD YYYY hh:mm:ss")}}},l=n(57),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"text-yellow-100 -mt-5"},[n("div",{staticClass:"text-6xl text-center flex w-full items-center justify-center"},[n("Reward-Timmer",{attrs:{starttime:t.startDate,endtime:t.endDate,trans:'{\n                           "day":"Day",\n                           "hours":"Hours",\n                           "minutes":"Minuts",\n                           "seconds":"Seconds",\n                           "expired":"Event has been expired.",\n                           "running":"Till the end of event.",\n                           "upcoming":"Till start of event.",\n                           "status": {\n                              "expired":"Expired",\n                              "running":"Running",\n                              "upcoming":"Future"\n                             }}'}})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);