// Generating token using login function and verifying the token
const jwt = require("jsonwebtoken");
const secertKey = "monkey123";
const wrongSecertKey = "donkey123";

function loginUser(email, password) {
    if (email === "correct@email.com" && password === "mp123") {
        const token = jwt.sign(
            {
                userId: 101,
                email: email,
                role: "student"
            }, secertKey, { expiresIn: "1h" });
        return {
            success: true,
            token: token
        };
    }
    return {
        success: false,
        message: "Invaild Credentials"
    };
}
const loginResult = loginUser("correct@email.com", "mp123");
console.log("Login Result:", loginResult);

if (loginResult.success) {
    try {
        const verifiedPayload = jwt.verify(loginResult.token, wrongSecertKey);
        console.log("Verified Payload:", verifiedPayload);
    }
    catch (error) {
        console.log("Verification failure:", error.message);
    }
}