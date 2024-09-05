const score = 400
// console.log(score)  // 400

const balance = new Number(100)
// console.log(balance)   //[Number: 100]

// console.log(balance.toString())  // 100
// console.log(balance.toFixed(2))  // 100.00

const otherNumber1 = 23.8966
// console.log(otherNumber1.toPrecision(3))  // 23.9

const otherNumber2 = 123.8966
// console.log(otherNumber2.toPrecision(3))  // 124

const hundreds = 100000
// console.log(hundreds.toLocaleString())  // 100,000
// console.log(hundreds.toLocaleString('en-IN'))  // 1,00,000

// console.log(Number.MAX_VALUE)   // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE)   // 5e-324
// other number relaed information we can see through browser



//****************Maths*********************//

console.log(Math)  // Object [Math] {}
console.log(Math.abs(-4))   // 4
console.log(Math.round(4.2578))  // 4 
console.log(Math.floor(4.2))   // 4
console.log(Math.ceil(4.7))   // 5

console.log(Math.max(4, 8, 65, 1))  // 65
console.log(Math.min(4, 8, 65, 1))   // 1
 
console.log(Math.random())    // range is => (0, 1)
console.log((Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)