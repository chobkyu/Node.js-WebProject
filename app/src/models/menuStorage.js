"use strict";

const db = require("../config/db");

class Menu{
    constructor(body){
        this.body = body;
    }
    
    static async getMenu(category){
        return new Promise((resolve, reject)=>{
            const query = "select * from menu where category = ?";
            db.query(query,[category],(err, rows)=>{
                if(err) {
                    reject("${err}");
                    console.log("menustorage에서 오류");
                }
                resolve(rows);
            });
        });
    }

    static async menu(menuAdd){
        return new Promise((resolve, reject) => {
            const query = "insert into menu(menu,price,category) values(?,?,?);";
            db.query(query,[menuAdd.menu,menuAdd.price,menuAdd.category], (err) =>{
                if(err) reject("${err}");
                resolve({success : true});
            })
        });
    }

    static async deleteMenu(deleteMenu){
        return new Promise((resolve, reject) => {
            const query = "delete from menu where menu=?;";
            db.query(query, deleteMenu.menu, (err) =>{
                if(err) reject("${err}");
                resolve({success : true});
            })
        });
    }

    static async modifyMenu(modifyMenu){
        return new Promise((resolve, reject) => {
            const query = "update menu set menu=?, price=?, category=? where menu=?;";
            db.query(query,[modifyMenu.newMenu, modifyMenu.price, modifyMenu.category, modifyMenu.menu], (err) =>{
                if(err) reject("${err}");
                resolve({success : true});
            })
        });
    }
}

module.exports = Menu;