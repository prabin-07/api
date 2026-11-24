const express = require('express')
const app = express()
const connect = require("./config")
const errorHandler = require("./middleware/errorHandler")
const cookieParser = require("cookie-parser") 
require("dotenv").config()
connect()

app.use(cookieParser())
const port = process.env.PORT

app.use('/api/user',require('./controller/userController'))

app.use(errorHandler)
app.listen(port, ()=> {
    console.log("Listening to port")
})