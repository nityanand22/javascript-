// Singleton  
//  when we create an object using constructor then it becomes singleton object
// Object.create()   // using this constructor we create singleton object



// but when we create object using literals then multiple instance becomes

// Object Literals

const mySym = Symbol("key1")  // to use a symbole as a key with symbole datatype then we have to use it in [] bracket without "". if we use mySym directly then it will considered as string 

const jsUser = {
    "full name": "Nityanand",
    age: 21,
    [mySym]: "myKey1",
    location: "maharastra",
    email: "abc@gmail.com",
    isLoggedIn: true,
    lastLogIn: ["monday", "tuesday"]
}
// console.log(jsUser.email)     // abc@gmail.com
// console.log(jsUser["email"])   // abc@gmail.com
// console.log(jsUser["full name"])   // Nityanand
// console.log(jsUser[mySym])

jsUser.email = "bcd@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "pqr@gmail.com"   // not used

// console.log(jsUser)   
/*  {
  'full name': 'Nityanand',
  age: 21,
  location: 'maharastra',
  email: 'bcd@gmail.com',
  isLoggedIn: true,
  lastLogIn: [ 'monday', 'tuesday' ],
  [Symbol(key1)]: 'myKey1'
} 
  */
// note that mySym we have used as a key so while printing the jsUser it automatically declaring that it is a Symbole

jsUser.greet = function () { console.log("Hello Js User") }
jsUser.greet()

jsUser.greet2 = function () { console.log(`hello js User ${this.name}`) }
jsUser.greet2()