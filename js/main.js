let autoplayInterval; // Interval for autoplay

function updateSlide(index) {
  const carousel = document.querySelector(".carousel");
  const descriptionTitle = document.querySelector(".ship-description h3");
  const descriptionText = document.querySelector(".ship-description p");

  // Update slide position
  carousel.style.transform = `translateX(-${index * 100}%)`;

  // Update description
  descriptionTitle.textContent = descriptions[index].title;
  descriptionText.textContent = descriptions[index].text;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length; // Loop back to the start
  updateSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop back to the end
  updateSlide(currentIndex);
}

function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 3000); // Auto-play every 3 seconds
}

function stopAutoplay() {
  clearInterval(autoplayInterval); // Stop autoplay
}

// Initialize
updateSlide(currentIndex);
startAutoplay(); // Start autoplay

// Pause autoplay on hover
const carouselWrapper = document.querySelector(".carousel-wrapper");
carouselWrapper.addEventListener("mouseenter", stopAutoplay);
carouselWrapper.addEventListener("mouseleave", startAutoplay);



function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    const body = document.body;

    sideMenu.classList.toggle('open');
    body.classList.toggle('menu-open');
}


let currentIndex = 0; // Starting index
const slides = document.querySelectorAll(".carousel-slide");
const descriptions = [
  {
    title: "Disney Magic",
    text: "This classic-looking vessel awash with modern conveniences is home to the high-speed AquaDunk waterslide, splash zones for little ones, Rapunzel’s Royal Table restaurant, Fathoms and Keys nightclubs for adults, and imaginative clubs for kids, tweens, and teens.",
  },
  {
    title: "Disney Dream",
    text: "Experience luxury and adventure aboard Disney Dream, featuring innovative technology, themed dining, and entertainment tailored to kids and adults alike.",
  },
  {
    title: "Disney magic 2",
    text: "Experience luxury and adventure aboard Disney Dream, featuring innovative technology, themed dining, and entertainment tailored to kids and adults alike.",
  },
  {
    title: "Disney Dream 2",
    text: "Experience luxury and adventure aboard Disney Dream, featuring innovative technology, themed dining, and entertainment tailored to kids and adults alike.",
  }
  // Add more descriptions as needed
];


// Get elements
const openPopupLinks = document.querySelectorAll('.open-popup');
const closePopup = document.getElementById('closePopup');
const popup = document.getElementById('popup');
const overlay = document.getElementById('popupOverlay');

// Open Popup
openPopupLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        popup.style.display = 'block';
        overlay.style.display = 'block';
    });
});

// Close Popup
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});

overlay.addEventListener('click', () => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
});



 

// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when scrolled down, hide when at the top
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.classList.remove("hidden");
    } else {
        scrollToTopBtn.classList.add("hidden");
    }
};

// Scroll to the top when clicked
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll animation
    });
});
