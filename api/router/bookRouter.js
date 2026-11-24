const express=require("express")
const router=express.Router()
const {AddBook}=require("../controller/bookController") //destructuring

router.route("/").get(AddBook).post(AddBook)
// router.route("/:id").get(DeleteOne).delete(DeleteOne)

module.exports=router