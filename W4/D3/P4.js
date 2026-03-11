const jsonOutput=document.getElementById("jsonOutput");

document.getElementById("saveBtn").addEventListener("click",
    function(){
        const user={
            Id:101,
            Name:"Kavya",
            Role:"Full stack deveplor",
            Skills:["HTML","Css","java"]
        };
        localStorage.setItem("userProfile",JSON.stringify(user));
        jsonOutput.textContent="User object saved as string to localStorage";
    }
);

document.getElementById("readBtn").addEventListener("click",
    function(){
    //    const user=localStorage.getItem("user");
    //    jsonOutput.textContent="Data:"+user;
    const up=localStorage.getItem("userProfile");
    console.log(JSON.parse(up));
    console.log(up);
    jsonOutput.textContent="userProfile"+up;
    }
);