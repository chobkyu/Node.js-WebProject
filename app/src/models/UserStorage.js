"use strict";

const db = require("../config/db");

class UserStorage {

    

    static getUserInfo(id){  //promise는 시간이 오래걸리는 구문을 실행시킬 때 사용
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM users where id =?;";
            db.query(query,[id], (err, data)=>{
                if(err) reject("${err}");
                resolve(data[0]);
            });
            
        });
        

        
    }



    static async save(userInfo) {
        return new Promise((resolve, reject) => {
            const query = "insert into users(id,name,pw) values(?,?,?);";
            db.query(query,[userInfo.id,userInfo.name,userInfo.pw], (err)=>{
                if(err) reject("${err}");
                resolve({success : true});
            });
            
        });
    }
}

module.exports = UserStorage;
