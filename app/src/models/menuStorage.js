"use strict";

const db = require("../config/db");

class Menu{
    getMenuHan(category){
        return new Promise((resolve, reject)=>{
            const query = "select * from menu where category = ?";
            db.query(query,[category],(err, rows)=>{
                if(err) {
                    reject("${err}");
                    console.log("menustorage에서 오류");
                }
                //console.log(rows);
                resolve(rows);
            });
        });
    }
}

module.exports = Menu;