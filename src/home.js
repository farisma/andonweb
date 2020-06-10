//import 'jquery';
import { gsap, TimelineMax, Linear, set }  from "gsap";
import elements from './variables';
import common from './general';
import menuAnim from './menu';

gsap.registerPlugin();
var app = {
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
      let slideDistance = window.innerHeight;// - 120;
            if(that.checkHasClass(elements.wrapper,elements.slidedUpContentClass))        
           {
            var tl = new TimelineMax();  
              tl.to(
                elements.wrapper,
                0.75,
                { y: -120, ease: "power1.out" /*Linear.easeNone*/ },
                "index"
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
       }
}

window.addEventListener("load", function () {
  //alert('load')

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

  // if (window.innerWidth < 1000) {
  //   document.querySelector(".intro-video").setAttribute("style", `min-height:${window.innerHeight - 80}px;`);
  //   document
  //     .querySelector(".fullscreen-vide-wrap")
  //     .setAttribute("style", `height:${window.innerHeight - 80}px;`);
  // }
});