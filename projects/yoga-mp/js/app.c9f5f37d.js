!function(e){function n(n){for(var o,l,a=n[0],c=n[1],s=n[2],d=0,f=[];d<a.length;d++)l=a[d],Object.prototype.hasOwnProperty.call(i,l)&&i[l]&&f.push(i[l][0]),i[l]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);for(u&&u(n);f.length;)f.shift()();return r.push.apply(r,s||[]),t()}function t(){for(var e,n=0;n<r.length;n++){for(var t=r[n],o=!0,a=1;a<t.length;a++){var c=t[a];0!==i[c]&&(o=!1)}o&&(r.splice(n--,1),e=l(l.s=t[0]))}return e}var o={},i={0:0},r=[];function l(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,l),t.l=!0,t.exports}l.m=e,l.c=o,l.d=function(e,n,t){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)l.d(t,o,function(n){return e[n]}.bind(null,o));return t},l.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="";var a=window.webpackJsonp=window.webpackJsonp||[],c=a.push.bind(a);a.push=n,a=a.slice();for(var s=0;s<a.length;s++)n(a[s]);var u=c;r.push([34,1]),t()}({34:function(e,n,t){"use strict";t.r(n);t(35),t(53),t(32),t(62),t(70);var o,i=t(33);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var l=new(t.n(i).a)("#myFullpage",(r(o={navigation:!1,anchors:["slide1","slide2","slide3","slide4","slide5","slide6","slide7"],menu:"#myMenu",animateAnchor:!0,css3:!0,scrollingSpeed:900,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,scrollBar:!0,easing:"easeInOutCubic",responsiveWidth:1e3},"scrollingSpeed",700),r(o,"licenseKey","D6F497E5-E43C4DCE-8A82AAA1-F8920E80"),o));function a(e,n,t){var o=new Date;o.setTime(o.getTime()+24*t*60*60*1e3);var i="expires="+o.toUTCString();document.cookie=e+"="+n+";"+i+";path=/"}function c(e){for(var n=e+"=",t=document.cookie.split(";"),o=0;o<t.length;o++){for(var i=t[o];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(n))return i.substring(n.length,i.length)}return""}function s(e){e.preventDefault(),a("checked","true",365),document.getElementById("cookienotification").style.display="none"}$(".collapse").on("show.bs.collapse",(function(){$(".collapse.show").each((function(){$(this).collapse("hide")}))})),$(".scroll__button").click((function(){l.moveSectionDown()})),function(){document.getElementById("closeCookies").addEventListener("click",s);var e=c("visited"),n=c("checked");"true"==e&&"true"==n?document.getElementById("cookienotification").style.display="none":(document.getElementById("cookienotification").style.display="block",a("visited","true",365))}(),$(".nav__item").on("click",(function(){$(".navbar-collapse").collapse("hide")})),$(".faq-question").on("click",(function(){$(".faq-question").removeClass("active-question"),$(".faq-answer").removeClass("show").addClass("hide"),$("#faq-person").hide();var e=event.target.id;$(this).addClass("active-question");var n=e.slice(-1);$(".faq-answer[id$="+n+"]").removeClass("hide").addClass("show")}))},70:function(e,n,t){}});
//# sourceMappingURL=app.c9f5f37d.js.map