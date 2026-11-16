const GetAll=(req,res)=>{
    res.json({message:" fetched all data"})
}
const CreateOne=(req,res)=>{
    res.json({message:" created one data"})
}

const DeleteOne=(req,res)=>{
    res.json({message:"deleted one"})
}

module.exports={GetAll,CreateOne,DeleteOne}