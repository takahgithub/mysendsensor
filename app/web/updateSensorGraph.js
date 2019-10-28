function updateSensorGraph() {
    // APIからセンサーデータを取得し、センサーデータのグラフを更新する

    const datetimeFormat = 'YYYY-MM-DDTHH:mm:ss';
    const apiDateFormat = 'YYYY/MM/DD HH:mm:ss';

    // formから開始日時と終了日時を取得
    var startTime = moment(document.getElementById('startTime').value, datetimeFormat);
    var startTimeApiFormat = startTime.format(apiDateFormat);
    var endTime = moment(document.getElementById('endTime').value, datetimeFormat);
    var endTimeApiFormat = endTime.format(apiDateFormat);

    var endTimeApiFormat = endTime.format(apiDateFormat);
    var apiUri = './api/v1/sensordata?startTime=' + startTimeApiFormat + '&endTime=' + endTimeApiFormat;
    fetch(apiUri)
        .then((response) => response.json())
        .then((dataList) => {
            console.log(dataList);
            var ctx = document.getElementById("myTempChart");
            plotTempChart(ctx, dataList.Temp);
            var ctx = document.getElementById("myPressureChart");
            plotPressureChart(ctx, dataList.Pressure);
            var ctx = document.getElementById("myLuxChart");
            plotLuxChart(ctx, dataList.Lux);
            var ctx = document.getElementById("myHumidityChart");
            plotHumidityChart(ctx, dataList.Humidity);
        })
}