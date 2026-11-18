const user = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const login = async (req,res) =>{
    let {email,password} = req.body
    if(!email || !password){
        let error=new Error("All field required");
        error.statusCode=400;
        throw error;
    }
    let User= await user.findOne({email:email})
    if(!User){
        let error= new Error("Invalid email!")
        error.statusCode=400
        throw error
    }
    let match=await bcrypt.compare(password,User.password)
    if(!match){
        let error = new Error("Invalid Password")
        error.statusCode=400
        throw error
    }

    const accessToken = jwt.sign({
        user:{
            username : User.username,
            email : User.email,
            id : User._id,
            tokentype : "access"
        }
    },
    process.env.ACCESSTOKEN,
    {expiresIn:"15min"}
    );

    const refreshToken = jwt.sign({ //creates jwt token
        userid:User._id,
        tokentype : "refresh"
    },
    process.env.REFRESH,
    {expiresIn:"7d"}
    );

    res.cookie("refreshtoken", refreshToken,{
        httpOnly:true,
        secure: true,
        sameSite:"lax",
        maxAge:7*24*60*60*1000
    });

    res.status(200).json({
        message:"Login Successful",
        accessToken
    });
}

const register = async (req,res) =>{
    const {username,email,password} = req.body
    if(!username || !email || !password){
        const error = new Error("all fields are required")
        error.statusCode = 400
        throw error
    }
    const existUser = await user.findOne({email})
    if(existUser){
        const error = new Error("Email already Exist")
        error.statusCode = 400
        throw error
    }
    const hashpass = await bcrypt.hash(password,10)
    const userdata = await user.create({
        username,email,password:hashpass
    })
    res.json(userdata)
}



module.exports = {login,register}