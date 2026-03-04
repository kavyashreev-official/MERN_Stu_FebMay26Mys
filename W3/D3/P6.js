//Nested Objects & Method
const student={
    firstName:"Santhosh",
    lastName:"Sharma",
    scores:{
        math:80,
        science:83
    },
    hobbies:["reading","singing"],
    fullname(){
        return this.firstName + " " +this.lastName;
    },
    greet(){
        console.log("Hi, ",this.firstName());
    }
};
console.log(student.fullname());
// console.log(student.scores.math);