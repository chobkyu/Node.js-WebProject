"use strict";
/*
const menu = document.querySelector("#menu"),
    price = document.querySelector("#price"),
    menuBtn = document.querySelector("#menuBtn");


menu.addEventListener("click",menuSel);
*/
const pay = document.querySelector('#pay');
const basketList = new Array();

pay.addEventListener("click", ()=>{
    if (confirm("결제하시겠습니까?") == true){ 
        //true는 확인버튼을 눌렀을 때 코드 작성
        var payMoney = 0;  //총 금액
        
        for(var i=0; i<basketList.length;i++){
            console.log(parseInt(basketList[i].menuprice));
            payMoney = payMoney + parseInt(basketList[i].menuprice);
        }
        
        console.log(payMoney);
      
    }else{
        // false는 취소버튼을 눌렀을 때, 취소됨
        console.log("취소되었습니다");
      }
})

function category(menuSelect){
    
    console.log(menuSelect);
    
    /*if(menuSelect===""){
        location.href = "/menu?sel=한식";
    }*/
    
    location.href = "/menu?sel="+menuSelect;
}

function menuSel(menu, price){
    console.log(menu);
    console.log(price);
    
    
    var menuSel = {
        name : menu,
        menuprice : price,
    }

    basketList.push(menuSel);
    
    
}