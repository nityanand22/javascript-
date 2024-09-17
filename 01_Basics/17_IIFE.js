//  Immediately invoked Function Expression

function chai(){
  console.log("line no 4 function is running through invoking");
}
chai();

//  both function cont work together

//  This is named IIFE
(function code(){
  console.log("line no 9 function is running through IIFE")
})();

//  global scope ke varibale se jo problem hota hai usse bachne ke liye IIFE ko laya gya

//  This is un-named IIFE
( ()=> {console.log("hello world")})();
( (name)=> {console.log(`hello ${name}`)})("Nityanand");

/*************** Most Important point***********************/
//  when we are using IIFE function , must use semocolon in the last because it does not know where to stop the execution 
