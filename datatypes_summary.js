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