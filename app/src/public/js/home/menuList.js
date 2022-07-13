"use strict";

function category(menuSelect){
    
    console.log(menuSelect);
    if(menuSelect===""){
        location.href = "/menu";
    }
    
    location.href = "/"+menuSelect;
}