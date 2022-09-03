var myVar = 100; //전역변수 선언
test();
document.write("myVar is " + myVar);

function test() { 			
	var myVar = 50;//지역변수 선언. 이거는 이 함수에서만 유효함. 예약어 var를 쓰면 지역변수가 된다(?)
}