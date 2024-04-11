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
//inheritance
class magazie extends book{
    constructor(title,author,year,issue){
        super(title,author,year);//inherit the properties of book class
        this.issue=issue; //add new property
    }
    getmagazineissuenumber(){
        return `${this.title} is ${this.issue} years old` //return the issue number by creating a new method

    }

}
const mag1= new magazie('Mag1','Author1',2010,1);
console.log(mag1.title);
console.log(mag1.author);
console.log(mag1.year);
console.log(mag1.getbookage());
console.log(mag1.getmagazineissuenumber());