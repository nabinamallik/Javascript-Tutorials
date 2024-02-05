// for of

// for (const iterator of object) {
// }

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num)
}
// 1
// 2
// 3
// 4
// 5

const greetings = "hello world"
for (const greet of greetings) {
    if(greet === " "){
        continue // to skip spaces " "
    }
    console.log(`Each char is ${greet}`)
}
// Each char is h
// Each char is e
// Each char is l
// Each char is l
// Each char is o
// Each char is w
// Each char is o
// Each char is r
// Each char is l
// Each char is d

// *************************************************

// maps

const map = new Map()
map.set('IN', "India")
map.set('USA',"United States of America")
map.set('Fr',"France")

console.log(map)
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }

for (const [key, value] of map) {
    console.log(key)
    // IN
    // USA
    // // Fr
    console.log(value)
    // India
    // United States of America
    // France
    
}

const myObj = {
    'game1': "freefire",
    'game2': "pubg",
    'game3': "clashofclans"
}

for (const [key, value] of myObj ) {
    console.log(key, `:-`, value)
    // TypeError: myObj is not iterable   
}
