// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,0,23,5,7,8)
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleDateString())

// let myCreatedDateOne = new Date("01-14-2023") 


// let myTimeStamp = Date.now()
// console.log(myTimeStamp);         
// console.log(myCreatedDateOne.getTime()); //used in comparisons and making winner in pole yime competetion 

console.log(typeof Math.round(Date.now()/1000)) // ye hai in seconds

let newDate = new Date()
console.log(newDate.getMonth()+1);

newDate.toLocaleString("default",{
      weekday:"long",
      hour:"numeric"


})
