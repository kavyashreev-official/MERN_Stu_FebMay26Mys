//Callback function
//is a func. which is passed as an argument to another func.

function greetUser(name,callback){
    console.log("Hello, ",name);
    callback();
}
greetUser("Kavya",function(){
    console.log("Callback function executed");
});