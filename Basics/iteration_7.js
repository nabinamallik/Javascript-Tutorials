const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(myNums.map((num)=>num + 10)) //[ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

myNums.forEach((num)=> {
    console.log(num+10)
})
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20

const newNums = myNums
                .map((num) => num * 10)
                .map((num) => num+1)
                .filter((num) => num < 50)

console.log(newNums) // [ 11, 21, 31, 41 ]