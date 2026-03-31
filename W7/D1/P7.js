// Built-in Middleware 
const express=require("express");

const app=express();

// app.use()-when middleware is used
app.use(express.json());

// express.urlencoded() parses form-style data
// extended:false is a beginner friendly config
app.use(express.urlencoded({extended:false}));

app.post("/api/users",function(req,res){
    res.status(201).json({
        success:true,
        parsedBody:req.body
    });
});

app.post("/form",function(req,res){
    res.json({
        success:true,
        FormData:req.body
    });
});

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});

// to run
// 1./api/users==curl -X POST http://localhost:4000/api/users 
//     -H "ContentType":"application/json" -d "{\"Name\":\"Kavya\",\"Role\":\"Admin\"}"
// o/p =={"success":true,"parsedBody":{"{\"Name\":\"Kavya\",\"Role\":\"Admin\"}":""}}
// 2 /form==curl -X POST http://localhost:4000/form 
//      -H "ContentType":"application/x-www-form-urlencoded" -d "Name=Kavya&Role=Admin"
// o/p=={"success":true,"FormData":{"Name":"Kavya","Role":"Admin"}}