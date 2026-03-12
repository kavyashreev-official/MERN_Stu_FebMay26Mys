const asyncFetchBtn=document.getElementById("asyncFetchBtn");
const output=document.getElementById("output");

asyncFetchBtn.addEventListener("click",
    async function(){
        try{
            const response=await
            fetch("https://jsonplaceholder.typicode.com/users");
            if(!response.ok) throw new Error("HTTP error: "+response.status);
            const users=await response.json();
            console.log(users);
            
            //to split 10 id's into 3 id's
            const firstThree=users.slice(0,3); 
            console.log(firstThree);
            output.textContent = JSON.stringify(firstThree, null, 2);
        }
        catch(error){
            output.textContent="Error:"+error.message;
        }
    })