const API_BASE_URL = "https://backend-zna0.onrender.com"; // Replace with actual base URL
const token = localStorage.getItem("token"); // JWT token stored in local storage

if (!token) {
    alert("User is not authenticated. Please log in.");
    window.location.href = "/acct/signin.html";
}

function toggleDropdown(event) {
    event.preventDefault();
    const dropdown = event.target.closest('.dropdown');
    dropdown.classList.toggle('open');
}

async function fetchData(endpoint) {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${endpoint}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
        return await response.json();
    } catch (error) {
        console.error(error);
        alert("Failed to load data. Please try again.");
    }
}

async function saveData(endpoint, data) {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${endpoint}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error(`Error saving ${endpoint}: ${response.statusText}`);
        alert("Changes saved successfully!");
    } catch (error) {
        console.error(error);
        alert("Failed to save data. Please try again.");
    }
}



async function savePersona() {
    const form = document.getElementById('persona-form');
    const data = {
        first_name: form.first_name.value,
        last_name: form.last_name.value,
        username: form.username.value,
        password: form.password.value,
    };
    await saveData('profile', data);
}

document.addEventListener('DOMContentLoaded', () => {
    showContent(new Event('init'), 'persona');
});

async function saveBankDetails() {
    const form = document.getElementById('bank-form');
    const data = {
        account_type: form.account_type.value,
        account_number: form.account_number.value,
        provider_name: form.provider_name.value,
    };

    try {
        const response = await fetch(`${API_BASE_URL}/users/accounts`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Error saving bank details: ${response.statusText}`);
        }

        alert("Bank details saved successfully!");
    } catch (error) {
        console.error(error);
        alert("Failed to save bank details. Please try again.");
    }
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
    window.location.href = '/acct/signin.html';  // Replace with the appropriate redirect URL
  }
  