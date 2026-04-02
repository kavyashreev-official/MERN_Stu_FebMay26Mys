// JWT flow with login, refresh-style logic ans secure verification
const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
const secertKey = "Mysecretkey";
const refreshSecertKey = "MyNewsecretkey";

// in-memory storage for refresh token
const refreshTokens = [];

function authenticateAccessToken(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Bearer token is missing."
        });
    }
    try {
        req.user = jwt.verify(token.secertKey,{
                algorithms: ["HS256"],
                issuer: "jwt-example"
            });
        next();
    }
    catch (error) {
        if (error.name === "TokenExpiredError") {
            return res.status(401).json({
                success: false,
                message: "Access token has expired."
            });
        }
        return res.status(401).json({
            success: false,
            message: "Access token is invalid"
        });
    }
}

app.post("/login", function (req, res) {
    const { email, password } = req.body;
    if (email !== "email@email.com" || password !== "pass@123") {
        return res.status(401).json({
            success: false,
            message: "Invalid Credentials."
        });
    }
    const accessToken = jwt.sign({
        userId: 101,
        email: email,
        role: "member"
    }, secertKey, {
        expiresIn: "10m",
        algorithm: "HS256",
        issuer: "jwt - exapmle"
    });


    const refreshToken = jwt.sign({
        userId: 101,
        email: email
    }, refreshSecertKey,
        {
            expiresIn:"10d",  // expiresIn:"10d",  d: days m:mins h:hours
            algorithm: "HS256",
            issuer: "jwt-example"
        });
    refreshTokens.push(refreshToken);
    res.json({
        success: true,
        message: "Login successful",
        accessToken: accessToken,
        refreshToken: refreshToken
    });
});

app.post("/refresh", function (req, res) {
    const { refreshToken } = req.body;
    if (!refreshToken || !refreshTokens.includes(refreshToken)) {
        return res.status(401).json({
            success: false,
            message: "Refresh token is missing or invalid"
        });
    }
    try {
        const decoded = jwt.verify(refreshToken, refreshSecertKey,
            {
                algorithms: ["HS256"],
                issuer: "jwt-example"
            }
        );
        const newAccessToken = jwt.sign({
            userId: decoded.userId,
            email: decoded.email,
            role: "member"
        }, secertKey,
            {
                expiresIn: "15m",
                algorithm: "HS256",
                issuer: "jwt - exapmle"
            });
        res.json({
            success: true,
            accessToken: newAccessToken
        });
    }
    catch (error) {
        res.status(403).json({
            success: false,
            message: "Refresh token verification failed."
        });
    }
});
app.get("/me",authenticateAccessToken,function(req,res){
    res.json({
        success:true,
        message:"Protected user route",
        user:req.user
    });
});

app.listen(4000,function(){
    console.log("JWT demo server running at http://localhost:4000");
});