"use strict";

function category(menuSelect){
    
    console.log(menuSelect);
    if(menuSelect===""){
        location.href = "/menu?sel=한식";
    }
    
    location.href = "/menu?sel="+menuSelect;
}