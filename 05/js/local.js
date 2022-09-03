var myVar = 100; //전역변수 선언
test();//myVar를 50으로 하라고 함수 호출했지만, 이 함수에서 쓴 myvar는 지역변수기 때문에 영향을 못줌.


document.write("myVar is " + myVar); //그래서 이거 실행시키면 그냥 100이 나옴. 

function test() { 			
	var myVar = 50;//지역변수 선언. 이거는 이 함수에서만 유효함. 예약어 var를 쓰면 지역변수가 된다(?) 
}
