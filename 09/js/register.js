var userId=document.querySelector ('#user-id');//아이디 필드를 가져와서 변수에 저장

//아이디 필드에 내용 입력 시 바로 입력한 글자 수를 확인하도록 하는 부분.
//userid에서 change 이벤트가 발생하면 checkid함수 실행.
//change 이벤트는 텍스트 필드 안의 내용이 바뀔 때 = 아이디 필드에 입력을 마치고 그 필드를 빠져나올 때 발생하는 이벤트.
//checkid 함수 선언 소스에 들어있는 select 함수는 자바스크립트에 내장돼있음.
//select 함수 사용하면 텍스트 필드에 입력한 내용을 선택함.
userId.onchange=checkId;

function checkId(){
    if (userId.value.length<4 || userId.value.length>15){ //userid 필드 내용의 길이가  4 이하'이거나'(=||) 15 이상일 경우 실행
        alert("4에서 15자리")
        userId.select(); //다시 입력하도록 아이디 입력 필드 선택
    }
}
//===============비밀번호 확인=====================
var pw1=document.querySelector ('#user-pw1');
var pw2=document.querySelector ('#user-pw2');
pw1.onchange=checkpw;

function checkpw(){
    if (pw1.value.length<8){
        alert("8자리 이상 입력");
        pw1.value="";
        pw1.focus(); //비밀번호를 다시 입력할 수 있게 포커싱.
        // focus는 해당 요소에 포커스 맞추는 내장 함수. 텍스트 필드에서 사용하면 해당 텍스트 필드 안에 커서 갖다놓음.
    }
}