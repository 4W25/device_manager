$(function () {
  'use strict'

  var pieChartCanvas = $('#pie-chart').get(0).getContext('2d')
  var pieData = {
    labels: pieChartData.map(function(item) {
      return item.deviceModel;
    }),
    datasets: [
      {
        data: pieChartData.map(function(item) {
          return item.count;
        }),
        backgroundColor: ['#f56954', '#00a65a', '#f39c12']
      }
    ]
  }
  var pieOptions = {
    maintainAspectRatio: false,
    responsive: true
  }
  // Create pie chart
  new Chart(pieChartCanvas, {
    type: 'pie',
    data: pieData,
    options: pieOptions
  })
})
