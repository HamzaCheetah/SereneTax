// <!-- js of hamburger -->

document.getElementById("nav-toggle").onclick = function () {
  var navContent = document.getElementById("nav-content");
  if (navContent.classList.contains("hidden")) {
    navContent.classList.remove("hidden");
  } else {
    navContent.classList.add("hidden");
  }
};

document.querySelectorAll(".dropdown button").forEach((button) => {
  button.onclick = function (e) {
    e.preventDefault();
    const dropdownContent = button.nextElementSibling;
    dropdownContent.classList.toggle("hidden");
  };
});




// hamburger js ends 



// <!-- js for hero swiper -->

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".pagination-dot");
let currentIndex = 0;
const slideInterval = 5000; // 5 seconds

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("hidden", i !== index);
  });
  dots.forEach((dot, i) => {
    dot.classList.toggle("bg-gray-400", i !== index);
    dot.classList.toggle("bg-white", i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, slideInterval); // Restart auto slide
  });
});

let autoSlide = setInterval(nextSlide, slideInterval);
showSlide(currentIndex);
// js for hero swiper ends




// audit card js
document.querySelectorAll('.card').forEach((card, index) => {
  card.addEventListener('click', () => {
      // Get screen width
      const screenWidth = window.innerWidth;

      // Define card width based on screen size
      let activeWidth, inactiveWidth;
      if (screenWidth >= 1024) {
          // For large screens (lg and above)
          activeWidth = '50%';
          inactiveWidth = '25%';
      } else {
          // For smaller screens (below lg)
          activeWidth = '100%';
          inactiveWidth = '100%';
      }

      // Reset all cards to be the same width and hide their paragraphs
      document.querySelectorAll('.card').forEach(c => {
          c.classList.remove('active-card');
          c.querySelector('p').classList.add('hidden');
          c.style.width = inactiveWidth; // Set all inactive cards to default width
      });

      // Set the clicked card to be active and wider
      card.classList.add('active-card');
      card.querySelector('p').classList.remove('hidden');
      card.style.width = activeWidth; // Set active card to wider width
  });
});


// js for audit cards ends