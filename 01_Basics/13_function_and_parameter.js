function sayamyname() {
    console.log("N")
    console.log("i")
    console.log("t")
    console.log("y")
    console.log("a")
  }
  // sayamyname()
  
  // function addTwoNum(num1 , num2){
  //   console.log(num1 + num2)
  // }
  // addTwoNum(5, 3)   // 8
  // addTwoNum(5, "4")   //  54
  // addTwoNum(5, "a")  // 5a
  // addTwoNum(5 , null)   //   5 
  // addTwoNum("a"  , null)   // anull
  // addTwoNum(5 , true)   // 6
  // addTwoNum("4" , true)  // 4true
  // addTwoNum(null , true)   //  1
  
  
  
  function addTwoNum(num1, num2) {
    return num1 + num2
  }
  const result = addTwoNum(5, 3)
  // console.log(result)  // 8
  
  
  function logInUserMsg(username = "Sam") {
    if (!username) {
      console.log("Please enter your name")
      return
    }
    return `${username} just logged in`
  }
  const username = logInUserMsg("Nityanand")
  // console.log(username)   // Nityanand just logged in 
  
  // logInUserMsg()
  // console.log(logInUserMsg())   //  undefined just logged in
  
  
  function calculateCartPrice(...num) {
    return num
  }
  // console.log(calculateCartPrice(200, 400, 800, 1000))
  
  const user = {
    username: "Nityanand",
    age: 59
  }
  function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.age}`)
  }
  // handleObject(user)
  // handleObject({ username: "Sam", age: 24 })
  
  
  const myNewArray = [200, 400, 600, 7000]
  function returnSecondValue(getArray){
      return getArray[1]
  }
  // console.log(returnSecondValue(myNewArray))
  console.log(returnSecondValue([100, 200, 300]))