const express=require('express')
const router=express.Router()
const {login,register,Logout, Refresh} = require('../controller/userController')

router.post("/register",register)
router.post("/login",login)
router.post("/logout",Logout)
router.post("/refresh",Refresh)

module.exports=router