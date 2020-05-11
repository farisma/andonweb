/*! For license information please see home.bundle.js.LICENSE */
!function(u){function e(e){for(var n,t,o=e[0],a=e[1],r=e[2],i=0,s=[];i<o.length;i++)t=o[i],Object.prototype.hasOwnProperty.call(c,t)&&c[t]&&s.push(c[t][0]),c[t]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(u[n]=a[n]);for(p&&p(e);s.length;)s.shift()();return d.push.apply(d,r||[]),l()}function l(){for(var e,n=0;n<d.length;n++){for(var t=d[n],o=!0,a=1;a<t.length;a++){var r=t[a];0!==c[r]&&(o=!1)}o&&(d.splice(n--,1),e=i(i.s=t[0]))}return e}var t={},c={1:0,3:0},d=[];function i(e){if(t[e])return t[e].exports;var n=t[e]={i:e,l:!1,exports:{}};return u[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=u,i.c=t,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(n,e){if(1&e&&(n=i(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)i.d(t,o,function(e){return n[e]}.bind(null,o));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="";var n=window.webpackJsonp=window.webpackJsonp||[],o=n.push.bind(n);n.push=e,n=n.slice();for(var a=0;a<n.length;a++)e(n[a]);var p=o;d.push([9,0]),l()}([,function(e,t,n){"use strict";(function(e){var n={menubtn:e(".slide"),slideMenuBtn:e(".slide_menu"),menu:e("#menu"),wrapper:e(".content"),slidedUpContentClass:"front-page-slide-up",introContent:".intro-content",footerContent:".front-page-footer",footerContentContact:".contact-details",logo_menu_frontpage:".front-page-slide-up .logo-wrap",nav_item:"#menu .nav-item",front_page_image:e(".front-page-main-copy img"),homeVideo:e("#homeVideo"),copyrightyear:document.getElementById("current_year")};t.a=n}).call(this,n(2))},,function(e,t,o){"use strict";(function(e){o(2);var n={checkHasClass:function(e,n){return!!e.hasClass(n)},findWinWidth:function(){return e(document).width()},findWinHeight:function(){return console.log(window.outerHeight+"outerH"),console.log(e(window).height()+"windowH"),void 0!==window.outerHeight?Math.min(window.outerHeight,e(window).height()):e(window).height()}};t.a=n}).call(this,o(2))},function(e,i,s){"use strict";s.r(i),function(n){s(2);var e=s(5),t=s(0),o=s(1),a=s(3);e.a.registerPlugin();var r={setMenuMargin:function(){var e=n(o.a.front_page_image).offset().top;o.a.menu.find("ul").css("margin-top",e),console.log(e)},findMenuWidth:function(){var e=a.a.findWinWidth();return 400<e?400:e},findContentSlideDistance:function(){return a.a.findWinHeight()-n(o.a.footerContent).height()},slideMenu:function(){o.a.menu.addClass("show");var e=new t.d;console.log("hi");var n=this.findMenuWidth();e.to(o.a.menu,.5,{left:-n,ease:t.b.easeNone},"start").to(o.a.wrapper,.3,{x:n,ease:t.b.easeNone}).staggerTo(o.a.nav_item,.5,{x:0,autoAlpha:1,ease:t.b.easeNone},.15,"-=1.0").from(".closeMenu",.5,{autoAlpha:0},"+=0.3")},hideMenu:function(){o.a.menu.removeClass("show");var e=new t.d,n=this.findMenuWidth();e.to(o.a.menu,.25,{left:-n,ease:t.b.easeNone}).to(o.a.nav_item,.25,{x:-50,autoAlpha:0},"-=0.3").to(o.a.wrapper,.25,{x:0,ease:t.b.easeNone})},alignMenu:function(){this.setMenuMargin()}};i.default=r}.call(this,s(2))},,,,,function(e,n,s){"use strict";s.r(n),function(e){s(2);var n=s(5),t=s(0),o=s(1),a=s(3),r=s(4);n.a.registerPlugin();var i={loadLogo:function(){new t.d({delay:.5}).from(".g-logo",.5,{scaleY:0,transformOrigin:"center",ease:t.b.easeNone},"index").to(".g-logo",.5,{width:70,ease:t.b.easeNone},"index+=0.6").to(".g-reverse",.3,{clip:"rect(0px 45px 45px 0px)",ease:t.b.easeNone},"-=0.3").to(".g-logo",.4,{clip:"rect(0px 70px 70px 70px)",ease:t.b.easeNone}).to(".g-yellow",.3,{clip:"rect(0px 45px 45px 0px)",ease:t.b.easeNone},"-=0.3").to(".no-g",3,{autoAlpha:1,ease:t.b.easeNone},"-=0.2").from(".separatorline",.75,{width:0,ease:t.b.easeNone},"-=2.5").staggerFrom(".intro-contact-details p.add-copy",1,{y:10,autoAlpha:0,ease:t.b.easeNone},.5,"-=1.5").from(".social",.5,{y:10,autoAlpha:0,ease:t.b.easeNone},"-=.5").from(".intro-contact-details p.intro-copy",.5,{y:10,autoAlpha:0,onComplete:this.slideDown.bind(this),ease:t.b.easeNone},"-=.25")},slideDown:function(){a.a.checkHasClass(o.a.wrapper,o.a.slidedUpContentClass)&&(new t.d).to(o.a.wrapper,.75,{y:-120,ease:t.b.easeNone},"index").to([o.a.introContent,".landing-logo",".no-g"],.5,{autoAlpha:0,ease:t.b.easeNone},"-=0.1").to(o.a.logo_menu_frontpage,.5,{y:120,ease:t.b.easeNone},"-=0.75").to(o.a.footerContent,.5,{autoAlpha:1,ease:t.b.easeNone,onComplete:r.default.alignMenu.bind(r.default)},"+=0.1")},getVideoURL:function(e){return e.split("|")},getFormat:function(e){return e.split(".")[1]}};e(window).on("load",function(){if(document.getElementById("homeVideo")){if(0==o.a.homeVideo.children().length){var e=o.a.homeVideo.data("vid-src"),n=i.getVideoURL(e),t="";n.forEach(function(e){var n=i.getFormat(e);t+="mp4"==n?'<source src="'+e+'" type="video/mp4">':"webm"==n?'<source src="'+e+'" type="video/webm">':'<source src="'+e+'" type="video/ogg">'}),o.a.homeVideo.html(""),o.a.homeVideo.append(t)}o.a.homeVideo.trigger("play")}document.getElementById("landing-logo")&&i.loadLogo()})}.call(this,s(2))}]);