//Array Basics
console.log("Array Basics");
//creating arrays
let emptyArray=[];
let numArray=[1,2,3,4];
let mixArray=[42,"hello",true,null,{name:"Gola"},[5,6]];
console.log(emptyArray);
console.log(numArray);
console.log(mixArray);

//using constructor
let fruits=new Array("Apple","Mango");
console.log(fruits);
console.log("Is fruits an array?",Array.isArray(fruits));

//Push- to add a new value to array
fruits.push("Cherry");
console.log(fruits);

//pop-delete(remove)
fruits.pop();
console.log(fruits);

//unshift- adds elements to beginning
fruits.unshift("Orange");
console.log(fruits);

//shift-remove from beginning
fruits.shift();
console.log(fruits);