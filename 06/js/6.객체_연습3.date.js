new Date()
new Date("2018-02-25")
new Date("2018-02")
new Date("2018-02-25T18:00:00") //시간 정보까지 함께 저장
new Date("2018-02-25T18:00:00Z") //국제 표준시로 지정


var now=new Date()
console.log('--------------------------------');
console.log('now:',now);

console.log('--------------------------------');
console.log('now.getDate():',now.getDate());

console.log('--------------------------------');
console.log('now.getDay():',now.getDay()); //요일-0부터 일요일.
console.log('--------------------------------');
console.log('now.getTime():',now.getTime()); //1910년 1월 1일 0시를 기준으로 now 객체까지 걸린 시간을 밀리초로 표시.(1밀리초=1/1000초.)

