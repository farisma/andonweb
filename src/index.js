import 'jquery';
import { gsap, TimelineMax, Linear, TweenMax } from "gsap";
import LazyLoad from "vanilla-lazyload";
import ScrollMagic from "scrollmagic";
import elements from "./variables";
import menuAnim from "./menu";
import scrollAnim from "./scrollanim";
import './scss/style.scss';
gsap.registerPlugin();
$(document).ready(function () {
                                elements.slideMenuBtn.click(function (e) {
                                  e.preventDefault();
                                  var $this = $(this);
                                  if ($this.hasClass("open")) {
                                    console.log("open");
                                    menuAnim.hideMenu();
                                    $this.removeClass("open");
                                  } else {
                                    console.log("close");
                                    menuAnim.slideMenu();
                                    $this.addClass("open");
                                  }
                                });
      console.log("closeMenu", document.querySelector(".closeMenu"));
                               document
                                 .querySelector(".closeMenu")
                                 .addEventListener("click", (e) => {
                                   //e.preventDefault();
                                   alert("dafdsf");
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
  // setTimeout(() => {
  //                      elements.copyrightyear.textContent = new Date().getFullYear();     
  //                        },500)
                               

                                //  animation on load on all pages
                                // added classto animate on each container
                                scrollAnim.toTopOnLoad();
    

                            // to animate elements that has onscrollanim class
                            if (elements.onscroll_elements.length !== 0) {
                                    scrollAnim.animateOnScroll(
                                      elements.onscroll_elements
                                    );
                             }
                            //alert("load")

    

                            });
                              
