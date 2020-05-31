import 'jquery';
import { gsap, TimelineMax, Linear }  from "gsap";
import elements from './variables';
import common from './general';
gsap.registerPlugin();
var menuAnim = {
    getUrl: function () {
        return window.location.href;
    },
    setMenuMargin: function(){
        let menu = document.getElementById("menu");
        var offset_top = $(elements.front_page_image).offset().top;
         console.log(menu.children[1]);
        menu.children[1].style.marginTop = offset_top;
            //('margin-top',offset_top);
            //console.log(offset_top)
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
           elements.menu.classList.add('show');           
           var tl = new TimelineMax();
           console.log("hi")
           var menuWidth = this.findMenuWidth();
           tl.to(elements.menu, .5, {left:-menuWidth, ease:Linear.easeNone},"start")
           .to(elements.wrapper, .3, {x:menuWidth, ease:Linear.easeNone})
          // .to(this.menu, .3, {x:menuWidth, css:{zIndex:25}, ease:Linear.easeNone},"+=0.1")          
           .staggerTo(elements.nav_item,.5,{x:0,autoAlpha:1,ease:Linear.easeNone},0.15,"-=1.0")
            .from('.closeMenu', 0.5, { autoAlpha: 0 }, "+=0.3");
        
          document
            .querySelector(".closeMenu")
            .addEventListener("click", (e) => {
              var $slideMenuBtn = document.querySelector(".slide_menu");
              menuAnim.hideMenu();
              $slideMenuBtn.classList.remove("open");
            });
          
    },
    hideMenu: function () {    
        elements.menu.classList.remove('show');
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
    setMenu: function () {
        let arrayLinks = [];
        // arrayLinks["index.html"] = "";
        // arrayLinks["works.html"] = "";
        // arrayLinks["team.html"] = "";
        // arrayLinks["clients.html"] = "";
        // arrayLinks["about.html"] = "";
        // arrayLinks["contact.html"] = "";
            arrayLinks["index.html"] = "";
            arrayLinks["works.html"] = "";
            arrayLinks["team.html"] = "";
            arrayLinks["clients.html"] = "";
            arrayLinks["about.html"] = "";
            arrayLinks["contact.html"] = "";
        const menu = elements.menu;
        let url = this.getUrl();
       // alert(url);
        let splitURL = url.split('/');
        let index = splitURL.length;
        let currentPage = splitURL[index - 1];
        if (currentPage == "index.html") 
            arrayLinks["index.html"] = "active";
        else if (currentPage == "works.html")
            arrayLinks["works.html"] = "active";
        else if (currentPage == "team.html")
            arrayLinks["team.html"] = "active";
        else if (currentPage == "clients.html")
            arrayLinks["clients.html"] = "active";
        else if (currentPage == "about.html")
            arrayLinks["about.html"] = "active";
        else if (currentPage == "contact.html")
            arrayLinks["contact.html"] = "active";
        //console.log("links",arrayLinks.length);
        // arrayLinks.forEach(item => {
        //     console.log("item",item);
        // })
       // if()
        let innerMenu = `
        <ul>
             <li class="nav-item ${arrayLinks["works.html"]}">
                 <a href="works.html"> Our work</a>
             </li>
             <li class="nav-item ${arrayLinks["clients.html"]}">
                <a href="clients.html"> clients</a>
              </li>
              <li class="nav-item ${arrayLinks["team.html"]}">
                <a href="team.html"> Our people</a>
              </li>
              <li class="nav-item ${arrayLinks["about.html"]}">
                <a href="about.html">About</a>
              </li>
              <li class="nav-item ${arrayLinks["contact.html"]}">
                <a href="contact.html"> Contact</a>
              </li>
            </ul>
           
        `;
        menu.innerHTML += innerMenu;
        
    },
    setFooter:function() {
        let innerPageFooter = document.querySelector(".innerpage-footer");
        if (innerPageFooter) {
            let footerElem = `
         <div class="social-icons">
                        <ul>
                           <li><a href="https://www.instagram.com/andoncreativedesign/" target="_blank">insta</a></li>
                            <li><a href="https://www.behance.net/andoncreative" target="_blank">be</a></li>
                            <li><a href="https://vimeo.com/andoncreativedesign" target="_blank">vm</a></li>
                            <li><a href="https://www.linkedin.com/company/andon-creative-design/" target="_blank">ln</a></li>
                        </ul>
                        
                    </div>
                        <p class="innerpage-copyright">
                        © <span id="current_year"></span> The Andon Group. All rights reserved.
                       </p>
        `;
      
            innerPageFooter.innerHTML += footerElem;
            document.getElementById(
                "current_year"
            ).textContent = new Date().getFullYear();
        }
    }
}

export default menuAnim;
/*export default function menuColor(){
$('ul.menu li a').on('mouseover', function() {
    console.log($(this).addClass("a"))
    alert('mouseover222')
});
}*/
