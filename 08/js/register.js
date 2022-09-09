function newRegister(){ //신청 버튼 눌렀을 때 실행될 함수
    var newP = document.createElement("p"); //새 p 요소 만들기

//p 태그의 내용에 해당하는 텍스트 노드 만들기
//p 태그에서는 사용자가 입력한 이름(텍스트 필드의 내용)을 표시. 
    var userName =document.querySelector("#userName");//텍스트 필드에서 입력한 이름을 가져와 userName변수에 저장.
    var newText=document.createTextNode(userName.value); //새 텍스트 노드 만들기. 이때 username 값 사용.

    newP.appendChild(newText); //newText노드를 newP노드의 자식 노드로 연결
    var nameList=document.querySelector("#nameList");//namelist 가져옴. 이건 이미 html에 지정돼있음
    nameList.appendChild(newP); 
    userName.value="";//다음 이름 입력하도록 텍스트 필드 비우기
}
