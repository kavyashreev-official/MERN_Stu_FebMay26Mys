const livePassword=document.getElementById("livePassword");
const message=document.getElementById("message");

livePassword.addEventListener("input",function(){
    // Password validation
        const password=livePassword.value;
        if(!password){
            message.textContent="Password is required";
            message.style.color="red";
            livePassword.focus();
            return;
        }
        // check length of password
        if(password.length<8){
            message.textContent="Password must be atleast 8 charaters long";
            message.style.color="red";
            livePassword.focus();
            return;
        }
        // check UPPERCASE characters  /:
        if(!/[A-Z]/.test(password)){
            message.textContent="Password must have atleast one UPPERCASE character";
            message.style.color="red";
            livePassword.focus();
            return;
        }
        // check lowercase characters
        if(!/[a-z]/.test(password)){
            message.textContent="Password must have atleast one lowercase character";
            message.style.color="red";
            livePassword.focus();
            return;
        }
        // check number in it
        if(!/\d/.test(password)){
            message.textContent="Password must have atleast one digit";
            message.style.color="red";
            livePassword.focus();
            return;
        }
        // check special characters
        if(!/[@#$%&*!]/){
            message.textContent="Password must have atleast one special character @#$%&*!";
            message.style.color="red";
            livePassword.focus();
            return;
        }
        message.textContent="Valid email and password entered.";
        message.style.color="green";
        console.log("Success!",{password});
})