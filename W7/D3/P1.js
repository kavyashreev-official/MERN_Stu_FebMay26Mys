// Handling Synchronous errors
const express=require("express");
const { error } = require("node:console");
const { message } = require("statuses");
const app=express();

app.get("/",function(req,res){
    res.send("Visit /check?id=10 or /check without id")
});
app.get("/check",function(req,res,next){
    try{   //Synchronous validation check
        if(!req.query.id){
            throw new Error("Query parameter 'id' id required.");
        }
        res.json({
            success:true,
            id:req.query.id
        });
    }
    catch(error){
        // Forwarding the error to centralized error middleware
        next(error);
    }
});
// Centralized error handling middleware
app.use(function(req,res,next){
    res.status(400).json({
        success:false,
        message:error.message
    });
});

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});