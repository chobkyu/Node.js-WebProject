"use strict";

const db = require("../config/db");

class Menu{
    constructor(body){
        this.body = body;
    }
    
    getMenu(category){
        console.log(category+"는 뭘까요");
        if(category===undefined){
            category="한식";
        }
        return new Promise((resolve, reject)=>{
            const query = "select * from menu where category = ?";
            db.query(query,[category],(err, rows)=>{
                if(err) {
                    reject("${err}");
                    console.log("menustorage에서 오류");
                }
                //console.log(rows);
                resolve(rows);
            });
        });
    }

    async menu(){
        const menuAdd = this.body;
        try{
            return new Promise((resolve, reject) => {
                const query = "insert into menu(menu,price,category) values(?,?,?);";
                db.query(query,[menuAdd.menu,menuAdd.price,menuAdd.category], (err) =>{
                    if(err) reject("${err}");
                    resolve({success : true});
                })
            });
        }catch (err) {
            return {success : false, msg : err};
        }
    }

    async deleteMenu(){
        const deleteMenu = this.body;
        try{
            return new Promise((resolve, reject) => {
                const query = "delete from menu where menu=?;";
                db.query(query, deleteMenu.menu, (err) =>{
                    if(err) reject("${err}");
                    resolve({success : true});
                })
            });
        }catch (err) {
            return {success : false, msg : err};
        }
    }

    async modifyMenu(){
        const modifyMenu = this.body;
        try{
            return new Promise((resolve, reject) => {
                const query = "update menu set menu=?, price=?, category=? where menu=?;";
                db.query(query,[modifyMenu.newMenu, modifyMenu.price, modifyMenu.category, modifyMenu.menu], (err) =>{
                    if(err) reject("${err}");
                    resolve({success : true});
                })
            });
        }catch (err) {
            return {success : false, msg : err};
        }
    }
}

module.exports = Menu;