var x = 10;
x+=10;
console.log(x);
var y = 20;
y +=x;
console.log(y);

var numVar = 100;
var strVar ="50";
console.log(numVar+strVar) //여기서 +는 연결연산자
console.log(numVar-strVar) //-는 산술연산자.

var a =3, b=4;
console.log(a == b)
console.log(b!=6)

console.log(10 =='10') //'=='는 자동으로 자료형을 변환해서 비교. 그래서 true
console.log(10 ==='10') //'==='변환 안함. 그래서 false.
console.log('10 ===\'10\'', 10 ==='10')

//or 연산자 = ||
var a = 10, b = 20;
console.log('a>10 || b> 20:', a>10 || b> 20)
console.log('--------------------------------');
console.log('a<=10||b>20:',a<=10||b>20);

//and 연산자 - &&
console.log('--------------------------------');
console.log('a<=10&&b<=20:',a<=10&&b<=20);

//not 연산자 - !
console.log('--------------------------------');
var isAdult=false
console.log('--------------------------------');
console.log('isAdult:',isAdult);
console.log('--------------------------------');
console.log('isAdult=!isAdult:',isAdult=!isAdult); //!로 true=false를 뒤집음.

