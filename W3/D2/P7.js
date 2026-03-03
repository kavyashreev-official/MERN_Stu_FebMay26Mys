//Arrow Function

//Syntax 
(args)=>{
    //body of the function
}

//Add two numbers(approach 1)
const Sum=(a,b)=>{
    return a+b;
}
console.log("3+5= ",Sum(3,5));

//Single line return/ implicit return(approach 2)
const square=x=>x*x;
console.log("Square of 44: ",square(44));

//(approach 3)
const sayHello=()=>console.log("Hello from arrow function");
sayHello();