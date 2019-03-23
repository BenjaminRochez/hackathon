export const planetChartData = {
    type: 'line',
    data: {
        labels: ["May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            data: [20, 40, 30, 50, 40, 60, 50, 70],
            label: "Sales",
            borderColor: "#3e95cd",
            fill: false
        }
        ]
    },
    options: {
        legend: {
            display: false
         },
        title: {
            display: false,
            text: 'World population per region (in millions)'
        },
        scales: {
            // The following will affect the vertical lines (xAxe) of your dataset
            xAxes: [{
                gridLines: {
                    // You can change the color, the dash effect, the main axe color, etc.
                    borderDash: [8, 4],
                    color: "#348632"
                }
            }],
    
            // And this will affect the horizontal lines (yAxe) of your dataset
            yAxes: [{
                gridLines: {
                    borderDash: [8, 4],
                    color: "#348632"
                }
            }]
        }
    }
}

export default planetChartData;