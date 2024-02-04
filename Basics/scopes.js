

if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a); // ReferenceError: a is not defined  
// console.log(b); // ReferenceError: b is not defined  
console.log(c); // 30 :> which is not acceptable


let val1 = 200; // global scope
if(true){
    let val1 = 300 // block scope
    console.log(val1);// 300 
}
console.log(val1);// 200


function one(){
    const username= "nabina"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website)// ReferenceError: website is not defined
    two()
}
one() // nabina


if(true){
    const username = "nabina"
    if(username === "nabina"){
        const website = " youtube"
        console.log(username + website) // nabina youtube
    }
    // console.log(website) // ReferenceError: website is not defined
}
// console.log(username) // ReferenceError: username is not defined



/************** itersting ****************/

console.log(addone(5)) // 6
function addone(num){
    return num + 1
}


// console.log(addTwo(5)) // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))// 7
