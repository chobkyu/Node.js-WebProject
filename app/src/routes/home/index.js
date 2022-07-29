"use strict";

const express = require('express');//node_modules에 있는 express 관련 파일 가져옴

const router = express.Router();//express 함수 변환 값 변수에 저장

const ctrl = require("./home.ctrl");

//router가 서버에서 주고 받고 하는 API 역할인듯 하다
router.get('/', ctrl.output.home); //여기서 html 파일 가져오는 듯

router.get('/login',ctrl.output.login);

router.get("/register" ,ctrl.output.register);

router.get("/list" ,ctrl.output.list);

router.get("/css",ctrl.output.css);

router.get("/manage",ctrl.output.manage);

router.get("/logOut",ctrl.output.logOut);
//menu get 방식 리스트 보기
router.get("/menu", ctrl.output.menu);

//add get
router.get("/add", ctrl.output.add);

//로그인 post
router.post('/login',ctrl.process.login);

//회원가입 post
router.post("/register" ,ctrl.process.register);

//메뉴등록 post
router.post("/add" , ctrl.process.add);

//결제 post
router.post("/pay", ctrl.process.pay);


module.exports=router;