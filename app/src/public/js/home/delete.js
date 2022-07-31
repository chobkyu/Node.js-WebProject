"use strict";

const menu = document.querySelector('#menu'),
    deleteBtn = document.querySelector('#button');

deleteBtn.addEventListener("click", deleteMenu);

function deleteMenu(){
    if(!menu.value) return alert("메뉴를 선택하세요");

    const req = {
        menu: menu.value,
    }

    fetch("/delete", {
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
        console.log(new Error("메뉴 삭제 중 에러 발생"));
    })
}