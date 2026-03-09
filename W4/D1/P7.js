// Selecting elements in DOM
//getElementById
// console.log("Document object: ",document);
// console.log("Page title",document.title);

// const heading=document.getElementById("mainHeading");
// console.log("Heading text",heading.textContent);

//getElementByClassName
const info=document.getElementsByClassName("info");
const run=document.getElementById("run");


//getElementsByTagName
const spanTag=document.getElementsByTagName("span");
run.addEventListener("click",function(){
    for(let i=0;i<info.length;i++){
        console.log(info[i].textContent);
        info[i].style.color="blue";
    }
    for(let i=0;i<spanTag.length;i++){
       spanTag[i].style.backgroundColor="lightgreen";

    }

     //Query selector: returns the first element matching a css selector
      const mainFirstHeading=document.querySelector(".mainHeading"); //for class . & for id #
      mainFirstHeading.style.color="red";
});


//Query selector all: returns all  elements matching the selector

const task=document.querySelectorAll(".task");
// task.style.color="pink";   //not works becoz it as list of 3 no.
task.forEach(function(task){
    task.style.color="purple";
})