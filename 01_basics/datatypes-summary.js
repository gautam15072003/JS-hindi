// primituve
// types: string,number,boolean,null,undefined,bigInt,symbol


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId)

const bigNumber = 456789n

// refrence(non-primitive)
// Array,objects,functions

// const heroes = ["shaktiman","doga"] ;//array
// let my objects= {
//  name:"gautam",
//     age:22,
// }

// const my function = function(){
//     console.log("hello world")
// }



// ----------------memory types-------------------------------------

// stack(primitve),heap(non-primitive)

let mygirlFrienName = "kritika"
let anotherGfName = mygirlFrienName
 anotherGfName = "kashish"
 console.log(mygirlFrienName)
 console.log(anotherGfName)

 let userOne = {
    email: "gautamsaini1507@gamil.com",
    upi: "gaut1507@oksbi"
 }
 let userTwo = userOne
 userTwo.email = "kashish_b@gmail.com"
 console.log(userTwo.email);
 console.log(userOne.email);
