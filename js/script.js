const openPopupLink = document.getElementById('openPopupLink');
  openPopupLink.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default link behavior
    popup.style.display = 'block';
    overlay.style.display = 'block';
  });


 