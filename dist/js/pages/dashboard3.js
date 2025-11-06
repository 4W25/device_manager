$(function () {
  'use strict'

  var ticksStyle = {
    fontColor: '#495057',
    fontStyle: 'bold'
  }

  var mode = 'index'
  var intersect = true

  // Generate labels for the last 72 hours
  var labels = [];
  for (var i = 71; i >= 0; i--) {
    var date = new Date();
    date.setHours(date.getHours() - i);
    labels.push(date.getHours() + ':00');
  }

  // Get unique device types from deviceDataList
  var deviceTypes = [...new Set(deviceDataList.map(item => item.deviceType))];

  // Generate random delivery data for each device type for the last 72 hours
  var datasets = deviceTypes.map(function(deviceType) {
    var data = [];
    for (var i = 0; i < 72; i++) {
      data.push(Math.floor(Math.random() * 51)); // 0-50 for each type, so total is 0-200
    }
    return {
      label: deviceType,
      backgroundColor: '#' + Math.floor(Math.random()*16777215).toString(16), // Random color
      borderColor: '#' + Math.floor(Math.random()*16777215).toString(16),
      data: data
    };
  });

  var $deliveryChart = $('#delivery-chart')
  // eslint-disable-next-line no-unused-vars
  var deliveryChart = new Chart($deliveryChart, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: datasets
    },
    options: {
      maintainAspectRatio: false,
      tooltips: {
        mode: mode,
        intersect: intersect
      },
      hover: {
        mode: mode,
        intersect: intersect
      },
      legend: {
        display: true
      },
      scales: {
        yAxes: [{
          stacked: true,
          gridLines: {
            display: true,
            lineWidth: '4px',
            color: 'rgba(0, 0, 0, .2)',
            zeroLineColor: 'transparent'
          },
          ticks: $.extend({
            beginAtZero: true,
            callback: function (value) {
              if (value >= 1000) {
                value /= 1000
                value += 'k'
              }
              return value
            }
          }, ticksStyle)
        }],
        xAxes: [{
          stacked: true,
          display: true,
          gridLines: {
            display: false
          },
          ticks: ticksStyle
        }]
      }
    }
  })
})
