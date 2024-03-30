const User = {
    _email: "n@nm.com",
    _password: "123",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const nab = Object.create(User) // instead of using new User we can create an object through the facrory function methods
console.log(nab.email);