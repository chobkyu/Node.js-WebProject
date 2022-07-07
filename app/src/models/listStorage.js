"use strict";

const db = require("../config/db");
const table ='member';


class ListStorage {

    

    getMemberInfo(){  //promise는 시간이 오래걸리는 구문을 실행시킬 때 사용
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM member;";
            db.query(query, (err, rows)=>{
                if(err) reject("${err}");
                console.log(rows+"rrrrr");
                resolve(rows);
            });
            
        });
        

        
    }
}

module.exports = ListStorage;