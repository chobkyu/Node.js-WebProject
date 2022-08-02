"use strict";
/*
const menu = document.querySelector("#menu"),
    price = document.querySelector("#price"),
    menuBtn = document.querySelector("#menuBtn");


menu.addEventListener("click",menuSel);
*/
const pay = document.querySelector('#pay');
const basketList = new Array();

function pay_Money(){
    
    if(confirm("결제하시겠습니까?") ==true){
        var payMoney =0;
    }
    for(var i=0; i<basketList.length;i++){
        console.log(parseInt(basketList[i].menuprice));
        payMoney=payMoney+parseInt(basketList[i].menuprice);

    }  //이렇게 하나하나 구해서 넘기지 말고
    console.log(payMoney);

    //ajax로 넘기면 새로고침이 안되서 다음페이지로 이동하지 못하기 때문에 자바스크립트에서 post 방식으로 직접 넘겼습니다
    var form = document.createElement('form');
    form.setAttribute('method','post');
    form.setAttribute('action','/basket');
    //document.characterSet="utf-8";

    for(var i=0; i<basketList.length;i++){
        var hiddenField = document.createElement("input");
        var hiddenField2 = document.createElement("input");
        
        hiddenField.setAttribute("type","hidden");
        hiddenField.setAttribute("name","name");
        hiddenField.setAttribute("value",basketList[i].name);

        hiddenField2.setAttribute("type","hidden");
        hiddenField2.setAttribute("name","price");
        hiddenField2.setAttribute("value",basketList[i].menuprice);
        
        
        form.appendChild(hiddenField);
        form.appendChild(hiddenField2);
    }
    document.body.appendChild(form);
    form.submit();

    /*
    fetch("/pay",{    //이렇게 리스트 통째로 넘기세요 서버에서 처리해서 넘길겁니다
        method:"POST",
        headers :{
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(basketList),
    })/*
    .then((res)=>res.json())
    .then((res)=>{
        
        location.href='/basket?option='+res;
        
    })*/
}

/*pay.addEventListener("click", ()=>{
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
})*/

function category(menuSelect){
    
    console.log(menuSelect);
    
    /*if(menuSelect===""){
        location.href = "/menu?sel=한식";
    }*/
    location.href = "/menu?sel="+menuSelect;

}
function 임시(){
   const a =basketList.length;
    for(var i=0;i<a;i++){
        //document.querySelector('div.navbar').innerHTML=basketList[i].name;
        console.log(basketList.length);
        document.querySelector('div.basket').innerHTML=(basketList[i].name);
        "<br>";
        console.log(basketList.length);
    }
   /* console.log(basketList.length);
    console.log(1);*/
}

function menuSel(menu, price){
    console.log(menu);
    console.log(price);
    
    
    var menuSel = {
        name : menu,
        menuprice : price,
    }

    basketList.push(menuSel);
    
    임시();

    
}

function fetch_page(name){
    fetch('menu?sel='+name).then(function(response){
        response.text().then(function(text){
            document.querySelector('body').innerHTML=text;
        })
    })
}