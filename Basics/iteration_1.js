// for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
// }


for (let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is best number")
    }
    console.log(element)
}
// 0
// 1
// 2
// 3
// 4
// 5 is best number
// 5
// 6
// 7
// 8
// 9
// 10

for (let i = 1; i <= 10; i++) {
    console.log(`outer loop ${i}`)
    for (let j = 1; j <= 10; j++) {
        console.log(`inner loop ${i}, inner loop vaue ${j}`)
        console.log(i + '*' + j + '=' + j*i)
    }    
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length)// 3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}
// flash
// batman
// superman

// break and continue

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log("Detected 5")
        break
    }
    console.log(`value of i is ${i}`)
}
// value of i is 1
// value of i is 2
// value of i is 3
// value of i is 4
// Detected 5

for (let i = 1; i <= 10; i++) {
    if(i == 5){
        console.log("Detected 5")
        continue
    }
    console.log(`value of i is ${i}`)
}
// value of i is 1
// value of i is 2
// value of i is 3
// value of i is 4
// Detected 5
// value of i is 6
// value of i is 7
// value of i is 8
// value of i is 9
// value of i is 10