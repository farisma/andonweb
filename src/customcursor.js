class Customcursor {
  //cursor = document.querySelector(".cursorcontainer");
  constructor() {
    this.cursor = document.querySelector(".cursorcontainer");
    this.mouseMove();
    const linkElem = document.querySelector(".logo");
    const logoElem = document.querySelector(".slide");
    const closeBtn = document.querySelector(".closeMenu");
    const footerIcons = document.querySelectorAll(".social-icons ul");
    const navLinks = document.querySelectorAll("#menu ul li.nav-item");
    const boxLinks = document.querySelectorAll(
      ".box-copy h2,.box-copy h3,.box-copy a"
    );
    
    const teamListLinks = document.querySelectorAll(
      ".team-list-item-copy h2,.team-list-item-copy h3,.team-list-item-copy a"
    );
    //console.log("TEaM",teamListLinks);
    this.mouseOverExpand([
      linkElem,
      logoElem,
      closeBtn,
      footerIcons,
      navLinks,
      boxLinks,
      teamListLinks
    ]);
  }

  mouseMove() {
    // let cursor = document.querySelector(".cursorcontainer");
   //console.log("THIS",this.cursor);
    
    let mouseOffsetX;
    let mouseOffsetY;
    document.addEventListener("mousemove", (e) => {
     // console.log("cursor",this.cursor);
     // this.cursor.classList.add("show");
      mouseOffsetX = e.pageX;
      mouseOffsetY = e.pageY;
      console.log(mouseOffsetX, mouseOffsetY);
      this.cursor.setAttribute(
        "style",
        `top:${mouseOffsetY}px; left:${mouseOffsetX}px`
      );
    });
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