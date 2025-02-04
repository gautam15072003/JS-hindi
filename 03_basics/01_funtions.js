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
    if(username === undefined){
        console.log("please enterusername")
    }
    return`${username} just logged in`
}
console.log(UserloggedIn());


function PriceofCart(val1,val2,...num1){ //rest of ...
    return num1
}
console.log(PriceofCart(200,400,500,600,700))

const user = {
    username: "gautam",
    price: 500
}

function handleObject (anyobject){
    console.log(username is ${anyobject.username}and price of item is ${anyobject.price})
}
// handleObject(user)

handleObject({
    username: "kaalu",
    price: 200
})


const myNewArray = [200,400,500,700,800]

function returnSecondValue(getarray){
        return getarray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([300,600,500,600]));