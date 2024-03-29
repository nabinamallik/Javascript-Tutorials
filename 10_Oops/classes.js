//ES6

class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const nbn = new User("nabina", "nabina@gmail.com","123")

console.log(nbn.changeUsername()); //NABINA
console.log(nbn.encryptPassword()); //123abc


// behind the scene of classes

// function User(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// User.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }

// User.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }

// const nbn = new User("nabina", "nabina@gmail.com","123")

// console.log(nbn.changeUsername()); //NABINA
// console.log(nbn.encryptPassword()); //123abc