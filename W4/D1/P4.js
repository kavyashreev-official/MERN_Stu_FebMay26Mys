//Logging

// log- for printing messages
console.log("Console logging");

//using warn- used for printing only warning message
console.warn("Warning message");

//using error-used for printing error message
console.error("Error message");

let users = [
    {id:1,name:"Amit"},
    {id:2,name:"Santhosh"},
];
console.log(users);  //to print in single line
console.table(users); //to print in table format

//Group related logs 
console.group("Grouped logs");
console.log("Log 1");
console.log("Log 2");
console.log("Log 3");
console.groupEnd();

//measure the execution time
console.time("LoopTimer");
for(let i=0;i<1000;i++){}
console.timeEnd("LoopTimer");
