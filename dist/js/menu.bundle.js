(function(a){function b(b){for(var d,e,h=b[0],j=b[1],k=b[2],l=0,m=[];l<h.length;l++)e=h[l],Object.prototype.hasOwnProperty.call(f,e)&&f[e]&&m.push(f[e][0]),f[e]=0;for(d in j)Object.prototype.hasOwnProperty.call(j,d)&&(a[d]=j[d]);for(i&&i(b);m.length;)m.shift()();return g.push.apply(g,k||[]),c()}function c(){for(var a,b=0;b<g.length;b++){for(var c,e=g[b],h=!0,i=1;i<e.length;i++)c=e[i],0!==f[c]&&(h=!1);h&&(g.splice(b--,1),a=d(d.s=e[0]))}return a}function d(b){if(e[b])return e[b].exports;var c=e[b]={i:b,l:!1,exports:{}};return a[b].call(c.exports,c,c.exports,d),c.l=!0,c.exports}var e={},f={4:0},g=[];d.m=a,d.c=e,d.d=function(a,b,c){d.o(a,b)||Object.defineProperty(a,b,{enumerable:!0,get:c})},d.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},d.t=function(a,b){if(1&b&&(a=d(a)),8&b)return a;if(4&b&&'object'==typeof a&&a&&a.__esModule)return a;var c=Object.create(null);if(d.r(c),Object.defineProperty(c,'default',{enumerable:!0,value:a}),2&b&&'string'!=typeof a)for(var e in a)d.d(c,e,function(b){return a[b]}.bind(null,e));return c},d.n=function(a){var b=a&&a.__esModule?function(){return a['default']}:function(){return a};return d.d(b,'a',b),b},d.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},d.p='';var h=window.webpackJsonp=window.webpackJsonp||[],j=h.push.bind(h);h.push=b,h=h.slice();for(var k=0;k<h.length;k++)b(h[k]);var i=j;return g.push([4,0]),c()})([,function(a,b,c){'use strict';(function(a){Object.defineProperty(b,'__esModule',{value:!0});var c={menubtn:a('.slide'),slideMenuBtn:a('.slide_menu'),menu:a('#menu'),wrapper:a('.content'),slidedUpContentClass:'front-page-slide-up',introContent:'.intro-content',footerContent:'.front-page-footer',footerContentContact:'.contact-details',logo_menu_frontpage:'.front-page-slide-up .logo-wrap',nav_item:'#menu .nav-item',front_page_image:a('.front-page-main-copy img'),homeVideo:a('#homeVideo'),copyrightyear:document.getElementById('current_year'),view_member_link:document.querySelectorAll('.view-member-info'),team_tile:document.querySelectorAll('.view-member-info'),anim_onLoad:document.querySelector('div.pageanimonload'),innerpage_footer:document.querySelector('div.innerpage-footer'),onscroll_elements:document.querySelectorAll('.animateToTop,.box,.team-list-item'),work_section:document.querySelectorAll('.worksecAnim')};b.default=c}).call(this,c(0))},,function(a,b,c){'use strict';(function(a){Object.defineProperty(b,'__esModule',{value:!0}),c(0);b.default={checkHasClass:function(a,b){var c=!!a.hasClass(b);return c},findWinWidth:function(){return a(document).width()},findWinHeight:function(){return console.log(window.outerHeight+'outerH'),console.log(a(window).height()+'windowH'),'undefined'==typeof window.outerHeight?a(window).height():Math.min(window.outerHeight,a(window).height())}}}).call(this,c(0))},function(a,b,c){'use strict';(function(a){function d(a){return a&&a.__esModule?a:{default:a}}Object.defineProperty(b,'__esModule',{value:!0}),c(0);var e=c(2),f=c(1),g=d(f),h=c(3),i=d(h);e.gsap.registerPlugin();b.default={setMenuMargin:function(){var b=a(g.default.front_page_image).offset().top;g.default.menu.find('ul').css('margin-top',b),console.log(b)},findMenuWidth:function(){var a=i.default.findWinWidth();return 400<a?400:a},findContentSlideDistance:function(){var b=i.default.findWinHeight(),c=a(g.default.footerContent).height();return b-c},slideMenu:function(){g.default.menu.addClass('show');var a=new e.TimelineMax;console.log('hi');var b=this.findMenuWidth();a.to(g.default.menu,.5,{left:-b,ease:e.Linear.easeNone},'start').to(g.default.wrapper,.3,{x:b,ease:e.Linear.easeNone}).staggerTo(g.default.nav_item,.5,{x:0,autoAlpha:1,ease:e.Linear.easeNone},.15,'-=1.0').from('.closeMenu',.5,{autoAlpha:0},'+=0.3')},hideMenu:function(){g.default.menu.removeClass('show');var a=new e.TimelineMax,b=this.findMenuWidth();a.to(g.default.menu,.25,{left:-b,ease:e.Linear.easeNone}).to(g.default.nav_item,.25,{x:-50,autoAlpha:0},'-=0.3').to(g.default.wrapper,.25,{x:0,ease:e.Linear.easeNone})},alignMenu:function(){var a=this;a.setMenuMargin()}}}).call(this,c(0))}]);