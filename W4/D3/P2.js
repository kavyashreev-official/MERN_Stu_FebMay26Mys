const themeInput=document.getElementById("themeInput");
const output=document.getElementById("output");

document.getElementById("saveBtn").addEventListener("click",
    function(){
        localStorage.setItem("theme",themeInput.value);
        localStorage.setItem("userName","Kavya");
        localStorage.setItem("loggedin","true");
        console.log("Saved theme: ",themeInput.value);
        output.textContent="Successfully saved!" 
        output.style.color="green";
    });

document.getElementById("readBtn").addEventListener("click",
    function(){
        const theme=localStorage.getItem("theme");
        output.textContent="Theme is: "+theme; 
        output.style.color="green";
    });

document.getElementById("removeBtn").addEventListener("click",
    function(){
        localStorage.removeItem("loggedin");
        output.textContent="Removed 'loggedin'"; 
        output.style.color="green";
    });

document.getElementById("clearBtn").addEventListener("click",
    function(){
        localStorage.clear();
        output.textContent="Deleted the localStorage."; 
        output.style.color="red";
    });