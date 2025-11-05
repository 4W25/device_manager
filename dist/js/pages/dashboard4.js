/* global Chart:false */

$(function () {
  'use strict'

  // Get context with jQuery - using jQuery's .get() method.
  var pieChartCanvas = $('#pie-chart').get(0).getContext('2d')

  var deviceCounts = {};
  deviceDataList.forEach(function (device) {
    if (deviceCounts[device.deviceType]) {
      deviceCounts[device.deviceType]++;
    } else {
      deviceCounts[device.deviceType] = 1;
    }
  });

  var pieData = {
    labels: Object.keys(deviceCounts),
    datasets: [
      {
        data: Object.values(deviceCounts),
        backgroundColor: ['#f56954', '#00a65a', '#f39c12', '#00c0ef', '#3c8dbc', '#d2d6de']
      }
    ]
  }

  var pieOptions = {
    maintainAspectRatio: false,
    responsive: true
  }

  // Create pie chart
  // eslint-disable-next-line no-unused-vars
  var pieChart = new Chart(pieChartCanvas, {
    type: 'pie',
    data: pieData,
    options: pieOptions
  })
})
