let score = "22"

console.log(typeof score); // string
console.log(typeof (score)); // string

let valueInNumber = Number(score); // string to number

console.log(typeof valueInNumber) //number

let score2 = "22abc"

console.log(typeof score2) //string

let valueInNumber2 = Number(score2) // string to number

console.log(typeof valueInNumber2) //number
console.log(valueInNumber2) // NaN

let score3 = null

console.log(typeof score2) //string

let valueInNumber3 = Number(score3) // string to number

console.log(typeof valueInNumber3) //number
console.log(valueInNumber2) // NaN

let score4 = undefined

console.log(typeof score4) //undefined

let valueInNumber4 = Number(score4) //undefined to number

console.log(typeof valueInNumber4) //number
console.log(valueInNumber4) // NaN

let score6 = NaN

console.log(typeof score6) //number

let valueInNumber6 = Number(score6) //number to number

console.log(typeof valueInNumber6) //number
console.log(valueInNumber6) // NaN


let score5 = true

console.log(typeof score5) //boolean

let valueInNumber5 = Number(score5) //boolean to number

console.log(typeof valueInNumber5) //number
console.log(valueInNumber5) // 1


let isBoolean = "hello"
let booleanisloggedin = Boolean(isBoolean)
console.log(booleanisloggedin) //true

let isBoolean2 = ""
let booleanisloggedin2 = Boolean(isBoolean2)
console.log(booleanisloggedin2) //false

// 1=> true; 0=> false
// "" => false
// "nabina" => true

let somenumber = 11
let stringNumber = String(somenumber)
console.log(stringNumber)
console.log(typeof stringNumber)// string


