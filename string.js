const name = "nabina"
const repoCount = 50

// console.log(name + repoCount + "hello") // outdated

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // mardern 

let gamename = new String("freefire")

console.log(gamename); 
console.log(gamename[1]); // r
console.log(gamename.__proto__); // {}
console.log(gamename.length); // 8
console.log(gamename.toUpperCase());// FREEFIRE
console.log(gamename.charAt(3)); // e
console.log(gamename.indexOf('i')); // 5


const newString = gamename.substring(0, 2)
console.log(newString); // 5

const anotherString = gamename.slice(-1, 4)
console.log(anotherString)
 
const str1 = "  nabina  "
console.log(str1) //   nabina  
console.log(str1.trim())  //nabina

const url = "https://nabina.com%20mallik"

console.log(url.replace('%20','-')) // https://nabina.com-mallik

const str2 = "nabina mallik cse"
console.log(str2.split(' ')); // ['nabina', 'mallik', 'cse']


