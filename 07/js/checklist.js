var itemList =[];

var addBtn = document.querySelector("#add")//#add인 요소를 가져와 addBtn으로 저장
addBtn.addEventListener('click',addList); //addBtn 클릭하면 addList 함수 실행
//EventListener 대신 addBtn.on-click = addList; 써도 됨.

function addList(){
    var item=document.querySelector('#item').value; //텍스트 필드 내용 가져오기

    if (item!=null){//item 변수 값이 null이 아닐 경우, 즉 입력값이 있을 때만 배열에 추가.
        itemList.push(item); //itemList 배열 끝에 item 변수값 추가.
 
 
        //배열에 추가되면 텍스트 필드에서 자동으로 지우고 다시 커서 활성화
         document.querySelector("#item").value='';  //id='item'인 요소 값 지우기
         document.querySelector("#item").focus();   //텍스트 필드에 focus()함수 적용. focus 함수는 해당 요소에 포커스를 주는 함수, 텍스트 필드 안에 커서 갖다놓게 함. 
    }

    showList(); //밑에서 선언한 함수 실행

}

//<ol>은 순서가 있는 목록 태그  <->  <ul>은 순서가 없는 목록 태그.

// document.write('<ul><li>itemList[0]</li><li>itemList[1]</li><li>itemList[2]</li></ul>') //이렇게 한줄로 써도 줄 바뀌어짐.

function showList(){
    var list='<ul>'; //목록을 시작하는 <ul>태그 저장
    for (var i=0; i<itemList.length; i++){ //배열 요소마다 반복
        list +="<li>"+itemList[i]+"<span class='close' id="+i+"> X </span></li>"; //각 요소를 <li>~</li>로 묶음
    }//span class 속성은 X버튼의 스타일을 지정하기 위한 것. 
    //X 버튼의 아이디 값을 배열의 인덱스 값인 i로 지정해줌. 
   
    list +="</ul>"; //목록을 끝내는 </ul> 태그 저장

    document.querySelector("#itemList").innerHTML=list;//list 변수값 표시

    var remove=document.querySelectorAll(".close"); //querySelectorAll 함수:괄호 안에 지정한 이름을 가진 모든 요소를 가져옴.
    //삭제 버튼은 모두 class 값이 close임. 그래서 class=close인 것들을 모두 가져와 remove 변수에 저장하면 모든 삭제 버튼을 remove 변수에 저장할 수 있음. 
    //이 remove 변수는 배열 형태.
   
    
    for (var i=0; i<remove.length; i++){ //remove배열의 모든 요소 확인
        remove[i].addEventListener("click",removeList);//요소를 클릭하면 removelist실행

    }
 
}
function removeList(){
 //   console.log(this); //this 값을 콘솔 창에 표시. 객체에서 이벤트가 발생할 때 그 이벤트의 대상을 알아낼 때 this 예약어 사용. 
    //x 누르면 <span class='close' id="+순번+"> X </span> <-이게 콘솔 창에 뜸.
    var id=this.getAttribute("id"); 
    //this(누른 삭제 버튼)의 id 값을 가져와 id 변수에 저장함.
    //getattribute는 지정한 속성(attribute)의 값을 가져오는 함수.

    itemList.splice(id,1);//itemList배열에서 인덱스 값이 id인 요소 1개 삭제.
    showList();//변경된 itemList 배열 다시 화면에 표시.


}

