"use strict";

//모듈
const express = require('express');//node_modules에 있는 express 관련 파일 가져옴

const app = express();//express 함수 변환 값 변수에 저장


// 라우팅
const home = require("./src/routes/home"); 

//앱 세팅
app.set("views","./src/views");
app.set("view engine","ejs"); //html 코드를 어떤 엔진으로 해석할지
app.use(express.static(__dirname+'/src/public'));
//폴더 경로 __dirname으로 해야되는데 안되서 일단 이렇게 해둠


app.use("/",home); //use -> 미들 웨어를 등록해주는 메서드

module.exports = app;

