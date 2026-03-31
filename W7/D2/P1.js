// Routing: Nested routes
// "/" base url
// "/api/users"

const express=require("express");
const { message } = require("statuses");
const app=express();

// Router objects helps organize route Groups
const apiRouter=express.Router();

apiRouter.get("/users",function(req,res){
    res.json({
        route:"/api/users",
        message:"Users route inside api router"
    });
});
apiRouter.get("/orders",function(req,res){
    res.json({
        route:"/api/orders",
        message:"Orders route inside api router"
    });
});

// Mounting the router under /api base path
app.use("/api",apiRouter);

app.listen(4000,function(){
    console.log("Express server running at http://localhost:4000");
});

// New Router
// products router (handles /api/products/...)
const productsRouter=express.Router();

// /api/products  ->create product
productsRouter.post("/",(req,res)=>{
    res.json({
        route:"/api/products",
        message:"Create products"
    });
});

// /api/products/:id  ->delete product
productsRouter.delete("/:id",(req,res)=>{
    res.json({
        route:`/api/products/${req.params.id}`,
        message:"Delete product"
    });
});

// Mount products router under /api/products
apiRouter.use("/products",productsRouter);


// to run
// curl-Client URL
//1) To create: curl -X POST http://localhost:4000/api/products 
//    -H "ContentType":"application/json" -d "{"Name":"Pen","Price":10}"
// 2) To delete: curl -X DELETE http://localhost:4000/api/products/1