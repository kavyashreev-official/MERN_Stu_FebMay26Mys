// Basics routing in Express
const express=require("express");

const app=express();

app.get("/",function(req,res){
    res.send("Home rooute in Express server");
});
app.get("/about",function(req,res){
    res.send("About rooute in Express server");
});
app.get("/products",function(req,res){
    res.send("Products rooute in Express server");
});

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});