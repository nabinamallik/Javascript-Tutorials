const user = { 
    username: "nabina",
    price: 250,
    welcomemsg: function(){
        console.log(`${this.username} , welcome to website`)
        //console.log(this)
    }
}

user.welcomemsg()// nabina , welcome to website
user.username = "mallik"
user.welcomemsg()//mallik , welcome to website

console.log(this)// {}

function chai(){
    console.log(this)
}
chai() /*<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Getter/Setter],  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],    
  fetch: [AsyncFunction: fetch],   
  crypto: [Getter]
}*/

function chai2(){
    let username = "Nabina"
    console.log(this.username)
}
chai2() // undefined


const tea = () => { // arrow function
    console.log(this)
}
tea() // {}


const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(4, 6))// 10


const addtwoNum = (num1, num2) => num1 + num2 //implecite return
console.log(addtwoNum(5, 9))// 14

const addtwoNum2 = (num1, num2) => (num1 + num2)
console.log(addtwoNum2(5, 8))// 13

// const demo = (user, id) => ({username: `${user}`, id: `${id}`})
// console.log(demo("nabina", "01")) //{ username: 'nabina', id: '01' }

