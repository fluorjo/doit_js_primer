function Book(author, pages, price, title ) {
    this.author =author;
    this.pages=pages;
    this.price=price;
    this.title=title;
}

jsBook=new Book('a',500,15000,'js')
console.log('--------------------------------');
console.log('jsBook.title:',jsBook.title);