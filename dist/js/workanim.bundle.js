(function(a){function b(b){for(var d,e,h=b[0],j=b[1],k=b[2],l=0,m=[];l<h.length;l++)e=h[l],Object.prototype.hasOwnProperty.call(f,e)&&f[e]&&m.push(f[e][0]),f[e]=0;for(d in j)Object.prototype.hasOwnProperty.call(j,d)&&(a[d]=j[d]);for(i&&i(b);m.length;)m.shift()();return g.push.apply(g,k||[]),c()}function c(){for(var a,b=0;b<g.length;b++){for(var c,e=g[b],h=!0,i=1;i<e.length;i++)c=e[i],0!==f[c]&&(h=!1);h&&(g.splice(b--,1),a=d(d.s=e[0]))}return a}function d(b){if(e[b])return e[b].exports;var c=e[b]={i:b,l:!1,exports:{}};return a[b].call(c.exports,c,c.exports,d),c.l=!0,c.exports}var e={},f={6:0},g=[];d.m=a,d.c=e,d.d=function(a,b,c){d.o(a,b)||Object.defineProperty(a,b,{enumerable:!0,get:c})},d.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},d.t=function(a,b){if(1&b&&(a=d(a)),8&b)return a;if(4&b&&'object'==typeof a&&a&&a.__esModule)return a;var c=Object.create(null);if(d.r(c),Object.defineProperty(c,'default',{enumerable:!0,value:a}),2&b&&'string'!=typeof a)for(var e in a)d.d(c,e,function(b){return a[b]}.bind(null,e));return c},d.n=function(a){var b=a&&a.__esModule?function(){return a['default']}:function(){return a};return d.d(b,'a',b),b},d.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},d.p='';var h=window.webpackJsonp=window.webpackJsonp||[],j=h.push.bind(h);h.push=b,h=h.slice();for(var k=0;k<h.length;k++)b(h[k]);var i=j;return g.push([19,0]),c()})({19:function(a,b,c){'use strict';var d=c(1);c(0);var e=c(3),f=d(c(6)),g=c(7);(0,g.ScrollMagicPluginGsap)(f['default'],e.TweenMax);var h={onScrollAnim:function(a){var b=a.querySelector('.first-sec'),c=a.querySelector('.second-sec'),d=a.querySelector('.third-sec'),g=a.querySelector('.fourth-sec');console.log(b);var h=new f['default'].Controller,i=e.TweenMax.from(b,.5,{y:70,ease:'Power4.easeOut'}),j=new f['default'].Scene({triggerHook:1,offset:0,triggerElement:b}).setTween(i),k=e.TweenMax.from(c,.5,{y:70,ease:'Power4.easeOut'}),l=new f['default'].Scene({triggerHook:1,offset:30,triggerElement:c}).setTween(k),m=e.TweenMax.from(d,.5,{y:130,ease:'Power4.easeOut'}),n=new f['default'].Scene({triggerHook:1,offset:0,triggerElement:d}).setTween(m),o=e.TweenMax.from(g,.25,{y:100,ease:'Power4.easeOut'}),p=new f['default'].Scene({triggerHook:1,offset:0,triggerElement:g}).setTween(o);h.addScene([j,l,n,p])}};document.addEventListener('DOMContentLoaded',function(){var a=document.querySelector('.scrollanim1');0!==a&&h.onScrollAnim(a)})}});