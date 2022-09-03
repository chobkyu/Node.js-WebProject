"use strict";

const db = require("../config/db");

class BasketStorage{
    constructor(body){
        this.body = body;
    }

    static async Order(orderSeq){
        return new Promise((resolve,reject) =>{
            const query ="SELECT orderNum FROM basket ORDER BY orderNum DESC LIMIT 1";
            db.query(query,(err, seq)=>{
                if(err) {
                    reject("${err}");
                    console.log("basketstorage에서 오류");
                }
                orderSeq = seq[0].orderNum;
                resolve(orderSeq);
            });
        });
        
    }
    
    static async insertOrder(order, num, orderSeq){
        return new Promise((resolve, reject) =>{
            const query = "insert into basket(menu,price,orderNum) values(?,?,?);";
            for(var i = 0; i<num ; i++){
                console.log(order[i].name);
                db.query(query,[order[i].name,order[i].price,orderSeq], (err) =>{
                    if(err) reject("${err}");
                    resolve({success : true});
                })
            }
        });
    }

    static async selectOrder(){
        return new Promise((resolve, reject)=>{
            const query = "select * from basket";
            db.query(query,(err,row) => {
            if(err) reject("${err}");
            resolve(row);
            })
        })
    }

    static async delete(seq){
        return new Promise((resolve, reject) => {
            const query = "delete from basket where orderNum=?;";
            db.query(query, seq, (err) =>{
                if(err) reject("${err}");
                resolve({success : true});
            })
        });
    }
}


module.exports = BasketStorage;