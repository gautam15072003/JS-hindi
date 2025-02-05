// for of
// ["","",""] 
// [{},{},{}]

let array = [1,2,3,4,5]
for (const i of array) {
    console.log(i);
}

let greetings = "hello world"
for (const greet of greetings) {
    console.log(`each character of a word is ${greet}`)
    
}
//maps 
const maps = new Map()
maps.set('In',"india")
maps.set('USA',"united states of america")
maps.set('Fr',"France")
maps.set('In',"india")
console.log(maps);