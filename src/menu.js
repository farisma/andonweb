import 'jquery';
import { gsap, TimelineMax, Linear }  from "gsap";
import elements from './variables';
import common from './general';
gsap.registerPlugin();
var menuAnim = {
    setMenuMargin: function(){
      
            var offset_top = $(elements.front_page_image).offset().top;
            elements.menu.find('ul').css('margin-top',offset_top);
            console.log(offset_top)
    },
    findMenuWidth: function(){
        var winW = common.findWinWidth();
        return (winW>400)?400:winW;
        
    },
    findContentSlideDistance:function(){
        var WinH = common.findWinHeight();
        var footerHeight = $(elements.footerContent).height();
        return WinH - footerHeight;
    },
    slideMenu: function(){          
           elements.menu.addClass('show');           
           var tl = new TimelineMax();
           console.log("hi")
           var menuWidth = this.findMenuWidth();
           tl.to(elements.menu, .5, {left:-menuWidth, ease:Linear.easeNone},"start")
           .to(elements.wrapper, .3, {x:menuWidth, ease:Linear.easeNone})
          // .to(this.menu, .3, {x:menuWidth, css:{zIndex:25}, ease:Linear.easeNone},"+=0.1")          
           .staggerTo(elements.nav_item,.5,{x:0,autoAlpha:1,ease:Linear.easeNone},0.15,"-=1.0")
           .from('.closeMenu',0.5,{autoAlpha:0},"+=0.3");
          
    },
    hideMenu: function(){     
        elements.menu.removeClass('show');
        var tl = new TimelineMax();  
        var menuWidth = this.findMenuWidth();      
        tl.to(elements.menu, 0.25, {left:-menuWidth, ease:Linear.easeNone}) 
        .to(elements.nav_item,.25,{x:-50,autoAlpha:0},"-=0.3")     
        .to(elements.wrapper, 0.25, {x:0, ease:Linear.easeNone});
          
        },
     alignMenu: function(){
       var that = this;
       that.setMenuMargin();
    },
}

export default menuAnim;
/*export default function menuColor(){
$('ul.menu li a').on('mouseover', function() {
    console.log($(this).addClass("a"))
    alert('mouseover222')
});
}*/
