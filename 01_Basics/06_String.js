const name = "Nitya"
const repoCount = 1
// console.log(name + repoCount + " repo")

// using backtick is means this is called string interpolation and we can use method also directly like
// console.log(`hello my name is ${name.toUpperCase()} and i have only ${repoCount}`)
// console.log(name[2])  // t

// there is an another method of declaring a string is String Object
const gameName = new String("Cricket-indian-game")
// it gives us gameName in key Value Pairs like 0:C, 1:r, 2:i, 3:c etc 
// console.log(gameName[1])  // r

// with the string object we get another object named proto along with String object
// console.log(gameName.__proto__)   // {}  here we get empty but all property we can see on browser

// console.log(gameName.length)  // 7

// console.log(gameName.toUpperCase())   // CRICKET
// console.log(gameName.charAt(3))    // c
// console.log(gameName.indexOf("t"))  // 6


// In case of substring if we give the negative values till it will conside it as positive and starts from 0
const newString = gameName.substring(0, 3)
console.log(newString)  // cri

// but slice takes negative and starts from behind
const anotherString = gameName.slice(2,5)
console.log(anotherString)  // ick

const newStringOne = "    Nitya  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://nitya.com/nityanand%20vishwakarma"
console.log(url.replace("%20" , "-"))

console.log(url.includes("nitya"))   // true

console.log(gameName.split("-"))