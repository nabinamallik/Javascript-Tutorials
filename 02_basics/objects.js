// singleton
// object.create

// object literals

const mySym = Symbol("key1") // symbol declaration

const JsUser = {
    name: "nabina",
    "full name": "Nabina Mallik",
    age: 18,
    location: "bhuban",
    email: "nabinamallik@gmail.com",
    isLoggedin: false,
    lastLoginDays: ["Monday","Saturday"],
    [mySym]: "mykey1" // symbol declaration
}

console.log(JsUser.email) // nabainamallik@gmail.com
console.log(JsUser["email"]) // nabinamallik@gmail.com

// console.log(JsUser.full name) :> not allowed
console.log(JsUser["full name"]) // Nabina Mallik

console.log(JsUser[mySym]) // mykey1 :> accessing symbol

JsUser.email = "nabina@google.com"
console.log(JsUser);
// {
//     name: 'nabina',
//     'full name': 'Nabina Mallik',       
//     age: 18,
//     location: 'bhuban',
//     email: 'nabina@google.com',
//     isLoggedin: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'mykey1'
//   }

// Object.freeze(JsUser)
JsUser.email = "malliknabina@google.com"
console.log(JsUser)
// {
//     name: 'nabina',
//     'full name': 'Nabina Mallik',       
//     age: 18,
//     location: 'bhuban',
//     email: 'nabina@google.com', :> not changed cz we freezed the object
//     isLoggedin: false,
//     lastLoginDays: [ 'Monday', 'Saturday' ],
//     [Symbol(key1)]: 'mykey1'
//   }

JsUser.greeting = function(){
    console.log("hello js User")
}
console.log(JsUser.greeting) // [Function (anonymous)]
console.log(JsUser.greeting()) // hello js User

JsUser.greeting2 = function(){
    console.log(`hello js user ${this.name}`)
}
console.log(JsUser.greeting2()) // hello js user nabina


// const tinderUser = new Object() :> singleton

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "samy"
tinderUser.isLoggiedIn = false

console.log(tinderUser) // { id: '123abc', name: 'samy', isLoggiedIn: false }

 
const regularUser = {
    email: "nabinamallik@gmail.com",
    fullName: {
        userfullname: {
            firstname: "nabina",
            lastname: "mallik"
        }
    }
}

console.log(regularUser.fullName)// { userfullname: { firstname: 'nabina', lastname: 'mallik' } }
console.log(regularUser.fullName.userfullname) // { firstname: 'nabina', lastname: 'mallik' }
console.log(regularUser.fullName.userfullname.firstname) // nabina


const obj1 = {
    1: "a",
    2:"b"
}

const obj2 =  { 3: "c", 4: "d"}

const obj3 = {obj1, obj2}
console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = {...obj1, ...obj2}
console.log(obj4) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(Object.assign(obj1,obj2)) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(Object.assign({}, obj1, obj2)) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


const user = [
    {
        id: 1,
        email: "n@gmail.com"
    },
    {
        id: 2,
        email: "m@gmail.com"
    },
    {
        id: 3,
        email: "nm@gmail.com"
    }
]

console.log(user[1].email) // m@gmail.com
console.log(user[2].id) // 3

console.log(Object.keys(tinderUser)) //  [ 'id', 'name', 'isLoggiedIn' ] 
console.log(Object.values(tinderUser)) // [ '123abc', 'samy', false ]
console.log(Object.entries(tinderUser)) // [ [ 'id', '123abc' ], [ 'name', 'samy' ], [ 'isLoggiedIn', false ] ] 
console.log(tinderUser.hasOwnProperty('id')) // true
console.log(tinderUser.hasOwnProperty('lastname')) // false


// ******** Object Destructuring **********

const course = {
    coursename: "btech",
    price: "900",
    courseInstructure: "nabina"
}

//course.courseInstructure is equal to :
const {courseInstructure} = course
console.log(courseInstructure) // nabina

const {courseInstructure: cinstr} = course
console.log(cinstr) // nabina

