(function(a){function b(b){for(var d,e,h=b[0],j=b[1],k=b[2],l=0,m=[];l<h.length;l++)e=h[l],Object.prototype.hasOwnProperty.call(f,e)&&f[e]&&m.push(f[e][0]),f[e]=0;for(d in j)Object.prototype.hasOwnProperty.call(j,d)&&(a[d]=j[d]);for(i&&i(b);m.length;)m.shift()();return g.push.apply(g,k||[]),c()}function c(){for(var a,b=0;b<g.length;b++){for(var c,e=g[b],h=!0,i=1;i<e.length;i++)c=e[i],0!==f[c]&&(h=!1);h&&(g.splice(b--,1),a=d(d.s=e[0]))}return a}function d(b){if(e[b])return e[b].exports;var c=e[b]={i:b,l:!1,exports:{}};return a[b].call(c.exports,c,c.exports,d),c.l=!0,c.exports}var e={},f={1:0},g=[];d.m=a,d.c=e,d.d=function(a,b,c){d.o(a,b)||Object.defineProperty(a,b,{enumerable:!0,get:c})},d.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},d.t=function(a,b){if(1&b&&(a=d(a)),8&b)return a;if(4&b&&'object'==typeof a&&a&&a.__esModule)return a;var c=Object.create(null);if(d.r(c),Object.defineProperty(c,'default',{enumerable:!0,value:a}),2&b&&'string'!=typeof a)for(var e in a)d.d(c,e,function(b){return a[b]}.bind(null,e));return c},d.n=function(a){var b=a&&a.__esModule?function(){return a['default']}:function(){return a};return d.d(b,'a',b),b},d.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},d.p='';var h=window.webpackJsonp=window.webpackJsonp||[],j=h.push.bind(h);h.push=b,h=h.slice();for(var k=0;k<h.length;k++)b(h[k]);var i=j;return g.push([18,0]),c()})({18:function(a,b,c){'use strict';var d=c(1),e=c(3),f=d(c(2)),g=d(c(4)),h=d(c(5)),i=c(0);e.gsap.registerPlugin();var j={loadLogo:function(){document.getElementById('current_year').textContent=new Date().getFullYear();var a=new e.TimelineMax({delay:.5});a.set('.invisible',{visibility:'visible'}).from('.g-logo',.5,{scaleY:0,transformOrigin:'center',ease:'power1.Out'},'index').to('.g-logo',.5,{width:70,ease:'power1.Out'},'index+=0.6').to('.g-reverse',.3,{clip:'rect(0px 45px 45px 0px)',ease:'power1.Out'},'-=0.3').to('.g-logo',.4,{clip:'rect(0px 70px 70px 70px)',ease:'power1.Out'}).to('.g-yellow',.3,{clip:'rect(0px 45px 45px 0px)',ease:'power1.Out'},'-=0.3').to('.no-g',3,{autoAlpha:1,ease:e.Linear.easeNone},'-=0.2').from('.separatorline',.75,{width:0,ease:'power1.Out'},'-=2.5').staggerFrom('.intro-contact-details p.add-copy',.5,{y:10,autoAlpha:0,ease:'power1.In'},.5,'-=2.0').from('.social',.5,{y:10,autoAlpha:0,ease:'power1.In'},'-=1.0').from('.intro-contact-details p.intro-copy',.5,{y:10,autoAlpha:0,onComplete:this.slideDown.bind(this),ease:'power3.In'},'-=0.75')},slideDown:function(){var a=g['default'],b=document.querySelector('.front-page-footer').getBoundingClientRect().top,c=document.querySelector('.intro-video').getBoundingClientRect().height-b;if(a.checkHasClass(f['default'].wrapper,f['default'].slidedUpContentClass)){var d=new e.TimelineMax;d.to(f['default'].wrapper,.75,{y:-c,ease:'power1.out'},'index').to([f['default'].introContent,'.landing-logo','.no-g'],.5,{autoAlpha:0,ease:'power1.out'},'-=0.1').from(f['default'].logo_menu_frontpage,.5,{y:-40,ease:'power1.out'},'-=0.75').to(f['default'].footerContent,.5,{autoAlpha:1,ease:'power1.out'},'+=0.1')}},setContentSlideTop:function(){var a=document.querySelector('.front-page-footer').getBoundingClientRect().top;i.TweenMax.to(f['default'].wrapper,.75,{top:a,ease:'power1.out'},'index')},getVideoURL:function(a){var b=a.split('|');return b},getFormat:function(a){var b=a.split('.')[2];return b}};window.addEventListener('load',function(){var a=document.getElementById('homeVideo');if(a){if(0===a.children.length){var b=a.getAttribute('data-vid-src'),c=j.getVideoURL(b),d='';c.forEach(function(a){var b=j.getFormat(a);d+='mp4'==b?'<source src="'+a+'" type="video/mp4">':'webm'==b?'<source src="'+a+'" type="video/webm">':'<source src="'+a+'" type="video/ogg">'}),a.innerHTML=d}a.play()}var e=document.getElementById('landing-logo');e&&j.loadLogo()}),window.addEventListener('resize',function(){j.setContentSlideTop()})},2:function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b['default']=void 0;var c={menubtn:document.querySelector('.slide'),slideMenuBtn:document.querySelector('.slide_menu'),menu:document.getElementById('menu'),wrapper:document.querySelector('.content'),slidedUpContentClass:'front-page-slide-up',introContent:'.intro-content',footerContent:'.front-page-footer',footerContentContact:'.contact-details',logo_menu_frontpage:'.front-page-slide-up .logo-wrap',nav_item:'#menu .nav-item',front_page_image:document.querySelector('.front-page-main-copy img'),homeVideo:document.getElementById('homeVideo'),copyrightyear:document.getElementById('current_year'),view_member_link:document.querySelectorAll('.view-member-info'),team_tile:document.querySelectorAll('.view-member-info'),anim_onLoad:document.querySelector('div.pageanimonload'),innerpage_footer:document.querySelector('div.innerpage-footer'),onscroll_elements:document.querySelectorAll('.animateToTop,.box,.team-list-item,.work-sec'),work_section:document.querySelectorAll('.worksecAnim')};b['default']=c},4:function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b['default']=void 0;b['default']={checkHasClass:function(a,b){var c=!!a.classList.contains(b);return c},findWinWidth:function(){return window.innerWidth},findWinHeight:function(){return'undefined'==typeof window.outerHeight?window.innerHeight:Math.min(window.outerHeight,window.innerHeight)}}},5:function(a,b,c){'use strict';var d=c(1);Object.defineProperty(b,'__esModule',{value:!0}),b['default']=void 0;var e=c(3),f=d(c(2)),g=d(c(4));e.gsap.registerPlugin();var h={getUrl:function(){return window.location.href},setMenuMargin:function(){var a=document.getElementById('menu'),b=f['default'].front_page_image.offsetTop;console.log(a.children[1],b),a.children[1].style.marginTop=b},findMenuWidth:function(){var a=g['default'].findWinWidth();return 400<a?400:a},findContentSlideDistance:function(){var a=g['default'].findWinHeight(),b=$(f['default'].footerContent).height();return a-b},slideMenu:function(){f['default'].menu.classList.add('show');var a=new e.TimelineMax;console.log('hi');var b=this.findMenuWidth();a.to(f['default'].menu,.5,{left:-b,ease:e.Linear.easeNone},'start').to(f['default'].wrapper,.3,{x:b,ease:e.Linear.easeNone}).staggerTo(f['default'].nav_item,.5,{x:0,autoAlpha:1,ease:e.Linear.easeNone},.15,'-=1.0').from('.closeMenu',.5,{autoAlpha:0},'+=0.3'),document.querySelector('.closeMenu').addEventListener('click',function(){var a=document.querySelector('.slide_menu');h.hideMenu(),a.classList.remove('open')})},hideMenu:function(){f['default'].menu.classList.remove('show');var a=new e.TimelineMax,b=this.findMenuWidth();a.to(f['default'].menu,.25,{left:-b,ease:e.Linear.easeNone}).to(f['default'].nav_item,.25,{x:-50,autoAlpha:0},'-=0.3').to(f['default'].wrapper,.25,{x:0,ease:e.Linear.easeNone})},alignMenu:function(){var a=this;a.setMenuMargin()},setMenu:function(){var a=[];a['index.html']='',a['works.html']='',a['team.html']='',a['clients.html']='',a['about.html']='',a['contact.html']='';var b=f['default'].menu,c=this.getUrl(),d=c.split('/'),e=d.length,g=d[e-1];'index.html'==g?a['index.html']='active':'works.html'==g?a['works.html']='active':'team.html'==g?a['team.html']='active':'clients.html'==g?a['clients.html']='active':'about.html'==g?a['about.html']='active':'contact.html'==g&&(a['contact.html']='active');var h='\n        <ul class="menuListCont">\n             <li class="nav-item '.concat(a['works.html'],'">\n                 <a href="works.html"> Our work</a>\n             </li>\n             <li class="nav-item ').concat(a['clients.html'],'">\n                <a href="clients.html"> clients</a>\n              </li>\n              <li class="nav-item ').concat(a['team.html'],'">\n                <a href="team.html"> Our people</a>\n              </li>\n              <li class="nav-item ').concat(a['about.html'],'">\n                <a href="about.html">About</a>\n              </li>\n              <li class="nav-item ').concat(a['contact.html'],'">\n                <a href="contact.html"> Contact</a>\n              </li>\n            </ul>\n           \n        ');b.innerHTML+=h},setFooter:function(){var a=document.querySelector('.innerpage-footer');if(a){a.innerHTML+='\n         <div class="social-icons">\n                        <ul>\n                           <li><a href="https://www.instagram.com/andoncreativedesign/" target="_blank">insta</a></li>\n                            <li><a href="https://www.behance.net/andoncreative" target="_blank">be</a></li>\n                            <li><a href="https://vimeo.com/andoncreativedesign" target="_blank">vm</a></li>\n                            <li><a href="https://www.linkedin.com/company/andon-creative-design/" target="_blank">ln</a></li>\n                        </ul>\n                        \n                    </div>\n                        <p class="innerpage-copyright">\n                        \xA9 <span id="current_year"></span> The Andon Group. All rights reserved.\n                       </p>\n        ',document.getElementById('current_year').textContent=new Date().getFullYear()}}};b['default']=h}});