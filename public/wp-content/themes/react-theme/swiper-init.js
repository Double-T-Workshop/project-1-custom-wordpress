import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".swiper-container");
  sliders.forEach((slider) => {
    new Swiper(slider, {
      slidesPerView: 3, 
      spaceBetween: 50, // Space between slides
      loop: true, // Enable infinite loop
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1280: {
          slidesPerView: 3,
        },
      },
    });
  });
});
