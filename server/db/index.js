const mongoose = require('mongoose')        // npm install 한 mongoose 을 가져옴

mongoose.set('useFindAndModify', false);    // mongoose가 제공하는 함수를 사용하기 위한 set
mongoose.set('useCreateIndex', true);       // mongoose 필요없는 경고 메세지 제거
mongoose.set('useUnifiedTopology', true);   // mongoose 필요없는 경고 메세지 제거

mongoose
    .connect('mongodb://127.0.0.1:27017/addr', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })
                                            // mongoose 를 사용하여 MongoDB에 
                                            // 연결하고 addr이라는 Collection과 연결
                                            // 에러 발생시 콘솔에 에러 출력
const db = mongoose.connection
                                            // db객체에 MongoDB연결 정보 담가

module.exports = db                         // 모듈 생성