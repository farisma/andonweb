/*! For license information please see menu.bundle.js.LICENSE */
!function(l){function e(e){for(var n,t,o=e[0],r=e[1],i=e[2],a=0,u=[];a<o.length;a++)t=o[a],Object.prototype.hasOwnProperty.call(f,t)&&f[t]&&u.push(f[t][0]),f[t]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(l[n]=r[n]);for(d&&d(e);u.length;)u.shift()();return c.push.apply(c,i||[]),s()}function s(){for(var e,n=0;n<c.length;n++){for(var t=c[n],o=!0,r=1;r<t.length;r++){var i=t[r];0!==f[i]&&(o=!1)}o&&(c.splice(n--,1),e=a(a.s=t[0]))}return e}var t={},f={3:0},c=[];function a(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return l[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=l,a.c=t,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)a.d(t,o,function(e){return n[e]}.bind(null,o));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var n=window.webpackJsonp=window.webpackJsonp||[],o=n.push.bind(n);n.push=e,n=n.slice();for(var r=0;r<n.length;r++)e(n[r]);var d=o;c.push([4,0]),s()}([,function(e,t,n){"use strict";(function(e){var n={menubtn:e(".slide"),slideMenuBtn:e(".slide_menu"),menu:e("#menu"),wrapper:e(".content"),slidedUpContentClass:"front-page-slide-up",introContent:".intro-content",footerContent:".front-page-footer",footerContentContact:".contact-details",logo_menu_frontpage:".front-page-slide-up .logo-wrap",nav_item:"#menu .nav-item",front_page_image:e(".front-page-main-copy img"),homeVideo:e("#homeVideo"),copyrightyear:document.getElementById("current_year"),view_member_link:document.querySelectorAll(".view-member-info"),team_tile:document.querySelectorAll(".view-member-info")};t.a=n}).call(this,n(2))},,function(e,t,o){"use strict";(function(e){o(2);var n={checkHasClass:function(e,n){return!!e.hasClass(n)},findWinWidth:function(){return e(document).width()},findWinHeight:function(){return console.log(window.outerHeight+"outerH"),console.log(e(window).height()+"windowH"),void 0!==window.outerHeight?Math.min(window.outerHeight,e(window).height()):e(window).height()}};t.a=n}).call(this,o(2))},function(e,a,u){"use strict";u.r(a),function(n){u(2);var e=u(5),t=u(0),o=u(1),r=u(3);e.a.registerPlugin();var i={setMenuMargin:function(){var e=n(o.a.front_page_image).offset().top;o.a.menu.find("ul").css("margin-top",e),console.log(e)},findMenuWidth:function(){var e=r.a.findWinWidth();return 400<e?400:e},findContentSlideDistance:function(){return r.a.findWinHeight()-n(o.a.footerContent).height()},slideMenu:function(){o.a.menu.addClass("show");var e=new t.d;console.log("hi");var n=this.findMenuWidth();e.to(o.a.menu,.5,{left:-n,ease:t.b.easeNone},"start").to(o.a.wrapper,.3,{x:n,ease:t.b.easeNone}).staggerTo(o.a.nav_item,.5,{x:0,autoAlpha:1,ease:t.b.easeNone},.15,"-=1.0").from(".closeMenu",.5,{autoAlpha:0},"+=0.3")},hideMenu:function(){o.a.menu.removeClass("show");var e=new t.d,n=this.findMenuWidth();e.to(o.a.menu,.25,{left:-n,ease:t.b.easeNone}).to(o.a.nav_item,.25,{x:-50,autoAlpha:0},"-=0.3").to(o.a.wrapper,.25,{x:0,ease:t.b.easeNone})},alignMenu:function(){this.setMenuMargin()}};a.default=i}.call(this,u(2))}]);