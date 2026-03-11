const signupForm=document.getElementById("signupForm");
const signupPassword=document.getElementById("signupPassword");
const signupConfirm=document.getElementById("signupConfirm");
const message=document.getElementById("message");

signupForm.addEventListener("submit",
    function(e){             //event:it is object has many events
        e.preventDefault();

        // Password validation
        const password=signupPassword.value; //accessing value of password
        if(!password){
            message.textContent="Password is required";
            message.style.color="red";
            signupPassword.focus();
            return;
        }
        // check length of password
        if(password.length<8){
            message.textContent="Password must be atleast 8 charaters long";
            message.style.color="red";
            signupPassword.focus();
            return;
        }
        // check UPPERCASE characters  /:
        if(!/[A-Z]/.test(password)){
            message.textContent="Password must have atleast one UPPERCASE character";
            message.style.color="red";
            signupPassword.focus();
            return;
        }
        // check lowercase characters
        if(!/[a-z]/.test(password)){
            message.textContent="Password must have atleast one lowercase character";
            message.style.color="red";
            signupPassword.focus();
            return;
        }
        // check number in it
        if(!/\d/.test(password)){
            message.textContent="Password must have atleast one digit";
            message.style.color="red";
            signupPassword.focus();
            return;
        }
        // check special characters
        if(!/[@#$%&*!]/){
            message.textContent="Password must have atleast one special character @#$%&*!";
            message.style.color="red";
            signupPassword.focus();
            return;
        }

        const confirm=signupConfirm.value;
        if(password===confirm){
            message.innerHTML="Valid password entered.";
            message.style.color="green";
            console.log("Success!");
        }
        else{
            message.textContent="Incorrect Password";
            message.style.color="red";
            console.log("incorrect password");
        }         
        
    }
);
     
       

        