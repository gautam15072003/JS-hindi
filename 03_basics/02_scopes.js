// var c = 300
let a = 500
if(true){
    let a = 10
    const b= 20
//    console.log("inner val:",a);
    
}
//  console.log(a);
// console.log(b);
// console.log(c);



function one(){
    const username = "Gautam";
// console.log(username)
    function two(){
        const website = "youtube";
        console.log(username);
        
    }
    // console.log(website);
    //  two()
    
}

// one ()


if (true) {
    const username = "Gautam"
    if (username === "Gautam") {
        const website = "dhapli.com"
        // console.log(username+website)
    }
    // console.log(website);
    
}
// =======================mini hoidting +++++++++++++++++++++++++++++++++++++++++++=
console.log(addone(5))
function addone(num1){
    return num1+1
}
// addone(5)


// addTwo()
const addTwo = function(num){
    return num+2
}
// addTwo()