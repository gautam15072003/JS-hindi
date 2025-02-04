const user = {
    username:"Gautam",
    price:999,

    welcomeMessage :function(username){
        console.log(`${this.username},welcome to website`)
        console.log(this); // talk about current context
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// function bhujia(){
//     let username = "Kashish"
//     console.log(this.username) // function ke andar this kaam nahi krta
// }
// bhujia()

// const chai = function(){
//     let username = "Kashish"
//     console.log(this.username)
// }
// chai()


const chai = () => {
    let username = "Kashish"
    console.log(this.username)
}
// chai()



const addTwo = (num1,num2) => {
    return num1+num2; // explicit 
}
console.log(addTwo(3,122));

const addTwo1 = (num1,num2) => (num1+num2) // implicit return
// agar paranthesis use krte haihn toh return use ka nahi hai aur curly braces mein hai use return keywoed ka
console.log(addTwo(3,122));

const addTwo1 = (num1,num2) => ({username:"hitesh"})
console.log(addTwo(3,122));