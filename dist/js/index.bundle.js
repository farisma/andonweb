(function(a){function b(b){for(var d,e,h=b[0],j=b[1],k=b[2],l=0,m=[];l<h.length;l++)e=h[l],Object.prototype.hasOwnProperty.call(f,e)&&f[e]&&m.push(f[e][0]),f[e]=0;for(d in j)Object.prototype.hasOwnProperty.call(j,d)&&(a[d]=j[d]);for(i&&i(b);m.length;)m.shift()();return g.push.apply(g,k||[]),c()}function c(){for(var a,b=0;b<g.length;b++){for(var c,e=g[b],h=!0,i=1;i<e.length;i++)c=e[i],0!==f[c]&&(h=!1);h&&(g.splice(b--,1),a=d(d.s=e[0]))}return a}function d(b){if(e[b])return e[b].exports;var c=e[b]={i:b,l:!1,exports:{}};return a[b].call(c.exports,c,c.exports,d),c.l=!0,c.exports}var e={},f={2:0},g=[];d.m=a,d.c=e,d.d=function(a,b,c){d.o(a,b)||Object.defineProperty(a,b,{enumerable:!0,get:c})},d.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},d.t=function(a,b){if(1&b&&(a=d(a)),8&b)return a;if(4&b&&'object'==typeof a&&a&&a.__esModule)return a;var c=Object.create(null);if(d.r(c),Object.defineProperty(c,'default',{enumerable:!0,value:a}),2&b&&'string'!=typeof a)for(var e in a)d.d(c,e,function(b){return a[b]}.bind(null,e));return c},d.n=function(a){var b=a&&a.__esModule?function(){return a['default']}:function(){return a};return d.d(b,'a',b),b},d.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},d.p='';var h=window.webpackJsonp=window.webpackJsonp||[],j=h.push.bind(h);h.push=b,h=h.slice();for(var k=0;k<h.length;k++)b(h[k]);var i=j;return g.push([7,0]),c()})([,function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b['default']=void 0;var c={menubtn:document.querySelector('.slide'),slideMenuBtn:document.querySelector('.slide_menu'),menu:document.getElementById('menu'),wrapper:document.querySelector('.content'),slidedUpContentClass:'front-page-slide-up',introContent:'.intro-content',footerContent:'.front-page-footer',footerContentContact:'.contact-details',logo_menu_frontpage:'.front-page-slide-up .logo-wrap',nav_item:'#menu .nav-item',front_page_image:document.querySelector('.front-page-main-copy img'),homeVideo:document.getElementById('homeVideo'),copyrightyear:document.getElementById('current_year'),view_member_link:document.querySelectorAll('.view-member-info'),team_tile:document.querySelectorAll('.view-member-info'),anim_onLoad:document.querySelector('div.pageanimonload'),innerpage_footer:document.querySelector('div.innerpage-footer'),onscroll_elements:document.querySelectorAll('.animateToTop,.box,.team-list-item,.work-sec'),work_section:document.querySelectorAll('.worksecAnim')};b['default']=c},,function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0}),b['default']=void 0;b['default']={checkHasClass:function(a,b){var c=!!a.classList.contains(b);return c},findWinWidth:function(){return window.innerWidth},findWinHeight:function(){return'undefined'==typeof window.outerHeight?window.innerHeight:Math.min(window.outerHeight,window.innerHeight)}}},function(a,b,c){'use strict';var d=c(0);Object.defineProperty(b,'__esModule',{value:!0}),b['default']=void 0;var e=c(2),f=d(c(1)),g=d(c(3));e.gsap.registerPlugin();var h={getUrl:function(){return window.location.href},setMenuMargin:function(){var a=document.getElementById('menu'),b=f['default'].front_page_image.offsetTop;console.log(a.children[1],b),a.children[1].style.marginTop=b},findMenuWidth:function(){var a=g['default'].findWinWidth();return 400<a?400:a},findContentSlideDistance:function(){var a=g['default'].findWinHeight(),b=$(f['default'].footerContent).height();return a-b},slideMenu:function(){f['default'].menu.classList.add('show');var a=new e.TimelineMax;console.log('hi');var b=this.findMenuWidth();a.to(f['default'].menu,.5,{left:-b,ease:e.Linear.easeNone},'start').to(f['default'].wrapper,.3,{x:b,ease:e.Linear.easeNone}).staggerTo(f['default'].nav_item,.5,{x:0,autoAlpha:1,ease:e.Linear.easeNone},.15,'-=1.0').from('.closeMenu',.5,{autoAlpha:0},'+=0.3'),document.querySelector('.closeMenu').addEventListener('click',function(){var a=document.querySelector('.slide_menu');h.hideMenu(),a.classList.remove('open')})},hideMenu:function(){f['default'].menu.classList.remove('show');var a=new e.TimelineMax,b=this.findMenuWidth();a.to(f['default'].menu,.25,{left:-b,ease:e.Linear.easeNone}).to(f['default'].nav_item,.25,{x:-50,autoAlpha:0},'-=0.3').to(f['default'].wrapper,.25,{x:0,ease:e.Linear.easeNone})},alignMenu:function(){var a=this;a.setMenuMargin()},setMenu:function(){var a=[];a['index.html']='',a['works.html']='',a['team.html']='',a['clients.html']='',a['about.html']='',a['contact.html']='';var b=f['default'].menu,c=this.getUrl(),d=c.split('/'),e=d.length,g=d[e-1];'index.html'==g?a['index.html']='active':'works.html'==g?a['works.html']='active':'team.html'==g?a['team.html']='active':'clients.html'==g?a['clients.html']='active':'about.html'==g?a['about.html']='active':'contact.html'==g&&(a['contact.html']='active');var h='\n        <ul class="menuListCont">\n             <li class="nav-item '.concat(a['works.html'],'">\n                 <a href="works.html"> Our work</a>\n             </li>\n             <li class="nav-item ').concat(a['clients.html'],'">\n                <a href="clients.html"> clients</a>\n              </li>\n              <li class="nav-item ').concat(a['team.html'],'">\n                <a href="team.html"> Our people</a>\n              </li>\n              <li class="nav-item ').concat(a['about.html'],'">\n                <a href="about.html">About</a>\n              </li>\n              <li class="nav-item ').concat(a['contact.html'],'">\n                <a href="contact.html"> Contact</a>\n              </li>\n            </ul>\n           \n        ');b.innerHTML+=h},setFooter:function(){var a=document.querySelector('.innerpage-footer');if(a){a.innerHTML+='\n         <div class="social-icons">\n                        <ul>\n                           <li><a href="https://www.instagram.com/andoncreativedesign/" target="_blank">insta</a></li>\n                            <li><a href="https://www.behance.net/andoncreative" target="_blank">be</a></li>\n                            <li><a href="https://vimeo.com/andoncreativedesign" target="_blank">vm</a></li>\n                            <li><a href="https://www.linkedin.com/company/andon-creative-design/" target="_blank">ln</a></li>\n                        </ul>\n                        \n                    </div>\n                        <p class="innerpage-copyright">\n                        \xA9 <span id="current_year"></span> The Andon Group. All rights reserved.\n                       </p>\n        ',document.getElementById('current_year').textContent=new Date().getFullYear()}}};b['default']=h},,,function(a,b,c){'use strict';var d=c(0),e=c(2),f=d(c(8)),g=d(c(1)),h=d(c(4)),i=d(c(9)),j=d(c(12)),k=d(c(13)),l=d(c(14));c(16),e.gsap.registerPlugin(),function(a){'loading'===document.readyState?document.addEventListener?document.addEventListener('DOMContentLoaded',a):document.attachEvent('onreadystatechange',function(){'complete'===document.readyState&&a()}):a()}(function(){g['default'].slideMenuBtn.addEventListener('click',function(a){a.preventDefault();var b=this;b.classList.contains('open')?(console.log('open'),h['default'].hideMenu(),b.classList.remove('open')):(console.log('close'),h['default'].slideMenu(),b.classList.add('open'))}),document.querySelector('.closeMenu').addEventListener('click',function(){var a=document.querySelector('.slide_menu');h['default'].hideMenu(),a.classList.remove('open')});new f['default']({elements_selector:'.lazy-load'});h['default'].setMenu(),h['default'].setFooter(),i['default'].toTopOnLoad(),0!==g['default'].onscroll_elements.length&&i['default'].animateOnScroll(g['default'].onscroll_elements);var a=new j['default'],b=document.querySelector('.video-play-btn');if(console.log('video',b),b)var c=document.querySelector('.video-tn'),d=document.querySelector('.videoPlayer'),e=document.getElementById('edVideo'),m=new k['default'](b,c,d,e);var n=document.getElementById('map');if(n){var o=new l['default'];console.log('MAP',o),o.loadGoogleMapsApi().then(function(a){var b=o.createMap(a,n);o.addMarker(a,b)})}})},,function(a,b,c){'use strict';var d=c(0);Object.defineProperty(b,'__esModule',{value:!0}),b['default']=void 0;var e=c(2),f=d(c(10)),g=c(11),h=d(c(1));(0,g.ScrollMagicPluginGsap)(f['default'],e.TweenMax),e.gsap.registerPlugin();b['default']={toTopOnLoad:function(){var a=h['default'].anim_onLoad,b=h['default'].innerpage_footer;null!==a&&e.TweenMax.from(a,1,{y:30,ease:'Power4.easeOut'}),null!==b&&e.TweenMax.from(b,1,{y:30,ease:'Power4.easeOut'})},animateOnScroll:function(a){var b=new f['default'].Controller,c=a;console.log('scroll',c);var d,g;c.forEach(function(a){console.log('scrollitem',a),d=a.hasAttribute('data-offset')?a.getAttribute('data-offset'):0,g=a.hasAttribute('data-hook')?a.getAttribute('data-hook'):'onEnter';var c=e.TweenMax.from(a,1,{y:80,ease:'Power4.easeOut'}),h=new f['default'].Scene({triggerHook:g,offset:d,triggerElement:a}).setTween(c).addTo(b)})}}},,,function(a,b,c){'use strict';var d=c(0);Object.defineProperty(b,'__esModule',{value:!0}),b['default']=void 0;var e=d(c(5)),f=d(c(6)),g=c(2);g.gsap.registerPlugin();var h=function(){function a(){(0,e['default'])(this,a),this.cursor=document.querySelector('.cursorcontainer'),this.mouseOffsetX=-100,this.mouseOffsetY=-100,this.mouseMove();var b=document.querySelector('.logo'),c=document.querySelector('.slide'),d=document.querySelector('.closeMenu'),f=document.querySelectorAll('.social-icons ul'),g=document.querySelectorAll('#menu ul li.nav-item'),h=document.querySelectorAll('.client-list-item'),i=document.querySelector('.video-play-btn'),j=document.querySelectorAll('.box-copy h2,.box-copy h3,.box-copy a'),k=document.querySelectorAll('.team-list-item-copy h2,.team-list-item-copy h3,.team-list-item-copy a'),l=document.querySelectorAll('.contact-content a'),m=document.querySelectorAll('.contact-details a'),n=document.querySelectorAll('.page-navigation-links div a');this.mouseOverExpand([b,c,d,f,g,j,k,h,l,m,n,i])}return(0,f['default'])(a,[{key:'mouseMove',value:function(){var a=this;document.addEventListener('mousemove',function(b){a.mouseOffsetX=b.pageX,a.mouseOffsetY=b.pageY});requestAnimationFrame(function b(){g.TweenMax.to(a.cursor,.4,{x:a.mouseOffsetX,y:a.mouseOffsetY,ease:'power4.InOut'},0),requestAnimationFrame(b)})}},{key:'mouseOverExpand',value:function(a){var b=this;a.forEach(function(a){a&&(a.length?a.forEach(function(a){b.animateCursor(a)}):void 0===a.length&&b.animateCursor(a))})}},{key:'animateCursor',value:function(a){var b=this;a.addEventListener('mouseenter',function(){b.cursor.classList.add('expandonhover')}),a.addEventListener('mouseleave',function(){b.cursor.classList.remove('expandonhover')})}}]),a}();b['default']=h},function(a,b,c){'use strict';var d=c(0);Object.defineProperty(b,'__esModule',{value:!0}),b['default']=void 0;var e=d(c(5)),f=d(c(6)),g=function(){function a(b,c,d,f){(0,e['default'])(this,a),this.videoPlayBtn=b,this.videoTn=c,this.videoPlayer=d,this.videoElem=f,this.videoInit()}return(0,f['default'])(a,[{key:'videoInit',value:function(){this.videoPlayBtn.addEventListener('click',this.playVideo.bind(this,event))}},{key:'playVideo',value:function(){this.togglePlayPause(),this.videoElem.paused?this.startVideo():this.videoElem.pause()}},{key:'togglePlayPause',value:function(){var a=this.videoTn,b=this.videoPlayBtn,c=this.videoPlayer;b.classList.contains('play')?(b.classList.remove('play'),b.classList.add('pause'),c.classList.add('show'),a.classList.contains('show')&&a.classList.remove('show')):b.classList.contains('pause')&&(b.classList.add('play'),b.classList.remove('pause'))}},{key:'startVideo',value:function(){var a=this,b=this.videoElem;if(b){if(0==b.children.length){var c=b.getAttribute('data-vid-src'),d=this.getVideoURL(c),e='';d.forEach(function(b){console.log('videoformat',b);var c=a.getFormat(b);e+='mp4'==c?'<source src="'+b+'" type="video/mp4">':'webm'==c?'<source src="'+b+'" type="video/webm">':'<source src="'+b+'" type="video/ogg">'}),b.innerHTML=e}b.play()}}},{key:'getVideoURL',value:function(a){var b=a.split('|');return b}},{key:'getFormat',value:function(a){var b=a.split('.')[2];return b}}]),a}();b['default']=g},function(a,b,c){'use strict';var d=c(0);Object.defineProperty(b,'__esModule',{value:!0}),b['default']=void 0;var e=d(c(5)),f=d(c(6)),g=d(c(15)),h=[{featureType:'all',elementType:'geometry.fill',stylers:[{weight:'2.00'}]},{featureType:'all',elementType:'geometry.stroke',stylers:[{color:'#9c9c9c'}]},{featureType:'all',elementType:'labels.text',stylers:[{visibility:'on'}]},{featureType:'landscape',elementType:'all',stylers:[{color:'#f2f2f2'}]},{featureType:'landscape',elementType:'geometry.fill',stylers:[{color:'#ffffff'}]},{featureType:'landscape.man_made',elementType:'geometry.fill',stylers:[{color:'#ffffff'}]},{featureType:'poi',elementType:'all',stylers:[{visibility:'off'}]},{featureType:'road',elementType:'all',stylers:[{saturation:-100},{lightness:45}]},{featureType:'road',elementType:'geometry.fill',stylers:[{color:'#eeeeee'}]},{featureType:'road',elementType:'labels.text.fill',stylers:[{color:'#7b7b7b'}]},{featureType:'road',elementType:'labels.text.stroke',stylers:[{color:'#ffffff'}]},{featureType:'road.highway',elementType:'all',stylers:[{visibility:'simplified'}]},{featureType:'road.arterial',elementType:'labels.icon',stylers:[{visibility:'off'}]},{featureType:'transit',elementType:'all',stylers:[{visibility:'off'}]},{featureType:'water',elementType:'all',stylers:[{color:'#46bcec'},{visibility:'on'}]},{featureType:'water',elementType:'geometry.fill',stylers:[{color:'#c8d7d4'}]},{featureType:'water',elementType:'labels.text.fill',stylers:[{color:'#070707'}]},{featureType:'water',elementType:'labels.text.stroke',stylers:[{color:'#ffffff'}]}],i=function(){function a(){(0,e['default'])(this,a)}return(0,f['default'])(a,[{key:'loadGoogleMapsApi',value:function(){return(0,g['default'])({key:'AIzaSyByr7vAKrvAJzB41lN9InrG7UKQHmFT76c'})}},{key:'createMap',value:function(a,b){return new a.Map(b,{center:{lat:25.068612,lng:55.145069},zoom:12,zoomControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!1,disableDefaultUI:!0,styles:h})}},{key:'addMarker',value:function(a,b){return new a.Marker({position:{lat:25.068612,lng:55.145069},icon:'images/mapmarker.svg',map:b})}}]),a}();b['default']=i},,function(){}]);