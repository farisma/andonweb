class Video {
    constructor(videoPlayButton,videoTn,videoPlayer,videoElem) {
        
        this.videoPlayBtn = videoPlayButton;
        this.videoTn = videoTn;
        this.videoPlayer = videoPlayer;
        this.videoElem = videoElem;
        //if (this.videoPlayBtn !== null || this.videoPlayBtn !== undefined) {
       // console.log("videoplay", this.videoPlayBtn);
          this.videoInit();
        //}
        
    }

    videoInit() {
        this.videoPlayBtn.addEventListener("click", this.playVideo.bind(this));
        //this.videoPlayBtn.addEventListener("click", this.playVideo.bind(this));
    }

    playVideo() {

        this.togglePlayPause();
        if (this.videoElem.paused) this.startVideo();
        else this.videoElem.pause();
                  
    }
    
    togglePlayPause() {
        const videoTn = this.videoTn;
        const playBtn = this.videoPlayBtn;
        const videoPlayer =  this.videoPlayer
            if (playBtn.classList.contains("play")) {
              playBtn.classList.remove("play");
              playBtn.classList.add("pause");
              videoPlayer.classList.add("show");
             
              if (videoTn.classList.contains("show")) {
                videoTn.classList.remove("show");
              }
            } else if (playBtn.classList.contains("pause")) {
              playBtn.classList.add("play");
              playBtn.classList.remove("pause");
            }
    }
    startVideo() {
       
       
        
        var videoElem = this.videoElem;
         if (videoElem) {
           if (videoElem.children.length == 0) {
             var vidsrc = videoElem.getAttribute("data-vid-src");
             var videoURL = this.getVideoURL(vidsrc);
             var videoSrcAppend = "";
             videoURL.forEach( (item) => {
               var videoFormat = this.getFormat(item);
               if (videoFormat == "mp4") {
                 videoSrcAppend +=
                   '<source src="' + item + '" type="video/mp4">';
               } else if (videoFormat == "webm") {
                 videoSrcAppend +=
                   '<source src="' + item + '" type="video/webm">';
               } else {
                 videoSrcAppend +=
                   '<source src="' + item + '" type="video/ogg">';
               }
             });
             //videoElem.innerHTML("");
             videoElem.innerHTML = videoSrcAppend;
           }
             videoElem.play();////("play");
         }
    }

      getVideoURL(videoSrc){
        var videoPaths = videoSrc.split('|');
        return videoPaths;
       }
     getFormat(video){
        var filetype = video.split('.')[1];
        return filetype;
       }
}

export default Video;