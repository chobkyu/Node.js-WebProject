"use strict";

//const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");

const output = { //페이지를 렌더링 해서 보여주는 호출을 묶음
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req,res) => {
        res.render("home/login");
    },
    register : (req,res) => {
        res.render("home/register");
    },
};

const process = {
    login : (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        
        return res.json(response);
        // const id = req.body.id,
        //     pw = req.body.pw;
        
        // const users =  UserStorage.getUsers("id","pw");
        
        // const response={};
        // if(users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     if(users.pw[idx]===pw){
        //         response.success = true;
        //         return res.json(response);
                
        //     }
        // }

        // response.success = false;
        // response.msg = "로그인에 실패하셨습니다"
        // return res.json(response);
        
    },

    register : (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    },
};

module.exports = {
    output,
    process,
};
//object에서는 키와 value 값으로 이루어져 있는데 키만 입력하면
//value값에는 key 값과 동일한 값이 입력됨
/* 즉 위 object는 밑에와 같음 
{
    hello : hello,
    login : login,
}*/