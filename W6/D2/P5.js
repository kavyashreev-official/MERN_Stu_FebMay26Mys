//Microtasks & Macrotasks in Node.js

console.log("1. Synchronous start.");

//Promise.resolve(...).then(...) to schedule a microtask
Promise.resolve().then(function(){
    console.log("3. Promise microtask executed.");
});
// setTimeout(...,0) schedules task for later time.
// Even with 0 delay, it doesn't interrupt current synchronous code
setTimeout(()=>{
    console.log("4. Timer callback executed.");
},0);

console.log("2. Synchronous end.");