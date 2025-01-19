 const name = "gautam"
 const repositoraryCount = "1"
 console.log(`my name is ${name}&my repositorary count is ${repositoraryCount} `)

 const gameName = new String('Gautam-hc-com-kashish')
 console.log(gameName[0]);

 console.log(gameName.length)
 console.log(gameName.charAt(2))
 console.log(gameName.indexOf('d'))

 const newStringOne = gameName.substring(0,4);
 console.log(newStringOne)
 const newStringTwo = gameName.slice(-8,4)
 console.log(newStringTwo)

 const aCommonName = "   Gautam   "
 console.log(aCommonName)
 console.log(aCommonName.trim())
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
// trim documentation 
const url = "https://gautam.com/hitesh%20choudary"
console.log(url.replace('%','='))
console.log(url.includes('kashish'))
console.log(gameName.split('-'))
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith

