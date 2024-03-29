function SetUsername(username){
    this.username = username
}

function createUser(username, email, password){
    SetUsername(username)
    
    this.email = email
    this.password = password
}

const bin = new createUser('nabina', "example@gmail.com", "123")
console.log(bin); //createUser { email: 'example@gmail.com', password: '123' }


function createUser2(username, email, password){
    SetUsername.call(this, username)
    this.email = email
    this.password = password
}

const bin1 = new createUser2('nabina', "example@gmail.com", "123")
console.log(bin1); //createUser {  username: 'nabina', email: 'example@gmail.com', password: '123' }