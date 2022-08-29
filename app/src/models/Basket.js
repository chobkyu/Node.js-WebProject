"use strict";

const BasketStorage = require("./basketStorage");

class Basket{
    constructor(body){
        this.body = body;
    }

async divideOrder(){
    const rows = await BasketStorage.selectOrder();
    const orderLen = rows.length-1;
    const last = rows[orderLen].orderNum;
    console.log(last);

    const orderRows = new Array();
    for(var i = 1; i<=last; i++){
        const temp = new Array();
        for(var j=0; j<=orderLen; j++){
            var data = new Object;
            if(i===rows[j].orderNum){
                data.menu = rows[j].menu;
                data.orderNum = rows[j].orderNum;
                data.seq = rows[j].seq;
                if(data.seq!==undefined){
                    temp.push(data);
                }
            }
        }
        console.log(temp.length);
        if(temp.length>0){
            orderRows.push(temp);
        }
    }
    return orderRows;
}
}

module.exports = Basket;