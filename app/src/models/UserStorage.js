"use strict";

class UserStorage {
    //가라데이터
    static #users = {  //#은 private 변수 선언의 잡스용 버전인듯
        id : ["qudqud97","rtw2343","dafdsf"],
        pw : ["1","2","3"],
        name : ["ghl","adfa","asdf"]
    };

    static getUsers(...fields){  //field는 파라미터 값이 배열로 넘어오는 변수 앞에 ...해줘야함
        const users = this.#users;
        const newUsers = fields.reduce((newUsers,field) =>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
       
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userKeys = Object.keys(users); //=> [id, pw, name] 꼴로 배열이 만들어짐
        const userInfo = userKeys.reduce((newUser, info)=>{
            newUser[info] = users[info][idx];
            return newUser;
        },{});

        return userInfo;
    }
}

module.exports = UserStorage;