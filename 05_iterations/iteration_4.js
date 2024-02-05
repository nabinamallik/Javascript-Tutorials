// for in
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }


const myObject = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(key)
    // js
    // cpp
    // rb
    // swift

    console.log(`${key} shortcut for ${myObject[key]}`)
    // js shortcut for javascript
    // cpp shortcut for c++
    // rb shortcut for ruby
    // swift shortcut for swift by apple  
}

const myarr =['js','rb','py','java','cpp']
for (const key in myarr) {
    console.log(key)
    // 0
    // 1
    // 2
    // 3
    // 4

    console.log(myarr[key])
    // js
    // rb  
    // py  
    // java
    // cpp 
}

const map = new Map()
map.set('IN', "India")
map.set('USA',"United States of America")
map.set('Fr',"France")
for (const key in map) {
    console.log(key)// nothing will out cause map is not iterateble
}
