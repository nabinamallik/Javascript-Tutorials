const user = {
    username: "Nabina",
    loginCount: 10,
    signedIn: true,
    getUserDetails: function(){
        console.log("Got user details from database")
        console.log(`Username: ${this.username}`) // this keyboard  identify the innter key value  IMP- this keyword cannot be used in arrow function
        console.log(this)// {
                         //    username: 'Nabina',
                         //    loginCount: 10,
                         //    signedIn: true,
                         //    getUserDetails: [Function: getUserDetails]
                         // }
    } 
}

console.log(user.username) // Nabina
console.log(user["username"]) // Nabina
console.log(user.getUserDetails()) // Got user details from database
console.log(this) // {}


////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////


function user(username, loginCount,isLoggedIn){

    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);  // greeting: [Function (anonymous)]
    }

    return this
}

const userOne = new user("nabina", 12, true)
const userTwo = new user("mallik", 11, false)

console.log(userOne); //user { username: 'nabina', loginCount: 12, isLoggedIn: true }
console.log(userTwo); //user { username: 'mallik', loginCount: 11, isLoggedIn: false }

console.log(userOne.constructor); // [Function: user]
console.log(userOne.greeting()); // Welcome nabina

console.log(userOne instanceof user); //true
console.log(userOne instanceof Object); //true