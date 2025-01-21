// singleton
// Object.create

// object literals
 const mySymbol = Symbol("kaaluKey1")


const jsUser = {
    name: "hitesh",
    [mySymbol] :"kanchiii",
    age:21,
    location:"behal",
    email: "gautamsini@9909.com",
    lastLoggindays: ["monday","tuesday"]
}
// console.log(jsUser.location);
// console.log(jsUser["email"]);
// console.log(jsUser[mySymbol]);

jsUser.email = "kashish_b@google.com";
// Object.freeze(jsUser);
// console.log(jsUser);
jsUser.email = "harshiii_b@google.com";
// console.log(jsUser);

jsUser.greeting = Function()
{
    console.log("hello user")
}
console.log(jsUser.greeting())

jsUser.greetingTwo = Function()
{
    console.log(`hello js user,${this.location}`);
}
console.log(jsUser.greetingTwo());



