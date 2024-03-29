class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`
    }

}

const nabina = new User("NabinaMallik")
console.log(nabina.logMe()); // User { username: 'NabinaMallik' }
// console.log(nabina.createId()); // nabina.createId is not a function : bcz it is a static function so it cant be access directly for security purpose


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "I@phone.com")

iphone.logMe()
console.log(iphone.createId()); // iphone.createId is not a function : bcz it is a static function so it cant be access directly for security purpose