var now=new Date(); //오늘 날짜 정보를 date 객체의 인스턴스 now객체로 만듦.
var firstDay=new Date("2018-03-23"); //처음 만난 날의 날짜 정보를 first day 객체로 만듦.
var toNow=now.getTime();//오늘 날짜 정보를 밀리초로 바꿈
var toFirst=firstDay.getTime();//처음 만난 날을 밀리초로 바꿈
var passedTime=toNow - toFirst; //처음 만난 날과 오늘 사이의 차이(밀리초값)

//var passedTime=now.getTime(); 한줄쓰기

var passedDay=Math.round(passedTime/(1000*60*60*24)); //밀리초를 날짜 수로 변환한 후 반올림

document.querySelector("#accent").innerText=passedDay+"일"; //#accent 영역에 표시

var future=toFirst +100*(1000*60*60*24); //처음 만난 날에 100일 더하기
var someday=new Date(future);//future 값을 사용해 date 객체의 인스턴스를 만든다.
var year=someday.getFullYear(); //연도를 가져와 year 변수에 저장
var month=someday.getMonth()+1;
var date=someday.getDate();

document.querySelector("#date100").innerText=year+"년"+month+"월"+date+"일";

var future=toFirst +200*(1000*60*60*24); //처음 만난 날에 100일 더하기
var someday=new Date(future);//future 값을 사용해 date 객체의 인스턴스를 만든다.
var year=someday.getFullYear(); //연도를 가져와 year 변수에 저장
var month=someday.getMonth()+1;
var date=someday.getDate();

document.querySelector("#date200").innerText=year+"년"+month+"월"+date+"일";

function calcDate(days){//반복되는 부분 함수로 만들기
    var future=toFirst +days*(1000*60*60*24); //앞에서 숫자 입력했던 부분을 days 변수로 바꿈.
    var someday=new Date(future);
    var year=someday.getFullYear();
    var month=someday.getMonth()+1;
    var date=someday.getDate();

document.querySelector("#date"+days).innerText=year+"년"+month+"월"+date+"일";
}

calcDate(365);
calcDate(500);
