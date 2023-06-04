document.addEventListener("DOMContentLoaded", () => {
    // Variables
    const carouselContainer = document.querySelector(".carousel-container");
    const slides = Array.from(document.querySelectorAll(".carousel-slide"));
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");
    let currentSlideIndex = 0;
    let slideWidth = slides[0].offsetWidth;
  
    // Event listeners
    prevButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  
    // Automatic slide change
    setInterval(showNextSlide, 5000);
  
    // Functions
    function showPreviousSlide() {
      currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
      updateCarousel();
    }
  
    function showNextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      updateCarousel();
    }
  
    function updateCarousel() {
      slideWidth = slides[0].offsetWidth;
      const transformValue = -slideWidth * currentSlideIndex + "px";
      carouselContainer.style.transform = `translateX(${transformValue})`;
    }
  });
  