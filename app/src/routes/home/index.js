"use strict";

const express = require('express');//node_modules에 있는 express 관련 파일 가져옴

const router = express.Router();//express 함수 변환 값 변수에 저장

const ctrl = require("./home.ctrl");


router.get('/', ctrl.hello); //여기서 html 파일 가져오는 듯

router.get('/login',ctrl.login);

module.exports=router;