const express=require("express")
const app=express()
const connect = require("./config")
require("dotenv").config()
connect()

const port=process.env.PORT
app.use(express.json())

app.use("/api/task",require("./router/taskRouter"))
app.listen(port,()=>{
    console.log(" server running")
})