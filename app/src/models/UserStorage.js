"use strict";

const fs = require("fs").promises; //파일을 불러오기 위함

class UserStorage {

    static #getUserInfo(data, id){
        const users = JSON.parse(data);

        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); //=> [id, pw, name] 꼴로 배열이 만들어짐
        const userInfo = userKeys.reduce((newUser, info)=>{
                newUser[info] = users[info][idx];
                return newUser;
        },{});

        return userInfo;
    }

    static getUsers(...fields){  //field는 파라미터 값이 배열로 넘어오는 변수 앞에 ...해줘야함
        //const users = this.#users;
        const newUsers = fields.reduce((newUsers,field) =>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
       
        return newUsers;
    }

    static getUserInfo(id){
        
        return fs.readFile("./src/databases/users.json")
        .then((data)=> {
            return this.#getUserInfo(data, id);
        })
        .catch(console.error);

        
    }



    static save(userInfo) {
         //const users = this.#users;
         users.id.push(userInfo.id);
         users.name.push(userInfo.name);
         users.pw.push(userInfo.pw);
         return { success : true };
    }
}

module.exports = UserStorage;
