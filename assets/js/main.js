$(".case-study-carousel").owlCarousel({
  loop: true,
  margin: 34,
  nav: false,
  dots: true,
  items: 3,
});
$(".case-study-carousel2").owlCarousel({
  loop: true,
  margin: 34,
  nav: false,
  dots: true,
  items: 5,
});
$(".testmonial-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: true,
  items: 1,
});
$(".logo-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  items: 6,
});
$(".homepage-slide").owlCarousel({
  loop: true,
  nav: true,
  navText: [
    "<i class='zmdi zmdi-arrow-left'></i>",
    "<i class='zmdi zmdi-arrow-right'></i>",
  ],
  dots: true,
  items: 1,
});
$(".menu-tigger").on("click", function () {
  $(".off-canvas ").addClass("show-off-canvas");
  $(".off-canvas-menu-shade ").addClass("active");
});
$(".menue-close, .off-canvas-menu-shade ").on("click", function () {
  $(".off-canvas ").removeClass("show-off-canvas");
  $(".off-canvas-menu-shade ").removeClass("active");
});
