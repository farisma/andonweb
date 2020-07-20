//import 'jquery';
import { gsap, TimelineMax, Linear, TweenMax } from "gsap";
import LazyLoad from "vanilla-lazyload";
//import ScrollMagic from "scrollmagic";
import elements from "./variables";
import menuAnim from "./menu";
import scrollAnim from "./scrollanim";
//import Customcursor from "./customcursor_gs";
import Video from "./video";
import Map from "./map";
import './scss/style.scss';
import Modal from "./modal";
gsap.registerPlugin();
ready(function () {
     
    elements.slideMenuBtn.addEventListener("click", function(e) {
      e.preventDefault();
      var $this = this;
      
                             if ($this.classList.contains("open")) {
                               console.log("open");
                               menuAnim.hideMenu();
                               $this.classList.remove("open");
                             } else {
                               console.log("close");
                               menuAnim.slideMenu();
                               $this.classList.add("open");
                             }
                           })       
                                  
                            
      
                               document
                                 .querySelector(".closeMenu")
                                 .addEventListener("click", (e) => {
                                   //e.preventDefault();
                                  
                                   var $slideMenuBtn = document.querySelector(
                                     ".slide_menu"
                                   );
                                   menuAnim.hideMenu();
                                   $slideMenuBtn.classList.remove("open");
                                 });
                                // $(".closeMenu").click(function (e) {
                                //   e.preventDefault();
                                //   var $slideMenuBtn = elements.slideMenuBtn;
                                //   menuAnim.hideMenu();
                                //   $slideMenuBtn.removeClass("open");
                                // });
                                var lazyLoad = new LazyLoad({
                                  elements_selector: ".lazy-load",
                                });
                                // set common menu and footer
                              
                                menuAnim.setMenu();
                                menuAnim.setFooter();

                               

                                //  animation on load on all pages
                                // added classto animate on each container
                                scrollAnim.toTopOnLoad();
    

                            // to animate elements that has onscrollanim class
                            if (elements.onscroll_elements.length !== 0) {
                                    scrollAnim.animateOnScroll(
                                      elements.onscroll_elements
                                    );
                             }

                            
  //creating new object for custom cursor
  // let customCursor = new Customcursor();
// for video in emirates delivers
  const videoPlayBtn = document.querySelector(".video-play-btn"); // playbutton
  console.log("video",videoPlayBtn)
  if (videoPlayBtn) {
    const videoTn = document.querySelector(".video-tn"); // thumbnail
    const videoPlayer = document.querySelector(".videoPlayer"); //videotag container
    const videoElem = document.getElementById("edVideo"); // video tag
    const autoplay = false;
    let videoPlay = new Video(videoPlayBtn, videoTn, videoPlayer, videoElem, autoplay);
  }
  
// video play/pause in continer
  
  // if popup modal exists
   const popupModalExists = document.querySelector(".video-modal-click-cont");
  if (popupModalExists) {
    let popup = new Modal();
  }

  
  let mapElement = document.getElementById("map");
  if (mapElement) {
    let map = new Map();
    console.log("MAP",map)
   map.loadGoogleMapsApi().then(function (googleMaps) {
     let resultMap = map.createMap(googleMaps, mapElement);

     map.addMarker(googleMaps, resultMap);
   });
}
 

});
                            

//function to check if document is ready

function ready(callbackFunc) {
  if (document.readyState !== "loading") {
    // Document is already ready, call the callback directly
    callbackFunc();
  } else if (document.addEventListener) {
    // All modern browsers to register DOMContentLoaded
    document.addEventListener("DOMContentLoaded", callbackFunc);
  } else {
    // Old IE browsers
    document.attachEvent("onreadystatechange", function () {
      if (document.readyState === "complete") {
        callbackFunc();
      }
    });
  }
}
                              
