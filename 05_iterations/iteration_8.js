// reduce
// Array<number>.reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: number[]) => number)

const myNums = [1, 2, 3]
const myTotal = myNums.reduce(function(acc, current){ 
    console.log(`acc: ${acc} and current: ${current}`)
    return acc+current }, 0)
console.log(myTotal)
// acc: 0 and current: 1
// acc: 1 and current: 2
// acc: 3 and current: 3
// 6

const myTotal2 = myNums.reduce((acc, cur) => acc+cur, 0)
console.log(myTotal2)// 6


const shoppingCart = [
    {
        itemName: "Js course",
        price: 299
    },
    {
        itemName: "Python course",
        price: 399
    },
    {
        itemName: "Android course",
        price: 1299
    },
    {
        itemName: "DataScience course",
        price: 11299
    },
    {
        itemName: "Java course",
        price: 2999
    }
]

const totalPrice = shoppingCart.reduce((acc, item)=> acc + item.price, 0)
console.log(totalPrice) // 16295