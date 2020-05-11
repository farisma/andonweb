import 'jquery';
import { gsap, TimelineMax, Linear }  from "gsap";
import elements from './variables';
import common from './general';
import menuAnim from './menu';

gsap.registerPlugin();
var app = {
    loadLogo: function(){
        var tl = new TimelineMax({delay:.5});
        tl.from('.g-logo',0.5,{scaleY:0,transformOrigin:'center',ease:Linear.easeNone},"index")
          .to('.g-logo',0.5,{width:70,ease:Linear.easeNone},"index+=0.6")     
          .to('.g-reverse',0.3,{clip:"rect(0px 45px 45px 0px)",ease:Linear.easeNone},"-=0.3")   
          .to('.g-logo', 0.4, {clip:"rect(0px 70px 70px 70px)",ease:Linear.easeNone})
          .to('.g-yellow', 0.3, {clip:"rect(0px 45px 45px 0px)",ease:Linear.easeNone},'-=0.3')
          .to('.no-g', 3.0,{autoAlpha:1,ease:Linear.easeNone},"-=0.2")
          .from('.separatorline',.75,{width:0,ease:Linear.easeNone},"-=2.5")
          .staggerFrom('.intro-contact-details p.add-copy',1,{y:10,autoAlpha:0,ease:Linear.easeNone},.5,"-=1.5")
          .from('.social',0.5,{y:10,autoAlpha:0,ease:Linear.easeNone},"-=.5")
          .from('.intro-contact-details p.intro-copy',0.5,{y:10,autoAlpha:0,onComplete:this.slideDown.bind(this),ease:Linear.easeNone},"-=.25");
    },
    slideDown: function() {
        var that = common;
       // var slideDist = this.findContentSlideDistance();
       /* setTimeout(function()  { */
            if(that.checkHasClass(elements.wrapper,elements.slidedUpContentClass))        
           {
            var tl = new TimelineMax();  
              tl.to(elements.wrapper, 0.75, {y:-120, ease:Linear.easeNone},"index")            
              .to([elements.introContent,'.landing-logo','.no-g'],0.5,{autoAlpha:0,ease:Linear.easeNone},"-=0.1")    
              .to(elements.logo_menu_frontpage,0.5,{y:120,ease:Linear.easeNone},"-=0.75")          
              .to(elements.footerContent,0.5,{autoAlpha:1,ease:Linear.easeNone,onComplete:menuAnim.alignMenu.bind(menuAnim)},"+=0.1")
              
           }
           
             
         /*}, secs);*/
   },
    getVideoURL:function(videoSrc){
        var videoPaths = videoSrc.split('|');
        return videoPaths;
       },
       getFormat:function(video){
        var filetype = video.split('.')[1];
        return filetype;
       }
}

$(window).on('load',function () { 
    //alert('load')
   
    var videoElem = document.getElementById("homeVideo");
   if(videoElem) {
		if (elements.homeVideo.children().length == 0) {
			var vidsrc = elements.homeVideo.data('vid-src');
			var videoURL = app.getVideoURL(vidsrc);
			var videoSrcAppend = '';
			videoURL.forEach(function (item) {
				var videoFormat = app.getFormat(item);
				if (videoFormat == "mp4") {
					videoSrcAppend += '<source src="' + item + '" type="video/mp4">';
				}
				else if (videoFormat == "webm") {
					videoSrcAppend += '<source src="' + item + '" type="video/webm">';
				}
				else {
					videoSrcAppend += '<source src="' + item + '" type="video/ogg">';
				}
			});
			elements.homeVideo.html('');
			elements.homeVideo.append(videoSrcAppend);
		}
        elements.homeVideo.trigger('play');
        }
        //console.log(app.homeVideo)
        var landingLogo = document.getElementById("landing-logo");
        if(landingLogo) app.loadLogo();
        
       
       
});