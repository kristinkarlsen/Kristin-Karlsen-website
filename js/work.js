const carousel = document.querySelector('.carousel');
const carouselImages = document.querySelectorAll('.carousel-image');
const dots = document.querySelectorAll('.dot');
const pageWidth = window.innerWidth;
let currentIndex = 1;
const imageWidth = carousel.children[0].clientWidth + 120; // include margin in image width

function updateCarousel(imageIndex) {
  // Move the carousel to the right or left
  carousel.style.transform = `translateX(${((pageWidth / 2 - imageWidth / 2)) - imageIndex * imageWidth}px)`;

  // Add the active class to the correct dot and remove it from the others
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });

  // Add the active class to the correct image and remove it from the others
  carouselImages.forEach((image, index) => {
    image.classList.toggle('active', index === currentIndex);
  });
}

function shiftLeft() {
  if (currentIndex == 0) {
    currentIndex = carouselImages.length - 1;
  } else {
    currentIndex--;
  }

  updateCarousel(currentIndex);
}

function shiftRight() {
  if (currentIndex == carouselImages.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateCarousel(currentIndex);
}

// Add a click action to all the dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel(index);
  });
});

// Add a click action to all the images
carouselImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    if (currentIndex == index) {
      // If the image is alredy selected, go to its page
      window.location.href = `./project-${index}.html`;
    } else {
      // Move the carousel to the selected image
      currentIndex = index;
      updateCarousel(index);
    }
  });
});

// Initiate the carousel to the 2nd image
updateCarousel(currentIndex);


// fade in

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);



