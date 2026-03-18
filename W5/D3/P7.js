// Sequential await vs parallel promise execution
function taskA(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Task A complete.");
        },1000);        
    });
}
function taskB(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Task B complete.");
        },1000);        
    });
}
async function runSequential() {
    console.log("Sequential");
    const a=await taskA();
    const b=await taskB();
    console.log("Sequential");
    console.log(a);
    console.log(b);    
}
await runSequential();

async function runParallel() {
    console.log("Parallel");
    const results=await Promise.all([taskA(),taskB()]);
    console.timeEnd("Parallel");
    console.log(results[0]);
    console.log(results[1]);
}
await runParallel();