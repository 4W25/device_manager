// data/delivery_chart_data.js

// Helper function to generate labels for the last 72 hours
function generateTimeLabels() {
  const labels = [];
  const now = new Date();
  for (let i = 71; i >= 0; i--) {
    const date = new Date(now);
    date.setHours(date.getHours() - i);
    labels.push(date.getHours() + ':00');
  }
  return labels;
}

// Simulated delivery data for different device types
const deliveryChartData = {
  labels: generateTimeLabels(),
  datasets: [
    {
      label: 'WIN-1500XE',
      backgroundColor: 'rgba(60,141,188,0.9)',
      borderColor: 'rgba(60,141,188,0.8)',
      pointRadius: false,
      pointColor: '#3b8bba',
      pointStrokeColor: 'rgba(60,141,188,1)',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(60,141,188,1)',
      data: [
        15, 18, 22, 25, 23, 20, 18, 16, 19, 21, 24, 28, 30, 26, 22, 19, 17, 20, 23, 26, 29, 27, 24, 21,
        18, 16, 19, 22, 25, 28, 31, 29, 25, 22, 20, 17, 21, 24, 27, 30, 28, 26, 23, 20, 18, 22, 25, 29,
        32, 30, 27, 24, 21, 19, 16, 20, 23, 26, 28, 25, 22, 19, 17, 21, 24, 28, 31, 29, 26, 23, 20, 18
      ]
    },
    {
      label: 'OKI-RG7',
      backgroundColor: 'rgba(210, 214, 222, 1)',
      borderColor: 'rgba(210, 214, 222, 1)',
      pointRadius: false,
      pointColor: 'rgba(210, 214, 222, 1)',
      pointStrokeColor: '#c1c7d1',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(220,220,220,1)',
      data: [
        8, 10, 12, 14, 13, 11, 9, 7, 10, 12, 15, 17, 16, 14, 11, 8, 6, 9, 11, 13, 16, 15, 12, 10,
        7, 5, 8, 11, 14, 16, 18, 17, 14, 11, 9, 6, 10, 13, 15, 18, 16, 13, 10, 8, 11, 14, 17, 19,
        20, 18, 15, 12, 9, 7, 10, 12, 14, 17, 16, 13, 10, 8, 11, 13, 16, 19, 17, 14, 11, 9, 7
      ]
    },
    {
      label: 'HITACHI-CZ5000',
      backgroundColor: 'rgba(0, 166, 90, 1)',
      borderColor: 'rgba(0, 166, 90, 1)',
      pointRadius: false,
      pointColor: 'rgba(0, 166, 90, 1)',
      pointStrokeColor: '#00a65a',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(0,166,90,1)',
      data: [
        20, 22, 25, 28, 26, 23, 21, 19, 22, 24, 27, 30, 32, 28, 25, 22, 20, 23, 26, 29, 31, 29, 26, 23,
        20, 18, 21, 24, 27, 30, 33, 31, 27, 24, 22, 19, 23, 26, 29, 32, 30, 28, 25, 22, 20, 24, 27, 30,
        33, 31, 28, 25, 22, 20, 18, 22, 25, 28, 30, 27, 24, 21, 19, 23, 26, 30, 33, 31, 28, 25, 22, 20
      ]
    },   
  ]
};
