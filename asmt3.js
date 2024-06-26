// 1. Class Creation and Object Instantiation:
//  Create a Person class with properties name, age, and gender.
//  Add a method describe that returns a string with all the person&#39;s details.
//  Instantiate three objects of the Person class and log their details using the
// describe method.


class Person{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    Detail(){
        return `${this.name} ${this.age} ${this.gender}`;
    }
}

let p1=new Person("Dev",12,"Male")
let p2=new Person("John",34,"Male")
let p3=new Person("Amy",28,"Female")

console.log(p1.Detail());
console.log(p2.Detail());
console.log(p3.Detail());

// OUTPUT:
// Dev 12 Male
// John 34 Male
// Amy 28 Female




// 2. Class Inheritance:
//  Create a Student class that inherits from the Person class.
//  Add an additional property studentID and a method study that returns a string
// stating the student is studying.
//  Instantiate an object of the Student class and demonstrate the inherited and
// new properties/methods.

class Student extends Person{
    constructor(name,age,gender,studentID){
        super(name,age,gender);
        this.studentID=studentID;
    }
    study(){
        return `${this.name} is Studying.`
    }
}

let s1=new Student("Dev",10,"Male");
console.log(s1.study())

// OUTPUT:
// Dev is Studying.





// 3. Map Operations:
//  Create a map to store student names and their corresponding scores.
//  Write functions to add a student, remove a student, and get a student&#39;s score.
//  Demonstrate the usage of these functions.

let m=new Map();
function addstd(name,score){
    m.set(name,score);
}
function getstd(name){
    return m.get(name);
}
function rmvstd(name){
    m.delete(name);
}
addstd("Dev",410);
addstd("Amy",420);
addstd("Rahul",430);
console.log(`All student: ${Array.from(m)}`)
console.log(`Get student score: ${getstd("Dev")}`)
console.log(`Remove student Rahul `);
rmvstd("Rahul")
console.log(`All student: ${Array.from(m)}`)

// OUTPUT:
// All student: Dev,410,Amy,420,Rahul,430
// Get student score: 410
// Remove student Rahul
// All student: Dev,410,Amy,420




// 4. Set Operations:
//  Create a set to store a collection of unique courses.
//  Write functions to add a course, remove a course, and check if a course
// exists in the set.
//  Demonstrate the usage of these functions.

const course = new Set();
function addcourse(c){
    course.add(c);
}
function checkcourse(c){
    return course.has(c);
}
function rmvcourse(c){
    course.delete(c);
}
addcourse("C++");
addcourse("Java");
addcourse("Python");
console.log(`All courses: ${Array.from(course)}`);
rmvcourse("Java");
console.log(`Now, All courses: ${Array.from(course)}`);

// OUTPUT:
// All courses: C++,Java,Python
// Now, All courses: C++,Python





// 5. Advanced Class Features:
//  Create a Library class with properties name and books (an array of book
// objects).
//  Each book object should have title, author, and year.
//  Add methods to Library class to add a book, remove a book by title, and find
// a book by title.
//  Demonstrate these features with a few books.

class Library{
    constructor(name,books){
        this.name = name;
        this.books = books;
        }
        addbook(title,author,year){
            this.books.push({title,author,year});
        }
        removebook(title){
            this.books = this.books.filter((book)=> book.title !== title);
        }
        findbook(title){
            return this.books.find((book)=> book.title === title);
        }
}
const library = new Library("CodeBook",[]);
library.addbook("C++","Harry","2020");
library.addbook("Java","Harry","2021");
library.addbook("Python","Harry","2022");
console.log(library.findbook("C++"));
console.log("ALl book :",library.books)
library.removebook("Java");
console.log("ALl book :",library.books)

// OUTPUT:
// ALl book : [
//     { title: 'C++', author: 'Harry', year: '2020' },
//     { title: 'Java', author: 'Harry', year: '2021' },
//     { title: 'Python', author: 'Harry', year: '2022' }
//   ]
//   ALl book : [
//     { title: 'C++', author: 'Harry', year: '2020' },
//     { title: 'Python', author: 'Harry', year: '2022' }
//   ]







// 6. Object Methods:
//  Create an object calculator with methods for add, subtract, multiply, and
// divide.
//  Each method should take two numbers and return the result.
//  Demonstrate the usage of these methods.

let calculator={
    add:(a,b)=>{
        return a+b;
    },
    substract:(a,b)=>{
        return a-b;
    },
    multiply:(a,b)=>{
        return a*b;
    },
    divide:(a,b)=>{
        return a/b;
    }
}
console.log("Add",calculator.add(2,3));
console.log("Substract",calculator.substract(2,3));
console.log("Multiply",calculator.multiply(2,3));
console.log("Divide",calculator.divide(2,3));

// OUTPUT:
// Add 5
// Substract -1
// Multiply 6
// Divide 0.6666666666666666





// 7. Custom Error Classes:

//  Create a custom error class ValidationError that extends the built-in Error
// class.
//  Write a function validateUser that takes a user object and validates its
// properties (e.g., name must be a string, age must be a number and non-
// negative).
//  Throw ValidationError with an appropriate message if validation fails.
//  Write a function to call validateUser and handle any exceptions, printing an
// appropriate message.

class ValidationError extends Error{
    constructor(message){
        super(message);
    }
}
function validateUser(user){
    if(typeof user.name !== "string"){
        throw new ValidationError("Name must be a strng");
    }
    if(typeof user.age !== "number" || user.age<0){
        throw new ValidationError("Number must be a non-negative number.")
    }
}

function checkuser(user){
    try{
        validateUser(user)
        console.log("User is valid");
    }catch(error){
        console.log("Error: ",error.message);
    }
}

let user1={"name":"Dev","age":12};
let user2={"name":3,"age":12};
let user3={"name":"Ran","age":-1};
checkuser(user1);
checkuser(user2);
checkuser(user3);

// OUTPUT:
// User is valid
// Error:  Name must be a strng
// Error:  Number must be a non-negative number.





// 8. Advanced Object Methods:
//  Create an object book with properties title, author, and year.
//  Add methods to get and set each property.
//  Add a method getSummary that returns a string summarizing the book
// details.
//  Demonstrate the usage of these methods.

let book={title:"",author:"",year:0,
setbook:function(title){
return this.title=title;
},
setauthor:function(author){
    return this.author=author;
},
setyear:function(year){
    return this.year=year;
},
gettitle:function(){
    return this.title;
},
getauthor:function(){
    return this.author;
},
getyear:function(){
    return this.year;
},
getSummary:function (){
    console.log(`${this.title} is written by ${this.author} in ${this.year}`);
}
};
book.setbook("Programming with C");
book.setauthor("Stephen");
book.setyear(2004);
console.log(book.gettitle());
console.log(book.getauthor());
console.log(book.getyear());
book.getSummary();

// OUTPUT:
// Programming with C
// Stephen
// 2004
// Programming with C is written by Stephen in 2004





// 9. Symbols and Private Methods:
//  Create a class BankAccount with properties accountNumber, balance, and
// accountHolder.
//  Add a method to deposit and withdraw money. Ensure that the balance
// cannot be directly modified from outside the class.
//  Use a Symbol to create a private method _calculateInterest that adds interest
// to the balance.
//  Demonstrate the usage of these methods.

class BankAccount{
    constructor(accountNumber,balance,accountHolder){
        this.accountNumber=accountNumber;
        this.balance=balance;
        this.accountHolder=accountHolder;
    }
    deposit(amount){
        this.balance+=amount;
    }
    withdraw(amount){
        this.balance-=amount;
            
    }
     _calculateInterest(){
        this.balance+=this.balance*0.05;
    }
}
const account = new BankAccount(11109823,1500,"Dev Mondal");
console.log("Initial Balance:",account.balance);
account.deposit(1000);
console.log("Initial Balance:",account.balance);
account.withdraw(500);
console.log("Initial Balance:",account.balance);

// OUTPUT:
// Initial Balance: 1500
// Initial Balance: 2500
// Initial Balance: 2000





// 10. Creating Custom Error Classes:
//  Create a custom error class InvalidAgeError that extends the built-in Error
// class.
//  Write a function checkAge that takes an age and throws an InvalidAgeError if
// the age is less than 0 or greater than 120.
//  Demonstrate the usage of this function with both valid and invalid ages.

class InvalidAgeError extends Error{
    constructor(message){
        super(message);
    }
}
function checkAge(age){
    if(age<0 || age>120){
        throw new InvalidAgeError("Invalid Age.");
    }
}
try{
    checkAge(10);
    console.log("Valid Age.")
    checkAge(-23);
    }catch(e){
    console.log(e.message);
}

// OUTPUT:
// Valid Age.   
// Invalid Age.