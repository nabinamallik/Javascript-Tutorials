
function sayMyName(){
    console.log("N");
    console.log("a");
    console.log("b");
    console.log("i");
    console.log("n");
    console.log("a");
}
sayMyName()

function addTwoNumbers(num1, num2){
    console.log(num1+num2)
}
addTwoNumbers(2, 5)// 7

function addTwoNumbers(num1, num2){
    return num1 + num2
}
console.log('result:',addTwoNumbers(3, 5)) // result: 8

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("nabina"))//nabina just logged in
console.log(loginUserMessage())// undefined just logged in

function loginUserMessage2(username){
    if(!username) // or if(username === undefined)
    {
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage2())// please enter a username
console.log(loginUserMessage2("nabina"))// nabina just logged in


// rest operator "..."
function calculateCartPrice(...value){
    return value
}
console.log(calculateCartPrice(200, 300, 400))// [ 200, 300, 400 ]

function calculateCartPrice2( val1, val2, ...value){
    return value
}
console.log(calculateCartPrice2(200, 300, 400, 399, 400, 800))// [ 400, 399, 400, 800 ]


const user = {
    username: "Nabina",
    price: 199
}

function handleObject(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
}

handleObject(user) //username is Nabina and price is 199
handleObject({ username: "sam", price: 200 }) // username is sam and price is 200 

const arr = [200, 300, 400, 600]

function returnSecValue(getArray){
    return getArray[1]
}

console.log(returnSecValue(arr)) // 300
console.log(returnSecValue([200, 800, 500, 100])) // 800