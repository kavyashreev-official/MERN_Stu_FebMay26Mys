// Introduction to callback function
function greetUser(name,callback){
    console.log("Hello ," +name);
    // the callback function is executed only after the execution of the current function
    callback();
}
function showcCompletionMessage(){
    console.log("The greeting task is complete.");
}
greetUser("Ranjith", showcCompletionMessage);