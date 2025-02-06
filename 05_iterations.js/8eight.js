const myArray = [1,2,3,4,5]
// const mytotal = myArray.reduce(function(accumulator,currentvalue){
//     console.log(`accumulator value ${accumulator} and current value ${currentvalue}`);
//     return accumulator + currentvalue
// },0)
const mytotal = myArray.reduce((acc,currentval)=> acc+currentval,0)
console.log(mytotal);


const myshoppingCart = [
    { coursename:"javascript",
        price:2999
    },
    { coursename:"mobile developement",
        price:5999
    },
    { coursename:"dsa corse",
        price:12999
    }
]

const totalPrice = myshoppingCart.forEach() 
console.log(totalPrice);
