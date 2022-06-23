const express = require('express')//node_modules에 있는 express 관련 파일 가져옴

const app = express();//express 함수 변환 값 변수에 저장

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
}); //여기서 html 파일 가져오는 듯

app.listen(8080, function(){//8080 포트로 서버 오픈
    console.log('server start on 8080');
});