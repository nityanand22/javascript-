//  for loops

for(let i = 1; i <= 10; i++){
  if(i == 5){
    // console.log("5 is the best number")
  }
  // console.log(i)
}

for (let i = 0; i < 10; i++) {
  // console.log(`Outer loop value: ${i}`)
  for(let j = 0; j<10; j++){
      // console.log(`Inner value: ${j}`)
  }
}


let heros = ["flash" , "superman" , "batman", "aquaman" , "green lantern"]
for (let index = 0; index < heros.length; index++) {
  const element = heros[index];
  // console.log(element)
}

for(let i=1; i<=10; i++){
  if(i === 3){
    continue
  }
  if(i === 7){
    break
  }
  console.log(i)
}