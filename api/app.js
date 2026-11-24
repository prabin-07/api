const express=require("express")
const app=express()
const connect = require("./config")
const errorHandler = require("./middleware/errorHandler")
const cookieParser = require("cookie-parser") 
require("dotenv").config()
connect()

const port=process.env.PORT
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.use("/api/books",require("./router/bookRouter"))
app.use("/api/user",require("./router/userRoute"))

app.use(errorHandler)
app.listen(port,()=>{
    console.log(" server running")
})