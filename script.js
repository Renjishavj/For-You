const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;

// Show Slide
function showSlide(index) {

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
}

// Next Slide
function nextSlide() {
  current++;

  if (current >= slides.length) {
    current = 0;
  }

  showSlide(current);
}

// Previous Slide
function prevSlide() {
  current--;

  if (current < 0) {
    current = slides.length - 1;
  }

  showSlide(current);
}

// Button Events
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

// Auto Slide Every 15 Seconds
setInterval(nextSlide, 15000);