// const arr = []
// %DebugPrint(arr)


// continous, Holey

// SMI (small integer)
// Packed element
// Double (float, string, function)

const arrTwo = [1,2,3,4,5]
//PACKED_SMI_ELEMENTS

arrTwo.push(6.1)
// PACKED_DOUBLE_ELEMENTS

arrTwo.push("7")
// PACKED_ELEMENTS

arrTwo[10] = 11
// HOLEY_ELEMENTS

console.log(arrTwo); //[ 1, 2, 3, 4, 5, 6.1, '7', <3 empty items>, 11 ]
console.log(arrTwo.length); //11
console.log(arrTwo[9]); //undefined


// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// holes are very expensive in js

const arrThree = [1,2,3,4]
console.log(arrThree[2])

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENTS

arrFour[0] = '1' //HOLEY_ELEMENT
arrFour[1] = '2' //HOLEY_ELEMENT
arrFour[2] = '3' //HOLEY_ELEMENT

const arrFive = []
arrFive.push('1') // PACKED_ELEMENT
arrFive.push('2') // PACKED_ELEMENT
arrFive.push('3') // PACKED_ELEMENT


const arrSix = [1,2,3,4,5]
arrSix.push(Infinity) // DOUBLE

// for, for-of, forEach