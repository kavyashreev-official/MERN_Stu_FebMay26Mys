// Middleware for request log

function loggerMiddleware(req,res,next){
    console.log(`${req.method} ${req.originalUrl}`);
    next();
}
module.exports=loggerMiddleware;

// task: write the log to a file along with timestap with both req & res