// filter

// array.filter(element => {
// });

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = myNums.filter((num)=> {
    return num > 4
})
console.log(newNum) // [ 5, 6, 7, 8, 9, 10 ]

// const newNum = []
// myNums.forEach((num) => {
//     if(num>4){
//         newNum.push(num)
//     }
// })
// console.log(newNum) // [ 5, 6, 7, 8, 9, 10 ]

const books = [
    { title: "Book One", genre: "Friction", publish: 1998, edition: 2004 },
    { title: "Book Two", genre: "Non-Friction", publish: 1992, edition: 2007 },
    { title: "Book Three", genre: "History", publish: 1918, edition: 2003 },
    { title: "Book Four", genre: "Non_Friction", publish: 1987, edition: 2000 },
    { title: "Book Five", genre: "Science", publish: 2000, edition: 2005 },
    { title: "Book Six", genre: "Friction", publish: 1988, edition: 2004 },
    { title: "Book Seven", genre: "Science", publish: 2001, edition: 2004 },
    { title: "Book Eight", genre: "History", publish: 1900, edition: 1908 },
    { title: "Book Nine", genre: "History", publish: 1999, edition: 2006 }
]

const userBooks1 = books.filter((bk) => bk.genre === "History")
console.log(userBooks1)
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1918,
//       edition: 2003
//     },
//     {
//       title: 'Book Eight',
//       genre: 'History',
//       publish: 1900,
//       edition: 1908
//     },
//     {
//       title: 'Book Nine',
//       genre: 'History',
//       publish: 1999,
//       edition: 2006
//     }
//   ]

const userBooks2 = books.filter((bk) => {return bk.publish >= 2000})
console.log(userBooks2)
// [
//     {
//       title: 'Book Five',
//       genre: 'Science',
//       publish: 2000,
//       edition: 2005
//     },
//     {
//       title: 'Book Seven',
//       genre: 'Science',
//       publish: 2001,
//       edition: 2004
//     }
//   ]

const userBooks3 = books.filter((bk) => {return bk.publish <= 2000 && bk.genre === "History" })
console.log(userBooks3)
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1918,
//       edition: 2003
//     },
//     {
//       title: 'Book Eight',
//       genre: 'History',
//       publish: 1900,
//       edition: 1908
//     },
//     {
//       title: 'Book Nine',
//       genre: 'History',
//       publish: 1999,
//       edition: 2006
//     }
//   ]