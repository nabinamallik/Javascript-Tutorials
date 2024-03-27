let myName = "Nabina     "


console.log(myName.length) // 11
console.log(myName.trim().length) // 6



let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.nabina = function(){
    console.log("Nabina is present in all objects");
}
Array.prototype.heyNabina = function(){
    console.log("Nabina is present in all Array");
}

heroPower.nabina() // Nabina is present in all objects
myHeros.nabina() // Nabina is present in all objects

// heroPower.heyNabina() // TypeError: heroPower.heyNabina is not a function : cause we add the heyNabin prototype in Array only
myHeros.heyNabina() // Nabina is present in all Array


// Inheritance ////

const User = {
    name: 'Nabina',
    email: "example@google.com"
}

const Teacher = {
    makeVide: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport   // Inherire the properties of TeachingSupport
}

Teacher.__proto__ = User // // Inherire the properties of User


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher) // TeachingSupport inherits the properties of Teacher


let anotherUsername = "nabina      "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
// nabina      
// True length is: 6

"hello    ".trueLength()
// hello
// True length is: 5

'hi            '.trueLength()
// hi
// True length is: 2