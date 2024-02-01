console.log("2" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true : The reason is that an equality check == and comparisions > < >= <= work differently. Comparisons convert null to a number, treating is as 0. Thats why (3) null >= 0 is true and (1) null > 0 is false.


console.log(undefined == 0); //false
console.log(undefined < 0); //false
console.log(undefined > 0); // false

// === : strictly check

console.log("2" == 2); //true
console.log("2" === 2); //false

