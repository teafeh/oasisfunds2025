function toggleDropdown(event) {
    event.preventDefault();
    const dropdown = event.target.closest('.dropdown');
    dropdown.classList.toggle('open');
}



function showContent(contentId) {
    // Hide the withdraw container
    document.getElementById('withdrawContainer').classList.add('hidden');
  
    // Show the selected content
    const content = document.getElementById(contentId);
    content.classList.remove('hidden');
    content.classList.add('active');
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.querySelector('.logout');
  
    // Add event listener for the logout button
    if (logoutButton) {
      logoutButton.addEventListener('click', (e) => {
        e.preventDefault();  // Prevent the default anchor behavior
  
        // Call the logout function
        logout();
      });
    }
  });
  
  // Logout function
  function logout() {
    // Remove token from localStorage (or sessionStorage if applicable)
    localStorage.removeItem('token');  // or sessionStorage.removeItem('token');
    
    // Optionally clear other authentication-related data
    // localStorage.removeItem('user'); // Example: remove user data
  
    // Redirect to the login page (or home page, depending on your setup)
    window.location.href = '/login.html';  // Replace with the appropriate redirect URL
  }
  