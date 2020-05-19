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
                                $(".closeMenu").click(function (e) {
                                  e.preventDefault();
                                  var $slideMenuBtn = elements.slideMenuBtn;
                                  menuAnim.hideMenu();
                                  $slideMenuBtn.removeClass("open");
                                });
                                var lazyLoad = new LazyLoad({
                                  elements_selector: ".lazy-load",
                                });

                                elements.copyrightyear.textContent = new Date().getFullYear();

                                //  animation on load on all pages
                                // added classto animate on each container
                                scrollAnim.toTopOnLoad();
    

                            // to animate elements that has onscrollanim class
                            if (elements.onscroll_elements.length !== 0) {
                                    scrollAnim.animateOnScroll(
                                      elements.onscroll_elements
                                    );
                             }
    
                       
    

                            });
                              
