"use strict";

//const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");
const List = require("../../models/listStorage");
const Menu = require("../../models/menuStorage");
const Basket = require("../../models/basketStorage");

//
const db = require("../../config/db");
const { getMenuHan } = require("../../models/menuStorage");


const output = { //페이지를 렌더링 해서 보여주는 호출을 묶음
    home: (req, res) => {
        console.log(req.session.userId + "세션값");
        
        res.render("home/index",{sessionId : req.session.userId});
    },
    login: (req,res) => {
        const sessionId= req.session.userId;  //세션 아이디를 받아옴
         if(sessionId!=null){  
             res.render("home/index",{sessionId : req.session.userId});
         }
        res.render("home/login",{sessionId : sessionId});
    },
    register : (req,res) => {
        res.render("home/register");
    },

    list : async (req,res) => {
        /*const sql = "select * from member";
        db.query(sql,(err,rows)=>{
            if(err) console.error(err);
            console.log(rows[0].name);
            res.render("home/list",{rows:rows});
        });*/
        const member = new List();  //member 리스트
        const key = req.query.key;
        console.log(key);
        if(key===undefined){
            const rows = await member.getMemberInfo();
            
            res.render("home/list",{rows:rows});
        }
        else{  //검색 기능
            const searchRow = await member.getSearchMember(key);
            
            res.render("home/list",{rows:searchRow});
        }
        
        
        
    },
    menu : async (req,res)=>{
        const category = req.query.sel;
       
        const menu = new Menu();
        
        const rows = await menu.getMenu(category);
        console.log(rows);
        res.render("home/menu",{rows:rows});
    }, //장바구니 기능, 결제 구현해야함

    add : (req, res) => {   //메뉴 추가
        res.render("home/add");
    },

    manage : (req, res) => {
        if(req.session.userId==="manage"){
            res.render("home/manage");
        }
        else{
            res.render("home/index");
        }
    },
    logOut : (req, res) => {
        if(req.session.userId){
            console.log('로그아웃');
           // alert("로그아웃");
            req.session.destroy(function(err){
                if(err) throw err;
                console.log('세션 삭제하고 로그아웃됨');
                res.render('home/index');
            });
        }
        else{
            //alert("로그인 상태 아님");
            console.log('로그인 상태 아님');
            res.render('home/index');
        }
    },

    delete : (req, res) => {   //메뉴 삭제
        res.render("home/delete");
    },

    modify : (req, res) => {   //메뉴 수정
        res.render("home/modify");
    },

    cook : (req, res) => {
        res.render("home/cook");
    },
   


    /*
    basket : (req, res) => {
        res.render("home/basket");
    }*/

/*
    menuBunsick : async (req,res)=>{
        const menu = new Menu();
        const category ="분식";
        const rows = await menu.getMenuHan(category);
        res.render("home/menu",{rows:rows});
    },

    menuYangsick : async (req,res)=>{
        const menu = new Menu();
        const category ="양식";
        const rows = await menu.getMenuHan(category);
        res.render("home/menu",{rows:rows});
    },*/
};

const process = {
    login : async (req, res) => {
        const user = new User(req.body);
        const response = await user.login();
        req.session.userId=req.body.id;
        
        return res.json(response);
        // const id = req.body.id,
        //     pw = req.body.pw;
        
        // const users =  UserStorage.getUsers("id","pw");
        
        // const response={};
        // if(users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     if(users.pw[idx]===pw){
        //         response.success = true;
        //         return res.json(response);
                
        //     }
        // }

        // response.success = false;
        // response.msg = "로그인에 실패하셨습니다"
        // return res.json(response);
        
    },

    register : async (req, res) => {
        const user = new User(req.body);
        const response = await user.register();
        return res.json(response);
    },

    add : async (req, res) => {
        const menuAdd = new Menu(req.body);
        const response = await menuAdd.menu();
        return res.json(response);
    },


    delete : async (req, res) => {
        const deleteMenu = new Menu(req.body);
        const response = await deleteMenu.deleteMenu();
        return res.json(response);
    },

    modify : async (req, res) => {
        const modifyMenu = new Menu(req.body);
        const response = await modifyMenu.modifyMenu();
        return res.json(response);
    },

    basket : (req, res) => {
        const list = req.body;
        
        //console.log(list);

        const rows = list;
        
        res.render("home/basket",{rows:rows});
               
    },

    cook : async (req, res) => {
        //console.log(req.body[0].name+" fasfsdf");
        const order = new Basket(req.body);
        const response = await order.insertOrder();
        return res.json(response);
    },  

};

module.exports = {
    output,
    process,
};


//object에서는 키와 value 값으로 이루어져 있는데 키만 입력하면
//value값에는 key 값과 동일한 값이 입력됨
/* 즉 위 object는 밑에와 같음 
{
    hello : hello,
    login : login,
}*/