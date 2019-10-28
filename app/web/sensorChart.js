var tempOptions = {
    title: {
        display: true,
        text: '室温'
    },
    scales: {
        xAxes: [{        
            scaleLabel: {             
                display: true,          
                labelString: '時間' 
            },
            type: 'time'
        }],
        yAxes: [{        
            scaleLabel: {             
                display: true,          
                labelString: '温度' 
            },
            ticks: {
                //suggestedMax: 100,
                //suggestedMin: 0,
                //stepSize: 10,
                //callback: function(value, index, values){
                //  return  value +  '点'
                //}
            }
        }]
    }
};

var pressureOptions = {
    title: {
        display: true,
        text: '気圧'
    },
    scales: {
        xAxes: [{        
            scaleLabel: {             
                display: true,          
                labelString: '時間' 
            },
            type: 'time'
        }],
        yAxes: [{        
            scaleLabel: {             
                display: true,          
                labelString: '気圧' 
            },
            ticks: {
                //suggestedMax: 100,
                //suggestedMin: 0,
                //stepSize: 10,
                //callback: function(value, index, values){
                //  return  value +  '点'
                //}
            }
        }]
    }
};

var luxOptions = {
    title: {
        display: true,
        text: '明るさ'
    },
    scales: {
        xAxes: [{        
            scaleLabel: {             
                display: true,          
                labelString: '時間' 
            },
            type: 'time'
        }],
        yAxes: [{        
            scaleLabel: {             
                display: true,          
                labelString: '明るさ' 
            },
            ticks: {
                //suggestedMax: 100,
                //suggestedMin: 0,
                //stepSize: 10,
                //callback: function(value, index, values){
                //  return  value +  '点'
                //}
            }
        }]
    }
};

var humidityOptions = {
    title: {
        display: true,
        text: '湿度'
    },
    scales: {
        xAxes: [{        
            scaleLabel: {             
                display: true,          
                labelString: '時間' 
            },
            type: 'time'
        }],
        yAxes: [{        
            scaleLabel: {             
                display: true,          
                labelString: '湿度' 
            },
            ticks: {
                //suggestedMax: 100,
                //suggestedMin: 0,
                //stepSize: 10,
                //callback: function(value, index, values){
                //  return  value +  '点'
                //}
            }
        }]
    }
};

function plotTempChart(ctx, tempData) {
    var data = {
        datasets: [
          {
            label: '温度',
            data: tempData,
            backgroundColor: 'RGBA(225,95,150, 1)',
          }
        ]
      };
      var chartdata = {
        type: 'scatter', 
        data: data,
        options: tempOptions
      };

      // グラフ作成
      var myTempChart = new Chart(ctx, chartdata);
}

function plotPressureChart(ctx, pressureData) {
    var data = {
        datasets: [
          {
            label: '気圧',
            data: pressureData,
            backgroundColor: 'RGBA(225,95,150, 1)',
          }
        ]
      };
      var chartdata = {
        type: 'scatter', 
        data: data,
        options: pressureOptions
      };

      // グラフ作成
      var myPressureChart = new Chart(ctx, chartdata);
}

function plotLuxChart(ctx, luxData) {
    var data = {
        datasets: [
          {
            label: '明るさ',
            data: luxData,
            backgroundColor: 'RGBA(225,95,150, 1)',
          }
        ]
      };
      var chartdata = {
        type: 'scatter', 
        data: data,
        options: luxOptions
      };

      // グラフ作成
      var myLuxChart = new Chart(ctx, chartdata);
}

function plotHumidityChart(ctx, humidityData) {
    var data = {
        datasets: [
          {
            label: '湿度',
            data: humidityData,
            backgroundColor: 'RGBA(225,95,150, 1)',
          }
        ]
      };
      var chartdata = {
        type: 'scatter', 
        data: data,
        options: humidityOptions
      };

      // グラフ作成
      var myHumidityChart = new Chart(ctx, chartdata);
}