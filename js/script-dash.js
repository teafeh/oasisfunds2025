// script-dash.js
document.addEventListener("DOMContentLoaded", () => {
  const API_URL = "https://api.example.com/dashboard"; // Replace with actual API

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
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      const data = await response.json();
      updateDashboard(data);
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error.message);
    }
  }

  // Update dashboard with API data
  function updateDashboard(data) {
    // Balance
    elements.balance.textContent = `$${data.balance.toFixed(2)}`;
    elements.balanceExtra.textContent = `You've made an extra of $${data.extraToday} today`;
    elements.balanceGraph.innerHTML = `${data.extraToday} USD <span style="color: green;">+${data.percentage}%</span>`;

    // Capital & Returns
    elements.capital.textContent = `$${data.capital.toFixed(2)}`;
    elements.return.textContent = `$${data.expectedReturn.toFixed(2)}`;

    // Referrals
    elements.referralReward.textContent = `$${data.referralReward.toFixed(2)}`;
    elements.referralCount.textContent = `${data.totalReferrals} Referrals`;
    elements.activeReferrals.textContent = `Active: ${data.activeReferrals}`;
    elements.inactiveReferrals.textContent = `Inactive: ${data.inactiveReferrals}`;
  }

  // Initialize Chart.js for statistics
  function initializeChart() {
    const ctx = document.getElementById("statsChart").getContext("2d");
    const statsChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Revenue",
            data: [10000, 50000, 40000, 70000, 60000, 80000],
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
