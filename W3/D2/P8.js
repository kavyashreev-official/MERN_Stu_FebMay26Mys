//Default Paraments
function product(a=1,b=2) {
    return a*b;    
}
console.log("Product of 15 and 4:",product(15,4));
console.log("Product of 15:",product(15));

//Rest paraments
function sumOfAll(...numbers){
    console.log(...numbers)
}
sumOfAll(1,2,3);
sumOfAll(8);