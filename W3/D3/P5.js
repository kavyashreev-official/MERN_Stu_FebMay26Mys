//Basics of Objects
const person={
    name:'Rahul',
    age:30,
    isStudent:false
};
console.log("Person",person);
console.log("Name:",person['name']);
console.log("Age:",person['age']);
console.log("Is student:",person['isStudent']);

//Add a new property 
person.city="Mysore";
console.log("Person",person);

//Modify 
person.age=31;
console.log("Person",person);

//Delete
delete person.isStudent;
console.log("Person",person); 


//Object Constructor 
const car=new Object();
car.make="Adui";
car.model="A4";
car.year=2026;
console.log("Car info",car);