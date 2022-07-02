"use strict"

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    pw =document.querySelector("#passWord"),
    pwConfirm =document.querySelector("#confirm-passWord"),
    registerBtn = document.querySelector("#button");
    
registerBtn.addEventListener("click",register);


function register(){
    const req = {
        id : id.value,
        name : name.value,
        pw : pw.value,
        pwConfirm : pwConfirm.value
    };

    console.log(req);
    
    console.log(req);
    console.log(JSON.stringify(req));

    fetch("/register", {
        method:"POST",
        headers :{
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res)=>res.json())
    .then((res)=>{
        if (res.success){
            location.href='/login';
        } else {
            alert(res.msg);
        }
        
    })
    .catch((err)=> {
        console.log(new Error("회원가입 중 에러발생"));
    });
 }