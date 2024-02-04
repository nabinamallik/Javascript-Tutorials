const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr[2]) // 2

const hero = ['shaktiman', 'spiderman','batman']
console.log(hero.length) // 3

const myArr2 = new Array(1, 2, 3, 4 ,5)
console.log(myArr2) // [ 1, 2, 3, 4, 5 ]


// Array methods

myArr.push(6)
console.log(myArr)//[0, 1, 2, 3, 4, 5, 6] 

myArr.pop()
console.log(myArr)//[0, 1, 2, 3, 4, 5]

myArr.unshift(9)
console.log(myArr)// [9, 0, 1, 2, 3, 4, 5]

myArr.shift()
console.log(myArr)// [1, 2, 3, 4, 5]

console.log(myArr.includes(9))// false
console.log(myArr.indexOf(5))// 5

const newArr = myArr.join()
console.log(myArr) //[ 0, 1, 2, 3, 4, 5 ]
console.log(newArr) //0,1,2,3,4,5
console.log(typeof newArr) //string

// ********* slice & splice *********
const myn = [0, 1, 2, 3, 4, 5, 6]

console.log("a",myn) // a [0, 1, 2, 3, 4, 5, 6]
console.log(myn.slice(1, 3)) // [1, 2]
console.log("b",myn) // b [0, 1, 2, 3, 4, 5, 6]
console.log(myn.splice(1, 3)) // [ 1, 2, 3 ]
console.log("c",myn) // c [ 0, 4, 5, 6 ]


const marvelHeros = ["spiderman", "ironman", "antman"]
const dcHeros = ["superman", "batman", "flash"]

marvelHeros.push(dcHeros)
console.log(marvelHeros) //[ 'spiderman', 'ironman', 'antman', ['superman', 'batman', 'flash' ] ] 

console.log(marvelHeros.concat(dcHeros)) //[ 'spiderman', 'ironman', 'antman', 'superman', 'batman', 'flash' ]
 
// sprade
console.log(...marvelHeros, ...dcHeros)// spiderman ironman antman superman batman flash

const arr = [1, 3, [3, 4, 5], 2, 3,[2, 4,[3,5]], 2, [4, 2, [2, 5,[3,5,6]]]]
console.log(arr.flat(Infinity)) //[1, 3, 3, 4, 5, 2, 3, 2, 4, 3, 5, 2, 4, 2, 2, 5, 3, 5, 6 ]

console.log(Array.isArray("nabina")) //flase
console.log(Array.from("nabina"))// ['n','a','b','i','n','a']
console.log(Array.from({name: "nabina"}))// [] : interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // [ 100, 200, 300 ]