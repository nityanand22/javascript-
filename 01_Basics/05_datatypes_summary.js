// Primitive datatype
// 7 types 
/* 1 : string , : number , 3 : boolean , 4: null , 5: undefined , 6: symbol , 7: BigInt */
// In primitive datatype we dont get the reference of data , we get the copy of data and we perform the operation on it

const score = 100   // datatype int
const scoreValue = 100.3   // datatype float
const isLoogged = false   // boolean
const outSideTemp = null   // datatype object
let userEmail;  // undefined
const id = Symbol('123')   // datatype symbol
const anotherId = Symbol('123')

// console.log(id)
// console.log(anotherId)
// console.log(id === anotherId)  // means values are same till they are not same

const bigNumber = 3484634138731147364648n
// console.log(typeof bigNumber)   //bigint


// ststic typed language means datatype must be defined while writing the code and check while compile time . through this we can get all the bugs at the same time
// dynamically typed means we dont need to define the datatype first , it will check the datatype while run time, this makes the coding fast
// javascript is a dynamically typed language


// Reference type or Non primitive
// we get the reference of these datatype 
// Arrays, object, functions

const heros = ["shaktiman", "naagraj", "doga"]
let obj = {
    name: "nityanand",
    age: 24,
}   // datatype object

const fun = function (){
    console.log("hello world")
}
// console.log(typeof obj)  // datatype  function




// *******************************************************************
//******************Stack and heap memory*****************************
/* there are two types of memory 
1.stack memory  
2.Heap memory

=> in the primitive datatypes the stack memory is used
=> in the non primitive datatypes the heap memory is used
=> when the memory is define in the stack then we get only copy of original variable
=> and when the memory is allocated in the heap memory we get the reference of the original variable
*/

// example

let myYoutube = "nitya"  // will get memory in stack
let anotherName = myYoutube   // here it get only copy of variable
// console.log(anotherName)  // nitya
anotherName = "nityanand"  // make changes in other variable 
// console.log(anotherName)  // nityanand
// console.log(myYoutube)   //nitya

let user1 = {      // will get memory in heap
    email : "abc@gmail.com",
    upi : "user@yibl"
}
let user2 = user1
user2.email = "nitya@gmail.com"

console.log(user1)   // { email: 'nitya@gmail.com', upi: 'user@yibl' }
console.log(user2)   // { email: 'nitya@gmail.com', upi: 'user@yibl' }