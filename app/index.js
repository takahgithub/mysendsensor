// モジュール読み込み
const express = require('express');
const logger = require('./logger');
const AWS = require("aws-sdk");

// expressアプリを生成する
const app = express();

// webフォルダの中身を公開する
app.use(express.static('web'));

// http://localhost:3000/api/v1/list にアクセスしてきたときに
// TODOリストを返す
app.get('/api/v1/list', (req, res) => {
    // クライアントに送るJSONデータ
    const todoList = [
        { title: 'JavaScriptを勉強する', done: true },
        { title: 'Node.jsを勉強する', done: false },
        { title: 'Web APIを作る', done: false }
    ];

    // JSONを送信する
    res.json(todoList);
});

AWS.config.update({region: 'ap-northeast-1'});

var docClient = new AWS.DynamoDB.DocumentClient();
var params = {
    TableName: 'MySensorTag',
};
docClient.scan(params, function(err, data){
    if(err){
        logger.request.info(err);
    }else{
       data.Items.forEach(function(row, index){
        logger.request.info(row.Datetime);
       });
    }
});

// ポート3000でサーバを立てる
app.listen(3000, () => logger.request.info('Listening on port 3000'));
