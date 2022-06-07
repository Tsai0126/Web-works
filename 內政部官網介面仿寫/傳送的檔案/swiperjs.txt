var swiper = new Swiper(".swiper01", {
  // Optional parameters
  loop: true,
  // Navigation arrows
  pagination: {
    el: ".swiper-pagination01",
 },
  navigation: {
    nextEl: ".swiper-button-next01",
    prevEl: ".swiper-button-prev01",
  },

});


var swiper = new Swiper(".swiper02", {
  // Optional parameters
  loop: true,
  slidesPerView:4,
  // Navigation arrows

 navigation: {
    nextEl: ".swiper-button-next02",
    prevEl: ".swiper-button-prev02",
  },

	observer: true,
	observerParents: true,
});

var swiper = new Swiper(".swiper03", {
  // Optional parameters
  loop: true,
  slidesPerView:6,
  slidesOffsetBefore :40,
  spacebetween:1,
  // Navigation arrows

 navigation: {
    nextEl: ".swiper-button-next03",
    prevEl: ".swiper-button-prev03",
  },

});





