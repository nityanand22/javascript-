//***************Array**********************/

const myArr = [0, 1, 2, 3, 4, 5]

// console.log(myArr[0])  // 0

/* we can copy of an array   1 => Shallow copy    2 => deep copy
 Shallow copy => share the same refernce means if we make changes in the shallow copy or in the original array , the changes reflects to the original array or in the shallow copy of the array also
 deep copy => does not share the refernce means if we makes changes in the original array , the changes does not reflects to the deep copy of the array
 */

const myHeroes = ["Shaktiman", "nagraj"]
const arr2 = new Array(1, 2, 3, 4, 5);
// console.log(arr2)

//*******************Array Methods*******************************//

// myArr.push(6)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift(9)

// console.log(myArr.includes(5))  // true
// console.log(myArr.indexOf(3))  //  3

// const newArr = myArr.join()
// console.log(myArr)  // [0, 1, 2, 3, 4, 5]
// console.log(newArr)  // myArr provides to the newArr but the type of newArr is not Array . It becomes String. 0,1,2,3,4,5

//**************Slice, Splice*********************

// console.log("A" , myArr)  //  A [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 4)
// console.log(myn1)   // [1, 2, 3]
// console.log("B" , myArr)  // B [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1, 3)
// console.log(myn2)  //  [ 1, 2, 3 ]
// console.log("C" , myArr)  // C [ 0, 4, 5 ]

// slice does not change the original array but splice also changes the original array. 

let marvel_heros = ['thor' , 'ironman', 'spiderman']
let dc_heroes = ['superman' , 'flash', 'batman']

// marvel_heros.push(dc_heroes)
// console.log(marvel_heros)   // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros.flat())  // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

let allHero = marvel_heros.concat(dc_heroes)
// console.log(allHero)  // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//******Spread Operator*************/
const allHeroes = [...marvel_heros, ...dc_heroes]
// console.log(allHeroes)    // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const myRealArr = anotherArr.flat()   // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]  default is 1
// const myRealArr = anotherArr.flat(2)   //  // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]
const myRealArr = anotherArr.flat(Infinity)   //  // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5 ]
// console.log(myRealArr)



console.log(Array.isArray("nitya"))   // false

console.log(Array.from("Niitya"))   // [ 'N', 'i', 'i', 't', 'y', 'a' ]

console.log(Array.from({name : "nitya"}))   // []
// here it cant make it an array as he cant understand to make array of which value so it gives an empty array and in every cases where it cant perform it will give an empty array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))  // [ 100, 200, 300 ]