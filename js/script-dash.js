document.addEventListener("DOMContentLoaded", () => {
  const API_URL = "https://backend-zna0.onrender.com/users/details"; // Replace with the actual API URL
  const token = localStorage.getItem("token"); // JWT token from local storage
  if (!token) {
    alert("User is not authenticated. Please log in.");
    window.location.href = "/acct/signin.html";
}

  const elements = {
    balance: document.getElementById("balance"),
    balanceExtra: document.getElementById("balance-extra"),
    balanceGraph: document.getElementById("balance-graph"),
    capital: document.getElementById("capital"),
    return: document.getElementById("return"),
    referralReward: document.getElementById("referral-reward"),
    referralCount: document.getElementById("referral-count"),
    activeReferrals: document.getElementById("active-referrals"),
    inactiveReferrals: document.getElementById("inactive-referrals"),
  };

  // Fetch data from API
  async function fetchDashboardData() {
    try {
      const response = await fetch(API_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      updateDashboard(data);
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error.message);
      alert("Unable to fetch dashboard data. Please try again later.");
    }
  }

  // Update dashboard with API data
  function updateDashboard(data) {
    // Wallet Balances
    const mainWallet = data.wallet.find((wallet) => wallet.wallet_type === "main");
    const referralWallet = data.wallet.find((wallet) => wallet.wallet_type === "referral");

    elements.balance.textContent = `$${(mainWallet?.balance + mainWallet?.interest).toFixed(2) || "0.00"}`;
    elements.capital.textContent = `$${mainWallet?.balance.toFixed(2) || "0.00"}`; // Assuming 'capital' uses the main wallet balance
    elements.return.textContent = `$${mainWallet?.interest.toFixed(2) || "0.00"}`;

    // Referrals
    elements.referralReward.textContent = `$${referralWallet?.balance.toFixed(2) || "0.00"}`;
    elements.referralCount.textContent = `${data.activeReferralCount + data.inActiveReferralCount} Referrals`;
    elements.activeReferrals.textContent = `Active: ${data.activeReferralCount}`;
    elements.inactiveReferrals.textContent = `Inactive: ${data.inActiveReferralCount}`;
  }

  // Initialize Chart.js for statistics
  function initializeChart() {
    const ctx = document.getElementById("statsChart").getContext("2d");
    const statsChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // Example labels
        datasets: [
          {
            label: "Revenue",
            data: [10000, 50000, 40000, 70000, 60000, 80000], // Example data
            borderColor: "#00FFAA",
            tension: 0.4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
        },
        scales: { y: { beginAtZero: true } },
      },
    });
  }

  // Run on page load
  fetchDashboardData();
  initializeChart();
});

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
