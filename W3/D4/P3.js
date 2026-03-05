//Array map
let numArray=[1,2,3,4];
let squareArray = numArray.map(function(num){
    return num * num;
});
console.log(squareArray);

//
let pricesWithGST=prices.map(princes=>princes+princes*0.18);
console.log("Price without tax",princes);
console.log("Price with tax",princes);
console.log("Price with tax: ",pricesWithGST);

//using map to extract files
let users=[
    {name:"Arjun",age:24},
    {name:"Krishna",age:28}
];
let names=users.map(user=>user.name);
console.log("", names);