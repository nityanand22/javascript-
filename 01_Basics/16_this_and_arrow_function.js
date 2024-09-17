const user = {
  username: "nityanand",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} welcome to the website`)
    console.log(this)
  }

}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()


// console.log(this)    //   {}

// function chai(){
//   let username = "nitya"
//   console.log(this)
//   console.log(this.username)   // undefined
// }
// chai()

// const chai = function(){
//   let username = "nitya"
//   console.log(this.username)   //  undefined
// }
// chai()   


// const chai = () => {
//   let username = "nitya"
//   console.log(this.username)   //  undefined
//   console.log(this)   //  {}
// }
// chai()    


// const addtwo = (num1, num2) =>{
//   return num1 + num2      //  explicit return 
// }
// console.log(addtwo(5, 2))  // 7


// const addtwo = (num1, num2) =>  num1 + num2
// const addtwo = (num1, num2) => (num1 + num2)   // this is called implicit return 

const addtwo = (num1, num2) => ({username : "Nityanand"})  //  return => {username : "Nityanand"}
console.log(addtwo(5, 2))  // 7


const myArr = [2, 3, 4, 5, 6]
myArr.forEach(function(){})
myArr.forEach(() => {})
// myArr.forEach(() => ())  // for return type.
