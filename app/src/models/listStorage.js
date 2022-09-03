"use strict";

const db = require("../config/db");
const table ='member';


class ListStorage {
    static async getMemberInfo(){  //promise는 시간이 오래걸리는 구문을 실행시킬 때 사용
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM member;";
            db.query(query, (err, rows)=>{
                if(err) {
                    reject("${err}");
                    console.log(rows+" ListStorage에서 에러");
                }
                resolve(rows);
            });
        });
    }

    static async getSearchMember(key){
        return new Promise((resolve, reject)=>{
            const query = "SELECT * FROM member where name = ?";
            db.query(query,[key],(err,rows)=>{
                if(err){
                    reject("${err}");
                    console.log(rows+" ListStorage의 getSearchMember에서 에러");
                }
                resolve(rows);
            }) 
        });
    }
}

module.exports = ListStorage;