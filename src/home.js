//import 'jquery';
import { gsap, TimelineMax, Linear, set }  from "gsap";
import elements from './variables';
import common from './general';
import menuAnim from './menu';

gsap.registerPlugin();
var app = {
  checkMobileScreenPortrait: function () {
    let screenW = window.innerWidth;
    let screenH = window.innerHeight;
    if (screenW < 1000 && screenW < screenH) { //cehcking mobile portrait
      return true;
    }
    return false;
  },
  loadLogo: function () {
    document.getElementById(
      "current_year"
    ).textContent = new Date().getFullYear();
        var tl = new TimelineMax({delay:.5});
    tl
    .set(".invisible",{visibility:"visible"})
      .from(
          ".g-logo",
          0.5,
          { scaleY: 0, transformOrigin: "center", ease: "power1.Out" },
          "index"
        )
          .to(".g-logo", 0.5, { width: 70, ease: "power1.Out" }, "index+=0.6")
          .to(
            ".g-reverse",
            0.3,
            { clip: "rect(0px 45px 45px 0px)", ease: "power1.Out" },
            "-=0.3"
          )
          .to(".g-logo", 0.4, {
            clip: "rect(0px 70px 70px 70px)",
            ease: "power1.Out",
          })
          .to(
            ".g-yellow",
            0.3,
            { clip: "rect(0px 45px 45px 0px)", ease: "power1.Out" },
            "-=0.3"
          )
          .to(".no-g", 3.0, { autoAlpha: 1, ease: Linear.easeNone }, "-=0.2")
          .from(
            ".separatorline",
            0.75,
            { width: 0, ease: "power1.Out" },
            "-=2.5"
          )
          .staggerFrom(
            ".intro-contact-details p.add-copy",
            0.5,
            { y: 10, autoAlpha: 0, ease: "power1.In" },
            0.5,
            "-=2.0"
          )
          .from(
            ".social",
            0.5,
            { y: 10, autoAlpha: 0, ease: "power1.In" },
            "-=1.0"
          )
          .from(
            ".intro-contact-details p.intro-copy",
            0.5,
            {
              y: 10,
              autoAlpha: 0,
              onComplete: this.slideDown.bind(this),
              ease: "power3.In",
            },
            "-=0.75"
          );
    },
    slideDown: function() {
        var that = common;
      //      alert(
      //        "innerHeight" + window.innerHeight + "outer" + window.outerHeight
      // );
      let slideDistance =
        window.innerHeight -
        document.querySelector(".front-page-footer").getBoundingClientRect().top;// - 120;
    
      console.log(this.checkMobileScreenPortrait());
            if(that.checkHasClass(elements.wrapper,elements.slidedUpContentClass))        
           {
            var tl = new TimelineMax();  //front-page-logo-wrap;
              tl.to(
                elements.wrapper,
                0.75,
                { y: -slideDistance, ease: "power1.out" /*Linear.easeNone*/ },
                "index"
              )
                .from(
                  [".pos-abs"],
                  0.5,
                  { autoAlpha: 0, y: -50, ease: "power1.out" },
                  "-=0.3"
                )
                .from(
                  [".front-page-logo-wrap"],
                  0.5,
                  { autoAlpha: 0, y: -50, ease: "power1.out" },
                  "-=0.1"
                )

                .to(
                  [elements.introContent, ".landing-logo", ".no-g"],
                  0.5,
                  { autoAlpha: 0, ease: "power1.out" },
                  "-=0.1"
                )
                .to(
                  elements.logo_menu_frontpage,
                  0.5,
                  { y: 120, ease: "power1.out" },
                  "-=0.75"
                )
                .fromTo(
                  elements.homepage_cta,
                  0.5,
                  { y: -25, autoAlpha: 0, ease: "power1.out" },
                  { y: 0, autoAlpha: 1, ease: "power1.out" },
                  "-=0.5"
                )
                .to(
                  elements.footerContent,
                  0.5,
                  {
                    autoAlpha: 1,
                    ease: "power1.out",
                    // onComplete: menuAnim.setMenu.bind(menuAnim),
                  },
                  "+=0.1"
                );
              
           }
           
             
   },
    getVideoURL:function(videoSrc){
        var videoPaths = videoSrc.split('|');
        return videoPaths;
       },
    getFormat:function(video){
        var filetype = video.split('.')[2];
        return filetype;
  },
  // alignHomePageCTA_Y: function () {
  //   const logoElemOffsetTop = parseInt(document.querySelector(elements.logo_menu_frontpage).offsetTop);
  //   const logoElemHeight =  parseInt(document.querySelector(
  //     elements.logo_menu_frontpage
  //   ).offsetHeight);
  //   const heightCTAHalf = parseInt(elements.homepage_cta.offsetHeight) / 2;
  //   const mainTextOffset = parseInt(elements.front_page_image.offsetTop);
  //   console.log(
  //     logoElemOffsetTop,
  //     "-",
  //     logoElemHeight,
  //     "-",
  //     heightCTAHalf,
  //     "-",
  //     mainTextOffset
  //   );
  //   const offsetTop =
  //     ((mainTextOffset - (logoElemOffsetTop + logoElemHeight))/2) - heightCTAHalf + 13;
  //   return offsetTop;
  // },

  alignHomePageCTA_X: function () {
    const mainTextOffsetLeft = parseInt(elements.front_page_image.offsetLeft);
    const mainTextOffsetWidth = parseInt(elements.front_page_image.offsetWidth);
    const innerWidth = parseInt(window.innerWidth);
    const widthCTAHalf = parseInt(elements.homepage_cta.offsetWidth)/2;
    const mainTextWidth = mainTextOffsetLeft + mainTextOffsetWidth;
    const offsetLeft =
      mainTextWidth + (innerWidth - mainTextWidth) / 2 - widthCTAHalf;
    return offsetLeft;
  },
  alignFPCopyY: function () {
    alert("top")
    const fpcopyHeightHalf =
      parseInt(document.querySelector(".pos-abs").offsetHeight)/6;
    const screenHeight =
      (parseInt(window.innerHeight) -
        parseInt(document.querySelector(".front-page-footer").offsetHeight) - parseInt(document.querySelector(".logo-wrap").offsetHeight)) / 2;
    const offsetPosY = screenHeight + fpcopyHeightHalf;
  console.log(
    document.querySelector(".content").clientHeight,
    "window",
    window.innerHeight
  );
     document
       .querySelector(".pos-abs")
       .style.setProperty("--fpcopy-y-portrait", `${offsetPosY}px`);
    
     const footerOffset = parseInt(
       document.querySelector(elements.footerContent).getBoundingClientRect()
         .top
     );
     const heightCTAHalf =
      parseInt(elements.homepage_cta.getBoundingClientRect().height) / 2;
    
    const CTAoffset = 120 + ((offsetPosY - 120) / 2) - heightCTAHalf;
     elements.homepage_cta.style.setProperty(
       "--cta-y-portrait",
       `${CTAoffset}px`
     );

  },
  alignHomePageCTA: function () {
    const CTAPosX = this.alignHomePageCTA_X();
    this.alignFPCopyY();
    
      elements.homepage_cta.style.setProperty(
        "--cta-x-landscape",
        `${CTAPosX}px`
    );
   
    
  }

}

window.addEventListener("load", function () {
  //alert('load')
  
 app.alignHomePageCTA();

  var videoElem = document.getElementById("homeVideo");
  if (videoElem) {
    if (videoElem.children.length === 0) {
      var vidsrc = videoElem.getAttribute("data-vid-src");
      var videoURL = app.getVideoURL(vidsrc);
      var videoSrcAppend = "";
      videoURL.forEach(function (item) {
        var videoFormat = app.getFormat(item);
        if (videoFormat == "mp4") {
          videoSrcAppend += '<source src="' + item + '" type="video/mp4">';
        } else if (videoFormat == "webm") {
          videoSrcAppend += '<source src="' + item + '" type="video/webm">';
        } else {
          videoSrcAppend += '<source src="' + item + '" type="video/ogg">';
        }
      });
      //	elements.homeVideo.html('');
      videoElem.innerHTML = videoSrcAppend;
      //	elements.homeVideo.append(videoSrcAppend);
    }
    videoElem.play();
  }
  //console.log(app.homeVideo)
  var landingLogo = document.getElementById("landing-logo");
  if (landingLogo) app.loadLogo();

  if (window.innerWidth < 1000) {
    document.querySelector(".intro-video").setAttribute("style",`${window.innerHeight}px;`);
  }
});

window.addEventListener("resize", function () {
  //alert('load')
  
  app.alignHomePageCTA();
  
});