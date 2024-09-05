var express = require('express');
var app = express();
const port = 3000;

// 현재 실행 중인 npm 스크립트를 감지
const npmScript = process.env.npm_lifecycle_event;

// 서버 시작
var server = app.listen(port, function () {
    if (npmScript === 'start') {
        console.log('Server is running with npm start on Port: ' + port);
    } else if (npmScript === 'dev') {
        console.log('Server is running with npm run dev on Port: ' + port);
    } else {
        console.log('Server is running on Port: ' + port);
    }
});

// 기본 경로 설정
app.get('/', function (req, res) {
    res.send('Hello I\'m In Docker Container Now!');
});