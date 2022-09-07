function Book(title, author, pages, price ) {
    this.author =author;
    this.pages=pages;
    this.price=price;
    this.title=title;
}

var html =new Book('웹 표준의 정석','ko','608','28000');
var youtube = new Book('유튜브 영상 만들기','kim','368','16000');
var python = new Book('점프 투 파이썬','park','398','19000');
console.log('--------------------------------');
console.log('html:',html);
console.log('--------------------------------');
console.log('youtube:',youtube);
console.log('--------------------------------');
console.log('python:',python);

var booklist=[html,youtube,python];
console.log('--------------------------------');
console.log('booklist:',booklist);

document.write("<h1>책 제목으로 살펴보기</h1>");
for(var i=0; i<booklist.length; i++){
    document.write("<p>"+booklist[i].title+"</p>");
}
