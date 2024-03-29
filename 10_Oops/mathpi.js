// console.log(Math.PI); //3.141592653589793

// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter); //{ value: 3.141592653589793, writable: false, enumerable: false, configurable: false }

const myObj = {
    name: 'mazza',
    price: 90,
    isAvailable: true,
    drink: function(){
        console.log('drinking');
    }
}

console.log(myObj) //{ name: 'mazza', price: 90, isAvailable: true }
console.log(Object.getOwnPropertyDescriptor(myObj, 'name')); //{ value: 'mazza', writable: true, enumerable: true, configurable: true }

/////////////////////////////////////////

Object.defineProperty(myObj, 'name',{
    writable: true,
    enumerable: true,
})
// console.log(Object.getOwnPropertyDescriptor(myObj, 'name')); //{ value: 'mazza', writable: true, enumerable: true, configurable: true }

for (let [key, value] of Object.entries(myObj)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);  
    }
}
// name: maza
// price: 90
// isAvailable: true

////////////////////////////////////////

Object.defineProperty(myObj, 'name',{
    writable: false,
    enumerable: false,
})
// console.log(Object.getOwnPropertyDescriptor(myObj, 'name')); //{ value: 'mazza', writable: false, enumerable: false, configurable: true }


for (let [key, value] of Object.entries(myObj)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);  
    }
}
// price: 90
// isAvailable: true
