const ctx = document.getElementById("modernDonutChart").getContext("2d");

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Upcoming", "New Listed", "Ongoing"], // Chart labels
    datasets: [
      {
        label: "IPO Status",
        data: [15, 25, 18], // Data values
        backgroundColor: ["#5a6acf", "#8593ed", "#c7ceff"], // Colors for the chart
        hoverBackgroundColor: ["#5a6acf", "#8593ed", "#c7ceff"], // Colors when hovered
        borderWidth: 2,
        borderColor: "#fff", // Border color for better visibility
      },
    ],
  },
  options: {
    responsive: true, // Make the chart responsive
    maintainAspectRatio: false,
    cutout: "65%", // Inner hole for the donut chart
    plugins: {
      legend: {
        position: "bottom", // Position of the legend
        labels: {
          usePointStyle: true, // Use a point style instead of default rectangles
          boxWidth: 10, // Width of the legend box
          padding: 15, // Padding between legend items
          borderRadius: 8, // Rounds the corners of the labels
        },
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const value = tooltipItem.raw;
            return ` ${tooltipItem.label}: ${value}`;
          },
        },
      },
    },
    hoverOffset: 30, // Expand segment on hover
    animation: {
      duration: 1500, // Smooth animation
      easing: "easeOutBounce", // Bounce effect when loading
    },
  },
});
