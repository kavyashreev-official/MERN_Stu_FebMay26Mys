// Pre-remove hook

const mongoose=require("mongoose");

async function runRemoveHookDemo() {
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/hooks");
        const courseSchema=new mongoose.Schema({
            title:String,
            tag:String
        });
        // if using mongoose version less than 9 then "remove", if greater than 9 then "deleteOne"
        courseSchema.pre("deleteOne",{
            document:true,query:false
        },function(){
            console.log("Pre-delete hook,",this.title,);
        },);
        const Course=mongoose.models.HookCourse || mongoose.model("HookCourse",courseSchema);
        const course=new Course({
            title:"Database design basics",
            tag:"remove-hook-delete"
        });
        // await course.save();
        // console.log("Document save successfully.");

        await Course.deleteOne({title:"Database design basics"});
        console.log("Document deleted successfully");

        await mongoose.connection.close();
        console.log("Connection closed.");

    }
    catch(error){
        console.log("Remove hook error",error.message)
    }
}
runRemoveHookDemo();