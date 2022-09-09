//한 요소에 여러 이벤트가 발생할 때 동시에 처리하기 - addEventListener 함수 사용
//addEventListener 함수:이벤트가 발생한 요소에 이벤트 처리기를 연결하는 함수. 
var pic = document.querySelector('#pic');
pic.addEventListener("mouseover",changePic,false);
//1.이벤트 유형: on 안 붙이고 이벤트 이름만 사용
//2.함수: 이벤트 발생 시 실행할 명령을 나열하거나 만들어놓은 함수 연결
//3.캡처 여부:이벤트를 캡처링할지 여부.  true면 캡처링, false면 버블링. 기본값은 false. 
//이벤트 캡쳐링이란:DOM의 부모 노드에서 자식 노드로 이벤트가 전달되는 것
//이벤트 버블링이란:DOM의 자식 노드에서 부모 노드로 이벤트가 전달되는 것. 

pic.addEventListener(
  "mouseout"
  ,originPic
  ,false 
  );


function changePic() {			
  pic.src = "images/boy.png";
}
function originPic() {
  pic.src = "images/girl.png";
}
