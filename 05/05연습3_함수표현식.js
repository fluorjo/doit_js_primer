var add=function(a,b){
	return a+b;
}

var sum =add(10,20);
console.log('sum:',sum);
console.log('---------------------');


//즉시 실행 함수
var result=(function() {
	return 10+20;
}());

console.log('result:',result);
console.log('---------------------');

var result2=(function(a,b) {
	return a+b;
}(20,30));

console.log('result2:',result2);