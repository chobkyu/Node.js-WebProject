"use strict";

const ListStorage = require("./listStorage");

class List{
    async member(){
        const member = await ListStorage.getMemberInfo();
        return member;
    }
}

module.exports = List;