"use strict";

const ListStorage = require("./listStorage");

class List{
    async member(){
        const member = await ListStorage.getMemberInfo();
        try{
            return member;
        }catch(err){
            console.log(err+" list.js에서 에러");
        }
       
    }
}

module.exports = List;