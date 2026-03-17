// writing custom callback function

function processStudent(name,score,callback,call){
    console.log("Student name: ",name);
    console.log("Score: ",score);

    callback(name,score);
    call(name,score);
}
function showGrade(name,score){
    if(score>=85){
        console.log("Grade: A+");
    }
    else if(score>=75){
        console.log("Grade: A");
    }
    else if(score>=70){
        console.log("Grade: B");
    }
    else{
        console.log("Grade: Fail");
    }
}
function showResult(name,score){
    if(score>=70){
        console.log(name+ "has passed.");
    }
    else{
        console.log(name+" has failed");
    }
}

// processStudent("Kavya",87,showGrade);
processStudent("Kavya",30,showGrade,showResult);