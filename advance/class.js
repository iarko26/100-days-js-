class book{
    constructor(title,author,year){
      this.title = title;
      this.author = author;
      this.year = year;
    }
    getbookage(){
        const year=new Date().getFullYear()-this.year;//book's age(current year-year of publication)
        return `${this.title} is ${year} years old`
    }

}
const book1= new book('Book1','Author1',2010);
console.log(book1.title);
console.log(book1.author);
console.log(book1.year);
console.log(book1.getbookage());