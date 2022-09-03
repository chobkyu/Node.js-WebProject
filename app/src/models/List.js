"use strict";

const ListStorage = require("./listStorage");

class List{
    constructor(body){
        this.body = body;
    }

    async getMemberInfo(){
        try{
            const response = await ListStorage.getMemberInfo();
            return response;
        }catch(err){
            return {success : false, msg :err};
        }
    }

    async getSearchMember(key){
        try{
            const response = await ListStorage.getSearchMember(key);
            return response;
        }catch(err){
            return {success : false, msg :err};
        }
    }
    
}

module.exports = List;