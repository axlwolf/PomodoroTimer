!function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,r){if(1&r&&(t=e(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)e.d(n,o,function(e){return t[e]}.bind(null,o));return n},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="./",e(e.s=0)}([function(t,e,r){"use strict";var n=r(1);r(2),r(3),r(4),r(5),document.addEventListener("DOMContentLoaded",(function(){n.PomodoroTimer.init()}))},function(t,e){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(){function t(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}function e(t,e,r,n){var o=e&&e.prototype instanceof i?e:i,c=Object.create(o.prototype),u=new d(n||[]);return _(c,"_invoke",{value:f(t,r,u)}),c}function o(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}function i(){}function c(){}function u(){}function a(e){["next","throw","return"].forEach((function(r){t(e,r,(function(t){return this._invoke(r,t)}))}))}function l(t,e){function n(i,c,u,a){var l=o(t[i],t,c);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==r(s)&&b.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,u,a)}),(function(t){n("throw",t,u,a)})):e.resolve(s).then((function(t){f.value=t,u(f)}),(function(t){return n("throw",t,u,a)}))}a(l.arg)}var i;_(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function f(t,e,r){var n=S;return function(i,c){if(n===j)throw Error("Generator is already running");if(n===k){if("throw"===i)throw c;return{value:v,done:!0}}for(r.method=i,r.arg=c;;){var u=r.delegate;if(u){var a=s(u,r);if(a){if(a===P)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===S)throw n=k,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=j;var l=o(t,e,r);if("normal"===l.type){if(n=r.done?k:O,l.arg===P)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n=k,r.method="throw",r.arg=l.arg)}}}function s(t,e){var r=e.method,n=t.iterator[r];if(n===v)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=v,s(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),P;var i=o(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,P;var c=i.arg;return c?c.done?(e[t.resultName]=c.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=v),e.delegate=null,P):c:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,P)}function h(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function p(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function d(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(h,this),this.reset(!0)}function y(t){if(t||""===t){var e=t[L];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(b.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=v,e.done=!0,e};return o.next=o}}throw new TypeError(r(t)+" is not iterable")}n=function(){return m};var v,m={},g=Object.prototype,b=g.hasOwnProperty,_=Object.defineProperty||function(t,e,r){t[e]=r.value},w="function"==typeof Symbol?Symbol:{},L=w.iterator||"@@iterator",x=w.asyncIterator||"@@asyncIterator",E=w.toStringTag||"@@toStringTag";try{t({},"")}catch(x){t=function(t,e,r){return t[e]=r}}m.wrap=e;var S="suspendedStart",O="suspendedYield",j="executing",k="completed",P={},T={};t(T,L,(function(){return this}));var q=Object.getPrototypeOf,G=q&&q(q(y([])));G&&G!==g&&b.call(G,L)&&(T=G);var N=u.prototype=i.prototype=Object.create(T);return c.prototype=u,_(N,"constructor",{value:u,configurable:!0}),_(u,"constructor",{value:c,configurable:!0}),c.displayName=t(u,E,"GeneratorFunction"),m.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===c||"GeneratorFunction"===(e.displayName||e.name))},m.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,u):(e.__proto__=u,t(e,E,"GeneratorFunction")),e.prototype=Object.create(N),e},m.awrap=function(t){return{__await:t}},a(l.prototype),t(l.prototype,x,(function(){return this})),m.AsyncIterator=l,m.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var c=new l(e(t,r,n,o),i);return m.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},a(N),t(N,E,"Generator"),t(N,L,(function(){return this})),t(N,"toString",(function(){return"[object Generator]"})),m.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},m.values=y,d.prototype={constructor:d,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=v,this.done=!1,this.delegate=null,this.method="next",this.arg=v,this.tryEntries.forEach(p),!t)for(var e in this)"t"===e.charAt(0)&&b.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=v)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){function e(e,n){return i.type="throw",i.arg=t,r.next=e,n&&(r.method="next",r.arg=v),!!n}if(this.done)throw t;for(var r=this,n=this.tryEntries.length-1;0<=n;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var c=b.call(o,"catchLoc"),u=b.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var r,n=this.tryEntries.length-1;0<=n;--n)if((r=this.tryEntries[n]).tryLoc<=this.prev&&b.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,P):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),P},finish:function(t){for(var e,r=this.tryEntries.length-1;0<=r;--r)if((e=this.tryEntries[r]).finallyLoc===t)return this.complete(e.completion,e.afterLoc),p(e),P},catch:function(t){for(var e,r=this.tryEntries.length-1;0<=r;--r)if((e=this.tryEntries[r]).tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;p(e)}return o}throw Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:y(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=v),P}},m}function o(t,e,r,n,o,i,c){try{var u=t[i](c),a=u.value}catch(c){return void r(c)}u.done?e(a):Promise.resolve(a).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){function c(t){o(a,n,i,c,u,"next",t)}function u(t){o(a,n,i,c,u,"throw",t)}var a=t.apply(e,r);c(void 0)}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.PomodoroTimer=void 0;var c=function(){var t,e,r,o,c,u,a,l,f,s,h=1500,p=h,d=!1,y="focus",v=h,m=function(n){var o=function(t){return{minutes:(Math.floor(t/60)+"").padStart(2,"0"),seconds:(t%60+"").padStart(2,"0")}}(n),i=o.minutes,c=o.seconds;t.textContent=i,e.textContent=":".concat(c);var u=(v-n)/v*100;r.style.width="".concat(u,"%")},g=function(){d||(d=!0,s=setInterval((function(){p--,m(p),0>=p&&(clearInterval(s),d=!1,L(),alert("¡Tiempo de ".concat(y," completado!")))}),1e3))},b=function(){clearInterval(s),d=!1},_=function(){b(),m(p=v),r.style.width="0%"},w=function(t,e){b(),y=t,v=e,p=e,m(e),r.style.width="0%"},L=function(){console.log("¡Ding! Tiempo completado")};return{init:function(){var s=i(n().mark((function i(){return n().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log("Pomodoro Timer Initialized"),t=document.querySelector(".pomodoro-timer__timer__time__minutes"),e=document.querySelector(".pomodoro-timer__timer__time__seconds"),r=document.querySelector(".pomodoro-timer__timer__progress__bar"),o=document.querySelector(".action-buttons__button--start"),c=document.querySelector(".action-buttons__button--stop"),u=document.querySelector(".action-buttons__button--reset"),a=document.querySelector(".action-buttons__button--shortbraek"),l=document.querySelector(".action-buttons__button--focus"),f=document.querySelector(".action-buttons__button--longbreak"),o.addEventListener("click",g),c.addEventListener("click",b),u.addEventListener("click",_),a.addEventListener("click",(function(){return w("short break",300)})),l.addEventListener("click",(function(){return w("focus",h)})),f.addEventListener("click",(function(){return w("long break",900)})),m(p);case 12:case"end":return n.stop()}}),i,this)})));return function(){return s.apply(this,arguments)}}()}}();e.PomodoroTimer=c},function(){},function(){},function(){},function(){}]);
//# sourceMappingURL=app.js.map