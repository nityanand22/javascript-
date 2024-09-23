// If  if else
/*
// const isUserLoggedIn = true
// const temperature = 35

// if(temperature < 50){
//   console.log("less than 50")
// }
// else{
//   console.log("not less than 50")
// }


// const score = 200
// if(score > 100){
//   const power = "fly"
//   // var power = "fly"  //  dont use var
//   console.log(`User Power: ${power}`)
// }
// console.log(`User Power: ${power}`)

// const balance = 1000
// if(balance > 500) console.log("test1"), console.log("test2")    // Implicit scope  
//  we can run multiple statement with comma but this is not a good practice

// if(balance < 500){
//     console.log("less than 500")
// } else if(balance < 750){
//   console.log("less than 750")
// } else if(balance < 900){
//   console.log("less than 900")
// } else{
//   console.log("less than 1200")
// }

// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if(userLoggedIn && debitCard){
//   console.log("Allow to buy courses")
// }
// if(loggedInFromGoogle || loggedInFromEmail || 2==3){
//   console.log("User Logged In")
// }
*/

/*************  Switch *******************/
/*
const month = 3
switch (month) {
  case 1:
    console.log("january")
    break;
  case 2:
    console.log("february")
    break;
  case 3:
    console.log("March")
    break;
  case 4:
    console.log("April")
    break;

  default:
    console.log("default case")
    break;
}
*/

/************** Truthy and Falsy Value *********************/
/*
// const userEmail = "abc@gmail.com"  // true
// const userEmail = ""  // false
const userEmail = []
// if(userEmail){
//   console.log("got user email")
// } else{
//   console.log("not found user email")
// }

//  falsy value => false, 0, -0, BigInt 0n, "", null, undefined, NaN
// truthy value => "0", "false", " ", [], {}, function(){}

// if(userEmail.length === 0){
//   console.log("Array is empty")
// }

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
  console.log("Object is empty")
}
*/

// Important => Nullish Coalescing Operator (??) : null undefined
/*
let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 20
val1 = null ?? 10 ?? 15

console.log(val1)
*/


// ternary Operator
/*
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
*/