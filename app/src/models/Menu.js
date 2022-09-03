"use strict";

const { deleteMenu } = require("./menuStorage");
const MenuStorage = require("./menuStorage");

class Menu{
    constructor(body){
        this.body = body;
    }
    
    async getMenu(category){
        if(category===undefined){
            category="한식";
        }
        try{
            const response = await MenuStorage.getMenu(category);

            return response;
        }catch(err){
            return {success : false, msg :err};
        }
    }

    async menu(){
        const menuAdd = this.body;
        try{
            const response = await MenuStorage.menu(menuAdd);

            return response;
        }catch(err){
            return {success : false, msg :err};
        }
    }

    async deleteMenu(){
        const deleteMenu = this.body;
        try{
            const response = await MenuStorage.deleteMenu(deleteMenu);

            return response;
        }catch(err){
            return {success : false, msg :err};
        }
    }

    async modifyMenu(){
        const modifyMenu = this.body;
        try{
            const response = await MenuStorage.modifyMenu(modifyMenu);

            return response;
        }catch(err){
            return {success : false, msg :err};
        }
    }
}

module.exports = Menu;