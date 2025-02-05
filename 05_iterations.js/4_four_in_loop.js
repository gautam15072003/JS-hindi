const myObject ={
    js:"javascript",
    cpp:"c plus plus",
    swift:"swift is by apple"
}
for (const key in myObject) {
    console.log(`${key} is short name of ${myObject[key]}`);
    
}

const myArray = ["js","py","cpp","rb"]
for (const key in myArray) {
    
        console.log(myArray[key])
    }

// const maps = new Map()
// maps.set('In',"india")
// maps.set('USA',"united states of america")
// maps.set('Fr',"France")
// maps.set('In',"india")

// for (const key in maps) {
//     console.log(key)
        
//     }            /// this kind of iterations can't be done here in forin 

