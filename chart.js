const ctx = document.getElementById('lineChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["5K", "10K", "15K", "20K", "25K", "30K", "35K", "40K", "45K", "50K", "55K", "60K"],
    datasets: [{
      label: 'Sales details',
      data: [20, 28, 28, 30, 40, 50, 40, 35, 38, 60, 25, 35, 30, 35, 60, 40, 90, 30, 40, 35, 40, 30, 50, 20, 30, 30, 25, 58, 50, 70, 60, 65, 60, 50, 50, 55, 35, 48, 40, 50, 55, 50, 35, 45, 100],
      borderWidth: 3, 
      backgroundColor: [
        "rgba(72, 128, 255, 1)"
      ],
      borderColor: [
        "rgba(72, 128, 255, 1)"
      ],
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
          ticks: {
              color: '#9C9C9C'
          },
          grid: {
            borderColor: "rgba(234, 234, 234, 1)",
            borderWidth: 1,
        }
      },
      x: {
          ticks: {
              color: '#9C9C9C'
          },
          grid: {
            borderColor: "rgba(234, 234, 234, 1)",
            borderWidth: 1,
        }
      }
  }
}
});