function sayMyName() {
    console.log("G");
    console.log("a");
    console.log("u");
    console.log("t");
    console.log("a");
    console.log("m");
}
// sayMyName() // funtions refrence and execution

// function addTwoNumber(num1,num2){
// console.log(num1+num2);
// }
// const result = addTwoNumber(3,4)
// console.log("result:",result);




sayMyName() // funtions refrence and execution

function addTwoNumber(num1,num2){
let result = num1+num2
return result;
console.log("gautam"); // after return funtion result does not print or execute a value
}
const result = addTwoNumber(3,4)
// console.log("result:",result);

function UserloggedIn(username){
    return`${username} just logged in`
}
console.log(UserloggedIn("hitesh"));