const signupForm=document.getElementById("signupForm");
const signupEmail=document.getElementById("signupEmail");
const signupPassword=document.getElementById("signupPassword");
const message=document.getElementById("message");

signupForm.addEventListener("submit",
    function(event){   //event:it is object has many events
        event.preventDefault();

        const email=signupEmail.value.trim();
        if(!email){
            message.textContent="Email is required";
            message.style.color="red";
            signupEmail.focus();
            return;
        }
        if(!email.includes('@') || !email.includes('.')){
            message.textContent="Please enter valid email id";
            message.style.color="red";
            signupEmail.focus();
            return;
        }

        // Password validation
        const password=signupPassword.value; //accessing value of password
        console.log(signupForm.elements.signupPassword.value); //another method to access value
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
        message.textContent="Valid email and password entered.";
        message.style.color="green";
        console.log("Success!",{email,password:"*****Hidden******"});
    }
);

// clear message on input 
signupEmail.addEventListener("input",()=>message.textContent="");
signupPassword.addEventListener("input",()=>message.textContent="");
