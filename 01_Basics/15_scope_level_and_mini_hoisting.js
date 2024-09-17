function one() {
  const username = "Nityanand"

  function two() {
    const website = "youtube"
    console.log(username)
  }
  console.log(website)

  two()
}
// one()

if(true){
  const username = "nityanand"
  if(username == "nityanand"){
    const website = "chrome"
    console.log(username + website)
  }
  // console.log(website)
}
// console.log(username)


//***************************Interesting***************************/

function addone(num){
  return num + 1
}
console.log(addone(5))

const addtwo = function(num){
  return num + 2
}

console.log(addtwo(addone(5)))