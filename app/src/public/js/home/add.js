"use strict";

const menu = document.querySelector('#menu'),
    price = document.querySelector('#price'),
    category = document.querySelector('#category'),
    menuBtn = document.querySelector('#button');

menuBtn.addEventListener("click",addMenu);

function addMenu(){
    if(!menu.value) return alert("메뉴를 입력해주세요");
    if(!price.value) return alert("가격을 입력해주세요");
    if(!category.value) return alert("카테고리를 입력해주세요");
    if(!(category.value==="한식"||category.value==="분식"||category.value==="양식")) return alert("카테고리를 확인하세요");
    //카테고리 추가 예정
    
    const req = {
        menu : menu.value,
        price : price.value,
        category : category.value,
    };

    console.log(req);

    fetch("/add",{
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    })
    .then((res)=>res.json())
    .then((res)=>{
        if(res.success){
            location.href = '/menu';
        } else {
            alert(res.msg);
        }
    })
    .catch((err)=>{
        console.log(new Error("메뉴 중 에러발생"));
    })
}