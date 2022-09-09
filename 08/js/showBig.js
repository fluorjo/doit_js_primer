var bigPic = document.querySelector("#cup"); //큰 이미지 가져옴
var smallPics=document.querySelectorAll(".small"); //작은 이미지를 가져옴(노드 리스트)
//var smallPics=document.querySelectorAll("small-pic>img"); 이렇게 써도 됨. 

for(var i=0; i<smallPics.length; i++) { //노드 리스트의 각 요소에 접근
    smallPics[i].onclick=showBig;

    //smallPics[i].onclick=funtion(event){bigPic.src=this.src;});}라고 해도 됨.
}



function showBig(){
    var newPic= this.src; //클릭 이벤트가 발생한 대상의 src 속성 값 가져옴
    bigPic.setAttribute("src",newPic);//newPic 값을 큰 이미지의 src 속성에 할당
    //bigPic.src=newPic; 으로 해도 됨.
}