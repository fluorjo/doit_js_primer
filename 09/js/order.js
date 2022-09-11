var check=document.querySelector("#shippingInfo");//체크 상자의 id가 shippinginfo

check.addEventListener("click", function(){
    if (check.checked==true) { // check객체의 checked속성은 체크 상자가 체크되면 값이 true가 됨.
        //그래서 조건문 써서 체크됐을 때의 작동 함수를 설정.

        //주문정보의 내용들을 배송 정보에 복사함.
        document.querySelector("#shippingName").value
        =document.querySelector("#billingName").value;
        document.querySelector("#shippingTel").value
        =document.querySelector("#billingTel").value;
        document.querySelector("#shippingAddr").value
        =document.querySelector("#billingAddr").value;
          
    }
    else {
        document.querySelector("#shippingName").value="";
        document.querySelector("#shippingTel").value="";
        document.querySelector("#shippingAddr").value="";
    }
});
