const ctx = document.getElementById('myChart').getContext('2d');

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [{

            data: [600, 900, 600, 1100, 700, 1500, 1200, 2000],
            backgroundColor: [
                '#6A798D',
                '#6A798D',
                '#6A798D',
                '#6A798D',
                '#6A798D',
                '#6A798D',
                '#6A798D',
                '#6A798D',
            ],
            borderColor: [
                '#31A9FE',
                '#31A9FE',
                '#31A9FE',
                '#31A9FE',
                '#31A9FE',
                '#31A9FE',
                '#31A9FE',

            ],

        }]
    },
    options: {

        animations: {
            tension: {
                duration: 1000,
                easing: 'linear',
                from: 0.6,
                to: 0.4,
                loop: true

            }
        },
        tension: 0.4,
        scales: {
            y: {

                grid: {

                    display: false,
                    drawOnChartArea: false,
                    drawBorder: false,

                },
                max: 2000,
                min: 500,
                ticks: {
                    stepSize: 500
                }

            },

            x: {
                grid: {
                    display: false,
                    drawOnChartArea: false,
                    drawBorder: false,

                }
            }
        },

        layouts: {
            backgroundColor: "#172231"
        },

        plugins: {
            legend: {
                display: false,

            },

            tooltip: {
                callbacks: {
                    title: function(e) {
                        let day = e[0].dataIndex;
                        return days[day];
                    },

                    label: function(e) {
                        return '$' + e.formattedValue;
                    }




                },
                mode: 'index',
                intersect: false,
                backgroundColor: '#31A9FE',
                displayColors: false,
                titleAlign: 'center',
                titleColor: '#172231',
                bodyColor: '#172231',

                titleFont: {
                    weight: "400",
                    size: 12,
                },

                bodyFont: {
                    size: 16,
                    weight: 'bold',

                }


            }



        }


    }
});





$(document).ready(function() {
    $(".t-bar , .close-btn").click(function() {
        $(".customMenu").animate({
            width: "toggle"
        });
    });
});