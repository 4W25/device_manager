/* global Chart:false */

$(function () {
  'use strict'

  // Get context with jQuery - using jQuery's .get() method.
  var pieChartCanvas = $('#pie-chart').get(0).getContext('2d')

  var labels = pieChartData.map(function(item) {
    return item.deviceModel;
  });
  var data = pieChartData.map(function(item) {
    return item.count;
  });

  var pieData = {
    labels: labels,
    datasets: [
      {
        data: data,
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
