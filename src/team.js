/** @format */

import elements from "./variables";

$(window).on("load", function () {
  
    var listLinks =elements.view_member_link;
    listLinks.forEach(function (element) {
        console.log("elem",element);
        element.addEventListener("click", function (e) {
            e.preventDefault();
            var listP =
                element.parentElement.querySelector(".teammember-info")
            listP.classList.add("show");
            this.classList.remove("show");
        });
        //console.log("parentelement", element.parentElement.parentElement);
        element.parentElement.parentElement.addEventListener(
          "mouseleave",
          function () {
            //this.querySelector(".show").classList.remove("show");
              this.querySelector(".teammember-info").classList.remove("show");
              this.querySelector(".view-member-info").classList.add("show");
              //console.log(0)
          }
        );
   }); 
});