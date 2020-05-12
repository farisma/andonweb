import 'jquery';
import { gsap, TimelineMax, Linear }  from "gsap";
import LazyLoad from "vanilla-lazyload";
import elements from "./variables";
import menuAnim from "./menu";
import './scss/style.scss';
gsap.registerPlugin();
$(document).ready(function () {
    elements.slideMenuBtn.click(function(e){
        e.preventDefault();
        var $this = $(this);
        if($this.hasClass('open'))
        {
            console.log('open')
            menuAnim.hideMenu();
            $this.removeClass('open');
        }
        else {
            console.log('close')
            menuAnim.slideMenu();
            $this.addClass('open');
        }
        
    });
    $('.closeMenu').click(function(e){
        e.preventDefault();
        var $slideMenuBtn = elements.slideMenuBtn;
            menuAnim.hideMenu();
            $slideMenuBtn.removeClass('open');
        
      
    })
    var lazyLoad = new LazyLoad({
        elements_selector:'.lazy-load'
    })
  
    elements.copyrightyear.textContent = new Date().getFullYear();
    
});
