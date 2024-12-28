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
        title: "Disney Wonder",
        text: "Disney Wonder combines elegance and excitement with unique onboard activities, including Broadway-style shows and character meet-and-greets.",
      },
      {
        title: "Disney Fantasy",
        text: "Disney Fantasy offers incredible itineraries, exceptional dining, and fun-filled decks for an unforgettable cruise experience.",
      },
    ];

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





document.getElementById('calculate').addEventListener('click', () => {
  const investment = parseFloat(document.getElementById('investment').value);
  const investmentSpan = parseInt(document.getElementById('investment-span').value);

  if (isNaN(investment) || isNaN(investmentSpan)) {
    document.getElementById('result').innerText = 'Please fill in all fields correctly.';
    result.style.color = 'red'; // Change the text color to red
    return;
  }

  if (investment < 30) {
    document.getElementById('result').innerText = 'The minimum investment is $30.';
    result.style.color = 'red';
    return;

  }

  if (investmentSpan < 30) {
    document.getElementById('result').innerText = 'The minimum investment period is 30 days.';
    result.style.color = 'red';
    return;
  }

  const dailyRate = 1.5 / 100; // 1.5% daily ROI
  const monthlyRate = 45 / 100; // 45% ROI in 30 days
  const twoMonthsRate = 90 / 100; // 90% ROI for 60 days (approx)

  let roi = 0;
  let periodText = '';

  // Calculate ROI based on selected investment span
  if (investmentSpan === 30) {
    roi = investment * (1 + monthlyRate); // 45% ROI for 30 days
    periodText = "30 days (45% ROI)";
    result.style.color = 'green';
  } else if (investmentSpan === 60) {
    roi = investment * (1 + twoMonthsRate); // 90% ROI for 60 days
    periodText = "60 days (90% ROI)";
    result.style.color = 'green';
  } else if (investmentSpan === 90) {
    roi = investment * (1 + 1.35); // Roughly 135% ROI for 3 months
    periodText = "3 months (135% ROI)";
    result.style.color = 'green';
  }

  // Display Results
  document.getElementById('result').innerHTML = `
    <p>Total returns for ${periodText}: $${roi.toFixed(2)}</p>
  `;
});
