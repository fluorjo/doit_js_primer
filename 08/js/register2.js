function newRegister(){ //신청 버튼 눌렀을 때 실행될 함수
    var newP = document.createElement("p"); //새 p 요소 만들기

//p 태그의 내용에 해당하는 텍스트 노드 만들기
//p 태그에서는 사용자가 입력한 이름(텍스트 필드의 내용)을 표시. 
    var userName =document.querySelector("#userName");//텍스트 필드에서 입력한 이름을 가져와 userName변수에 저장.
    var newText=document.createTextNode(userName.value); //새 텍스트 노드 만들기. 이때 username 값 사용.

    newP.appendChild(newText); //newText노드를 newP노드의 자식 노드로 연결

    var delBttn=document.createElement("span");//새 span 요소 만들기
    var delText=document.createTextNode("X");//새 텍스트 노트 만들기
    delBttn.setAttribute("class","del");//버튼에 class 속성 설정
    delBttn.appendChild(delText);//텍스트 노드를 버튼 요소의 자식 요소로 추가
    newP.appendChild(delBttn);//del 버튼을 p요소의 자식 요소로 추가.

    var nameList=document.querySelector("#nameList");//namelist 가져옴. 이건 이미 html에 지정돼있음

    nameList.insertBefore(newP,nameList.childNodes[0]);// p요소를 #namelist 맨 앞에 추가하기.
//    nameList.appendChild(newP); 

    userName.value="";//다음 이름 입력하도록 텍스트 필드 비우기

    var removeBttn=document.querySelectorAll(".del"); //x버튼이 del class이므로 class값인 del 이용해 x버튼에 접근

    for (var i=0; i<removeBttn.length;i++) { //removeBttn에 있는 요소 전체를 반복
        removeBttn[i].addEventListener("click",function() {
            //i번째 버튼 눌렀을 때 실행할 함수 선언
            if (this.parentNode.parentNode)//현재 노드의 부모 노드의 부모 노드가 있을 경우 실행
                this.parentNode.parentNode.removeChild(this.parentNode);
                //현재 노드의 '부모의 부모' 노드를 찾아, 현재 노드의 부모 노드 삭제
        });
    }



}
