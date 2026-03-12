const asyncFetchBtn=document.getElementById("asyncFetchBtn");
const output=document.getElementById("output");

asyncFetchBtn.addEventListener("click",
    // async is used becoz 
    async function(){
        output.textContent="Loading user ....";
        try{
            const response=await   //await: it waits till respose is received
            fetch("https://jsonplaceholder.typicode.com/posts/13");
            if(!response.ok) throw new Error("HTTP error: "+response.status);
            const data=await response.json();
            output.textContent=JSON.stringify(data,null,2);
        }
        catch(error){
            output.textContent="Error: "+error.message;
        }
    }
);