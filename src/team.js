/** @format */

import elements from "./variables";

window.addEventListener("load", function () {
   let listLinks = elements.view_member_link;
  //using spread operator on htmlcollection returned from getelementbyclassname
//   let listLinks2 = document.getElementsByClassName("view-member-info");
//   console.log("LIST", ...listLinks2);
// let listLinks = [...listLinks2];
  listLinks.forEach((element) => {
    // alert("clicked");
    console.log("elem", element);
    element.addEventListener("click", function (e) {
      //alert("click")
      e.preventDefault();
      let listP = element.parentElement.querySelector(".teammember-info");
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