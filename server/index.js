const express = require('express')      // 우리가 npm install 한 express를 가져옴

const app = express()                   // app에 받아온 모듈 저장
const port = process.env.PORT || 3001;  // port 번호 3001 번으로 설정
const db = require('./db')              // 생성한 모듈 가져오기(MongoDB 연결)

app.get('/', (req, res, next) => {      // 해당 url로 접속했을때 실행할 행동 정의해줌
    res.send('hello world!');
});

// MongoDB 연결
db.once('open', function () {
    console.log('DB Connected');
});

// DB 연결중 에러가 있으면 "DB ERROR :" 와 에러를 출력
db.on('error', function (err) {
    console.log('DB ERROR : ', err);
});

app.listen(port, function () {          // 해당 port번호로 리스닝이 성공했을때 실행될 콜백함수이다.
    console.log('server on! ' + port);
});