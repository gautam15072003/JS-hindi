const chijji = ["kurkure","chips","chocolates"]

chijji.forEach( function (items){
console.log(items);

})

chijji.forEach( (item)=> {   //arrow function 
    console.log(item);
    
})

function printtext(item){
    console.log(item)
}
chijji.forEach(printtext)


chijji.forEach((item,index,array)=>{
    console.log(item,index,array)
})



const myChijji = [
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]
myChijji.forEach((objects)=>{
    console.log(objects.languageFileName)
})