// const tinderUser = new Object()  // Singleton Object
const tinderUser = {}  // Non Singleton Object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)



const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {
            firstname: "nitya",
            lastname: "vishwakarma"
        }
    }
}
// console.log(regularUser.fullname.userFullName.firstname) // nitya

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }

// const obj3 = Object.assign({}, obj1, obj2)  
/* optional parameter and its good to use it. {} is a target object where all the properties are stored and others are source objects. We have an option that we can make an object as target and others as source like below , I have make obj1 as target and obj2 as source */

/*
Object.assign( obj1, obj2)
console.log("object 1 is" , obj1) 
*/

// const obj3 = {...obj1 , ...obj2}  // this method is most used method
// console.log(obj3);

/* here is a scenario when the data will come from database. then it comes in the form of array like [{}, {}, {}] */
const user = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "pqr@gmail.com"
    }
]
// console.log(user[1].email);
// console.log(tinderUser)
// console.log(Object.keys(tinderUser)) // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser)) //  [ '123abc', 'sammy', false ]
console.log(Object.entries(tinderUser))   //  [ [ 'id', '123abc' ], [ 'name', 'sammy' ], [ 'isLoggedIn', false ] ]   in the form of array , first value is key and second is value

// to check that the object has the given property exist or not
console.log(tinderUser.hasOwnProperty('isLoggedIn'))  // true
