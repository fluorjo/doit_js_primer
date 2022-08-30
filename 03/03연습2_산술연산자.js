var a = 10;
var b = a++ +5; //증감 연산자는 피연산자 '뒤'에 있을 때 전체 수식의 처리가 끝난 다음에 적용. 반대로 앞에 있을 땐 전체 수식을 처리하기 전에 적용.
//a++ a값에다 5를 더해서 b에 할당. '그 다음에' a를 1 증가시킴.  그래서 여기에서는 b는 15.
var c = b--;
//b가 14로 바뀜. c는 b의 15값을 받음. 
var d = 10
var e = ++d +5;
//위와 반대로 d를 1 '증가시킨 다음에' 5를 더한 값을 e에다 할당. 그래서 여기서 e가 16. 
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
zx