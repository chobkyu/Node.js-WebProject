"use strict";

//모듈
const express = require('express');//node_modules에 있는 express 관련 파일 가져옴
const bodyParser= require("body-parser");
const app = express();//express 함수 변환 값 변수에 저장


// 라우팅
const home = require("./src/routes/home"); 

//앱 세팅
app.set("views","./src/views");
app.set("view engine","ejs"); //html 코드를 어떤 엔진으로 해석할지
app.use(express.static(__dirname+'/src/public'));
app.use(express.json());
//url을 통해 전달되는 테이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(express.urlencoded({extended : true}));


//app.get(routes.getpost, getpost);


app.use("/",home); //use -> 미들 웨어를 등록해주는 메서드

module.exports = app;

