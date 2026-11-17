const express=require("express")
const router=express.Router()
const {GetAll,CreateOne,DeleteOne}=require("../controller/taskController") //destructuring

router.route("/").get(GetAll).post(CreateOne)
router.route("/:id").get(DeleteOne).delete(DeleteOne)

module.exports=router