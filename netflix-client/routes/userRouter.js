const express = require('express')
const { register, login, Refresh, Logout } = require('../controller/userController')
const router = express.Router()

router.post("/login",login)
router.post("/register",register)
router.post("/refresh",Refresh)
router.post("/logout",Logout)

module.exports=router