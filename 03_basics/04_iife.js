// immediately invoke function expressions(IIFE)
(function chai(){
    console.log(`db connected `);
})();

((name) => {
    console.log(`dn connected tooooooo,${name}`);
    
})('hitesh')

(function tantrashaf(){   //named iife
    console.log(`dn connected tooooooo`);
    
})()