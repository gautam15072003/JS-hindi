//
for (let i = 0; i < 10 ; i++) {
    const element = i;
    if (element== 5) {
        // console.log(`5 is best number`);
        
    }
    // console.log(element)
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outerloop value:${i}`)
    for (let j = 1; j <=10; j++) {
        // console.log(`innner loop value is:${j} and outer loop value is:${i}`)
        // console.log(i +'*'+j+'='+i*j)
    } 


}
let myarray = ["flash","batman","superman"]
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
}


// for (let index = 1; index <= 20; index++){
//     if (index==5) {
//       console.log(`detected element is: ${index}`);
//         break
//     }
//      console.log(`the element is ${index}`);
     
// }

for (let index = 1; index <= 20; index++){
    if (index==5) {
      console.log(`detected element is: ${index}`);
        continue
    }
     console.log(`the element is ${index}`);
     
}