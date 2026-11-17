const GetAll=(req,res)=>{
    res.json({message:" fetched all data"})
}
const CreateOne=(req,res)=>{

      const {name,task}=req.body
      const datas={
        name:name,
        task:task
      }

    res.json({datas})
}

const DeleteOne=(req,res)=>{
    res.json({message:"deleted one"})
}

module.exports={GetAll,CreateOne,DeleteOne}