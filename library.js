const createBook = (title, author, yearPublished, price) => {
  return{
    title,
    author,
    yearPublished,
    price,
    getBookInfo(){
      return `${this.title} by ${this.author}, published in ${this.yearPublished}`;
    },
    setDiscount(discount){
      this.price *= (1 - discount);
    }
  };
}
const createLibrary = () => {
  let books = [];
  return{
    addBook(book){
      books[books.length] = book;
    },
    removeBook(title){ 
      books = books.filter(book => book.title !== title)
    },
    findBook(title){
      return books.find(book => book.title === title);
    },
    getTotalValue(){
      return books.reduce((total, book) => total + book.price, 0);
    },
    getBooks(){
      return books;
    }
  };
}

const book1 = createBook("Harry Potter and the Goblet of Fire", "J.K. Rowling", 2000, 10.99);
const book2 = createBook("Harry Potter and the Order of the Phoenix", "J.K. Rowling", 2003, 25.00);
const book3 = createBook("A Dance with Dragons", "George R. R. Martin", 2011, 9.99);

const library = createLibrary();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

console.log("Total value of books in library:", library.getTotalValue());

let dBook = library.findBook("Harry Potter and the Goblet of Fire");
console.log(dBook.getBookInfo());

library.removeBook("Harry Potter and the Order of the Phoenix");
console.log("New total after removal:", library.getTotalValue());

book1.setDiscount(0.40);
console.log("Total value after discount: ", library.getTotalValue());