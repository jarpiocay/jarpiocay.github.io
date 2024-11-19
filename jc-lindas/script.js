let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-slide img");
const totalSlides = slides.length;
const slideContainer = document.querySelector(".carousel-slide");
let autoplayInterval;
const image = document.getElementById('logo');

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

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function updateCarousel() {
  const offset = -currentIndex * 100;
  slideContainer.style.transform = `translateX(${offset}vw)`;
}

function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 3000);
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
  stopAutoplay();
  startAutoplay();
});

document.querySelector(".prev").addEventListener("click", () => {
  prevSlide();
  stopAutoplay();
  startAutoplay();
});

slideContainer.addEventListener("mouseenter", stopAutoplay);
slideContainer.addEventListener("mouseleave", startAutoplay);

startAutoplay();

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    stopAutoplay();
  } else {
    startAutoplay();
  }
});


image.addEventListener('mouseenter', () => {
      image.src = 'images/lindas-logo-pink.svg';
    });

image.addEventListener('mouseleave', () => {
      image.src = 'images/lindas-logo.svg';
    });



