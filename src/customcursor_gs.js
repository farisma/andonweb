
import { gsap, TimelineMax, Linear, TweenMax } from "gsap";
gsap.registerPlugin();
class Customcursor {
  constructor() {
      this.cursor = document.querySelector(".cursorcontainer");
      //set initial position of cursor
      this.mouseOffsetX = -100;
      this.mouseOffsetY = -100;
     // this.getMousePosition();
      this.mouseMove();
     
    const linkElem = document.querySelector(".logo");
    const logoElem = document.querySelector(".slide");
    const closeBtn = document.querySelector(".closeMenu");
    const footerIcons = document.querySelectorAll(".social-icons ul");
    const navLinks = document.querySelectorAll("#menu ul li.nav-item");
    const clientList = document.querySelectorAll(".client-list-item");
    const boxLinks = document.querySelectorAll(
      ".box-copy h2,.box-copy h3,.box-copy a"
    );
    
    const teamListLinks = document.querySelectorAll(
      ".team-list-item-copy h2,.team-list-item-copy h3,.team-list-item-copy a"
    );
    this.mouseOverExpand([
      linkElem,
      logoElem,
      closeBtn,
      footerIcons,
      navLinks,
      boxLinks,
      teamListLinks,
      clientList
    ]);
  }

  mouseMove() {
   
    document.addEventListener("mousemove", (e) => {
      this.mouseOffsetX = e.pageX;
      this.mouseOffsetY = e.pageY;
    });
    
      const render = () => {
          //console.log("render")
          TweenMax.to(
            this.cursor,
            0.5,
            {
              x: this.mouseOffsetX,
              y: this.mouseOffsetY,
              ease: "power4.InOut",
            },
            0
          );
        requestAnimationFrame(render);
      };
     requestAnimationFrame(render);

  }
  mouseOverExpand(elem) {
    elem.forEach((element) => {
      // if the elments are an array
      if (element.length) {         
         element.forEach((item) => {
           this.animateCursor(item);
         });       
      }
      // if not an array
      else if(element.length === undefined){
          this.animateCursor(element);       
      }
    });
  }

  animateCursor(element) {
     element.addEventListener("mouseenter", () => {
       this.cursor.classList.add("expandonhover");
     });
     element.addEventListener("mouseleave", () => {
       this.cursor.classList.remove("expandonhover");
     });
  }
}

export default Customcursor;