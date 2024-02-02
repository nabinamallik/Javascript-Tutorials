const score = 100

const balance = new Number(200.2616)
console.log(balance) //[Number: 200.2616]
console.log(balance.toString().length)  // 8
console.log(balance.toFixed(2)) // 200.26

const num2 = 20.379
console.log(num2.toPrecision(3)) //20.4

const money = 1000000
console.log(money.toLocaleString('en-IN')) //10,00,000

// ************* Math**************

console.log(Math) // Object [Math] {}

console.log(Math.abs(-5)) // 5
console.log(Math.round(4.8)) // 5
console.log(Math.ceil(4.2)) // 5
console.log(Math.floor(4.2)) // 4
console.log(Math.min(2, 5, 6, 1)) // 1
console.log(Math.max(2, 5, 6, 1)) // 6

console.log((Math.random()*10) + 1) //9.05552375348187 (random value)
console.log(Math.floor(Math.random()*10) + 1) // 10 (random value)

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max - min + 1) + min))