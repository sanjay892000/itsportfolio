require('dotenv').config();
const jwt = require('jsonwebtoken');

const isVerifyToken = (req, res, next) => {

    const token = req.header('auth-token');
    console.log(token)  // Check if token is present in the request header
    if (!token) {
        return res.status(401).json({
            success: false,
            message: 'Unauthorized! Please login to continue.'
        });
    }

    // Verify the token using the secret key
   let user = jwt.verify(token, process.env.JWT_SECRET);
   console.log(user)
    if (!user) {
        return res.status(401).json({
            success: false,
            message: 'Invalid token! Please login to continue.'
        });
    }
    req.user = user; 
    next(); 

}

module.exports = isVerifyToken;
