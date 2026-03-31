// Route parameters and Query parameters
// Route parameters: capture dynamic values from the path
// Query parameters: provide optional values

const express=require("express");
const app=express();

app.get("/products/:id",function(req,res){
    res.json({
        routeParameter:req.params.id,
        queryParameters:req.query
    });
});
app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});

// to run
// route: http://localhost:4000/products/3
// query: http://localhost:4000/products/3?name=kavya&role=admin
