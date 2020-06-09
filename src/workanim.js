/** @format */

//import "jquery";
import { gsap, TweenMax, TimelineMax } from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax);

var workAnim = {
    onScrollAnim: function (elem) {
        let elmentToScroll1 = elem.querySelector('.first-sec'),
            elmentToScroll2 = elem.querySelector(".second-sec"),
            elmentToScroll3 = elem.querySelector(".third-sec"),
            elmentToScroll4 = elem.querySelector(".fourth-sec");
        console.log(elmentToScroll1);
        const controller = new ScrollMagic.Controller();
        let scrollTween1 = 
        TweenMax.from(elmentToScroll1, .5, {
                y: 70,
                ease: "Power4.easeOut",
              });

        let myScene1 = new ScrollMagic.Scene({
          triggerHook: 1,
          offset: 0,
          triggerElement: elmentToScroll1,
        }).setTween(scrollTween1);

         let scrollTween2 = TweenMax.from(elmentToScroll2, 0.5, {
           y: 70,
           ease: "Power4.easeOut",
         });

         let myScene2 = new ScrollMagic.Scene({
           triggerHook: 1,
           offset: 30,
           triggerElement: elmentToScroll2,
         }).setTween(scrollTween2);
        
        let scrollTween3 = TweenMax.from(elmentToScroll3, 0.5, {
          y: 130,
          ease: "Power4.easeOut",
        });

        let myScene3 = new ScrollMagic.Scene({
          triggerHook: 1,
          offset: 0,
          triggerElement: elmentToScroll3,
        }).setTween(scrollTween3);

        let scrollTween4 = TweenMax.from(elmentToScroll4, 0.25, {
          y: 100,
          ease: "Power4.easeOut",
        });

        let myScene4 = new ScrollMagic.Scene({
          triggerHook: 1,
          offset: 0,
          triggerElement: elmentToScroll4,
        }).setTween(scrollTween4);
        
          controller.addScene([myScene1, myScene2, myScene3, myScene4]);
        
    }
}

 //to animate elements on works indvividual page
 // will add scrollanim1,... classes to eachwork in individual work pages.
 // Based on that will call respective functions
document.addEventListener("DOMContentLoaded", function () {
    const elementToAnimate = document.querySelector(".scrollanim1");
    if (elementToAnimate !== 0) {
        workAnim.onScrollAnim(elementToAnimate);
    }
     
});