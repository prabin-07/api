const jwt = require("jsonwebtoken")

const validate = (req,res,next)=> {
    const authHead = req.headers.authorisation;
    if(!authHead || !authHead.startsWith('Bearer')){
        const error = new Error("Please Login again")
        error.statuscode=401;
        return next(error);
    }

    const token = authHead.split(" ")[1];

    if(!token){
        const error = new Error("Token is missing");
        error.statuscode=401;
        return next(error);
    }

    jwt.verify(token,
        process.env.ACCESS_TOKEN_SECRET,
        (err,decoded)=>{
            if(err){
                const error = new Error("Invalid or Expired Token. Login again")
                error.statuscode=401;
                return next(error);
            }
            req.user= decoded.userId;
            next();
        }
    )
}

module.exports=validate;