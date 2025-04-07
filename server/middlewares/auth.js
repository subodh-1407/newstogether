const User = require("../models/User") ;
require("dotenv").config() ;
const jwt = require("jsonwebtoken") ;

exports.auth = async(req, res, next) => {
    try{    
        
        // extract token

        console.log("Cookies : ", req.cookies.token) ;
        console.log("Body : ", req.body.token) ;
        console.log(req.header("Authorization")) ;
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ", "");

        console.log("token : ", token) ;

        // if token missing then return response
        if(!token){
            return res.status(401).json({
                success: false,
                message: "Token is missing" 
            }) ;
        }

        // verify the token
        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET) ;
            console.log("Decode : ", decode) ;

            req.user = decode ;
        }catch(err){
            // verification issue
            console.log(err.message) ;
            return res.status(401).json({
                success: false,
                message: "Token is invalid"
            }) ;
        }
        next() ;
        
    }catch(err){
        console.error(err) ;
        console.log(err.message) ;
        return res.status(403).json({
            success: false,
            message: "Something went wrong while validating the token"
        }) ;
    }
}