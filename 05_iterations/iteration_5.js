// for each
// array.forEach(element => {  
// });
    
const coding = ["js","ruby","java","python","cpp"]
coding.forEach( function (item) {
    console.log(item)
    // js
    // ruby
    // java
    // python
    // cpp
});

coding.forEach((item) => {
    console.log(item)
    // js
    // ruby
    // java
    // python
    // cpp
})

function printMe(item){
    console.log(item)
}
coding.forEach(printMe)
// js
// ruby
// java
// python
// cpp

coding.forEach((item , index, arr )=> {
    console.log(item , index, arr)
//     js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//     ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//     java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//     python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
//     cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
})

const myCoding = [
    {
        languageName: "java",
        languageFileNamr: "java"
    },
    {
        languageName: "javascript",
        languageFileNamr: "js"
    },
    {
        languageName: "python",
        languageFileNamr: "py"
    }
]
myCoding.forEach((item) =>{
    console.log(item.languageName)
//     java
//     javascript
//     python
})

const values = coding.forEach((item) =>{
    // console.log(item)
    return item
})

// console.log(values) // undefined :> forEach does not returns any values
