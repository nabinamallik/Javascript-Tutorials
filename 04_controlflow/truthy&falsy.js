const userEmail1 = "nabina@google.com"

if(userEmail1){
    console.log("got user email")
} else {
    console.log("Dont heve user emails")
}
// got user email :> js asume that the userEmail1 as true cause it has some value in it

const userEmail2 = ""

if(userEmail2){
    console.log("got user email")
} else {
    console.log("Dont heve user email")
}
// Dont heve user email :> js asume that the userEmail2 as false cause it has no value in it

// falsy value: false, 0, -1, BigInt 0n, null, undefined, NaN

// truthy value: except falsy value everything is true and "0", "false", " ", [], {}, function(){}

const emptyArray = []
if(emptyArray.length === 0){
    console.log("Array is empty")
}
// Array is empty

const emptyObject = {}
if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty")
}
//Object is empty

console.log(false == 0); // true
console.log(false == ''); // true
console.log(0 == ''); // true

// Nullish Coalescing Operator (??): null undefined

let val1;
let val2;
let val3;
let val4;

val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 20 ?? 50

console.log(val1) // 5
console.log(val2) // 10
console.log(val3) // 15
console.log(val4) // 20 :> assign the value after null

// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80")
// more than 80

