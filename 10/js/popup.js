function openPop() {
    var newWin=window.open("popup.html",'','width=400,height=400');
    if(newWin==null){
        alert('팝업 차단돼있음');
    }
}

window.onload=openPop;
//onload=윈도우 실행 시 바로 실행되게 함.