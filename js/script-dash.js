// JavaScript file for the dashboard

const ctx = document.getElementById('statsChart').getContext('2d');
const statsChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Revenue',
      data: [10000, 500000, 400000, 700000, 600000, 800000],
      borderColor: '#00FFAA',
      tension: 0.4,
    }],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
