!function(e){function t(t){for(var o,i,l=t[0],s=t[1],u=t[2],p=0,f=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(d&&d(t);f.length;)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={0:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var d=s;a.push([2,1]),n()}([,,function(e,t,n){n(7),e.exports=n(6)},,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(3),n(4);var o=n(0),r=n.n(o);var a=function(e){var t=r()('[data-block="menu"]'),n=r()("body"),o=r()("html");function a(){t.removeClass("menu_open"),t.find(".menu__item_open").removeClass("menu__item_open")}t.on("click",'[data-target="toggle"]',(function(r){t.toggleClass("menu_open"),e?o.toggleClass("overflow-hidden"):n.toggleClass("overflow-hidden"),r.preventDefault()})),t.on("click",'[data-target="child"]',(function(t){var n=r()(this).parent();(e||window.matchMedia("(max-width: 1019px)").matches)&&n.toggleClass("menu__item_open").siblings().removeClass("menu__item_open"),t.preventDefault()})),e?window.addEventListener("orientationchange",a,!1):r()(window).resize(a)},i=n(1),l=n.n(i);var s=function(e){var t=r()('[data-block="popup"]'),n=r()("body"),o=r()("html"),a=t.find('[data-form="request"]'),i=t.find('[data-block="formSend"]'),s=a.parent();new l.a("+7(999) 999-99-99").mask(document.querySelector('[name="phone"]')),n.on("click",'[data-target="formRequest"]',(function(r){t.addClass("popup_open"),e?o.addClass("overflow-hidden"):n.addClass("overflow-hidden"),r.preventDefault()})),r()('[data-target="close"]').on("click",(function(r){t.removeClass("popup_open"),i.removeClass("popup__send_active"),s.removeClass("popup__form_hide"),e?o.removeClass("overflow-hidden"):n.removeClass("overflow-hidden"),r.preventDefault()})),a.on("submit",(function(e){var t=r()(this).find("[data-required]"),n=/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/,o=!1;t.each((function(){var e=r()(this),t=e.val().trim(),a=e.siblings("[data-error]");t?e.is('[name="email"]')&&!n.test(t)&&(o=!0,a.text("Вы ввели неверный Email"),a[0].hidden=!1):(o=!0,a.text("Заполните поле"),a[0].hidden=!1)})),o||(i.addClass("popup__send_active"),s.addClass("popup__form_hide"),window.dataLayer.push({category:"corp-solutions_request",label:"corp-solutions_form",action:"form_submitiion"})),e.preventDefault()})),a.on("focus","input",(function(e){var t=r()(this),n=t.siblings("[data-error]");t.removeClass("form__field_error"),n.empty(),n[0].hidden=!0,e.preventDefault()}))};r()((function(){var e=!!navigator.userAgent.match(/iPhone|iPod|iPad|iOS|android/i);a(e),s(e)}))}]);
//# sourceMappingURL=app.a068cafb.js.map