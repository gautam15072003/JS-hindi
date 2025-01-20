const arry = [0,1,2,3,4,5,]
// console.log(arry[0])

// const supHeroes = new Array("ironman","ramphal","gogo")
// console.log(supHeroes)
// // array methods
// arry.push(6) // add values 
// console.log( arry)
// arry.pop() //removes last value
// console.log( arry)

// arry.unshift(9) //adds values from the first place in array
// console.log(arry)
// arry.shift()
// console.log(arry)

// console.log(arry.includes(5))



//  const myArray = arry.join() // turns array to string 
//  console.log(myArray)
//  console.log(arry)
  

//slice and splice 

console.log("A",arry);

console.log("B",arry.slice(1,3));
console.log("A",arry);

const myarrOne = arry.splice(1,3)
console.log("C",myarrOne);
console.log("B",arry); // slice donot manuplate with the orignal array
                        //and the splice manuplate with the orignal array
                        //and this is how the the shallow and deep memmory is used
                        //in the shallow memory the refrence value is called as in the splice
                        //and in deep as in the slice





