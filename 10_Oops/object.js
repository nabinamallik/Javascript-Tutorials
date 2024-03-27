function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5)) // 25
console.log(multiplyBy5.power); // 2
console.log(multiplyBy5.prototype); //{}   : function is a function and also function is an object


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}

const first = new createUser("chai", 25)
const second = new createUser("tea", 250)

first.printMe() // Price is 25

first.increment() // behind the scene it increment the score (score++)

first.printMe() // Price is 26

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created:
The new keyword initiates the creation of a new JavaSript Object.

A prototype is linked:
The newky created obhecr gers linked to the prototype property of the constructor function. This means that it has access to properies and method defined on the constructure's prototype.

The constructor is called:
The constructure function is called with the specified darguments and this is bound to the newly created object. If no explicit value is spefied from the constructor, JavaScript assunes this, the newly created object, to be the intended return value.

The new object is returned:
After th econstructor function has been called, if it doesn't return a non-premetive value (object, array, function, etc.), the newly created object is retuned.

*/

