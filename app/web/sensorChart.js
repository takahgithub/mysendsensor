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

var tempChart = null;
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
    // 先にインスタンスを破棄しておかないと、グラフが二重に描画されてしまう
    // インスタンスはグローバル変数にしてある
    if (tempChart) {
        tempChart.destroy();
    }
    tempChart = new Chart(ctx, chartdata);
}

var pressureChart = null;
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
    // 先にインスタンスを破棄しておかないと、グラフが二重に描画されてしまう
    // インスタンスはグローバル変数にしてある
    if (pressureChart) {
        pressureChart.destroy();
    }
    pressureChart = new Chart(ctx, chartdata);
}

var luxChart = null;
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
    // 先にインスタンスを破棄しておかないと、グラフが二重に描画されてしまう
    // インスタンスはグローバル変数にしてある
    if (luxChart) {
        luxChart.destroy();
    }
    luxChart = new Chart(ctx, chartdata);
}

var humidityChart = null;
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
    // 先にインスタンスを破棄しておかないと、グラフが二重に描画されてしまう
    // インスタンスはグローバル変数にしてある
    if (humidityChart) {
        humidityChart.destroy();
    }
    humidityChart = new Chart(ctx, chartdata);
}