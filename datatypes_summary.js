// Primitives
// 7types : Strings, Numbers, Boolian, Null, Undefined, Symbols, Bigint

const score = 100; // Number
const scoreValue = 100.3; // Number
const isLogin = true; // Boolian
const outsideTemp = null; // Null
let userEmail; // Undefine
let name = "nabina"; // String
const id = Symbol('123'); // Symbol
const bigInt = 6019643672347160923689084629n; // Bigint

// References (Non Premetivis)
// Array, Objects, Functions

const hero = ["ironman","superman","spiderman"]; // Array
let myObj = {
    user: "nabina",
    age: 20,
}; // Object

const myFunction = function(){    // Function
    console.log("hello world");
}

console.table([score, scoreValue, isLogin, outsideTemp, userEmail, name, id]);



// ******************************************************************

// stacks (Premetive), Heap (Non Premetive)

let myName = "nabina"
let anotherName = myName
anotherName = "mamuni"

console.log(myName); // nabina
console.log(anotherName); // mamuni
// cause Stack store  copy 


let userOne = {
    email: "nabina@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.email = "mamuni@google"

console.log(userOne.email); // mamuni@google.com
console.log(userTwo.email); // mamuni@google.com
// cause Heap store reference