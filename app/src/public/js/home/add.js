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

    const req = {
        menu : menu.value,
        price : price.value,
        category : category.value,
    };

    console.log(req);

}