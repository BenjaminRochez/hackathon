export const chainChartData = {
    type: 'line',
    data: {
        labels: ["12:00", "16:00", "20:00", "00:00", "04:00", "08:00", "12:00", "16:00", "20:00", "00:00", "04:00", "08:00", "12:00"],
        datasets: [{
            data: [2.5, 2.6, 2.7, 2.4, 2.2, 2, 2.5, 2.8, 2.6, 2.7, 2.4, 2.2, 2, 2.5],
            label: "Chaine du froid",
            borderColor: "rgba(186, 231, 128, 1)",
            fill: true,
            backgroundColor: "rgba(186, 231, 128, 0.4)"
        }
        ]
    },
    options: {
        legend: {
            display: false
         },
        title: {
            display: false,
            text: 'Chaine du froid'
        },
        scales: {
            // The following will affect the vertical lines (xAxe) of your dataset
            xAxes: [{
                gridLines: {
                    // You can change the color, the dash effect, the main axe color, etc.
                    borderDash: [8, 4],
                    color: "rgba(0,0,0,0)"
                }
            }],
    
            // And this will affect the horizontal lines (yAxe) of your dataset
            yAxes: [{
                gridLines: {
                    
                    color: "rgba(0,0,0,0.3)"
                },
                ticks: {
                    
                    min: 0,
                    max: 6,
                    stepSize: 2,
            
                  }
            }]
        }
    }
}

export default chainChartData;