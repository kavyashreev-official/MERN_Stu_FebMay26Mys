// CreateElement() & appendChild()

const list=document.getElementById("list");
let counter=1;

document.getElementById("addBtn").addEventListener("click",function(){
    const li=document.createElement("li");    
    li.textContent="Item " + counter++;
    list.appendChild(li);
    errMessage.textContent="";
    
});
document.getElementById("rmBtn").addEventListener("click",
    function(){
        if(list.lastElementChild){
        list.removeChild(list.lastElementChild);
        }
        else{
           errMessage.textContent="No Item to delete"; // should create new id for it not use list.textContent
        };

    });