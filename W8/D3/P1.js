// Validation and schema constraints

const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    age:{type: Number, min:18},
    role:{type: String,
        enum: ["admin","user","manager"]
    },
    email:{
        type: String,
        match: /.+@.+\..+/       
        // .-multiple occurrences +- one occurrences \.-escape charater
        // ex: word@dominname.com/ .co.in / .org /.edu.in
    }
});
const User=mongoose.model("HookValidationUser",userSchema);

async function runValidationDemo() {
    try{
        // const invalidUser=new User({
        //     age:15,
        //     role:"guest",
        //     email:"notvalidemail"
        // });

        // await invalidUser.validate();
        const validUser= new User({
            name:"Kavya",
            age:20,
            role:"admin",
            email:"k@r.com"
        });
        await validUser.validate();
        console.log("Validation successfull");
        console.log(validUser);
    }
    catch(error){
        console.log("Validation errors found:");

        for(const fieldName in error.errors){
            console.log(fieldName+":",error.errors[fieldName].message);
        }
    }
}
runValidationDemo();