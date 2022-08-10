"use strict";

const db = require("../config/db");

class Basket{
    constructor(body){
        this.body = body;
    }

    Order(){
        const order = this.body;
        const num = order.length;
        var orderSeq=0;
        
        return new Promise((resolve,reject) =>{
            const query ="SELECT orderNum FROM basket ORDER BY orderNum DESC LIMIT 1";
            db.query(query,(err, seq)=>{
                if(err) {
                    reject("${err}");
                    console.log("basketstorage에서 오류");
                }
                console.log("num : " + seq[0].orderNum);
                orderSeq = seq[0].orderNum;
                console.log(orderSeq);
                resolve(orderSeq);
            
            });
        });
        
    }
    
           
      
    async insertOrder(){   
        const order = this.body;
        const num = order.length;
        var orderSeq = await this.Order();
        orderSeq = orderSeq+1;
        console.log(orderSeq);
        
        try{
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
        }catch(err){
            return {success : false, msg : err};
        }
            
    }

    selectOrder(){
        
        return new Promise((resolve, reject)=>{
            const query = "select * from basket";
            db.query(query,(err,row) => {
            if(err) reject("${err}");
            resolve(row);
                    
            })
        })
    
    }

    async divideOrder(){
        const rows = await this.selectOrder();
        const orderLen = rows.length-1;
        const last = rows[orderLen].orderNum;
        console.log(last);
        const orderRows = new Array();
        for(var i = 1; i<=last;i++){
            var data = new Object;
            for(var j=0 ;j<=orderLen;j++){
                if(i===rows[j].orderNum){
                    console.log(rows[j].menu + " "+i);
                }
            }
        }

        
    }
}


module.exports = Basket;