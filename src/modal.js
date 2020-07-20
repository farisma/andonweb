import Video from "./video";

class Modal {
    constructor() {
        this.modalTriggers = document.querySelectorAll(".popup-trigger");
         this.modalCloseTrigger = document.querySelector(".popup-modal__close");
         this.bodyBlackout = document.querySelector(".body-blackout");
        this.init();
    }
    init() {
       this.modalTriggers.forEach((trigger) => {
         trigger.addEventListener("click", () => {
           const { popupTrigger } = trigger.dataset;
           const popupModal = document.querySelector(
             `[data-popup-modal="${popupTrigger}"]`
           );
           const videoSrc = document.querySelector(
             `[data-popup-modal="${popupTrigger}"] video`
           );
           popupModal.classList.add("is--visible");
           this.bodyBlackout.classList.add("is-blacked-out");
             console.log(videoSrc.dataset);
             console.log(videoSrc.getAttribute("id"))
             new Video(null,null,null, videoSrc,true);
           popupModal
             .querySelector(".popup-modal__close")
             .addEventListener("click", () => {
               popupModal.classList.remove("is--visible");
               this.bodyBlackout.classList.remove("is-blacked-out");
             });

           this.bodyBlackout.addEventListener("click", () => {
             // TODO: Turn into a function to close modal
             popupModal.classList.remove("is--visible");
             this.bodyBlackout.classList.remove("is-blacked-out");
           });
         });
       });
   }
}

export default Modal;