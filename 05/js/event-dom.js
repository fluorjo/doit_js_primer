var coverImage=document.querySelector('#cover');
coverImage.onclick=function(){
    alert('누름');
}   ;
coverImage.onmouseover=function(){
    coverImage.style.border='5px black solid';//사진에 검은색 테두리 그리기.
    };  
coverImage.onmouseout=function(){
    coverImage.style.border='';//마우스 치우면 테두리 없애기
    };