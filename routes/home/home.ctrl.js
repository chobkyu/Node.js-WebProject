"use strict";

const hello = (req, res) => {
    res.render("home/index");
};

const login = (req,res) => {
    res.render("home/login");
};

module.exports = {
    hello,
    login,
};
//object에서는 키와 value 값으로 이루어져 있는데 키만 입력하면
//value값에는 key 값과 동일한 값이 입력됨
/* 즉 위 object는 밑에와 같음 
{
    hello : hello,
    login : login,
}*/