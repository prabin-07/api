const express=require("express")
const app=express()
const connect = require("./config")
const errorHandler = require("./middleware/errorHandler")
require("dotenv").config()
connect()

const port=process.env.PORT
app.use(express.json())


app.use("/api/task",require("./router/taskRouter"))
app.use("/api/user",require("./router/userRoute"))

app.use(errorHandler)
app.listen(port,()=>{
    console.log(" server running")
})