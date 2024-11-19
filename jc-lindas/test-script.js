// script.js

let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-slide img");
const totalSlides = slides.length;
const slideContainer = document.querySelector(".carousel-slide");

document.querySelector(".next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
});

document.querySelector(".prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * 100;
  slideContainer.style.transform = `translateX(${offset}vw)`;
}
