const container=document.getElementById("container");
// Postion:
// beforebegin:  at start 
// afterbegin: at start 
// beforeend: end of the given texts
// afterend: end of the given texts
document.getElementById("btn").addEventListener("click",function(){
    container.insertAdjacentHTML("beforebegin","<p>Dynamically inserted</p>");
});