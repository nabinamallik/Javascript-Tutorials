// if


// conditional operator  : <, >, <=, >=, ==, !=, ===


if (2 == "2"){
    console.log("executed 1") // executed 1
}

if (2 === "2"){
    console.log("executed 2")
// it will returns nothing cause "===" operator compair datatype along with value
}


const temprature = 41
if (temprature < 50){
    console.log("less than 50")
}
else {
    console.log("temprature is greater than 50")
}
// less than 50


const score = 200
if(score > 100){
    const power = "fly"
    console.log(`User Power ${power}`)
}
// User Power fly


const balance = 1000
if(balance>500) console.log("test"); // test

if(balance< 500){
    console.log("less than 500")
} else if(balance < 750){
    console.log("less than 750")
} else if(balance < 900){
    console.log("less than 900")
} else {
    console.log("less than 1200")
}
// less than 1200

// logical operator : &&, ||

const userLoggedIn = true
const debitCard = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy")
}
// Allow to buy

const loggedInFromGoogle = true
const loggedInFromEmail = false

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("User logged in")
}
// User logged in

