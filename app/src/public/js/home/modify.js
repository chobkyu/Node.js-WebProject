"use strict";

const menu = document.querySelector('#select-menu'),
    newMenu = document.querySelector('#menu-name'),
    price = document.querySelector('#price'),
    category = document.querySelector('#category'),
    modifyBtn = document.querySelector('#button');

modifyBtn.addEventListener("click", modifyMenu);

function modifyMenu(){
    if(!menu.value) return alert("메뉴를 선택하세요");
    if(!newMenu.value) return alert("메뉴 이름을 입력하세요");
    if(!price.value) return alert("가격을 입력하세요");
    if(!category.value) return alert("카테고리를 입력하세요");

    const req = {
        menu: menu.value,
        newMenu: newMenu.value,
        price: price.value,
        category: category.value
    };

    fetch("/modify", {
        method: "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success){
            location.href = '/menu';
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.log(new Error("메뉴 수정 중 에러 발생"));
    })
}