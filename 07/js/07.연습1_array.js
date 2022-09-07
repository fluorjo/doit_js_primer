var myArray = new Array();//어레이 객체의 인스턴스 만들기
var numbers=['1','2','3','4']; //리터럴을 사용한 배열
var numbers2=new Array("one",'two','three','four');//어레이 객체를 사용한 배열

console.log('--------------------------------');
console.log('numbers:',numbers);
console.log('--------------------------------');
console.log('numbers2:',numbers2);

console.log('--------------------------------');
console.log('numbers.length:',numbers.length);
console.log('--------------------------------');
for (var i=0; i<numbers.length; i++){
    console.log('numbers'+[i],numbers[i]);
}

console.log('--------------------------------');
console.log('numbers.concat(numbers2):',numbers.concat(numbers2));

console.log('--------------------------------');
console.log('numbers.join("-"):',numbers.join("-"));//배열 요소 연결하는 함수. 배열 요소 연결해 나열 시 각 요소 사이에 넣을 구분 기호를 지정할 수 있음. 기본값은 쉼표.

console.log('--------------------------------');
console.log('numbers.push("77"):',numbers.push("77")); //push='맨 뒤'에 새 요소 추가하는 함수. 새 요소가 추가된 후 배열 요소의 '개수'가 반환됨
console.log('--------------------------------');
console.log('numbers:',numbers); 

console.log('--------------------------------');
console.log('numbers.unshift("99"):',numbers.unshift("99")); //unshift='맨 앞'에 새 요소 추가하는 함수. 새 요소가 추가된 후 배열 요소의 '개수'가 반환됨
console.log('--------------------------------');
console.log('numbers:',numbers);

console.log('--------------------------------');
console.log('numbers.pop():',numbers.pop()); //pop='맨 뒤'의 요소 빼는 함수. 빠진 요소가 반환됨. 괄호 안에 빼고 싶은 요소 적어도 소용 없음.
console.log('--------------------------------');
console.log('numbers:',numbers); 

console.log('--------------------------------');
console.log('numbers.shift():',numbers.shift()); //shift='맨 앞'의 요소 빼는 함수. 
console.log('--------------------------------');
console.log('numbers:',numbers);

console.log('--------------------------------');
console.log('numbers.splice(2):',numbers.splice(2)); //splice 쓰고 인수 한 개 지정 = 지정한 인덱스부터 끝까지 요소 삭제. 삭제된 요소들이 반환됨.
console.log('--------------------------------');
console.log('numbers:',numbers);

var numbers=['1','2','3','4']; 
console.log('--------------------------------');
console.log('numbers.splice(2,1):',numbers.splice(2,1)); //splice 쓰고 인수 두 개 지정 = 지정한 인덱스부터 두 번째 인수 개수 만큼 요소 삭제. 삭제된 요소들이 반환됨.
console.log('--------------------------------');
console.log('numbers:',numbers);

var numbers=['1','2','3','4']; 
console.log('--------------------------------');
console.log('numbers.splice(2,1,"새 요소 추가"):',numbers.splice(2,1,"새 요소 추가")); //splice 쓰고 인수 세 개 지정 = 지정한 인덱스부터 두 번째 인수 개수 만큼 요소 삭제 후 세 번째 인수 요소 추가. 삭제된 요소들이 반환됨.
console.log('--------------------------------');
console.log('numbers:',numbers);

var numbers=['1','2','3','4']; 
console.log('--------------------------------');
console.log('numbers.splice(2,0,"새 요소 추가"):',numbers.splice(2,0,"새 요소 추가")); // 두 번째 인수에 0 지정하면 기존 요소 유지한 채 추가함.
console.log('--------------------------------');
console.log('numbers:',numbers);

var numbers=['1','2','3','4']; 
console.log('--------------------------------');
console.log('numbers.splice(2,0,"새 요소 추가", "여러 개 요소 추가"):',numbers.splice(2,0,"새 요소 추가", "여러 개 요소 추가")); // 세 번째 인수부터 여러 개 넣으면 여러 요소 추가.
console.log('--------------------------------');
console.log('numbers:',numbers);

var numbers=['1','2','3','4']; 
console.log('--------------------------------');
console.log('numbers.slice(2):',numbers.slice(2)); //slice 쓰고 인수 한 개 지정 = 지정한 인덱스'부터' '끝'까지 요소 추출. 추출된 요소들이 반환됨. 기존 배열은 삭제되지 않음.
console.log('--------------------------------');
console.log('numbers:',numbers);
console.log('--------------------------------');
console.log('numbers.slice(1,3):',numbers.slice(1,3)); //slice 쓰고 인수 두 개 지정 = 첫 인덱스부터 두 번째 인덱스 '바로 앞'까지 요소 추출. 추출된 요소들이 반환됨. 

var n3=numbers.slice(1,3)
console.log('--------------------------------');
console.log('n3:',n3); //slice한 결과를 새 배열로 만들 수도 있음.

