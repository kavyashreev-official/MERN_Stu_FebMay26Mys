//Immediately Involked Function expression(IIFE)
//IIFE without parameters
(function(){
    console.log("Basic IIFE executed immediately");
})(); //write funct. call along with declaration

//IIFE with parameters
(function(appName,version){
    console.log("App: ",appName,"Version: ",version);
})("NodeJs","v22.22.0");

//IIFE with return value
const result=(function(){
    const a=10, b=20;
    return a+b;
})();
console.log("Sum is ",result);
