// Filter method
let marks=[75,49,56,70,82,51];
let passed=marks.filter(mark =>mark>=70);
console.log(marks);
console.log(passed);

let students=[
    {name:"A",score:45},
    {name:"B",score:75},
    {name:"C",score:40},
    {name:"D",score:99},
    {name:"E",score:65},
    {name:"F",score:50}
];
// using filter()
console.log(students);
let passed1=students.filter(student =>student.score>=70);

//using map()
console.log(passed1);
let nameof=passed1.map(student=>student.name);
console.log(nameof);

//using both map & filter()
let passed2=students.filter(student =>student.score>=70).map(student=>student.name);
console.log(passed2);
