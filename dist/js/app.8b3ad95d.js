!function(e){function n(n){for(var o,i,s=n[0],l=n[1],u=n[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(d&&d(n);f.length;)f.shift()();return a.push.apply(a,u||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],o=!0,s=1;s<t.length;s++){var l=t[s];0!==r[l]&&(o=!1)}o&&(a.splice(n--,1),e=i(i.s=t[0]))}return e}var o={},r={0:0},a=[];function i(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=o,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)i.d(t,o,function(n){return e[n]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var u=0;u<s.length;u++)n(s[u]);var d=l;a.push([2,1]),t()}([,,function(e,n,t){t(7),e.exports=t(6)},,,,function(e,n,t){},function(e,n,t){"use strict";t.r(n);t(3),t(4);var o=t(0),r=t.n(o);var a=function(e){var n=r()('[data-block="menu"]'),t=r()("body"),o=r()("html");function a(){n.removeClass("menu_open"),n.find(".menu__item_open").removeClass("menu__item_open")}n.on("click",'[data-target="toggle"]',(function(r){n.toggleClass("menu_open"),e?o.toggleClass("overflow-hidden"):t.toggleClass("overflow-hidden"),r.preventDefault()})),r()("body").on("click",(function(e){var n=r()(e.target).parent();r()(e.target).closest("menu__item").length?(n.addClass("menu__item_open"),n.siblings().removeClass("menu__item_open")):r()(".menu__item").removeClass("menu__item_open")})),e?window.addEventListener("orientationchange",a,!1):r()(window).resize(a)},i=t(1),s=t.n(i);var l=function(e){var n=r()('[data-block="popup"]'),t=r()("body"),o=r()("html"),a=n.find('[data-form="request"]'),i=n.find('[data-block="formSend"]'),l=a.parent();new s.a("+7(999) 999-99-99").mask(document.querySelector('[name="phone"]')),t.on("click",'[data-target="formRequest"]',(function(r){n.addClass("popup_open"),e?o.addClass("overflow-hidden"):t.addClass("overflow-hidden"),r.preventDefault()})),r()('[data-target="close"]').on("click",(function(r){n.removeClass("popup_open"),i.removeClass("popup__send_active"),l.removeClass("popup__form_hide"),e?o.removeClass("overflow-hidden"):t.removeClass("overflow-hidden"),r.preventDefault()})),a.on("submit",(function(e){var n=r()(this).find("[data-required]"),t=/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,o=!1;n.each((function(){var e=r()(this),n=e.val().trim(),a=e.siblings("[data-error]");n?e.is('[name="email"]')&&!t.test(n)&&(o=!0,a.text("Вы ввели неверный Email"),a[0].hidden=!1):(o=!0,a.text("Заполните поле"),a[0].hidden=!1)})),o||(i.addClass("popup__send_active"),l.addClass("popup__form_hide"),window.dataLayer.push({category:"corp-solutions_request",label:"corp-solutions_form",action:"form_submitiion"})),e.preventDefault()})),a.on("focus","input",(function(e){var n=r()(this),t=n.siblings("[data-error]");n.removeClass("form__field_error"),t.empty(),t[0].hidden=!0,e.preventDefault()}))};r()((function(){var e=!!navigator.userAgent.match(/iPhone|iPod|iPad|iOS|android/i);a(e),l(e)}))}]);
//# sourceMappingURL=app.8b3ad95d.js.map