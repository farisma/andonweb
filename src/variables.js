var elements = {
  //menubtn: $(".slide"),
  //slideMenuBtn: $(".slide_menu"),
  menubtn: document.querySelector(".slide"),
  slideMenuBtn: document.querySelector(".slide_menu"),
  menu: document.getElementById("menu"),
  //wrapper: $(".content"),
  wrapper: document.querySelector(".content"),
  slidedUpContentClass: "front-page-slide-up",
  introContent: ".intro-content",
  footerContent: ".front-page-footer",
  footerContentContact: ".contact-details",
  logo_menu_frontpage: ".front-page-slide-up .logo-wrap",
  nav_item: "#menu .nav-item",
  front_page_image: document.querySelector(".front-page-main-copy img"),
  homeVideo: document.getElementById("homeVideo"),
  copyrightyear: document.getElementById("current_year"),
  view_member_link: document.querySelectorAll(".view-member-info"),
  team_tile: document.querySelectorAll(".view-member-info"),
  anim_onLoad: document.querySelector("div.pageanimonload"),
  innerpage_footer: document.querySelector("div.innerpage-footer"),
  onscroll_elements: document.querySelectorAll(
    ".animateToTop,.box,.team-list-item,.work-sec"
  ),
  work_section: document.querySelectorAll(".worksecAnim"),
};
export default elements;