// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, ISBN, numOfPages, numOfCheckOuts, isDiscarded){
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.ISBN = ISBN;
        this.numOfPages = numOfPages;
        this.numOfCheckOuts = numOfCheckOuts;
        this.isDiscarded = isDiscarded;
    }
};

// Define your Manual and Novel classes here:
class Manual extends Book {
    constructor(title, author,copyrightDate, ISBN, numOfPages, numOfCheckOuts, isDiscarded){
        super(title, author,copyrightDate, ISBN, numOfPages, numOfCheckOuts,isDiscarded)}
        throwAway(year) {
            if(year-this.copyrightDate > 5 ){
                this.isDiscarded = true;

            };
        }
    };           

class Novel extends Book {
    constructor(title, author,copyrightDate, ISBN, numOfPages, numOfCheckOuts,isDiscarded){
        super(title, author,copyrightDate, ISBN, numOfPages, numOfCheckOuts,isDiscarded);
    };
    throwAway(){
        if (this.numOfCheckOuts > 100)
        this.isDiscarded = true;
    }
}

// Declare the objects for exercises 2 and 3 here:
let novel = new Novel('Pride and Prejudice', 'Jane Austen', 1813, 1111111111111, 432,32, false);
let manual = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, false )
// Code exercises 4 & 5 here:
manual.throwAway(2023);
console.log(manual);
novel.numOfCheckOuts = novel.numOfCheckOuts +5;
console.log(novel.numOfCheckOuts);
novel.throwAway();
console.log(novel);