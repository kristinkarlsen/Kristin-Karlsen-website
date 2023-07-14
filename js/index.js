window.addEventListener("scroll", function () {
  const navbar = document.getElementById("main-menu");
  const navItems = document.querySelectorAll('.nav-item');
  const scrollDistance = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollDistance > window.innerHeight) {
    navbar.style.backgroundColor = "white";
    navItems.forEach((item) => {
      item.style.color = "black";
    })
  } else {
    navbar.style.backgroundColor = "transparent";
    navItems.forEach((item) => {
      item.style.color = "white";
    })
  }
});


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


setInterval(() => {
  const images = document.querySelectorAll(".portfolio-image");

  images.forEach(image => {
    const randomIndex = Math.floor(Math.random() * images.length);

    const tempSrc = image.src;
    image.src = images[randomIndex].src;
    images[randomIndex].src = tempSrc;
  });

}, 1000);