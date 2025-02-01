document.addEventListener("DOMContentLoaded", () => {
    const uploadButton = document.querySelector(".upload-button");
    if (uploadButton) {
      uploadButton.addEventListener("click", uploadFile);
    }
});

  
function triggerFileInput() {
    document.getElementById("fileInput").click();
}

document.getElementById("fileInput").addEventListener("change", function () {
    const fileName = this.files[0] ? this.files[0].name : "No file chosen";
    document.getElementById("fileName").innerText = fileName;
});


async function uploadFile() {
    const fileInput = document.getElementById("fileInput");
    const previewBox = document.getElementById("previewBox");
    const amountInput = document.getElementById("amount-input");

    // Get the selected file and entered amount
    const file = fileInput.files[0];
    const amount = amountInput.value.trim(); // Remove leading/trailing spaces


    if (!file) {
        alert("Please select a file before uploading!");
        return;
    }

    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
        alert("Please enter a valid amount!");
        return;
    }

    // File preview logic
    const reader = new FileReader();
    reader.onload = function (e) {
        if (file.type.startsWith('image/')) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.style.maxWidth = '100%';
            img.style.borderRadius = '10px';

            previewBox.innerHTML = '';
            previewBox.appendChild(img);
        } else {
            previewBox.innerHTML = `<p>${file.name}</p>`;
        }
    };
    reader.readAsDataURL(file);


    const formData = new FormData();
    formData.append("images", file);
    formData.append("amount", amount);
    formData.append("request_type", "deposit"); // Hardcoded for now
    formData.append("provider_type", "bank_account");
    

    try {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("You must be logged in to perform this action.");
            return;
        }

        const response = await fetch("https://backend-zna0.onrender.com/transactions/initiate", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "File upload failed");
        }

        const data = await response.json();
        alert("Transaction successfully created.");
        console.log("Server Response:", data);
    } catch (error) {
        console.error("Error uploading file:", error);
        alert("Error initiating transaction.");
    }
}


function toggleDropdown(event) {
    event.preventDefault();
    const dropdown = event.target.closest('.dropdown');
    dropdown.classList.toggle('open');
}

function showContent(contentId) {
    // Hide the deposit container
    document.getElementById('depositContainer').classList.add('hidden');
  
    // Show the selected content
    const content = document.getElementById(contentId);
    content.classList.remove('hidden');
    content.classList.add('active');
}
  

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard!');
    });
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
  