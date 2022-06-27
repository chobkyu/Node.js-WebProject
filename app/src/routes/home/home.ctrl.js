"use strict";


//가라데이터
const users = {
    id : ["1","2","3"],
    pw : ["1","2","3"],
};

const output = { //페이지를 렌더링 해서 보여주는 호출을 묶음
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req,res) => {
        res.render("home/login");
    },
};

const process = {
    login : (req, res) => {
        const id = req.body.id,
            pw = req.body.pw;

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pw[idx]===pw){
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg : "로그인에 실패하였습니다",
        });
        
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