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
      label: 'ATM系統',
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
      label: 'TCR系統',
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
      label: '門禁系統',
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
    {
      label: '監控系統',
      backgroundColor: 'rgba(243, 156, 18, 1)',
      borderColor: 'rgba(243, 156, 18, 1)',
      pointRadius: false,
      pointColor: 'rgba(243, 156, 18, 1)',
      pointStrokeColor: '#f39c12',
      pointHighlightFill: '#fff',
      pointHighlightStroke: 'rgba(243,156,18,1)',
      data: [
        12, 14, 16, 18, 17, 15, 13, 11, 14, 16, 19, 21, 20, 18, 15, 12, 10, 13, 15, 17, 20, 19, 16, 14,
        11, 9, 12, 15, 18, 20, 22, 21, 18, 15, 13, 10, 14, 17, 19, 22, 20, 17, 14, 12, 15, 18, 21, 23,
        24, 22, 19, 16, 13, 11, 14, 16, 18, 21, 20, 17, 14, 12, 15, 17, 20, 23, 21, 18, 15, 13, 11
      ]
    }
  ]
};
