const accountId = 144553
let accountEmail = "nityanandv9795@gmail.com"
var accountPassword = "12345"
accountCity = "mumbai"
let accountState ;

// accountId = 2  // Not Allowed

accountEmail = "nitya@gmail.com"
accountPassword = "6483685"
accountCity = "nashik"

/* 
 Prefer not to use var
 because of issue in block scope and functional scope
*/
console.table([accountId , accountEmail , accountPassword , accountCity , accountState])
