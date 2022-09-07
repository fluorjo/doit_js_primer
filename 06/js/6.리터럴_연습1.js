var book={
    title:"자바 스크립트",
    author:"kk",
    pages:500,
    price:15000,
    info: function() {
        alert(this.title+"책 분량은"+this.pages+"쪽입니다"); //https://hanamon.kr/javascript-this%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C/
    }
};
console.log(book);
console.log('--------------------------------');
console.log('book.title:',book.title);
console.log('--------------------------------');
console.log('book.info():',book.info());
book.field="IT"
console.log('--------------------------------');
console.log('book.field:',book.field);