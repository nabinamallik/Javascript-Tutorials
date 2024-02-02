let myDate = new Date()
console.log(myDate) //2024-02-02T08:13:28.582Z
console.log(myDate.toString()); // Fri Feb 02 2024 13:45:08 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) // Fri Feb 02 2024
console.log(myDate.toLocaleString()) // 2/2/2024, 1:46:28 PM
console.log(typeof myDate) //object

let myCreatedDate = new Date(2024, 2, 23)
console.log(myCreatedDate.toDateString())// Sat Mar 23 2024

let myCreatedDate2 = new Date(2024, 2, 23,12, 40)
console.log(myCreatedDate2.toLocaleString()) // 3/23/2024, 12:40:00 PM

let myCreatedDate3 = new Date("2024-02-02")
console.log(myCreatedDate3.toLocaleString())// 2/2/2024, 5:30:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp) // 706862767395 in msec
console.log(Math.floor(myTimeStamp/1000)) // 1706862767 sec

let newDate = new Date()
console.log(newDate) // 2024-02-02T08:35:33.357Z
console.log(newDate.getMonth()+1) // 2
console.log(newDate.getDay()) // 5

// newDate.toLocaleString('default', {
//     weekday: "long",
//     day: "2-digit"
// })