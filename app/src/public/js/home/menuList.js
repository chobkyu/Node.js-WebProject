"use strict";

const menu = document.querySelector("#menu"),
    price = document.querySelector("#price"),
    menuBtn = document.querySelector("#menuBtn");


menuBtn.addEventListener("click",menuSel);

function category(menuSelect){
    
    console.log(menuSelect);
    if(menuSelect===""){
        location.href = "/menu?sel=한식";
    }
    
    location.href = "/menu?sel="+menuSelect;
}

function menuSel(){
    const basketList = new Array();
    
    var menuSel = {
        name : menu.innerHTML,
        menuprice : price.innerHTML,
    }

    console.log(menuSel);
}