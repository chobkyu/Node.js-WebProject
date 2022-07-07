"use strict";

const ListStorage = require("./listStorage");

class List{
    async member(){
        const member = await ListStorage.getMemberInfo();
        try{
            return member;
        }catch(err){
            console.log(err+"aasdfdasf");
        }
       
    }
}

module.exports = List;