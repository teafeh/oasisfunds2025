function toggleMenu() {
    const sideMenu = document.getElementById('sideMenu');
    const body = document.body;

    sideMenu.classList.toggle('open');
    body.classList.toggle('menu-open');
}





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
