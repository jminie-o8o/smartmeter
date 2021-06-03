var ctx = document.getElementById('myChart').getContext('2d');
var ctx1 = document.getElementById('myChart1').getContext('2d');
var ctx2 = document.getElementById('myChart2').getContext('2d');
var ctx3 = document.getElementById('myChart3').getContext('2d');

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: [
      '1월',
      '2월',
      '3월',
      '4월',
      '5월',
      '6월',
      '7월',
      '8월',
      '9월',
      '10월',
      '11월',
      '12월',
    ],
    datasets: [
      {
        label: '2021년 사용량',
        data: [228.774, 205.356, 230.61, 220.677, 230.619, 118.0065],
        backgroundColor: ['rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(255,99,132,1)'],
        borderWidth: 1,
      },
      {
        label: '평균 전력 사용량',
        data: [
          232.0006861, 226.6537042, 212.004422, 217.8703576, 202.4775613,
          206.7269491, 202.1642895, 257.1391682, 286.904358, 204.7115224,
          194.7940639, 207.1836629,
        ],
        backgroundColor: ['rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 0.2)'],
        borderWidth: 1,
      },
    ],
  },
  options: {
    maintainAspectRatio: false, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

var myChart1 = new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['월', '화', '수', '목', '금', '토', '일'],
    datasets: [
      {
        label: '요일별 평균 전력 사용량',
        data: [
          0.169590144, 0.158310096, 0.151713427, 0.160387019, 0.166412604,
          0.170034856, 0.178230769,
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    maintainAspectRatio: false, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
var myChart2 = new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['voltage'],
    datasets: [
      {
        label: '# of Votes',
        data: [20, 10],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  },
  options: {
    maintainAspectRatio: false, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
    rotation: 1 * Math.PI,
    circumference: 1 * Math.PI,

    scales: {
      yAxes: [
        {
          display: false,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
var myChart3 = new Chart(ctx3, {
  type: 'bar',
  data: {
    labels: ['현재 사용량', '권장 사용량'],
    datasets: [
      {
        label: '# of Votes',
        data: [118.0065, 206.7269491],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
        borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)'],
        borderWidth: 1,
      },
    ],
  },
  options: {
    maintainAspectRatio: false, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.

    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

function listQ() {
  if (this.value == 1) {
    myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          '1월',
          '2월',
          '3월',
          '4월',
          '5월',
          '6월',
          '7월',
          '8월',
          '9월',
          '10월',
          '11월',
          '12월',
        ],
        datasets: [
          {
            label: '2021년 사용량',
            data: [228.774, 205.356, 230.61, 220.677, 230.619, 118.0065],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(255,99,132,1)'],
            borderWidth: 1,
          },
          {
            label: '평균 전력 사용량',
            data: [
              232.0006861, 226.6537042, 212.004422, 217.8703576, 202.4775613,
              206.7269491, 202.1642895, 257.1391682, 286.904358, 204.7115224,
              194.7940639, 207.1836629,
            ],
            backgroundColor: ['rgba(54, 162, 235, 0.2)'],
            borderColor: ['rgba(54, 162, 235, 0.2)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: false, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  } else if (this.value == 2) {
    myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          '1일',
          '2일',
          '3일',
          '4일',
          '5일',
          '6일',
          '7일',
          '8일',
          '9일',
          '10일',
          '11일',
          '12일',
          '13일',
          '14일',
        ],
        datasets: [
          {
            label: '2021년 6월 사용량',
            data: [
              5.856, 6.96, 8.01, 7.569, 9.084, 8.364, 8.109, 7.218, 6.513,
              7.812, 7.788, 8.19, 7.593, 8.346, 0.174, 7.464, 6.951, 8.586,
              8.37, 8.64, 7.449, 7.908, 7.89, 8.358, 9.312, 9.825, 9.414, 9.315,
              8.949, 7.974,
            ],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(255,99,132,1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: false, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  } else {
    myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          '00:00',
          '00:30',
          '01:00',
          '01:30',
          '02:00',
          '02:30',
          '03:00',
          '03:30',
          '04:00',
          '04:30',
          '05:00',
          '05:30',
          '06:00',
          '06:30',
          '07:00',
          '07:30',
          '08:00',
          '08:30',
          '09:00',
          '09:30',
          '10:00',
          '10:30',
          '11:00',
          '11:30',
          '12:00',
          '12:30',
          '13:00',
          '13:30',
          '14:00',
          '14:30',
          '15:00',
          '15:30',
          '16:00',
          '16:30',
          '17:00',
          '17:30',
          '18:00',
          '18:30',
          '19:00',
          '19:30',
          '20:00',
          '20:30',
          '21:00',
          '21:30',
          '22:00',
          '22:30',
          '23:00',
          '23:30',
        ],
        datasets: [
          {
            label: '2021년 6월 15일 사용량',
            data: [
              0.132, 0.024, 0.036, 0.21, 0.015, 0, 0, 0.132, 0.09, 0, 0, 0.042,
              0.183, 0.003, 0, 0, 0.147, 0.078, 0, 0, 0.699, 0.723, 0.159,
              0.156, 0.162, 0.234, 0.066, 0, 0, 0.081, 0.153, 0, 0, 0, 0.171,
              0.054, 0.102, 0.591, 0.24, 0.231, 0.12, 0.132, 0.189, 0.303,
              0.699, 0.132, 0.129, 0.318,
            ],
            backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            borderColor: ['rgba(255,99,132,1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        maintainAspectRatio: false, // default value. false일 경우 포함된 div의 크기에 맞춰서 그려짐.
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}
document.getElementById('list').onchange = listQ;
