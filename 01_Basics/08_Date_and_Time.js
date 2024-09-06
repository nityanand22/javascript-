// Dates 

// let myDate = new Date()
// console.log(myDate)   // 2024-09-06T12:07:29.101Z
// console.log(myDate.toString()) //  Fri Sep 06 2024 17:37:57 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString())  // 2024-09-06T12:10:28.799Z
// console.log(myDate.toDateString())   //  Fri Sep 06 2024
// console.log(myDate.toLocaleDateString())  //  6/9/2024
// console.log(myDate.toJSON());   //  2024-09-06T12:10:28.799Z
// console.log(myDate.toLocaleTimeString())   //  5:41:38 pm
// console.log(myDate.toTimeString())  // 17:43:51 GMT+0530 (India Standard Time)

// console.log(typeof myDate)  // object(important)

let createDate1 = new Date(2023 , 0 , 23)
// console.log(createDate1.toDateString())   // Mon Jan 23 2023
//  In javasscript the months start from the zero (important)

let createDate2 = new Date(2023, 0, 23, 5, 3)
// console.log(createDate2.toLocaleString())   // 23/1/2023, 5:03:00 am

let createDate3 = new Date("2023- 01-14")
// console.log(createDate3.toLocaleString())   // 14/1/2023, 12:00:00 am

// we can also use this format new Date("mm- dd- yy") => ("01-14-2023") => output = 1/14/2023, 12:00:00 AM

// we use the timestamp when we design the quizes for the fastest answer for find the winner, when we design polls, 
let myTimeStamp = Date.now()
// console.log(myTimeStamp)   // 1725625472470  MiliSec

// console.log(createDate3.getTime())   // 1673634600000 Milisec

// console.log(Math.floor(Date.now() / 1000))   //  1725625655 Sec

let newDate = new Date()
// console.log(newDate.getMonth()+1)   // get the exact month and day
// console.log(newDate.getDay()+1)

console.log(newDate.toLocaleString('default', {
  weekday: "long",
  month : "long",
}))    // September Friday

// When we press the (ctrl + space) then we can see the property and methods of toLocaleString() or anyother methods


// this is the trial