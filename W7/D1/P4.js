//Middleware usage in Express
//Middleware: runs during the request-response cycle
// Middleware can inspect or change the request before a route responds
//next() passes control to the next step

const express=require("express");
const app=express();

// app.use registers middleware.
//The middleware runs for every including request.
app.use(function(req,res,next){
    console.log("Request received",req.method,req.url);
    //next() is required when this middleware does not finish
    next();
});
app.get("/",function(req,res){
    // res.send() sends a response body and ends the request autmatically
    res.send("Middelware excuted before the route");
});
//listen() starts the server on a chosen port number 
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});
