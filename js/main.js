function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    const body = document.body;

    sideMenu.classList.toggle('open');
    body.classList.toggle('menu-open');
}


const slider = document.querySelector('.card-slider');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0 ;

function updateSlider() {
  const cardWidth = slider.querySelector('.card').offsetWidth;
  slider.style.transform = `translateX(-${currentIndex * (cardWidth + 20)}px)`;
}

nextBtn.addEventListener('click', () => {
  if (currentIndex < slider.children.length - 1) {
    currentIndex++;
    updateSlider();
  }
});

prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

window.addEventListener('resize', updateSlider);




const testimonials = document.querySelectorAll('.testimonial');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
            testimonial.classList.add('active');
        }
    });
}

prevButton.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
});

nextButton.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
});

// Initialize with the first testimonial visible
showTestimonial(currentTestimonial);




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
