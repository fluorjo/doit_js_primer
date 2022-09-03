var x = 100;

test0();

function test0() { //1.기본적으로 변수 지정은 먼저 해줘야 하는 듯함.			
  var y = 200;
	document.write("x is " + x );
  document.write('<br>');
  document.write("y is " + y );
  
}

document.write('<br></br>');

test1();
//1-2.그래서 이거 실행하면 x 부분만 표시됨. a를 뒤에서 선언했기 때문.  
function test1() { 			
	document.write("x is " + x );
//  document.write("a is " + a );
//  a = 200;
}

//2.변수 지정이 잘못되면 저 줄 자체가 실행이 안됨. 그래서 test1의 a 부분이 실행이 안됨.
//3.어디 함수 하나가 에러나면 그 다음부터는 실행이 안 되는 듯함. 그래서 test1에서 a 부분이 막히면 이 아래줄 test2는 실행이 안됨. 

document.write('<br></br>');

test2();
function test2() { 			
	document.write("x is " + x );
  document.write('<br>');
  document.write("z is " + z );
  var z = 200;
}
//실행하면 z is undefined가 나옴. z값에 200이 할당이 안 됨. 근데 또 z가 있다는 건 알고 있음. 

document.write('<br></br>');

test3();
function test3() { 			
  var z = 300;
	document.write("x is " + x );
  document.write('<br>');
  document.write("z is " + z );
  
}
//여기서 z를 다시 선언해주면 이번엔 제대로 나옴. 


document.write('<br></br>');

test4();
function test4() { 			
	document.write("x is " + x );
  document.write('<br>');
  document.write("c is " + c );
  let c = 200;
}
// test 2랑 똑같은 구조지만 let을 써서 c가 아예 정의 및 사용이 안됨. 에러남.
//let은 호이스팅이 없고, 변수 값을 재할당할 수는 있지만 재선언할 수는 없다. 

//const는 재할당 재선언 모두 불가능하다.  