(function(e){function t(t){for(var n,c,o=t[0],a=t[1],l=t[2],f=0,u=[];f<o.length;f++)c=o[f],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&u.push(i[c][0]),i[c]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);d&&d(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,o=1;o<s.length;o++){var a=s[o];0!==i[a]&&(n=!1)}n&&(r.splice(t--,1),e=c(c.s=s[0]))}return e}var n={},i={index:0},r=[];function c(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=e,c.c=n,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(s,n,function(t){return e[t]}.bind(null,n));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var d=a;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"2d0a":function(e,t,s){"use strict";s("9328")},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function i(e){var t=r(e);return s(t)}function r(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=r,e.exports=i,i.id="4678"},"4be1":function(e,t,s){"use strict";s("e2e6")},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main"},[e._m(0),s("div",{staticClass:"content"},[s("robot")],1),e._m(1)])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header"},[s("div",{staticClass:"con"},[s("div",{staticClass:"logo"},[e._v("Robot Controller UI")]),s("div",{staticClass:"navigation"},[s("div",[e._v("Robot Controller")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"footer"},[s("div",{staticClass:"con"},[e._v("Author Magnus Karlson")])])}],c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"c25 center"},[s("analog-controller",{attrs:{size:200,moveRobot:e.moveRobot}})],1),s("div",{staticClass:"c25"},[s("parameters",{ref:"parameters"})],1),s("div",{staticClass:"c50"},[s("telemetry",{attrs:{getTelemetry:e.getTelemetry}})],1)])},o=[],a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"box",staticClass:"controller center"},[s("div",{ref:"stick",staticClass:"stick"})])},l=[],d=(s("4057"),{name:"AnalogController",props:["size","moveRobot"],mounted:function(){this.isPhone()?(this.$refs.stick.addEventListener("touchstart",this.startProcess),this.$refs.stick.addEventListener("touchend",this.resetProcess)):(this.$refs.stick.addEventListener("mousedown",this.startProcess),this.$refs.stick.addEventListener("mouseup",this.resetProcess)),this.$refs.stick.addEventListener("pointerout",this.resetProcess),this.$refs.stick.addEventListener("pointermove",this.pointerMove),this.middle=this.size/2,this.$refs.box.style.width="".concat(this.size,"px"),this.$refs.box.style.height="".concat(this.size,"px"),this.setStickPos(this.middle,this.middle,!1)},beforeDestroy:function(){this.isPhone()?(this.$refs.stick.removeEventListener("touchstart",this.startProcess),this.$refs.stick.removeEventListener("touchend",this.resetProcess)):(this.$refs.stick.removeEventListener("mousedown",this.startProcess),this.$refs.stick.removeEventListener("mouseup",this.resetProcess)),this.$refs.stick.removeEventListener("pointerout",this.resetProcess),this.$refs.stick.removeEventListener("pointermove",this.pointerMove)},methods:{pointerMove:function(e){e.preventDefault(),this.controllerActive&&this.setStickPos(this.stickX+e.movementX,this.stickY+e.movementY)},startProcess:function(){this.controllerActive=!0,this.disableSelectText()},resetProcess:function(){if(this.controllerActive){this.enableSelectText(),this.controllerActive=!1;var e=20,t=(this.middle-this.stickX)/e,s=(this.middle-this.stickY)/e;this.stickToDefaultPos(t,s)}},stickToDefaultPos:function(e,t){var s=this;if(!this.controllerActive){var n=Math.hypot(this.stickX-this.middle,this.stickY-this.middle);n<10?this.setStickPos(this.middle,this.middle):(this.setStickPos(this.stickX+e,this.stickY+t),setTimeout((function(){return s.stickToDefaultPos(e,t)}),50))}},setStickPos:function(e,t){var s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];e<0||e>this.size||t<0||t>this.size||(s&&this.calculateMovement(e,t),this.stickX=e,this.stickY=t,this.$refs.stick.style.left="calc(".concat(e,"px - 25px)"),this.$refs.stick.style.top="calc(".concat(t,"px - 25px)"))},calculateMovement:function(e,t){var s=(e-this.middle)/this.middle,n=-(t-this.middle)/this.middle||0;this.moveRobot(n,s)},disableSelectText:function(){window.addEventListener("selectstart",this.selectStart)},enableSelectText:function(){window.removeEventListener("selectstart",this.selectStart)},selectStart:function(e){e.preventDefault()}},data:function(){return{stickX:0,stickY:0,controllerActive:!1}}}),f=d,u=(s("4be1"),s("2877")),b=Object(u["a"])(f,a,l,!1,null,"647b98c2",null),h=b.exports,j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"large"},[s("BatteryIcon"),e._v(" "+e._s(e.battery)+"%")],1),s("div",{staticClass:"large"},[s("SpeedometerIcon"),e._v(" "+e._s(e.speed)+"km/h")],1)])},m=[],v=(s("d48d"),s("d96d")),p=s("72ba"),k={components:{BatteryIcon:v["a"],SpeedometerIcon:p["a"]},mounted:function(){},methods:{},data:function(){return{battery:0,speed:0}}},y=k,g=Object(u["a"])(y,j,m,!1,null,null,null),_=g.exports,x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"box-head"},[s("div",[e._v("Telemetry Information")]),s("div",{staticClass:"box-head-button",on:{click:function(t){e.visible=!e.visible}}},[e._v(" "+e._s(e.visible?"Hide":"Show")+" ")])]),e.visible?s("div",{staticClass:"box-content"},e._l(e.items,(function(t){return s("div",{key:t.id,staticClass:"box-content-line"},[e._v(e._s(t))])})),0):e._e()])},w=[],P=s("1da1"),z=(s("d3b7"),s("96cf"),s("c1df")),C=s.n(z),E={props:["getTelemetry"],watch:{visible:function(){var e=this;return Object(P["a"])(regeneratorRuntime.mark((function t(){var s,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.visible){t.next=10;break}return t.next=3,e.getTelemetry();case 3:return s=t.sent,n=C()().format("MM/DD/YYYY hh:mm:ss"),e.items.unshift(n+" "+JSON.stringify(s)),t.next=8,e.sleep(1e3);case 8:t.next=0;break;case 10:case"end":return t.stop()}}),t)})))()}},methods:{sleep:function(e){return new Promise((function(t){return setTimeout(t,e)}))}},data:function(){return{visible:!1,items:[]}}},S=E,$=(s("2d0a"),Object(u["a"])(S,x,w,!1,null,null,null)),O=$.exports,T=s("22e7"),M=s.n(T),L={components:{AnalogController:h,Parameters:_,Telemetry:O},mounted:function(){var e=new M.a,t=new WebSocket("ws://localhost:8765");function s(t,s){return e.on(t,["value"],(function(e){return s(e)})),e.call("subscribe",[t])}this.jrpc=e,e.toStream=function(e){t.send(e)},t.onmessage=function(t){e.messageHandler(t.data)},t.onerror=function(e){console.error("Error: "+e.message)},window.beforeunload=this.leaving;var n=this.$refs.parameters;t.onopen=function(){console.log("Connected to WebSocket!"),s("telemetry.battery_volt",(function(e){n.battery=e})),s("telemetry.speed",(function(e){n.speed=e}))}},methods:{moveRobot:function(e,t){this.jrpc&&(this.jrpc.call("set_x",[e]),this.jrpc.call("set_y",[t]))},getTelemetry:function(){if(this.jrpc)return this.jrpc.call("get_telemetry")},unsubscribe:function(e){if(this.jrpc)return this.jrpc.off(e),this.jrpc.call("unsubscribe",[e])},leaving:function(){this.unsubscribe("telemetry.battery_volt"),this.unsubscribe("telemetry.speed")}},data:function(){return{jrpc:void 0}}},A=L,Y=Object(u["a"])(A,c,o,!1,null,null,null),D=Y.exports,R={name:"App",components:{Robot:D},data:function(){return{}}},I=R,X=(s("034f"),Object(u["a"])(I,i,r,!1,null,null,null)),B=X.exports;n["a"].config.productionTip=!1,n["a"].mixin({methods:{isPhone:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}}}),new n["a"]({render:function(e){return e(B)}}).$mount("#app")},"85ec":function(e,t,s){},9328:function(e,t,s){},e2e6:function(e,t,s){}});
//# sourceMappingURL=index.1a02f41f.js.map