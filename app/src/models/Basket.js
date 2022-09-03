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

    async delete(seq){
        try{
            const response = await BasketStorage.delete(seq);
            return response;
        }catch (err) {
            return {success : false, msg : err};
        }
    }

    async order(){
        const order = this.body;
        const num = order.length;
        var orderSeq=0;

        try{
            const response = await BasketStorage.Order(orderSeq);
            return response;
        }catch (err) {
            return {success : false, msg : err};
        }
    }

    async insertOrder(){
        const order = this.body;
        const num = order.length;
        var orderSeq = await this.order();
        orderSeq = orderSeq+1;
        console.log(orderSeq);

        try{
            const response = await BasketStorage.insertOrder(order, num, orderSeq);
            return response;
        }catch (err) {
            return {success : false, msg : err};
        }
    }

}

module.exports = Basket;