/** @format */
import "jquery";
import { gsap, TweenMax} from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax);
import elements from "./variables";

gsap.registerPlugin();

var scrollAnim = {
  toTopOnLoad: function () {
    const animateWrap = elements.anim_onLoad;
    const footerWrap = elements.innerpage_footer;

    if (animateWrap !== null)
      TweenMax.from(animateWrap, 1, {
        y: 30,
        ease: "Power4.easeOut",
      });
    if (footerWrap !== null)
      TweenMax.from(footerWrap, 1, {
        y: 30,
        ease: "Power4.easeOut",
      });
  },
  animateOnScroll: function (elem) {
   // console.log(elem)
    const controller = new ScrollMagic.Controller();
    const elementsToScroll = elem;
    console.log("scroll", elementsToScroll);
     var offset, hook;
    elementsToScroll.forEach((item) => {
      console.log("scrollitem", item);
      // if (item.hasAttribute("data-offset")) {
      //   offset = item.getAttribute("data-offset");
      // }
      // else {
      //   offset = 0;
      // }
      item.hasAttribute("data-offset")
        ? (offset = item.getAttribute("data-offset"))
        : (offset = 0);
      item.hasAttribute("data-hook")
           ? (hook = item.getAttribute("data-hook"))
           : (hook = "onEnter");
      //  console.log("offfset", item.getAttribute("data-offset"));
      let scrollTween = TweenMax.from(item, 1, {
        y: 80,
        ease: "Power4.easeOut",
      });

      let myScene = new ScrollMagic.Scene({
        triggerHook: hook,
        offset: offset,
        triggerElement: item,
      })
        .setTween(scrollTween)
        .addTo(controller);
    });
  },
//     animateOnScrollWorks: function (elem) {
//          const controller = new ScrollMagic.Controller();
//          const elementsToScroll = elem;
         
//          elementsToScroll.forEach((item) => {
//            let scrollTween = TweenMax.from(item, 1, {
//              y: 100,
//              ease: "Power4.easeOut",
//            });

//            const myScene = new ScrollMagic.Scene({
//              triggerHook: 1,
//              offset: 25,
//              triggerElement: item,
//            })
//              .setTween(scrollTween)
//              .addTo(controller);
//          });
      
//   }
};

export default scrollAnim;
