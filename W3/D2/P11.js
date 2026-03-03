//Recursive function 
// a func. which calls itself

function factorial(n){
    if(n<-1){
        return 1;
    }
    return n*factorial(n-1);
}