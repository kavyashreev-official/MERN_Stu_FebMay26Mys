// Third party middleware
// Third party middleware are available at npm registry

const express=require("express");
// Middleware 
const morgan=require("morgan");
// cors is used to 
const cors=require("cors");

const app=express();

// dev- used development phase
app.use(morgan("dev"));
// used even production( i.e while using in live also)
app.use(cors());

app.get("/",function(req,res){
    res.json({
        message:"Third-party middleware executed before this response"
    });
});
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});
