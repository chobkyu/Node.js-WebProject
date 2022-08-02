"use strict";

const express = require('express');//node_modules에 있는 express 관련 파일 가져옴

const router = express.Router();//express 함수 변환 값 변수에 저장

const ctrl = require("./home.ctrl");

//router가 서버에서 주고 받고 하는 API 역할인듯 하다
router.get('/', ctrl.output.home); //여기서 html 파일 가져오는 듯

//로그인 페이지 get
router.get('/login',ctrl.output.login);

//회원가입 페이지 get
router.get("/register" ,ctrl.output.register);

//리스트 페이지 get
router.get("/list" ,ctrl.output.list);

//관리자 페이지 get
router.get("/manage",ctrl.output.manage);

//로그아웃 페이지 get
router.get("/logOut",ctrl.output.logOut);

//menu get 방식 리스트 보기
router.get("/menu", ctrl.output.menu);

//add get
router.get("/add", ctrl.output.add);

//delete get
router.get("/delete", ctrl.output.delete);

//modify get
router.get("/modify", ctrl.output.modify);

//로그인 post
router.post('/login',ctrl.process.login);

//회원가입 post
router.post("/register" ,ctrl.process.register);

//메뉴등록 post
router.post("/add" , ctrl.process.add);

//메뉴 삭제 post
router.post("/delete", ctrl.process.delete);

//메뉴 수정 post
router.post("/modify", ctrl.process.modify);

//결제 페이지 post
router.post("/pay", ctrl.process.pay);

module.exports=router;