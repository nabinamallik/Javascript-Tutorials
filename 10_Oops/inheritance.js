class User{
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new cources was added by ${this.username}`);
    }
}

const nabin = new Teacher("nabina", "nabina@gmail.com", "123")
nabin.addCourse() //A new cources was added by nabina
nabin.logMe() // Username is nabina

const nab = new User("nabinamallik")
nab.logMe() // Username is nabinamallik

console.log(nabin === nab); //false
console.log(nabin instanceof Teacher); // true
console.log(nabin instanceof User); // true