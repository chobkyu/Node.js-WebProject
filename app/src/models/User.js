"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    async login(){  //async는 비동기 함수 선언 await를 사용하기 위해서
        const client = this.body;
        const user = await UserStorage.getUserInfo(client.id);  //await는 반환받아오는 객체가 promise 객체이기 때문에 기다리기 위해 사용(반환되는데 시간이 걸리기 때문)
        try{
            if(user){
                if(user.id=== client.id && user.pw === client.pw){
                    return {success : true};
                }
                return {success : false, msg : "비밀번호가 틀렸습니다"};
            }
            return {success : false, msg :"존재하지 않는 아이디입니다"};
        }catch(err){
            return {success : false, msg :err};
        }
        
    }

    async register(){
        const client = this.body;
        try{
            const response = await UserStorage.save(client);
            return response;
        }catch (err) {
            return {success : false, msg : err};
        }

    }
}

module.exports = User;