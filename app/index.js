// モジュール読み込み
const express = require('express');
const logger = require('./logger');
const AWS = require("aws-sdk");

// expressアプリを生成する
const app = express();

// webフォルダの中身を公開する
app.use(express.static('web'));

AWS.config.update({region: 'ap-northeast-1'});

// http://localhost:3000/api/v1/temperature にアクセスしてきたときにセンサーデータを返す
// クエリで開始日時と終了日時を受け取り、その間の期間のセンサーデータを返す
app.get('/api/v1/sensordata', (req, res) => {
    const startTime = req.query.startTime;
    const endTime = req.query.endTime;
    logger.request.info('startTime:' + startTime + ', endTime:' + endTime);
    
    var docClient = new AWS.DynamoDB.DocumentClient();
    // プライマリキーとソートキーの両方を条件指定してあげる必要がある。ソートキーだけではダメだった
    // #i(ID)がプライマリキー、#d(Datetime)がソートキー
    var params = {
        TableName: 'MySensorTag',
        ExpressionAttributeNames:{'#i': 'ID', '#d': 'Datetime'},
        ExpressionAttributeValues:{
            ':iVal': 'raspi_1',
            ':dMinVal': startTime,
            ':dMaxVal': endTime
        },
        KeyConditionExpression: '#i = :iVal AND #d BETWEEN :dMinVal AND :dMaxVal'
    };
    docClient.query(params, function(err, data){
        if(err){
            logger.request.info(err);
        }else{
            var tempData = [];
            var pressureData = [];
            var luxData = [];
            var humidityData = [];
            data.Items.forEach(function(row, index){
                var oneTempData = {'x': row.Datetime, 'y': row.Temp};
                tempData.push(oneTempData);
                var onePressureData = {'x': row.Datetime, 'y': row.Pressure};
                pressureData.push(onePressureData);
                var oneLuxData = {'x': row.Datetime, 'y': row.Lux};
                luxData.push(oneLuxData);
                var oneHumidityData = {'x': row.Datetime, 'y': row.Humidity};
                humidityData.push(oneHumidityData);
            });
            var sensorData = {
                'Temp': tempData,
                'Pressure': pressureData,
                'Lux': luxData,
                'Humidity': humidityData
            };
            res.json(sensorData);
        }
    });
});

// ポート3000でサーバを立てる
app.listen(3000, () => logger.request.info('Listening on port 3000'));
