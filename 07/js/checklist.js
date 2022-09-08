var itemlist =[];

var addBtn = document.querySelector("#add")//#add인 요소를 가져와 addBtn으로 저장
addBtn.addEventListener('click',addList); //addBtn 클릭하면 addList 함수 실행
//EventListener 대신 addBtn.on-click = addList; 써도 됨.

function addList(){
    var item=document.querySelector('#item').value; //텍스트 필드 내용 가져오기

    if (item!=null){//item 변수 값이 null이 아닐 경우, 즉 입력값이 있을 때만 배열에 추가.
        itemlist.push(item); //itemlist 배열 끝에 item 변수값 추가.
 
 
        //배열에 추가되면 텍스트 필드에서 자동으로 지우고 다시 커서 활성화
         document.querySelector("#item").value='';  //id='item'인 요소 값 지우기
         document.querySelector("#item").focus();   //텍스트 필드에 focus()함수 적용. focus 함수는 해당 요소에 포커스를 주는 함수, 텍스트 필드 안에 커서 갖다놓게 함. 
    }

}


//<ol>은 순서가 있는 목록 태그  <->  <ul>은 순서가 없는 목록 태그.

